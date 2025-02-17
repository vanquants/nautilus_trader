# -------------------------------------------------------------------------------------------------
#  Copyright (C) 2015-2022 Nautech Systems Pty Ltd. All rights reserved.
#  https://nautechsystems.io
#
#  Licensed under the GNU Lesser General Public License Version 3.0 (the "License");
#  You may not use this file except in compliance with the License.
#  You may obtain a copy of the License at https://www.gnu.org/licenses/lgpl-3.0.en.html
#
#  Unless required by applicable law or agreed to in writing, software
#  distributed under the License is distributed on an "AS IS" BASIS,
#  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
#  See the License for the specific language governing permissions and
#  limitations under the License.
# -------------------------------------------------------------------------------------------------

import os
import pathlib
import platform
from typing import Callable, Dict, List, Optional, Union

import fsspec
import pandas as pd
import pyarrow as pa
import pyarrow.dataset as ds
import pyarrow.parquet as pq
from fsspec.utils import infer_storage_options
from pyarrow import ArrowInvalid

from nautilus_trader.core.inspect import is_nautilus_class
from nautilus_trader.model.data.bar import Bar
from nautilus_trader.model.data.base import DataType
from nautilus_trader.model.data.base import GenericData
from nautilus_trader.model.data.tick import QuoteTick
from nautilus_trader.model.data.tick import TradeTick
from nautilus_trader.model.data.ticker import Ticker
from nautilus_trader.model.data.venue import InstrumentStatusUpdate
from nautilus_trader.model.instruments.base import Instrument
from nautilus_trader.model.orderbook.data import OrderBookData
from nautilus_trader.persistence.base import Singleton
from nautilus_trader.persistence.external.metadata import load_mappings
from nautilus_trader.serialization.arrow.serializer import ParquetSerializer
from nautilus_trader.serialization.arrow.serializer import list_schemas
from nautilus_trader.serialization.arrow.util import GENERIC_DATA_PREFIX
from nautilus_trader.serialization.arrow.util import camel_to_snake_case
from nautilus_trader.serialization.arrow.util import class_to_filename
from nautilus_trader.serialization.arrow.util import clean_key
from nautilus_trader.serialization.arrow.util import dict_of_lists_to_list_of_dicts


