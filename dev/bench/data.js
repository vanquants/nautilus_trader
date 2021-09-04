window.BENCHMARK_DATA = {
  "lastUpdate": 1630732200185,
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
          "id": "b8fdbb9d5ec65ddf33c89b1a2a82240afb30aad2",
          "message": "Update docs and release notes",
          "timestamp": "2021-09-04T14:50:36+10:00",
          "tree_id": "a5afd5dac851ec66a91ea47e349cd2a3463cb5ab",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/b8fdbb9d5ec65ddf33c89b1a2a82240afb30aad2"
        },
        "date": 1630732189122,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 0.28211545381196174,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.5446480739992694 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 0.6865717950545349,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.456511915000192 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 0.2600594739633328,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.845274254999822 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 6928719.1389624085,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 144.32682000006025 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 7118715.03750737,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 140.47479000510066 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 7466712.462344758,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 133.92775000284018 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 8479127.69454562,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 117.93665999903169 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 199.07517635961673,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.023228000027302 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 11074011.940745618,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 90.3015099993354 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 11090224.521679116,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 90.16949999931967 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 5402892.622237496,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 185.0860400008969 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 10727597.13006551,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 93.21751999777916 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 3070303.593578346,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011982684374774773",
            "extra": "mean: 325.7006903459114 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 989904.5176766325,
            "unit": "iter/sec",
            "range": "stddev: 0.000002461507465010046",
            "extra": "mean: 1.0101984404991526 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 762006.8272245296,
            "unit": "iter/sec",
            "range": "stddev: 0.000005180134121170099",
            "extra": "mean: 1.3123242000892787 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 764152.8966896619,
            "unit": "iter/sec",
            "range": "stddev: 0.000005072533116139875",
            "extra": "mean: 1.308638630216592 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 4109368.5927705937,
            "unit": "iter/sec",
            "range": "stddev: 8.129227205530028e-7",
            "extra": "mean: 243.34638702384837 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1331357.4023263527,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012061258585247343",
            "extra": "mean: 751.1131107639812 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2437060.5859601586,
            "unit": "iter/sec",
            "range": "stddev: 0.000012695818861941592",
            "extra": "mean: 410.33038150999346 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 4441814.693513574,
            "unit": "iter/sec",
            "range": "stddev: 9.050536341657882e-7",
            "extra": "mean: 225.1332099604042 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1181621.1486575347,
            "unit": "iter/sec",
            "range": "stddev: 0.000001949911663853356",
            "extra": "mean: 846.2949407567066 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 680660.7701759038,
            "unit": "iter/sec",
            "range": "stddev: 0.000008330691794792338",
            "extra": "mean: 1.4691606212909392 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 829104.4518547191,
            "unit": "iter/sec",
            "range": "stddev: 0.00001245032880898943",
            "extra": "mean: 1.2061206495309307 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 6360032.942507453,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 157.23188999800186 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 4246675.267222613,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 235.47833000520768 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 7190893.337346002,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 139.06478000535571 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 10891999.183652552,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 91.8105100026878 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 4963145.419194463,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 201.4851300009468 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 4812871.697968462,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 207.77616000486887 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_mean",
            "value": 142277.4759654737,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.0285193999552575 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_std",
            "value": 38693.603048178265,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.844065199999022 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_mean",
            "value": 1676411.2260385775,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 596.5123499936453 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_std",
            "value": 872492.6654748381,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.1461414400037029 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 74220.77996806077,
            "unit": "iter/sec",
            "range": "stddev: 0.00006407455521489096",
            "extra": "mean: 13.473315699866363 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 11982.751170001495,
            "unit": "iter/sec",
            "range": "stddev: 0.00014071635207777233",
            "extra": "mean: 83.45328929999596 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 4.186604188138703,
            "unit": "iter/sec",
            "range": "stddev: 0.18015895621235903",
            "extra": "mean: 238.8570677001553 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 2296318.395384966,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 435.47967999984394 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1890359.0610345101,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 529.0000300010433 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 5992091.398104407,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 166.88663999957498 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2539150.4626667206,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 393.83251000799646 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2568386.5010668584,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 389.3495000011171 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 336742.4691918063,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.969628400005604 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 52035.677867205384,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 19.217583799945714 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 44198.49064813267,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 22.625206999964576 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.242665071188388,
            "unit": "iter/sec",
            "range": "stddev: 0.006040109209264447",
            "extra": "mean: 308.38830962999054 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 11428705.959986048,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 87.49897000598139 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 4818791.049212628,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 207.52092999828164 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 289103.51227422984,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.4589686999424885 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 93016.12377018688,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.750824260003355 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}