window.BENCHMARK_DATA = {
  "lastUpdate": 1629720371789,
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
          "id": "d3fdaafc0ee9120b1b6122192fcfda1ad7dc4a2f",
          "message": "Refine UUID4 type",
          "timestamp": "2021-08-23T21:45:13+10:00",
          "tree_id": "f27ace932da4e37672e5666322703b863ff222ed",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/d3fdaafc0ee9120b1b6122192fcfda1ad7dc4a2f"
        },
        "date": 1629720364054,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 0.25092382625111265,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.985273199999938 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 0.30484979403755835,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.2803040040000724 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 0.09207101482893632,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.86118146800004 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 5765104.284934917,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 173.457400001098 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 5492288.058635484,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 182.07348000032653 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 5683806.868336058,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 175.93841999996584 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 6532564.868571142,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 153.0792299990935 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 165.7207052583146,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.03424900009486 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 9639219.439228883,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 103.74283999908585 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 9437626.021862593,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 105.95884999929694 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 4895873.341813327,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 204.253649999373 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 8826209.46444817,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 113.29891999821484 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2667207.4359074286,
            "unit": "iter/sec",
            "range": "stddev: 0.00000131292690499312",
            "extra": "mean: 374.9239697435769 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 784684.9151748375,
            "unit": "iter/sec",
            "range": "stddev: 0.000004774656486247484",
            "extra": "mean: 1.2743968702102393 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 595342.0851393914,
            "unit": "iter/sec",
            "range": "stddev: 0.000005897993908081088",
            "extra": "mean: 1.6797065501691577 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 565631.4854555666,
            "unit": "iter/sec",
            "range": "stddev: 0.000026210450494827106",
            "extra": "mean: 1.7679355299583221 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3875547.4833721635,
            "unit": "iter/sec",
            "range": "stddev: 4.014953702164398e-7",
            "extra": "mean: 258.02806036836046 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1224831.9846768677,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015682051458143843",
            "extra": "mean: 816.4385095346915 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2298505.2695447165,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018728121102387754",
            "extra": "mean: 435.0653501865054 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 4177859.852642092,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013787519052728013",
            "extra": "mean: 239.35699982075678 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1294154.2461263337,
            "unit": "iter/sec",
            "range": "stddev: 0.0000029170625183540125",
            "extra": "mean: 772.7054197698635 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 695678.331418093,
            "unit": "iter/sec",
            "range": "stddev: 0.000004050785613435364",
            "extra": "mean: 1.4374459500004377 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 746788.4435485568,
            "unit": "iter/sec",
            "range": "stddev: 0.000010001154800820653",
            "extra": "mean: 1.3390673203889492 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 6535809.307040933,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 153.00324000008914 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 3876162.950649409,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 257.98708999900555 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 6532180.821503011,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 153.08822999941185 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 10514166.94626604,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 95.10976999990817 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 4248577.470062671,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 235.37289999921995 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 4577145.661736023,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 218.47677000096155 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_mean",
            "value": 124739.68698430747,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.016694799994184 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_std",
            "value": 38607.7440578945,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.901539300002696 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_mean",
            "value": 1677644.585660238,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 596.0738099997798 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_std",
            "value": 1060471.679563888,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 942.9766199991718 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 18063.49982757008,
            "unit": "iter/sec",
            "range": "stddev: 0.000362243051342565",
            "extra": "mean: 55.360257400047885 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 10164.989437829097,
            "unit": "iter/sec",
            "range": "stddev: 0.00015895633712792844",
            "extra": "mean: 98.37688529989919 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 3.8324559308082704,
            "unit": "iter/sec",
            "range": "stddev: 0.2258267648996053",
            "extra": "mean: 260.9292887000265 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 1782227.6755242464,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 561.0955399993145 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1447771.819810994,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 690.7165799998438 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 5679384.436526144,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 176.07541999950627 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2299191.4364508577,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 434.935509999832 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2347139.875097624,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 426.05045000073005 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 291301.8098146437,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.43286573000114 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 39731.91541674201,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.168683400011105 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 38841.878132225866,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.745407999988856 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 2.9746854302016343,
            "unit": "iter/sec",
            "range": "stddev: 0.005756976391072347",
            "extra": "mean: 336.16999964000115 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 10559465.843171058,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 94.70175999922503 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 4322924.911722472,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 231.324860001223 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 262270.275497974,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.8128606000100262 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 89095.92381933948,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.223858030000429 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}