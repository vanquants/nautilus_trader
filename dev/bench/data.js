window.BENCHMARK_DATA = {
  "lastUpdate": 1628290588086,
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
          "id": "4f440b74a6bc56a13e8a5b755de9dd801cb710c6",
          "message": "Consolidate OMS",
          "timestamp": "2021-08-07T08:35:58+10:00",
          "tree_id": "d289e60e054afdf0e90e1a25719af442925d2ef6",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/4f440b74a6bc56a13e8a5b755de9dd801cb710c6"
        },
        "date": 1628290583905,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 0.2644398372026024,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.7815784889999122 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 0.37027107463913544,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.700724060000084 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 0.11404910935899208,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.76815264600009 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 6141587.922295504,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 162.82434000004287 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 5928042.105199019,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 168.6897600006887 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 5933424.367884337,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 168.53674000003593 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 6866379.903696386,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 145.63715000122102 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 163.070234188601,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.132326999932047 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 9834380.186697856,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 101.68409000016254 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 9475497.122401511,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 105.5353600008857 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 5146904.492048422,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 194.29154000135895 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 8941921.237885037,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 111.83279000078983 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2698510.5302156475,
            "unit": "iter/sec",
            "range": "stddev: 7.226877362086588e-8",
            "extra": "mean: 370.57479998793497 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 842797.4359531081,
            "unit": "iter/sec",
            "range": "stddev: 2.0072596445529722e-7",
            "extra": "mean: 1.1865247298351278 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 582533.5516120808,
            "unit": "iter/sec",
            "range": "stddev: 2.3598776761373676e-7",
            "extra": "mean: 1.7166393201432584 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 581445.982114724,
            "unit": "iter/sec",
            "range": "stddev: 2.1126592313036898e-7",
            "extra": "mean: 1.719850219556065 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3715003.919787957,
            "unit": "iter/sec",
            "range": "stddev: 6.238198677232513e-8",
            "extra": "mean: 269.17872002059084 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1096772.3242423679,
            "unit": "iter/sec",
            "range": "stddev: 1.4518268954113647e-7",
            "extra": "mean: 911.7662598669085 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2344290.688720479,
            "unit": "iter/sec",
            "range": "stddev: 1.7471703100459144e-7",
            "extra": "mean: 426.568259990745 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 4235804.167477409,
            "unit": "iter/sec",
            "range": "stddev: 7.754990057069808e-8",
            "extra": "mean: 236.08268004409183 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1220461.670264419,
            "unit": "iter/sec",
            "range": "stddev: 1.4254113259634244e-7",
            "extra": "mean: 819.3620695874415 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 675712.6436361433,
            "unit": "iter/sec",
            "range": "stddev: 1.6276483805389322e-7",
            "extra": "mean: 1.47991902980948 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 759121.9680573314,
            "unit": "iter/sec",
            "range": "stddev: 3.062898436219313e-7",
            "extra": "mean: 1.317311370344214 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 6280220.815132854,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 159.23006999855716 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 3753196.832306283,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 266.4395300007527 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 7173977.344241572,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 139.39268999820342 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 10061383.494434008,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 99.38991000126407 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 4500602.968264944,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 222.1924500008754 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 4635359.448948465,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 215.73300000000017 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_mean",
            "value": 148810.0287009868,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.719977199986715 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_std",
            "value": 47251.96443306998,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 21.163141300007737 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_mean",
            "value": 1913746.1958751343,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 522.5353300011193 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_std",
            "value": 1019656.749074283,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 980.7221899995966 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 62800.98431541448,
            "unit": "iter/sec",
            "range": "stddev: 0.00006347282710062947",
            "extra": "mean: 15.923317299893824 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 14007.785140357897,
            "unit": "iter/sec",
            "range": "stddev: 0.0001684191611766841",
            "extra": "mean: 71.38887340004203 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 4.307995148616554,
            "unit": "iter/sec",
            "range": "stddev: 0.2203309579684136",
            "extra": "mean: 232.1265381000103 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 1936963.4236039764,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 516.2720099997387 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1640448.1763480627,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 609.5895099997506 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 6411576.948488334,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 155.96787000049517 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2243414.5631147884,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 445.74908999948093 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2228927.3806255874,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 448.6462900013066 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 295067.73391951487,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.3890523600007327 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 58527.067094667735,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 17.08611159999691 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 52008.46011219581,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 19.227640999997675 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 2.928817371840819,
            "unit": "iter/sec",
            "range": "stddev: 0.0003267191571272726",
            "extra": "mean: 341.43474073000334 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 9685681.240889654,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 103.24519000050714 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 4343048.167498998,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 230.25302999940322 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 251756.21358249165,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.9720966000004414 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 86955.62284482279,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.500118880001082 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}