window.BENCHMARK_DATA = {
  "lastUpdate": 1632605938997,
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
          "id": "9682b45fac12203422ec6d64c84c431d55e2e51b",
          "message": "Update workflows",
          "timestamp": "2021-09-26T06:57:12+10:00",
          "tree_id": "0adc11db72475f22953af50c028e330e6fe8fa17",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/9682b45fac12203422ec6d64c84c431d55e2e51b"
        },
        "date": 1632605033934,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 95522.50667869486,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.468736999999999 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.167951522333128,
            "unit": "iter/sec",
            "range": "stddev: 0.009850178201261309",
            "extra": "mean: 315.6613959999999 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 10576190.87909535,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 94.55199999997888 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 5305349.383783153,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 188.48900000001834 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 26239.72190093134,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 38.11016000000009 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_mean",
            "value": 134739.83758460253,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.421709999999848 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_std",
            "value": 42084.03508461883,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 23.76197999999974 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_mean",
            "value": 1433961.0736926456,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 697.3690000000232 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_std",
            "value": 799105.6409666261,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.2513990000000064 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 4766217.053524838,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 209.80999999999028 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 4809218.3096570615,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 207.93399999995188 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 34063.36808364833,
            "unit": "iter/sec",
            "range": "stddev: 0.0001272045571422126",
            "extra": "mean: 29.357049999997997 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 9145.734443174715,
            "unit": "iter/sec",
            "range": "stddev: 0.00024326573262072675",
            "extra": "mean: 109.34058999999507 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 2.051036936590918,
            "unit": "iter/sec",
            "range": "stddev: 0.43938925510161086",
            "extra": "mean: 487.55826000000087 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 2230067.1027195137,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 448.416999999921 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1512529.796836916,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 661.1440000000357 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 7312721.209822066,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 136.74799999989773 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2088445.6743068951,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 478.82500000000044 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2115448.4856565883,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 472.71299999991356 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 295424.9895271847,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.3849539999999934 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 49592.94113912951,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 20.16416000000021 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 43276.01137120286,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 23.107490000001008 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 8054642.696045708,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 124.15200000006621 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 7922423.627837529,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 126.22399999997926 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 7949947.132847813,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 125.78700000005938 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 7931157.552445463,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 126.08499999998912 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 159.268638412518,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.278699999995752 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 10707669.903962335,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 93.39099999991163 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 10702169.329734117,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 93.43899999990413 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 5374437.027721851,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 186.06599999998252 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 9839420.654917821,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 101.63199999993822 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 1391955.0565885135,
            "unit": "iter/sec",
            "range": "stddev: 6.837161686741677e-7",
            "extra": "mean: 718.4139999827721 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 730870.7374638914,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021581647312882097",
            "extra": "mean: 1.368231000012372 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 600455.265174448,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026290169769299845",
            "extra": "mean: 1.665403000021115 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 612823.9540688557,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014080594526160396",
            "extra": "mean: 1.6317899999836527 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3791612.9521860266,
            "unit": "iter/sec",
            "range": "stddev: 5.392723992047908e-7",
            "extra": "mean: 263.7399999974832 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1336969.89149534,
            "unit": "iter/sec",
            "range": "stddev: 0.000003439719051781069",
            "extra": "mean: 747.9599999679465 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2470123.852071254,
            "unit": "iter/sec",
            "range": "stddev: 8.209438064032364e-7",
            "extra": "mean: 404.83799998995096 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 4554273.274353124,
            "unit": "iter/sec",
            "range": "stddev: 3.8433414582875244e-7",
            "extra": "mean: 219.57400001255678 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1414095.1346455796,
            "unit": "iter/sec",
            "range": "stddev: 0.000001175471082454218",
            "extra": "mean: 707.1660000093516 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 728103.0294964146,
            "unit": "iter/sec",
            "range": "stddev: 0.000010958496768580831",
            "extra": "mean: 1.373431999989947 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 700399.78820346,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022600809905708465",
            "extra": "mean: 1.4277559999911205 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 8343136.518743478,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 119.85899999999107 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 4467796.125527617,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 223.82399999997915 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 7800312.012477494,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 128.20000000004939 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 11402378.536172455,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 87.70099999992453 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 2.5370543124976304,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 394.1578999999962 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 7.705917528187511,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 129.7704000000124 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 1.717182453898361,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 582.3493000000042 msec\nrounds: 1"
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
          "id": "9682b45fac12203422ec6d64c84c431d55e2e51b",
          "message": "Update workflows",
          "timestamp": "2021-09-26T06:57:12+10:00",
          "tree_id": "0adc11db72475f22953af50c028e330e6fe8fa17",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/9682b45fac12203422ec6d64c84c431d55e2e51b"
        },
        "date": 1632605932752,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 90339.46249125588,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.06935963999998 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_mean",
            "value": 73303.71394146353,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 13.641873599999954 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_std",
            "value": 22484.699763276807,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 44.474687700000004 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_mean",
            "value": 1716888.281461477,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 582.4490799999893 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_std",
            "value": 1110723.369924056,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 900.3141799999881 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 109168.60498253968,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.160142700000051 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 12557510.257599581,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 79.63362000001695 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 5856062.664555007,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 170.76320000001033 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.681472298082921,
            "unit": "iter/sec",
            "range": "stddev: 0.0008787194748967287",
            "extra": "mean: 271.63045625000007 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 224262.9749267202,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.459050809999994 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 23163.39384357654,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 43.17156660000023 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 22079.785038278253,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 45.290296000000296 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 1936806.684942511,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 516.3137899999981 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1635139.6748573778,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 611.5685500000012 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 8437538.338068362,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 118.51797999995028 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2279281.2942872318,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 438.73478999998383 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2277125.9555329764,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 439.15006000005974 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 48882.51706364953,
            "unit": "iter/sec",
            "range": "stddev: 0.00008815809474456734",
            "extra": "mean: 20.45721170000121 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 7019.176539814944,
            "unit": "iter/sec",
            "range": "stddev: 0.00017450338656836999",
            "extra": "mean: 142.46685410000595 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 2.726630566114324,
            "unit": "iter/sec",
            "range": "stddev: 0.2635401272190839",
            "extra": "mean: 366.7530220000003 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 6184591.757574048,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 161.69215999994435 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 6257459.674115,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 159.80925999997453 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 7838888.884529441,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 127.56910000007339 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 4668948.662015137,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 214.18097999998054 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 9883844.076036029,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 101.17520999997964 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 13749507.08017709,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 72.72987999996872 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2275618.911863914,
            "unit": "iter/sec",
            "range": "stddev: 3.5014133235265883e-7",
            "extra": "mean: 439.4408900306246 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 592415.6613070081,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013162060481588321",
            "extra": "mean: 1.6880039899582755 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 486094.83672997006,
            "unit": "iter/sec",
            "range": "stddev: 8.186697862735882e-7",
            "extra": "mean: 2.057211729972579 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 478983.85988092335,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016490316461311262",
            "extra": "mean: 2.0877530200048966 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3812732.023328624,
            "unit": "iter/sec",
            "range": "stddev: 2.3192862327448676e-7",
            "extra": "mean: 262.27912003292886 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1084631.6844324106,
            "unit": "iter/sec",
            "range": "stddev: 0.000001015253546052106",
            "extra": "mean: 921.9719600237397 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2115589.998570788,
            "unit": "iter/sec",
            "range": "stddev: 2.8958262212288443e-7",
            "extra": "mean: 472.6813799817364 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 4094371.328526244,
            "unit": "iter/sec",
            "range": "stddev: 2.3760514769303944e-7",
            "extra": "mean: 244.23773999998843 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1052805.557825668,
            "unit": "iter/sec",
            "range": "stddev: 6.393073062310009e-7",
            "extra": "mean: 949.84301000963 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 582466.2027931502,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011204116340397614",
            "extra": "mean: 1.7168378099958659 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 634024.8724895155,
            "unit": "iter/sec",
            "range": "stddev: 8.308730501747205e-7",
            "extra": "mean: 1.5772251900362733 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 12440764.853242107,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 80.38091000003078 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 12036950.549307495,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 83.0775200000744 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 5362638.220660574,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 186.4753799999619 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 11504695.699071284,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 86.92103000001339 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 7668231.803899283,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 130.40816000000177 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 8222461.660304496,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 121.61808000001885 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 7208535.655905965,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 138.72442999996792 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 8823656.576226866,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 113.33170000000337 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 171.02863806151703,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.8469739999935655 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 2.2870877459441417,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 437.2372690000077 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 7.14063064321848,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 140.04365299999222 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 1.2430223407037955,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 804.490770000001 msec\nrounds: 1"
          }
        ]
      }
    ]
  }
}