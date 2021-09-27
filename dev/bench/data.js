window.BENCHMARK_DATA = {
  "lastUpdate": 1632731691647,
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
          "id": "51f2237a77cab17ce3eb9a73adb0a05608f27a30",
          "message": "Refactor timestamping\n\n- Use `pd.Timestamp` and `pd.Timedelta`.\n- Remove redundant datetime core functions.\n- Remove needless log timestamp formatting.\n- Fix loss of precision converting between datetime and nanos.",
          "timestamp": "2021-09-27T17:20:45+10:00",
          "tree_id": "73d598e0a3e1e034ec5147d1ff6c59ab3519a3ff",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/51f2237a77cab17ce3eb9a73adb0a05608f27a30"
        },
        "date": 1632731387865,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 2.868281722676599,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 348.6407880000115 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 8.998349126886247,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 111.13149599987082 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 0.9729538843542604,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.0277979419997791 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 7120883.621763176,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 140.43201000276895 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 7319572.537049461,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 136.6199999984019 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 7389999.85231885,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 135.3179999978238 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 8940144.925113378,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 111.85500999999931 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 184.40998026630467,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.422700000053737 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 15544363.614431748,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 64.33199999719363 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 14694643.112630459,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 68.05200999679073 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 6586400.400531048,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 151.82799999820418 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 9230626.369092729,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 108.33500999979151 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 3194153.42613406,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025122374965458623",
            "extra": "mean: 313.0719995533582 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 943202.211748926,
            "unit": "iter/sec",
            "range": "stddev: 0.00000987845456270347",
            "extra": "mean: 1.0602180397199845 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 763823.4632346203,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025135441470528408",
            "extra": "mean: 1.3092030398820498 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 735534.2157105337,
            "unit": "iter/sec",
            "range": "stddev: 0.0000037828268128999262",
            "extra": "mean: 1.3595560595831557 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 4105983.4941865616,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016015260857219881",
            "extra": "mean: 243.5470092405012 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1404604.776830207,
            "unit": "iter/sec",
            "range": "stddev: 0.000001435224628345923",
            "extra": "mean: 711.9440404130728 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2602960.0134082343,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011561318396135625",
            "extra": "mean: 384.1780107450177 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 4934665.030298752,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010744703500673273",
            "extra": "mean: 202.6480001904929 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1355926.6507508636,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015318718248926662",
            "extra": "mean: 737.5030201274058 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 791910.4198124356,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019634218267640655",
            "extra": "mean: 1.2627690897625143 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 792362.2361616621,
            "unit": "iter/sec",
            "range": "stddev: 0.000002679179089406551",
            "extra": "mean: 1.2620490406561657 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 7920352.303505801,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 126.25701000160915 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 3784266.390230051,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 264.25201000165544 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 9587268.107967325,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 104.30499999984022 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 15453084.434923725,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 64.71200000305544 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 4364563.0476262225,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 229.1180100019119 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 5462480.651270027,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 183.0670099980125 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 45175.84968304701,
            "unit": "iter/sec",
            "range": "stddev: 0.00012026813526952312",
            "extra": "mean: 22.135720899905213 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 8375.250421767412,
            "unit": "iter/sec",
            "range": "stddev: 0.00012385158285462247",
            "extra": "mean: 119.3994148999991 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 3.1491439255361104,
            "unit": "iter/sec",
            "range": "stddev: 0.2518236755902343",
            "extra": "mean: 317.54661699997087 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 2205018.2290145457,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 453.51098999617534 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1666666.6666681825,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 599.9999999994543 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 4654713.579410134,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 214.8359900002106 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2607820.331611921,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 383.46199999978126 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2573538.8733042013,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 388.57000000007247 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 228436.56223597628,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.377582949996395 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 24866.57243761139,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 40.21462959999553 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 23332.050288338636,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 42.85949959999016 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.1422909963870578,
            "unit": "iter/sec",
            "range": "stddev: 0.005108698679810314",
            "extra": "mean: 318.2391449900024 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 13886994.856924884,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 72.00982000085787 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 4868703.719306195,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 205.39348000056634 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 248891.19594490028,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.017819899991082 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_mean",
            "value": 126744.31547370691,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.889900199961629 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_std",
            "value": 32734.956657222003,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 30.54838319999362 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_mean",
            "value": 1934136.0900726204,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 517.0266999994055 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_std",
            "value": 1152506.8256662483,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 867.6738199983447 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 98116.2909386333,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.191987389998758 usec\nrounds: 1"
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
          "id": "51f2237a77cab17ce3eb9a73adb0a05608f27a30",
          "message": "Refactor timestamping\n\n- Use `pd.Timestamp` and `pd.Timedelta`.\n- Remove redundant datetime core functions.\n- Remove needless log timestamp formatting.\n- Fix loss of precision converting between datetime and nanos.",
          "timestamp": "2021-09-27T17:20:45+10:00",
          "tree_id": "73d598e0a3e1e034ec5147d1ff6c59ab3519a3ff",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/51f2237a77cab17ce3eb9a73adb0a05608f27a30"
        },
        "date": 1632731683219,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 2.334172997604857,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 428.4172600000602 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 7.557699312045548,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 132.31539900061762 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 0.9934700929492443,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.0065728270001273 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 5502142.589285783,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 181.74738000197976 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 5513397.058755104,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 181.3763799964363 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 6457086.012936424,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 154.8686199930671 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 6851065.374988575,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 145.96269999856304 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 170.37667555525994,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.869348000487662 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 10231107.41580095,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 97.74113000275975 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 10767604.19839206,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 92.87116999985301 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 4748989.094542,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 210.5711300009716 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 9325309.215608085,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 107.23504999987199 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2729827.5218813964,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012801223502343224",
            "extra": "mean: 366.3235101794271 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 806779.9515223653,
            "unit": "iter/sec",
            "range": "stddev: 0.000003220982748452061",
            "extra": "mean: 1.2394953520015406 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 585187.5138554336,
            "unit": "iter/sec",
            "range": "stddev: 0.000024079216084258018",
            "extra": "mean: 1.7088539593260066 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 611266.8472425693,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026946383636642885",
            "extra": "mean: 1.6359467301572295 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3319454.576585444,
            "unit": "iter/sec",
            "range": "stddev: 0.00000120664106516259",
            "extra": "mean: 301.2543105887744 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1074715.443323005,
            "unit": "iter/sec",
            "range": "stddev: 0.00001555170588371971",
            "extra": "mean: 930.478859509094 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2085702.680244242,
            "unit": "iter/sec",
            "range": "stddev: 0.0000028205724427258377",
            "extra": "mean: 479.4547226083523 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 3845001.237233652,
            "unit": "iter/sec",
            "range": "stddev: 7.45313185178678e-7",
            "extra": "mean: 260.0779397198494 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1247656.07622666,
            "unit": "iter/sec",
            "range": "stddev: 0.0000030367384869067095",
            "extra": "mean: 801.5029294165288 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 657164.3892927679,
            "unit": "iter/sec",
            "range": "stddev: 0.000003054671712867089",
            "extra": "mean: 1.5216892702846962 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 744265.3053071433,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023818887915210054",
            "extra": "mean: 1.3436069004819728 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 5904320.835196908,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 169.3674899979669 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 3292578.9977295347,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 303.7132900044526 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 6503150.158339761,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 153.77163000266592 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 9802087.04077958,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 102.01908999988518 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 3842198.155433541,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 260.26767999610456 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 3973650.564163902,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 251.65775999994366 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 70086.9922547239,
            "unit": "iter/sec",
            "range": "stddev: 0.00006204491580327167",
            "extra": "mean: 14.2679828000837 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 7436.779618527688,
            "unit": "iter/sec",
            "range": "stddev: 0.0001852596427335047",
            "extra": "mean: 134.46680570023094 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 3.0731382886908296,
            "unit": "iter/sec",
            "range": "stddev: 0.2621172425083619",
            "extra": "mean: 325.400260600054 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 1603663.614435623,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 623.5721699977148 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1387336.9598205863,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 720.8054199963954 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 5575702.11616631,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 179.34960999809846 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 1990199.8182216615,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 502.46211000740004 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2005523.1707077532,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 498.62300999848236 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 230681.05506550425,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.33498970999608 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 24093.836414280308,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 41.504390699992655 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 21428.958006956178,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 46.665824800038536 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 2.8527072235153823,
            "unit": "iter/sec",
            "range": "stddev: 0.004634087448276398",
            "extra": "mean: 350.54420999001195 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 9820170.09872004,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 101.8312300038815 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 4025228.198158476,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 248.4331200048473 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 192395.72445202962,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.197620699982508 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_mean",
            "value": 118291.8733918851,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.453666100012924 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_std",
            "value": 35297.665228511534,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 28.330485700007557 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_mean",
            "value": 1763918.209865447,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 566.9197099996381 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_std",
            "value": 980938.1066174251,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.0194323100040492 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 82372.85628750833,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 12.139921389998563 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}