class DataCatalog(metaclass=Singleton):
    """
    Provides a queryable data catalog.

    Parameters
    ----------
    path : str
        The root path for this data catalog. Must exist and must be an absolute path.
    fs_protocol : str, default 'file'
        The fsspec filesystem protocol to use.
    fs_storage_options : Dict, optional
        The fs storage options.
    """

    def __init__(
        self,
        path: str,
        fs_protocol: str = "file",
        fs_storage_options: Optional[Dict] = None,
    ):
        self.fs_protocol = fs_protocol
        self.fs_storage_options = fs_storage_options or {}
        self.fs: fsspec.AbstractFileSystem = fsspec.filesystem(
            self.fs_protocol, **self.fs_storage_options
        )
        self.path: pathlib.Path = pathlib.Path(path)

    @classmethod
    def from_env(cls):
        return cls.from_uri(uri=os.path.join(os.environ["NAUTILUS_PATH"], "catalog"))

    @classmethod
    def from_uri(cls, uri):
        if "://" not in uri:
            # Assume a local path
            uri = "file://" + uri
        parsed = infer_storage_options(uri)
        path = parsed.pop("path")
        protocol = parsed.pop("protocol")
        storage_options = parsed.copy()
        return cls(path=path, fs_protocol=protocol, fs_storage_options=storage_options)

    # -- QUERIES -----------------------------------------------------------------------------------

    def _query(
        self,
        cls: type,
        filter_expr: Optional[Callable] = None,
        instrument_ids=None,
        start=None,
        end=None,
        ts_column="ts_init",
        raise_on_empty: bool = True,
        instrument_id_column="instrument_id",
        table_kwargs: Optional[Dict] = None,
        clean_instrument_keys: bool = True,
        as_dataframe: bool = True,
        projections: Optional[Dict] = None,
        **kwargs,
    ):
        filters = [filter_expr] if filter_expr is not None else []
        if instrument_ids is not None:
            if not isinstance(instrument_ids, list):
                instrument_ids = [instrument_ids]
            if clean_instrument_keys:
                instrument_ids = list(set(map(clean_key, instrument_ids)))
            filters.append(ds.field(instrument_id_column).cast("string").isin(instrument_ids))
        if start is not None:
            filters.append(ds.field(ts_column) >= int(pd.Timestamp(start).to_datetime64()))
        if end is not None:
            filters.append(ds.field(ts_column) <= int(pd.Timestamp(end).to_datetime64()))

        full_path = str(self._make_path(cls=cls))
        if not (self.fs.exists(full_path) or self.fs.isdir(full_path)):
            if raise_on_empty:
                raise FileNotFoundError(f"protocol={self.fs.protocol}, path={full_path}")
            else:
                return pd.DataFrame() if as_dataframe else None

        dataset = ds.dataset(full_path, partitioning="hive", filesystem=self.fs)
        table_kwargs = table_kwargs or {}
        if projections:
            projected = {**{c: ds.field(c) for c in dataset.schema.names}, **projections}
            table_kwargs.update(columns=projected)
        table = dataset.to_table(filter=combine_filters(*filters), **(table_kwargs or {}))
        mappings = self.load_inverse_mappings(path=full_path)
        if as_dataframe:
            return self._handle_table_dataframe(
                table=table, mappings=mappings, raise_on_empty=raise_on_empty, **kwargs
            )
        else:
            return self._handle_table_nautilus(table=table, cls=cls, mappings=mappings)

    def load_inverse_mappings(self, path):
        mappings = load_mappings(fs=self.fs, path=path)
        for key in mappings:
            mappings[key] = {v: k for k, v in mappings[key].items()}
        return mappings

    @staticmethod
    def _handle_table_dataframe(
        table: pa.Table,
        mappings: Optional[Dict],
        raise_on_empty: bool = True,
        sort_columns: Optional[List] = None,
        as_type: Optional[Dict] = None,
    ):
        df = table.to_pandas().drop_duplicates()
        for col in mappings:
            df.loc[:, col] = df[col].map(mappings[col])

        if df.empty and raise_on_empty:
            local_vars = dict(locals())
            kw = [f"{k}={local_vars[k]}" for k in ("filter_expr", "instrument_ids", "start", "end")]
            raise ValueError(f"Data empty for {kw}")
        if sort_columns:
            df = df.sort_values(sort_columns)
        if as_type:
            df = df.astype(as_type)
        return df

    @staticmethod
    def _handle_table_nautilus(
        table: Union[pa.Table, pd.DataFrame], cls: type, mappings: Optional[Dict]
    ):
        if isinstance(table, pa.Table):
            dicts = dict_of_lists_to_list_of_dicts(table.to_pydict())
        elif isinstance(table, pd.DataFrame):
            dicts = table.to_dict("records")
        else:
            raise TypeError(
                f"`table` was {type(table)}, expected `pyarrow.Table` or `pandas.DataFrame`"
            )
        if not dicts:
            return []
        for key, maps in mappings.items():
            for d in dicts:
                if d[key] in maps:
                    d[key] = maps[d[key]]
        data = ParquetSerializer.deserialize(cls=cls, chunk=dicts)
        return data

    def _make_path(self, cls: type) -> str:
        path: pathlib.Path = self.path / "data" / f"{class_to_filename(cls=cls)}.parquet"
        return str(resolve_path(path=path, fs=self.fs))

    def query(
        self,
        cls: type,
        filter_expr: Optional[Callable] = None,
        instrument_ids=None,
        as_nautilus: bool = False,
        sort_columns: Optional[List[str]] = None,
        as_type: Optional[Dict] = None,
        **kwargs,
    ):
        if not is_nautilus_class(cls):
            # Special handling for generic data
            return self.generic_data(
                cls=cls,
                filter_expr=filter_expr,
                instrument_ids=instrument_ids,
                as_nautilus=as_nautilus,
                **kwargs,
            )
        return self._query(
            cls=cls,
            filter_expr=filter_expr,
            instrument_ids=instrument_ids,
            sort_columns=sort_columns,
            as_type=as_type,
            as_dataframe=not as_nautilus,
            **kwargs,
        )

    def _query_subclasses(
        self,
        base_cls: type,
        filter_expr: Optional[Callable] = None,
        instrument_ids=None,
        as_nautilus: bool = False,
        **kwargs,
    ):
        subclasses = [base_cls] + base_cls.__subclasses__()

        dfs = []
        for cls in subclasses:
            try:
                df = self._query(
                    cls=cls,
                    filter_expr=filter_expr,
                    instrument_ids=instrument_ids,
                    raise_on_empty=False,
                    as_dataframe=not as_nautilus,
                    **kwargs,
                )
                dfs.append(df)
            except ArrowInvalid as ex:
                # If we're using a `filter_expr` here, there's a good chance
                # this error is using a filter that is specific to one set of
                # instruments and not to others, so we ignore it (if not; raise).
                if filter_expr is not None:
                    continue
                else:
                    raise ex

        if not as_nautilus:
            return pd.concat([df for df in dfs if df is not None])
        else:
            objects = [o for objs in filter(None, dfs) for o in objs]
            return objects

    def instruments(
        self,
        instrument_type: Optional[type] = None,
        instrument_ids=None,
        filter_expr: Optional[Callable] = None,
        as_nautilus: bool = False,
        **kwargs,
    ):
        if instrument_type is not None:
            assert isinstance(instrument_type, type)
            base_cls = instrument_type
        else:
            base_cls = Instrument

        return self._query_subclasses(
            base_cls=base_cls,
            instrument_ids=instrument_ids,
            filter_expr=filter_expr,
            as_nautilus=as_nautilus,
            instrument_id_column="id",
            clean_instrument_keys=False,
            **kwargs,
        )

    def instrument_status_updates(
        self,
        instrument_ids=None,
        filter_expr: Optional[Callable] = None,
        as_nautilus: bool = False,
        **kwargs,
    ):
        return self.query(
            cls=InstrumentStatusUpdate,
            instrument_ids=instrument_ids,
            filter_expr=filter_expr,
            as_nautilus=as_nautilus,
            sort_columns=["instrument_id", "ts_init"],
            **kwargs,
        )

    def trade_ticks(
        self,
        instrument_ids=None,
        filter_expr: Optional[Callable] = None,
        as_nautilus: bool = False,
        **kwargs,
    ):
        return self.query(
            cls=TradeTick,
            filter_expr=filter_expr,
            instrument_ids=instrument_ids,
            as_nautilus=as_nautilus,
            as_type={"price": float, "size": float},
            **kwargs,
        )

    def quote_ticks(
        self,
        instrument_ids=None,
        filter_expr: Optional[Callable] = None,
        as_nautilus: bool = False,
        **kwargs,
    ):
        return self.query(
            cls=QuoteTick,
            filter_expr=filter_expr,
            instrument_ids=instrument_ids,
            as_nautilus=as_nautilus,
            **kwargs,
        )

    def tickers(
        self,
        instrument_ids=None,
        filter_expr: Optional[Callable] = None,
        as_nautilus: bool = False,
        **kwargs,
    ):
        return self._query_subclasses(
            base_cls=Ticker,
            filter_expr=filter_expr,
            instrument_ids=instrument_ids,
            as_nautilus=as_nautilus,
            **kwargs,
        )

    def bars(
        self,
        instrument_ids=None,
        filter_expr: Optional[Callable] = None,
        as_nautilus: bool = False,
        **kwargs,
    ):
        return self._query_subclasses(
            base_cls=Bar,
            filter_expr=filter_expr,
            instrument_ids=instrument_ids,
            as_nautilus=as_nautilus,
            **kwargs,
        )

    def order_book_deltas(
        self,
        instrument_ids=None,
        filter_expr: Optional[Callable] = None,
        as_nautilus: bool = False,
        **kwargs,
    ):
        return self.query(
            cls=OrderBookData,
            filter_expr=filter_expr,
            instrument_ids=instrument_ids,
            as_nautilus=as_nautilus,
            **kwargs,
        )

    def generic_data(
        self,
        cls: type,
        filter_expr: Optional[Callable] = None,
        as_nautilus: bool = False,
        **kwargs,
    ):
        data = self._query(
            cls=cls,
            filter_expr=filter_expr,
            as_dataframe=not as_nautilus,
            **kwargs,
        )
        if as_nautilus:
            if data is None:
                return []
            return [GenericData(data_type=DataType(cls), data=d) for d in data]
        return data

    def list_data_types(self):
        glob_path = resolve_path(self.path / "data" / "*.parquet", fs=self.fs)
        return [pathlib.Path(p).stem for p in self.fs.glob(glob_path)]

    def list_generic_data_types(self):
        data_types = self.list_data_types()
        return [
            n.replace(GENERIC_DATA_PREFIX, "")
            for n in data_types
            if n.startswith(GENERIC_DATA_PREFIX)
        ]

    def list_partitions(self, cls_type: type):
        assert isinstance(cls_type, type), "`cls_type` should be type, i.e. TradeTick"
        name = class_to_filename(cls_type)
        dataset = pq.ParquetDataset(
            resolve_path(self.path / f"{name}.parquet", fs=self.fs), filesystem=self.fs
        )
        partitions = {}
        for level in dataset.partitions.levels:
            partitions[level.name] = level.keys
        return partitions

    def list_backtests(self) -> List[str]:
        glob = resolve_path(self.path / "backtest" / "*.feather", fs=self.fs)
        return [p.stem for p in map(pathlib.Path, self.fs.glob(glob))]

    def list_live_runs(self) -> List[str]:
        glob = resolve_path(self.path / "live" / "*.feather", fs=self.fs)
        return [p.stem for p in map(pathlib.Path, self.fs.glob(glob))]

    def read_live_run(self, live_run_id: str, **kwargs):
        return self._read_feather(kind="live", run_id=live_run_id, **kwargs)

    def read_backtest(self, backtest_run_id: str, **kwargs):
        return self._read_feather(kind="backtest", run_id=backtest_run_id, **kwargs)

    def _read_feather(self, kind: str, run_id: str, raise_on_failed_deserialize: bool = False):
        class_mapping: Dict[str, type] = {class_to_filename(cls): cls for cls in list_schemas()}
        data = {}
        glob_path = resolve_path(self.path / kind / f"{run_id}.feather" / "*.feather", fs=self.fs)
        for path in [p for p in self.fs.glob(glob_path)]:
            cls_name = camel_to_snake_case(pathlib.Path(path).stem).replace("__", "_")
            df = read_feather_file(path=path, fs=self.fs)
            if df is None:
                print(f"No data for {cls_name}")
                continue
            # Apply post read fixes
            try:
                objs = self._handle_table_nautilus(
                    table=df, cls=class_mapping[cls_name], mappings={}
                )
                data[cls_name] = objs
            except Exception as ex:
                if raise_on_failed_deserialize:
                    raise
                print(f"Failed to deserialize {cls_name}: {ex}")
        return sorted(sum(data.values(), list()), key=lambda x: x.ts_init)


