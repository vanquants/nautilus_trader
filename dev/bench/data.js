window.BENCHMARK_DATA = {
  "lastUpdate": 1628302052280,
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
          "id": "e72df9a34cbfeebbe8d729801062df61fdd487e2",
          "message": "Refactor clients into components",
          "timestamp": "2021-08-07T11:50:45+10:00",
          "tree_id": "123f1b42baa79c97089b3b5212d7fa50496da6a2",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/e72df9a34cbfeebbe8d729801062df61fdd487e2"
        },
        "date": 1628302048132,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 0.32351432241920675,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.091053256999885 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 0.44545496774992543,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.2448958309998943 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 0.13752086651036477,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.271623757000043 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 7505921.233591908,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 133.22815000037735 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 6853621.583909172,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 145.90825999903245 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 6812069.379287542,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 146.79827000009027 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 8293933.692427853,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 120.57005000087885 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 193.71792151493744,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.162145000213059 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 11748846.322051857,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 85.11473999988084 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 11468973.673809128,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 87.1917599988592 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 6225627.059171497,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 160.62638999983392 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 10732629.69489077,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 93.1738100007351 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2904832.236534205,
            "unit": "iter/sec",
            "range": "stddev: 7.127791268773327e-8",
            "extra": "mean: 344.25395980633766 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 958520.0826950057,
            "unit": "iter/sec",
            "range": "stddev: 1.0810372638545333e-7",
            "extra": "mean: 1.0432749590268031 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 699672.4554780745,
            "unit": "iter/sec",
            "range": "stddev: 1.3114229241198721e-7",
            "extra": "mean: 1.4292401997113302 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 748291.3888479383,
            "unit": "iter/sec",
            "range": "stddev: 1.165305507510559e-7",
            "extra": "mean: 1.3363778000166349 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 4250505.948129564,
            "unit": "iter/sec",
            "range": "stddev: 5.860819017449651e-8",
            "extra": "mean: 235.26611001216224 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1332951.5750075832,
            "unit": "iter/sec",
            "range": "stddev: 8.300640676043614e-8",
            "extra": "mean: 750.214800559661 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2743868.2914618617,
            "unit": "iter/sec",
            "range": "stddev: 7.914795367798823e-8",
            "extra": "mean: 364.4489799717121 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 4619473.205468554,
            "unit": "iter/sec",
            "range": "stddev: 4.5265771368763866e-8",
            "extra": "mean: 216.47489995530123 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1453025.5575677976,
            "unit": "iter/sec",
            "range": "stddev: 7.871378196998082e-8",
            "extra": "mean: 688.2191402564786 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 793619.8863494465,
            "unit": "iter/sec",
            "range": "stddev: 1.3162782193346996e-7",
            "extra": "mean: 1.2600490703425749 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 908099.5121902616,
            "unit": "iter/sec",
            "range": "stddev: 2.602330401252383e-7",
            "extra": "mean: 1.1012008998750389 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 7609125.898649161,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 131.4211399994747 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 4586064.353736546,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 218.05189000133396 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 8631254.75733729,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 115.85801000137508 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 11925101.300724855,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 83.85673000020688 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 5402875.983320204,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 185.0866099994164 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 5554211.127861713,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 180.0435700010894 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_mean",
            "value": 166932.31161878363,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.990451999991819 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_std",
            "value": 55188.28579186165,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 18.11978729999737 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_mean",
            "value": 2192910.513285828,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 456.01496000017505 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_std",
            "value": 1242118.7719197478,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 805.0759899992954 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 65629.57844214332,
            "unit": "iter/sec",
            "range": "stddev: 0.00006341333597249461",
            "extra": "mean: 15.237032200070644 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 16919.502519402296,
            "unit": "iter/sec",
            "range": "stddev: 0.00013074431478661352",
            "extra": "mean: 59.10339259994544 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 5.168103547518472,
            "unit": "iter/sec",
            "range": "stddev: 0.1847500164573747",
            "extra": "mean: 193.4945751000214 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 2294729.8728921674,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 435.7811399995626 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1802633.3191966978,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 554.7439900010431 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 7652928.0791149335,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 130.6689400007599 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2689417.8507568063,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 371.82768000093347 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2628606.3394626114,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 380.429730000742 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 366107.8378323865,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.7314356500005488 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 70156.81577752107,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 14.253782599985243 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 62290.33268678703,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 16.053855499990277 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.5211674195083695,
            "unit": "iter/sec",
            "range": "stddev: 0.00019272737865079652",
            "extra": "mean: 283.99672065000004 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 11643518.769231504,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 85.88468999960241 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 5299964.755223893,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 188.68050000037329 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 297590.11229482904,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.36032669999895 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 105271.51346097146,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.49924597000063 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}