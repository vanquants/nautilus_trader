window.BENCHMARK_DATA = {
  "lastUpdate": 1629276059365,
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
          "id": "482c551e33d1c562776d6c9a6c038f4719f61dc6",
          "message": "Refactor unit tests\n\n- Improve run time.",
          "timestamp": "2021-08-18T18:00:09+10:00",
          "tree_id": "45ec02e945487f95b08ca1b976df24b06a0d72e5",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/482c551e33d1c562776d6c9a6c038f4719f61dc6"
        },
        "date": 1629276056767,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 6270181.362526738,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 159.48501999901055 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 3552940.212570754,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 281.45703000063804 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 6431694.981304108,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 155.4800099984277 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 9963433.203808676,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 100.36700999989989 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 4502232.702243609,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 222.1120199988036 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 4510843.662209039,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 221.6880199989646 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_mean",
            "value": 130937.8566706342,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.637210699999741 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_std",
            "value": 36719.451048907504,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 27.23352259999956 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_mean",
            "value": 1898242.6164780636,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 526.8030499996712 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_std",
            "value": 1031969.2835582796,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 969.0210899998418 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 64123.192451746465,
            "unit": "iter/sec",
            "range": "stddev: 0.00007096203454776251",
            "extra": "mean: 15.59498149990759 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 10948.495839540396,
            "unit": "iter/sec",
            "range": "stddev: 0.0001096703036600762",
            "extra": "mean: 91.33674749991769 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 3.7142103505172233,
            "unit": "iter/sec",
            "range": "stddev: 0.22790041296094316",
            "extra": "mean: 269.23623209997913 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 1786632.9979214477,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 559.712040001159 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1585376.3364758182,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 630.765060000158 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 6098192.733510344,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 163.98300999981075 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2259355.7889830885,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 442.60403999942355 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2242811.0280892304,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 445.86904000198047 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 290761.55067411886,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.4392442800003664 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 43782.45010172433,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 22.840201899998647 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 39810.73689045999,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.118851799993536 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 2.9993273678451775,
            "unit": "iter/sec",
            "range": "stddev: 0.0052667862387450965",
            "extra": "mean: 333.408086999998 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 9903052.091020541,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 100.9789699992325 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 4154705.788044562,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 240.69092999980057 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 263677.69367780484,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.7925088999827494 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 88457.2571030863,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.304894959998819 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 0.2194798231488545,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.556227473000035 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 0.26717377510241297,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.7428823230000035 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 0.08546415593772831,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.700811749999957 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 6245550.04558281,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 160.11400000024878 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 5702294.6033431105,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 175.36800000016228 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 6016847.172044662,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 166.20000000102664 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 7747313.618917603,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 129.0770000014163 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 177.75249742380205,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.6257999999616 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 9877518.76737814,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 101.23999999905209 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 9651297.650653036,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 103.61301000102685 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 5289689.865512948,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 189.04699999893637 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 9363821.937499048,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 106.79400000071837 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2720525.8268081234,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012129840883368472",
            "extra": "mean: 367.5759995167027 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 738501.6966553995,
            "unit": "iter/sec",
            "range": "stddev: 0.0000028128165180865583",
            "extra": "mean: 1.3540930298859166 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 572697.3315996849,
            "unit": "iter/sec",
            "range": "stddev: 0.0000037191033425023386",
            "extra": "mean: 1.7461230301296382 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 561701.8153635374,
            "unit": "iter/sec",
            "range": "stddev: 0.0000031496192240727107",
            "extra": "mean: 1.7803040201192744 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3612259.8898470937,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011676481133150255",
            "extra": "mean: 276.8350092446781 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1178504.5483172329,
            "unit": "iter/sec",
            "range": "stddev: 0.000005017884279175151",
            "extra": "mean: 848.5330000871727 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2407967.481427238,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026473806233231638",
            "extra": "mean: 415.28800023797885 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 3946220.8961692243,
            "unit": "iter/sec",
            "range": "stddev: 7.86621116361209e-7",
            "extra": "mean: 253.40700034576003 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1122131.6920735077,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018396439369411566",
            "extra": "mean: 891.1609992514968 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 639179.3958417797,
            "unit": "iter/sec",
            "range": "stddev: 0.0000028703949494410495",
            "extra": "mean: 1.5645060002020728 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 724839.375604314,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023783226981661",
            "extra": "mean: 1.3796159999810698 usec\nrounds: 100000"
          }
        ]
      }
    ]
  }
}