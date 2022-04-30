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

"""Defines fundamental value objects for the trading domain."""

import decimal
from typing import Union

import cython

from cpython.object cimport Py_EQ
from cpython.object cimport Py_GE
from cpython.object cimport Py_GT
from cpython.object cimport Py_LE
from cpython.object cimport Py_LT
from cpython.object cimport PyObject_RichCompareBool
from libc.stdint cimport int64_t
from libc.stdint cimport uint8_t
from libc.stdint cimport uint64_t

from nautilus_trader.core.correctness cimport Condition
from nautilus_trader.core.rust.model cimport FIXED_SCALAR
from nautilus_trader.core.rust.model cimport Currency_t
from nautilus_trader.core.rust.model cimport money_free
from nautilus_trader.core.rust.model cimport money_from_raw
from nautilus_trader.core.rust.model cimport money_new
from nautilus_trader.core.rust.model cimport price_free
from nautilus_trader.core.rust.model cimport price_from_raw
from nautilus_trader.core.rust.model cimport price_new
from nautilus_trader.core.rust.model cimport quantity_free
from nautilus_trader.core.rust.model cimport quantity_from_raw
from nautilus_trader.core.rust.model cimport quantity_new
from nautilus_trader.core.string cimport precision_from_str
from nautilus_trader.model.currency cimport Currency
from nautilus_trader.model.identifiers cimport InstrumentId


