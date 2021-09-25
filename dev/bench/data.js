window.BENCHMARK_DATA = {
  "lastUpdate": 1632609271598,
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
        "date": 1632605937087,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 93123.31287213604,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.738449580000022 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_mean",
            "value": 72818.81471562777,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 13.732714600000051 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_std",
            "value": 22346.157188107583,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 44.75042360000003 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_mean",
            "value": 2340911.863825712,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 427.1839599999794 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_std",
            "value": 1360033.4557349423,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 735.2760300000227 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 130154.69366914494,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.6831651000002665 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 17556361.626642004,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 56.959409999990385 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 6533783.023127802,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 153.0506900000006 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.5309967482655824,
            "unit": "iter/sec",
            "range": "stddev: 0.0008330333241941744",
            "extra": "mean: 283.2061514900001 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 204852.84172824753,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.8815529800000235 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 23761.165368636433,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 42.08547790000026 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 22254.030055740852,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 44.93568120000049 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 2754324.171890374,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 363.0654700000946 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 2070197.7989117862,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 483.04563000002076 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 11449628.276354464,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 87.33908000010615 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 3126471.3956004605,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 319.8494000000096 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 3032023.106199337,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 329.812789999977 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 39391.37443056925,
            "unit": "iter/sec",
            "range": "stddev: 0.00012219065334423174",
            "extra": "mean: 25.38626829999515 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 7896.393505463096,
            "unit": "iter/sec",
            "range": "stddev: 0.0001205829556296918",
            "extra": "mean: 126.64009199999386 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 2.8301942047989637,
            "unit": "iter/sec",
            "range": "stddev: 0.2739476153203021",
            "extra": "mean: 353.33264350000064 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 6525053.006268228,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 153.2554599999969 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 6591858.738048273,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 151.7022800000234 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 9259084.365450576,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 108.00203999991709 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 4675286.61727706,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 213.89063000000874 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 12848695.940870162,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 77.82891000005066 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 19423649.808727015,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 51.48362999989331 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2678069.960095857,
            "unit": "iter/sec",
            "range": "stddev: 2.4378035151495223e-7",
            "extra": "mean: 373.40323998265035 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 717583.095737035,
            "unit": "iter/sec",
            "range": "stddev: 9.595221438352978e-7",
            "extra": "mean: 1.3935668300169368 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 525513.164911716,
            "unit": "iter/sec",
            "range": "stddev: 6.015620950180835e-7",
            "extra": "mean: 1.9029019000275582 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 540313.6905740405,
            "unit": "iter/sec",
            "range": "stddev: 6.666545289508023e-7",
            "extra": "mean: 1.8507767199783132 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 4268381.303655588,
            "unit": "iter/sec",
            "range": "stddev: 1.7083351819468717e-7",
            "extra": "mean: 234.28085001299337 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1338823.4018126933,
            "unit": "iter/sec",
            "range": "stddev: 3.851735530106002e-7",
            "extra": "mean: 746.924500009527 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2693315.1165018077,
            "unit": "iter/sec",
            "range": "stddev: 2.1025340580670072e-7",
            "extra": "mean: 371.2896399953536 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 5560416.2871815665,
            "unit": "iter/sec",
            "range": "stddev: 6.445141807584691e-8",
            "extra": "mean: 179.84264996584898 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1256635.9330488078,
            "unit": "iter/sec",
            "range": "stddev: 5.813126884747695e-7",
            "extra": "mean: 795.7754300196029 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 680101.3339958617,
            "unit": "iter/sec",
            "range": "stddev: 6.019379201732517e-7",
            "extra": "mean: 1.4703691200318758 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 751837.856378192,
            "unit": "iter/sec",
            "range": "stddev: 7.211778475913576e-7",
            "extra": "mean: 1.330074019971903 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 17295577.08854997,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 57.81824999999685 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 17211985.39393155,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 58.099049999924546 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 8020800.180688351,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 124.67584000006583 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 15599893.920724088,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 64.1029999999887 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 9452202.339515671,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 105.79544999998802 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 10426306.65603297,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 95.91123999996398 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 9606574.278316217,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 104.09538000004659 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 11957297.143851148,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 83.63094000003457 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 172.13854949859305,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.8092740000006415 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 2.1666270722791228,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 461.54689600000154 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 6.60038354696808,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 151.50634699999443 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 1.1831870847443593,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 845.1748780000088 msec\nrounds: 1"
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
        "date": 1632609100923,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 51489.10348888306,
            "unit": "iter/sec",
            "range": "stddev: 0.00009914103548240183",
            "extra": "mean: 19.421585000327468 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 8986.067788453107,
            "unit": "iter/sec",
            "range": "stddev: 0.0001115264407028532",
            "extra": "mean: 111.28338039970913 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 3.2452046087740443,
            "unit": "iter/sec",
            "range": "stddev: 0.21958223966511917",
            "extra": "mean: 308.14698009990025 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 1728210.5784552929,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 578.6331899980723 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1475152.8571950656,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 677.8958499944565 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 5872242.321457541,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 170.29270000421093 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2152719.380784033,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 464.52872999907413 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2128276.955912737,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 469.8636600005557 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 283371.0187031789,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.528942390003067 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 28521.19305327564,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 35.06164689997604 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 24968.633341619265,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 40.05024970001614 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 2.989170145006316,
            "unit": "iter/sec",
            "range": "stddev: 0.006494095202214233",
            "extra": "mean: 334.5410102100049 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 10288525.228328468,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 97.19566000057966 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 4114656.5505823665,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 243.03365000378108 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 222313.71666547615,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.498148000038782 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_mean",
            "value": 119265.35641284705,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.384664500044892 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_std",
            "value": 35748.26622869144,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 27.973384600045392 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_mean",
            "value": 1709045.4683601598,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 585.121940002864 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_std",
            "value": 934597.5547220288,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.069979260000764 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 95148.32370090169,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.509906649995173 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 2.41097207739951,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 414.7704609995344 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 7.318280669177276,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 136.64411700028722 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 1.655993575554561,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 603.8670769994496 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 5952533.663255168,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 167.99568999886105 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 5191586.411221777,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 192.61935000031372 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 5641476.496047414,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 177.2585600065213 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 6348891.121563852,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 157.50782000395702 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 162.24771492720123,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.163415000628447 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 9743683.632770022,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 102.630589999535 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 8948909.423341108,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 111.74545999892871 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 4537144.147177152,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 220.40296000341186 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 8895416.147576824,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 112.41745000006631 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2571358.8088688795,
            "unit": "iter/sec",
            "range": "stddev: 0.0000036601217242324978",
            "extra": "mean: 388.8994396857015 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 861100.1459611503,
            "unit": "iter/sec",
            "range": "stddev: 0.000008049092044339681",
            "extra": "mean: 1.1613051103176986 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 669236.4808935737,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019453619818911253",
            "extra": "mean: 1.4942401207190414 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 667867.5370116713,
            "unit": "iter/sec",
            "range": "stddev: 0.000001850096054996721",
            "extra": "mean: 1.4973029000248061 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3466960.290824622,
            "unit": "iter/sec",
            "range": "stddev: 7.063663771375536e-7",
            "extra": "mean: 288.4371080472192 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1145624.5922880524,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020204041195080757",
            "extra": "mean: 872.8862899170053 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2321829.2138704974,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010474836361827822",
            "extra": "mean: 430.69489953268203 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 3934550.0036435463,
            "unit": "iter/sec",
            "range": "stddev: 9.889525610057708e-7",
            "extra": "mean: 254.15867102310582 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1279421.8269591404,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014041338953408887",
            "extra": "mean: 781.6030482899805 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 679654.746460291,
            "unit": "iter/sec",
            "range": "stddev: 0.0000027059338111840303",
            "extra": "mean: 1.4713352701619442 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 807828.1516014494,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022172892686727084",
            "extra": "mean: 1.2378870407246723 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 6450079.032965194,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 155.03685999647132 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 3582609.3834719006,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 279.1261600032158 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 7265271.782913691,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 137.64110000010987 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 11897277.950084543,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 84.05284000218671 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 3815361.094061281,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 262.09838999420754 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 4109989.0613426017,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 243.3096499953535 nsec\nrounds: 1"
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
        "date": 1632609264430,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 302797.0630403029,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.302541940001902 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 29112.945918295416,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 34.348980100003246 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 26369.049332554896,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 37.92324810001446 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.1998957227199756,
            "unit": "iter/sec",
            "range": "stddev: 0.00706974195774716",
            "extra": "mean: 312.5101836599788 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 12733999.983452577,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 78.52992000152881 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 4655167.317114243,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 214.81505000338075 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 228172.9837780485,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.382639800041943 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_mean",
            "value": 123892.57230520417,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.071508899956825 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_std",
            "value": 33122.163312370096,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 30.191264699988096 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_mean",
            "value": 1876441.3297752666,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 532.9236699981266 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_std",
            "value": 944202.8696139081,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.0590944300020055 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 95413.94923485623,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.480647829999725 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 2.7292810315064573,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 366.3968599994405 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 7.553031020357181,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 132.3971790006908 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 1.8091426834649464,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 552.7480000000651 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 7803949.797281956,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 128.14024000363133 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 7112675.520445149,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 140.59406999876956 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 9271060.976605205,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 107.86251999888918 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 11718269.825901793,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 85.33682999768644 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 200.2991668371827,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.9925319999601925 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 13266477.364165056,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 75.37795999269292 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 15133838.368573599,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 66.07709000491013 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 6770986.350540925,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 147.68897000067227 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 15747751.260921393,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 63.50112999825796 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 3247611.3927071486,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011151348907396254",
            "extra": "mean: 307.91861435318424 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 999588.8252133894,
            "unit": "iter/sec",
            "range": "stddev: 0.000002974924404726534",
            "extra": "mean: 1.0004113439208595 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 647817.4624388873,
            "unit": "iter/sec",
            "range": "stddev: 0.000005129969764658087",
            "extra": "mean: 1.543644711637171 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 680280.6516396872,
            "unit": "iter/sec",
            "range": "stddev: 0.000007782745780494077",
            "extra": "mean: 1.4699815401036176 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 4261144.78534378,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010298839053539287",
            "extra": "mean: 234.678719070871 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1333659.5296894356,
            "unit": "iter/sec",
            "range": "stddev: 0.000009056657893107923",
            "extra": "mean: 749.8165594279271 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2789625.0803242894,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010859016597923341",
            "extra": "mean: 358.47111034854606 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 4799106.809236815,
            "unit": "iter/sec",
            "range": "stddev: 8.981753126314788e-7",
            "extra": "mean: 208.37210750869417 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1414925.7414556954,
            "unit": "iter/sec",
            "range": "stddev: 0.000001503829243130451",
            "extra": "mean: 706.750870876931 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 813795.4602618826,
            "unit": "iter/sec",
            "range": "stddev: 0.000002794106308564632",
            "extra": "mean: 1.2288100005844171 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 878754.9793996634,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018773411519243045",
            "extra": "mean: 1.1379736370690807 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 8016077.6867998615,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 124.74928999836266 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 4083422.0253622686,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 244.89263999385003 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 9082530.044502277,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 110.1014799951372 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 16735513.781485846,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 59.75316999865755 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 5244323.046573825,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 190.68237999817939 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 3886763.6497725123,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 257.2834599959606 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 73465.76124751488,
            "unit": "iter/sec",
            "range": "stddev: 0.00005904270986503813",
            "extra": "mean: 13.611782999578281 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 9343.014313113697,
            "unit": "iter/sec",
            "range": "stddev: 0.00014726219467518187",
            "extra": "mean: 107.03183860014177 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 3.3977317516822523,
            "unit": "iter/sec",
            "range": "stddev: 0.20817822408243225",
            "extra": "mean: 294.3139933000566 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 2105811.067774281,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 474.8764099986147 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1751994.4310531064,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 570.7780699958676 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 8492398.793408971,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 117.75236000175937 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2484883.0894566304,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 402.4334200039448 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2578604.836075269,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 387.80660999691463 nsec\nrounds: 1"
          }
        ]
      }
    ]
  }
}