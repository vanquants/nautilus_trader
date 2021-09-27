window.BENCHMARK_DATA = {
  "lastUpdate": 1632777676966,
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
          "id": "2323953842796ba99cfdaa324a3320e5c30ca8c5",
          "message": "Refine `strftime` timestamp formatting",
          "timestamp": "2021-09-27T17:48:57+10:00",
          "tree_id": "d3571ea956345301121388f111cc2a12f17bf618",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/2323953842796ba99cfdaa324a3320e5c30ca8c5"
        },
        "date": 1632733140043,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 2.7274753737345927,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 366.63942399991356 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 8.213781065432372,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 121.74661000017295 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 1.07833824556633,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 927.3528080002507 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 6094366.635626978,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 164.08596000019315 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 8003218.574525862,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 124.94972999775199 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 7979907.868864932,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 125.31472999853578 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 10464239.716643963,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 95.56355999848165 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 175.50531930649456,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.697832999885577 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 13771936.456739997,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 72.61143000050652 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 15460160.865462773,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 64.68238000252313 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 6799721.34750889,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 147.0648499980598 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 12074016.619807495,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 82.8224799988675 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 3252099.680413188,
            "unit": "iter/sec",
            "range": "stddev: 9.244865991771581e-7",
            "extra": "mean: 307.49364972507465 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 954220.5165358781,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023155060276034424",
            "extra": "mean: 1.0479757903658538 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 794020.7942161951,
            "unit": "iter/sec",
            "range": "stddev: 0.000002125873471953372",
            "extra": "mean: 1.2594128608270694 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 770171.7001291492,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021192824363869056",
            "extra": "mean: 1.2984117695214081 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 4074308.7065112507,
            "unit": "iter/sec",
            "range": "stddev: 9.078044764197554e-7",
            "extra": "mean: 245.44041014905818 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1312838.247695209,
            "unit": "iter/sec",
            "range": "stddev: 0.000008254677476692878",
            "extra": "mean: 761.708460090631 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2429813.028887606,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018557595023995051",
            "extra": "mean: 411.55429990340053 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 4578685.161076969,
            "unit": "iter/sec",
            "range": "stddev: 6.855065382823877e-7",
            "extra": "mean: 218.40331117346068 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1317201.51355917,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015575264936754385",
            "extra": "mean: 759.1852800851484 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 719050.2539137235,
            "unit": "iter/sec",
            "range": "stddev: 0.00003898781664524453",
            "extra": "mean: 1.3907233806776276 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 823544.0165892652,
            "unit": "iter/sec",
            "range": "stddev: 0.000002016079361758623",
            "extra": "mean: 1.2142641800028287 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 8352565.114532683,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 119.72369999966759 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 3824698.3182642832,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 261.4585300034378 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 9045627.501829697,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 110.55065000164177 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 19207015.322971523,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 52.06431000260636 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 3181563.9314836157,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 314.31082999915816 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 4155301.743321396,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 240.65640999651805 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 47334.29038824645,
            "unit": "iter/sec",
            "range": "stddev: 0.00011492272527892853",
            "extra": "mean: 21.126333400115985 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 8310.364690320732,
            "unit": "iter/sec",
            "range": "stddev: 0.0001237601664631504",
            "extra": "mean: 120.33166260016515 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 3.089135891073373,
            "unit": "iter/sec",
            "range": "stddev: 0.2513459143537467",
            "extra": "mean: 323.7151214000278 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 2293769.742913454,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 435.9635499986325 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1891363.521591569,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 528.7190900025962 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 8179443.2433094,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 122.25770999975792 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2640708.7112821126,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 378.68622000132746 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2606866.946350941,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 383.60223999916343 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 242084.02252734994,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.130797190000521 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 23806.87903531008,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 42.0046659000036 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 21619.65322815759,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 46.254210899996906 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.1860748835097823,
            "unit": "iter/sec",
            "range": "stddev: 0.002830886928583531",
            "extra": "mean: 313.86581815001136 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 14943128.691692246,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 66.92039000881778 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 5436789.197474578,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 183.93209000350907 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 240394.7570414493,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.159824499947717 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_mean",
            "value": 119481.46192496955,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.369499200034625 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_std",
            "value": 34710.25513863904,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 28.80992939999487 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_mean",
            "value": 2006940.280489907,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 498.2709299929411 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_std",
            "value": 1089111.779249621,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 918.1793999960064 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 95558.49358431267,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.46479451999403 usec\nrounds: 1"
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
          "id": "2323953842796ba99cfdaa324a3320e5c30ca8c5",
          "message": "Refine `strftime` timestamp formatting",
          "timestamp": "2021-09-27T17:48:57+10:00",
          "tree_id": "d3571ea956345301121388f111cc2a12f17bf618",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/2323953842796ba99cfdaa324a3320e5c30ca8c5"
        },
        "date": 1632733150658,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 2.6234225884622493,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 381.181440000546 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 7.114432849273341,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 140.5593420004152 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 1.0123983249501844,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 987.7535109999371 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 5745845.509770405,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 174.03878999175504 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 5843040.278812185,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 171.14377999860153 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 6320604.310525038,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 158.2127199981187 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 6713361.227102884,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 148.95667999553552 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 166.35262064089946,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.011327000123856 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 9198574.220580062,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 108.71250000491273 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 9782489.28605945,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 102.22346999398724 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 4645243.02248174,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 215.27399000660807 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 8917622.65773701,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 112.13751000468619 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2553014.420315349,
            "unit": "iter/sec",
            "range": "stddev: 0.000004661219026680814",
            "extra": "mean: 391.6938314341678 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 865674.036105333,
            "unit": "iter/sec",
            "range": "stddev: 0.0000033034296276311437",
            "extra": "mean: 1.1551692187731533 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 703761.6535893935,
            "unit": "iter/sec",
            "range": "stddev: 0.000004224207589720992",
            "extra": "mean: 1.4209356177616428 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 657122.539933915,
            "unit": "iter/sec",
            "range": "stddev: 0.0000037069376947261658",
            "extra": "mean: 1.521786180246636 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3387185.9753094674,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011370031906992592",
            "extra": "mean: 295.23032018005324 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1177824.4344420743,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024443761877241716",
            "extra": "mean: 849.0229704511876 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2465733.771540035,
            "unit": "iter/sec",
            "range": "stddev: 0.000001148427948341727",
            "extra": "mean: 405.55878803388623 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 4126500.2068831744,
            "unit": "iter/sec",
            "range": "stddev: 7.705251802647285e-7",
            "extra": "mean: 242.3361080491304 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1197539.1903886602,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020292400172670163",
            "extra": "mean: 835.0457404867484 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 658056.2556134426,
            "unit": "iter/sec",
            "range": "stddev: 0.000002695849424217579",
            "extra": "mean: 1.519626918625363 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 790530.8690087452,
            "unit": "iter/sec",
            "range": "stddev: 0.000002379666168488903",
            "extra": "mean: 1.2649727407278988 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 6508945.797276953,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 153.6347100045532 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 3765510.939766115,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 265.568209997582 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 6608656.322111427,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 151.3166899985663 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 11295043.36145739,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 88.53441000610474 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 4212316.239702474,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 237.39908000607102 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 4601001.389398844,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 217.34399000706617 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 71856.61409281357,
            "unit": "iter/sec",
            "range": "stddev: 0.00006095609715723919",
            "extra": "mean: 13.916603400048189 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 7461.399086039229,
            "unit": "iter/sec",
            "range": "stddev: 0.00016543277691218142",
            "extra": "mean: 134.0231220001442 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 3.058759374128909,
            "unit": "iter/sec",
            "range": "stddev: 0.2640617511400476",
            "extra": "mean: 326.9299339000099 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 1857277.6477282075,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 538.4224600038579 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1526731.5658847103,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 654.9939900014579 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 6008035.386872667,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 166.4437599993107 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2227235.6802486596,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 448.98705999912636 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2137395.456253109,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 467.8591399988363 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 234440.83629823968,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.265468490002604 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 23370.587725073216,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 42.78882549997434 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 21342.642504519645,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 46.854554200035636 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.0466084991164815,
            "unit": "iter/sec",
            "range": "stddev: 0.009959647583657907",
            "extra": "mean: 328.2338378199893 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 9525308.17265749,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 104.9834799960081 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 4216347.716107405,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 237.17209000096773 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 203361.04975123057,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.917362499963929 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_mean",
            "value": 119418.83676598447,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.373888300047838 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_std",
            "value": 31640.748911804647,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 31.604814500042266 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_mean",
            "value": 2031367.3591046142,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 492.2792499928619 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_std",
            "value": 1131027.1930175321,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 884.1520399982983 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 94970.3413748743,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.529603090008095 usec\nrounds: 1"
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
          "id": "39499354141cfd3dc1e4653d927a838c68aa0db9",
          "message": "Add `pycln` to pre-commit",
          "timestamp": "2021-09-28T06:07:35+10:00",
          "tree_id": "d2108e62437daf3882345103de2d22444baf3ccd",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/39499354141cfd3dc1e4653d927a838c68aa0db9"
        },
        "date": 1632777668160,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 215556.5711617482,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.639153400012219 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_mean",
            "value": 112233.28811300905,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.910012499973163 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_std",
            "value": 34158.99402144506,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 29.27486680000584 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_mean",
            "value": 1895914.0530632245,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 527.4500699988494 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_std",
            "value": 1095221.2757718689,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 913.0574999971941 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 87299.94865386288,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.454760459996578 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 2.596478466880143,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 385.13702799991734 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 8.01901346579618,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 124.70361900068383 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 1.0828920172062488,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 923.4531089996381 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 6324918.661444098,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 158.10480000254756 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 6286350.428500854,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 159.07480999885593 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 6548885.399161196,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 152.69774000444158 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 7236488.517138975,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 138.18856999932905 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 190.59744675618128,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.246660000011616 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 11092865.81261442,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 90.14802999445237 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 10665863.45563834,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 93.75706000355422 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 5106463.899761561,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 195.8302300045034 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 9378908.074501272,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 106.62221999155008 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2833166.5770491487,
            "unit": "iter/sec",
            "range": "stddev: 7.26136841774457e-7",
            "extra": "mean: 352.9619501023262 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 841012.4780736131,
            "unit": "iter/sec",
            "range": "stddev: 0.000002214489177647722",
            "extra": "mean: 1.1890430000403285 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 678126.6174666191,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018174226412108702",
            "extra": "mean: 1.4746508605367126 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 669286.0206287084,
            "unit": "iter/sec",
            "range": "stddev: 0.000004150168831191807",
            "extra": "mean: 1.4941295188873482 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3039729.9612812093,
            "unit": "iter/sec",
            "range": "stddev: 0.000012925576912592997",
            "extra": "mean: 328.9765909266862 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1176622.314814433,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014280337469633153",
            "extra": "mean: 849.8903916824929 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2408126.4791864366,
            "unit": "iter/sec",
            "range": "stddev: 0.000001402202909134503",
            "extra": "mean: 415.26058063936944 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 4056421.257582699,
            "unit": "iter/sec",
            "range": "stddev: 7.333397105507334e-7",
            "extra": "mean: 246.52271953527816 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1130262.1096142544,
            "unit": "iter/sec",
            "range": "stddev: 0.00001777531250845477",
            "extra": "mean: 884.750529539815 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 712914.8965675682,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019613637393286296",
            "extra": "mean: 1.4026919690059003 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 772885.4240762087,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017630722472761828",
            "extra": "mean: 1.2938528387894621 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 6401489.242171516,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 156.2136500069755 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 3745517.130957199,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 266.98583000325016 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 6827311.019251594,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 146.47054999841203 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 11058038.6685727,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 90.43195000231208 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 4392082.813864617,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 227.68241000449052 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 4192054.271350542,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 238.54652999943937 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 73414.19250775967,
            "unit": "iter/sec",
            "range": "stddev: 0.00005925820354261409",
            "extra": "mean: 13.621344400053204 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 7248.630069249003,
            "unit": "iter/sec",
            "range": "stddev: 0.0001637817170906334",
            "extra": "mean: 137.9571023002427 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 3.2870022358861464,
            "unit": "iter/sec",
            "range": "stddev: 0.22640183877669237",
            "extra": "mean: 304.2285730999538 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 1934505.6476492372,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 516.9279299934715 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1495835.3401071283,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 668.5227800062421 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 6135122.891421211,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 162.99591999995755 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2265803.6975416373,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 441.34450000456127 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2264787.6478355005,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 441.54250000246975 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 228419.30079502388,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.377913759999501 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 23086.965018711686,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 43.31448500006445 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 21578.595535117165,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 46.342218999961915 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 2.952447058016367,
            "unit": "iter/sec",
            "range": "stddev: 0.0032862054063409105",
            "extra": "mean: 338.70209367000825 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 9643552.133124402,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 103.6962299986044 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 4202619.904798568,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 237.9468100025406 nsec\nrounds: 1"
          }
        ]
      }
    ]
  }
}