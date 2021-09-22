window.BENCHMARK_DATA = {
  "lastUpdate": 1632303596927,
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
          "id": "d2b2cea7a7bfd10341472300c4f3662216d3ef6c",
          "message": "Fix fill dynamics for reduce-only orders",
          "timestamp": "2021-09-22T19:21:03+10:00",
          "tree_id": "8a0baca1e918f353539008ab2d76e9037f9050f9",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/d2b2cea7a7bfd10341472300c4f3662216d3ef6c"
        },
        "date": 1632303591463,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 2.7090419413857196,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 369.1341889998512 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 2.7517054526921987,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 363.4109890001582 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 1.9386311423205602,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 515.8278840001458 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 6222659.191213501,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 160.70299999910276 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 6137793.839984957,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 162.9249899997376 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 5461556.404849511,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 183.09799000007843 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 7168664.334495832,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 139.49599999932616 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 196.390345449657,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.091900000024907 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 10799720.373778246,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 92.59498999881544 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 11034482.758587468,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 90.62500000027285 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 5285328.736083578,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 189.2029900000125 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 8882651.293642936,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 112.57900000146037 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2975367.028183828,
            "unit": "iter/sec",
            "range": "stddev: 6.026420402530878e-7",
            "extra": "mean: 336.09298971441603 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 841008.9698238594,
            "unit": "iter/sec",
            "range": "stddev: 0.000002398837052408977",
            "extra": "mean: 1.1890479601061088 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 681030.5357927363,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014719893031678698",
            "extra": "mean: 1.4683629403430132 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 660979.6244407606,
            "unit": "iter/sec",
            "range": "stddev: 0.000009404180412626353",
            "extra": "mean: 1.5129059399464495 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3722162.874591159,
            "unit": "iter/sec",
            "range": "stddev: 6.820759627089244e-7",
            "extra": "mean: 268.6609999864231 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1181385.1506913267,
            "unit": "iter/sec",
            "range": "stddev: 0.000005713620336520887",
            "extra": "mean: 846.4639998351231 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2349536.008505585,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019023858699408299",
            "extra": "mean: 425.61594986409546 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 3876254.592204818,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010255917426625772",
            "extra": "mean: 257.9809907251729 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1247802.354713044,
            "unit": "iter/sec",
            "range": "stddev: 0.00000192698517146469",
            "extra": "mean: 801.4089701168814 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 730285.8175657367,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018699017201638443",
            "extra": "mean: 1.3693268798965619 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 791622.8004862055,
            "unit": "iter/sec",
            "range": "stddev: 0.000008582475250381082",
            "extra": "mean: 1.2632278900832716 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 6427810.1003550785,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 155.573980000554 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 3984095.80823637,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 250.99798000155715 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 7005548.885111723,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 142.7439899998717 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 11561363.265313411,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 86.4949899983003 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 4361251.5361553505,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 229.29197999928874 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 4536238.352480006,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 220.44696999955704 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 51769.37874480831,
            "unit": "iter/sec",
            "range": "stddev: 0.00010630920133492454",
            "extra": "mean: 19.31643810000878 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 12733.57964378276,
            "unit": "iter/sec",
            "range": "stddev: 0.00009791143904117716",
            "extra": "mean: 78.53251230012575 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 4.093313702275074,
            "unit": "iter/sec",
            "range": "stddev: 0.18673583178628542",
            "extra": "mean: 244.3008459000339 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 1900562.8554897609,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 526.159920000282 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1707309.3944430107,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 585.716919999868 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 6593045.207595562,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 151.67497999982515 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2067880.4932183577,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 483.5869399994408 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2254359.672349515,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 443.58494000107385 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 319312.16991029907,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.13173155999948 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 53968.49968773853,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 18.52932739998323 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 43862.7141261335,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 22.798406800006887 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.212944779630129,
            "unit": "iter/sec",
            "range": "stddev: 0.0037453482640466378",
            "extra": "mean: 311.2409545099991 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 11113824.118995609,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 89.97803000056592 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 4586817.843281113,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 218.01607000043077 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 226693.5561496108,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.411241399998289 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_mean",
            "value": 126918.81254873298,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.879052599992064 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_std",
            "value": 40242.82828432682,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 24.849148099997365 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_mean",
            "value": 1924927.1852951262,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 519.5001700008106 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_std",
            "value": 1063101.099289367,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 940.6443099987882 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 97546.69696217326,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.25150037000003 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}