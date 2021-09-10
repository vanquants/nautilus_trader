window.BENCHMARK_DATA = {
  "lastUpdate": 1631256590369,
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
          "id": "3c1691f57bd9fa99de23965ac5098784a2b483a6",
          "message": "Refine docs",
          "timestamp": "2021-09-10T16:32:33+10:00",
          "tree_id": "dfff7a3d07f4a521c4cf8a836863335a3cbc5d20",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/3c1691f57bd9fa99de23965ac5098784a2b483a6"
        },
        "date": 1631256570598,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 106326.10749009768,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.405027830000563 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 0.3033220476430497,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.29682595700001 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 0.7570189317269831,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.3209709270000758 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 0.28987608629545913,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.4497499009999046 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 6940729.226317634,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 144.07708000021557 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 7192690.155315083,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 139.0300399998523 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 7335195.397113862,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 136.32902000040303 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 8021309.088917869,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 124.66792999930477 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 195.27291146947488,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.121037999970213 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 11585788.593687978,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 86.31263999973271 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 12035921.931237964,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 83.08461999945393 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 6171764.780968078,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 162.0282099997894 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 10762444.964927152,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 92.91568999969968 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2887281.707025409,
            "unit": "iter/sec",
            "range": "stddev: 8.648684584247128e-8",
            "extra": "mean: 346.3465298750634 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 880384.3295507793,
            "unit": "iter/sec",
            "range": "stddev: 1.1110640907557673e-7",
            "extra": "mean: 1.1358675596943613 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 711265.2148440492,
            "unit": "iter/sec",
            "range": "stddev: 1.3407217920590947e-7",
            "extra": "mean: 1.4059453198751726 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 716831.2177117551,
            "unit": "iter/sec",
            "range": "stddev: 8.881655945889701e-7",
            "extra": "mean: 1.39502853013596 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 4420620.445258946,
            "unit": "iter/sec",
            "range": "stddev: 5.3473510299097997e-8",
            "extra": "mean: 226.2125899255807 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1340844.5657264,
            "unit": "iter/sec",
            "range": "stddev: 1.1111239049454438e-7",
            "extra": "mean: 745.7986000474648 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2683109.5467228172,
            "unit": "iter/sec",
            "range": "stddev: 8.123632229325804e-8",
            "extra": "mean: 372.7018903202861 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 4942890.340934838,
            "unit": "iter/sec",
            "range": "stddev: 4.46448427000479e-8",
            "extra": "mean: 202.31077993344115 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1490157.8868622412,
            "unit": "iter/sec",
            "range": "stddev: 1.1797404053430945e-7",
            "extra": "mean: 671.0698301276352 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 812561.9214408512,
            "unit": "iter/sec",
            "range": "stddev: 1.2774033410785347e-7",
            "extra": "mean: 1.2306754397582154 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 897158.7388114724,
            "unit": "iter/sec",
            "range": "stddev: 3.3326824196340425e-7",
            "extra": "mean: 1.1146299497954715 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 7562169.731718698,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 132.23717999949258 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 4527284.4949213555,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 220.88295999992624 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 8626488.737879246,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 115.9220199997435 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 12144067.993155962,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 82.34473000015896 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 5261588.003041429,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 190.05668999966474 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 5399898.967913912,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 185.1886499991906 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 82787.09579603912,
            "unit": "iter/sec",
            "range": "stddev: 0.00005698254358801782",
            "extra": "mean: 12.07917720007572 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 16395.911013930538,
            "unit": "iter/sec",
            "range": "stddev: 0.00013790600044946374",
            "extra": "mean: 60.99081649994105 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 5.149280260896467,
            "unit": "iter/sec",
            "range": "stddev: 0.15954487163083061",
            "extra": "mean: 194.20189799999434 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 2135549.7492303206,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 468.263500000603 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1908149.178490603,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 524.0680400004294 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 7688034.919040454,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 130.07225000023936 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2690373.665463247,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 371.6955799995958 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2685143.461040633,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 372.41957999981423 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 351514.3145276628,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.844834359999595 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 74034.31545307247,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 13.507249899998897 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 66118.08273029,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 15.124455500006206 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.4553497445007713,
            "unit": "iter/sec",
            "range": "stddev: 0.0011886118869132154",
            "extra": "mean: 289.40630440999826 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 11468431.765253661,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 87.19588000076328 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 4897830.040930177,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 204.17204999830574 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 254436.77950728708,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.930249400013963 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_mean",
            "value": 158227.51261888447,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.32001339999988 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_std",
            "value": 53369.06043251252,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 18.73744810000062 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_mean",
            "value": 2244359.2351084473,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 445.5614699986654 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_std",
            "value": 1291502.8142446617,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 774.2917699988539 nsec\nrounds: 1"
          }
        ]
      }
    ]
  }
}