window.BENCHMARK_DATA = {
  "lastUpdate": 1630989182573,
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
      },
      {
        "commit": {
          "author": {
            "email": "bradley.mcelroy@live.com",
            "name": "Bradley McElroy",
            "username": "limx0"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "18a7b2dbcdae049fc7ae9b7d88e1f996d868f95b",
          "message": "Backtest config tests (#430)",
          "timestamp": "2021-09-07T14:13:16+10:00",
          "tree_id": "cec4775e887c39d801c95026d83ea301dce9b4dd",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/18a7b2dbcdae049fc7ae9b7d88e1f996d868f95b"
        },
        "date": 1630989165984,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 0.28590058695038817,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.4977192970000033 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 0.6897638458968905,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.4497715500001505 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 0.2688863622348578,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.719043210999871 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 6101582.811624292,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 163.89189999927112 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 5598184.486362725,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 178.6293400004979 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 5958968.095012336,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 167.81429000047865 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 8026256.1311441995,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 124.59109000019451 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 164.14453122688258,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.092192000096475 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 11328548.758650096,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 88.27255999904082 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 12430110.151888855,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 80.4498100001183 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 5065313.417508599,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 197.42115000099147 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 8859204.64721224,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 112.87694999964515 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2855787.0922013028,
            "unit": "iter/sec",
            "range": "stddev: 2.6251140354158873e-7",
            "extra": "mean: 350.1661600512307 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 806827.4904529296,
            "unit": "iter/sec",
            "range": "stddev: 5.112559174677646e-7",
            "extra": "mean: 1.2394223199294174 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 611909.8522328816,
            "unit": "iter/sec",
            "range": "stddev: 6.348030822141081e-7",
            "extra": "mean: 1.6342276502837194 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 621014.1989905626,
            "unit": "iter/sec",
            "range": "stddev: 5.61727898429347e-7",
            "extra": "mean: 1.6102691397804847 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3669642.493066002,
            "unit": "iter/sec",
            "range": "stddev: 2.829805909113016e-7",
            "extra": "mean: 272.50610976125245 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1231649.1816081363,
            "unit": "iter/sec",
            "range": "stddev: 4.71850992653895e-7",
            "extra": "mean: 811.9195099811805 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2421262.070863254,
            "unit": "iter/sec",
            "range": "stddev: 3.537419654081202e-7",
            "extra": "mean: 413.00774998035195 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 4016277.810315486,
            "unit": "iter/sec",
            "range": "stddev: 2.2688009143526733e-7",
            "extra": "mean: 248.98676018665356 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1286249.7172337743,
            "unit": "iter/sec",
            "range": "stddev: 3.5168824374306016e-7",
            "extra": "mean: 777.4540095920202 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 693472.3119446284,
            "unit": "iter/sec",
            "range": "stddev: 5.422389190997795e-7",
            "extra": "mean: 1.442018639786511 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 802417.6586565619,
            "unit": "iter/sec",
            "range": "stddev: 5.399670061645316e-7",
            "extra": "mean: 1.2462337901115461 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 6557514.649434191,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 152.496800001245 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 3940302.5253681797,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 253.78762000173086 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 7413717.854267657,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 134.8850899989884 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 8019111.145716635,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 124.70209999946748 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 4990382.534767875,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 200.38544000044567 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 4829212.719034767,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 207.07309000044916 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 71327.08368679765,
            "unit": "iter/sec",
            "range": "stddev: 0.00006763667798619956",
            "extra": "mean: 14.019919900147215 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 15293.490907226666,
            "unit": "iter/sec",
            "range": "stddev: 0.00015194679242563542",
            "extra": "mean: 65.3872948999151 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 4.838634943142296,
            "unit": "iter/sec",
            "range": "stddev: 0.16863407751800932",
            "extra": "mean: 206.66985869997916 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 1767421.8170807068,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 565.7958899996629 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1538130.0832562828,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 650.1400700017257 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 6429706.68516943,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 155.52808999927947 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2266279.706959054,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 441.2518000003729 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2301156.2274503084,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 434.5641500003694 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 322845.95580209716,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.0974524599992037 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 68687.2523918702,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 14.558742200006236 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 58746.49823869871,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 17.02229120000993 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.0604029459229922,
            "unit": "iter/sec",
            "range": "stddev: 0.0021777796795378673",
            "extra": "mean: 326.75435805999996 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 9901505.76174001,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 100.99473999844122 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 4593266.4825882865,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 217.709990001822 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 245843.2697031958,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.06763220000812 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_mean",
            "value": 141219.14801201408,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.0811926999795105 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_std",
            "value": 46210.45097041258,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 21.640126399984183 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_mean",
            "value": 1930040.0994839908,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 518.1239499984258 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_std",
            "value": 1099068.1089438193,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 909.8617199992987 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 93615.81676372726,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.681955619998007 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}