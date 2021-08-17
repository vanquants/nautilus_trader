window.BENCHMARK_DATA = {
  "lastUpdate": 1629187031506,
  "repoUrl": "https://github.com/nautechsystems/nautilus_trader",
  "entries": {
    "Benchmark with pytest-benchmark": [
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
          "id": "f7d6351425f5c4d548728d04eb7400e2397dbfd0",
          "message": "Betfair refactor",
          "timestamp": "2021-08-17T17:39:42+10:00",
          "tree_id": "966a1a360c3079a0500a722d514138f0c94a5d4a",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/f7d6351425f5c4d548728d04eb7400e2397dbfd0"
        },
        "date": 1629187029017,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 0.32009619817753726,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.1240608470000097 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 0.43015220128678505,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.324758531999919 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 0.13221799276549168,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.563267139999994 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 6956861.475944863,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 143.74298000007002 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 7111266.357971036,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 140.62192999972467 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 7171547.430660709,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 139.43991999894934 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 8179579.059179616,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 122.25568000076237 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 196.63483083147833,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.085569000016221 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 11744233.610669991,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 85.14816999991126 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 11361930.782789567,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 88.01321000078133 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 5518931.618731699,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 181.19448999982524 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 10562193.89443714,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 94.67729999983021 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2897479.833750315,
            "unit": "iter/sec",
            "range": "stddev: 8.667007251930128e-8",
            "extra": "mean: 345.1275098973383 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 936799.2244419256,
            "unit": "iter/sec",
            "range": "stddev: 1.1651092842462286e-7",
            "extra": "mean: 1.0674645899666757 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 710249.251218312,
            "unit": "iter/sec",
            "range": "stddev: 1.269480516091743e-7",
            "extra": "mean: 1.407956429781052 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 706133.6585294015,
            "unit": "iter/sec",
            "range": "stddev: 1.4577099153345498e-7",
            "extra": "mean: 1.4161624898076752 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 4295775.114496636,
            "unit": "iter/sec",
            "range": "stddev: 6.71351301387418e-8",
            "extra": "mean: 232.78685996046988 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1350613.168409871,
            "unit": "iter/sec",
            "range": "stddev: 2.1434467389560434e-7",
            "extra": "mean: 740.4044499116935 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2902570.2393462183,
            "unit": "iter/sec",
            "range": "stddev: 6.778824631478198e-8",
            "extra": "mean: 344.5222397874659 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 4906079.00598385,
            "unit": "iter/sec",
            "range": "stddev: 3.749356492150286e-8",
            "extra": "mean: 203.8287599486921 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1415881.5297212442,
            "unit": "iter/sec",
            "range": "stddev: 1.0880992979820311e-7",
            "extra": "mean: 706.2737799799379 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 791906.8139996805,
            "unit": "iter/sec",
            "range": "stddev: 1.4112255144706738e-7",
            "extra": "mean: 1.2627748395664184 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 896031.4784036702,
            "unit": "iter/sec",
            "range": "stddev: 2.7560133482748695e-7",
            "extra": "mean: 1.116032219963472 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 7557169.229464713,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 132.32468000069275 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 4557785.842239487,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 219.40477999919494 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 7636930.546515297,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 130.94266000052812 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 12117679.633986656,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 82.52405000007457 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 5405775.043542571,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 184.98734999980115 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 5561633.494022239,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 179.80329000010897 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_mean",
            "value": 166722.34637310202,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.997996199994304 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_std",
            "value": 54850.83958671735,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 18.231261500000073 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_mean",
            "value": 2285382.265377876,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 437.5635600001715 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_std",
            "value": 1277186.6092511923,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 782.970939999359 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 30533.002938122714,
            "unit": "iter/sec",
            "range": "stddev: 0.0001979688044926924",
            "extra": "mean: 32.75144610003053 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 16061.529664283831,
            "unit": "iter/sec",
            "range": "stddev: 0.00016415345650845487",
            "extra": "mean: 62.26057049993869 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 4.844401066536074,
            "unit": "iter/sec",
            "range": "stddev: 0.2061573488145865",
            "extra": "mean: 206.42386670000406 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 2307492.4788462305,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 433.3708599995134 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1959228.8396921188,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 510.40489999991223 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 7724110.230823927,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 129.4647499992152 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2568058.2957443115,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 389.3992600001184 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2495661.1682778085,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 400.6954199996926 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 345842.92259210534,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.891486089999944 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 71145.86823923893,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 14.055630000007113 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 61543.1588910772,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 16.248759699999482 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.474979595485399,
            "unit": "iter/sec",
            "range": "stddev: 0.0003901428536497624",
            "extra": "mean: 287.77147390999744 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 11492777.30680525,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 87.01116999873193 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 5243712.82764805,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 190.70456999997987 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 316398.3640161626,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.1605726000179857 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 104766.17429283187,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.545065539998632 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}