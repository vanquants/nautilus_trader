window.BENCHMARK_DATA = {
  "lastUpdate": 1632514094456,
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
          "id": "0012b50a0fea0db8cc9bfa7a784d98806ee9b522",
          "message": "Use component state convenience properties",
          "timestamp": "2021-09-25T05:49:19+10:00",
          "tree_id": "e7c44d50d6d8d8742d27cc77b56b7d1d06ca45e1",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/0012b50a0fea0db8cc9bfa7a784d98806ee9b522"
        },
        "date": 1632514087351,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 2.680821338997565,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 373.0200089999016 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 9.025567428848662,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 110.79635800001597 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 1.7497470018935533,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 571.5111950000846 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 5757616.880893128,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 173.68297000075472 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 5798685.078530648,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 172.4528900012956 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 5904801.258840682,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 169.35371000045052 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 6856577.4049855545,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 145.84536000029402 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 158.44942658801028,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.311161999974502 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 10029615.448418582,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 99.7047200007728 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 9892879.896316756,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 101.08280000167724 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 4928836.473277056,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 202.88763999815274 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 8920572.383260716,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 112.10042999891812 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2709213.454257742,
            "unit": "iter/sec",
            "range": "stddev: 3.0437729474078e-7",
            "extra": "mean: 369.1108201269344 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 834012.5461472231,
            "unit": "iter/sec",
            "range": "stddev: 5.672570999020891e-7",
            "extra": "mean: 1.199022730077104 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 648950.5080337159,
            "unit": "iter/sec",
            "range": "stddev: 6.701233671657134e-7",
            "extra": "mean: 1.5409495602830248 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 666069.3845248297,
            "unit": "iter/sec",
            "range": "stddev: 6.192822663246471e-7",
            "extra": "mean: 1.5013450899164127 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3775490.5973636024,
            "unit": "iter/sec",
            "range": "stddev: 2.3036285049365826e-7",
            "extra": "mean: 264.8662403498747 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1194263.4848974815,
            "unit": "iter/sec",
            "range": "stddev: 4.257541874464282e-7",
            "extra": "mean: 837.336159604547 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2415463.486400817,
            "unit": "iter/sec",
            "range": "stddev: 3.324653777237341e-7",
            "extra": "mean: 413.9992202863141 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 3842361.728314557,
            "unit": "iter/sec",
            "range": "stddev: 2.407749560909708e-7",
            "extra": "mean: 260.2566001610285 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1331899.8184068988,
            "unit": "iter/sec",
            "range": "stddev: 4.5508862800256644e-7",
            "extra": "mean: 750.8072200175775 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 741253.424780142,
            "unit": "iter/sec",
            "range": "stddev: 6.006553822533577e-7",
            "extra": "mean: 1.349066279587987 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 857891.8308263632,
            "unit": "iter/sec",
            "range": "stddev: 6.402972494213843e-7",
            "extra": "mean: 1.1656481202726354 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 7419292.564525406,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 134.78373999987525 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 4272163.653917612,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 234.07343000144465 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 7911376.757493104,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 126.40025000109743 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 11584270.645699568,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 86.32394999949611 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 4763605.142078252,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 209.92504000105328 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 4880030.31086991,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 204.91675999892323 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 70323.9519258558,
            "unit": "iter/sec",
            "range": "stddev: 0.0000747094960047602",
            "extra": "mean: 14.21990620001452 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 20948.600081153934,
            "unit": "iter/sec",
            "range": "stddev: 0.000057870769441003276",
            "extra": "mean: 47.73588670011577 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 4.69700672105412,
            "unit": "iter/sec",
            "range": "stddev: 0.1771563375148322",
            "extra": "mean: 212.90154759999496 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 2112913.5061548767,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 473.28013999958785 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1765242.2667939763,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 566.4944799991645 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 6876286.123431758,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 145.42733999860502 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2441492.799002628,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 409.5854800016241 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2483731.064785672,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 402.6200799989965 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 333077.0693873455,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.002308150000772 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 69714.57632447041,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 14.344202500001302 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 60056.58002468377,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 16.650964800010115 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.0639591382952056,
            "unit": "iter/sec",
            "range": "stddev: 0.007117965799104889",
            "extra": "mean: 326.3751097400086 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 11504704.964136427,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 86.92096000004312 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 4773726.782586919,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 209.47994000152903 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 259879.3525699933,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.847939399997813 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_mean",
            "value": 142472.46313602067,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.018900200000644 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_std",
            "value": 50302.611962075265,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 19.87968340001771 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_mean",
            "value": 1875703.1894046003,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 533.1333899994206 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_std",
            "value": 1197834.889481042,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 834.8395999996683 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 101935.38279184257,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.810136309999962 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}