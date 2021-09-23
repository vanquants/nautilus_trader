window.BENCHMARK_DATA = {
  "lastUpdate": 1632377059534,
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
          "id": "039157f9f7e228c6018f6025f2a782bbf9c49607",
          "message": "Fix locked balance calculation for `CASH` accounts\n\n- Add tests.",
          "timestamp": "2021-09-23T15:44:28+10:00",
          "tree_id": "7246f05ca971bd4fecb6da7febdc15dbf1fafaf8",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/039157f9f7e228c6018f6025f2a782bbf9c49607"
        },
        "date": 1632377053299,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2974129.0316628194,
            "unit": "iter/sec",
            "range": "stddev: 0.000002663208388767839",
            "extra": "mean: 336.23289015167757 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 935095.2364064832,
            "unit": "iter/sec",
            "range": "stddev: 0.0000027513956777415425",
            "extra": "mean: 1.0694097895770938 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 694830.9489525283,
            "unit": "iter/sec",
            "range": "stddev: 0.000004204630608097208",
            "extra": "mean: 1.4391989900673252 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 732632.5444024119,
            "unit": "iter/sec",
            "range": "stddev: 0.000005206339827221802",
            "extra": "mean: 1.3649407300295024 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3637663.669121758,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012922853953139974",
            "extra": "mean: 274.9017201585957 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1120297.3129608985,
            "unit": "iter/sec",
            "range": "stddev: 0.00003102354491403807",
            "extra": "mean: 892.620189686113 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2371491.709338408,
            "unit": "iter/sec",
            "range": "stddev: 0.000001150143396436252",
            "extra": "mean: 421.67552012188025 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 4068589.084894332,
            "unit": "iter/sec",
            "range": "stddev: 7.240677954037306e-7",
            "extra": "mean: 245.78545022222897 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1062335.7022611278,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014850810378484269",
            "extra": "mean: 941.3220301939873 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 591923.2265407677,
            "unit": "iter/sec",
            "range": "stddev: 0.00002792192537569237",
            "extra": "mean: 1.689408279928557 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 847207.0908799582,
            "unit": "iter/sec",
            "range": "stddev: 0.000003146783802963941",
            "extra": "mean: 1.180348949819745 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 7201810.650325534,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 138.85397000194644 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 4525428.495871449,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 220.97354999914387 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 7379804.206350479,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 135.50495000117735 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 11621474.625637678,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 86.04760000025635 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 4631398.352092225,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 215.91750999959913 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 4571250.318743571,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 218.75853000210554 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 45651.83838188324,
            "unit": "iter/sec",
            "range": "stddev: 0.00011176436921526333",
            "extra": "mean: 21.904922900034762 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 12731.566765275198,
            "unit": "iter/sec",
            "range": "stddev: 0.0000977261429766687",
            "extra": "mean: 78.54492840012881 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 3.927661143023476,
            "unit": "iter/sec",
            "range": "stddev: 0.1984149421416648",
            "extra": "mean: 254.60444870002448 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 1832201.222304599,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 545.7915800002411 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1688208.0038358644,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 592.3440700007632 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 6721761.811424225,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 148.77051999974356 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2373919.305874714,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 421.2443100004748 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2265418.620362754,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 441.41952000018136 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 316418.212660204,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.1603743400000894 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 50535.56965020824,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 19.788042499999392 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 41638.79331144749,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 24.016065799992248 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.1838430940865914,
            "unit": "iter/sec",
            "range": "stddev: 0.006916966620152776",
            "extra": "mean: 314.0858297500017 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 4277463.852344121,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 233.78338999918924 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 4730117.024046797,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 211.41125999974975 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 264953.1405207026,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.7742522999906214 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_mean",
            "value": 137372.57989193616,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.2794730999930835 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_std",
            "value": 37055.93583878475,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 26.98622980001346 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_mean",
            "value": 1629034.2646642309,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 613.8606300009997 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_std",
            "value": 1031402.3439265869,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 969.5537400011746 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 93249.00080198758,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.723975500000051 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 3.1581930630832478,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 316.636754000001 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 3.0778852522628153,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 324.8984020001444 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 1.7718837678623964,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 564.3711049999638 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 5563806.99037052,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 179.73305000168693 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 6275181.912756879,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 159.35793000153353 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 7356630.31017613,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 135.93180000043503 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 8152303.286575565,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 122.66471999964777 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 183.9509424922178,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.436231999965457 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 11091943.001257395,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 90.15552999926513 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 11033444.245069241,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 90.63353000101415 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 5066493.676286702,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 197.37516000077449 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 8417033.719491342,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 118.80669999982274 nsec\nrounds: 1"
          }
        ]
      }
    ]
  }
}