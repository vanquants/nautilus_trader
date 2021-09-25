window.BENCHMARK_DATA = {
  "lastUpdate": 1632549462281,
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
          "id": "25c40b84dc9bcbba616406d70ed90dedd8d87697",
          "message": "Update workflows",
          "timestamp": "2021-09-25T15:19:08+10:00",
          "tree_id": "b975c866812ea27b75f740bdd1f1a7b14a8f27cf",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/25c40b84dc9bcbba616406d70ed90dedd8d87697"
        },
        "date": 1632549453293,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 110501.63321413884,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.049640000000005 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.703198505134304,
            "unit": "iter/sec",
            "range": "stddev: 0.008076630099042534",
            "extra": "mean: 270.03683399999994 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 15434004.198046451,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 64.79200000001129 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 6126324.817741887,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 163.22999999999865 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 24235.550159106544,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 41.261699999999735 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_mean",
            "value": 134096.61124453353,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.457310000000206 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_std",
            "value": 35870.578951144584,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 27.87799999999976 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_mean",
            "value": 1703885.1990308685,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 586.8939999999867 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_std",
            "value": 912975.2035934578,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.0953200000000152 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 2533396.499352423,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 394.7270000000458 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 2172831.351349145,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 460.2289999999698 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 8843922.456484372,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 113.07200000004514 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2859708.424129147,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 349.6859999999913 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2703616.086515556,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 369.8750000000217 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 361548.8463337843,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.765878000000015 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 67092.88540334025,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 14.90470999999971 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 48541.02663300506,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 20.601130000000012 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 9773833.492970597,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 102.31400000002111 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 5659854.088962591,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 176.68299999996862 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 15825539.255258702,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 63.188999999965745 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 20488024.749519594,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 48.809000000034075 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 6488113.7755631665,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 154.12800000000004 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 6704974.4205221655,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 149.14300000000935 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 26453.66877995864,
            "unit": "iter/sec",
            "range": "stddev: 0.00016487403499076917",
            "extra": "mean: 37.80194000000492 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 9988.207921727417,
            "unit": "iter/sec",
            "range": "stddev: 0.00020426958920563622",
            "extra": "mean: 100.11806000000192 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 1.8777493184004768,
            "unit": "iter/sec",
            "range": "stddev: 0.4840917197811338",
            "extra": "mean: 532.5524499999979 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 10717424.388572762,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 93.30599999998412 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 11831239.203993266,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 84.52200000000687 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 10476469.848714136,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 95.45200000005138 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 9687857.239731492,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 103.222000000045 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 207.06505984186964,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.829399999998429 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 14777378.788555766,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 67.67099999997583 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 16649462.222365709,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 60.06200000001626 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 8196049.504135935,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 122.01000000004571 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 15631105.900746137,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 63.97499999998502 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 1722516.3897512963,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011469915857523241",
            "extra": "mean: 580.545999997355 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 830935.3922850954,
            "unit": "iter/sec",
            "range": "stddev: 0.000002995419341753811",
            "extra": "mean: 1.2034629999932633 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 665521.083044421,
            "unit": "iter/sec",
            "range": "stddev: 0.000012055710262542539",
            "extra": "mean: 1.5025819999954138 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 684801.113215061,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020001319376530195",
            "extra": "mean: 1.4602779999949433 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 4705550.196309228,
            "unit": "iter/sec",
            "range": "stddev: 0.0000032631663392010766",
            "extra": "mean: 212.51500000666113 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1590356.0807134758,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011468411783551616",
            "extra": "mean: 628.7900000051394 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2799222.935830192,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014929866186698204",
            "extra": "mean: 357.2419999850496 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 5360378.228600131,
            "unit": "iter/sec",
            "range": "stddev: 5.120875193029308e-7",
            "extra": "mean: 186.5539999891297 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1509978.694190546,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025602961584604896",
            "extra": "mean: 662.2610000044205 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 956146.3477661925,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016639124940428244",
            "extra": "mean: 1.0458649999932135 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 647680.1392783666,
            "unit": "iter/sec",
            "range": "stddev: 0.000009003088160135516",
            "extra": "mean: 1.5439719999970691 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 2.891025678090028,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 345.89800000000537 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 9.452716096180538,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 105.78969999998833 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 1.9286782497939299,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 518.4897999999976 msec\nrounds: 1"
          }
        ]
      }
    ]
  }
}