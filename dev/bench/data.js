window.BENCHMARK_DATA = {
  "lastUpdate": 1629359268840,
  "repoUrl": "https://github.com/nautechsystems/nautilus_trader",
  "entries": {
    "Benchmark with pytest-benchmark": [
      {
        "commit": {
          "author": {
            "email": "chris@cjdsellers.io",
            "name": "cjdsellers",
            "username": "cjdsellers"
          },
          "committer": {
            "email": "chris@cjdsellers.io",
            "name": "cjdsellers",
            "username": "cjdsellers"
          },
          "distinct": true,
          "id": "5c459cb57c8af8dccaf3f5f6abb2ae86890df763",
          "message": "Wire up ticker data type",
          "timestamp": "2021-08-19T17:25:46+10:00",
          "tree_id": "cb8e7f72fe7694ca3b1d998f3e2c6991296601e9",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/5c459cb57c8af8dccaf3f5f6abb2ae86890df763"
        },
        "date": 1629359264809,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 0.2387076403869249,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.189224937999825 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 0.28969095875706136,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.4519544699999187 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 0.083186325779061,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 12.021206498000083 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 6227999.2036091555,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 160.56520999882196 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 5896010.1817221185,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 169.60621999942305 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 6185201.892094195,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 161.67621000022336 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 6831525.495400621,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 146.3801899990358 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 161.3499700166848,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.197708000172497 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 9957469.655521816,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 100.42712000085885 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 9404140.492618108,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 106.33613999971203 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 4656202.751149534,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 214.76728000152434 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 8746446.20965308,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 114.33214999897245 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2624241.7049659817,
            "unit": "iter/sec",
            "range": "stddev: 0.00000809334948172316",
            "extra": "mean: 381.06246010329414 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 800838.1699868975,
            "unit": "iter/sec",
            "range": "stddev: 0.00002582949502481887",
            "extra": "mean: 1.2486917300861933 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 648293.2242198461,
            "unit": "iter/sec",
            "range": "stddev: 0.00000801666660219809",
            "extra": "mean: 1.5425118798725634 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 626521.3269268421,
            "unit": "iter/sec",
            "range": "stddev: 0.0000062840334529682435",
            "extra": "mean: 1.5961148599762964 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3371244.651207282,
            "unit": "iter/sec",
            "range": "stddev: 0.000002772480824996783",
            "extra": "mean: 296.6263512325895 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1083263.8399687165,
            "unit": "iter/sec",
            "range": "stddev: 0.000005825082115157056",
            "extra": "mean: 923.1361401566573 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2382452.759419302,
            "unit": "iter/sec",
            "range": "stddev: 7.889620570149451e-7",
            "extra": "mean: 419.7354999155323 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 3747474.8976953104,
            "unit": "iter/sec",
            "range": "stddev: 0.000005668591870529522",
            "extra": "mean: 266.84635048923155 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1230416.0518975458,
            "unit": "iter/sec",
            "range": "stddev: 0.000004161644702413838",
            "extra": "mean: 812.7332201638637 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 648863.4918449954,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019059252567023048",
            "extra": "mean: 1.54115621015535 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 673425.1253785323,
            "unit": "iter/sec",
            "range": "stddev: 0.0000027994686839545507",
            "extra": "mean: 1.484946079845031 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 5599095.992323723,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 178.6002600010761 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 3581040.9806863274,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 279.2484099995818 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 6423505.714378104,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 155.67822999855707 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 10146295.374671482,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 98.55813999820384 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 4160333.4257533844,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 240.36535000050208 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 4374408.607282186,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 228.60233000074004 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_mean",
            "value": 113683.35232482436,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.796362699990823 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_std",
            "value": 37184.35760573395,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 26.893028799986496 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_mean",
            "value": 1861754.385517581,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 537.1277800009011 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_std",
            "value": 1040793.5059644985,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 960.8053800002381 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 31797.70018243921,
            "unit": "iter/sec",
            "range": "stddev: 0.00019043623646934705",
            "extra": "mean: 31.448815299927446 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 10352.393465200608,
            "unit": "iter/sec",
            "range": "stddev: 0.0001662754800519081",
            "extra": "mean: 96.59601939990807 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 3.4181367582648576,
            "unit": "iter/sec",
            "range": "stddev: 0.2567070664761383",
            "extra": "mean: 292.5570480999795 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 1669541.5894628323,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 598.9668099982737 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1540435.9270380482,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 649.1668900002878 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 5575278.412694416,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 179.3632399994749 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2077927.8637333445,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 481.24866000080146 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2061610.5722332485,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 485.0576600006206 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 272920.77504544496,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.664066979999916 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 45992.68178247276,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 21.742589499990572 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 35793.96820091972,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 27.937668000004123 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 2.88252203849052,
            "unit": "iter/sec",
            "range": "stddev: 0.004701617330204809",
            "extra": "mean: 346.9184230499991 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 7778281.637463213,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 128.56310000188387 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 4169721.3350109807,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 239.82418000059627 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 248479.1152427224,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.024483100010912 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 86497.43218015159,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.56103683999845 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}