window.BENCHMARK_DATA = {
  "lastUpdate": 1633075209978,
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
          "id": "cf3b21dc9988b5ea9baac9b89f440dfda7e38cd2",
          "message": "Add some contingency order machinery\n\n- Add example strategy.\n- Fix backtest config objects (primitive types).\n- Add some order list processing functionality.",
          "timestamp": "2021-10-01T16:38:30+10:00",
          "tree_id": "7d7135341e379fac84f39c16ec53c6ccf75a1344",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/cf3b21dc9988b5ea9baac9b89f440dfda7e38cd2"
        },
        "date": 1633073160434,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 2.582094259242602,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 387.28253099998255 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 8.130775457525436,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 122.98949899968648 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 1.0449670295764215,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 956.9679920000453 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 6487434.844389804,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 154.14412999689375 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 6521833.271870489,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 153.33111999552784 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 6559307.421251419,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 152.4551199963753 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 8212885.21214086,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 121.75988999842957 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 197.99482719340907,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.050636999840208 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 11327510.615599528,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 88.28064999761409 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 10627140.505201483,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 94.09869000137405 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 4776723.294938922,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 209.3485299974418 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 9146469.737127326,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 109.33179999938147 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2836554.657689286,
            "unit": "iter/sec",
            "range": "stddev: 5.403712008232614e-7",
            "extra": "mean: 352.54035993602884 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 872447.7327244409,
            "unit": "iter/sec",
            "range": "stddev: 0.0000053230585402618135",
            "extra": "mean: 1.1462004685108695 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 708076.3752480997,
            "unit": "iter/sec",
            "range": "stddev: 0.0000031618659895578834",
            "extra": "mean: 1.4122770296489762 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 720813.031640154,
            "unit": "iter/sec",
            "range": "stddev: 0.00000216665678511695",
            "extra": "mean: 1.3873223098153176 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3730733.6986302827,
            "unit": "iter/sec",
            "range": "stddev: 4.260682788092865e-7",
            "extra": "mean: 268.0437899834942 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1119427.8383332186,
            "unit": "iter/sec",
            "range": "stddev: 0.000004568496724815995",
            "extra": "mean: 893.3134997687375 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2244149.1017593355,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013232783964387983",
            "extra": "mean: 445.6031906329372 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 3896811.044115308,
            "unit": "iter/sec",
            "range": "stddev: 6.966380890258145e-7",
            "extra": "mean: 256.62008978088124 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 924869.9642165052,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024064687924286343",
            "extra": "mean: 1.0812330799899428 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 584757.4525581334,
            "unit": "iter/sec",
            "range": "stddev: 0.000002471383274421424",
            "extra": "mean: 1.7101107401458648 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 836974.3813487614,
            "unit": "iter/sec",
            "range": "stddev: 0.00000360416966910373",
            "extra": "mean: 1.1947796996946636 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 6787341.526653717,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 147.3330899989378 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 4088644.9294289323,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 244.57981000068688 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 7148932.203096686,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 139.88103000428964 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 11018352.498456245,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 90.75767000013002 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 4366112.69569686,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 229.036690002431 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 4280515.538407464,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 233.61672000191902 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 67931.419263114,
            "unit": "iter/sec",
            "range": "stddev: 0.00006383952342764943",
            "extra": "mean: 14.720728800421057 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 8251.261779864266,
            "unit": "iter/sec",
            "range": "stddev: 0.0001630196409880092",
            "extra": "mean: 121.19358549989556 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 3.311624663358925,
            "unit": "iter/sec",
            "range": "stddev: 0.20950347083119208",
            "extra": "mean: 301.96658790000583 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 2000193.2986845537,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 499.95167999895784 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1560121.5216139872,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 640.9757099982016 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 6235612.493412102,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 160.36916999837558 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2208757.0014472352,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 452.7433300017947 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2274618.152473994,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 439.6342299969547 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 253603.51768545315,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.9431629700038684 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 26021.430667406366,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 38.429862400016646 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 23352.272633596243,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 42.822384600003716 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.1800249729199948,
            "unit": "iter/sec",
            "range": "stddev: 0.003445856127425138",
            "extra": "mean: 314.46293928999233 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 9451280.398099434,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 105.80576999927871 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 4037421.7314827293,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 247.68282000422914 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 225665.7613877754,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.431332399963139 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_mean",
            "value": 137598.83862175816,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.267503200000647 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_std",
            "value": 39024.56172353855,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.624887399999352 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_mean",
            "value": 1946768.5345750127,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 513.6717499999577 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_std",
            "value": 1103823.8865780681,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 905.9416199988846 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 91379.44583849871,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.943379999998797 usec\nrounds: 1"
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
          "id": "cf3b21dc9988b5ea9baac9b89f440dfda7e38cd2",
          "message": "Add some contingency order machinery\n\n- Add example strategy.\n- Fix backtest config objects (primitive types).\n- Add some order list processing functionality.",
          "timestamp": "2021-10-01T16:38:30+10:00",
          "tree_id": "7d7135341e379fac84f39c16ec53c6ccf75a1344",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/cf3b21dc9988b5ea9baac9b89f440dfda7e38cd2"
        },
        "date": 1633073184482,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 105835.40413178047,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.4486340200001 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 2.8330305295874942,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 352.9788999999255 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 8.874051789813725,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 112.68809600005625 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 1.0457948197082103,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 956.2105119998705 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 7916271.182956862,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 126.32209999992483 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 8291179.594238649,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 120.61010000252281 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 7615385.851390199,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 131.31311000051937 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 9507864.382403672,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 105.17609000089578 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 177.81555369983525,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.623805000141147 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 14876511.565108677,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 67.22006000018155 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 15264598.070015874,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 65.51105999733409 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 7232272.831529491,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 138.26911999785807 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 14036257.899951657,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 71.24406000002637 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 3472363.6552587333,
            "unit": "iter/sec",
            "range": "stddev: 5.212497186084264e-7",
            "extra": "mean: 287.9882694560365 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 1053483.3376020934,
            "unit": "iter/sec",
            "range": "stddev: 9.929229025932444e-7",
            "extra": "mean: 949.2319093305923 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 774611.2604039294,
            "unit": "iter/sec",
            "range": "stddev: 0.0000030452260253075055",
            "extra": "mean: 1.2909701305898125 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 787761.3581994305,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018776297022114582",
            "extra": "mean: 1.2694199703901177 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 4356744.715928062,
            "unit": "iter/sec",
            "range": "stddev: 9.749778005241255e-7",
            "extra": "mean: 229.5291703330804 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1456296.1230659147,
            "unit": "iter/sec",
            "range": "stddev: 0.000002309314197778815",
            "extra": "mean: 686.673530308326 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2808386.1457780967,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010882109379224409",
            "extra": "mean: 356.0763898167352 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 5133625.44814154,
            "unit": "iter/sec",
            "range": "stddev: 4.377974604301472e-7",
            "extra": "mean: 194.79410995245416 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1406211.6600482303,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013318086331676625",
            "extra": "mean: 711.1304993486556 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 836003.6618445109,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014050212177477872",
            "extra": "mean: 1.196167009356941 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 889198.7885842231,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010345467152441434",
            "extra": "mean: 1.1246079198917869 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 8654030.0520231,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 115.55309999948804 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 4039976.210994045,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 247.5262100006148 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 8840709.770985229,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 113.11309000120673 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 15548943.799722418,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 64.31304999750864 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 5674591.138613525,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 176.22415000005276 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 5764580.858825241,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 173.47314999824448 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 80036.94120950127,
            "unit": "iter/sec",
            "range": "stddev: 0.00005425420179328858",
            "extra": "mean: 12.494230600123046 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 7733.690102883704,
            "unit": "iter/sec",
            "range": "stddev: 0.00019329383860666125",
            "extra": "mean: 129.30437950017222 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 3.2854722330070674,
            "unit": "iter/sec",
            "range": "stddev: 0.20908560352509012",
            "extra": "mean: 304.37024849993577 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 2294744.4592232257,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 435.77836999702413 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 2004994.7627519912,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 498.75442000029574 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 9077284.911472632,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 110.16509999990376 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2757614.1795133916,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 362.6323099979345 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2697924.314138328,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 370.6553200026974 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 247443.2040150581,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.04133143999843 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 28435.84653638989,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 35.166879899998094 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 24946.804681049438,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 40.08529399998224 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.3901545438128804,
            "unit": "iter/sec",
            "range": "stddev: 0.001618024567336197",
            "extra": "mean: 294.9718035199976 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 13496905.025412804,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 74.0910599961353 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 5028684.369946183,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 198.85917000010522 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 257463.65906801214,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.8840433000132184 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_mean",
            "value": 132485.4880366614,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.547996499988585 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_std",
            "value": 39887.33980422339,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.07061149999572 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_mean",
            "value": 2178671.119117665,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 458.99538999947254 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_std",
            "value": 1161908.8223914432,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 860.6527299980371 nsec\nrounds: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bradley.mcelroy@live.com",
            "name": "Bradley McElroy",
            "username": "limx0"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1841169120bcfc7c26383a166b991ac4fe54320f",
          "message": "Catalog batching (#448)\n\n- Split into `batching.py`.\r\n- Add tolerance, cleanup.\r\n- Add cache to `generate_data_batches`.\r\n- Improve batch streaming performance.\r\n- Add generic data test.",
          "timestamp": "2021-10-01T17:06:41+10:00",
          "tree_id": "988ad9949e1dfe91e1e368c9c5df8c8401c30410",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/1841169120bcfc7c26383a166b991ac4fe54320f"
        },
        "date": 1633075056853,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 2527563.5225323904,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 395.6379300007029 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 2042894.951309001,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 489.50142999728996 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 9543309.686332503,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 104.78545000296435 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2445132.1514437855,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 408.97585000038816 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2549700.417837782,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 392.20294000188005 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 218212.25966483032,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.582693940001263 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 24228.47251881393,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 41.27375339999162 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 21042.61507267955,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 47.522610499981965 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.6153425846270624,
            "unit": "iter/sec",
            "range": "stddev: 0.012203106884766763",
            "extra": "mean: 276.5989602899981 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 15058637.582128229,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 66.40706999860413 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 5597500.425012643,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 178.65116999928432 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 280816.5719080611,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.5610433999863744 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_mean",
            "value": 128827.67141044325,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.76230750002469 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_std",
            "value": 33594.88169344305,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 29.766439100012576 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_mean",
            "value": 2176214.8637846014,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 459.51345000048605 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_std",
            "value": 1296185.0836134548,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 771.4947600015876 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 107588.92327797902,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.294637119996878 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 3.305503560625822,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 302.5257670001338 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 10.192388570856643,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 98.11242900013895 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 1.213477005710457,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 824.0782439997929 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 7440917.441330779,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 134.39202999961708 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 8328819.113335433,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 120.0650400005543 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 8787652.785408894,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 113.79603000023053 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 10273582.417534282,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 97.33703000165406 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 201.59250011782152,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.960501999903499 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 17132082.531013407,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 58.370020001348166 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 14267771.543484954,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 70.088030001898 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 7785006.762142193,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 128.45203999859223 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 15212359.98136533,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 65.73602000116807 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 3777789.4946553363,
            "unit": "iter/sec",
            "range": "stddev: 8.546296666668273e-7",
            "extra": "mean: 264.7050613632018 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 1121822.9361338501,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012298657393809132",
            "extra": "mean: 891.4062708026904 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 817231.5494424452,
            "unit": "iter/sec",
            "range": "stddev: 0.000004385596756293683",
            "extra": "mean: 1.2236434100987026 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 817999.6906666261,
            "unit": "iter/sec",
            "range": "stddev: 0.000004052313287550308",
            "extra": "mean: 1.2224943498267749 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 4954809.41391343,
            "unit": "iter/sec",
            "range": "stddev: 5.026026829713443e-7",
            "extra": "mean: 201.82410996312683 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1540012.9484009047,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012674495421255212",
            "extra": "mean: 649.3451896221814 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 3061482.842536719,
            "unit": "iter/sec",
            "range": "stddev: 7.066508714196717e-7",
            "extra": "mean: 326.63909988514206 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 5356787.791741516,
            "unit": "iter/sec",
            "range": "stddev: 6.131190825333125e-7",
            "extra": "mean: 186.67903954337817 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1423410.1657010207,
            "unit": "iter/sec",
            "range": "stddev: 0.000004349202873605302",
            "extra": "mean: 702.5381889889104 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 943499.2099340834,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014567075455211842",
            "extra": "mean: 1.0598843003481306 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 952245.5524877491,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016372276821549797",
            "extra": "mean: 1.0501492996081652 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 9062401.248065678,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 110.34603000098286 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 4576071.16560295,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 218.52806999959284 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 9605314.736031378,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 104.10902999865357 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 17450478.16053442,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 57.30502000005799 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 5906637.909205602,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 169.3010500002856 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 6080208.653221207,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 164.46804000224802 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 50634.51169951046,
            "unit": "iter/sec",
            "range": "stddev: 0.00010822673433223573",
            "extra": "mean: 19.749375799938207 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 9466.426068467455,
            "unit": "iter/sec",
            "range": "stddev: 0.0001124577047668899",
            "extra": "mean: 105.63648760021351 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 3.435455122635748,
            "unit": "iter/sec",
            "range": "stddev: 0.2318678019350888",
            "extra": "mean: 291.0822480000206 msec\nrounds: 10"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bradley.mcelroy@live.com",
            "name": "Bradley McElroy",
            "username": "limx0"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1841169120bcfc7c26383a166b991ac4fe54320f",
          "message": "Catalog batching (#448)\n\n- Split into `batching.py`.\r\n- Add tolerance, cleanup.\r\n- Add cache to `generate_data_batches`.\r\n- Improve batch streaming performance.\r\n- Add generic data test.",
          "timestamp": "2021-10-01T17:06:41+10:00",
          "tree_id": "988ad9949e1dfe91e1e368c9c5df8c8401c30410",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/1841169120bcfc7c26383a166b991ac4fe54320f"
        },
        "date": 1633075199539,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 2.5451414754699777,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 392.90546699976403 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 6.544924825421128,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 152.79014299994742 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 1.0404305961024725,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 961.1405159998867 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 6320722.564691914,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 158.20976000213705 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 5715662.699099272,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 174.9578399994789 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 5972723.765043135,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 167.4278000018603 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 6910482.303235846,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 144.70770000116318 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 177.17528731190254,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.6441279998580285 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 10482569.269208748,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 95.39646000121138 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 10697881.65877822,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 93.4764500016172 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 4761156.353404221,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 210.03301000291685 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 9325355.305281661,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 107.23452000092948 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2830924.529089251,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023084231176331627",
            "extra": "mean: 353.2414904475445 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 818431.7308642896,
            "unit": "iter/sec",
            "range": "stddev: 0.00000263220601478072",
            "extra": "mean: 1.2218490098666734 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 621859.7442913201,
            "unit": "iter/sec",
            "range": "stddev: 0.000005814652986154698",
            "extra": "mean: 1.6080796500818906 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 591230.5271470519,
            "unit": "iter/sec",
            "range": "stddev: 0.000009312661848174866",
            "extra": "mean: 1.6913876298394825 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3555172.2888429216,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013438810757767134",
            "extra": "mean: 281.28032026415895 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1206421.3027705648,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024601679408533263",
            "extra": "mean: 828.8978300561212 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2474824.6645628577,
            "unit": "iter/sec",
            "range": "stddev: 0.000001118521658069163",
            "extra": "mean: 404.0690293413718 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 4033212.2211284693,
            "unit": "iter/sec",
            "range": "stddev: 7.877551502494481e-7",
            "extra": "mean: 247.94132943497974 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1303662.3607974437,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017228939493759617",
            "extra": "mean: 767.0697797766479 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 727632.7440602827,
            "unit": "iter/sec",
            "range": "stddev: 0.000002300268043359182",
            "extra": "mean: 1.3743196800351143 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 789181.9566606437,
            "unit": "iter/sec",
            "range": "stddev: 0.000008264966698253057",
            "extra": "mean: 1.2671349003358046 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 5858545.878436675,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 170.6908200003454 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 3977515.739946153,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 251.4132099986455 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 6872488.535011461,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 145.50769999914337 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 11103162.480910286,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 90.064429996346 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 4201678.024191557,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 238.00014999778796 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 4031068.4116978203,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 248.07319000046846 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 72539.27098357104,
            "unit": "iter/sec",
            "range": "stddev: 0.00005987847090982186",
            "extra": "mean: 13.78563620010027 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 7688.997017202947,
            "unit": "iter/sec",
            "range": "stddev: 0.00017199865184145153",
            "extra": "mean: 130.05597450001005 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 3.147388309393493,
            "unit": "iter/sec",
            "range": "stddev: 0.2585485889145807",
            "extra": "mean: 317.7237447999232 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 1843953.8900246671,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 542.3129099972357 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1507089.5905677914,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 663.5305600002539 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 5916532.750795437,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 169.017910002367 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2130957.934637734,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 469.27251999932196 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2084055.9363006304,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 479.83357000248355 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 214879.4583075781,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.653771969997251 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 22971.37834026074,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 43.53243349996774 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 21594.795842506075,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 46.30745330000536 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.0136761632968185,
            "unit": "iter/sec",
            "range": "stddev: 0.01632362489553861",
            "extra": "mean: 331.82065550999596 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 8926046.632471766,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 112.03168000065489 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 3859222.211574384,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 259.119570000621 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 201798.42758651526,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.955440000003364 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_mean",
            "value": 114445.63734908016,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.737773000029847 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_std",
            "value": 33781.1253461232,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 29.602329400040617 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_mean",
            "value": 1608237.3401853798,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 621.7987700028971 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_std",
            "value": 930541.1342351593,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.0746435200007909 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 72166.09869938344,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 13.856921990000046 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}