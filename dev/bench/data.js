window.BENCHMARK_DATA = {
  "lastUpdate": 1631452507264,
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
          "id": "ebbf4719cdea888800757c9c4035b7c1213f2edf",
          "message": "Update release notes",
          "timestamp": "2021-09-12T22:55:11+10:00",
          "tree_id": "3f42c8813c7aa8901be0e1d6dbda6cd708567c5e",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/ebbf4719cdea888800757c9c4035b7c1213f2edf"
        },
        "date": 1631452502203,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 2178577.852259806,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 459.0150400008497 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1876623.1382653608,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 532.8720400007114 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 6155323.052597693,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 162.46100999978808 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 1808622.262998621,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 552.9070500006128 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2131114.519188706,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 469.2380400001639 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 313982.8546774348,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.1848872799992023 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 51183.80017165746,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 19.537431699995977 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 42485.42813546101,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 23.537481999983356 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.235489828991484,
            "unit": "iter/sec",
            "range": "stddev: 0.006388638120602847",
            "extra": "mean: 309.0722125100001 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 9238732.165090201,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 108.2399599999917 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 4727621.849256895,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 211.52283999981591 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 225960.59464192155,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.425550399992062 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_mean",
            "value": 133121.2906418785,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.511946399995395 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_std",
            "value": 37303.23457688818,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 26.807326800008013 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_mean",
            "value": 1866654.665324025,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 535.7177299993054 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_std",
            "value": 1106871.3020802187,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 903.4474000009141 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 97579.34175547457,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.248070769998776 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 0.26507888851633915,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.7724618719998944 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 0.6693945211887943,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.493887339000139 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 0.24212059221017335,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.130173278000029 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 6148160.335203332,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 162.65027999907034 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 5867742.607209475,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 170.42329000105383 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 5424837.466459801,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 184.33731999948577 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 6853856.452574459,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 145.9032599996135 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 183.84346831706083,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.439410000008138 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 11039457.671166891,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 90.58416000016223 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 11453159.726472093,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 87.3121499989793 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 5139476.659392529,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 194.57234000128665 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 8668801.503588958,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 115.35619999904156 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2764671.5420462056,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012603596005387848",
            "extra": "mean: 361.70662040376556 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 871854.0162296592,
            "unit": "iter/sec",
            "range": "stddev: 0.0000055841212560101666",
            "extra": "mean: 1.1469810098765265 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 644179.8096272931,
            "unit": "iter/sec",
            "range": "stddev: 0.0000027183908160053365",
            "extra": "mean: 1.5523616000609763 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 653308.0544406214,
            "unit": "iter/sec",
            "range": "stddev: 0.000002710974863755787",
            "extra": "mean: 1.5306714699181612 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3703916.330251742,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010350294217039366",
            "extra": "mean: 269.9845004144663 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1264172.6393572215,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017768579994112704",
            "extra": "mean: 791.0312000649355 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2502236.1247433987,
            "unit": "iter/sec",
            "range": "stddev: 0.000001960139924091955",
            "extra": "mean: 399.642539771321 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 4025627.132452821,
            "unit": "iter/sec",
            "range": "stddev: 0.0000028049798837676823",
            "extra": "mean: 248.40850061309536 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1463611.9073906266,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018504359214678697",
            "extra": "mean: 683.2412301037039 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 729897.4863859056,
            "unit": "iter/sec",
            "range": "stddev: 0.000002611981869776115",
            "extra": "mean: 1.3700554100432782 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 760681.6495699662,
            "unit": "iter/sec",
            "range": "stddev: 0.0000029464009385658435",
            "extra": "mean: 1.3146103899907757 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 6065116.669450382,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 164.87729000118634 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 3293172.7621898116,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 303.65852999921117 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 7437917.746034034,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 134.44622999941203 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 10773637.68433079,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 92.8191599996353 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 5128127.285880394,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 195.0029599993286 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 4994729.311933152,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 200.21104999841555 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 78797.75864093017,
            "unit": "iter/sec",
            "range": "stddev: 0.00005449184284371199",
            "extra": "mean: 12.690716300153325 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 11208.513077276946,
            "unit": "iter/sec",
            "range": "stddev: 0.0001542347359370256",
            "extra": "mean: 89.21790010017503 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 3.66419570774106,
            "unit": "iter/sec",
            "range": "stddev: 0.21878347884814717",
            "extra": "mean: 272.91118700002244 msec\nrounds: 10"
          }
        ]
      }
    ]
  }
}