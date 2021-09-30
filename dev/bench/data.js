window.BENCHMARK_DATA = {
  "lastUpdate": 1632997734330,
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
      }
    ]
  }
}