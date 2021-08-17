window.BENCHMARK_DATA = {
  "lastUpdate": 1629197215292,
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
          "id": "37f40a31ab0c2b6311673ebf4dd09e90e2952241",
          "message": "Merge remote-tracking branch 'origin/develop' into develop",
          "timestamp": "2021-08-17T20:27:40+10:00",
          "tree_id": "fcf31c8a870f3b58b71131bf3b00a17e539809f4",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/37f40a31ab0c2b6311673ebf4dd09e90e2952241"
        },
        "date": 1629197213022,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 0.32123694717630535,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.1129669510000895 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 0.4248055622779737,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.3540181409998695 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 0.13011458897401754,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.685533250999924 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 6697680.050788198,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 149.30543000218677 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 6876379.272798473,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 145.42536999897493 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 7391080.783688971,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 135.29821000020092 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 8327021.451122768,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 120.0909599992883 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 195.50789334536387,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.114882999805559 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 11649662.043157877,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 85.83940000107759 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 12020045.589679182,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 83.19435999965208 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 5694116.8271323405,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 175.6198599991876 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 10664217.593481272,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 93.7715300005948 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2626946.6114087487,
            "unit": "iter/sec",
            "range": "stddev: 9.978116139611129e-8",
            "extra": "mean: 380.67008886173426 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 956361.4567644073,
            "unit": "iter/sec",
            "range": "stddev: 1.395968933039279e-7",
            "extra": "mean: 1.0456297594669195 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 744222.7552173843,
            "unit": "iter/sec",
            "range": "stddev: 1.3600533590591275e-7",
            "extra": "mean: 1.3436837196786655 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 728765.1216397833,
            "unit": "iter/sec",
            "range": "stddev: 1.3558997163386992e-7",
            "extra": "mean: 1.3721842199993262 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 4095005.266658882,
            "unit": "iter/sec",
            "range": "stddev: 6.409596893858066e-8",
            "extra": "mean: 244.1999301299802 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1334732.3819402442,
            "unit": "iter/sec",
            "range": "stddev: 8.851882945812934e-8",
            "extra": "mean: 749.2138600446197 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2818702.6736494727,
            "unit": "iter/sec",
            "range": "stddev: 1.0730319401990974e-7",
            "extra": "mean: 354.77314061836296 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 4659633.791100439,
            "unit": "iter/sec",
            "range": "stddev: 7.955732155180757e-8",
            "extra": "mean: 214.60913986629748 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1461328.2278504476,
            "unit": "iter/sec",
            "range": "stddev: 1.194778140143258e-7",
            "extra": "mean: 684.3089601238717 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 800865.8254963271,
            "unit": "iter/sec",
            "range": "stddev: 1.33000565489189e-7",
            "extra": "mean: 1.2486486102466188 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 925919.8133751822,
            "unit": "iter/sec",
            "range": "stddev: 2.5837334398625807e-7",
            "extra": "mean: 1.0800071297262548 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 7676369.777278555,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 130.26990999833288 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 4574456.600296606,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 218.6052000001837 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 7591116.359361754,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 131.73293000136255 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 12201043.921297126,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 81.9602000001396 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 5362254.33030723,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 186.48873000074673 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 5515760.568782148,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 181.2986599998112 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_mean",
            "value": 169835.33547111505,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.8880562000013015 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_std",
            "value": 54183.390392692854,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 18.455840299998272 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_mean",
            "value": 2183312.202512127,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 458.0196999995678 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_std",
            "value": 1258964.4088616844,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 794.3036300002859 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 32910.67795173459,
            "unit": "iter/sec",
            "range": "stddev: 0.00018611832069674966",
            "extra": "mean: 30.385275000003276 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 15389.144149267922,
            "unit": "iter/sec",
            "range": "stddev: 0.0001806546147249257",
            "extra": "mean: 64.98087160016439 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 4.7960962071330435,
            "unit": "iter/sec",
            "range": "stddev: 0.20825492320339722",
            "extra": "mean: 208.5029066999823 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 2285430.735590937,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 437.55427999940366 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1774606.8944069927,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 563.5050799992314 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 7748883.482717124,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 129.05085000056715 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2596697.644586896,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 385.1045199985492 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2619875.892812261,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 381.69746999983545 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 354902.7326418554,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.8176734300018325 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 69736.04912376268,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 14.339785700008179 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 61145.68162260658,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 16.35438470000281 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.487066817375444,
            "unit": "iter/sec",
            "range": "stddev: 0.00024003651127779793",
            "extra": "mean: 286.7739714699974 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 11583572.872091638,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 86.3291499990737 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 5295754.377799267,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 188.8305100010257 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 322404.74737090047,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.10169130000304 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 105316.34275869057,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.495202489999883 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}