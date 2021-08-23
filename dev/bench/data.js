window.BENCHMARK_DATA = {
  "lastUpdate": 1629704028913,
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
          "id": "fb7f1fbbeba2baf44890fda21d8192af9d829701",
          "message": "Fix tests",
          "timestamp": "2021-08-23T17:15:56+10:00",
          "tree_id": "d50a3a3b27099f0e966e1c82c42071c9ecc9cca7",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/fb7f1fbbeba2baf44890fda21d8192af9d829701"
        },
        "date": 1629704023268,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 0.28550208066436294,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.5026014439999926 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 0.3583671368092643,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.79043443799992 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 0.1080549867346557,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.254547431999981 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 7964720.112975794,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 125.5536899998333 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 6702341.892091969,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 149.20157999995354 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 6764273.784561176,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 147.83552999915628 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 8762147.732007297,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 114.12727000106315 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 203.7247816696058,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.908583000087674 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 11900067.045110198,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 84.03313999906459 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 12005794.957257435,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 83.29310999897643 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 6051064.814893423,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 165.2601700016021 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 11339888.317937415,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 88.18429000029937 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 3256668.6373843937,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010925834593370447",
            "extra": "mean: 307.06225021503997 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 928701.4354918718,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022611566336066854",
            "extra": "mean: 1.076772320773216 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 700670.9375086607,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022619948284946448",
            "extra": "mean: 1.427203479504442 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 700377.0858680517,
            "unit": "iter/sec",
            "range": "stddev: 0.000002064777443980695",
            "extra": "mean: 1.4278022799112478 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 4307970.054214943,
            "unit": "iter/sec",
            "range": "stddev: 5.77666701906958e-7",
            "extra": "mean: 232.1278902627455 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1484149.5209480757,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020627645573377112",
            "extra": "mean: 673.7865598347526 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2478806.0815131124,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012133685020963337",
            "extra": "mean: 403.4200204114313 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 4999614.0232548425,
            "unit": "iter/sec",
            "range": "stddev: 3.812728860930578e-7",
            "extra": "mean: 200.0154402617227 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1635951.80870974,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010616983320888775",
            "extra": "mean: 611.264949661745 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 886451.3844330778,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021080405847858956",
            "extra": "mean: 1.1280934494106987 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 958894.6966590239,
            "unit": "iter/sec",
            "range": "stddev: 0.000001489378757595944",
            "extra": "mean: 1.0428673799992794 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 7974380.548073292,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 125.40159000081984 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 4777496.462889366,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 209.3146499987597 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 7701273.752092196,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 129.8486500013496 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 11315657.973867372,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 88.37311999968733 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 4741973.34468246,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 210.88267000095584 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 5163196.774689456,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 193.67846000022837 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_mean",
            "value": 148990.54732485127,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.711835199985217 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_std",
            "value": 38743.58055193422,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.810727499992936 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_mean",
            "value": 2345565.5593629824,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 426.33641000065836 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_std",
            "value": 1270173.5472421993,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 787.293989999398 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 40447.32525253288,
            "unit": "iter/sec",
            "range": "stddev: 0.0001430687121064878",
            "extra": "mean: 24.723513699768777 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 12925.51585018527,
            "unit": "iter/sec",
            "range": "stddev: 0.00011904755391147651",
            "extra": "mean: 77.36635130006562 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 4.438344041161898,
            "unit": "iter/sec",
            "range": "stddev: 0.19793856356394018",
            "extra": "mean: 225.30925740002203 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 2395755.870557657,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 417.40480000044045 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 2106680.3550352035,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 474.68045999949027 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 8023464.461426976,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 124.634439998772 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2753219.215321503,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 363.21118000159913 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2853628.4913472887,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 350.43104000124004 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 359105.10490725684,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.784700040001553 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 55460.04903755023,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 18.03099740000107 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 46761.45128676307,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 21.385136099979718 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.6878234525390132,
            "unit": "iter/sec",
            "range": "stddev: 0.0026832348232484404",
            "extra": "mean: 271.16265539000096 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 11119376.514538443,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 89.93309999823396 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 4593821.851717965,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 217.6836699982232 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 324485.92182177777,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.081797799995911 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 108939.13730321873,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.179437479999706 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}