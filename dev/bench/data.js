window.BENCHMARK_DATA = {
  "lastUpdate": 1629499631119,
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
          "id": "432949132328baa1934ea7016e92ab420de99415",
          "message": "Improve object docs",
          "timestamp": "2021-08-21T08:26:10+10:00",
          "tree_id": "2f09256fa6cf161f971387e05d22d5f82d633948",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/432949132328baa1934ea7016e92ab420de99415"
        },
        "date": 1629499626874,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 0.2797316725066917,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.5748543989993777 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 0.3757082063057332,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.6616400259999864 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 0.1146682363436374,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.72081085300033 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 5836367.514949187,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 171.33944999841333 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 5812517.93166145,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 172.0424799987086 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 6321353.862199307,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 158.19395999642438 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 6871837.752112807,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 145.5214799989335 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 169.043902900171,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.915622999964398 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 9840695.862805484,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 101.61883000364469 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 10020465.799599089,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 99.79575999750523 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 4896807.134904659,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 204.21469999746478 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 8850555.363537697,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 112.98725999949966 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2424568.1688803784,
            "unit": "iter/sec",
            "range": "stddev: 3.021047298607334e-7",
            "extra": "mean: 412.44457996072015 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 801973.1819525164,
            "unit": "iter/sec",
            "range": "stddev: 4.175427387593257e-7",
            "extra": "mean: 1.246924488877994 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 596873.0796189549,
            "unit": "iter/sec",
            "range": "stddev: 5.04899464469435e-7",
            "extra": "mean: 1.6753980605699326 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 609354.7630069521,
            "unit": "iter/sec",
            "range": "stddev: 4.756133030935272e-7",
            "extra": "mean: 1.641080140352642 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3585601.569481152,
            "unit": "iter/sec",
            "range": "stddev: 2.3901888625637227e-7",
            "extra": "mean: 278.8932291059609 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1141815.5577430062,
            "unit": "iter/sec",
            "range": "stddev: 4.2752232830972086e-7",
            "extra": "mean: 875.7981910639501 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2354738.5449449653,
            "unit": "iter/sec",
            "range": "stddev: 2.49321847696608e-7",
            "extra": "mean: 424.6755981239403 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 3843359.5761189032,
            "unit": "iter/sec",
            "range": "stddev: 1.9748614828882826e-7",
            "extra": "mean: 260.1890299865772 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1186985.6062383086,
            "unit": "iter/sec",
            "range": "stddev: 2.6673256734153173e-7",
            "extra": "mean: 842.4701990861649 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 672066.2803955753,
            "unit": "iter/sec",
            "range": "stddev: 4.99301073114563e-7",
            "extra": "mean: 1.4879484794437303 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 776003.6574495665,
            "unit": "iter/sec",
            "range": "stddev: 5.820813247589521e-7",
            "extra": "mean: 1.2886537201211468 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 6390593.86361139,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 156.47998000531516 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 3827604.684891634,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 261.2600000065868 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 6627837.700408291,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 150.87877000041772 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 10161489.437984353,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 98.41077000601217 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 4494230.329435986,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 222.50751000683522 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 4634516.254915929,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 215.77225000328326 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_mean",
            "value": 147827.5528917568,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.764638799995737 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_std",
            "value": 47491.59984023526,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 21.056355299970164 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_mean",
            "value": 1915048.560737196,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 522.1799700029806 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_std",
            "value": 1088603.4723038236,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 918.608129995846 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 36017.7972734443,
            "unit": "iter/sec",
            "range": "stddev: 0.00016689574274752483",
            "extra": "mean: 27.764052099246328 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 14240.073689920375,
            "unit": "iter/sec",
            "range": "stddev: 0.00015473910601885478",
            "extra": "mean: 70.22435570033848 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 4.412124968209935,
            "unit": "iter/sec",
            "range": "stddev: 0.21441130161896715",
            "extra": "mean: 226.64815870020902 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 1900041.7306253759,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 526.3042299975496 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1653755.6584233944,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 604.6842500018101 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 6470484.175020057,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 154.54793999197136 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2247013.7243483146,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 445.03511000584695 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2247756.1829834543,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 444.8881100051949 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 299476.7473390344,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.3391574100005528 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 59658.984709386204,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 16.761934599981032 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 52118.05726044496,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 19.187207899994974 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 2.872355870977903,
            "unit": "iter/sec",
            "range": "stddev: 0.0021481330799429277",
            "extra": "mean: 348.14627605998794 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 9800097.609490821,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 102.03979999459989 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 4378063.084349935,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 228.41151000648097 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 247130.1577932932,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.0464507000251615 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 91077.17557535296,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.979699290001008 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}