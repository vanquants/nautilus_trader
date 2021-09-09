window.BENCHMARK_DATA = {
  "lastUpdate": 1631178426117,
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
          "id": "7cd6d6145e380c24fb51b7be3694a73b390de2c8",
          "message": "Refine and standardize docs\n\n- Emphasize ``None``.",
          "timestamp": "2021-09-09T18:46:16+10:00",
          "tree_id": "a022bfd7e60528a86d7f37d0519f43d429dff3d8",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/7cd6d6145e380c24fb51b7be3694a73b390de2c8"
        },
        "date": 1631178404822,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 0.2706825983655207,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.6943638270001884 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 0.6688758910503245,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.495045662999928 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 0.2584848849945168,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.868698163999852 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 6185755.516478059,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 161.6617399986353 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 5378132.17038878,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 185.93816000020524 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 6168317.976809366,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 162.1187499995358 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 7301064.429547497,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 136.9663299988133 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 158.18011875142528,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.321907000028659 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 9870526.331996705,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 101.31172000001243 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 9997031.881264336,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 100.02968999970108 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 5096389.80406976,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 196.21733000121822 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 8782798.151968278,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 113.8589300012427 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2596563.1990501885,
            "unit": "iter/sec",
            "range": "stddev: 7.491969657166305e-8",
            "extra": "mean: 385.12446004233425 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 798004.7326683074,
            "unit": "iter/sec",
            "range": "stddev: 1.686070681126318e-7",
            "extra": "mean: 1.253125400216959 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 608542.1414566869,
            "unit": "iter/sec",
            "range": "stddev: 2.3422602640955214e-7",
            "extra": "mean: 1.643271569666922 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 602428.8075004133,
            "unit": "iter/sec",
            "range": "stddev: 1.806130501439793e-7",
            "extra": "mean: 1.659947179732626 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3581305.5590642854,
            "unit": "iter/sec",
            "range": "stddev: 9.240745125308588e-8",
            "extra": "mean: 279.22777978801605 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1168794.3866130866,
            "unit": "iter/sec",
            "range": "stddev: 1.5326257609057046e-7",
            "extra": "mean: 855.582480078283 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2356741.130842133,
            "unit": "iter/sec",
            "range": "stddev: 5.828980319507502e-8",
            "extra": "mean: 424.3147399233749 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 3974765.6437227633,
            "unit": "iter/sec",
            "range": "stddev: 1.794116359876754e-7",
            "extra": "mean: 251.5871600076025 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1217517.7671029242,
            "unit": "iter/sec",
            "range": "stddev: 1.1170929509919948e-7",
            "extra": "mean: 821.3432501929674 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 662999.5938710378,
            "unit": "iter/sec",
            "range": "stddev: 2.07501169779784e-7",
            "extra": "mean: 1.5082965498686463 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 735277.2656660639,
            "unit": "iter/sec",
            "range": "stddev: 3.89960442320205e-7",
            "extra": "mean: 1.3600311701384271 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 6448175.401760675,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 155.0826299990149 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 3845792.7853517034,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 260.0244100017335 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 7149579.279459283,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 139.86836999947627 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 9967734.443742596,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 100.32369999862567 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 4385582.71262005,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 228.0198699986613 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 4508794.7648928845,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 221.78875999998127 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 69553.73364640915,
            "unit": "iter/sec",
            "range": "stddev: 0.00006858462322930344",
            "extra": "mean: 14.377373400020588 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 14290.04159612739,
            "unit": "iter/sec",
            "range": "stddev: 0.00015418068189875433",
            "extra": "mean: 69.97880259991689 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 4.599892305481342,
            "unit": "iter/sec",
            "range": "stddev: 0.17665347515915028",
            "extra": "mean: 217.39639400000215 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 1921503.5073190993,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 520.4258000003392 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1625806.3593102251,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 615.0793999995585 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 6419777.846164445,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 155.76862999978403 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2164999.8332956186,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 461.8937999998707 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2209565.585050628,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 452.5776499986023 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 308504.3119247008,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.2414457799995944 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 64225.4850937572,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 15.570143200011444 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 56537.90479230057,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 17.687249000005068 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 2.9290957997935023,
            "unit": "iter/sec",
            "range": "stddev: 0.0006447865350657915",
            "extra": "mean: 341.402285329998 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 9548565.77208818,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 104.72776999904454 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 4332776.282736255,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 230.79889999962688 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 225681.9363364565,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.431014800002231 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_mean",
            "value": 132095.19799747757,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.570297899997058 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_std",
            "value": 43912.23845809147,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 22.77269470000647 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_mean",
            "value": 1857458.3146011333,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 538.3700899983523 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_std",
            "value": 1051439.5121684128,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 951.0770599990792 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 87797.38878590307,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.389860379999845 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}