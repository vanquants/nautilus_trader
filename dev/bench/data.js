window.BENCHMARK_DATA = {
  "lastUpdate": 1630307977445,
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
          "id": "7d7caf6298e5d660df341aaedc13cf53e0e1b143",
          "message": "Add test stubs and tests",
          "timestamp": "2021-08-30T16:10:31+10:00",
          "tree_id": "ce1c75657eabd9ab12a016206db810d6671d6516",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/7d7caf6298e5d660df341aaedc13cf53e0e1b143"
        },
        "date": 1630307967011,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 0.2681396169306988,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.7294004200000472 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 0.6764391405399112,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.478329593999888 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 0.24039687891934236,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.159787782999956 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 6457911.241564134,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 154.84882999999172 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 6066821.795295435,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 164.83095000012327 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 6466137.516743916,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 154.65183000060279 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 7649204.425307259,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 130.73255000108475 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 109.23579945333594,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.154508000165151 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 7398605.806705892,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 135.1606000002903 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 9237254.067262517,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 108.25728000099843 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 4155380.480154403,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 240.6518499992671 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 7853886.299282047,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 127.32550000009725 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 1971623.023278352,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018458539183097361",
            "extra": "mean: 507.1963495015552 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 759889.3327628857,
            "unit": "iter/sec",
            "range": "stddev: 0.000003072703420409553",
            "extra": "mean: 1.31598109999004 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 583032.47675732,
            "unit": "iter/sec",
            "range": "stddev: 0.000005625413901358882",
            "extra": "mean: 1.7151703204626756 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 590166.1930884703,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015381804653819281",
            "extra": "mean: 1.6944379595292958 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3683268.660375956,
            "unit": "iter/sec",
            "range": "stddev: 6.9811449033982e-7",
            "extra": "mean: 271.49797970423606 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1213427.4779137305,
            "unit": "iter/sec",
            "range": "stddev: 0.00000448021908770354",
            "extra": "mean: 824.1118799446667 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2468716.484374353,
            "unit": "iter/sec",
            "range": "stddev: 5.850852257335606e-7",
            "extra": "mean: 405.06879033273435 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 4198858.798912311,
            "unit": "iter/sec",
            "range": "stddev: 6.146607093852294e-7",
            "extra": "mean: 238.1599496175113 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1300293.7529396184,
            "unit": "iter/sec",
            "range": "stddev: 0.000006007055931113491",
            "extra": "mean: 769.0569901910749 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 677989.9945042873,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026719378649959294",
            "extra": "mean: 1.4749480200384824 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 750338.8811837597,
            "unit": "iter/sec",
            "range": "stddev: 0.0000031602663244916915",
            "extra": "mean: 1.332731149987012 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 6734019.431105691,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 148.49972000092748 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 3997698.924495235,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 250.14390000023923 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 7449979.348638493,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 134.2285600003379 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 10303848.116205836,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 97.05112000119698 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 4863000.048932718,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 205.6343799995375 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 4912354.749034011,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 203.5683600001903 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_mean",
            "value": 133689.72161053077,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.480006600007982 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_std",
            "value": 38587.05011423162,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.915430099985315 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_mean",
            "value": 1662576.8384830395,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 601.4759599997888 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_std",
            "value": 974362.6859309931,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.0263118800003213 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 59421.67957293697,
            "unit": "iter/sec",
            "range": "stddev: 0.00008031141013311285",
            "extra": "mean: 16.828874700058805 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 10417.027822867874,
            "unit": "iter/sec",
            "range": "stddev: 0.00015648780174337364",
            "extra": "mean: 95.99667169984514 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 3.442198791855062,
            "unit": "iter/sec",
            "range": "stddev: 0.23833642787792408",
            "extra": "mean: 290.5119839000008 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 1723660.031431475,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 580.1608100000522 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1643863.1612802206,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 608.3231399998112 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 5872680.291291131,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 170.27999999982057 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2137951.3538642414,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 467.73749000067255 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2129923.1389515866,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 469.50051000067106 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 305499.25543722865,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.2733303999998498 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 46362.03379674206,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 21.569372999988445 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 38726.66283372111,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.822002900008556 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.0804447518802887,
            "unit": "iter/sec",
            "range": "stddev: 0.012792625710059234",
            "extra": "mean: 324.6284483400018 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 10239799.725873295,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 97.65816000026462 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 4279305.475585207,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 233.6827799990715 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 278931.2670392866,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.5851126000125078 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 93332.78980049714,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.714348110000174 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}