def read_feather_file(path: str, fs: fsspec.AbstractFileSystem = None):
    fs = fs or fsspec.filesystem("file")
    if not fs.exists(path):
        return
    try:
        with fs.open(path) as f:
            reader = pa.ipc.open_stream(f)
            return reader.read_pandas()
    except (pa.ArrowInvalid, FileNotFoundError):
        return


def combine_filters(*filters):
    filters = tuple(x for x in filters if x is not None)
    if len(filters) == 0:
        return
    elif len(filters) == 1:
        return filters[0]
    else:
        expr = filters[0]
        for f in filters[1:]:
            expr = expr & f
        return expr


def _should_use_windows_paths(fs: fsspec.filesystem) -> bool:
    """
    Pathlib will try and use windows style paths even when a fsspec.filesystem does not (memory, s3, etc).

    We need to determine the case when we should use windows paths, which is when we are on windows and using a
    fsspec.filesystem that is local.

    """
    from fsspec.implementations.local import LocalFileSystem

    try:
        from fsspec.implementations.smb import SMBFileSystem
    except ImportError:
        SMBFileSystem = LocalFileSystem

    is_windows = platform.system() == "Windows"
    is_windows_local_fs = isinstance(fs, (LocalFileSystem, SMBFileSystem))
    return is_windows and is_windows_local_fs


def resolve_path(path: pathlib.Path, fs: fsspec.filesystem) -> str:
    if _should_use_windows_paths(fs=fs):
        return str(path)
    else:
        return path.as_posix()