@cython.auto_pickle(True)
cdef class Quantity:
    """
    Represents a quantity with a non-negative value.

    Capable of storing either a whole number (no decimal places) of “shares”
    (securities denominated in whole units) or a decimal value containing
    decimal places for non-share quantity asset classes (securities denominated
    in fractional units).

    Parameters
    ----------
    value : integer, float, string, Decimal
        The value of the quantity.
    precision : uint8
        The precision for the quantity. Use a precision of 0 for whole numbers
        (no fractional units).

    Raises
    ------
    ValueError
        If `value` is negative (< 0).
    ValueError
        If `precision` greater than 9.
    OverflowError
        If `precision` is negative (< 0).

    References
    ----------
    https://www.onixs.biz/fix-dictionary/5.0.SP2/index.html#Qty
    """

    def __init__(self, double value, uint8_t precision):
        Condition.true(precision <= 9, "invalid precision, was > 9")
        Condition.true(value >= 0.0, f"quantity negative, was {value}")

        self._mem = quantity_new(value, precision)

    def __getstate__(self):
        return self._mem.raw, self._mem.precision

    def __setstate__(self, state):
        self._mem = quantity_from_raw(state[0], state[1])

    def __eq__(self, other) -> bool:
        return Quantity._compare(self, other, Py_EQ)

    def __lt__(self, other) -> bool:
        return Quantity._compare(self, other, Py_LT)

    def __le__(self, other) -> bool:
        return Quantity._compare(self, other, Py_LE)

    def __gt__(self, other) -> bool:
        return Quantity._compare(self, other, Py_GT)

    def __ge__(self, other) -> bool:
        return Quantity._compare(self, other, Py_GE)

    def __add__(a, b) -> Union[decimal.Decimal, float]:
        if isinstance(a, float) or isinstance(b, float):
            return float(a) + float(b)
        return Quantity._extract_decimal(a) + Quantity._extract_decimal(b)

    def __radd__(b, a) -> Union[decimal.Decimal, float]:
        if isinstance(a, float) or isinstance(b, float):
            return float(a) + float(b)
        return Quantity._extract_decimal(a) + Quantity._extract_decimal(b)

    def __sub__(a, b) -> Union[decimal.Decimal, float]:
        if isinstance(a, float) or isinstance(b, float):
            return float(a) - float(b)
        return Quantity._extract_decimal(a) - Quantity._extract_decimal(b)

    def __rsub__(b, a) -> Union[decimal.Decimal, float]:
        if isinstance(a, float) or isinstance(b, float):
            return float(a) - float(b)
        return Quantity._extract_decimal(a) - Quantity._extract_decimal(b)

    def __mul__(a, b) -> Union[decimal.Decimal, float]:
        if isinstance(a, float) or isinstance(b, float):
            return float(a) * float(b)
        return Quantity._extract_decimal(a) * Quantity._extract_decimal(b)

    def __rmul__(b, a) -> Union[decimal.Decimal, float]:
        if isinstance(a, float) or isinstance(b, float):
            return float(a) * float(b)
        return Quantity._extract_decimal(a) * Quantity._extract_decimal(b)

    def __truediv__(a, b) -> Union[decimal.Decimal, float]:
        if isinstance(a, float) or isinstance(b, float):
            return float(a) / float(b)
        return Quantity._extract_decimal(a) / Quantity._extract_decimal(b)

    def __rtruediv__(b, a) -> Union[decimal.Decimal, float]:
        if isinstance(a, float) or isinstance(b, float):
            return float(a) / float(b)
        return Quantity._extract_decimal(a) / Quantity._extract_decimal(b)

    def __floordiv__(a, b) -> Union[decimal.Decimal, float]:
        if isinstance(a, float) or isinstance(b, float):
            return float(a) // float(b)
        return Quantity._extract_decimal(a) // Quantity._extract_decimal(b)

    def __rfloordiv__(b, a) -> Union[decimal.Decimal, float]:
        if isinstance(a, float) or isinstance(b, float):
            return float(a) // float(b)
        return Quantity._extract_decimal(a) // Quantity._extract_decimal(b)

    def __mod__(a, b) -> Union[decimal.Decimal, float]:
        if isinstance(a, float) or isinstance(b, float):
            return float(a) % float(b)
        return Quantity._extract_decimal(a) % Quantity._extract_decimal(b)

    def __rmod__(b, a) -> Union[decimal.Decimal, float]:
        if isinstance(a, float) or isinstance(b, float):
            return float(a) % float(b)
        return Quantity._extract_decimal(a) * Quantity._extract_decimal(b)

    def __neg__(self) -> decimal.Decimal:
        return self.as_decimal().__neg__()

    def __pos__(self) -> decimal.Decimal:
        return self.as_decimal().__pos__()

    def __abs__(self) -> decimal.Decimal:
        return abs(self.as_decimal())

    def __round__(self, ndigits=None) -> decimal.Decimal:
        return round(self.as_decimal(), ndigits)

    def __float__(self) -> float:
        return self.as_f64_c()

    def __int__(self) -> int:
        return int(self.as_f64_c())

    def __hash__(self) -> int:
        return hash(self._mem.raw)

    def __str__(self) -> str:
        return f"{self.as_f64_c():.{self._mem.precision}f}"

    def __repr__(self) -> str:
        return f"{type(self).__name__}('{self}')"

    def __del__(self) -> None:
        # https://cython.readthedocs.io/en/latest/src/userguide/special_methods.html#finalization-methods-dealloc-and-del
        quantity_free(self._mem)  # `self._mem` moved to Rust (then dropped)

    cdef bint eq(self, Quantity other) except *:
        return self._mem.raw == other._mem.raw

    cdef bint ne(self, Quantity other) except *:
        return self._mem.raw != other._mem.raw

    cdef bint lt(self, Quantity other) except *:
        return self._mem.raw < other._mem.raw

    cdef bint le(self, Quantity other) except *:
        return self._mem.raw <= other._mem.raw

    cdef bint gt(self, Quantity other) except *:
        return self._mem.raw > other._mem.raw

    cdef bint ge(self, Quantity other) except *:
        return self._mem.raw >= other._mem.raw

    cdef bint is_zero(self) except *:
        return self._mem.raw == 0

    cdef bint is_negative(self) except *:
        return self._mem.raw < 0

    cdef bint is_positive(self) except *:
        return self._mem.raw > 0

    @staticmethod
    def from_raw(uint64_t raw, uint8_t precision):
        return Quantity.from_raw_c(raw, precision)

    @staticmethod
    cdef Quantity from_raw_c(uint64_t raw, uint8_t precision):
        cdef Quantity quantity = Quantity.__new__(Quantity)
        quantity._mem = quantity_from_raw(raw, precision)
        return quantity

    cdef uint64_t raw_uint64_c(self) except *:
        return self._mem.raw

    cdef double as_f64_c(self) except *:
        return self._mem.raw / FIXED_SCALAR

    @staticmethod
    cdef object _extract_decimal(object obj):
        assert not isinstance(obj, float)  # Design-time error
        if hasattr(obj, "as_decimal"):
            return obj.as_decimal()
        else:
            return decimal.Decimal(obj)

    @staticmethod
    cdef bint _compare(a, b, int op) except *:
        if isinstance(a, Quantity):
            a = <Quantity>a.as_decimal()
        elif isinstance(a, Price):
            a = <Price>a.as_decimal()

        if isinstance(b, Quantity):
            b = <Quantity>b.as_decimal()
        elif isinstance(b, Price):
            b = <Price>b.as_decimal()

        return PyObject_RichCompareBool(a, b, op)

    @property
    def precision(self) -> int:
        return self._mem.precision

    @staticmethod
    cdef Quantity zero_c(uint8_t precision):
        return Quantity(0, precision)

    @staticmethod
    cdef Quantity from_str_c(str value):
        cdef uint8_t precision = precision_from_str(value)
        Condition.true(precision <= 9, "invalid precision, was > 9")
        return Quantity(float(value), precision=precision)

    @staticmethod
    cdef Quantity from_int_c(int value):
        return Quantity(value, precision=0)

    @staticmethod
    def zero(uint8_t precision=0) -> Quantity:
        """
        Return a quantity with a value of zero.

        precision : uint8, default 0
            The precision for the quantity.

        Returns
        -------
        Quantity

        Raises
        ------
        OverflowError
            If `precision` is negative (< 0).

        Warnings
        --------
        The default precision is zero.

        """
        return Quantity.zero_c(precision)

    @staticmethod
    def from_str(str value) -> Quantity:
        """
        Return a quantity parsed from the given string.

        Parameters
        ----------
        value : str
            The value to parse.

        Returns
        -------
        Quantity

        Warnings
        --------
        The decimal precision will be inferred from the number of digits
        following the '.' point (if no point then precision zero).

        Raises
        ------
        ValueError
            If inferred precision greater than 9.

        """
        Condition.not_none(value, "value")

        return Quantity.from_str_c(value)

    @staticmethod
    def from_int(int value) -> Quantity:
        """
        Return a quantity from the given integer value.

        A precision of zero will be inferred.

        Parameters
        ----------
        value : int
            The value for the quantity.

        Returns
        -------
        Quantity

        """
        Condition.not_none(value, "value")

        return Quantity.from_int_c(value)

    cpdef str to_str(self):
        """
        Return the formatted string representation of the quantity.

        Returns
        -------
        str

        """
        return f"{self.as_f64_c():,.{self._mem.precision}f}".replace(",", "_")

    cdef Quantity add(self, Quantity other):
        cdef int64_t raw = self._mem.raw + other.raw_int64_c()
        return Quantity.from_raw_c(raw, self._mem.precision)

    cdef Quantity sub(self, Quantity other):
        cdef int64_t raw = self._mem.raw - other.raw_int64_c()
        return Quantity.from_raw_c(raw, self._mem.precision)

    cdef void add_assign(self, Quantity other) except *:
        self._mem.raw += other.raw_uint64_c()
        if self._mem.precision == 0:
            self._mem.precision = other.precision

    cdef void sub_assign(self, Quantity other) except *:
        self._mem.raw -= other.raw_uint64_c()
        if self._mem.precision == 0:
            self._mem.precision = other.precision

    cpdef object as_decimal(self):
        """
        Return the value as a built-in `Decimal`.

        Returns
        -------
        Decimal

        """
        return decimal.Decimal(f"{self.as_double():.{self._mem.precision}f}")

    cpdef double as_double(self) except *:
        """
        Return the value as a `double`.

        Returns
        -------
        double

        """
        return self.as_f64_c()


