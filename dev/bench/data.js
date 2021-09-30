window.BENCHMARK_DATA = {
  "lastUpdate": 1632997215775,
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
      }
    ]
  }
}