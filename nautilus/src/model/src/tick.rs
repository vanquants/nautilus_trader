// -------------------------------------------------------------------------------------------------
//  Copyright (C) 2015-2021 Nautech Systems Pty Ltd. All rights reserved.
//  https://nautechsystems.io
//
//  Licensed under the GNU Lesser General Public License Version 3.0 (the "License");
//  You may not use this file except in compliance with the License.
//  You may obtain a copy of the License at https://www.gnu.org/licenses/lgpl-3.0.en.html
//
//  Unless required by applicable law or agreed to in writing, software
//  distributed under the License is distributed on an "AS IS" BASIS,
//  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//  See the License for the specific language governing permissions and
//  limitations under the License.
// -------------------------------------------------------------------------------------------------

use crate::enums::OrderSide;
use crate::identifiers::{InstrumentId, TradeMatchId};
use crate::objects::Price;
use crate::objects::Quantity;
use crate::objects::UnixNanos;

/// Represents a single quote tick in a financial market.
pub struct QuoteTick {
    pub instrument_id: InstrumentId,
    pub bid: Price,
    pub ask: Price,
    pub bid_size: Quantity,
    pub ask_size: Quantity,
    pub ts_event: UnixNanos,
    pub ts_init: UnixNanos,
}

/// Represents a single trade tick in a financial market.
pub struct TradeTick {
    pub instrument_id: InstrumentId,
    pub price: Price,
    pub size: Quantity,
    pub side: OrderSide,
    pub match_id: TradeMatchId,
    pub ts_event: UnixNanos,
    pub ts_init: UnixNanos,
}
