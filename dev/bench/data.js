window.BENCHMARK_DATA = {
  "lastUpdate": 1631536392667,
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
          "id": "96205914e91d5d5d8f1a1aa33d28a5e433df19ba",
          "message": "Overhaul backtest data and engine\n\n- Simplify ingest (only built nautilus objects).\n- Remove redundant `DataProducer` and cache (prep for batch running).\n- Heavily refactor and simplify `BacktestEngine`.\n- Update examples.\n- Update tests.",
          "timestamp": "2021-09-13T22:15:22+10:00",
          "tree_id": "eda0d9d3a903bd1779599b5ca1a2ff6b054c494a",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/96205914e91d5d5d8f1a1aa33d28a5e433df19ba"
        },
        "date": 1631536388096,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 3.094435812652786,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 323.1606860000511 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 3.016772895285274,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 331.480039999974 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 2.209137310473703,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 452.6653890000034 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 6243757.41326482,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 160.15997000067728 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 6466177.655493408,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 154.65087000052335 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 6913014.7110954225,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 144.6546900001522 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 8061766.026579205,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 124.04230000015559 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 168.6025044214329,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.931110000005901 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 11812292.746005895,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 84.65756999953555 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 11550730.635711912,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 86.57460999984323 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 5613426.867980224,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 178.14430000044013 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 10811312.22200857,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 92.4957099994117 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 3064299.4812561134,
            "unit": "iter/sec",
            "range": "stddev: 2.7519414523205317e-7",
            "extra": "mean: 326.33886019198144 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 913427.655838017,
            "unit": "iter/sec",
            "range": "stddev: 6.311112691842059e-7",
            "extra": "mean: 1.0947774501994445 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 678185.2727927631,
            "unit": "iter/sec",
            "range": "stddev: 6.49944508911756e-7",
            "extra": "mean: 1.4745233199801078 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 731890.8788231777,
            "unit": "iter/sec",
            "range": "stddev: 5.948893710524546e-7",
            "extra": "mean: 1.366323900098223 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3844393.5584937874,
            "unit": "iter/sec",
            "range": "stddev: 2.6235450685751964e-7",
            "extra": "mean: 260.11904993197277 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1286165.8919668158,
            "unit": "iter/sec",
            "range": "stddev: 3.809405000891924e-7",
            "extra": "mean: 777.5046797974028 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2587564.1408105725,
            "unit": "iter/sec",
            "range": "stddev: 2.950284761990489e-7",
            "extra": "mean: 386.4638500078854 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 4377201.294065318,
            "unit": "iter/sec",
            "range": "stddev: 2.1157723613895064e-7",
            "extra": "mean: 228.45648002430607 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1422353.6910106614,
            "unit": "iter/sec",
            "range": "stddev: 3.911745696187157e-7",
            "extra": "mean: 703.0600098414652 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 711945.2197366108,
            "unit": "iter/sec",
            "range": "stddev: 4.7402252252363735e-7",
            "extra": "mean: 1.4046024501294596 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 830408.7236528682,
            "unit": "iter/sec",
            "range": "stddev: 5.327139144560017e-7",
            "extra": "mean: 1.2042262701686468 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 7014017.6546119405,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 142.57163999900513 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 4009018.3670301284,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 249.43761999793423 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 7765700.732556552,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 128.7713800002166 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 10590443.713099338,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 94.42475000014383 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 4718095.448273516,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 211.94993000108298 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 4872040.722488529,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 205.25279999901613 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 53430.77139760619,
            "unit": "iter/sec",
            "range": "stddev: 0.00009406122472376822",
            "extra": "mean: 18.71580690008159 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 17861.44309526503,
            "unit": "iter/sec",
            "range": "stddev: 0.00009134778649234051",
            "extra": "mean: 55.9865176999665 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 5.13531916221278,
            "unit": "iter/sec",
            "range": "stddev: 0.159456634647819",
            "extra": "mean: 194.72986359996867 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 2250522.4419094487,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 444.3412699993132 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1902765.7042065896,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 525.5507799984116 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 7156782.196157082,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 139.7276000011516 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2565725.8791358415,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 389.753249999103 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2749331.589378359,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 363.7247699998625 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 349861.22177370486,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.858276189999742 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 71214.56504775089,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 14.042071300013959 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 61264.92326993528,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 16.322553700001663 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.3728947548011856,
            "unit": "iter/sec",
            "range": "stddev: 0.003605299050352516",
            "extra": "mean: 296.4812342800019 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 10767539.271551235,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 92.871730000752 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 5123144.512294065,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 195.19262000130766 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 267488.4410888596,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.738479300000108 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_mean",
            "value": 169559.65679261356,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.897629300011431 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_std",
            "value": 56188.07722716024,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 17.79736999999386 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_mean",
            "value": 2169618.378228211,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 460.9105500003352 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_std",
            "value": 1229091.4792989367,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 813.609090000682 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 101786.55620957294,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.82448014000056 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}