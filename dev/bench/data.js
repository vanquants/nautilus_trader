window.BENCHMARK_DATA = {
  "lastUpdate": 1628492789080,
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
          "id": "c3ec081f39c282eee766b5d2e0d479446fecfbcb",
          "message": "Add Ticker data type",
          "timestamp": "2021-08-09T16:34:31+10:00",
          "tree_id": "ac7e4b2c61e1c4d9c61e18bbe6d39806dd5a8862",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/c3ec081f39c282eee766b5d2e0d479446fecfbcb"
        },
        "date": 1628492782168,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 0.23580969290285697,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.240707783000062 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 0.29591168475523294,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.3793866600001365 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 0.08890364762933252,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.248132406999957 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 5779160.923641721,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 173.0354999995143 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 5227361.746835469,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 191.30109000116136 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 5679765.398447262,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 176.06360999934623 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 6561040.045603683,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 152.41485999922588 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 169.92102240729585,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.885087000024214 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 9431526.083178401,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 106.02737999988676 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 10027155.542509422,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 99.72918000130448 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 4812745.227430494,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 207.78161999942313 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 8526913.454196675,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 117.2757300014382 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2539809.351436062,
            "unit": "iter/sec",
            "range": "stddev: 0.0000029714677412218104",
            "extra": "mean: 393.7303402062753 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 701477.6544231875,
            "unit": "iter/sec",
            "range": "stddev: 0.000007745036745028057",
            "extra": "mean: 1.425562159670335 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 554618.167620077,
            "unit": "iter/sec",
            "range": "stddev: 0.0000056762469342175276",
            "extra": "mean: 1.8030422701281168 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 535534.6177036824,
            "unit": "iter/sec",
            "range": "stddev: 0.000012710471998645548",
            "extra": "mean: 1.8672929199010468 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3533454.4076416106,
            "unit": "iter/sec",
            "range": "stddev: 0.000001721727274175627",
            "extra": "mean: 283.0091702435311 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1027160.1163329048,
            "unit": "iter/sec",
            "range": "stddev: 0.00000398439539904017",
            "extra": "mean: 973.5580501023834 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2259903.3491093246,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024189695929012666",
            "extra": "mean: 442.4967998716056 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 3737226.3490921906,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024967632298276773",
            "extra": "mean: 267.5781198649929 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1199788.1890218481,
            "unit": "iter/sec",
            "range": "stddev: 0.000004569383120477447",
            "extra": "mean: 833.4804502578663 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 635881.8379604061,
            "unit": "iter/sec",
            "range": "stddev: 0.00000798711725278596",
            "extra": "mean: 1.572619219959961 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 726150.0306261684,
            "unit": "iter/sec",
            "range": "stddev: 0.000004248589291934545",
            "extra": "mean: 1.3771258800852593 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 5912458.484168712,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 169.13438000074166 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 3560797.809566988,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 280.83594000008816 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 6727675.922990454,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 148.6397400003625 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 9904793.147260433,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 100.96122000049945 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 4043052.525671079,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 247.33787000059237 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 4354939.59677075,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 229.62430999996286 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_mean",
            "value": 120109.22733119303,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.325755000009849 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_std",
            "value": 38882.41246146828,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.71856879999359 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_mean",
            "value": 1754871.9720847912,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 569.8421400006737 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_std",
            "value": 929059.5577911951,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.0763572599989857 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 13916.900923704527,
            "unit": "iter/sec",
            "range": "stddev: 0.0005722736793324459",
            "extra": "mean: 71.85507790004522 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 10674.179660990994,
            "unit": "iter/sec",
            "range": "stddev: 0.00016248824598824095",
            "extra": "mean: 93.68401429990172 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 3.659956254724231,
            "unit": "iter/sec",
            "range": "stddev: 0.23859605829868222",
            "extra": "mean: 273.2273093999993 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 1823780.3596507283,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 548.3116400000654 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1557572.570496729,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 642.0246600009705 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 5840592.703284918,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 171.2155000018356 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 1787287.801126122,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 559.5069800006058 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 1763851.3171350223,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 566.9412100019144 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 275708.01245507156,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.627025529999628 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 47012.798994783385,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 21.270803299989893 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 39578.5960804692,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.266181699998924 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 2.8968312683712787,
            "unit": "iter/sec",
            "range": "stddev: 0.0016401929825047396",
            "extra": "mean: 345.20477976000393 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 9411462.653159862,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 106.25341000150001 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 3641782.2110162806,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 274.5908299993971 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 237208.2205459831,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.215705499996147 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 78283.81596759142,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 12.774032380000335 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}