@cython.auto_pickle(True)
cdef class Price:
    """
    Represents a price in a financial market.

    The number of decimal places may vary. For certain asset classes, prices may
    have negative values. For example, prices for options instruments can be
    negative under certain conditions.

    Parameters
    ----------
    value : integer, float, string or Decimal
        The value of the price.
    precision : uint8
        The precision for the price. Use a precision of 0 for whole numbers
        (no fractional units).

    Raises
    ------
    ValueError
        If `precision` greater than 9.
    OverflowError
        If `precision` is negative (< 0).

    References
    ----------
    https://www.onixs.biz/fix-dictionary/5.0.SP2/index.html#Price
    """

    def __init__(self, double value, uint8_t precision):
        Condition.true(precision <= 9, "invalid precision, was > 9")

        self._mem = price_new(value, precision)

    def __getstate__(self):
        return self._mem.raw, self._mem.precision

    def __setstate__(self, state):
        self._mem = price_from_raw(state[0], state[1])

    def __eq__(self, other) -> bool:
        return Price._compare(self, other, Py_EQ)

    def __lt__(self, other) -> bool:
        return Price._compare(self, other, Py_LT)

    def __le__(self, other) -> bool:
        return Price._compare(self, other, Py_LE)

    def __gt__(self, other) -> bool:
        return Price._compare(self, other, Py_GT)

    def __ge__(self, other) -> bool:
        return Price._compare(self, other, Py_GE)

    def __add__(a, b) -> Union[decimal.Decimal, float]:
        if isinstance(a, float) or isinstance(b, float):
            return float(a) + float(b)
        return Price._extract_decimal(a) + Price._extract_decimal(b)

    def __radd__(b, a) -> Union[decimal.Decimal, float]:
        if isinstance(a, float) or isinstance(b, float):
            return float(a) + float(b)
        return Price._extract_decimal(a) + Price._extract_decimal(b)

    def __sub__(a, b) -> Union[decimal.Decimal, float]:
        if isinstance(a, float) or isinstance(b, float):
            return float(a) - float(b)
        return Price._extract_decimal(a) - Price._extract_decimal(b)

    def __rsub__(b, a) -> Union[decimal.Decimal, float]:
        if isinstance(a, float) or isinstance(b, float):
            return float(a) - float(b)
        return Price._extract_decimal(a) - Price._extract_decimal(b)

    def __mul__(a, b) -> Union[decimal.Decimal, float]:
        if isinstance(a, float) or isinstance(b, float):
            return float(a) * float(b)
        return Price._extract_decimal(a) * Price._extract_decimal(b)

    def __rmul__(b, a) -> Union[decimal.Decimal, float]:
        if isinstance(a, float) or isinstance(b, float):
            return float(a) * float(b)
        return Price._extract_decimal(a) * Price._extract_decimal(b)

    def __truediv__(a, b) -> Union[decimal.Decimal, float]:
        if isinstance(a, float) or isinstance(b, float):
            return float(a) / float(b)
        return Price._extract_decimal(a) / Price._extract_decimal(b)

    def __rtruediv__(b, a) -> Union[decimal.Decimal, float]:
        if isinstance(a, float) or isinstance(b, float):
            return float(a) / float(b)
        return Price._extract_decimal(a) / Price._extract_decimal(b)

    def __floordiv__(a, b) -> Union[decimal.Decimal, float]:
        if isinstance(a, float) or isinstance(b, float):
            return float(a) // float(b)
        return Price._extract_decimal(a) // Price._extract_decimal(b)

    def __rfloordiv__(b, a) -> Union[decimal.Decimal, float]:
        if isinstance(a, float) or isinstance(b, float):
            return float(a) // float(b)
        return Price._extract_decimal(a) // Price._extract_decimal(b)

    def __mod__(a, b) -> Union[decimal.Decimal, float]:
        if isinstance(a, float) or isinstance(b, float):
            return float(a) % float(b)
        return Price._extract_decimal(a) % Price._extract_decimal(b)

    def __rmod__(b, a) -> Union[decimal.Decimal, float]:
        if isinstance(a, float) or isinstance(b, float):
            return float(a) % float(b)
        return Price._extract_decimal(a) * Price._extract_decimal(b)

    def __neg__(self) -> decimal.Decimal:
        return self.as_decimal().__neg__()

    def __pos__(self) -> decimal.Decimal:
        return self.as_decimal().__pos__()

    def __abs__(self) -> decimal.Decimal:
        return abs(self.as_decimal())

    def __round__(self, ndigits=None) -> decimal.Decimal:
        return round(self.as_decimal(), ndigits)

    def __float__(self) -> float:
        return self.as_f64_c()

    def __int__(self) -> int:
        return int(self.as_f64_c())

    def __hash__(self) -> int:
        return hash(self._mem.raw)

    def __str__(self) -> str:
        return f"{self.as_f64_c():.{self._mem.precision}f}"

    def __repr__(self) -> str:
        return f"{type(self).__name__}('{self}')"

    def __del__(self) -> None:
        # https://cython.readthedocs.io/en/latest/src/userguide/special_methods.html#finalization-methods-dealloc-and-del
        price_free(self._mem)  # `self._mem` moved to Rust (then dropped)

    cdef bint eq(self, Price other) except *:
        return self._mem.raw == other._mem.raw

    cdef bint ne(self, Price other) except *:
        return self._mem.raw != other._mem.raw

    cdef bint lt(self, Price other) except *:
        return self._mem.raw < other._mem.raw

    cdef bint le(self, Price other) except *:
        return self._mem.raw <= other._mem.raw

    cdef bint gt(self, Price other) except *:
        return self._mem.raw > other._mem.raw

    cdef bint ge(self, Price other) except *:
        return self._mem.raw >= other._mem.raw

    cdef bint is_zero(self) except *:
        return self._mem.raw == 0

    cdef bint is_negative(self) except *:
        return self._mem.raw < 0

    cdef bint is_positive(self) except *:
        return self._mem.raw > 0

    @staticmethod
    def from_raw(int64_t raw, uint8_t precision):
        return Price.from_raw_c(raw, precision)

    @staticmethod
    cdef Price from_raw_c(int64_t raw, uint8_t precision):
        cdef Price price = Price.__new__(Price)
        price._mem = price_from_raw(raw, precision)
        return price

    cdef int64_t raw_int64_c(self) except *:
        return self._mem.raw

    cdef double as_f64_c(self) except *:
        return self._mem.raw / FIXED_SCALAR

    @staticmethod
    cdef object _extract_decimal(object obj):
        assert not isinstance(obj, float)  # Design-time error
        if hasattr(obj, "as_decimal"):
            return obj.as_decimal()
        else:
            return decimal.Decimal(obj)

    @staticmethod
    cdef bint _compare(a, b, int op) except *:
        if isinstance(a, Quantity):
            a = <Quantity>a.as_decimal()
        elif isinstance(a, Price):
            a = <Price>a.as_decimal()

        if isinstance(b, Quantity):
            b = <Quantity>b.as_decimal()
        elif isinstance(b, Price):
            b = <Price>b.as_decimal()

        return PyObject_RichCompareBool(a, b, op)

    @property
    def precision(self) -> int:
        return self._mem.precision

    @staticmethod
    cdef Price from_str_c(str value):
        cdef uint8_t precision = precision_from_str(value)
        Condition.true(precision <= 9, "invalid precision, was > 9")
        return Price(float(value), precision=precision)

    @staticmethod
    cdef Price from_int_c(int value):
        return Price(value, precision=0)

    @staticmethod
    def from_str(str value) -> Price:
        """
        Return a price parsed from the given string.

        Parameters
        ----------
        value : str
            The value to parse.

        Returns
        -------
        Price

        Warnings
        --------
        The decimal precision will be inferred from the number of digits
        following the '.' point (if no point then precision zero).

        Raises
        ------
        ValueError
            If inferred precision greater than 9.

        """
        Condition.not_none(value, "value")

        return Price.from_str_c(value)

    @staticmethod
    def from_int(int value) -> Price:
        """
        Return a price from the given integer value.

        A precision of zero will be inferred.

        Parameters
        ----------
        value : int
            The value for the price.

        Returns
        -------
        Price

        """
        Condition.not_none(value, "value")

        return Price.from_int_c(value)

    cpdef object as_decimal(self):
        """
        Return the value as a built-in `Decimal`.

        Returns
        -------
        Decimal

        """
        return decimal.Decimal(f"{self.as_double():.{self._mem.precision}f}")

    cpdef double as_double(self) except *:
        """
        Return the value as a `double`.

        Returns
        -------
        double

        """
        return self.as_f64_c()

    cdef Price add(self, Price other):
        cdef int64_t raw = self._mem.raw + other.raw_int64_c()
        return Price.from_raw_c(raw, self._mem.precision)

    cdef Price sub(self, Price other):
        cdef int64_t raw = self._mem.raw - other.raw_int64_c()
        return Price.from_raw_c(raw, self._mem.precision)

    cdef void add_assign(self, Price other) except *:
        self._mem.raw += other.raw_int64_c()

    cdef void sub_assign(self, Price other) except *:
        self._mem.raw -= other.raw_int64_c()


