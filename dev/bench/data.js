window.BENCHMARK_DATA = {
  "lastUpdate": 1629529957298,
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
          "id": "c3f0d0e847c69da62ba32f73e766f966bb9b5b1e",
          "message": "Add `_reset` and `_dispose` overrides",
          "timestamp": "2021-08-21T16:45:25+10:00",
          "tree_id": "4998b50381c25889d6b485bb159ef3f271c31121",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/c3f0d0e847c69da62ba32f73e766f966bb9b5b1e"
        },
        "date": 1629529953523,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 0.32109054597088255,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.114386308000121 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 0.4364800227617799,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.2910555989999466 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 0.13344811055860759,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.493549333999908 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 7404503.196731619,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 135.05294999959006 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 6786929.243014825,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 147.3420399997849 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 7495918.659650518,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 133.40593000066292 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 7873278.015734006,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 127.01189999916097 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 195.88500453156036,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.10503600003176 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 11666351.67528585,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 85.71659999915937 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 11916878.816908993,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 83.91458999994938 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 6175998.4149478655,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 161.91714000115098 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 10588323.239456555,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 94.44366000025184 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2730847.1856661486,
            "unit": "iter/sec",
            "range": "stddev: 6.110602956429421e-8",
            "extra": "mean: 366.1867296159471 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 923617.3357086821,
            "unit": "iter/sec",
            "range": "stddev: 2.0077228439633277e-7",
            "extra": "mean: 1.0826994701574222 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 707817.255517947,
            "unit": "iter/sec",
            "range": "stddev: 1.6236893821028316e-7",
            "extra": "mean: 1.4127940399930594 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 710277.0325549518,
            "unit": "iter/sec",
            "range": "stddev: 1.3328570239435074e-7",
            "extra": "mean: 1.4079013598438905 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 4178164.807215459,
            "unit": "iter/sec",
            "range": "stddev: 6.70553046434878e-8",
            "extra": "mean: 239.3395297076495 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1338051.6070097669,
            "unit": "iter/sec",
            "range": "stddev: 9.67020865698531e-8",
            "extra": "mean: 747.3553297654689 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2807847.7208972923,
            "unit": "iter/sec",
            "range": "stddev: 9.678810038645079e-8",
            "extra": "mean: 356.1446700109627 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 4590727.680250455,
            "unit": "iter/sec",
            "range": "stddev: 4.8212838757403505e-8",
            "extra": "mean: 217.8303897881051 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1414558.1688677564,
            "unit": "iter/sec",
            "range": "stddev: 8.690600949803297e-8",
            "extra": "mean: 706.9345199147392 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 784088.2154932537,
            "unit": "iter/sec",
            "range": "stddev: 1.1122761279993478e-7",
            "extra": "mean: 1.275366700124323 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 889439.3135765969,
            "unit": "iter/sec",
            "range": "stddev: 2.462836343416422e-7",
            "extra": "mean: 1.1243037998610816 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 7634705.600441432,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 130.98081999942224 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 4588916.591670787,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 217.91635999989012 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 8556023.08527262,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 116.87672999869392 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 11990620.456963357,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 83.3985200006282 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 5349562.908578005,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 186.93116000122245 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 5511459.895894848,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 181.44012999982806 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_mean",
            "value": 165135.099171169,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.055647800008046 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_std",
            "value": 54486.07146402851,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 18.353314399996634 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_mean",
            "value": 2298450.5386329377,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 435.0757100019109 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_std",
            "value": 1287314.6826837945,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 776.8108400000528 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 44406.07739631264,
            "unit": "iter/sec",
            "range": "stddev: 0.0001384659849866242",
            "extra": "mean: 22.519440099949865 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 17045.309524699554,
            "unit": "iter/sec",
            "range": "stddev: 0.0001318264046622982",
            "extra": "mean: 58.667165800125076 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 5.218213302717644,
            "unit": "iter/sec",
            "range": "stddev: 0.18216543721523681",
            "extra": "mean: 191.63647440000204 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 2337694.840728617,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 427.7718299999833 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1957431.2340273054,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 510.8736299985139 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 7635864.556228402,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 130.96094000047742 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2698184.119386413,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 370.6196300004194 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2692357.9358497313,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 371.4216399998804 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 349386.43462090363,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.862160350000522 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 71571.82089438911,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 13.971979300004023 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 62148.1853376041,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 16.090574400004698 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.430051860750079,
            "unit": "iter/sec",
            "range": "stddev: 0.0003536780271415787",
            "extra": "mean: 291.5407814799983 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 11609332.045314282,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 86.13760000116599 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 5302779.98777106,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 188.5803299978761 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 306181.8420083437,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.2660329999998794 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 105878.14866936946,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.444819469999857 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}