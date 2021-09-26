window.BENCHMARK_DATA = {
  "lastUpdate": 1632662271129,
  "repoUrl": "https://github.com/nautechsystems/nautilus_trader",
  "entries": {
    "Benchmark with pytest-benchmark": [
      {
        "commit": {
          "author": {
            "email": "chris@cjdsellers.io",
            "name": "Christopher Sellers",
            "username": "cjdsellers"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b13a8f9dc5f6108490bff077e6f57032e8886723",
          "message": "Release 1.130.0\n\n- Cleanup workflows.",
          "timestamp": "2021-09-26T22:15:29+10:00",
          "tree_id": "ea76e0c8404e500c26766ee320cc2f95b005e326",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/b13a8f9dc5f6108490bff077e6f57032e8886723"
        },
        "date": 1632662263134,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 11468556.715170616,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 87.19493000171497 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 4753171.827194801,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 210.38583000063227 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 257097.3788219048,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.889576799974748 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_mean",
            "value": 135217.65444935154,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.39548400001695 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_std",
            "value": 38845.95036659053,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.74270909999541 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_mean",
            "value": 2259000.558514959,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 442.67364000006637 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_std",
            "value": 1262877.6263001098,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 791.842359999464 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 108602.6255257834,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.207880520002618 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 2.858039334258338,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 349.89021599994885 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 9.007856084569628,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 111.01420700015296 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 1.9691668872759125,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 507.8289739999491 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 6738413.701962763,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 148.402879999594 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 7666601.577449745,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 130.4358899960789 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 8102224.797932981,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 123.42289000116578 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 9263212.421233473,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 107.9539099964677 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 213.62974888553052,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.680995999933657 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 12689237.77517058,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 78.80694000050426 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 12713436.34780641,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 78.6569399997461 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 5745348.350500227,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 174.05385000074602 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 10453261.793861302,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 95.66392000124324 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 3006616.987976572,
            "unit": "iter/sec",
            "range": "stddev: 9.66396095188167e-7",
            "extra": "mean: 332.59973052736314 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 965278.7498962827,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025264930481851864",
            "extra": "mean: 1.0359701797096932 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 759145.8840333744,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022592935530660113",
            "extra": "mean: 1.3172698700373076 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 767466.1814975161,
            "unit": "iter/sec",
            "range": "stddev: 0.000002076258721222023",
            "extra": "mean: 1.3029890099505792 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 4062632.30581641,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010437606844683247",
            "extra": "mean: 246.14582977847022 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1266413.7496615523,
            "unit": "iter/sec",
            "range": "stddev: 0.000004984416036638852",
            "extra": "mean: 789.6313509445463 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2826018.5399268093,
            "unit": "iter/sec",
            "range": "stddev: 7.962583325541775e-7",
            "extra": "mean: 353.85472029702214 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 4457602.303741116,
            "unit": "iter/sec",
            "range": "stddev: 7.021265496526941e-7",
            "extra": "mean: 224.33584960253938 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1352476.518238181,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023130660125910773",
            "extra": "mean: 739.3843711997761 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 793445.5240028779,
            "unit": "iter/sec",
            "range": "stddev: 0.000002262073363439888",
            "extra": "mean: 1.2603259704019365 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 891814.8745710491,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016872640500623126",
            "extra": "mean: 1.121308949327613 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 7064447.827071182,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 141.5538800029026 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 4608468.650977654,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 216.99182000247674 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 7631031.099792254,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 131.04388999636285 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 11694684.988330275,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 85.50892999664939 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 4702699.565869094,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 212.64382000026671 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 4745210.208516841,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 210.73882000109734 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 80088.6132436759,
            "unit": "iter/sec",
            "range": "stddev: 0.00005442641127144499",
            "extra": "mean: 12.486169500243705 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 9173.316663795847,
            "unit": "iter/sec",
            "range": "stddev: 0.00014557235522908568",
            "extra": "mean: 109.01182600036918 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 3.5196656172375884,
            "unit": "iter/sec",
            "range": "stddev: 0.22747319007837194",
            "extra": "mean: 284.11789889996726 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 2060349.5333491385,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 485.3545400010262 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1959023.0751642096,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 510.4585099979886 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 7085020.099382127,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 141.1428600022191 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2580987.3169562332,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 387.4486299991986 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2627004.986017679,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 380.6616300016685 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 341812.8896350189,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.9255772099986643 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 32701.54033703868,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 30.579599300017435 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 29767.712478046076,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 33.59344460000102 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.5629127088289505,
            "unit": "iter/sec",
            "range": "stddev: 0.0071745405570322026",
            "extra": "mean: 280.6692393900039 msec\nrounds: 10"
          }
        ]
      }
    ]
  }
}