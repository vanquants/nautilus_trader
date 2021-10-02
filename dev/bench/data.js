window.BENCHMARK_DATA = {
  "lastUpdate": 1633159326043,
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
      },
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
        "date": 1633159315733,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 85875.65527148316,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.644743750002817 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 2.37843980846463,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 420.4436859999987 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 7.027953071908612,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 142.28894100006073 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 1.0206172325398115,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 979.7992509998039 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 6278924.256983575,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 159.26295000099344 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 7038741.585535134,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 142.07085000180086 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 7112181.288930068,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 140.60384000003978 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 9064978.308350328,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 110.31466000076762 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 167.23149102809873,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.979734999982611 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 13338410.821918009,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 74.97144999888405 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 13827733.816006511,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 72.31842999772198 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 6471573.32301102,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 154.5219299987366 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 11417542.734504875,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 87.58452000165562 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2529332.864808702,
            "unit": "iter/sec",
            "range": "stddev: 0.000015997608675139475",
            "extra": "mean: 395.3611697033921 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 906833.1249330903,
            "unit": "iter/sec",
            "range": "stddev: 0.000004499593152599115",
            "extra": "mean: 1.1027387206149797 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 711075.3764707474,
            "unit": "iter/sec",
            "range": "stddev: 0.000004010223214162032",
            "extra": "mean: 1.406320670198511 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 698516.9535942482,
            "unit": "iter/sec",
            "range": "stddev: 0.000004550902152335847",
            "extra": "mean: 1.4316044798260918 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3773149.630663081,
            "unit": "iter/sec",
            "range": "stddev: 5.616750477033641e-7",
            "extra": "mean: 265.0305707129519 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1252205.9006045754,
            "unit": "iter/sec",
            "range": "stddev: 0.000001423805135151428",
            "extra": "mean: 798.590710614917 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2324973.8165769377,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012908071752008566",
            "extra": "mean: 430.1123706727594 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 3970941.137024991,
            "unit": "iter/sec",
            "range": "stddev: 0.000004091280631654264",
            "extra": "mean: 251.82946951190385 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1179801.7354672921,
            "unit": "iter/sec",
            "range": "stddev: 0.0000030459219301561137",
            "extra": "mean: 847.6000415475937 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 728122.0136843399,
            "unit": "iter/sec",
            "range": "stddev: 0.000007036486560225969",
            "extra": "mean: 1.3733961907564662 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 759087.1979654763,
            "unit": "iter/sec",
            "range": "stddev: 0.00000309603099135752",
            "extra": "mean: 1.3173717099698479 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 7287045.920611723,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 137.2298199976285 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 3789478.26345902,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 263.88857000256394 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 8547249.623374345,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 116.99669999870821 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 14770086.61655896,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 67.7044099984414 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 4997646.108694998,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 200.09419999951206 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 4740027.05424581,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 210.96925999700034 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 69399.21013505931,
            "unit": "iter/sec",
            "range": "stddev: 0.00006263258513168657",
            "extra": "mean: 14.409385900125926 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 7798.392482582591,
            "unit": "iter/sec",
            "range": "stddev: 0.00013923443334831295",
            "extra": "mean: 128.23155569990377 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 2.955338945924348,
            "unit": "iter/sec",
            "range": "stddev: 0.26381517113122793",
            "extra": "mean: 338.37066350006353 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 2090235.858228525,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 478.4149100032664 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1778990.9072538514,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 562.1164200010753 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 7729839.631407391,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 129.3687899988072 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2122723.7449626094,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 471.0928599979525 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2227743.4616218912,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 448.88471999911417 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 223177.26220053036,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.480743200001598 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 25451.420131231425,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 39.29053839997323 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 21211.157653498867,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 47.144998700014185 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 2.952732001169976,
            "unit": "iter/sec",
            "range": "stddev: 0.0029104985008715652",
            "extra": "mean: 338.6694084000055 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 12164045.780892089,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 82.2094900013326 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 4400433.266591908,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 227.25035000348726 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 224736.45380834665,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.4496563999928185 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_mean",
            "value": 115849.7360342398,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.631871199986563 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_std",
            "value": 37131.35108137385,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 26.93141969998578 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_mean",
            "value": 1746135.0479367736,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 572.6933899995856 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_std",
            "value": 1057944.0169860644,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 945.2296000017668 nsec\nrounds: 1"
          }
        ]
      }
    ]
  }
}