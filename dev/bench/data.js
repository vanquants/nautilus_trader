window.BENCHMARK_DATA = {
  "lastUpdate": 1630488874178,
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
          "id": "4a324e030a2f35dc25d48b03116ddcaf9f58d34c",
          "message": "Backtest config fixes\n\n* Remove progress from RawFile - not implemented properly\r\n\r\n* Clean up persistence\r\n\r\n* Allow singleton to take dict, add fs_storage_options to DataCatalog\r\n\r\n* Fix kwargs\r\n\r\n* Remove asset_class from equity\r\n\r\n* Check we're not splitting a block in csvreader\r\n\r\n* Fix broken tests\r\n\r\n* Fix progress\r\n\r\n* Skip old progress test",
          "timestamp": "2021-09-01T19:11:49+10:00",
          "tree_id": "4b566de43a9ca501d5e4704980680c9092ba4061",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/4a324e030a2f35dc25d48b03116ddcaf9f58d34c"
        },
        "date": 1630488863560,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 0.22821890422906288,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.381757959000197 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 0.5752198705765007,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.7384656740000537 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 0.2150934165829216,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.649142758000153 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 6132227.504656541,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 163.07288000007247 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 5963638.38481134,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 167.6828699987709 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 6135990.233454831,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 162.97288000032495 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 7260534.8546350775,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 137.73089999858712 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 179.8788911401321,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.559296000001268 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 9377703.122812513,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 106.63592000128119 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 9281870.066679481,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 107.736909999403 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 4899562.640537343,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 204.09985000014785 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 8834787.78974318,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 113.18890999973519 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2656073.255788114,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011561329462319755",
            "extra": "mean: 376.49563987770307 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 820377.5210885426,
            "unit": "iter/sec",
            "range": "stddev: 0.000002108124171834157",
            "extra": "mean: 1.218951000355446 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 662093.4548056381,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019050718323197792",
            "extra": "mean: 1.510360799886712 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 640325.0678958312,
            "unit": "iter/sec",
            "range": "stddev: 0.000005371754244944335",
            "extra": "mean: 1.561706780098575 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3179986.3336967234,
            "unit": "iter/sec",
            "range": "stddev: 8.194487072999782e-7",
            "extra": "mean: 314.46676025097986 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1049701.927252769,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017337299214546752",
            "extra": "mean: 952.6513899209021 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2242757.859117251,
            "unit": "iter/sec",
            "range": "stddev: 9.823754427044286e-7",
            "extra": "mean: 445.8796102017004 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 3636948.326867412,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011221043833464182",
            "extra": "mean: 274.9557898891908 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1160855.9015503542,
            "unit": "iter/sec",
            "range": "stddev: 0.0000028291086915957573",
            "extra": "mean: 861.433360216779 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 631471.5334111168,
            "unit": "iter/sec",
            "range": "stddev: 0.00000261767739159914",
            "extra": "mean: 1.583602659961798 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 635716.2652038634,
            "unit": "iter/sec",
            "range": "stddev: 0.000002264539279434642",
            "extra": "mean: 1.573028809762036 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 5943894.274224715,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 168.2398700017984 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 3343835.428719176,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 299.0577800005667 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 5895431.435686194,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 169.62286999842036 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 9322973.14835191,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 107.26191999992807 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 4130800.645848123,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 242.0838199986974 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 4606239.529169503,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 217.09682999926372 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_mean",
            "value": 122931.01115331156,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.134643900007177 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_std",
            "value": 33184.77890517738,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 30.13429749998977 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_mean",
            "value": 1767600.859036986,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 565.7385800009251 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_std",
            "value": 1004952.1529715558,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 995.0722500002486 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 49591.576176480026,
            "unit": "iter/sec",
            "range": "stddev: 0.00011063200991806541",
            "extra": "mean: 20.164715000009892 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 10649.80195837044,
            "unit": "iter/sec",
            "range": "stddev: 0.00014532923515056314",
            "extra": "mean: 93.89845969990347 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 3.772251068999291,
            "unit": "iter/sec",
            "range": "stddev: 0.19820023944832488",
            "extra": "mean: 265.09370179999223 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 1866338.091624128,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 535.8086000001094 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1325628.0056628054,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 754.3594399999165 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 5643313.469228969,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 177.20086000053925 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2122922.9719718485,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 471.0486499993749 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2109038.8258051677,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 474.1496399992684 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 268331.6668059052,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.7267312199992375 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 45419.152373633784,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 22.01714359998732 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 35628.447749303916,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 28.067459099997905 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 2.9675505224405088,
            "unit": "iter/sec",
            "range": "stddev: 0.004167268708835818",
            "extra": "mean: 336.9782561200009 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 10158995.38930728,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 98.4349299983478 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 4369830.654229429,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 228.84181999870634 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 248049.27846207737,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.031456999996408 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 88527.59565257677,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.295912790001239 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}