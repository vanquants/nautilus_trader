window.BENCHMARK_DATA = {
  "lastUpdate": 1630730434445,
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
          "id": "d952c32f723d8c76e4456f3fc0ba284bf43c9ee1",
          "message": "Add `timestamps_as_str` option to `MsgPackSerializer`",
          "timestamp": "2021-09-04T14:09:27+10:00",
          "tree_id": "1b134808dd8b7a243840ffb0e7438797c2f2cccd",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/d952c32f723d8c76e4456f3fc0ba284bf43c9ee1"
        },
        "date": 1630730423081,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 1972960.1471362633,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 506.85260999898674 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1648984.441599904,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 606.4338600003794 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 5913653.21188292,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 169.10021000057895 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2275314.2015488446,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 439.4997400004286 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2235380.76626824,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 447.3510799994074 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 310561.86878132675,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.2199703200012664 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 57510.85563407349,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 17.388021600004322 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 54540.193201783535,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 18.33510189999288 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 2.9739515004255654,
            "unit": "iter/sec",
            "range": "stddev: 0.0029711434509494513",
            "extra": "mean: 336.2529617100017 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 9816109.905136248,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 101.87334999955056 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 4467741.432497131,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 223.8267400002769 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 271837.90066888026,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.6786628999834647 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 91008.14028045442,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.988028069998563 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 0.2762950719712429,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.619318986999815 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 0.6783060194659551,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.4742608369999743 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 0.25668119624695335,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.8958833550000236 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 5797063.810349449,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 172.50112000056106 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 6580374.703588842,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 151.96703000128764 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 5730356.2527837455,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 174.50922000080027 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 7396825.016444555,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 135.193139999501 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 172.9832958698965,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.780904999937775 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 10019109.44743399,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 99.80927000015072 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 10191790.125655597,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 98.1181900010597 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 5401207.645159303,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 185.14378000190845 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 8907341.733894475,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 112.26694000015414 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2664787.2444287064,
            "unit": "iter/sec",
            "range": "stddev: 0.000002149324266322202",
            "extra": "mean: 375.26448015341884 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 828008.8637448152,
            "unit": "iter/sec",
            "range": "stddev: 0.000001374509678566596",
            "extra": "mean: 1.2077165399864498 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 603168.7298885386,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014698208508528655",
            "extra": "mean: 1.6579108804012321 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 616561.1583888797,
            "unit": "iter/sec",
            "range": "stddev: 0.000002060945301722102",
            "extra": "mean: 1.6218991196478783 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3729220.5478407647,
            "unit": "iter/sec",
            "range": "stddev: 4.160718542981684e-7",
            "extra": "mean: 268.1525501566284 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1161512.8172302048,
            "unit": "iter/sec",
            "range": "stddev: 8.447419694121773e-7",
            "extra": "mean: 860.9461601849944 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2460112.1109577944,
            "unit": "iter/sec",
            "range": "stddev: 5.012127438775186e-7",
            "extra": "mean: 406.48554004746984 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 4031678.0299837906,
            "unit": "iter/sec",
            "range": "stddev: 5.853966246804909e-7",
            "extra": "mean: 248.03567957633274 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1265071.3165541142,
            "unit": "iter/sec",
            "range": "stddev: 9.182213995860815e-7",
            "extra": "mean: 790.4692699253246 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 694023.9287510103,
            "unit": "iter/sec",
            "range": "stddev: 0.000001453071685952625",
            "extra": "mean: 1.440872509683686 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 766207.4504426643,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014553118509137729",
            "extra": "mean: 1.3051295695731824 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 6249343.037892685,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 160.01681999796347 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 3648834.689902637,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 274.0601000004972 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 6982854.996211496,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 143.20789999828776 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 10602295.184864696,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 94.31919999997262 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 4499634.967110442,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 222.2402500001408 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 4850146.008793606,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 206.1793600000783 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_mean",
            "value": 141028.39343011836,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.090770699983295 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_std",
            "value": 45961.08064407621,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 21.75753890001033 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_mean",
            "value": 1859390.5442192496,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 537.810629998603 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_std",
            "value": 1048535.0628282796,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 953.711550000662 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 76215.42491153436,
            "unit": "iter/sec",
            "range": "stddev: 0.00005896180505031391",
            "extra": "mean: 13.120703599838635 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 14317.071002875651,
            "unit": "iter/sec",
            "range": "stddev: 0.00014025189709793092",
            "extra": "mean: 69.84668859986414 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 4.60493275063573,
            "unit": "iter/sec",
            "range": "stddev: 0.17216218976062814",
            "extra": "mean: 217.1584373000769 msec\nrounds: 10"
          }
        ]
      }
    ]
  }
}