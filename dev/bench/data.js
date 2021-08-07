window.BENCHMARK_DATA = {
  "lastUpdate": 1628369879799,
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
          "id": "0a0280a50f4b3e5621075536b45fbe620f2da854",
          "message": "Update dependencies",
          "timestamp": "2021-08-08T06:39:24+10:00",
          "tree_id": "1915e1229b6fb9a9b6069c6be9b560525493f674",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/0a0280a50f4b3e5621075536b45fbe620f2da854"
        },
        "date": 1628369874869,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 0.3176546250801579,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.148073161999946 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 0.42811818981291927,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.3358035789999576 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 0.1333626337085394,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.49835221599983 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 6948189.711690976,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 143.92238000027646 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 6586706.2483800305,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 151.82095000000118 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 6215441.755404724,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 160.88960999923074 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 8125332.935502173,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 123.07188000022506 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 196.44945119561422,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.09036800008289 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 10150418.02964863,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 98.51811000089583 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 11564271.212867765,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 86.47323999866785 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 5957802.907612764,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 167.84711000127572 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 9915590.560549285,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 100.85128000127952 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2911587.2949209306,
            "unit": "iter/sec",
            "range": "stddev: 3.563543907956077e-7",
            "extra": "mean: 343.455269826336 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 949768.2394934805,
            "unit": "iter/sec",
            "range": "stddev: 5.842236208930422e-7",
            "extra": "mean: 1.0528884399559502 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 657739.877968536,
            "unit": "iter/sec",
            "range": "stddev: 5.765143185056319e-7",
            "extra": "mean: 1.520357870178941 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 711940.5922881274,
            "unit": "iter/sec",
            "range": "stddev: 7.063711030909578e-7",
            "extra": "mean: 1.4046115797191305 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3787734.022291424,
            "unit": "iter/sec",
            "range": "stddev: 2.566935185196194e-7",
            "extra": "mean: 264.01008996799646 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1328976.9821384926,
            "unit": "iter/sec",
            "range": "stddev: 5.113490592493381e-7",
            "extra": "mean: 752.458480048972 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2684086.46042363,
            "unit": "iter/sec",
            "range": "stddev: 3.3507387345883046e-7",
            "extra": "mean: 372.5662398528584 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 4563408.231142548,
            "unit": "iter/sec",
            "range": "stddev: 2.3500068933521523e-7",
            "extra": "mean: 219.13446033067885 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1474247.8826601484,
            "unit": "iter/sec",
            "range": "stddev: 4.573703540453153e-7",
            "extra": "mean: 678.3119797978543 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 758167.697000411,
            "unit": "iter/sec",
            "range": "stddev: 6.532921851543437e-7",
            "extra": "mean: 1.3189694100083216 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 884737.9893740972,
            "unit": "iter/sec",
            "range": "stddev: 6.815276380445234e-7",
            "extra": "mean: 1.1302781298081754 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 7678757.638486623,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 130.22939999927985 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 4498040.293823153,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 222.31903999909264 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 8258406.190384332,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 121.08873999977733 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 10452607.303421538,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 95.66991000156122 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 4766713.695053637,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 209.78814000045531 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 4871613.26050757,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 205.2708100018208 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_mean",
            "value": 153014.89220476057,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.535311600009663 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_std",
            "value": 51025.55211161672,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 19.5980241000143 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_mean",
            "value": 2000111.6862396612,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 499.97207999922466 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_std",
            "value": 1127255.8954965668,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 887.1100200008186 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 66134.63163178455,
            "unit": "iter/sec",
            "range": "stddev: 0.00006022314330485694",
            "extra": "mean: 15.120670900046207 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 16862.687141924514,
            "unit": "iter/sec",
            "range": "stddev: 0.0001296526005320062",
            "extra": "mean: 59.30252940017908 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 5.045735467121706,
            "unit": "iter/sec",
            "range": "stddev: 0.18920653347381836",
            "extra": "mean: 198.18716349996066 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 2097500.287252655,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 476.75798000000214 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1779696.4012358391,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 561.8935899997268 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 7042451.4041056745,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 141.99600999972972 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2406668.029967232,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 415.51222999942183 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2481800.584048161,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 402.933259999827 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 347889.37499155867,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.8744769800005088 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 64819.24599054212,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 15.427516699992339 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 56155.88883726551,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 17.80757139999878 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.2999458912029693,
            "unit": "iter/sec",
            "range": "stddev: 0.0026980850724961296",
            "extra": "mean: 303.0352717800042 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 11403807.571670484,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 87.69001000018761 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 4569694.281080436,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 218.83301999878313 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 264918.2696664172,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.7747491000118316 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 99698.18935417429,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.030272429999059 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}