window.BENCHMARK_DATA = {
  "lastUpdate": 1632212809750,
  "repoUrl": "https://github.com/nautechsystems/nautilus_trader",
  "entries": {
    "Benchmark with pytest-benchmark": [
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
          "id": "7a9480b38eb0063dfa6a219d8ac3b101d0bf27ab",
          "message": "Parquet cleanup, add `validate_data_catalog` (#440)\n\n* Remove metadata from parquet\r\n\r\n* Remove validate\r\n\r\n* Add validation tests\r\n\r\n* Remove test for old functionality\r\n\r\n* Fix _parse_start_from_data",
          "timestamp": "2021-09-21T18:06:16+10:00",
          "tree_id": "343eca678943f4d1661c583d3cdad2286ebfa06b",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/7a9480b38eb0063dfa6a219d8ac3b101d0bf27ab"
        },
        "date": 1632212803683,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 83569.73568018935,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.966054360000271 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 2.6707502081247707,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 374.4266300000163 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 2.6627688204597506,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 375.5489369998486 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 1.8346378795052707,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 545.0666920000913 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 6204666.765639404,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 161.16901000032158 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 5231105.260860064,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 191.1641900005634 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 6010227.96553342,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 166.38304000025528 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 6829019.316662202,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 146.43390999935946 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 150.67180035882728,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.636941999886403 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 9649097.076188145,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 103.63663999896744 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 9335005.046040073,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 107.12366999996448 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 4705365.980564087,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 212.52331999903618 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 8827082.831782006,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 113.28771000080451 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2470241.8623750084,
            "unit": "iter/sec",
            "range": "stddev: 8.28722671632596e-7",
            "extra": "mean: 404.81865975607434 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 784310.446978324,
            "unit": "iter/sec",
            "range": "stddev: 0.000011858838353756447",
            "extra": "mean: 1.2750053296531405 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 589977.9571061812,
            "unit": "iter/sec",
            "range": "stddev: 0.000012726612280765525",
            "extra": "mean: 1.6949785800557038 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 649801.8523553605,
            "unit": "iter/sec",
            "range": "stddev: 0.000008470618793849045",
            "extra": "mean: 1.5389306699808003 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3261207.384218821,
            "unit": "iter/sec",
            "range": "stddev: 0.000005867086511903508",
            "extra": "mean: 306.6348999573165 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1020624.3695096818,
            "unit": "iter/sec",
            "range": "stddev: 0.0000098539323446589",
            "extra": "mean: 979.7923995097336 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2332438.112438299,
            "unit": "iter/sec",
            "range": "stddev: 0.00000199502604714987",
            "extra": "mean: 428.73592000887584 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 4070410.7789079538,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010012027150680862",
            "extra": "mean: 245.67545005083957 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 956622.5159875418,
            "unit": "iter/sec",
            "range": "stddev: 0.000006313427242780617",
            "extra": "mean: 1.0453444104518894 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 552932.5846985355,
            "unit": "iter/sec",
            "range": "stddev: 0.00000489886724936766",
            "extra": "mean: 1.8085387399355568 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 785828.180055825,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017485223099068796",
            "extra": "mean: 1.2725428094586277 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 6015867.693213703,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 166.22706000134713 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 3735766.263558366,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 267.6827000004778 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 7019026.474980107,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 142.46990000174264 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 11576948.212006465,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 86.3785500018821 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 4496718.092803901,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 222.38440999899467 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 4719600.287622655,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 211.88234999954147 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 65255.845297046966,
            "unit": "iter/sec",
            "range": "stddev: 0.0000708856671741174",
            "extra": "mean: 15.324297700044555 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 11083.282957972344,
            "unit": "iter/sec",
            "range": "stddev: 0.00013163566445091777",
            "extra": "mean: 90.22597399994083 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 3.8916233670190072,
            "unit": "iter/sec",
            "range": "stddev: 0.18549771497761064",
            "extra": "mean: 256.9621737999796 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 1786612.0901930688,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 559.7185900001023 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1558554.6406889914,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 641.6201100000762 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 5820786.143729578,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 171.79810000016005 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2053286.395753386,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 487.02412000011464 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2022534.3905235417,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 494.42916999851144 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 272305.3828188447,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.6723475299982056 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 45878.65272528485,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 21.796629599998596 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 39151.80940654386,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.54160370000318 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 2.7771433888191974,
            "unit": "iter/sec",
            "range": "stddev: 0.0032450459492479964",
            "extra": "mean: 360.08223558999816 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 10337026.33927895,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 96.73962000078973 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 4224712.277006502,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 236.7025100011233 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 210600.78866123155,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.748320300018349 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_mean",
            "value": 125177.73517206631,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.98864109999613 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_std",
            "value": 39247.1564915219,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.479552899992086 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_mean",
            "value": 1715440.29382373,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 582.9407200008063 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_std",
            "value": 1030578.0759772531,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 970.329199999469 nsec\nrounds: 1"
          }
        ]
      }
    ]
  }
}