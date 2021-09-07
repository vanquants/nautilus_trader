window.BENCHMARK_DATA = {
  "lastUpdate": 1631001422802,
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
          "id": "c1c91fefb6c64eac9af21ac6f3e0e6c249d5e2df",
          "message": "Add order custom user tags",
          "timestamp": "2021-09-07T17:40:27+10:00",
          "tree_id": "600f84a8c87c767e6d0ed674d038968f3db2938f",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/c1c91fefb6c64eac9af21ac6f3e0e6c249d5e2df"
        },
        "date": 1631001405906,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 0.3133170583356624,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.1916551409999556 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 0.7794245845783566,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.282997764999891 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 0.29938509373438943,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.3401796579998972 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 7366957.897307105,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 135.74123999887888 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 6646661.54468869,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 150.4514700013715 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 7360017.61691787,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 135.8692400003747 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 8821541.710961124,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 113.35886999859213 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 187.4629292079473,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.334387999937462 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 11716543.994289352,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 85.34940000117786 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 11855871.958278993,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 84.34639000142852 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 6178114.929908837,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 161.86166999887064 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 10560380.241326272,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 94.69355999954132 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2791831.4670372684,
            "unit": "iter/sec",
            "range": "stddev: 7.430971534023248e-8",
            "extra": "mean: 358.1878103341296 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 923857.1187961142,
            "unit": "iter/sec",
            "range": "stddev: 1.5974616168136453e-7",
            "extra": "mean: 1.0824184602302012 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 728904.6414408127,
            "unit": "iter/sec",
            "range": "stddev: 1.4137856359876705e-7",
            "extra": "mean: 1.371921569909773 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 738164.7644406199,
            "unit": "iter/sec",
            "range": "stddev: 1.2870655491555467e-7",
            "extra": "mean: 1.3547110999775214 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3950597.461695797,
            "unit": "iter/sec",
            "range": "stddev: 8.193148819538321e-8",
            "extra": "mean: 253.1262700631487 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1365724.289217271,
            "unit": "iter/sec",
            "range": "stddev: 1.0669456196958939e-7",
            "extra": "mean: 732.212209957197 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2793508.4194020247,
            "unit": "iter/sec",
            "range": "stddev: 7.791754642061837e-8",
            "extra": "mean: 357.9727890041795 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 4827199.299690134,
            "unit": "iter/sec",
            "range": "stddev: 7.3057695938796e-8",
            "extra": "mean: 207.15945995107177 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1461119.4293614703,
            "unit": "iter/sec",
            "range": "stddev: 9.502618409217424e-8",
            "extra": "mean: 684.4067499923767 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 798520.9858507647,
            "unit": "iter/sec",
            "range": "stddev: 1.3333358433930948e-7",
            "extra": "mean: 1.2523152399489845 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 908886.1288457976,
            "unit": "iter/sec",
            "range": "stddev: 2.717400209906161e-7",
            "extra": "mean: 1.1002478399245774 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 7243317.822045678,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 138.05827999931353 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 4602640.682236671,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 217.2665800003415 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 8606821.54283367,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 116.18691000194303 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 11828665.564372081,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 84.54039000071134 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 5367050.720261493,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 186.32207000109702 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 5520531.463796279,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 181.1419799992109 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 88840.99135409783,
            "unit": "iter/sec",
            "range": "stddev: 0.00005145268622297337",
            "extra": "mean: 11.256065300017326 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 17642.383228735715,
            "unit": "iter/sec",
            "range": "stddev: 0.0001235859545597731",
            "extra": "mean: 56.68168450004032 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 5.552693438233471,
            "unit": "iter/sec",
            "range": "stddev: 0.1469481385355825",
            "extra": "mean: 180.0927803999457 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 2297271.8472556584,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 435.29893999902924 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1888697.4001568842,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 529.4654399995125 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 7763911.259729633,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 128.80106000011438 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2696283.289426661,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 370.8809099998689 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2690610.0105163404,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 371.6629300015484 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 347009.20435663906,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.8817679400003726 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 77010.35334891985,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 12.985266999999112 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 66927.2004262929,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 14.941608100002668 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.3967501935255813,
            "unit": "iter/sec",
            "range": "stddev: 0.0005858988020287268",
            "extra": "mean: 294.39904114999763 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 11418885.60365696,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 87.57421999916915 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 4885989.34737428,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 204.66683999984525 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 282541.8173899312,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.539299099998061 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_mean",
            "value": 159973.4648809564,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.251036700018631 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_std",
            "value": 54490.851541786855,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 18.35170440001548 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_mean",
            "value": 2245207.3075099126,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 445.3931700004432 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_std",
            "value": 1281555.4022610849,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 780.3018100003101 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 106924.2699865567,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.352413629999319 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}