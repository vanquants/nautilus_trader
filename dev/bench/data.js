window.BENCHMARK_DATA = {
  "lastUpdate": 1627907424402,
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
          "id": "53bda32510d122f1767c625044ee0413849b03ea",
          "message": "Update release notes",
          "timestamp": "2021-08-02T21:43:34+10:00",
          "tree_id": "b9bc3e7879a08d5264b9c9ff529addc94fc626f6",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/53bda32510d122f1767c625044ee0413849b03ea"
        },
        "date": 1627907422313,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 0.3115710066448123,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.2095412560000796 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 0.4221561008783967,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.368792013000075 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 0.13036143158086694,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.67098050300001 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 7303400.492453402,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 136.92252000055305 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 7286477.783652016,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 137.2405200004323 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 7009497.448479609,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 142.66357999986212 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 8406165.047907375,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 118.96030999878349 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 196.9296307353649,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.077956000150152 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 11737372.992828954,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 85.19793999994363 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 11491748.46486914,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 87.01896000047782 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 6155179.460474449,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 162.46479999836083 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 10782831.403333249,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 92.74001999983739 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2363781.424497435,
            "unit": "iter/sec",
            "range": "stddev: 1.954038280574459e-7",
            "extra": "mean: 423.0509596345655 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 874139.1618632284,
            "unit": "iter/sec",
            "range": "stddev: 1.3968175167612826e-7",
            "extra": "mean: 1.1439826101241124 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 653403.8021556253,
            "unit": "iter/sec",
            "range": "stddev: 1.3429460696012926e-7",
            "extra": "mean: 1.5304471701892908 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 666306.0795362908,
            "unit": "iter/sec",
            "range": "stddev: 1.4455456333196332e-7",
            "extra": "mean: 1.5008117601087179 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 4049271.375625251,
            "unit": "iter/sec",
            "range": "stddev: 6.874795663490146e-8",
            "extra": "mean: 246.95800978406623 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1320546.9350829402,
            "unit": "iter/sec",
            "range": "stddev: 1.5752482265597693e-7",
            "extra": "mean: 757.261990038387 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2684392.9683974846,
            "unit": "iter/sec",
            "range": "stddev: 1.4621331500374372e-7",
            "extra": "mean: 372.5236996865533 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 4939507.336969343,
            "unit": "iter/sec",
            "range": "stddev: 7.29271853780832e-8",
            "extra": "mean: 202.4493399403582 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1401167.5340590863,
            "unit": "iter/sec",
            "range": "stddev: 1.254342186702908e-7",
            "extra": "mean: 713.6905299989849 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 771509.9758627827,
            "unit": "iter/sec",
            "range": "stddev: 1.755967155763844e-7",
            "extra": "mean: 1.296159520013589 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 900531.6587802311,
            "unit": "iter/sec",
            "range": "stddev: 2.998209772929778e-7",
            "extra": "mean: 1.1104551297557919 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 7684412.844847132,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 130.13355999873966 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 4594055.053887986,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 217.6726199991208 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 8556120.449705899,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 116.87539999911678 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 11957860.499732524,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 83.62699999906908 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 5390509.243039293,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 185.51122999951986 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 5559349.502705367,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 179.87716000106957 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_mean",
            "value": 164012.85126019616,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.097083199983899 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_std",
            "value": 53767.91255826719,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 18.5984531000031 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_mean",
            "value": 2293555.729950147,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 436.0042300004352 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_std",
            "value": 1285389.438421152,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 777.9743400010375 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 68328.24841315538,
            "unit": "iter/sec",
            "range": "stddev: 0.000059576382891160584",
            "extra": "mean: 14.635235400055535 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 15143.339423139443,
            "unit": "iter/sec",
            "range": "stddev: 0.00019123054903583353",
            "extra": "mean: 66.03563270014092 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 4.809442320394002,
            "unit": "iter/sec",
            "range": "stddev: 0.2069460104021102",
            "extra": "mean: 207.92431500001385 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 2177030.788209065,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 459.34122999824467 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1956917.2150810692,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 511.00782000048633 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 7704369.772247765,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 129.79646999838224 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2490966.6960979872,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 401.45057000017914 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2553401.455021701,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 391.6344599997501 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 358601.24614741554,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.7886127299984764 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 70744.41782862777,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 14.135390899991762 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 60831.553959651166,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 16.4388370000097 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.416170511020596,
            "unit": "iter/sec",
            "range": "stddev: 0.00061481747740131",
            "extra": "mean: 292.72543532999634 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 11529632.944029946,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 86.73302999795851 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 5299916.441506892,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 188.6822200003735 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 301944.3099950109,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.311869000003753 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 98408.28350782559,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.161746189999121 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}