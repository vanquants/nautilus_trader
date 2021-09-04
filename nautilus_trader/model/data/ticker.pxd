# -------------------------------------------------------------------------------------------------
#  Copyright (C) 2015-2021 Nautech Systems Pty Ltd. All rights reserved.
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

from nautilus_trader.core.data cimport Data
from nautilus_trader.model.identifiers cimport InstrumentId


cdef class Ticker(Data):
    cdef readonly InstrumentId instrument_id
    """The ticker instrument ID.\n\n:returns: `InstrumentId`"""
    cdef readonly dict info
    """The additional ticker information.\n\n:returns: `dict[str, object]`"""

    @staticmethod
    cdef Ticker from_dict_c(dict values)

    @staticmethod
    cdef dict to_dict_c(Ticker obj)
