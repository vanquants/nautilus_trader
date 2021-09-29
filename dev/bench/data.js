window.BENCHMARK_DATA = {
  "lastUpdate": 1632907113861,
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
      }
    ]
  }
}