cdef class Money:
    """
    Represents an amount of money in a specified currency denomination.

    Parameters
    ----------
    value : integer, float, string or Decimal
        The amount of money in the currency denomination.
    currency : Currency
        The currency of the money.
    """

    def __init__(self, value, Currency currency not None):
        if value is None:
            value = 0

        self._mem = money_new(float(value), <Currency_t>currency._currency)  # borrows wrapped `currency`
        self.currency = currency

    def __getstate__(self):
        return self._mem.raw, self.currency

    def __setstate__(self, state):
        cdef Currency currency = state[1]
        self._mem = money_from_raw(state[0], <Currency_t>currency._currency)
        self.currency = currency

    def __eq__(self, Money other) -> bool:
        Condition.equal(self.currency, other.currency, "currency", "other.currency")
        return self._mem.raw == other.raw_int64_c()

    def __lt__(self, Money other) -> bool:
        Condition.equal(self.currency, other.currency, "currency", "other.currency")
        return self._mem.raw < other.raw_int64_c()

    def __le__(self, Money other) -> bool:
        Condition.equal(self.currency, other.currency, "currency", "other.currency")
        return self._mem.raw <= other.raw_int64_c()

    def __gt__(self, Money other) -> bool:
        Condition.equal(self.currency, other.currency, "currency", "other.currency")
        return self._mem.raw > other.raw_int64_c()

    def __ge__(self, Money other) -> bool:
        Condition.equal(self.currency, other.currency, "currency", "other.currency")
        return self._mem.raw >= other.raw_int64_c()

    def __add__(a, b) -> Union[decimal.Decimal, float]:
        if isinstance(a, float) or isinstance(b, float):
            return float(a) + float(b)
        return Money._extract_decimal(a) + Money._extract_decimal(b)

    def __radd__(b, a) -> Union[decimal.Decimal, float]:
        if isinstance(a, float) or isinstance(b, float):
            return float(a) + float(b)
        return Money._extract_decimal(a) + Money._extract_decimal(b)

    def __sub__(a, b) -> Union[decimal.Decimal, float]:
        if isinstance(a, float) or isinstance(b, float):
            return float(a) - float(b)
        return Money._extract_decimal(a) - Money._extract_decimal(b)

    def __rsub__(b, a) -> Union[decimal.Decimal, float]:
        if isinstance(a, float) or isinstance(b, float):
            return float(a) - float(b)
        return Money._extract_decimal(a) - Money._extract_decimal(b)

    def __mul__(a, b) -> Union[decimal.Decimal, float]:
        if isinstance(a, float) or isinstance(b, float):
            return float(a) * float(b)
        return Money._extract_decimal(a) * Money._extract_decimal(b)

    def __rmul__(b, a) -> Union[decimal.Decimal, float]:
        if isinstance(a, float) or isinstance(b, float):
            return float(a) * float(b)
        return Money._extract_decimal(a) * Money._extract_decimal(b)

    def __truediv__(a, b) -> Union[decimal.Decimal, float]:
        if isinstance(a, float) or isinstance(b, float):
            return float(a) / float(b)
        return Money._extract_decimal(a) / Money._extract_decimal(b)

    def __rtruediv__(b, a) -> Union[decimal.Decimal, float]:
        if isinstance(a, float) or isinstance(b, float):
            return float(a) / float(b)
        return Money._extract_decimal(a) / Money._extract_decimal(b)

    def __floordiv__(a, b) -> Union[decimal.Decimal, float]:
        if isinstance(a, float) or isinstance(b, float):
            return float(a) // float(b)
        return Money._extract_decimal(a) // Money._extract_decimal(b)

    def __rfloordiv__(b, a) -> Union[decimal.Decimal, float]:
        if isinstance(a, float) or isinstance(b, float):
            return float(a) // float(b)
        return Money._extract_decimal(a) // Money._extract_decimal(b)

    def __mod__(a, b) -> Union[decimal.Decimal, float]:
        if isinstance(a, float) or isinstance(b, float):
            return float(a) % float(b)
        return Money._extract_decimal(a) % Money._extract_decimal(b)

    def __rmod__(b, a) -> Union[decimal.Decimal, float]:
        if isinstance(a, float) or isinstance(b, float):
            return float(a) % float(b)
        return Money._extract_decimal(a) * Money._extract_decimal(b)

    def __neg__(self) -> decimal.Decimal:
        return self.as_decimal().__neg__()

    def __pos__(self) -> decimal.Decimal:
        return self.as_decimal().__pos__()

    def __abs__(self) -> decimal.Decimal:
        return abs(self.as_decimal())

    def __round__(self, ndigits=None) -> decimal.Decimal:
        return round(self.as_decimal(), ndigits)

    def __float__(self) -> float:
        return self.as_f64_c()

    def __int__(self) -> int:
        return int(self.as_f64_c())

    def __hash__(self) -> int:
        return hash((self._mem.raw, self.currency.code))

    def __str__(self) -> str:
        return f"{self.as_f64_c():.{self._mem.currency.precision}f}"

    def __repr__(self) -> str:
        return f"{type(self).__name__}('{str(self)}', {self.currency.code})"

    def __del__(self) -> None:
        # https://cython.readthedocs.io/en/latest/src/userguide/special_methods.html#finalization-methods-dealloc-and-del
        money_free(self._mem)  # `self._mem` moved to Rust (then dropped)

    cdef bint is_zero(self) except *:
        return self._mem.raw == 0

    cdef bint is_negative(self) except *:
        return self._mem.raw < 0

    cdef bint is_positive(self) except *:
        return self._mem.raw > 0

    cdef int64_t raw_int64_c(self):
        return self._mem.raw

    cdef double as_f64_c(self):
        return self._mem.raw / FIXED_SCALAR

    @staticmethod
    def from_raw(uint64_t raw, uint8_t precision):
        return Money.from_raw_c(raw, precision)

    @staticmethod
    cdef Money from_raw_c(uint64_t raw, Currency currency):
        cdef Money money = Money.__new__(Money)
        money._mem = money_from_raw(raw, <Currency_t>currency._currency)
        money.currency = currency
        return money

    @staticmethod
    cdef object _extract_decimal(object obj):
        assert not isinstance(obj, float)  # Design-time error
        if hasattr(obj, "as_decimal"):
            return obj.as_decimal()
        else:
            return decimal.Decimal(obj)

    @staticmethod
    cdef Money from_str_c(str value):
        cdef list pieces = value.split(' ', maxsplit=1)

        if len(pieces) != 2:
            raise ValueError(f"The `Money` string value was malformed, was {value}")

        return Money(pieces[0], Currency.from_str_c(pieces[1]))

    cdef Money add(self, Money other):
        assert self.currency == other.currency, "other money currency was not equal"  # design-time check
        cdef int64_t raw = self._mem.raw + other.raw_int64_c()
        return Money.from_raw_c(raw, self.currency)

    cdef Money sub(self, Money other):
        assert self.currency == other.currency, "other money currency was not equal"  # design-time check
        cdef int64_t raw = self._mem.raw - other.raw_int64_c()
        return Money.from_raw_c(raw, self.currency)

    cdef void add_assign(self, Money other) except *:
        assert self.currency == other.currency, "other money currency was not equal"  # design-time check
        self._mem.raw += other.raw_int64_c()

    cdef void sub_assign(self, Money other) except *:
        assert self.currency == other.currency, "other money currency was not equal"  # design-time check
        self._mem.raw -= other.raw_int64_c()

    cpdef object as_decimal(self):
        """
        Return the value as a built-in `Decimal`.

        Returns
        -------
        Decimal

        """
        return decimal.Decimal(f"{self.as_double():.{self._mem.currency.precision}f}")

    cpdef double as_double(self) except *:
        """
        Return the value as a `double`.

        Returns
        -------
        double

        """
        return self.as_f64_c()

    @staticmethod
    def from_str(str value) -> Money:
        """
        Return money parsed from the given string.

        Must be correctly formatted with a value and currency separated by a
        whitespace delimiter.

        Example: "1000000.00 USD".

        Parameters
        ----------
        value : str
            The value to parse.

        Returns
        -------
        Money

        Raises
        ------
        ValueError
            If `value` is malformed.

        """
        Condition.not_none(value, "value")

        cdef tuple pieces = value.partition(' ')

        if len(pieces) != 3:
            raise ValueError(f"The `Money` string value was malformed, was {value}")

        return Money.from_str_c(value)

    cpdef str to_str(self):
        """
        Return the formatted string representation of the money.

        Returns
        -------
        str

        """
        return f"{self.as_f64_c():,.{self._mem.currency.precision}f} {self.currency.code}".replace(",", "_")


