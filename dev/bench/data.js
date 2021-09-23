window.BENCHMARK_DATA = {
  "lastUpdate": 1632374258485,
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
          "id": "353170599de13f46001b8bf2df3d94e48d2a1c4c",
          "message": "Rename `BookLevel` to `BookType`",
          "timestamp": "2021-09-23T14:59:57+10:00",
          "tree_id": "65231e79a5a0d1d96e9e6121587c310fb58cf9d7",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/353170599de13f46001b8bf2df3d94e48d2a1c4c"
        },
        "date": 1632374252619,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 3.0492636101564283,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 327.9480319999948 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 3.3119868713897667,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 301.9335640000236 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 2.2736995945210032,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 439.8118390000718 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 7437111.782768118,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 134.46079999994254 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 6959495.319719227,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 143.68857999897955 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 7657325.4953144835,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 130.59389999966697 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 8119580.636716104,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 123.15906999901925 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 220.7753099042251,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.529491999960555 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 13408380.935253702,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 74.5802200003709 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 13969153.315774584,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 71.58629999935329 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 5553898.025560928,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 180.05371999947783 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 11476717.24107967,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 87.13293000027988 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2552842.7607666124,
            "unit": "iter/sec",
            "range": "stddev: 0.000002000146166306193",
            "extra": "mean: 391.720169909604 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 912682.3724918673,
            "unit": "iter/sec",
            "range": "stddev: 0.00000727054852886332",
            "extra": "mean: 1.0956714297765302 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 736713.3634635169,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026426056711524886",
            "extra": "mean: 1.3573800199560537 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 708757.1302127676,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018017516881211102",
            "extra": "mean: 1.410920550033552 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 4367641.511185149,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012665976785347316",
            "extra": "mean: 228.95651976909903 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1333882.554895551,
            "unit": "iter/sec",
            "range": "stddev: 0.000004413614796851972",
            "extra": "mean: 749.6911900750547 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2436349.218941229,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022908120908809424",
            "extra": "mean: 410.4501900735613 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 4116375.5331822108,
            "unit": "iter/sec",
            "range": "stddev: 9.81426687966046e-7",
            "extra": "mean: 242.9321600857293 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1402074.4643247472,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013254778619601882",
            "extra": "mean: 713.2288800949027 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 765515.9675680114,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021178493705391937",
            "extra": "mean: 1.3063084799875924 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 827831.8595537241,
            "unit": "iter/sec",
            "range": "stddev: 0.0000030668640066251805",
            "extra": "mean: 1.2079747698271603 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 6667625.471233237,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 149.97842999946442 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 4140885.170500349,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 241.4942600012182 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 6973909.697227235,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 143.39158999973733 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 12528643.611508053,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 79.81709999967279 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 4845029.549574388,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 206.39709000079165 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 4850081.789336235,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 206.18209000076604 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 44276.698531658774,
            "unit": "iter/sec",
            "range": "stddev: 0.00013800982599673772",
            "extra": "mean: 22.585243099933905 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 11906.775737429803,
            "unit": "iter/sec",
            "range": "stddev: 0.00010333889556035034",
            "extra": "mean: 83.98579280001286 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 3.552507172202436,
            "unit": "iter/sec",
            "range": "stddev: 0.21362011593654726",
            "extra": "mean: 281.49133880003774 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 1994747.0331566902,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 501.3167000015528 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1936883.4379503182,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 516.293329999371 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 4927200.125438081,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 202.95501999953558 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2004418.7009338248,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 498.8977600010003 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2053244.5318774546,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 487.03404999969274 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 316555.72280229983,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.1590014899984453 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 54865.762161761406,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 18.226302900006885 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 45783.26073427536,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 21.842044100003477 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.7553706548090937,
            "unit": "iter/sec",
            "range": "stddev: 0.005373265492611653",
            "extra": "mean: 266.2852996200013 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 12416815.099201722,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 80.53595000092173 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 5386936.657087738,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 185.63425999900574 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 281453.14936595137,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.5529891999885876 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_mean",
            "value": 151759.30924944373,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.589381600019806 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_std",
            "value": 39283.30069167844,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.456109399988236 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_mean",
            "value": 2311866.43589521,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 432.5509399996008 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_std",
            "value": 1255764.5084902816,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 796.3276500004213 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 98965.68478789977,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.104512509999495 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}