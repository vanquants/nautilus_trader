window.BENCHMARK_DATA = {
  "lastUpdate": 1631480552372,
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
          "id": "cfc9a6db904a10457f92b9e9412fea875b41d222",
          "message": "Bump version",
          "timestamp": "2021-09-13T06:42:35+10:00",
          "tree_id": "725022078acdbc7a6272af43eface659ca3ca8ad",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/cfc9a6db904a10457f92b9e9412fea875b41d222"
        },
        "date": 1631480548401,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 0.27336432487647294,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.658121813999969 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 0.6692813149619551,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.4941400239999894 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 0.2611046716969174,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.829881685000146 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 6011283.298980213,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 166.35382999993453 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 5580829.582463653,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 179.18483000130436 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 6162548.810476763,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 162.27051999976538 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 7319810.958562843,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 136.6155499999877 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 163.31935483117257,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.122972999946796 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 9812977.407582901,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 101.90586999897278 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 9868568.431795398,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 101.33182000117813 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 5145885.8642084235,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 194.33000000162792 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 8902606.024376573,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 112.32665999841629 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2582994.3856408303,
            "unit": "iter/sec",
            "range": "stddev: 1.0628023566952773e-7",
            "extra": "mean: 387.1475701066629 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 806682.9554667374,
            "unit": "iter/sec",
            "range": "stddev: 1.3594212210406597e-7",
            "extra": "mean: 1.2396443896864184 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 633978.8726361606,
            "unit": "iter/sec",
            "range": "stddev: 2.5927566717173146e-7",
            "extra": "mean: 1.5773396293820952 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 647570.9434099767,
            "unit": "iter/sec",
            "range": "stddev: 3.5723365894008276e-7",
            "extra": "mean: 1.544232350411221 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3604426.7117685317,
            "unit": "iter/sec",
            "range": "stddev: 1.6212504688241085e-7",
            "extra": "mean: 277.4366300013753 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1166978.998279648,
            "unit": "iter/sec",
            "range": "stddev: 3.2291863465726697e-7",
            "extra": "mean: 856.9134504341491 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2387113.1791517613,
            "unit": "iter/sec",
            "range": "stddev: 1.1831072429421147e-7",
            "extra": "mean: 418.9160399823777 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 4010525.5324470247,
            "unit": "iter/sec",
            "range": "stddev: 9.326220234510785e-8",
            "extra": "mean: 249.3438807232451 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1266515.6648294588,
            "unit": "iter/sec",
            "range": "stddev: 1.7192564045659893e-7",
            "extra": "mean: 789.567810149947 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 642922.8651549333,
            "unit": "iter/sec",
            "range": "stddev: 3.1999489408738713e-7",
            "extra": "mean: 1.5553965400795278 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 694656.1940147041,
            "unit": "iter/sec",
            "range": "stddev: 3.5331326177588213e-7",
            "extra": "mean: 1.4395610499354916 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 6428842.358316273,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 155.54900000097405 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 3841926.397230723,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 260.28608999922653 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 7150733.676025472,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 139.84578999952646 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 10143571.090840705,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 98.58461000021634 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 4504785.952167275,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 221.98613000000478 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 4631352.235323661,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 215.91966000187313 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 82574.30004487399,
            "unit": "iter/sec",
            "range": "stddev: 0.00005295224032983339",
            "extra": "mean: 12.11030550009582 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 14638.718170279019,
            "unit": "iter/sec",
            "range": "stddev: 0.00014726938499190804",
            "extra": "mean: 68.31199209984788 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 4.313541729089425,
            "unit": "iter/sec",
            "range": "stddev: 0.19240050705584197",
            "extra": "mean: 231.8280575000017 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 1918590.0787979357,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 521.2160800010679 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1628289.9884143523,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 614.1412200008745 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 5870263.651160904,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 170.35009999972317 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2244395.5031457827,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 445.5542700020487 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2238757.4358930937,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 446.67634999996153 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 305772.1994056677,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.2704085000000305 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 63325.14885333274,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 15.791514400007147 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 54619.98231960598,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 18.308317900005022 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 2.894127327092831,
            "unit": "iter/sec",
            "range": "stddev: 0.0018051928454852744",
            "extra": "mean: 345.52729958999635 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 8954426.535735024,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 111.67660999944928 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 4366418.486731423,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 229.02064999925642 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 226696.70125876792,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.411180200008857 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_mean",
            "value": 138761.96794244015,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.206585599988102 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_std",
            "value": 46062.69042803426,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 21.70954390001043 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_mean",
            "value": 1945840.9420573262,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 513.9166200001455 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_std",
            "value": 1079753.3813026496,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 926.1374100015018 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 89946.31997328691,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.11774222999884 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}