cdef class AccountBalance:
    """
    Represents an account balance denominated in a particular currency.

    Parameters
    ----------
    total : Money
        The total account balance.
    locked : Money
        The account balance locked (assigned to pending orders).
    free : Money
        The account balance free for trading.

    Raises
    ------
    ValueError
        If money currencies are not equal.
    ValueError
        If any money is negative (< 0).
    ValueError
        If `total` - `locked` != `free`.
    """

    def __init__(
        self,
        Money total not None,
        Money locked not None,
        Money free not None,
    ):
        Condition.equal(total.currency, locked.currency, "total.currency", "locked.currency")
        Condition.equal(total.currency, free.currency, "total.currency", "free.currency")
        Condition.true(total.raw_int64_c() >= 0, "total was negative")
        Condition.true(locked.raw_int64_c() >= 0, "locked was negative")
        Condition.true(free.raw_int64_c() >= 0, "free was negative")
        Condition.true(total.raw_int64_c() - locked.raw_int64_c() == free.raw_int64_c(), "total - locked != free")

        self.total = total
        self.locked = locked
        self.free = free
        self.currency = total.currency

    def __repr__(self) -> str:
        return (
            f"{type(self).__name__}("
            f"total={self.total.to_str()}, "
            f"locked={self.locked.to_str()}, "
            f"free={self.free.to_str()})"
        )

    @staticmethod
    cdef AccountBalance from_dict_c(dict values):
        Condition.not_none(values, "values")
        cdef Currency currency = Currency.from_str_c(values["currency"])
        return AccountBalance(
            total=Money(values["total"], currency),
            locked=Money(values["locked"], currency),
            free=Money(values["free"], currency),
        )

    @staticmethod
    def from_dict(dict values) -> AccountBalance:
        """
        Return an account balance from the given dict values.

        Parameters
        ----------
        values : dict[str, object]
            The values for initialization.

        Returns
        -------
        AccountBalance

        """
        return AccountBalance.from_dict_c(values)

    cpdef dict to_dict(self):
        """
        Return a dictionary representation of this object.

        Returns
        -------
        dict[str, object]

        """
        return {
            "type": type(self).__name__,
            "total": str(self.total),
            "locked": str(self.locked),
            "free": str(self.free),
            "currency": self.currency.code,
        }


