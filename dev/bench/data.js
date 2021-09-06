window.BENCHMARK_DATA = {
  "lastUpdate": 1630962635616,
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
          "id": "70bea21848e620af060aac770d919ac2e5b8bd2b",
          "message": "Optimize `UUID4` using Rust bindings\n\n- Remove redundant `uuid4()` function.",
          "timestamp": "2021-09-07T06:49:27+10:00",
          "tree_id": "7dfafdb68306b91f4fd208991d0ef2bc9adbe57e",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/70bea21848e620af060aac770d919ac2e5b8bd2b"
        },
        "date": 1630962621087,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 0.2412494513471724,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.14508714700014 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 0.595602724998967,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.6789714989999993 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 0.22106562930016851,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.52354354299996 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 5735183.411701104,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 174.36234000115292 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 5578385.407788454,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 179.26333999866984 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 5749362.410042215,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 173.93233000120745 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 7045862.292753414,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 141.927269999087 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 162.4824194031073,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.154511999966417 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 9403339.313910559,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 106.34519999939585 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 9182887.39540886,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 108.89821000091615 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 4650526.858211301,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 215.02939999891169 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 8420186.15013902,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 118.76221999955305 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2332792.0534711354,
            "unit": "iter/sec",
            "range": "stddev: 0.000005896667621197324",
            "extra": "mean: 428.6708703898512 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 796811.8791686991,
            "unit": "iter/sec",
            "range": "stddev: 0.000006257709749865153",
            "extra": "mean: 1.2550013700138152 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 563115.5570514195,
            "unit": "iter/sec",
            "range": "stddev: 0.000005662198204894687",
            "extra": "mean: 1.7758344401568138 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 537814.952435796,
            "unit": "iter/sec",
            "range": "stddev: 0.00001892556857152349",
            "extra": "mean: 1.8593756002337614 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3154966.2640304537,
            "unit": "iter/sec",
            "range": "stddev: 0.00000398480690554706",
            "extra": "mean: 316.9605999914893 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1000173.2400246001,
            "unit": "iter/sec",
            "range": "stddev: 0.00002062923072700174",
            "extra": "mean: 999.8267899823078 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2265889.3334994046,
            "unit": "iter/sec",
            "range": "stddev: 0.000001859781991967168",
            "extra": "mean: 441.32782003771354 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 3938303.1774748177,
            "unit": "iter/sec",
            "range": "stddev: 9.961303398229403e-7",
            "extra": "mean: 253.91645968738885 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1176452.1515712698,
            "unit": "iter/sec",
            "range": "stddev: 0.0000046767653089288485",
            "extra": "mean: 850.0133206985083 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 615637.8225567087,
            "unit": "iter/sec",
            "range": "stddev: 0.000003522486796747688",
            "extra": "mean: 1.6243316498116656 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 638396.1040204043,
            "unit": "iter/sec",
            "range": "stddev: 0.000019942505730049435",
            "extra": "mean: 1.566425599564809 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 5493862.531415418,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 182.02130000190664 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 3433753.688895257,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 291.22647999884066 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 6362000.635408581,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 157.18326000069283 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 9857153.094343496,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 101.44917000161513 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 4028563.968825232,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 248.22740999979942 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 4158965.8215538077,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 240.44439000135753 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 62764.88310533514,
            "unit": "iter/sec",
            "range": "stddev: 0.00007485264729659987",
            "extra": "mean: 15.93247610007893 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 10307.649295616471,
            "unit": "iter/sec",
            "range": "stddev: 0.000169332750650407",
            "extra": "mean: 97.01533019999715 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 3.585858316303509,
            "unit": "iter/sec",
            "range": "stddev: 0.20905159104248267",
            "extra": "mean: 278.87326039999607 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 1757337.3667770068,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 569.042699999045 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1187166.2860747688,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 842.3419799987641 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 4664853.375958013,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 214.36901000015496 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 1635828.866058496,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 611.3108900012776 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 1375831.0294565707,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 726.8334400009735 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 230426.9835970638,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.339769519999663 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 45498.77439951472,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 21.978613999999652 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 37434.49935906032,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 26.713326400022197 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 2.7607761300142024,
            "unit": "iter/sec",
            "range": "stddev: 0.007937731872369028",
            "extra": "mean: 362.2169827999983 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 6633222.401547799,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 150.75628999966284 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 3800771.1764742103,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 263.10449999982666 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 245204.5529479576,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.0782277000062095 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_mean",
            "value": 105859.78475589868,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.446457900003224 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_std",
            "value": 38194.22340864354,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 26.181969699996444 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_mean",
            "value": 1786776.5882114822,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 559.6670599993558 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_std",
            "value": 991509.7810643701,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.008562920001168 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 77886.87663461141,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 12.839133410000159 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}