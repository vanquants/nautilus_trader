window.BENCHMARK_DATA = {
  "lastUpdate": 1628758224623,
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
          "id": "0d090eebaca2cde7d6864b02b3e6dd9eb23db4bd",
          "message": "Upgrade Account calculations and wiring",
          "timestamp": "2021-08-12T18:32:35+10:00",
          "tree_id": "73cff397378b77ebd8754dd28a7d0dbd87f01732",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/0d090eebaca2cde7d6864b02b3e6dd9eb23db4bd"
        },
        "date": 1628758216739,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 0.3119788933674633,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.2053450450000582 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 0.4225748452765643,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.3664446929999485 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 0.1309961425483376,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.633812573 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 7385128.935128316,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 135.40724999984377 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 7139633.08854378,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 140.06322000000182 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 7454939.549753963,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 134.1392500000893 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 8077590.0994166015,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 123.79930000065544 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 195.76478547515896,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.108171000074435 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 11906104.17618064,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 83.9905300006194 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 11618651.23481912,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 86.06851000081406 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 6166821.525805446,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 162.15809000073023 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 10692044.733839508,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 93.52747999969324 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2987786.2888146252,
            "unit": "iter/sec",
            "range": "stddev: 1.1709834110657036e-7",
            "extra": "mean: 334.6959599298316 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 941650.4596402607,
            "unit": "iter/sec",
            "range": "stddev: 1.7612330466966543e-7",
            "extra": "mean: 1.0619651801391683 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 726850.6304474068,
            "unit": "iter/sec",
            "range": "stddev: 2.1643778065932986e-7",
            "extra": "mean: 1.3757984902406406 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 725435.7551182361,
            "unit": "iter/sec",
            "range": "stddev: 1.700119751151769e-7",
            "extra": "mean: 1.3784818199883375 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 4114034.6269304254,
            "unit": "iter/sec",
            "range": "stddev: 1.5093047971381235e-7",
            "extra": "mean: 243.07038969823225 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1361587.2861913517,
            "unit": "iter/sec",
            "range": "stddev: 1.291678555941947e-7",
            "extra": "mean: 734.4369399902462 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2861283.708417545,
            "unit": "iter/sec",
            "range": "stddev: 8.286629355849896e-8",
            "extra": "mean: 349.4934798175109 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 4580952.971106187,
            "unit": "iter/sec",
            "range": "stddev: 1.183340029942744e-7",
            "extra": "mean: 218.29519017273924 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1484594.070767162,
            "unit": "iter/sec",
            "range": "stddev: 8.776030436168796e-8",
            "extra": "mean: 673.5847998390909 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 793772.0014896716,
            "unit": "iter/sec",
            "range": "stddev: 1.4206750656298607e-7",
            "extra": "mean: 1.2598075998187142 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 899369.3721686569,
            "unit": "iter/sec",
            "range": "stddev: 2.72848373149686e-7",
            "extra": "mean: 1.1118902099019579 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 7667879.009478095,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 130.41415999964556 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 4585425.701300724,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 218.08225999961905 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 8595411.734831981,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 116.34114000003137 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 12247982.451099213,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 81.64609999994354 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 5364771.466381593,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 186.40122999954656 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 5548151.239507144,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 180.24021999963225 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_mean",
            "value": 167596.90490737426,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.966697300004853 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_std",
            "value": 55154.60516988972,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 18.130852299998423 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_mean",
            "value": 2276739.819686958,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 439.2245399992589 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_std",
            "value": 1271797.0595459812,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 786.2889700004416 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 63794.55377323406,
            "unit": "iter/sec",
            "range": "stddev: 0.00008586564857689795",
            "extra": "mean: 15.675319300055435 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 15407.295468706092,
            "unit": "iter/sec",
            "range": "stddev: 0.0001878779259720134",
            "extra": "mean: 64.90431770008627 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 4.858336468932633,
            "unit": "iter/sec",
            "range": "stddev: 0.20626744259693522",
            "extra": "mean: 205.8317710999745 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 2339546.2557657748,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 427.4333099999694 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1963809.4659448157,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 509.2143699994267 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 7835142.337069363,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 127.63010000071516 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2699097.0737509113,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 370.4942700005631 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2693920.0137945893,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 371.2062700003571 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 355175.80978814233,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.815507060000755 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 70827.49741315441,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 14.11881029999904 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 62479.68746310842,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 16.005201699999816 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.397356413477634,
            "unit": "iter/sec",
            "range": "stddev: 0.0004646232849087913",
            "extra": "mean: 294.34650895999766 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 11453605.738445923,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 87.30874999855587 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 5192171.347880974,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 192.5976500001525 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 298873.3550468406,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.3458987999892997 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 105594.6528557412,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.47017649999907 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}