window.BENCHMARK_DATA = {
  "lastUpdate": 1631689292487,
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
          "id": "9b72b7007a397ec3d4549227eb63c1f1f0eeef56",
          "message": "Refactor and standardize wranglers",
          "timestamp": "2021-09-15T16:41:00+10:00",
          "tree_id": "c38c8784e56b83774b7f003bb2dceb928263759d",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/9b72b7007a397ec3d4549227eb63c1f1f0eeef56"
        },
        "date": 1631689286119,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 2.2972403307041422,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 435.3049119999923 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 2.5941060276761796,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 385.4892550000386 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 1.7754430244339274,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 563.2397019999189 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 5275541.256001543,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 189.55401000084748 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 5230152.3302631555,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 191.19902000056754 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 5477561.770708969,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 182.5629800009665 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 6375240.402386567,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 156.85682999901474 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 151.84795161173335,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.585534999885567 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 9457377.302837303,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 105.73755999985224 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 9882151.391720198,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 101.19254000073852 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 4573766.994756478,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 218.6381599995002 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 8363257.067158807,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 119.57063999943783 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2442591.170361521,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015585968289519692",
            "extra": "mean: 409.40129978935147 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 782377.9687719616,
            "unit": "iter/sec",
            "range": "stddev: 0.000005303285484285083",
            "extra": "mean: 1.2781546003520816 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 643608.6818712892,
            "unit": "iter/sec",
            "range": "stddev: 0.000002942668329299262",
            "extra": "mean: 1.5537391402062894 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 572428.7484220382,
            "unit": "iter/sec",
            "range": "stddev: 0.000007431726375549177",
            "extra": "mean: 1.7469423098623338 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 2629745.5318978135,
            "unit": "iter/sec",
            "range": "stddev: 0.000016347080944681104",
            "extra": "mean: 380.2649297699645 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1105906.1631806912,
            "unit": "iter/sec",
            "range": "stddev: 0.000004875377702050724",
            "extra": "mean: 904.2358504666481 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2039568.4874971015,
            "unit": "iter/sec",
            "range": "stddev: 0.000002821939990961588",
            "extra": "mean: 490.29978945554825 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 3485842.669541768,
            "unit": "iter/sec",
            "range": "stddev: 8.985194738154166e-7",
            "extra": "mean: 286.8746798981192 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 874137.9545952713,
            "unit": "iter/sec",
            "range": "stddev: 0.000014355871872271937",
            "extra": "mean: 1.1439841900732972 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 557831.7102464172,
            "unit": "iter/sec",
            "range": "stddev: 0.000007348285461156381",
            "extra": "mean: 1.7926553504071308 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 745351.4405219808,
            "unit": "iter/sec",
            "range": "stddev: 0.00000290138934230576",
            "extra": "mean: 1.3416489801102216 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 5976004.310825969,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 167.33589000068605 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 3379193.7230129256,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 295.92858000114575 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 6406485.208129492,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 156.09182999924087 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 9886156.948273284,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 101.15154000004623 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 4223146.678400336,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 236.7902600008165 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 3555207.935244388,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 281.2774999983958 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 64422.02009856105,
            "unit": "iter/sec",
            "range": "stddev: 0.00007233610807818316",
            "extra": "mean: 15.522642699966127 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 12006.551072025144,
            "unit": "iter/sec",
            "range": "stddev: 0.00010132884657121062",
            "extra": "mean: 83.28786460001538 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 3.8475287946042274,
            "unit": "iter/sec",
            "range": "stddev: 0.19678803139132828",
            "extra": "mean: 259.9070867000137 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 1831361.292971594,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 546.0418999996364 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1524400.7241597734,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 655.9954899989862 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 5958804.756657324,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 167.81889000185402 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2119063.7950752834,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 471.90650999937134 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2076081.925190731,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 481.67655999804987 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 251060.97237150779,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.9830961799998477 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 46110.45557668853,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 21.68705530000352 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 42370.824934635246,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 23.601145399993584 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 2.924746878675634,
            "unit": "iter/sec",
            "range": "stddev: 0.0031334787278648173",
            "extra": "mean: 341.9099298099991 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 8164754.957343897,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 122.47764999983701 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 3944409.8541645403,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 253.52334999979576 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 202706.6897238352,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.933236300007593 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_mean",
            "value": 122886.75487855988,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.137573499993778 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_std",
            "value": 36539.643040797804,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 27.36753609999596 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_mean",
            "value": 1739877.6138767316,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 574.7530700000425 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_std",
            "value": 958339.478286914,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.0434715699989283 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 84758.29156759701,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.798255740000059 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}