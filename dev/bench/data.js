window.BENCHMARK_DATA = {
  "lastUpdate": 1632731396748,
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
      }
    ]
  }
}