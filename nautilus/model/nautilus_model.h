#ifndef add_h
#define add_h

/* Warning, this file is autogenerated by cbindgen. Don't modify this manually. */

#include <stdint.h>

#define FIXED_PREC 0.000000001

typedef enum BookLevel {
  L1 = 1,
  L2 = 2,
  L3 = 3,
} BookLevel;

typedef enum OrderSide {
  Buy = 1,
  Sell = 2,
} OrderSide;

typedef struct HashMap_u64__usize HashMap_u64__usize;

typedef struct String String;

typedef struct Vec_Level Vec_Level;

typedef struct Symbol {
  struct String *value;
} Symbol;

typedef struct Venue {
  struct String *value;
} Venue;

typedef struct Price {
  int64_t value;
  uint8_t prec;
} Price;

typedef struct Quantity {
  uint64_t value;
  uint8_t prec;
} Quantity;

typedef struct Ladder {
  enum OrderSide side;
  struct Vec_Level *levels;
  struct HashMap_u64__usize *cache;
} Ladder;

typedef struct InstrumentId {
  struct Symbol symbol;
  struct Venue venue;
} InstrumentId;

typedef struct OrderBook {
  struct Ladder bids;
  struct Ladder asks;
  struct InstrumentId instrument_id;
  enum BookLevel book_level;
  enum OrderSide last_side;
  int64_t ts_last;
} OrderBook;

struct Symbol symbol_new(const char *ptr);

const char *symbol_as_bytes(struct Symbol self);

struct Venue venue_new(const char *ptr);

const char *venue_as_bytes(struct Venue self);

struct Price new_price(double value, uint8_t prec);

struct Quantity new_qty(double value, uint8_t prec);

struct OrderBook order_book_new(struct InstrumentId instrument_id, enum BookLevel book_level);

#endif /* add_h */
