window.BENCHMARK_DATA = {
  "lastUpdate": 1630615796859,
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
          "id": "10324da85fce4f18c2fb1653edcba23a292348a8",
          "message": "Skip Redis tests and CI for Windows\n\nThe Memurai Redis stand in for Windows often fails CI due not being available from chocolatey.",
          "timestamp": "2021-09-03T06:32:09+10:00",
          "tree_id": "0588d16cb635a5f2edf5893549b380954c8c101b",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/10324da85fce4f18c2fb1653edcba23a292348a8"
        },
        "date": 1630615786707,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 352065.4831659674,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.84038068999962 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 73825.23109415908,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 13.545504500007155 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 63639.85341450526,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 15.713424000000488 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.542306435628537,
            "unit": "iter/sec",
            "range": "stddev: 0.0006281851806386119",
            "extra": "mean: 282.30194597000263 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 11544920.477347746,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 86.61818000064159 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 4866374.230020527,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 205.49179999989065 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 304422.8345486348,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.284904700012703 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 106625.90884192064,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.378583600000638 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 0.31814235933204765,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.143246948000069 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 0.7787960513650192,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.2840332180001042 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 0.30330870457554177,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.2969709899998634 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 7064096.004400296,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 141.5609300011056 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 6815331.770363969,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 146.72799999971176 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 7489132.145884097,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 133.5268200000428 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 8853825.379389528,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 112.9455299997062 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 195.4434318330822,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.116569999927378 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 11902899.951252067,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 84.01313999911508 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 11845092.252345443,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 84.42315000138478 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 6178285.5504473895,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 161.85720000066794 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 10528942.483610595,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 94.97629999941637 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2843193.4156199535,
            "unit": "iter/sec",
            "range": "stddev: 9.400296721476541e-8",
            "extra": "mean: 351.7171904331917 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 925916.443946658,
            "unit": "iter/sec",
            "range": "stddev: 1.6633707354680293e-7",
            "extra": "mean: 1.0800110598938772 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 697060.6438106728,
            "unit": "iter/sec",
            "range": "stddev: 1.350121525892168e-7",
            "extra": "mean: 1.4345954098530456 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 720126.6149584902,
            "unit": "iter/sec",
            "range": "stddev: 1.2698949145966366e-7",
            "extra": "mean: 1.388644690014189 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 4389321.973056945,
            "unit": "iter/sec",
            "range": "stddev: 6.200695853888979e-8",
            "extra": "mean: 227.8256200247597 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1344683.8816524253,
            "unit": "iter/sec",
            "range": "stddev: 1.166197777327632e-7",
            "extra": "mean: 743.6692100236542 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2897636.1698788498,
            "unit": "iter/sec",
            "range": "stddev: 7.211053258830213e-8",
            "extra": "mean: 345.1088892370535 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 4939156.260272713,
            "unit": "iter/sec",
            "range": "stddev: 6.681978254224569e-8",
            "extra": "mean: 202.4637300996801 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1453008.3304780098,
            "unit": "iter/sec",
            "range": "stddev: 9.628443038614995e-8",
            "extra": "mean: 688.2272998882399 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 807520.2881333488,
            "unit": "iter/sec",
            "range": "stddev: 1.2486144132597696e-7",
            "extra": "mean: 1.2383589795763328 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 922345.2791565214,
            "unit": "iter/sec",
            "range": "stddev: 2.603895490182472e-7",
            "extra": "mean: 1.084192679898024 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 7560533.410732132,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 132.26580000036847 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 4176267.5577712534,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 239.44825999933528 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 8595231.468696197,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 116.34358000037537 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 11865613.854250843,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 84.27714000163178 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 5364388.4216069775,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 186.41454000089652 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 5489243.059704295,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 182.17448000086733 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_mean",
            "value": 161189.0750427958,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.203894400005083 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_std",
            "value": 54901.502367472836,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 18.214437800020278 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_mean",
            "value": 2320563.258244831,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 430.92986000146993 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_std",
            "value": 1294204.3252521218,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 772.675519999666 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 78111.48610325485,
            "unit": "iter/sec",
            "range": "stddev: 0.00006354003236979782",
            "extra": "mean: 12.80221449990222 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 16469.82315583195,
            "unit": "iter/sec",
            "range": "stddev: 0.00013927922190636106",
            "extra": "mean: 60.71710609994625 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 5.254529440241307,
            "unit": "iter/sec",
            "range": "stddev: 0.15358863754130622",
            "extra": "mean: 190.31199869993998 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 2296501.702205749,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 435.44492000137325 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1976957.0629468036,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 505.82787999928763 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 7696820.9896962065,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 129.92377000045963 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2575671.423460239,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 388.24827999860645 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2527931.2386527155,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 395.58037999995577 nsec\nrounds: 1"
          }
        ]
      }
    ]
  }
}