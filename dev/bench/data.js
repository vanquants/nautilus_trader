window.BENCHMARK_DATA = {
  "lastUpdate": 1633159296798,
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
          "id": "4c33a813b3badcb303bc699e6842c56afc6ed95d",
          "message": "Resolve data class path (#451)",
          "timestamp": "2021-10-02T16:27:36+10:00",
          "tree_id": "2afd92f51e68836994c6ca0c537ed218deb29aa0",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/4c33a813b3badcb303bc699e6842c56afc6ed95d"
        },
        "date": 1633159287024,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 2.2939098199083823,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 435.93692800004646 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 7.404242559917525,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 135.05770399979156 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 0.9181987486899073,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.0890888290000476 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 5858957.091586176,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 170.67883999970945 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 5170660.493424567,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 193.39889000093535 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 6311526.336722645,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 158.440279997194 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 7559946.406106538,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 132.27606999862473 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 179.27392625340457,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.57805600010397 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 9276528.20342923,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 107.7989500026888 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 9571869.424079118,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 104.47280000335013 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 4409862.887676698,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 226.76441999919916 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 8431955.594140138,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 118.59644999731245 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2432932.388585879,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017745627801700806",
            "extra": "mean: 411.0266297129783 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 773241.2079901122,
            "unit": "iter/sec",
            "range": "stddev: 0.0000030762544542545027",
            "extra": "mean: 1.2932575109380195 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 570694.0393554813,
            "unit": "iter/sec",
            "range": "stddev: 0.000006113411616779517",
            "extra": "mean: 1.7522523997786266 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 572217.823564669,
            "unit": "iter/sec",
            "range": "stddev: 0.0000048956974383888896",
            "extra": "mean: 1.7475862491846783 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3383116.9205849417,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016968948282136851",
            "extra": "mean: 295.5854093943344 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1088008.4953290636,
            "unit": "iter/sec",
            "range": "stddev: 0.000003182803139436897",
            "extra": "mean: 919.1104704541431 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2273110.9631160186,
            "unit": "iter/sec",
            "range": "stddev: 0.000002408879524189223",
            "extra": "mean: 439.92573007926694 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 3698210.3674354395,
            "unit": "iter/sec",
            "range": "stddev: 0.000002857100337265783",
            "extra": "mean: 270.4010590650796 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1192997.7608610804,
            "unit": "iter/sec",
            "range": "stddev: 0.000002527814397973956",
            "extra": "mean: 838.2245405709909 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 552630.9528171156,
            "unit": "iter/sec",
            "range": "stddev: 0.000011115102689578091",
            "extra": "mean: 1.8095258597122665 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 740137.079583583,
            "unit": "iter/sec",
            "range": "stddev: 0.000003269327585147366",
            "extra": "mean: 1.3511010697675374 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 6036948.175451363,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 165.64660999847547 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 3516371.487196835,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 284.3840600007752 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 6569094.1592795355,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 152.2279900018475 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 10604529.215789063,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 94.29932999864832 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 4267599.484240622,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 234.32377000062843 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 4252915.79909699,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 235.1327999986097 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 67813.30971448154,
            "unit": "iter/sec",
            "range": "stddev: 0.00006477568999229857",
            "extra": "mean: 14.74636769994504 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 6948.07765695438,
            "unit": "iter/sec",
            "range": "stddev: 0.00018733596025937213",
            "extra": "mean: 143.92470110046816 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 3.0417091316877314,
            "unit": "iter/sec",
            "range": "stddev: 0.24912656807066663",
            "extra": "mean: 328.76253340014046 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 1762906.4319041066,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 567.2450800011575 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1512382.4803155484,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 661.2084000016694 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 5957000.464456211,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 167.86971999863454 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2008718.3195970024,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 497.8298800006087 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2012806.1571186075,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 496.81883000175736 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 180080.26742976875,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.553079269998307 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 22602.034954322662,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 44.24380380000912 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 20746.162367626155,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 48.201685799995175 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 2.842658787044321,
            "unit": "iter/sec",
            "range": "stddev: 0.003082044372539136",
            "extra": "mean: 351.78333909000685 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 9002421.021281283,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 111.08122999758052 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 3903062.295796114,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 256.2090800029182 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 195062.51519571373,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.126561599990964 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_mean",
            "value": 98321.26855970437,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.170739400018647 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_std",
            "value": 33754.708777691274,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 29.62549629996829 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_mean",
            "value": 1789304.5572574113,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 558.8763500009009 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_std",
            "value": 989480.2026963015,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.0106316400015203 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 86054.96717484534,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.620479709999927 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}