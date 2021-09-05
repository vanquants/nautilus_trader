window.BENCHMARK_DATA = {
  "lastUpdate": 1630804272990,
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
          "id": "bfd3d454e4091c25238558ec24b18e0fe1ff4978",
          "message": "Update clients and templates",
          "timestamp": "2021-09-05T10:50:35+10:00",
          "tree_id": "48f9e06f337729c22c5f34ba8c6874bfe46eaaa3",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/bfd3d454e4091c25238558ec24b18e0fe1ff4978"
        },
        "date": 1630804259290,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 0.2687065508711952,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.721531896999977 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 0.6599549568730255,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.5152549270001145 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 0.2557791068388128,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.9096234730000106 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 6180036.9603602905,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 161.8113299991819 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 5503403.469839308,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 181.70573999896078 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 6177364.998002668,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 161.8813200002478 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 7356251.489686014,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 135.9387999991668 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 161.74615978316754,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.182526999964466 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 9800933.244843991,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 102.03110000020388 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 10135714.171895957,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 98.66103000149451 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 5140727.412943985,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 194.5249999994303 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 8802481.384341769,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 113.60432999936165 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2629209.6795125683,
            "unit": "iter/sec",
            "range": "stddev: 1.3479527087048833e-7",
            "extra": "mean: 380.34243057609274 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 802056.9105074444,
            "unit": "iter/sec",
            "range": "stddev: 2.653957640101821e-7",
            "extra": "mean: 1.246794319579294 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 582411.0906365485,
            "unit": "iter/sec",
            "range": "stddev: 2.60728858921838e-7",
            "extra": "mean: 1.717000270216431 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 571745.1778111968,
            "unit": "iter/sec",
            "range": "stddev: 2.822390374684908e-7",
            "extra": "mean: 1.7490309298773354 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3453443.40578217,
            "unit": "iter/sec",
            "range": "stddev: 7.445333044012641e-8",
            "extra": "mean: 289.5660598710492 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1123280.5829484395,
            "unit": "iter/sec",
            "range": "stddev: 1.2774416924869447e-7",
            "extra": "mean: 890.2495201823513 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2233456.3075891817,
            "unit": "iter/sec",
            "range": "stddev: 1.1400480368145321e-7",
            "extra": "mean: 447.7365402681244 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 3852718.4350091703,
            "unit": "iter/sec",
            "range": "stddev: 1.0556780013147525e-7",
            "extra": "mean: 259.55698991992904 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1213092.332827293,
            "unit": "iter/sec",
            "range": "stddev: 1.725538728811111e-7",
            "extra": "mean: 824.3395600970871 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 668489.3117223444,
            "unit": "iter/sec",
            "range": "stddev: 3.169325884470291e-7",
            "extra": "mean: 1.4959102299235383 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 755904.0242800878,
            "unit": "iter/sec",
            "range": "stddev: 3.1620893418815105e-7",
            "extra": "mean: 1.322919270012335 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 6245206.413740237,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 160.1228100003027 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 3741837.742229075,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 267.24836000084906 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 7242478.468921592,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 138.07427999836364 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 9983987.68055454,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 100.16038000003391 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 4513526.067246448,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 221.556269998473 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 4634003.399442706,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 215.79612999858 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_mean",
            "value": 138517.55218925863,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.219301700001779 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_std",
            "value": 47157.722927887495,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 21.20543439998528 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_mean",
            "value": 1949602.0082437217,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 512.925200000609 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_std",
            "value": 1073550.950983869,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 931.4881600016633 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 60002.017387831394,
            "unit": "iter/sec",
            "range": "stddev: 0.00008869858924864238",
            "extra": "mean: 16.666106299999228 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 14244.977881772116,
            "unit": "iter/sec",
            "range": "stddev: 0.0001528265165937603",
            "extra": "mean: 70.20017919996917 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 4.529837705532947,
            "unit": "iter/sec",
            "range": "stddev: 0.179247323078228",
            "extra": "mean: 220.75846089994684 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 1959446.8183834956,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 510.34811999898017 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1651188.4536215924,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 605.62439000023 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 6461422.593378551,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 154.76467999860688 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2249751.379970622,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 444.4935600008648 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2233939.7824597387,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 447.6396399991245 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 309218.05235765845,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.2339638400003423 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 60700.71177780256,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 16.474271399988538 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 51609.91904042547,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 19.376120299989452 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 2.830767746516695,
            "unit": "iter/sec",
            "range": "stddev: 0.00040045944847682765",
            "extra": "mean: 353.26105479000034 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 9589612.531803295,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 104.27949999893826 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 4323734.426720253,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 231.28154999994877 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 250962.72438144387,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.984655499994006 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 89755.16642249224,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.141419929999756 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}