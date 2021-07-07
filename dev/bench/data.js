window.BENCHMARK_DATA = {
  "lastUpdate": 1625698854065,
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
          "id": "9fe0ca206ed90e9322c4c6baa3eb0c97b9d32309",
          "message": "Fix pre-commit",
          "timestamp": "2021-07-08T08:46:18+10:00",
          "tree_id": "2b51bf4de43b4bf5648a3abebeb29ada147d33fa",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/9fe0ca206ed90e9322c4c6baa3eb0c97b9d32309"
        },
        "date": 1625698852286,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 8457650.934789743,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 118.23614000036287 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 7818324.651879721,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 127.90463999976963 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 7782060.591563514,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 128.50067000044874 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 9406672.265520388,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 106.30751999997301 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 235.11592743481424,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.25322099999903 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 13048701.145299371,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 76.6359800002192 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 13058074.349298082,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 76.58096999989539 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 6966676.85195113,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 143.54045999994014 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 12685348.80274789,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 78.83109999966109 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 3506647.2697100244,
            "unit": "iter/sec",
            "range": "stddev: 2.03278076667384e-7",
            "extra": "mean: 285.17268008044994 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 1166369.4846986094,
            "unit": "iter/sec",
            "range": "stddev: 3.417171094088264e-7",
            "extra": "mean: 857.3612505460915 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 890312.8670698358,
            "unit": "iter/sec",
            "range": "stddev: 4.4608136438753325e-7",
            "extra": "mean: 1.1232006601130706 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 846864.5421507725,
            "unit": "iter/sec",
            "range": "stddev: 4.0560402025518265e-7",
            "extra": "mean: 1.1808263898501536 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 4568249.488186393,
            "unit": "iter/sec",
            "range": "stddev: 1.9642392096034223e-7",
            "extra": "mean: 218.90222996489683 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1523767.5431444633,
            "unit": "iter/sec",
            "range": "stddev: 3.080196128854393e-7",
            "extra": "mean: 656.2680800618637 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 3107515.756868171,
            "unit": "iter/sec",
            "range": "stddev: 1.9376362862522743e-7",
            "extra": "mean: 321.80045999439244 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 5199618.826058927,
            "unit": "iter/sec",
            "range": "stddev: 1.691372903809915e-7",
            "extra": "mean: 192.32179001051009 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1682909.2935132755,
            "unit": "iter/sec",
            "range": "stddev: 3.186709714420076e-7",
            "extra": "mean: 594.2090900884978 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 925613.5656536183,
            "unit": "iter/sec",
            "range": "stddev: 4.434591373458956e-7",
            "extra": "mean: 1.080364459971861 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 1040401.3429505795,
            "unit": "iter/sec",
            "range": "stddev: 4.501505102959224e-7",
            "extra": "mean: 961.1675405608366 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 8551755.13654796,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 116.9350600002872 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 5111425.4978488535,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 195.64014000025054 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 9429647.755463868,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 106.04850000049737 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 13967707.498215046,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 71.59371000057035 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 5956930.203269492,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 167.87169999929574 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 6161451.470376691,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 162.2994199999539 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_mean",
            "value": 180585.69756590403,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.537537099996825 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_std",
            "value": 53248.83467453179,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 18.77975370000513 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_mean",
            "value": 2532527.273799037,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 394.8624800000289 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_std",
            "value": 1420544.3383838658,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 703.9555000005748 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 1837666.765976052,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 544.1682999958175 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 22353.127351721985,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 44.736469500003295 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 2491579.7063827193,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 401.3517999999294 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 2018996.0065863836,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 495.2956800002539 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 8436885.55742136,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 118.52715000031822 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 3054983.874724425,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 327.3339700001543 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2904757.222570327,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 344.26284999995005 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 398770.3485630094,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.507709019999993 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 82640.41138921706,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 12.10061740000583 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 71104.9464070715,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 14.063719199998559 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 13503506.320341919,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 74.05484000059914 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 5734634.162466836,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 174.37903999962145 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 115576.8917690259,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.652248599992163 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 117566.14551447805,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.505850010000131 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}