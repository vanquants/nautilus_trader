window.BENCHMARK_DATA = {
  "lastUpdate": 1629712742469,
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
          "id": "1077777ab2f015b4fc7a882f184ceaf5a9e22e89",
          "message": "Refine UUID4 type and factory",
          "timestamp": "2021-08-23T19:41:06+10:00",
          "tree_id": "717b9757c5a33574423da4e19e5d5f87758b0d70",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/1077777ab2f015b4fc7a882f184ceaf5a9e22e89"
        },
        "date": 1629712734998,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.539458536834106,
            "unit": "iter/sec",
            "range": "stddev: 0.0002407513443573734",
            "extra": "mean: 282.52909014000124 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 11485783.758289821,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 87.06415000006018 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 5093086.598376054,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 196.34459000144489 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 296694.13015862467,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.370474500002274 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 105666.59339320354,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.463728960001845 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 0.3122473902025238,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.202588816999878 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 0.42292149853157907,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.3645050049999554 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 0.13016044603413937,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.682825546999993 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 7447137.056158367,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 134.27978999970946 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 6545357.626640211,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 152.78003999810608 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 7418298.018414546,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 134.80180999977165 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 8785144.531443117,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 113.82851999997001 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 194.1419981806276,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.150868999862723 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 11605753.48266084,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 86.16415999995297 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 11879994.943802288,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 84.1751200005092 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 6178592.080546516,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 161.84916999918642 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 10660383.010406857,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 93.8052600008632 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2687868.646592036,
            "unit": "iter/sec",
            "range": "stddev: 8.47022932900251e-8",
            "extra": "mean: 372.04198994913895 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 890286.0680428456,
            "unit": "iter/sec",
            "range": "stddev: 1.874229929285673e-7",
            "extra": "mean: 1.1232344702398223 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 686552.0046827313,
            "unit": "iter/sec",
            "range": "stddev: 1.5246882544531517e-7",
            "extra": "mean: 1.4565539000386707 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 691703.9422762705,
            "unit": "iter/sec",
            "range": "stddev: 1.5830352711550326e-7",
            "extra": "mean: 1.445705219937281 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 4137904.7760043815,
            "unit": "iter/sec",
            "range": "stddev: 6.864163044564494e-8",
            "extra": "mean: 241.66820024447588 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1373161.5555960864,
            "unit": "iter/sec",
            "range": "stddev: 1.1825187672012329e-7",
            "extra": "mean: 728.2464295076352 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2825801.485160779,
            "unit": "iter/sec",
            "range": "stddev: 9.687593932217716e-8",
            "extra": "mean: 353.88190049843615 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 4621254.89166507,
            "unit": "iter/sec",
            "range": "stddev: 7.848498452942643e-8",
            "extra": "mean: 216.39143986703857 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1452837.7411039646,
            "unit": "iter/sec",
            "range": "stddev: 1.0353844708151671e-7",
            "extra": "mean: 688.3081101955213 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 745948.0546664731,
            "unit": "iter/sec",
            "range": "stddev: 1.6484412126772642e-7",
            "extra": "mean: 1.3405759204601964 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 868814.7351084271,
            "unit": "iter/sec",
            "range": "stddev: 5.178113599154277e-7",
            "extra": "mean: 1.1509933701518094 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 7576406.736057927,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 131.98869000007107 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 4544136.126330891,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 220.06382999961716 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 8654375.318930957,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 115.54849000049217 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 12110340.704748813,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 82.57406000211631 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 5383249.985353421,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 185.7613900006072 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 5551937.234717935,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 180.11730999887732 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_mean",
            "value": 162672.00877222524,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.147339099993587 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_std",
            "value": 53171.03633067462,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 18.80723169999783 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_mean",
            "value": 2299603.417301392,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 434.85758999850077 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_std",
            "value": 1293147.5992329712,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 773.3069300002171 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 37416.37855644438,
            "unit": "iter/sec",
            "range": "stddev: 0.00015746684325369144",
            "extra": "mean: 26.726263700038544 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 16513.122507039185,
            "unit": "iter/sec",
            "range": "stddev: 0.0001504980480346732",
            "extra": "mean: 60.55789869988075 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 5.027414329461798,
            "unit": "iter/sec",
            "range": "stddev: 0.19241459163046712",
            "extra": "mean: 198.90940639998007 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 2235231.8177907504,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 447.3808900002041 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1727060.1764103246,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 579.0186199988057 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 7656222.150515967,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 130.6127199995899 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2689872.01319304,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 371.764900000926 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2673911.7553422046,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 373.98392000113745 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 346686.5469676356,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.884449969999423 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 69158.58750855328,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 14.459520300010809 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 60427.86140633294,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 16.548657800012734 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}