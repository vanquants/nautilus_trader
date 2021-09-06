window.BENCHMARK_DATA = {
  "lastUpdate": 1630907956741,
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
          "id": "891f6977c86dec9019bcd0e8ff569c1f0c4ff447",
          "message": "Rename `DeltaType` to `BookAction`\n\n- Standardize terminology.\n- Standardize variable and method naming.\n- Update tests.",
          "timestamp": "2021-09-06T15:37:30+10:00",
          "tree_id": "da6978c45551ba61c3d48d5287c28bbce38162ba",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/891f6977c86dec9019bcd0e8ff569c1f0c4ff447"
        },
        "date": 1630907941767,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 0.23741104264616836,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.21210399000006 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 0.5827860410019352,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.7158955940001306 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 0.20753177238695586,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.818539293999947 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 5858678.36651727,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 170.6869600002392 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 5187415.889301627,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 192.77420999969763 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 5699141.629422012,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 175.46502000186592 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 6168618.191323577,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 162.11085999884745 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 152.56984838486318,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.554374999950596 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 9890202.923120013,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 101.11016000109885 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 9519076.27633523,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 105.05221000130405 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 5030325.822260265,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 198.79427999967447 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 9680993.827439796,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 103.29518000162352 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2617512.570012196,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014506573515133163",
            "extra": "mean: 382.04210037292796 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 716752.7003967016,
            "unit": "iter/sec",
            "range": "stddev: 0.0000033116565004221724",
            "extra": "mean: 1.395181349782888 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 540798.3931383435,
            "unit": "iter/sec",
            "range": "stddev: 0.00002065820112953673",
            "extra": "mean: 1.8491179202601415 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 571034.1630208484,
            "unit": "iter/sec",
            "range": "stddev: 0.000017343028959875682",
            "extra": "mean: 1.7512087100180906 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3042365.086090481,
            "unit": "iter/sec",
            "range": "stddev: 0.000005918736137639562",
            "extra": "mean: 328.6916499837389 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1103770.9119797454,
            "unit": "iter/sec",
            "range": "stddev: 0.000002809127144395088",
            "extra": "mean: 905.9850999392438 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2123229.2089106734,
            "unit": "iter/sec",
            "range": "stddev: 0.0000032612212076711992",
            "extra": "mean: 470.9807098561214 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 3555401.834441362,
            "unit": "iter/sec",
            "range": "stddev: 9.437732953923277e-7",
            "extra": "mean: 281.26216010605276 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 983972.7370339326,
            "unit": "iter/sec",
            "range": "stddev: 0.0000060861863837193975",
            "extra": "mean: 1.016288320156491 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 580969.6535732383,
            "unit": "iter/sec",
            "range": "stddev: 0.00002243586910845566",
            "extra": "mean: 1.721260299655114 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 707262.4317629469,
            "unit": "iter/sec",
            "range": "stddev: 0.00001817831958797902",
            "extra": "mean: 1.4139023297298081 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 4749365.983431777,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 210.55441999806135 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 3758055.485901469,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 266.09505999886096 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 5436197.201724469,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 183.95212000086758 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 9859777.206438113,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 101.42217000066012 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 4069526.7246178114,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 245.72882000029495 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 4574387.337452097,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 218.60850999928516 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_mean",
            "value": 112529.20287555014,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.886582099989937 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_std",
            "value": 35014.976605792,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 28.55920800000149 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_mean",
            "value": 1714361.0482050716,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 583.3077000011144 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_std",
            "value": 944158.6255980118,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.0591440600001079 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 71234.86398965077,
            "unit": "iter/sec",
            "range": "stddev: 0.00006192494225723057",
            "extra": "mean: 14.038069899947914 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 11077.000386873704,
            "unit": "iter/sec",
            "range": "stddev: 0.0001411616877623314",
            "extra": "mean: 90.27714770011244 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 3.7471136194564396,
            "unit": "iter/sec",
            "range": "stddev: 0.20336428541907645",
            "extra": "mean: 266.8720785000005 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 1647287.6996210166,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 607.0584999997664 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1469450.9666884106,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 680.5262799980483 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 5628763.884061057,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 177.65889999964202 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2223552.3512460133,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 449.73080999852755 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2078336.0176781928,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 481.1541499998384 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 275282.2774065067,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.632634870000402 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 43462.45149727938,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 23.008366200019736 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 34800.090566539344,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 28.73555740000029 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 2.870396338402189,
            "unit": "iter/sec",
            "range": "stddev: 0.007296623445894264",
            "extra": "mean: 348.3839449700008 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 10192211.865833178,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 98.11413000079483 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 3928610.7006538566,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 254.54290999959997 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 245365.85484452025,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.075546699982624 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 84431.1665327656,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.843967590000375 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}