cdef class MarginBalance:
    """
    Represents a margin balance optionally associated with a particular instrument.

    Parameters
    ----------
    initial : Money
        The initial (order) margin requirement for the instrument.
    maintenance : Money
        The maintenance (position) margin requirement for the instrument.
    instrument_id : InstrumentId, optional
        The instrument ID associated with the margin.

    Raises
    ------
    ValueError
        If `margin_init` currency does not equal `currency`.
    ValueError
        If `margin_maint` currency does not equal `currency`.
    ValueError
        If any margin is negative (< 0).
    """

    def __init__(
        self,
        Money initial not None,
        Money maintenance not None,
        InstrumentId instrument_id=None,
    ):
        Condition.equal(initial.currency, maintenance.currency, "initial.currency", "maintenance.currency")
        Condition.true(initial.raw_int64_c() >= 0, "initial margin was negative")
        Condition.true(maintenance.raw_int64_c() >= 0, "maintenance margin was negative")

        self.initial = initial
        self.maintenance = maintenance
        self.currency = initial.currency
        self.instrument_id = instrument_id

    def __repr__(self) -> str:
        return (
            f"{type(self).__name__}("
            f"initial={self.initial.to_str()}, "
            f"maintenance={self.maintenance.to_str()}, "
            f"instrument_id={self.instrument_id.value if self.instrument_id is not None else None})"
        )

    @staticmethod
    cdef MarginBalance from_dict_c(dict values):
        Condition.not_none(values, "values")
        cdef Currency currency = Currency.from_str_c(values["currency"])
        cdef str instrument_id_str = values.get("instrument_id")
        return MarginBalance(
            initial=Money(values["initial"], currency),
            maintenance=Money(values["maintenance"], currency),
            instrument_id=InstrumentId.from_str_c(instrument_id_str) if instrument_id_str is not None else None,
        )

    @staticmethod
    def from_dict(dict values) -> MarginBalance:
        """
        Return a margin balance from the given dict values.

        Parameters
        ----------
        values : dict[str, object]
            The values for initialization.

        Returns
        -------
        MarginAccountBalance

        """
        return MarginBalance.from_dict_c(values)

    cpdef dict to_dict(self):
        """
        Return a dictionary representation of this object.

        Returns
        -------
        dict[str, object]

        """
        return {
            "type": type(self).__name__,
            "initial": str(self.initial),
            "maintenance": str(self.maintenance),
            "currency": self.currency.code,
            "instrument_id": self.instrument_id.value if self.instrument_id is not None else None,
        }
