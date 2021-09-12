window.BENCHMARK_DATA = {
  "lastUpdate": 1631484952993,
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
          "id": "3b43e06c0afc1e1264fa2f3090366069036e395d",
          "message": "Update",
          "timestamp": "2021-09-13T07:58:16+10:00",
          "tree_id": "c97b032dbdfbd19eea27b080d92ad548eb0c252c",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/3b43e06c0afc1e1264fa2f3090366069036e395d"
        },
        "date": 1631484949256,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 0.3207953336530682,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.1172523260000844 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 0.8042374919586511,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.2434138050000456 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 0.3145086041881678,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.1795632509999905 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 7628874.190242069,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 131.08094000017445 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 6390057.683664784,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 156.4931100006106 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 6472948.576988887,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 154.48909999918214 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 8724494.594379464,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 114.61982000014359 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 174.7170152163682,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.723541000065779 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 11841242.098951597,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 84.4505999998546 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 12983379.327043608,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 77.02154999947197 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 5414586.202159168,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 184.68632000008256 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 10177939.905587003,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 98.25170999988586 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 3032410.7401476027,
            "unit": "iter/sec",
            "range": "stddev: 2.2846615535265008e-7",
            "extra": "mean: 329.77062993495565 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 894671.3046617967,
            "unit": "iter/sec",
            "range": "stddev: 4.769436609282731e-7",
            "extra": "mean: 1.1177289299314452 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 714865.1738266652,
            "unit": "iter/sec",
            "range": "stddev: 5.876077819152726e-7",
            "extra": "mean: 1.398865179914992 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 682067.0308251656,
            "unit": "iter/sec",
            "range": "stddev: 5.188626923463404e-7",
            "extra": "mean: 1.4661315601051683 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 4374744.076063326,
            "unit": "iter/sec",
            "range": "stddev: 2.2826661187727232e-7",
            "extra": "mean: 228.58480007357684 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1464976.2778648988,
            "unit": "iter/sec",
            "range": "stddev: 4.1582534188185804e-7",
            "extra": "mean: 682.604909792417 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2999487.47774951,
            "unit": "iter/sec",
            "range": "stddev: 2.668112039482974e-7",
            "extra": "mean: 333.39028998057074 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 5290296.278333089,
            "unit": "iter/sec",
            "range": "stddev: 1.8309651310315095e-7",
            "extra": "mean: 189.02533003597455 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1537951.2691720307,
            "unit": "iter/sec",
            "range": "stddev: 3.763357576636996e-7",
            "extra": "mean: 650.2156603039566 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 799949.0144438735,
            "unit": "iter/sec",
            "range": "stddev: 4.842160633168862e-7",
            "extra": "mean: 1.2500796700089722 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 922474.2833009402,
            "unit": "iter/sec",
            "range": "stddev: 5.564050160637464e-7",
            "extra": "mean: 1.0840410601167605 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 7004958.529946043,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 142.7560199999789 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 4592495.054791244,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 217.74656000047798 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 9419055.276285522,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 106.16776000006212 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 12618524.220815439,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 79.24856999920848 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 5663916.9860192025,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 176.55625999964286 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 5265863.994550093,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 189.90235999922334 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 74897.30306442294,
            "unit": "iter/sec",
            "range": "stddev: 0.00006741240010305093",
            "extra": "mean: 13.351615600095101 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 16406.256635566842,
            "unit": "iter/sec",
            "range": "stddev: 0.00012709764398456777",
            "extra": "mean: 60.95235629998115 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 5.0059086291384265,
            "unit": "iter/sec",
            "range": "stddev: 0.16785203267937515",
            "extra": "mean: 199.76393379998854 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 2257733.102756471,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 442.92215000041324 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1701162.8758122888,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 587.8331900009925 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 6538678.999849301,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 152.93608999968455 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2619874.1768785017,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 381.69771999946533 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2458295.6292259074,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 406.78589999970427 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 377411.34382029943,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.649628890000031 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 81115.05425809517,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 12.32816780000121 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 63741.802254481176,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 15.688291899994057 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.459721928312462,
            "unit": "iter/sec",
            "range": "stddev: 0.005993783526447929",
            "extra": "mean: 289.04057052000326 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 11623090.15202154,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 86.03563999940889 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 4902789.692188746,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 203.96551000203544 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 262155.6117424476,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.8145283000176278 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_mean",
            "value": 142911.41244518684,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.997341800001777 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_std",
            "value": 53288.80123217686,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 18.765668899982302 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_mean",
            "value": 2204729.6035814383,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 453.5703600004126 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_std",
            "value": 1296190.1911280118,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 771.4917199996307 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 106012.75904900293,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.432826849999856 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}