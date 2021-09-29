window.BENCHMARK_DATA = {
  "lastUpdate": 1632907325446,
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
          "id": "941447210dd15b9630065c093c6a4bca62b035a7",
          "message": "Improve backtest engine and node flows\n\n- Add optional `run_config_id` for backtest runs.\n- Add `BacktestResult` object.",
          "timestamp": "2021-09-29T18:29:43+10:00",
          "tree_id": "c3b1ca91c76b1bb54f25cafcc3ffb2fa12f35c2e",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/941447210dd15b9630065c093c6a4bca62b035a7"
        },
        "date": 1632907105077,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 89812.14835364193,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.13435118000325 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 2.4951829121537332,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 400.7722219998868 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 7.995166697846968,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 125.07556600030512 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 1.2326539032127652,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 811.2577239999155 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 5900222.981227245,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 169.48511999999027 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 6027476.856103793,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 165.9068999970259 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 6038687.819766661,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 165.59888999836403 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 6926713.021196303,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 144.36861999911343 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 158.53697011384733,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.307676999767864 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 9936406.99517455,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 100.64000000056694 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 9978050.285026392,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 100.21997999956511 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 4928800.762241435,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 202.88910999624932 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 7361162.946029781,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 135.84809999883873 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2521847.7138779517,
            "unit": "iter/sec",
            "range": "stddev: 5.525102256613506e-8",
            "extra": "mean: 396.5346497716382 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 824309.4055132103,
            "unit": "iter/sec",
            "range": "stddev: 2.375355049121123e-7",
            "extra": "mean: 1.2131367097254042 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 662026.5147196472,
            "unit": "iter/sec",
            "range": "stddev: 1.822504362861242e-7",
            "extra": "mean: 1.51051351836486 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 664190.2332652472,
            "unit": "iter/sec",
            "range": "stddev: 1.740942553399726e-7",
            "extra": "mean: 1.5055927502635313 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3500435.122688217,
            "unit": "iter/sec",
            "range": "stddev: 1.0149919280537176e-7",
            "extra": "mean: 285.6787699101915 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1111928.5145001241,
            "unit": "iter/sec",
            "range": "stddev: 1.1593727576475023e-7",
            "extra": "mean: 899.3383899769469 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2213955.9517882797,
            "unit": "iter/sec",
            "range": "stddev: 9.48490494014727e-8",
            "extra": "mean: 451.68016969455493 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 3875934.1410481213,
            "unit": "iter/sec",
            "range": "stddev: 1.189835023592763e-7",
            "extra": "mean: 258.0023198561321 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1266050.625961414,
            "unit": "iter/sec",
            "range": "stddev: 1.256132079748926e-7",
            "extra": "mean: 789.857829927314 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 673881.9248926685,
            "unit": "iter/sec",
            "range": "stddev: 1.7043427690763064e-7",
            "extra": "mean: 1.4839394900809566 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 778629.382886191,
            "unit": "iter/sec",
            "range": "stddev: 3.1345728626316324e-7",
            "extra": "mean: 1.2843080700258724 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 6401388.025807572,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 156.21611999904417 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 3599190.9306586683,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 277.84022000105324 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 7086406.826144568,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 141.11523999872588 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 10107668.91090702,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 98.93477999867173 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 4396545.739488254,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 227.45129000213637 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 4542690.524703877,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 220.13386000253377 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 81441.60369252718,
            "unit": "iter/sec",
            "range": "stddev: 0.00005381102069037835",
            "extra": "mean: 12.27873659972829 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 11814.66892182923,
            "unit": "iter/sec",
            "range": "stddev: 0.00016684111668114569",
            "extra": "mean: 84.64054360019873 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 3.9216722534114545,
            "unit": "iter/sec",
            "range": "stddev: 0.19620499103988076",
            "extra": "mean: 254.9932618999719 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 1895619.9615696582,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 527.5318999974843 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1614654.7616251125,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 619.3274399993243 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 6447895.171647161,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 155.08937000049627 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2151166.330119326,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 464.86409999943135 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2154252.8635132234,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 464.1980600035822 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 241469.99048625235,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.141301360000398 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 38264.60833020625,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 26.13380990001133 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 34452.38729683315,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 29.025564800031134 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 2.8596336021772224,
            "unit": "iter/sec",
            "range": "stddev: 0.000246578544657817",
            "extra": "mean: 349.69514949000313 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 9690318.732231833,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 103.1957799978045 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 4091367.435596283,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 244.41706000288832 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 223955.47335126527,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.465173300013703 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_mean",
            "value": 140281.01626179044,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.128548300033799 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_std",
            "value": 46811.25586937918,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 21.36238350003623 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_mean",
            "value": 1933252.5981205862,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 517.2629800017603 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_std",
            "value": 1064971.0169700785,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 938.9926900030332 nsec\nrounds: 1"
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
          "id": "941447210dd15b9630065c093c6a4bca62b035a7",
          "message": "Improve backtest engine and node flows\n\n- Add optional `run_config_id` for backtest runs.\n- Add `BacktestResult` object.",
          "timestamp": "2021-09-29T18:29:43+10:00",
          "tree_id": "c3b1ca91c76b1bb54f25cafcc3ffb2fa12f35c2e",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/941447210dd15b9630065c093c6a4bca62b035a7"
        },
        "date": 1632907315793,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 2.756878395746316,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 362.7290929998708 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 8.764504674585423,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 114.09657900003367 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 0.9311843619550686,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.0739011959999516 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 7099752.5169192385,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 140.8499799981655 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 7218236.672782429,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 138.5379900011685 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 7536477.682512039,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 132.68797999899107 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 9973571.034012144,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 100.26499000105105 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 169.9784416436381,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.883098999674985 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 13404286.691206146,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 74.60299999820563 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 13219993.91878054,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 75.64300000012736 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 6420092.7332497025,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 155.76098999645183 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 12358191.299786184,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 80.91798999885214 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2761813.2699627453,
            "unit": "iter/sec",
            "range": "stddev: 0.00000257051793503862",
            "extra": "mean: 362.0809599533459 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 894262.883415759,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020217546766990383",
            "extra": "mean: 1.1182394109664529 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 647794.0211223192,
            "unit": "iter/sec",
            "range": "stddev: 0.000002000690163273276",
            "extra": "mean: 1.5437005705416595 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 722242.948437044,
            "unit": "iter/sec",
            "range": "stddev: 0.000002105486678965246",
            "extra": "mean: 1.3845756502905715 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 4139790.2749805055,
            "unit": "iter/sec",
            "range": "stddev: 7.702548778300573e-7",
            "extra": "mean: 241.55813062407105 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1317266.4252382398,
            "unit": "iter/sec",
            "range": "stddev: 0.0000037198042290749365",
            "extra": "mean: 759.1478692847886 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2406274.696536639,
            "unit": "iter/sec",
            "range": "stddev: 0.000003895611436769349",
            "extra": "mean: 415.58015027931106 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 4511775.345219812,
            "unit": "iter/sec",
            "range": "stddev: 4.894395286699051e-7",
            "extra": "mean: 221.6422413539476 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1323732.372359431,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013923375026701344",
            "extra": "mean: 755.4397103831434 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 796439.3868009297,
            "unit": "iter/sec",
            "range": "stddev: 0.000003487084947172893",
            "extra": "mean: 1.2555883304776216 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 774116.3361350105,
            "unit": "iter/sec",
            "range": "stddev: 0.0000068372045111886",
            "extra": "mean: 1.2917955006514603 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 7536326.033633676,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 132.6906499980396 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 3917370.588786807,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 255.27326999963407 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 9213571.885987006,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 108.53554000277654 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 15762103.206693161,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 63.443310000366175 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 5325382.749850506,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 187.77993000185234 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 5422231.321885498,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 184.42592000155855 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 69163.84384914972,
            "unit": "iter/sec",
            "range": "stddev: 0.00006348538668373728",
            "extra": "mean: 14.45842139978595 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 7177.638167625024,
            "unit": "iter/sec",
            "range": "stddev: 0.0002057764361223486",
            "extra": "mean: 139.32159530004355 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 3.1635470336731752,
            "unit": "iter/sec",
            "range": "stddev: 0.21953452281408792",
            "extra": "mean: 316.10087959998054 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 2219371.46423738,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 450.5780199997389 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1912501.7080945908,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 522.8753500023231 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 8014711.162582005,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 124.77056000079756 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2421671.929558903,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 412.93785000107164 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2522274.5851785047,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 396.46754000386863 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 243017.3768505225,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.114932080001381 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 24701.283610353534,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 40.48372610000115 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 21205.375775663073,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 47.15785329999562 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.145349789276105,
            "unit": "iter/sec",
            "range": "stddev: 0.002583431080915141",
            "extra": "mean: 317.929663470004 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 12262048.811578447,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 81.55244000136008 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 4733411.428348673,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 211.26411999830452 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 204981.63169814047,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.878485900007945 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_mean",
            "value": 114342.73406699173,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.745636599996942 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_std",
            "value": 34282.03682223642,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 29.16979540000284 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_mean",
            "value": 2056041.1433566986,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 486.3715900000898 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_std",
            "value": 1116636.2645719484,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 895.5467699979636 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 93267.54650979638,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.721843100000115 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}