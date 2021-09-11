window.BENCHMARK_DATA = {
  "lastUpdate": 1631394426569,
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
          "id": "d940c0e6226fedbe60a5fefdb06d0e90a6a08a4c",
          "message": "Add simulated order books",
          "timestamp": "2021-09-12T06:48:25+10:00",
          "tree_id": "897aa32579f258daf81b7e79aa979e1de9e25908",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/d940c0e6226fedbe60a5fefdb06d0e90a6a08a4c"
        },
        "date": 1631394407989,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 0.3136904309725594,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.1878562470000134 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 0.7665680867261861,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.3045155639999848 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 0.3018866731563281,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.3125013090000266 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 7136744.011868718,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 140.11991999950624 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 6708709.253048414,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 149.05997000028037 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 7351272.00525347,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 136.03088000081698 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 8783121.37025922,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 113.85474000007889 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 196.28499246172134,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.094632999998794 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 11722565.32870847,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 85.30555999982425 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 12018430.503595859,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 83.20553999965341 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 6172989.639382797,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 161.99605999986488 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 10678443.138446152,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 93.64661000063279 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2935924.7080043876,
            "unit": "iter/sec",
            "range": "stddev: 8.065824290389742e-8",
            "extra": "mean: 340.6081897378499 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 970006.0923288162,
            "unit": "iter/sec",
            "range": "stddev: 1.4894560969061135e-7",
            "extra": "mean: 1.0309213600908151 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 728610.095073139,
            "unit": "iter/sec",
            "range": "stddev: 2.06703301126782e-7",
            "extra": "mean: 1.372476180006288 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 737353.6657347924,
            "unit": "iter/sec",
            "range": "stddev: 1.3759720002570858e-7",
            "extra": "mean: 1.3562012999602757 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 4103201.2502193614,
            "unit": "iter/sec",
            "range": "stddev: 7.029903643582521e-8",
            "extra": "mean: 243.71215034761917 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1374840.1042554646,
            "unit": "iter/sec",
            "range": "stddev: 1.206323771479968e-7",
            "extra": "mean: 727.3573100644626 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2770767.352103046,
            "unit": "iter/sec",
            "range": "stddev: 9.249098722635247e-8",
            "extra": "mean: 360.91084992790456 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 4596095.791125983,
            "unit": "iter/sec",
            "range": "stddev: 4.7439864493030485e-8",
            "extra": "mean: 217.57597000714668 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1461058.4814715476,
            "unit": "iter/sec",
            "range": "stddev: 9.045820721749843e-8",
            "extra": "mean: 684.4352999428338 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 759715.9464118895,
            "unit": "iter/sec",
            "range": "stddev: 1.4292178457251854e-7",
            "extra": "mean: 1.3162814400868683 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 926606.9649633759,
            "unit": "iter/sec",
            "range": "stddev: 2.674926361380065e-7",
            "extra": "mean: 1.0792062199095653 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 7693154.531126875,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 129.98568999933013 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 4535911.400228779,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 220.46285999977044 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 8630398.85394002,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 115.8694999992349 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 12067809.504361967,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 82.86507999969217 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 5405013.907084102,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 185.01340000057098 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 5561539.153745883,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 179.80633999968632 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 76683.35531606502,
            "unit": "iter/sec",
            "range": "stddev: 0.00006586837432796938",
            "extra": "mean: 13.040639600058057 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 15897.281761476454,
            "unit": "iter/sec",
            "range": "stddev: 0.0001513416637589706",
            "extra": "mean: 62.903835699967196 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 5.138208817621288,
            "unit": "iter/sec",
            "range": "stddev: 0.16066251407707924",
            "extra": "mean: 194.62035029999925 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 2278763.873602103,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 438.83440999934464 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1956754.550378262,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 511.05030000144325 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 7772025.356321537,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 128.66659000110303 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2684869.36498662,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 372.4576000013258 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2681104.593642889,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 372.980600000119 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 355092.2337341712,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.816169729999274 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 75626.98685802524,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 13.222793099998853 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 64084.80727061179,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 15.604322499984846 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.4822620265449875,
            "unit": "iter/sec",
            "range": "stddev: 0.0003935411924750928",
            "extra": "mean: 287.16965936999713 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 11520320.578260934,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 86.80314000002909 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 4934088.959412288,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 202.6716600016698 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 275716.96958233137,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.626907700004267 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_mean",
            "value": 158412.50394209166,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.312633000015921 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_std",
            "value": 53579.9565869389,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 18.66369560000294 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_mean",
            "value": 2258137.497674844,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 442.84283000024516 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_std",
            "value": 1295919.0278688993,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 771.6531500000201 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 106233.53007139626,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.413223859999107 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}