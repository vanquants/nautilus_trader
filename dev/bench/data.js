window.BENCHMARK_DATA = {
  "lastUpdate": 1630708887581,
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
          "id": "e63211d1c66b9945feefd0dc5c62e9c5d7ea7fe9",
          "message": "Add tests",
          "timestamp": "2021-09-04T08:20:15+10:00",
          "tree_id": "a690dbb9b43f19d51222408966c3422dbab23b84",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/e63211d1c66b9945feefd0dc5c62e9c5d7ea7fe9"
        },
        "date": 1630708876162,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 0.28714839900358485,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.482519851999996 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 0.7133515717404169,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.401833316999955 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 0.2709893397509052,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.69018205999987 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 6155306.760800003,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 162.46143999978813 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 5786794.915892595,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 172.8072300011263 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 6375720.847010867,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 156.84500999896045 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 7894734.7645159485,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 126.66670000044178 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 185.72130068055145,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.384411999784788 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 9964260.191612754,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 100.35867999931725 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 10200073.420112737,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 98.03851000015129 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 5288557.4444005,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 189.0874800005804 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 9245623.676440781,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 108.15928000056374 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2714299.5859016413,
            "unit": "iter/sec",
            "range": "stddev: 2.699280642144884e-7",
            "extra": "mean: 368.4191697902861 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 850931.94625078,
            "unit": "iter/sec",
            "range": "stddev: 4.806830242511645e-7",
            "extra": "mean: 1.1751821099278459 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 636129.1671059194,
            "unit": "iter/sec",
            "range": "stddev: 5.380364551925591e-7",
            "extra": "mean: 1.572007780353033 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 662415.188924172,
            "unit": "iter/sec",
            "range": "stddev: 4.978223458511649e-7",
            "extra": "mean: 1.50962721978658 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3784209.2502942597,
            "unit": "iter/sec",
            "range": "stddev: 1.9832846485987102e-7",
            "extra": "mean: 264.25600009361006 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1190899.1578868295,
            "unit": "iter/sec",
            "range": "stddev: 3.8221172251350783e-7",
            "extra": "mean: 839.7016601929863 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2527470.2550819516,
            "unit": "iter/sec",
            "range": "stddev: 2.79911561947198e-7",
            "extra": "mean: 395.65252963484454 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 4304005.14189731,
            "unit": "iter/sec",
            "range": "stddev: 2.2615596744404748e-7",
            "extra": "mean: 232.34172986121848 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1352144.0175506917,
            "unit": "iter/sec",
            "range": "stddev: 3.634615198667998e-7",
            "extra": "mean: 739.5661904502049 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 714174.9865914006,
            "unit": "iter/sec",
            "range": "stddev: 4.883189624270941e-7",
            "extra": "mean: 1.4002170599292185 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 775116.9177837991,
            "unit": "iter/sec",
            "range": "stddev: 5.618647598459882e-7",
            "extra": "mean: 1.2901279498055374 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 6643347.630749641,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 150.52651999894806 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 4001998.9184494824,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 249.87512999814498 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 7572595.443470889,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 132.05512000013186 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 10555510.10807058,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 94.73725000134436 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 4593885.162142347,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 217.68067000039082 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 4701605.993377955,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 212.69328000016685 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_mean",
            "value": 138008.98766943568,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.245904900014466 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_std",
            "value": 46147.53629475172,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 21.66962919998241 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_mean",
            "value": 1994553.3137000157,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 501.365390000501 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_std",
            "value": 1114288.417868655,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 897.4337199992988 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 57492.172354868926,
            "unit": "iter/sec",
            "range": "stddev: 0.00009847713206090143",
            "extra": "mean: 17.393672199887078 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 14799.178835583056,
            "unit": "iter/sec",
            "range": "stddev: 0.00014288082720231195",
            "extra": "mean: 67.57131670005947 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 4.755650687211917,
            "unit": "iter/sec",
            "range": "stddev: 0.16899629805903482",
            "extra": "mean: 210.27616739997939 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 1965594.624799754,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 508.75190000169823 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1696165.5870138388,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 589.5650799993746 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 6160920.407058513,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 162.31340999866006 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2270736.9202133873,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 440.3856699991593 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2266629.37003867,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 441.18372999946587 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 321816.633786662,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.107359579998956 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 63438.59261282658,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 15.76327529999162 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 54382.921100211,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 18.388125899991792 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 2.970827990729754,
            "unit": "iter/sec",
            "range": "stddev: 0.0017452865107883571",
            "extra": "mean: 336.6064959399955 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 9598409.274819393,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 104.18393000009019 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 4442013.577171148,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 225.12313000106587 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 259451.61476407317,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.8542832000075578 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 89184.95885252449,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.212653039999623 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}