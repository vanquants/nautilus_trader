window.BENCHMARK_DATA = {
  "lastUpdate": 1630818199078,
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
          "id": "97f62fdf84d649ff8ffb0ea35074d2080f1b2746",
          "message": "Remove redundant tests for `NotImplementedError`\n\n- Use `pragma: no cover` with guidance on usage in code and docs.",
          "timestamp": "2021-09-05T14:40:33+10:00",
          "tree_id": "05968c8ce611e5695c90d3ce3c2ea99897e701a8",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/97f62fdf84d649ff8ffb0ea35074d2080f1b2746"
        },
        "date": 1630818185229,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 0.21879363030103738,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.570516968999982 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 0.5526747784951296,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.8093823689998771 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 0.20459672687580133,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.887663724000049 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 5580900.907029435,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 179.1825399982372 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 5108709.506810657,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 195.74414999851797 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 5387414.934050987,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 185.61778000048434 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 6563076.812348999,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 152.36756000149398 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 169.6032048209677,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.896115000041391 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 9288851.993493367,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 107.65593000087392 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 9232675.991274456,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 108.31096000174512 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 4448236.120950063,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 224.80820999817297 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 7091637.7889753645,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 141.01114999903075 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2513301.0182887237,
            "unit": "iter/sec",
            "range": "stddev: 0.0000034997368999173763",
            "extra": "mean: 397.8830998448757 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 703372.1764448899,
            "unit": "iter/sec",
            "range": "stddev: 0.000003690074751820538",
            "extra": "mean: 1.4217224301569331 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 533920.7628345373,
            "unit": "iter/sec",
            "range": "stddev: 0.000005820329105406253",
            "extra": "mean: 1.8729370903110976 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 499735.39509726025,
            "unit": "iter/sec",
            "range": "stddev: 0.000007704560568330979",
            "extra": "mean: 2.0010589800335765 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3128054.5493336795,
            "unit": "iter/sec",
            "range": "stddev: 0.000002083004331997469",
            "extra": "mean: 319.6875195840221 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1017843.3845628817,
            "unit": "iter/sec",
            "range": "stddev: 0.00000316717165706947",
            "extra": "mean: 982.4694203120998 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2308763.8222546168,
            "unit": "iter/sec",
            "range": "stddev: 4.2250696074042244e-7",
            "extra": "mean: 433.13222009146557 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 3467595.1529299957,
            "unit": "iter/sec",
            "range": "stddev: 0.0000033584925357553495",
            "extra": "mean: 288.38429975166946 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1100106.1016260535,
            "unit": "iter/sec",
            "range": "stddev: 0.0000058095321988156615",
            "extra": "mean: 909.003230253802 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 653690.077463935,
            "unit": "iter/sec",
            "range": "stddev: 0.000004082628415730528",
            "extra": "mean: 1.5297769301923836 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 559522.6988790237,
            "unit": "iter/sec",
            "range": "stddev: 0.000008321375898256693",
            "extra": "mean: 1.7872375901879423 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 5905970.221263112,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 169.32019000023502 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 3345433.543413033,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 298.91492000160724 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 6445306.06723953,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 155.15167000103247 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 9381664.793303972,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 106.59089000000677 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 3568214.2475744067,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 280.25222999986 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 4357215.317599429,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 229.5043800017993 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_mean",
            "value": 116307.55294630794,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.597893899991504 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_std",
            "value": 35353.44984460502,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 28.285782700004347 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_mean",
            "value": 1667133.7697655517,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 599.8318899992228 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_std",
            "value": 971845.0936858085,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.0289705699983642 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 67586.33464880851,
            "unit": "iter/sec",
            "range": "stddev: 0.00006338757013489765",
            "extra": "mean: 14.795890399977907 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 9019.359512221212,
            "unit": "iter/sec",
            "range": "stddev: 0.00017097214260710302",
            "extra": "mean: 110.87261780007793 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 3.1237310125847024,
            "unit": "iter/sec",
            "range": "stddev: 0.24425648551316692",
            "extra": "mean: 320.1299971000253 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 1781113.6056571796,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 561.446500000784 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1213874.9598063503,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 823.8080800015268 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 5963273.865993474,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 167.69311999951242 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2104008.0617206325,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 475.2833499992448 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2044823.1366043997,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 489.0398499992444 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 251024.65565914588,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.9836724300016617 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 38159.83127799613,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 26.20556659999238 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 35829.594434521525,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 27.909888900012447 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 2.737269505001616,
            "unit": "iter/sec",
            "range": "stddev: 0.0032097516506505207",
            "extra": "mean: 365.3275639000003 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 8714277.996003432,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 114.75419999896985 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 3842983.089506386,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 260.2145199989536 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 220845.3447442784,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.528055599985237 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 80564.47096984986,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 12.412419370000407 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}