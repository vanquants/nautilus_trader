window.BENCHMARK_DATA = {
  "lastUpdate": 1632604871153,
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
          "id": "9682b45fac12203422ec6d64c84c431d55e2e51b",
          "message": "Update workflows",
          "timestamp": "2021-09-26T06:57:12+10:00",
          "tree_id": "0adc11db72475f22953af50c028e330e6fe8fa17",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/9682b45fac12203422ec6d64c84c431d55e2e51b"
        },
        "date": 1632604861919,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 109593.60499396143,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.124619999999997 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 2844197.69449334,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 351.59300000000115 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 2247933.5870501124,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 444.8529999999984 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 9300941.255255152,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 107.51599999999861 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2745321.97136078,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 364.2560000000028 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2696944.3620377886,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 370.7900000000031 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 360836.0137435223,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.771341999999999 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 54996.09252762587,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 18.183110000000013 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 47479.705986668676,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 21.061629999999987 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.891861211403293,
            "unit": "iter/sec",
            "range": "stddev: 0.002832131779949523",
            "extra": "mean: 256.94647000000003 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 16921905.406565275,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 59.09499999994239 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 7052186.177717039,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 141.79999999996085 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 30981.967255779025,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 32.276839999999396 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_mean",
            "value": 149843.26394590476,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.673640000000347 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_std",
            "value": 47053.50925071949,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 21.252400000000193 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_mean",
            "value": 1597288.443139018,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 626.0609999999645 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_std",
            "value": 869421.5738269583,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.1501899999999665 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 11652023.95656218,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 85.82199999999318 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 12145798.16112534,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 82.33300000000554 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 11456459.72481725,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 87.28699999998923 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 11620070.185226623,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 86.05799999997998 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 188.91449729854634,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.2933999999993375 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 17864799.199652098,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 55.97600000001535 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 15261583.541915774,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 65.52399999996794 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 8884545.333394775,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 112.55499999997198 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 15324261.370610755,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 65.25599999996246 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 1674430.4424661086,
            "unit": "iter/sec",
            "range": "stddev: 2.0268663323078277e-7",
            "extra": "mean: 597.218000006734 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 845586.587645015,
            "unit": "iter/sec",
            "range": "stddev: 3.780234803634345e-7",
            "extra": "mean: 1.1826109999982748 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 631181.6351334169,
            "unit": "iter/sec",
            "range": "stddev: 5.85755309141629e-7",
            "extra": "mean: 1.5843300000143756 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 662153.4288973626,
            "unit": "iter/sec",
            "range": "stddev: 4.5172393160450803e-7",
            "extra": "mean: 1.5102239999953326 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 4683182.690866885,
            "unit": "iter/sec",
            "range": "stddev: 9.183040579638887e-8",
            "extra": "mean: 213.5300000040985 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1558115.3659621933,
            "unit": "iter/sec",
            "range": "stddev: 7.272196813051378e-7",
            "extra": "mean: 641.8010000064811 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2940640.2364938823,
            "unit": "iter/sec",
            "range": "stddev: 8.54289713071374e-8",
            "extra": "mean: 340.06199996511555 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 5417587.656482751,
            "unit": "iter/sec",
            "range": "stddev: 8.430075924368227e-8",
            "extra": "mean: 184.5840000029142 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1653174.0114163333,
            "unit": "iter/sec",
            "range": "stddev: 1.774441722091343e-7",
            "extra": "mean: 604.8970000098564 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 986956.3844236812,
            "unit": "iter/sec",
            "range": "stddev: 2.159643575812158e-7",
            "extra": "mean: 1.0132159999997725 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 737555.5932567623,
            "unit": "iter/sec",
            "range": "stddev: 7.676736965219658e-7",
            "extra": "mean: 1.3558299999927925 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 9825692.220020436,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 101.7739999999634 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 5565945.320153538,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 179.66399999998828 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 14087483.271117788,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 70.98499999997898 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 17758519.649794992,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 56.311000000022204 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 7215059.271711957,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 138.59899999999925 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 7150876.3398969555,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 139.84299999997063 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 40771.64413693537,
            "unit": "iter/sec",
            "range": "stddev: 0.0001065596958542633",
            "extra": "mean: 24.526850000000167 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 11214.199509131906,
            "unit": "iter/sec",
            "range": "stddev: 0.00017519935110635128",
            "extra": "mean: 89.17266000000126 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 2.353943236259541,
            "unit": "iter/sec",
            "range": "stddev: 0.37692172908825666",
            "extra": "mean: 424.81907999999964 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 2.871474798070648,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 348.253100000008 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 9.336632276738651,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 107.10499999999001 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 1.9241696294068333,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 519.7047000000055 msec\nrounds: 1"
          }
        ]
      }
    ]
  }
}