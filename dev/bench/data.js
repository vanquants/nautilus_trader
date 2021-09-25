window.BENCHMARK_DATA = {
  "lastUpdate": 1632550813322,
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
      },
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
        "date": 1632550424359,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 92870.45825196517,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.76768672 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_mean",
            "value": 65461.59121653088,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 15.276133400000093 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_std",
            "value": 20266.15467982863,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 49.34335179999998 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_mean",
            "value": 2467903.8614229932,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 405.2021700000097 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_std",
            "value": 1277196.6249313068,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 782.9647999999878 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 112108.44527940708,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.91993460000009 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 17726784.515507393,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 56.411810000014384 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 6464946.12469421,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 154.68033000001213 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.741175186758635,
            "unit": "iter/sec",
            "range": "stddev: 0.0017576450796719986",
            "extra": "mean: 267.29568921000003 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 218011.37894695642,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.58691653999999 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 30935.08384331143,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 32.3257568999999 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 28309.54706210955,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 35.32377249999996 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 2874500.156760866,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 347.88657 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 2237553.8917650944,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 446.9166100000166 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 10893479.95811862,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 91.79803000002096 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2883399.504949323,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 346.81284999997786 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2886962.123951703,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 346.3848700000227 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 35329.276969424296,
            "unit": "iter/sec",
            "range": "stddev: 0.00013624794751945302",
            "extra": "mean: 28.305136299999845 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 8379.143753147473,
            "unit": "iter/sec",
            "range": "stddev: 0.0001329868656723082",
            "extra": "mean: 119.34393649999961 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 2.660576081576599,
            "unit": "iter/sec",
            "range": "stddev: 0.3087562083108142",
            "extra": "mean: 375.85844920000255 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 6541710.403453554,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 152.86521999996694 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 7030348.9619133035,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 142.24045000005958 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 8882925.879442386,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 112.57552000003557 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 4957513.612588124,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 201.71402000002558 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 13125908.969181836,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 76.18520000008289 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 20149387.55934517,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 49.62930000004917 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2730762.3933917484,
            "unit": "iter/sec",
            "range": "stddev: 2.0109062386446663e-7",
            "extra": "mean: 366.1980999957848 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 742552.4752767133,
            "unit": "iter/sec",
            "range": "stddev: 5.541797794907572e-7",
            "extra": "mean: 1.346706169994718 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 546718.0855096361,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017643040439376298",
            "extra": "mean: 1.8290962499764873 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 535218.9109925197,
            "unit": "iter/sec",
            "range": "stddev: 6.497419845196098e-7",
            "extra": "mean: 1.86839436997019 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 4170300.737234682,
            "unit": "iter/sec",
            "range": "stddev: 2.2112547129118817e-7",
            "extra": "mean: 239.790859942417 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1427552.176693986,
            "unit": "iter/sec",
            "range": "stddev: 3.3751658125502283e-7",
            "extra": "mean: 700.4997900082799 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2683516.070357435,
            "unit": "iter/sec",
            "range": "stddev: 2.3803028739965604e-7",
            "extra": "mean: 372.6454300185367 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 5711247.004574059,
            "unit": "iter/sec",
            "range": "stddev: 1.2790895546644046e-7",
            "extra": "mean: 175.09310999841432 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1240143.0792581816,
            "unit": "iter/sec",
            "range": "stddev: 4.723726874273481e-7",
            "extra": "mean: 806.3585700112696 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 710427.1207006226,
            "unit": "iter/sec",
            "range": "stddev: 8.914601512582309e-7",
            "extra": "mean: 1.4076039200386958 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 770883.1335079178,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015275212100772795",
            "extra": "mean: 1.2972134900000754 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 17284856.685188375,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 57.854110000050696 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 17117141.32785264,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 58.42096999998603 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 7918694.644360973,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 126.28344000006565 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 15755437.792403884,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 63.47015000002899 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 9302644.900093582,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 107.4963099999593 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 10294653.574614203,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 97.13779999998451 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 9478466.346225135,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 105.50230000006877 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 11652770.737566954,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 85.81649999996444 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 159.70555406428582,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.261522999992053 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 2.3027636159286144,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 434.26081300000874 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 7.305489817714851,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 136.8833609999882 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 1.1655598822783144,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 857.9567769999983 msec\nrounds: 1"
          }
        ]
      },
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
        "date": 1632550805779,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 2.8543234135620734,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 350.3457229999185 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 8.801479092091204,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 113.6172669998814 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 1.866160830089047,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 535.8594949998405 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 6788056.577395021,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 147.31756999935897 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 7295429.588400246,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 137.0721200009939 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 6994455.774576772,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 142.97038000222528 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 9608765.654264819,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 104.0716399984376 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 171.27510893011132,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.838560000029247 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 13598359.92844182,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 73.5382800030493 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 13636747.325620031,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 73.33126999583328 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 6400739.003731167,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 156.23195999978634 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 12878887.20242422,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 77.64645999941422 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2784673.5553222876,
            "unit": "iter/sec",
            "range": "stddev: 6.172978579459722e-7",
            "extra": "mean: 359.1085203106559 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 966698.4283822678,
            "unit": "iter/sec",
            "range": "stddev: 0.000001854066799643585",
            "extra": "mean: 1.0344487697921068 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 754044.691559022,
            "unit": "iter/sec",
            "range": "stddev: 0.000003852706147305112",
            "extra": "mean: 1.326181340700714 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 759366.5681173207,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017909664099121676",
            "extra": "mean: 1.3168870503204744 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 4013268.992066409,
            "unit": "iter/sec",
            "range": "stddev: 0.000001782051884856657",
            "extra": "mean: 249.17342993376224 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1341460.7079609921,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026060940716104877",
            "extra": "mean: 745.4560495625628 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2691343.4138673875,
            "unit": "iter/sec",
            "range": "stddev: 9.997398913410846e-7",
            "extra": "mean: 371.5616501585828 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 4865405.606269563,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014297789796856475",
            "extra": "mean: 205.53271010157914 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1314302.9970174388,
            "unit": "iter/sec",
            "range": "stddev: 0.0000033535173238425598",
            "extra": "mean: 760.859559986784 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 783533.9770538824,
            "unit": "iter/sec",
            "range": "stddev: 0.000004571267186943827",
            "extra": "mean: 1.2762688400061961 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 825857.894525079,
            "unit": "iter/sec",
            "range": "stddev: 0.000002678630362892796",
            "extra": "mean: 1.2108620703747874 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 7652642.281151035,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 130.67382000372163 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 4288267.826718785,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 233.19438999806152 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 9491386.045321906,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 105.35868999795639 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 16824921.881709628,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 59.435640000629064 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 5385050.786670429,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 185.69927000044117 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 5725809.970223376,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 174.64777999975922 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 39353.3275469459,
            "unit": "iter/sec",
            "range": "stddev: 0.00015112438958808611",
            "extra": "mean: 25.410811800020383 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 9673.973220321286,
            "unit": "iter/sec",
            "range": "stddev: 0.000187176403291519",
            "extra": "mean: 103.37014350002391 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 3.0578614085746505,
            "unit": "iter/sec",
            "range": "stddev: 0.29372325770986085",
            "extra": "mean: 327.02593950002665 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 2085395.0069904344,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 479.5254599957844 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1768211.1737852416,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 565.5433099991569 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 8030736.5196697945,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 124.52158000087366 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2420583.7339466903,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 413.12348999781534 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2415759.2732645264,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 413.94852999928844 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 295892.98320116795,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.379600250000294 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 49345.8543306866,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 20.265126899994357 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 40822.63104447659,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 24.496216299985463 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.1963921126518184,
            "unit": "iter/sec",
            "range": "stddev: 0.005969261970847749",
            "extra": "mean: 312.8527304399995 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 13725658.402874438,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 72.85624999894935 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 5242807.5233769175,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 190.73750000188738 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 242407.5589090924,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.125283899975329 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_mean",
            "value": 120926.60689718636,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.269478700003674 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_std",
            "value": 38706.54853186496,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.835421599958863 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_mean",
            "value": 2121178.6515731686,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 471.43601000243507 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_std",
            "value": 1171058.8223189265,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 853.9280700006202 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 100723.66366582098,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.928153559999373 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}