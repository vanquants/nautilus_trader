window.BENCHMARK_DATA = {
  "lastUpdate": 1632556478410,
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
          "id": "bd855dfde7afdda600587fff196aee13a87ebfdb",
          "message": "Update workflows",
          "timestamp": "2021-09-25T15:50:49+10:00",
          "tree_id": "935102d3a5ee457cc157d0dfd3a21f35ac2563cf",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/bd855dfde7afdda600587fff196aee13a87ebfdb"
        },
        "date": 1632551290377,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 23966.274658300834,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 41.72530000000001 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_mean",
            "value": 134481.08456305132,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.43598999999997 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_std",
            "value": 41731.089035364945,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 23.96295000000004 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_mean",
            "value": 1475324.4607320398,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 677.8169999999939 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_std",
            "value": 760356.8202486101,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.3151719999999933 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 91725.55676725018,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.902086999999998 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 34586.7933096696,
            "unit": "iter/sec",
            "range": "stddev: 0.00012537955707337734",
            "extra": "mean: 28.912769999999544 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 11954.429713930464,
            "unit": "iter/sec",
            "range": "stddev: 0.0001775277235568363",
            "extra": "mean: 83.65100000000024 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 2.130233168079785,
            "unit": "iter/sec",
            "range": "stddev: 0.4588997642338825",
            "extra": "mean: 469.4321800000001 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 2372439.8408567053,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 421.5070000000054 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1861202.671942534,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 537.2870000000063 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 8642743.552513242,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 115.70400000000092 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2560314.611459407,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 390.5770000000075 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2337677.5173864933,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 427.7749999999969 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 326189.4580133816,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.0657030000000063 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 69540.35218016083,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 14.380139999999741 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 58761.31155247316,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 17.0180000000002 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.281958226585864,
            "unit": "iter/sec",
            "range": "stddev: 0.0037091981076882584",
            "extra": "mean: 304.696139 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 14079945.933008265,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 71.02299999999673 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 6107317.788175034,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 163.73799999996663 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 9840001.574399265,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 101.62600000001021 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 9886796.18369643,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 101.14500000000248 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 11001463.194599936,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 90.89700000004086 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 10134792.74348855,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 98.66999999999848 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 155.19756650228055,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.443399999994881 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 16128511.983497428,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 62.00199999994993 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 14338356.537581904,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 69.74299999995992 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 7589787.182361101,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 131.75600000010945 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 12934769.955114879,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 77.31100000000879 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 1403073.5729605213,
            "unit": "iter/sec",
            "range": "stddev: 5.580783015383202e-7",
            "extra": "mean: 712.7210000042794 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 728856.5989358802,
            "unit": "iter/sec",
            "range": "stddev: 7.921495735101534e-7",
            "extra": "mean: 1.3720119999736369 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 573553.0117751154,
            "unit": "iter/sec",
            "range": "stddev: 8.296493638008983e-7",
            "extra": "mean: 1.7435180000276773 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 576777.1079444451,
            "unit": "iter/sec",
            "range": "stddev: 8.308827568469427e-7",
            "extra": "mean: 1.733772000008571 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3861167.848869722,
            "unit": "iter/sec",
            "range": "stddev: 2.06214992462678e-7",
            "extra": "mean: 258.98899999717173 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1321113.9104163158,
            "unit": "iter/sec",
            "range": "stddev: 4.0653453820478115e-7",
            "extra": "mean: 756.9369999933429 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2432172.781760143,
            "unit": "iter/sec",
            "range": "stddev: 2.8894307547698334e-7",
            "extra": "mean: 411.15499996521976 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 4486759.5725871995,
            "unit": "iter/sec",
            "range": "stddev: 1.4775390158299112e-7",
            "extra": "mean: 222.8779999957453 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1416707.5150582495,
            "unit": "iter/sec",
            "range": "stddev: 3.498597732990426e-7",
            "extra": "mean: 705.8620000042026 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 802542.4544981901,
            "unit": "iter/sec",
            "range": "stddev: 7.162492921653497e-7",
            "extra": "mean: 1.2460399999963556 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 643291.1806078879,
            "unit": "iter/sec",
            "range": "stddev: 8.863081582048315e-7",
            "extra": "mean: 1.5545059999968203 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 8694744.896186348,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 115.0119999999788 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 4638068.3372969255,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 215.60700000009092 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 11743153.741355369,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 85.15600000009727 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 14724938.155270586,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 67.91199999995001 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 6120775.134967558,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 163.37799999988079 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 6330075.454499787,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 157.9759999999908 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 2.4787613530369037,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 403.42729999998994 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 7.947647257982119,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 125.82340000000158 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 1.6122515641258404,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 620.2506000000056 msec\nrounds: 1"
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
          "id": "95bb79a80adc407f35472fb96a41d3b9718d3366",
          "message": "Update workflows",
          "timestamp": "2021-09-25T16:49:33+10:00",
          "tree_id": "6840b05c23bc5e60c2c7863ac94d30b1808e091a",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/95bb79a80adc407f35472fb96a41d3b9718d3366"
        },
        "date": 1632555584722,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 25819.024645033598,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 38.73112999999999 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_mean",
            "value": 137639.04985011046,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.265380000000032 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_std",
            "value": 39591.94953135005,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.257660000000026 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_mean",
            "value": 1434098.8553023036,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 697.3019999999951 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_std",
            "value": 777588.6509381214,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.2860270000000007 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 88302.29478237632,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.324734000000003 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 34021.62482517109,
            "unit": "iter/sec",
            "range": "stddev: 0.0001274739342539762",
            "extra": "mean: 29.393070000000243 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 9786.630894573469,
            "unit": "iter/sec",
            "range": "stddev: 0.00018628815440147772",
            "extra": "mean: 102.1802099999995 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 1.980749334903988,
            "unit": "iter/sec",
            "range": "stddev: 0.4799451618784565",
            "extra": "mean: 504.85944000000006 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 2357984.489178007,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 424.0910000000042 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1843216.043352468,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 542.5299999999921 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 8211663.84732881,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 121.77799999999904 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2410684.1521622664,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 414.8200000000202 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2424595.0926195947,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 412.4399999999895 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 320861.44881778874,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.116609999999973 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 45652.26124780368,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 21.90472000000021 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 38817.193532434714,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.761779999999845 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.0390550299077663,
            "unit": "iter/sec",
            "range": "stddev: 0.015812933144440017",
            "extra": "mean: 329.0496519999999 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 12464631.607816031,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 80.2269999999794 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 5800329.458711335,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 172.40400000005707 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 10025163.159527289,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 99.74900000003117 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 9975659.39107974,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 100.2440000000604 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 9705722.493986571,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 103.03199999995627 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 9686824.949390057,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 103.23299999996038 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 163.49219324765158,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.116500000004521 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 14707828.977375573,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 67.99099999994951 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 15167602.002101848,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 65.93000000009397 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 7575872.36169698,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 131.99800000009532 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 12712133.731660495,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 78.66499999991561 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 1419811.1935395186,
            "unit": "iter/sec",
            "range": "stddev: 7.536444294325589e-7",
            "extra": "mean: 704.3189999841104 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 704388.0558373573,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016248449813971044",
            "extra": "mean: 1.4196719999904417 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 565544.3250865656,
            "unit": "iter/sec",
            "range": "stddev: 0.0000030373353326525406",
            "extra": "mean: 1.7682080000483325 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 568106.2858778745,
            "unit": "iter/sec",
            "range": "stddev: 0.000002152398242281465",
            "extra": "mean: 1.7602339999719163 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3929180.4516205206,
            "unit": "iter/sec",
            "range": "stddev: 5.362251125743968e-7",
            "extra": "mean: 254.50599999487622 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1131289.5456313328,
            "unit": "iter/sec",
            "range": "stddev: 0.000002754363677219112",
            "extra": "mean: 883.9470000069127 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2437187.5829198947,
            "unit": "iter/sec",
            "range": "stddev: 5.340592445604492e-7",
            "extra": "mean: 410.3090000162979 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 4470132.807586844,
            "unit": "iter/sec",
            "range": "stddev: 4.268661386361279e-7",
            "extra": "mean: 223.7070000029462 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1394768.2243797753,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012716772626700826",
            "extra": "mean: 716.9650000054162 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 846223.431780002,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017192775044669707",
            "extra": "mean: 1.1817209999686895 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 634038.2147304747,
            "unit": "iter/sec",
            "range": "stddev: 0.000001955129821939579",
            "extra": "mean: 1.5771920000517525 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 8454014.388725728,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 118.28700000009462 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 4643905.338634023,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 215.33599999997932 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 11729242.173673129,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 85.25699999992753 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 14467383.284368439,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 69.12100000008081 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 5473873.20320143,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 182.6859999999897 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 5400005.400005694,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 185.18499999998994 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 2.3755299510379526,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 420.9586999999999 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 7.570177437389065,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 132.09729999999809 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 1.5343984513623374,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 651.7211999999972 msec\nrounds: 1"
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
          "id": "95bb79a80adc407f35472fb96a41d3b9718d3366",
          "message": "Update workflows",
          "timestamp": "2021-09-25T16:49:33+10:00",
          "tree_id": "6840b05c23bc5e60c2c7863ac94d30b1808e091a",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/95bb79a80adc407f35472fb96a41d3b9718d3366"
        },
        "date": 1632556471364,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 93672.7701673621,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.675460950000009 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_mean",
            "value": 70067.64554717572,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 14.271922400000037 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_std",
            "value": 21892.944408211766,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 45.676816299999956 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_mean",
            "value": 2389652.936605051,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 418.4708100000023 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_std",
            "value": 1352277.259245532,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 739.4933200000154 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 118204.95561983087,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.459882200000024 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 17501453.933286488,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 57.1381099999968 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 6419487.303795756,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 155.77567999997655 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.6839912719465273,
            "unit": "iter/sec",
            "range": "stddev: 0.0015795884033765438",
            "extra": "mean: 271.44472562000004 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 218264.9587174645,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.581587469999988 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 22486.52519150928,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 44.471077299999706 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 20547.823846654188,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 48.66695409999977 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 2815367.944941303,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 355.19336000000123 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 2082189.4305148437,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 480.2637000000232 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 10544686.853906056,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 94.83449000001087 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2937958.8008274827,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 340.3723699999972 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2962482.821302505,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 337.55470000002674 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 36145.76023606433,
            "unit": "iter/sec",
            "range": "stddev: 0.0001329682187575985",
            "extra": "mean: 27.66576199999946 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 7334.42440817545,
            "unit": "iter/sec",
            "range": "stddev: 0.00013051518624387123",
            "extra": "mean: 136.3433508000071 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 2.616076742316128,
            "unit": "iter/sec",
            "range": "stddev: 0.2965896554845153",
            "extra": "mean: 382.25178330000205 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 6275784.4526637355,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 159.34262999991233 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 6433158.454353367,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 155.44464000001312 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 9569929.291615149,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 104.49398000005772 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 4717663.190455192,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 211.96935000006079 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 12991514.462426845,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 76.9733199999223 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 19584338.09148962,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 51.06120999997188 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2821767.646186603,
            "unit": "iter/sec",
            "range": "stddev: 2.2333665871283197e-7",
            "extra": "mean: 354.38778999093756 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 689805.6737366804,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010266850652251648",
            "extra": "mean: 1.4496836400068958 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 528580.5596523826,
            "unit": "iter/sec",
            "range": "stddev: 6.618646539481096e-7",
            "extra": "mean: 1.8918592099899456 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 524524.9398612097,
            "unit": "iter/sec",
            "range": "stddev: 5.53555299938919e-7",
            "extra": "mean: 1.9064870399958522 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 4059726.2043855167,
            "unit": "iter/sec",
            "range": "stddev: 1.3186223932025798e-7",
            "extra": "mean: 246.32203002255437 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1335506.986670693,
            "unit": "iter/sec",
            "range": "stddev: 4.5638393046552674e-7",
            "extra": "mean: 748.7793100153795 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2706347.3476822735,
            "unit": "iter/sec",
            "range": "stddev: 1.4056615416343325e-7",
            "extra": "mean: 369.5017200421091 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 5452991.748877716,
            "unit": "iter/sec",
            "range": "stddev: 8.726445284239762e-8",
            "extra": "mean: 183.3855699865694 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1273258.955572604,
            "unit": "iter/sec",
            "range": "stddev: 4.98541135406011e-7",
            "extra": "mean: 785.3861899995707 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 679242.1236481767,
            "unit": "iter/sec",
            "range": "stddev: 6.804206819647515e-7",
            "extra": "mean: 1.4722290699950236 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 795036.6498060744,
            "unit": "iter/sec",
            "range": "stddev: 7.825719270667469e-7",
            "extra": "mean: 1.2578036499876077 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 17274063.028903667,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 57.890260000021954 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 17337639.078225162,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 57.67797999993718 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 7990136.336497188,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 125.1543099999708 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 15627453.998606259,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 63.98995000012064 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 8711580.731125934,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 114.78973000009773 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 9432376.557077732,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 106.01781999994841 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 9095575.120945072,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 109.94357000001287 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 11312313.170091193,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 88.39924999989535 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 163.30713941274746,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.123430999991797 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 2.2175578209574187,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 450.9465280000029 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 7.122341036007799,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 140.40327399999342 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 1.1852535906475365,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 843.7013039999925 msec\nrounds: 1"
          }
        ]
      }
    ]
  }
}