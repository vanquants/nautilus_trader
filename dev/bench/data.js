window.BENCHMARK_DATA = {
  "lastUpdate": 1632643931332,
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
          "id": "f8537ba31f4e290abf2579238c0933fa0ef1a654",
          "message": "Improve serialization robustness\n\n- `ComponentStateChanged` config dict now converted to string.",
          "timestamp": "2021-09-26T17:02:36+10:00",
          "tree_id": "1225c597c42153ced8a8247ab3417c5b76f1ae3e",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/f8537ba31f4e290abf2579238c0933fa0ef1a654"
        },
        "date": 1632643762257,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 2.5277857559598487,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 395.6031470002017 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 7.980653427650191,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 125.30302300001495 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 1.676756636358774,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 596.3894689998597 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 6668725.969359279,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 149.95367999745213 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 6253431.570511801,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 159.91220000159956 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 7101152.076904619,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 140.82221999615285 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 7823223.316660766,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 127.82454999978656 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 194.65997089243325,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.13716299974476 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 10569277.119439323,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 94.61385000122391 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 11704067.795155028,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 85.44038000309229 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 5175959.32528481,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 193.20089999837364 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 10127909.418978076,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 98.73706000234961 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2762631.9527779426,
            "unit": "iter/sec",
            "range": "stddev: 0.0000027204345278514276",
            "extra": "mean: 361.973660296826 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 893897.4482772086,
            "unit": "iter/sec",
            "range": "stddev: 0.00000492692336681808",
            "extra": "mean: 1.1186965595743459 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 662561.0766531624,
            "unit": "iter/sec",
            "range": "stddev: 0.0000059847995162099805",
            "extra": "mean: 1.5092948186020294 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 681465.7353619246,
            "unit": "iter/sec",
            "range": "stddev: 0.000004464713447290809",
            "extra": "mean: 1.4674252102622631 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3897543.7134977574,
            "unit": "iter/sec",
            "range": "stddev: 4.850923761536763e-7",
            "extra": "mean: 256.5718497362468 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1264774.3983599276,
            "unit": "iter/sec",
            "range": "stddev: 0.000002954754487900197",
            "extra": "mean: 790.6548403389024 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2388783.270812078,
            "unit": "iter/sec",
            "range": "stddev: 0.0000027356567034037206",
            "extra": "mean: 418.6231594212586 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 4244065.337427906,
            "unit": "iter/sec",
            "range": "stddev: 0.000002197851150122129",
            "extra": "mean: 235.62313972433913 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1323214.9200387946,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018454058831520858",
            "extra": "mean: 755.7351302921234 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 730996.3641727166,
            "unit": "iter/sec",
            "range": "stddev: 0.000006815541646747192",
            "extra": "mean: 1.3679958601869657 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 794497.6022663036,
            "unit": "iter/sec",
            "range": "stddev: 0.000006046512175086418",
            "extra": "mean: 1.2586570395524177 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 5902226.431986169,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 169.42758999903162 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 3884203.051087147,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 257.4530699985189 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 7206633.7929941565,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 138.76103999791667 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 11492481.4465438,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 87.0134099977804 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 4299322.254843667,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 232.59479999978794 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 4668645.892405673,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 214.19487000002846 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 77115.34326920199,
            "unit": "iter/sec",
            "range": "stddev: 0.00005656434866906927",
            "extra": "mean: 12.967588000083197 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 8586.725513831378,
            "unit": "iter/sec",
            "range": "stddev: 0.00017764272353347106",
            "extra": "mean: 116.45882919970063 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 3.2861740724971313,
            "unit": "iter/sec",
            "range": "stddev: 0.2144503137369201",
            "extra": "mean: 304.30524309995235 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 1948876.791184109,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 513.1160699966131 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1683920.7643208834,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 593.852169999991 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 6489805.6187800905,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 154.08781999667553 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2198942.264792175,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 454.7640999999203 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2326318.080776159,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 429.86382999970374 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 309908.3046405522,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.2267609000018638 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 31100.723137823836,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 32.153593200018804 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 27761.04426855051,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 36.021699699995224 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.1942123271614022,
            "unit": "iter/sec",
            "range": "stddev: 0.002023269615588036",
            "extra": "mean: 313.0662265299907 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 10291142.59850949,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 97.17094000279758 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 4063083.598483317,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 246.11848999938957 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 214936.9948752467,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.652526199970453 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_mean",
            "value": 131658.88683318964,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.595385500007978 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_std",
            "value": 40725.191530807715,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 24.554826199982926 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_mean",
            "value": 1766557.4527906678,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 566.0727299982682 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_std",
            "value": 1045963.2658498577,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 956.0565200035853 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 97957.7851081638,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.20847908000178 usec\nrounds: 1"
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
          "id": "f8537ba31f4e290abf2579238c0933fa0ef1a654",
          "message": "Improve serialization robustness\n\n- `ComponentStateChanged` config dict now converted to string.",
          "timestamp": "2021-09-26T17:02:36+10:00",
          "tree_id": "1225c597c42153ced8a8247ab3417c5b76f1ae3e",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/f8537ba31f4e290abf2579238c0933fa0ef1a654"
        },
        "date": 1632643923888,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 2.842438007624925,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 351.81066300037855 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 8.378998526183246,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 119.34600499989756 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 1.8513353738524478,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 540.1506469997912 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 5339183.369746912,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 187.29456000073696 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 5124033.63933408,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 195.15874999797234 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 6531860.816675013,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 153.09573000195087 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 9401006.415342499,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 106.37158999998064 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 168.5163015902954,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.934144000093511 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 13482392.87069768,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 74.17081000312464 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 13361154.821016382,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 74.84382999791706 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 6147718.864387579,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 162.66195999833144 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 12140047.588740539,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 82.37200000166922 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 3160048.1953503434,
            "unit": "iter/sec",
            "range": "stddev: 8.445014446729684e-7",
            "extra": "mean: 316.4508697909696 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 922030.0154063842,
            "unit": "iter/sec",
            "range": "stddev: 0.0000034374666558168053",
            "extra": "mean: 1.0845633908775199 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 690639.2094321612,
            "unit": "iter/sec",
            "range": "stddev: 0.0000036779010906409637",
            "extra": "mean: 1.4479340100342597 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 697177.8271708112,
            "unit": "iter/sec",
            "range": "stddev: 0.000003109028223757249",
            "extra": "mean: 1.4343542795359099 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3972428.1646051607,
            "unit": "iter/sec",
            "range": "stddev: 4.3277194227382805e-7",
            "extra": "mean: 251.73520037697017 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1230481.5940411894,
            "unit": "iter/sec",
            "range": "stddev: 0.000006774265807447361",
            "extra": "mean: 812.6899295712064 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2550232.764255632,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013409909386186372",
            "extra": "mean: 392.1210698945288 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 4682661.843781251,
            "unit": "iter/sec",
            "range": "stddev: 0.000001031901684849506",
            "extra": "mean: 213.55375070015725 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1318697.7572595307,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012899660751345728",
            "extra": "mean: 758.3238801271364 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 787405.722939337,
            "unit": "iter/sec",
            "range": "stddev: 0.000003810744366012072",
            "extra": "mean: 1.2699933095063898 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 803852.6987005218,
            "unit": "iter/sec",
            "range": "stddev: 0.0000031907183125221418",
            "extra": "mean: 1.244009010129048 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 7584369.282263553,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 131.85012000121787 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 3827177.0830150386,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 261.2891899980241 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 9182181.645675074,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 108.90658000334952 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 15330712.59865772,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 65.22854000195366 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 4703203.6294752145,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 212.621030000264 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 4961676.753065876,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 201.54476999778126 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 46832.2532751015,
            "unit": "iter/sec",
            "range": "stddev: 0.00011616162070040748",
            "extra": "mean: 21.35280560014507 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 9055.372918112309,
            "unit": "iter/sec",
            "range": "stddev: 0.00013287926347822733",
            "extra": "mean: 110.4316750997441 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 3.170007251798242,
            "unit": "iter/sec",
            "range": "stddev: 0.2535775668535467",
            "extra": "mean: 315.4566915999112 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 2266587.85891572,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 441.1918100004186 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1810916.651069517,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 552.2065299965107 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 7518669.231660641,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 133.00225999955728 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2514371.266134605,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 397.7137399988351 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2611038.389339228,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 382.989390000148 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 311971.350897183,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.205422539999745 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 31417.543969379803,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 31.829349899999215 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 28828.139031181472,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 34.68833000001723 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.1511952984238847,
            "unit": "iter/sec",
            "range": "stddev: 0.008746976878777195",
            "extra": "mean: 317.33989972000927 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 14023316.006501606,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 71.30981000045722 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 5033395.572961363,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 198.67303999944852 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 236344.19211128994,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.231117300014375 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_mean",
            "value": 115216.26536599328,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.679330099994331 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_std",
            "value": 35107.2778707562,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 28.484122399959233 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_mean",
            "value": 1951886.0479563877,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 512.3249899997973 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_std",
            "value": 1072983.6619804325,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 931.9806399980735 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 98382.76211855527,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.164382240000123 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}