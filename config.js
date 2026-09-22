// fill at launch — everything on the page reads from here
window.BATCH_CFG = {
  NAME:   "BatchPad",
  TICKER: "BATCH",
  CA:     "",
  CHAIN:  "solana",
  PAD:    "pumpfun",        // pumpfun | stonkfun
  X:      "",
  BUY:    "",               // optional override
  CHART:  "",               // optional override

  BATCH_NO:  14,            // current batch number
  DAYS:      7,             // batch length
  FLOOR:     50000,         // mcap the coin must hold, USD
  MIN_VOL:   25000,         // minimum 24h volume, USD
  MIN_HOLD:  150,           // minimum holders
  LOCK:      90,            // days the pad's buy is locked
  POT:       38400,         // fees accrued this batch, USD
  SPLIT:     80             // % of the pot that goes into the accepted coins
};
