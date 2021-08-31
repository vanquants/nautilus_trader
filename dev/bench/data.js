window.BENCHMARK_DATA = {
  "lastUpdate": 1630395445326,
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
          "id": "459af3e081e41fd01aa34eb3f11099fbf66c8aee",
          "message": "Cleanup",
          "timestamp": "2021-08-31T17:04:21+10:00",
          "tree_id": "5ef33068277f1c2a64071ddec7db5c874070afb4",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/459af3e081e41fd01aa34eb3f11099fbf66c8aee"
        },
        "date": 1630395434524,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 0.22871815416878216,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.372193381999978 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 0.5909524210448269,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.6921836080000503 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 0.2152449552583991,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.645869627000138 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 5816896.093796697,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 171.9129899993277 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 5604647.912070073,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 178.42334000079063 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 5824383.876238378,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 171.69198000146935 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 7133006.969692548,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 140.19333000078404 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 164.42722269895708,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.081718000132241 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 9673480.375920957,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 103.37541000126294 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 9040954.529521577,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 110.60778999990362 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 4725092.466501851,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 211.63607000062257 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 8628197.67465521,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 115.8990600015386 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2637102.0811650143,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022047584389814484",
            "extra": "mean: 379.2041298447657 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 698276.405950075,
            "unit": "iter/sec",
            "range": "stddev: 0.000004038793847533851",
            "extra": "mean: 1.4320976499834615 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 583149.7173870833,
            "unit": "iter/sec",
            "range": "stddev: 0.000005040873373620757",
            "extra": "mean: 1.7148254902372173 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 597600.716762868,
            "unit": "iter/sec",
            "range": "stddev: 0.00000439789251839091",
            "extra": "mean: 1.673358100065343 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3355181.1564403074,
            "unit": "iter/sec",
            "range": "stddev: 0.000002560721105593671",
            "extra": "mean: 298.0464998381649 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1094771.212545817,
            "unit": "iter/sec",
            "range": "stddev: 0.0000034130605117603967",
            "extra": "mean: 913.4328602544883 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2298974.402255064,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025383991398522884",
            "extra": "mean: 434.9765699953423 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 3656548.316437186,
            "unit": "iter/sec",
            "range": "stddev: 0.000004529803255451212",
            "extra": "mean: 273.48195988679436 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1223857.9057533715,
            "unit": "iter/sec",
            "range": "stddev: 0.000004200973115554575",
            "extra": "mean: 817.0883198931733 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 644161.1160504036,
            "unit": "iter/sec",
            "range": "stddev: 0.00000329231119553675",
            "extra": "mean: 1.5524066496459454 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 739292.8221806342,
            "unit": "iter/sec",
            "range": "stddev: 0.000004308758367716064",
            "extra": "mean: 1.3526439997758644 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 5843649.078329877,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 171.1259500007145 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 3540790.9921563184,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 282.4227700011761 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 6642934.561514207,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 150.53588000000673 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 9870762.111614026,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 101.3093000005938 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 4192881.259088668,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 238.49948000133736 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 4284853.642257288,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 233.38019999982862 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_mean",
            "value": 126056.27278094935,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.932964999986325 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_std",
            "value": 39847.60252534369,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.09561270001086 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_mean",
            "value": 1797374.4313766994,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 556.3671000004433 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_std",
            "value": 1034270.9934178914,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 966.8645900001138 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 71734.11160487046,
            "unit": "iter/sec",
            "range": "stddev: 0.000060806069950420477",
            "extra": "mean: 13.940369199917768 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 10997.66210048968,
            "unit": "iter/sec",
            "range": "stddev: 0.00015394875080340585",
            "extra": "mean: 90.9284165000372 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 3.8713973926148446,
            "unit": "iter/sec",
            "range": "stddev: 0.19794123725750987",
            "extra": "mean: 258.3046633000322 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 1835611.8538542506,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 544.7774799995386 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1557075.6108266674,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 642.2295700008362 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 5683555.541351108,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 175.9462000018175 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 1992614.4542369924,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 501.8532299982325 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2129061.357521612,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 469.6905500009052 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 284894.56347060023,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.5100704900014534 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 46071.092477876315,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 21.705584699998326 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 39242.614248623875,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.482502099998783 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 2.934496953260286,
            "unit": "iter/sec",
            "range": "stddev: 0.0008925868538769571",
            "extra": "mean: 340.7739097799981 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 9287670.070075402,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 107.66962999923635 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 3940664.9351798026,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 253.7642800007234 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 238694.8509274056,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.189449399996192 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 88377.33455964486,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.31511835000083 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}