window.BENCHMARK_DATA = {
  "lastUpdate": 1632345533961,
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
          "id": "3777ee845028799345db07d9c0819bb19a9f2d49",
          "message": "Improve backtest leverage config",
          "timestamp": "2021-09-23T06:58:28+10:00",
          "tree_id": "7c1ade8214e44c09e236270c4898b3704f14e0fd",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/3777ee845028799345db07d9c0819bb19a9f2d49"
        },
        "date": 1632345527634,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 2.6528866748331508,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 376.9478770000205 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 2.5687326256222835,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 389.29703700000573 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 1.8714051488413215,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 534.3578330000582 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 6432529.042057514,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 155.45985000017026 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 5885575.120441035,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 169.90693000025203 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 6469525.140097852,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 154.57084999979998 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 7366442.348635575,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 135.75074000073073 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 174.1180182375683,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.74323099999674 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 10775454.506075017,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 92.80350999915754 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 11043927.2206358,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 90.54749999904743 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 4835329.470186579,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 206.81113999899026 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 9276128.93047817,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 107.80358999909367 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2688179.051451054,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010594876280964948",
            "extra": "mean: 371.9990301465259 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 801488.7110932152,
            "unit": "iter/sec",
            "range": "stddev: 0.000004594379553802402",
            "extra": "mean: 1.247678209510923 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 662209.4450398843,
            "unit": "iter/sec",
            "range": "stddev: 0.000002713544597389165",
            "extra": "mean: 1.5100962504993731 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 635038.2077909776,
            "unit": "iter/sec",
            "range": "stddev: 0.0000037551961749852026",
            "extra": "mean: 1.5747083997962363 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3400876.0910541527,
            "unit": "iter/sec",
            "range": "stddev: 7.442573610485691e-7",
            "extra": "mean: 294.041880158602 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1180587.6726049045,
            "unit": "iter/sec",
            "range": "stddev: 0.000002127794112177855",
            "extra": "mean: 847.0357798955774 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2386321.547592936,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012502568011265342",
            "extra": "mean: 419.0550100042856 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 3700942.250029695,
            "unit": "iter/sec",
            "range": "stddev: 8.793603371043654e-7",
            "extra": "mean: 270.2014601800329 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1281020.717996649,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017283499118766996",
            "extra": "mean: 780.6274995800777 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 693146.1914087235,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021346827849589924",
            "extra": "mean: 1.4426970996805721 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 771851.221950293,
            "unit": "iter/sec",
            "range": "stddev: 0.0000027314426597502324",
            "extra": "mean: 1.2955864699847552 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 5418997.128978643,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 184.53598999940368 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 3658200.030946856,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 273.3584800012068 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 6736964.647170571,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 148.43479999854026 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 11270338.453048006,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 88.72847999782607 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 4098607.244062163,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 243.9853200007747 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 4575001.150607903,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 218.57918000023346 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 45237.836682163215,
            "unit": "iter/sec",
            "range": "stddev: 0.0001332731381671444",
            "extra": "mean: 22.105389500075034 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 11993.676295807256,
            "unit": "iter/sec",
            "range": "stddev: 0.00010210922138614062",
            "extra": "mean: 83.37727109990283 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 3.832208714266825,
            "unit": "iter/sec",
            "range": "stddev: 0.19695551775979142",
            "extra": "mean: 260.94612130000314 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 1632857.5616344127,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 612.4232900015159 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1536949.416690052,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 650.6394999996701 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 6010052.77482889,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 166.38789000126053 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 1920805.9763331094,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 520.6147900003089 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2095726.2357857341,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 477.1615599997859 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 283018.7360271305,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.533334979999836 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 46473.615515655016,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 21.517585600008715 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 42927.30735701947,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 23.29519510001319 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 2.899698083226824,
            "unit": "iter/sec",
            "range": "stddev: 0.004746878353555602",
            "extra": "mean: 344.86348967999675 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 11097240.793185469,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 90.11248999968302 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 4256817.548680527,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 234.91728000180956 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 210282.56951619172,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.755505899993295 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_mean",
            "value": 124704.08189002433,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.018983700003446 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_std",
            "value": 34262.60484398539,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 29.186339000011685 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_mean",
            "value": 1730786.1192476954,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 577.7721399999791 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_std",
            "value": 990812.6893377132,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.0092725000004066 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 89584.82208936912,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.162605189999795 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}