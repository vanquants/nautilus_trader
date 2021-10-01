window.BENCHMARK_DATA = {
  "lastUpdate": 1633058712248,
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
          "id": "467bcfa792f07531863b787a65e0451793e17ad1",
          "message": "Fix market order fill behaviour",
          "timestamp": "2021-09-30T19:38:56+10:00",
          "tree_id": "168cac1f0f7d57d1158d329d6fb0e8facfa90219",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/467bcfa792f07531863b787a65e0451793e17ad1"
        },
        "date": 1632997203966,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 3.1480561566984893,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 317.6563410002018 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 9.999707008600053,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 100.00292999984595 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 1.4448580856418252,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 692.1094949998405 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 8008342.7710387735,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 124.86978000197269 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 8264208.053706239,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 121.0037300006661 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 7906150.202171727,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 126.48380999962684 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 11076982.926614141,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 90.27729000081308 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 196.1025404624163,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.09937299966623 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 15769164.659871357,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 63.414900000680056 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 16163737.366238113,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 61.86688000070718 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 8264617.856849453,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 120.99773000045388 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 14590876.207609914,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 68.53598000361671 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 3354306.016403878,
            "unit": "iter/sec",
            "range": "stddev: 4.621769374666171e-8",
            "extra": "mean: 298.1242603118517 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 1094269.5484949828,
            "unit": "iter/sec",
            "range": "stddev: 1.2505705707495188e-7",
            "extra": "mean: 913.8516203574909 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 860994.4444293014,
            "unit": "iter/sec",
            "range": "stddev: 1.7184372440298637e-7",
            "extra": "mean: 1.1614476800286866 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 835028.6015766523,
            "unit": "iter/sec",
            "range": "stddev: 1.4364507542516802e-7",
            "extra": "mean: 1.1975637698060382 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 4688637.220713392,
            "unit": "iter/sec",
            "range": "stddev: 7.864207369126155e-8",
            "extra": "mean: 213.28158970845834 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1567212.7801958488,
            "unit": "iter/sec",
            "range": "stddev: 9.369949519116794e-8",
            "extra": "mean: 638.0754500196417 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 3062616.2334473412,
            "unit": "iter/sec",
            "range": "stddev: 8.698902157371742e-8",
            "extra": "mean: 326.51821964464034 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 5238498.9186276635,
            "unit": "iter/sec",
            "range": "stddev: 7.931291714126898e-8",
            "extra": "mean: 190.89437938873743 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1349837.090417838,
            "unit": "iter/sec",
            "range": "stddev: 1.0911050266054257e-7",
            "extra": "mean: 740.8301395025774 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 881665.6027878051,
            "unit": "iter/sec",
            "range": "stddev: 1.5411009417025584e-7",
            "extra": "mean: 1.134216869568263 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 878802.1537736133,
            "unit": "iter/sec",
            "range": "stddev: 4.5830650479158464e-7",
            "extra": "mean: 1.137912550289002 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 9233158.488070777,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 108.30530000021099 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 4545337.812941884,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 220.0056499987113 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 10627090.813555036,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 94.09913000126835 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 18163766.701197673,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 55.05465999704029 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 6296003.71868041,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 158.83090999977867 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 6568755.857243363,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 152.23583000079088 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 92600.82463533182,
            "unit": "iter/sec",
            "range": "stddev: 0.00004818516640864597",
            "extra": "mean: 10.799039899893614 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 11419.261872045094,
            "unit": "iter/sec",
            "range": "stddev: 0.0002029304727424176",
            "extra": "mean: 87.57133440017242 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 4.305632099826999,
            "unit": "iter/sec",
            "range": "stddev: 0.18216962874867293",
            "extra": "mean: 232.25393550001172 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 2724073.872085511,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 367.0972400004757 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 2255957.764488699,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 443.2707100022526 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 9763182.297741847,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 102.42561999803002 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2812249.947059603,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 355.5871699973068 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2773985.1236554417,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 360.49220000222704 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 288519.0053440893,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.4659761800003253 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 44403.8145594205,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 22.52058770000076 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 39950.08955414775,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.031232999981512 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.685877941217992,
            "unit": "iter/sec",
            "range": "stddev: 0.00016915981330609554",
            "extra": "mean: 271.3057827600096 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 14974108.269480953,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 66.78193999960058 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 5764470.535991434,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 173.47646999951394 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 259332.42077652866,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.8560547000088268 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_mean",
            "value": 152964.77551702023,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.537452799966559 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_std",
            "value": 52944.654622932605,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 18.887648000008994 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_mean",
            "value": 2433570.6397139365,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 410.91883000262897 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_std",
            "value": 1323061.577186687,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 755.8227200024703 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 106858.91263245457,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.35813378000148 usec\nrounds: 1"
          }
        ]
      },
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
          "id": "467bcfa792f07531863b787a65e0451793e17ad1",
          "message": "Fix market order fill behaviour",
          "timestamp": "2021-09-30T19:38:56+10:00",
          "tree_id": "168cac1f0f7d57d1158d329d6fb0e8facfa90219",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/467bcfa792f07531863b787a65e0451793e17ad1"
        },
        "date": 1632997725372,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 2.9405662425499566,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 340.0705570002174 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 7.519906206896182,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 132.980382000369 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 1.0468775443539033,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 955.2215590001651 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 5482904.331789521,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 182.38508999729675 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 5218031.5340958,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 191.64315000125498 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 6451574.193822051,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 155.00092999900517 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 7001386.134292718,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 142.8288600027372 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 109.18753013030056,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.158554999885382 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 6627699.76868891,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 150.88190999904327 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 8961402.968549386,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 111.58967000028497 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 4159656.778385643,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 240.404450000824 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 8407620.26340383,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 118.939720000526 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2847695.992688043,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013220336271404352",
            "extra": "mean: 351.1610798932452 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 940354.7733305839,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025920536041494623",
            "extra": "mean: 1.063428429738451 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 674029.0997766169,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026733487718670956",
            "extra": "mean: 1.4836154705062654 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 692312.9335413116,
            "unit": "iter/sec",
            "range": "stddev: 0.0000034955319812806022",
            "extra": "mean: 1.4444335091138782 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3809718.7229147735,
            "unit": "iter/sec",
            "range": "stddev: 9.012204535683602e-7",
            "extra": "mean: 262.48656993629993 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1167821.6723618142,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017939704199451154",
            "extra": "mean: 856.2951207932201 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2135161.0351745314,
            "unit": "iter/sec",
            "range": "stddev: 0.000003289333708643735",
            "extra": "mean: 468.34874912292435 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 4433619.712782324,
            "unit": "iter/sec",
            "range": "stddev: 8.112026406587947e-7",
            "extra": "mean: 225.5493399934494 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1403329.0893273838,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023555993413085737",
            "extra": "mean: 712.591228675592 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 691023.5704690755,
            "unit": "iter/sec",
            "range": "stddev: 0.000007278414914872333",
            "extra": "mean: 1.4471286403750128 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 901532.2743377842,
            "unit": "iter/sec",
            "range": "stddev: 0.000001916443626936114",
            "extra": "mean: 1.1092226295886576 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 6968453.670895577,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 143.5038599993277 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 4052003.7401771834,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 246.79147999904674 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 6862057.8157610465,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 145.7288800020251 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 10793009.928516421,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 92.6525600016248 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 4648799.6868476495,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 215.10929000214674 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 4842609.383860989,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 206.5002400013327 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 77302.28805532095,
            "unit": "iter/sec",
            "range": "stddev: 0.00005642507340512051",
            "extra": "mean: 12.936227699810843 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 8214.978022756495,
            "unit": "iter/sec",
            "range": "stddev: 0.00017183074790632356",
            "extra": "mean: 121.7288710000048 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 3.126661917539411,
            "unit": "iter/sec",
            "range": "stddev: 0.2233854104464975",
            "extra": "mean: 319.82991010008845 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 1821486.2923767436,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 549.0022100002534 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1559284.9736488957,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 641.3195900040591 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 5798153.520103718,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 172.46869999780756 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2124613.2407199773,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 470.67389999938314 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2196726.332994228,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 455.22283999616775 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 210789.641309818,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.744066139996903 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 24748.69372065118,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 40.40617299997393 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 22801.93512452888,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 43.855926900005215 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.112370738342955,
            "unit": "iter/sec",
            "range": "stddev: 0.017828751707583888",
            "extra": "mean: 321.29848403998494 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 9323176.540530348,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 107.2595799996634 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 3814705.9967906144,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 262.14340000024094 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 217018.84339759572,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.607894800028589 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_mean",
            "value": 128540.95298051118,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.779621800000313 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_std",
            "value": 36793.69985889783,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 27.17856600002051 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_mean",
            "value": 1758077.7431107915,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 568.8030600003913 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_std",
            "value": 989014.5798954277,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.0111074399992503 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 90984.88098410524,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.99083703999895 usec\nrounds: 1"
          }
        ]
      },
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
          "id": "030fc7167dc02e4407dcb66f384ae94290ebd246",
          "message": "Add `reject_stop_orders` option",
          "timestamp": "2021-09-30T19:52:59+10:00",
          "tree_id": "50d1e6028863311cd4b7bf2b22a700ddd1670d20",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/030fc7167dc02e4407dcb66f384ae94290ebd246"
        },
        "date": 1632998480516,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 2.4283528455922405,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 411.8017700002383 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 7.860440828605221,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 127.21932800013747 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 1.1197078171718,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 893.0901300000187 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 5535464.586871693,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 180.6533099988883 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 5744114.738117411,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 174.09122999652027 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 6162261.71760049,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 162.27808000166988 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 6862246.643329669,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 145.72486999895773 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 167.72959707913085,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.96197699996992 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 10247135.285176042,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 97.58825000062643 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 10445475.505508184,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 95.73523000199202 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 4915995.469402909,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 203.41760000064824 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 9172764.337926138,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 109.01839000325708 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2511355.030531388,
            "unit": "iter/sec",
            "range": "stddev: 5.863210631831596e-7",
            "extra": "mean: 398.19140975396294 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 764167.653214718,
            "unit": "iter/sec",
            "range": "stddev: 0.00001690039302195386",
            "extra": "mean: 1.3086133596380023 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 644456.0097236295,
            "unit": "iter/sec",
            "range": "stddev: 0.000002396901926763142",
            "extra": "mean: 1.5516962909987342 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 617462.6220066872,
            "unit": "iter/sec",
            "range": "stddev: 0.000008601898381527842",
            "extra": "mean: 1.6195312304898835 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3389441.3649168867,
            "unit": "iter/sec",
            "range": "stddev: 9.257040407693847e-7",
            "extra": "mean: 295.03386910619156 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1129549.092494411,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011985684402507344",
            "extra": "mean: 885.3090198954305 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2309143.623560333,
            "unit": "iter/sec",
            "range": "stddev: 4.285410540423166e-7",
            "extra": "mean: 433.060979748916 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 3984116.284897562,
            "unit": "iter/sec",
            "range": "stddev: 5.947875384027032e-7",
            "extra": "mean: 250.99668997881963 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1264753.844248613,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014859440090863088",
            "extra": "mean: 790.6676896436693 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 628161.4067713832,
            "unit": "iter/sec",
            "range": "stddev: 0.00002532717407012785",
            "extra": "mean: 1.5919475300779595 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 753912.4507557222,
            "unit": "iter/sec",
            "range": "stddev: 0.0000031473002515236257",
            "extra": "mean: 1.326413960928221 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 6458213.197049679,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 154.8415900015243 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 3561348.5559419016,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 280.79250999780925 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 7467808.146206495,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 133.90809999691555 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 9744842.980244141,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 102.61838000133139 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 3195314.3909624773,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 312.9582500014294 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 3786930.3339854027,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 264.06611999846064 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 75839.7038367509,
            "unit": "iter/sec",
            "range": "stddev: 0.00005688102008201555",
            "extra": "mean: 13.18570550001823 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 11342.960801411376,
            "unit": "iter/sec",
            "range": "stddev: 0.00017153501853818626",
            "extra": "mean: 88.16040339975189 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 3.6869420308905116,
            "unit": "iter/sec",
            "range": "stddev: 0.20832827086465022",
            "extra": "mean: 271.2274810999588 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 1941399.8926049704,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 515.0922299981175 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1557584.555194213,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 642.0197199986433 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 6590768.6926308535,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 151.72736999829795 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2166165.094764141,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 461.64532999682706 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2251817.5601924257,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 444.0857099962159 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 233288.56712352822,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.286536680001518 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 36155.63156899962,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 27.658208599996215 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 32268.393941274997,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 30.99007660002826 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 2.8042865675222997,
            "unit": "iter/sec",
            "range": "stddev: 0.0021682915764103497",
            "extra": "mean: 356.5969368399965 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 9394601.542398144,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 106.44411000157561 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 4385432.697701459,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 228.02767000030144 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 215843.5465829933,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.632985399985046 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_mean",
            "value": 134057.99724334094,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.4594579999939015 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_std",
            "value": 43405.89851869803,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 23.038343500002156 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_mean",
            "value": 1891008.1164637636,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 528.818460002185 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_std",
            "value": 1027273.6532234706,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 973.4504499965624 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 85652.09756835912,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.675137309998718 usec\nrounds: 1"
          }
        ]
      },
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
          "id": "030fc7167dc02e4407dcb66f384ae94290ebd246",
          "message": "Add `reject_stop_orders` option",
          "timestamp": "2021-09-30T19:52:59+10:00",
          "tree_id": "50d1e6028863311cd4b7bf2b22a700ddd1670d20",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/030fc7167dc02e4407dcb66f384ae94290ebd246"
        },
        "date": 1632998597691,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 265848.5478901568,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.761540199998308 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 28274.952126375967,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 35.366991800037795 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 24527.922060335375,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 40.7698621000236 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.2456208752365083,
            "unit": "iter/sec",
            "range": "stddev: 0.008853000403856547",
            "extra": "mean: 308.107458770005 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 13705578.678021828,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 72.96298999790451 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 4393750.329536656,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 227.59599999972124 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 247593.4044902546,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.038879799963979 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_mean",
            "value": 123106.47166048312,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.123049799996807 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_std",
            "value": 33410.99261947256,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 29.930269100032092 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_mean",
            "value": 2187245.8283750894,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 457.1959799977776 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_std",
            "value": 1227254.404365295,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 814.8269799994523 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 101384.50990882645,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.863439700002345 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 2.9290980247456333,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 341.40202599974145 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 7.075610089712977,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 141.33056899981966 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 1.1310712856966358,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 884.1175729999122 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 9034976.0183624,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 110.68098000123427 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 8907973.331117196,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 112.25897999793233 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 8825347.952444052,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 113.30998000175896 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 11344172.084733797,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 88.15099000003102 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 195.568457851498,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.113299000186089 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 17175641.024244737,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 58.22199000249384 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 16399359.834200256,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 60.977990001447324 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 8013335.472253976,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 124.79198000164615 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 15168754.671241114,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 65.92498999907548 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 3440635.518543801,
            "unit": "iter/sec",
            "range": "stddev: 8.222943681377802e-7",
            "extra": "mean: 290.64397975616885 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 988128.7398683436,
            "unit": "iter/sec",
            "range": "stddev: 0.0000036500494690340875",
            "extra": "mean: 1.0120138800266432 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 600896.6064784692,
            "unit": "iter/sec",
            "range": "stddev: 0.000013106051338725215",
            "extra": "mean: 1.6641798093360194 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 730514.2072191103,
            "unit": "iter/sec",
            "range": "stddev: 0.000014553085794969061",
            "extra": "mean: 1.368898770369924 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 4440715.21346794,
            "unit": "iter/sec",
            "range": "stddev: 9.156609965916669e-7",
            "extra": "mean: 225.18895086250268 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1477395.2936840602,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018263384016853897",
            "extra": "mean: 676.86691860672 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2967975.806395113,
            "unit": "iter/sec",
            "range": "stddev: 9.304279857579825e-7",
            "extra": "mean: 336.9299701989803 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 5304815.200019522,
            "unit": "iter/sec",
            "range": "stddev: 9.55896581056747e-7",
            "extra": "mean: 188.50798044695694 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1460895.0472476976,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014178130846018421",
            "extra": "mean: 684.5118695446217 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 761833.4892930413,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024993142653775843",
            "extra": "mean: 1.3126227896964338 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 868965.3970537981,
            "unit": "iter/sec",
            "range": "stddev: 0.0000028795069077711865",
            "extra": "mean: 1.1507938099612147 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 8133454.370178423,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 122.94898999698489 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 4440813.437985837,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 225.183970001126 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 10656437.623274656,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 93.83998999965115 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 19815713.86134749,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 50.46499999934895 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 5720235.412835807,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 174.81798000062554 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 5292154.164411113,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 188.9589700022043 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 78329.03366902476,
            "unit": "iter/sec",
            "range": "stddev: 0.00005514961972481348",
            "extra": "mean: 12.766658200143866 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 9496.73975451938,
            "unit": "iter/sec",
            "range": "stddev: 0.00007375238141191173",
            "extra": "mean: 105.29929490003269 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 3.22877570144747,
            "unit": "iter/sec",
            "range": "stddev: 0.21870071377580932",
            "extra": "mean: 309.7149175000595 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 2282624.6293538054,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 438.09218000205874 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1838920.765345993,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 543.7972200024888 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 8220706.232637305,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 121.64405000021361 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2565752.8036806216,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 389.7491599991554 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2357172.050717612,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 424.2371700001968 nsec\nrounds: 1"
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
          "id": "d93d9ce4da8ceead3f0ba39d9537fd0a347ae937",
          "message": "Catalog batching",
          "timestamp": "2021-09-26T21:03:10Z",
          "url": "https://github.com/nautechsystems/nautilus_trader/pull/448/commits/d93d9ce4da8ceead3f0ba39d9537fd0a347ae937"
        },
        "date": 1633058279227,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.8673923837861697,
            "unit": "iter/sec",
            "range": "stddev: 0.0002862737666310988",
            "extra": "mean: 258.57215941998675 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 13201363.70025611,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 75.74975000352424 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 6041317.050574184,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 165.52682000110508 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 304802.30355230026,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.2808150999699137 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_mean",
            "value": 186258.32979751588,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.3688874000272335 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_std",
            "value": 59229.014379919456,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 16.883617099983894 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_mean",
            "value": 2597941.9571405267,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 384.9200700005895 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_std",
            "value": 1451940.7045948044,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 688.7333600025158 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 123019.63241769957,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.128783840002143 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 3.299493007162499,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 303.0768660000831 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 10.378056512813302,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 96.35715499962316 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 1.5780604328440484,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 633.6892929998612 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 7829814.288498836,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 127.71695000083126 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 7535887.5921302065,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 132.6983700027995 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 8365034.023956737,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 119.54523999975208 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 9238620.352496136,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 108.24126999978034 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 213.7756608254335,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.677801000070758 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 13382867.788026204,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 74.72239999970043 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 13494484.466634639,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 74.10435000110738 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 6696093.766796105,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 149.34079999875394 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 12283960.451624935,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 81.40697000271757 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 3414975.380123407,
            "unit": "iter/sec",
            "range": "stddev: 2.2124558617858872e-7",
            "extra": "mean: 292.82787976171676 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 1089103.4282377376,
            "unit": "iter/sec",
            "range": "stddev: 1.576594543035917e-7",
            "extra": "mean: 918.1864403990403 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 862845.3035191002,
            "unit": "iter/sec",
            "range": "stddev: 2.1091344801222826e-7",
            "extra": "mean: 1.158956299491365 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 839734.2918929609,
            "unit": "iter/sec",
            "range": "stddev: 1.8585274154752753e-7",
            "extra": "mean: 1.190852880076818 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 4632631.828462354,
            "unit": "iter/sec",
            "range": "stddev: 6.881403396746052e-8",
            "extra": "mean: 215.86002018466388 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1482002.8820052543,
            "unit": "iter/sec",
            "range": "stddev: 2.595576790680074e-7",
            "extra": "mean: 674.7625204661745 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 3033847.8429131177,
            "unit": "iter/sec",
            "range": "stddev: 9.368993762475665e-8",
            "extra": "mean: 329.61442095256643 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 5234515.168622212,
            "unit": "iter/sec",
            "range": "stddev: 7.199474188733883e-8",
            "extra": "mean: 191.03966036709608 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1734635.044659671,
            "unit": "iter/sec",
            "range": "stddev: 1.1589813074221378e-7",
            "extra": "mean: 576.4901401471434 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 915426.7437858325,
            "unit": "iter/sec",
            "range": "stddev: 1.67600586056754e-7",
            "extra": "mean: 1.0923867002884435 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 1021043.7426949653,
            "unit": "iter/sec",
            "range": "stddev: 2.8225529408638557e-7",
            "extra": "mean: 979.3899694841457 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 8737391.071043069,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 114.45063999872218 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 5168044.924004998,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 193.49676999809162 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 9923446.564072646,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 100.7714399975157 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 13703691.116466714,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 72.9730400007611 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 5901152.624918725,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 169.45842000041011 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 6071374.471151082,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 164.70734999984415 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 100078.73394185766,
            "unit": "iter/sec",
            "range": "stddev: 0.000044297267045421664",
            "extra": "mean: 9.992132799970932 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 12140.701626291551,
            "unit": "iter/sec",
            "range": "stddev: 0.00021019807531313912",
            "extra": "mean: 82.36756250021244 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 5.067875269780098,
            "unit": "iter/sec",
            "range": "stddev: 0.1808882459966065",
            "extra": "mean: 197.32135199992626 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 2583281.5084000756,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 387.1045400001094 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 2212886.4966659183,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 451.898460000848 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 8684954.575606506,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 115.1416499988045 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2779034.9823302543,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 359.83713999939937 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2919717.491642063,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 342.4988899996606 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 317397.64200613595,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.1506220199980817 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 50028.65240976445,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 19.98854560001746 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 43331.5744470097,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 23.07785979996879 usec\nrounds: 1"
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
          "id": "d93d9ce4da8ceead3f0ba39d9537fd0a347ae937",
          "message": "Catalog batching",
          "timestamp": "2021-09-26T21:03:10Z",
          "url": "https://github.com/nautechsystems/nautilus_trader/pull/448/commits/d93d9ce4da8ceead3f0ba39d9537fd0a347ae937"
        },
        "date": 1633058701475,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 2.534797593637445,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 394.50881699985985 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 7.90671224442732,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 126.4748190001228 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 1.097881910993841,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 910.844773000008 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 6309699.219218863,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 158.4861599985743 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 6721405.34356977,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 148.77841000270564 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 6359419.374784157,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 157.24706000128208 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 8059737.484625154,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 124.07352000082028 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 157.26020021617305,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.358887999795115 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 13220902.776823934,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 75.63779999600229 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 13167279.889009913,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 75.94582999900013 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 6750446.001953553,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 148.13836000030278 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 11830052.307948506,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 84.53047999864793 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2700829.061581386,
            "unit": "iter/sec",
            "range": "stddev: 0.000003031945244552381",
            "extra": "mean: 370.25667941179563 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 878178.4301365109,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022769755459154453",
            "extra": "mean: 1.138720749318054 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 604422.8176835412,
            "unit": "iter/sec",
            "range": "stddev: 0.000023859332415127447",
            "extra": "mean: 1.6544709609615893 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 662878.3433999985,
            "unit": "iter/sec",
            "range": "stddev: 0.000006627619932493101",
            "extra": "mean: 1.508572440111493 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 2176511.7486113794,
            "unit": "iter/sec",
            "range": "stddev: 0.000032312935447036216",
            "extra": "mean: 459.45077054511785 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1235576.1775497545,
            "unit": "iter/sec",
            "range": "stddev: 0.000003866177864921648",
            "extra": "mean: 809.339009742871 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2284873.6623376366,
            "unit": "iter/sec",
            "range": "stddev: 6.302824627219258e-7",
            "extra": "mean: 437.66095976479846 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 4285674.30721442,
            "unit": "iter/sec",
            "range": "stddev: 3.7181161724323804e-7",
            "extra": "mean: 233.3355099608525 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1190815.3327181381,
            "unit": "iter/sec",
            "range": "stddev: 0.000006268111337623632",
            "extra": "mean: 839.7607693859754 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 776771.2164406066,
            "unit": "iter/sec",
            "range": "stddev: 0.0000028555132487936222",
            "extra": "mean: 1.287380349367595 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 778253.6932457369,
            "unit": "iter/sec",
            "range": "stddev: 0.000004684150549561706",
            "extra": "mean: 1.284928049399241 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 7377329.760722993,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 135.55040000028384 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 3661073.0839125533,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 273.1439600029262 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 8445226.960464923,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 118.41007999919384 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 14064804.4309476,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 71.09945999673073 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 4853572.333589137,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 206.0338100000081 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 5075984.699223135,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 197.00610999734636 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 74842.54008961414,
            "unit": "iter/sec",
            "range": "stddev: 0.00005882980900648307",
            "extra": "mean: 13.361385100006375 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 9811.45921259072,
            "unit": "iter/sec",
            "range": "stddev: 0.00020817683407752454",
            "extra": "mean: 101.92163859956054 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 3.600538106757095,
            "unit": "iter/sec",
            "range": "stddev: 0.21765987300167028",
            "extra": "mean: 277.7362633999928 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 2215311.827719606,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 451.4037200033272 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1868393.4658135485,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 535.2191699967079 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 8270388.782567426,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 120.91330000203014 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2495590.1673898604,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 400.70682000077795 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2520170.690148777,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 396.79852000062965 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 255719.95677901572,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.9105278000033654 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 38457.7960742305,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 26.00253010000415 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 35440.959465575834,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 28.215940400014006 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.111537880215252,
            "unit": "iter/sec",
            "range": "stddev: 0.0005481815298468446",
            "extra": "mean: 321.38448526000957 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 12881126.778940387,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 77.63296000121045 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 5027367.480366018,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 198.9112599994769 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 219638.8206515881,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.552929200008293 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_mean",
            "value": 134879.4365322107,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.414028599987432 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_std",
            "value": 44868.079881064485,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 22.287559500000498 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_mean",
            "value": 2013169.7538949589,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 496.729100000266 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_std",
            "value": 1136527.025034865,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 879.8734900028649 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 93565.23106581788,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.687730780000493 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}