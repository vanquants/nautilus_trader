window.BENCHMARK_DATA = {
  "lastUpdate": 1633071903511,
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
      },
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
        "date": 1633071893393,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 2.72153216730836,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 367.44008100004066 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 8.619417250828418,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 116.01712400033648 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 1.2205266492430162,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 819.3184479996489 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 6491198.324706343,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 154.05475999614282 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 6810148.3195361765,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 146.83968000099412 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 6638223.207857757,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 150.6427200001781 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 9163614.877237335,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 109.12724000263552 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 161.97558379368866,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.1737700002595375 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 13270015.894715479,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 75.35786000062217 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 13619369.140363272,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 73.42483999764227 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 6805884.204085328,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 146.9316800012166 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 12121514.792106293,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 82.49793999766553 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2762520.9134845473,
            "unit": "iter/sec",
            "range": "stddev: 1.649763446912783e-7",
            "extra": "mean: 361.9882097973459 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 846527.5079742083,
            "unit": "iter/sec",
            "range": "stddev: 2.574302821958195e-7",
            "extra": "mean: 1.1812965208810056 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 669603.0141459914,
            "unit": "iter/sec",
            "range": "stddev: 4.16768542826092e-7",
            "extra": "mean: 1.493422190274032 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 678962.1276112987,
            "unit": "iter/sec",
            "range": "stddev: 4.655469688997453e-7",
            "extra": "mean: 1.4728362000369088 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3918753.123456013,
            "unit": "iter/sec",
            "range": "stddev: 1.8316221763713914e-7",
            "extra": "mean: 255.18320968330957 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1307277.2919322283,
            "unit": "iter/sec",
            "range": "stddev: 3.2069802915101025e-7",
            "extra": "mean: 764.9486502759828 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2378190.620651149,
            "unit": "iter/sec",
            "range": "stddev: 2.529077761694855e-7",
            "extra": "mean: 420.48774026625324 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 3980196.2850539465,
            "unit": "iter/sec",
            "range": "stddev: 1.8120733710587488e-7",
            "extra": "mean: 251.24389059783425 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1223085.379015473,
            "unit": "iter/sec",
            "range": "stddev: 3.125030696432834e-7",
            "extra": "mean: 817.6044102538071 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 786816.7035885282,
            "unit": "iter/sec",
            "range": "stddev: 5.171449883354127e-7",
            "extra": "mean: 1.2709440400021776 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 799181.4845229888,
            "unit": "iter/sec",
            "range": "stddev: 6.652106751199024e-7",
            "extra": "mean: 1.2512802403034584 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 7755276.360568422,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 128.94446999780484 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 4052950.665554265,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 246.73382000401037 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 8938845.514066536,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 111.87127000084729 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 15283567.490849765,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 65.42974999774742 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 5230038.538130323,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 191.20317999750114 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 5394379.876121569,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 185.3781199997684 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 79579.22706407051,
            "unit": "iter/sec",
            "range": "stddev: 0.00005503899196262393",
            "extra": "mean: 12.566093400164391 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 10559.489883043909,
            "unit": "iter/sec",
            "range": "stddev: 0.00018873476801621996",
            "extra": "mean: 94.70154439995895 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 3.8668707908351316,
            "unit": "iter/sec",
            "range": "stddev: 0.19814035601554242",
            "extra": "mean: 258.6070376000407 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 2252308.052675313,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 443.9890000003288 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1827267.790996989,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 547.2651599984601 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 8233205.886195342,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 121.459369997865 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2552795.577916529,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 391.72741000129463 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2579670.8113036244,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 387.64635999996244 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 257038.897760824,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.890461749997485 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 39011.6919953121,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.633340899958057 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 35232.761326906184,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 28.382674599970414 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.076621280065908,
            "unit": "iter/sec",
            "range": "stddev: 0.0005778783043410572",
            "extra": "mean: 325.0318804199969 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 12381919.82205934,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 80.76291999714158 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 5085661.871406782,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 196.63124000089738 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 225427.26187031352,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.436020699995424 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_mean",
            "value": 134333.57937453515,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.444155099983618 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_std",
            "value": 45227.15012777868,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 22.110612699998455 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_mean",
            "value": 1992282.9319016135,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 501.93674000183813 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_std",
            "value": 1127651.0837371734,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 886.7991299985079 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 92614.1561695469,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.797485409998444 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}