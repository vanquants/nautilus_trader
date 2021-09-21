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

import re

from nautilus.api.core cimport uuid4_free
from nautilus.api.core cimport uuid4_from_raw
from nautilus.api.core cimport uuid4_new
from nautilus.api.core cimport uuid4_to_bytes
from nautilus_trader.core.correctness cimport Condition


_UUID_REGEX = re.compile("[0-F]{8}-([0-F]{4}-){3}[0-F]{12}", re.I)


cdef class UUID4:
    """
    Represents a pseudo-random UUID (universally unique identifier) version 4
    based on a 128-bit label as specified in RFC 4122.

    References
    ----------
    https://en.wikipedia.org/wiki/Universally_unique_identifier
    """

    def __init__(self, str value=None):
        """
        Initialize a new instance of the ``UUID4`` class.

        Parameters
        ----------
        value : str, optional
            The UUID value. If ``None`` then a value will be generated.

        Raises
        ------
        ValueError
            If value is not ``None`` and not a valid UUID.

        """
        if value is None:
            # Create a new UUID4 from rust
            self._uuid4 = uuid4_new()
            return

        Condition.true(_UUID_REGEX.match(value), "value is not a valid UUID")
        cdef bytes value_bytes = value.encode("utf-8")
        self._uuid4 = uuid4_from_raw(<char *>value_bytes)

    def __eq__(self, UUID4 other) -> bool:
        return self.value == other.value

    def __hash__(self) -> int:
        return hash(self.value)

    def __str__(self) -> str:
        return self.value

    def __repr__(self) -> str:
        cdef bytes encoded = <bytes>uuid4_to_bytes(&self._uuid4)
        return f"{type(self).__name__}('{encoded.decode()}')"

    def __del__(self) -> None:
        # Free memory allocated by rust
        uuid4_free(self._uuid4)

    @property
    def value(self) -> str:
        cdef bytes encoded = <bytes>uuid4_to_bytes(&self._uuid4)
        return encoded.decode()
