window.BENCHMARK_DATA = {
  "lastUpdate": 1633073194176,
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
      }
    ]
  }
}