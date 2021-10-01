window.BENCHMARK_DATA = {
  "lastUpdate": 1633071883587,
  "repoUrl": "https://github.com/nautechsystems/nautilus_trader",
  "entries": {
    "Benchmark with pytest-benchmark": [
      {
        "commit": {
          "author": {
            "name": "nautechsystems",
            "username": "nautechsystems"
          },
          "committer": {
            "name": "nautechsystems",
            "username": "nautechsystems"
          },
          "id": "1bd5e0cc6088ad4652540e3da31444766ac4ef83",
          "message": "Catalog batching",
          "timestamp": "2021-09-26T21:03:10Z",
          "url": "https://github.com/nautechsystems/nautilus_trader/pull/448/commits/1bd5e0cc6088ad4652540e3da31444766ac4ef83"
        },
        "date": 1633071873892,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 2.7851567255875738,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 359.04622199996084 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 8.597815537530233,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 116.30861300000106 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 1.131031301893015,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 884.1488279999794 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 6341067.23695744,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 157.70216000419168 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 6286889.898291428,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 159.061159997691 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 7125595.387900351,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 140.33915000254638 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 8326454.987691566,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 120.09912999928927 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 200.68614593672382,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.982904999906168 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 11742589.750975752,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 85.16008999777114 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 11900782.226490263,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 84.02809000017442 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 5364916.52533749,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 186.3961900016875 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 9888937.344393287,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 101.1231000029511 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 1993666.1258323502,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010715854907888063",
            "extra": "mean: 501.58849921899673 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 775150.3599556903,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014937843808372117",
            "extra": "mean: 1.2900722900485562 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 619910.722996283,
            "unit": "iter/sec",
            "range": "stddev: 0.000006705399161990462",
            "extra": "mean: 1.6131355095239996 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 629442.867159645,
            "unit": "iter/sec",
            "range": "stddev: 0.0000028787047502786575",
            "extra": "mean: 1.5887065406150214 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3510888.1912423684,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016865947922596114",
            "extra": "mean: 284.828210278647 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1210934.0989159632,
            "unit": "iter/sec",
            "range": "stddev: 0.0000031926590747579187",
            "extra": "mean: 825.8087710100881 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2469498.8496312937,
            "unit": "iter/sec",
            "range": "stddev: 5.60462470445826e-7",
            "extra": "mean: 404.9404599436457 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 3807156.991311784,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020523640966149906",
            "extra": "mean: 262.66318995567417 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1072342.613414081,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010954349243474993",
            "extra": "mean: 932.5377798950285 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 612772.3123330447,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023263095010522968",
            "extra": "mean: 1.631927520015779 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 784916.2085575593,
            "unit": "iter/sec",
            "range": "stddev: 0.000012711921108970587",
            "extra": "mean: 1.2740213402366862 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 5072172.191719016,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 197.1541900002194 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 3832882.4905259134,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 260.90025000030437 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 6935383.654554833,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 144.1881300024761 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 10684322.29532707,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 93.5950800021601 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 4339991.082213136,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 230.4152199985765 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 4412104.502746468,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 226.64921000341565 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 75456.36481034319,
            "unit": "iter/sec",
            "range": "stddev: 0.000057487463214963105",
            "extra": "mean: 13.252692500009289 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 7692.660797275554,
            "unit": "iter/sec",
            "range": "stddev: 0.00016324519882128413",
            "extra": "mean: 129.9940327999593 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 3.2741623976358074,
            "unit": "iter/sec",
            "range": "stddev: 0.23486865475584215",
            "extra": "mean: 305.4216250000536 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 2103156.32658502,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 475.4758299986861 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1793362.3677504777,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 557.6117900000099 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 7023264.0000747545,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 142.38394000130938 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2448131.1994580682,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 408.474840000963 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2399682.2436666456,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 416.72184000162815 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 246472.39587561708,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.057249479997154 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 25304.549617331708,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 39.51858519999405 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 22754.628134368075,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 43.94710359997589 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.332502487254325,
            "unit": "iter/sec",
            "range": "stddev: 0.0024516220439027413",
            "extra": "mean: 300.0747947899981 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 9662200.765210552,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 103.4960900005899 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 3540985.8309703865,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 282.4072300018088 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 216420.52655178544,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.620633800004725 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_mean",
            "value": 126457.95750346391,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.907766499965874 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_std",
            "value": 35254.388066945576,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 28.36526330002016 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_mean",
            "value": 2109155.6379288454,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 474.12337999958254 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_std",
            "value": 1159863.10878393,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 862.1707099973719 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 88061.55395540924,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.355693319997044 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}