window.BENCHMARK_DATA = {
  "lastUpdate": 1632662589920,
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
      },
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
        "date": 1632662326135,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 3.0806581237054083,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 324.6059640000567 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 10.09781001323105,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 99.03137399987827 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 2.1610513910926095,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 462.73772299991833 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 8950125.248028552,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 111.73028000030172 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 8863964.209663587,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 112.81633999715268 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 8706897.699938549,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 114.85147000257712 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 12357079.562542738,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 80.92526999917027 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 225.47466926033715,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.4350880002639315 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 16631488.297567574,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 60.126909997961775 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 18004192.09671968,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 55.54261999805021 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 8120903.359414184,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 123.13901000197802 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 15367772.305910664,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 65.07124000108888 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 3801689.290425396,
            "unit": "iter/sec",
            "range": "stddev: 7.453623798247393e-7",
            "extra": "mean: 263.0409598486949 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 1170082.4332569656,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014497921196201683",
            "extra": "mean: 854.6406403320361 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 914229.8536827036,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015783241135968396",
            "extra": "mean: 1.0938168295115247 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 858366.5636165189,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019354409914739546",
            "extra": "mean: 1.165003440705732 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 4536060.360295983,
            "unit": "iter/sec",
            "range": "stddev: 7.269973076562905e-7",
            "extra": "mean: 220.45562020139187 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1449339.5111459347,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013879397907549643",
            "extra": "mean: 689.9694600951989 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2903915.3078712896,
            "unit": "iter/sec",
            "range": "stddev: 0.000001044380260482429",
            "extra": "mean: 344.36266005741345 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 5036779.080644204,
            "unit": "iter/sec",
            "range": "stddev: 8.678428440230271e-7",
            "extra": "mean: 198.53957935993094 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1470349.2610169086,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016389083634360918",
            "extra": "mean: 680.1105196655044 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 811505.3346548849,
            "unit": "iter/sec",
            "range": "stddev: 0.000003236545489559222",
            "extra": "mean: 1.2322777895542458 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 899110.5531033132,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020116713838806434",
            "extra": "mean: 1.1122102799799904 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 8053281.152408604,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 124.17298999935157 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 4698283.294244354,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 212.8437000010308 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 9463437.300260914,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 105.66984999968554 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 16460772.579305938,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 60.75049000173749 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 5452637.9235139545,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 183.39747000027273 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 6048899.789846821,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 165.319319999071 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 51808.41360490359,
            "unit": "iter/sec",
            "range": "stddev: 0.00010511923430237726",
            "extra": "mean: 19.301884200240238 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 9652.395333113733,
            "unit": "iter/sec",
            "range": "stddev: 0.00011824273339841619",
            "extra": "mean: 103.60122700003558 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 3.654409188669753,
            "unit": "iter/sec",
            "range": "stddev: 0.21906535593440615",
            "extra": "mean: 273.64204400000744 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 2556875.3265036982,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 391.10237000386405 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1991635.5687711695,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 502.099889999954 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 9636564.672693579,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 103.77141999924788 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2703242.839829593,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 369.9260700022933 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2960176.975979301,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 337.8176399974109 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 363220.3416233365,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.753149770001073 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 32862.84971632128,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 30.42949740001859 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 31269.92607634166,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 31.97960870002134 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.5225015639003208,
            "unit": "iter/sec",
            "range": "stddev: 0.014404019992786407",
            "extra": "mean: 283.8891571400017 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 14777245.583551748,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 67.67160999970656 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 5247120.760538006,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 190.58071000017662 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 278478.4527693986,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.5909421000269504 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_mean",
            "value": 144289.48186945447,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.930512100007036 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_std",
            "value": 36357.74495464936,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 27.504456099995878 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_mean",
            "value": 2348477.356475385,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 425.8078100019702 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_std",
            "value": 1224701.7793040492,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 816.525309996905 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 107299.27561263983,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.31972740999754 usec\nrounds: 1"
          }
        ]
      },
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
          "id": "5f5bf76b4a8cefcba3e9fb127c9fd6dd465316fd",
          "message": "Cleanup workflows",
          "timestamp": "2021-09-26T22:12:28+10:00",
          "tree_id": "ea76e0c8404e500c26766ee320cc2f95b005e326",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/5f5bf76b4a8cefcba3e9fb127c9fd6dd465316fd"
        },
        "date": 1632662581564,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 2.4981958217134426,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 400.28887700009363 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 7.924678467083981,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 126.18808499973966 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 1.692868791064538,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 590.7132349998392 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 6452290.60191451,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 154.98371999910887 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 5814602.560261775,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 171.9808000007106 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 5991727.341840469,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 166.89678000147978 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 7210551.863939542,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 138.68563999949401 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 175.04165116434453,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.712925999887375 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 9962197.445561826,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 100.37946000011289 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 10021599.553651555,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 99.78446999866719 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 4729698.219722309,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 211.42997999959334 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 9298562.907238614,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 107.54349999842816 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2596338.032502431,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013636933034169049",
            "extra": "mean: 385.1578598323613 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 834316.3184846154,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014861466495965092",
            "extra": "mean: 1.198586169111877 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 657088.1570264801,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015136870280640702",
            "extra": "mean: 1.5218658094909188 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 670470.464533426,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016355753285009185",
            "extra": "mean: 1.4914900102212414 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3395404.8441941077,
            "unit": "iter/sec",
            "range": "stddev: 8.536554934917046e-7",
            "extra": "mean: 294.5156898476853 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1130120.4276017381,
            "unit": "iter/sec",
            "range": "stddev: 0.000005206537526975573",
            "extra": "mean: 884.8614497856033 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2249132.999773936,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017017543680244973",
            "extra": "mean: 444.6157697657327 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 3721670.000014117,
            "unit": "iter/sec",
            "range": "stddev: 7.303333108818134e-7",
            "extra": "mean: 268.696579760217 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 955930.2658297312,
            "unit": "iter/sec",
            "range": "stddev: 0.000001933531845366057",
            "extra": "mean: 1.046101411102427 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 601830.0510681055,
            "unit": "iter/sec",
            "range": "stddev: 0.000001397466147270127",
            "extra": "mean: 1.661598649361622 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 828025.3802196265,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017816318286243074",
            "extra": "mean: 1.207692449879687 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 6518612.038716197,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 153.40689000368002 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 3942930.497189257,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 253.61846999658155 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 6990180.125031955,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 143.05783000054362 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 12023929.062748862,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 83.16748999277479 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 4201161.881691054,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 238.0293900023389 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 4428221.0171985,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 225.82431999580876 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 75828.65535469222,
            "unit": "iter/sec",
            "range": "stddev: 0.000057291828231049645",
            "extra": "mean: 13.18762670025535 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 8847.878273146112,
            "unit": "iter/sec",
            "range": "stddev: 0.00015815676887302496",
            "extra": "mean: 113.02144639976177 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 3.3767421414670395,
            "unit": "iter/sec",
            "range": "stddev: 0.21022010972059926",
            "extra": "mean: 296.14343000012013 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 1891499.7533179764,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 528.6810100005823 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1604579.1608349662,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 623.2163700042292 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 5692016.27003758,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 175.68466999364318 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2210879.3303584736,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 452.3087200050213 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2109749.996533647,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 473.98980999787454 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 301514.63100951293,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.316588640000191 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 33350.882345209604,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 29.984214200067072 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 30148.263370731194,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 33.16940640006578 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 2.865727251613384,
            "unit": "iter/sec",
            "range": "stddev: 0.01390112403802228",
            "extra": "mean: 348.951561749991 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 10270675.434875209,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 97.3645799967926 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 3790957.6485277587,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 263.78559000477253 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 217912.98804205528,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.58898759998192 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_mean",
            "value": 131007.06876165868,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.633175899991329 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_std",
            "value": 39024.39831535719,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.624994699956005 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_mean",
            "value": 1885279.924762443,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 530.425209999521 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_std",
            "value": 1030114.5012375859,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 970.7658700062893 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 88660.87510602939,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.278932209997947 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}