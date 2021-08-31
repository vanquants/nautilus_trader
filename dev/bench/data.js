window.BENCHMARK_DATA = {
  "lastUpdate": 1630441053397,
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
          "id": "077c5890bfbc6ae49d7e2a75438852f2218486ff",
          "message": "Update README",
          "timestamp": "2021-09-01T05:43:36+10:00",
          "tree_id": "4fe32038cddd09973742410b8f07a7bd993f4ab4",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/077c5890bfbc6ae49d7e2a75438852f2218486ff"
        },
        "date": 1630441043553,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 0.3092538410964569,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.2335895859999937 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 0.767659916192364,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.3026601740000388 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 0.294792592994965,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.392215489000023 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 7346801.73512015,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 136.11365000087972 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 6682084.016367032,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 149.6539100003247 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 7431815.1398086175,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 134.55663000058848 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 8827199.709509235,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 113.28620999961458 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 195.41940815299745,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.117199000096662 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 11930947.493742643,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 83.81564000046637 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 11866950.12859462,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 84.26764999967418 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 6178019.890265363,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 161.86415999982273 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 10781344.521952432,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 92.75281000100222 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2741789.880739435,
            "unit": "iter/sec",
            "range": "stddev: 6.905730197299077e-8",
            "extra": "mean: 364.72525010935897 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 923307.4516053904,
            "unit": "iter/sec",
            "range": "stddev: 2.0994635182638834e-7",
            "extra": "mean: 1.0830628500411876 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 729507.3595488361,
            "unit": "iter/sec",
            "range": "stddev: 1.3794297265588396e-7",
            "extra": "mean: 1.3707880899494285 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 724114.5450957406,
            "unit": "iter/sec",
            "range": "stddev: 1.2953142488874813e-7",
            "extra": "mean: 1.3809969800672661 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 4276338.165573032,
            "unit": "iter/sec",
            "range": "stddev: 7.015003847128406e-8",
            "extra": "mean: 233.84493023741015 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1373761.5795828796,
            "unit": "iter/sec",
            "range": "stddev: 1.0466817656755787e-7",
            "extra": "mean: 727.9283500588463 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2826736.6209515356,
            "unit": "iter/sec",
            "range": "stddev: 7.924861303754227e-8",
            "extra": "mean: 353.76482994138314 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 4954356.504816549,
            "unit": "iter/sec",
            "range": "stddev: 4.681506675951304e-8",
            "extra": "mean: 201.8425599828788 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1443127.3676761242,
            "unit": "iter/sec",
            "range": "stddev: 9.365871560661608e-8",
            "extra": "mean: 692.9395300778651 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 790995.9601720867,
            "unit": "iter/sec",
            "range": "stddev: 1.0433158907110608e-7",
            "extra": "mean: 1.2642289598829848 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 904959.7678488675,
            "unit": "iter/sec",
            "range": "stddev: 2.545580916715224e-7",
            "extra": "mean: 1.1050214998806496 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 7711436.206412536,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 129.67752999998083 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 4587403.220123703,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 217.9882500001895 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 8633546.196271228,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 115.82726000028742 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 11834788.716395356,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 84.49665000057394 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 5413669.298428465,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 184.71760000011272 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 5565372.253846802,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 179.68249999967156 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_mean",
            "value": 160314.17474214398,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.237751599996955 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_std",
            "value": 53197.41351620692,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 18.79790640000465 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_mean",
            "value": 2306680.2960768077,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 433.52344999902925 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_std",
            "value": 1280716.0206636423,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 780.8132200000273 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 79729.6565077302,
            "unit": "iter/sec",
            "range": "stddev: 0.00006203816840694811",
            "extra": "mean: 12.542384400001081 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 16137.791486884633,
            "unit": "iter/sec",
            "range": "stddev: 0.00013925242273032587",
            "extra": "mean: 61.966347799989315 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 5.2916882463696115,
            "unit": "iter/sec",
            "range": "stddev: 0.15332184619871173",
            "extra": "mean: 188.97560730000578 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 2309508.9852228756,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 432.99247000049945 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1956330.7459601904,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 511.16101000047826 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 7679574.367323752,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 130.21554999909313 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2687187.6077213543,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 372.13628000017707 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2681121.1268818495,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 372.9783000005682 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 357033.73105795996,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.8008558100009395 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 70278.37348066478,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 14.22912840000663 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 61607.129413597715,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 16.231887599997208 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.4949366656830496,
            "unit": "iter/sec",
            "range": "stddev: 0.00022283921551836036",
            "extra": "mean: 286.1282179499983 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 11435143.695806965,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 87.4497099994187 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 5300212.236389611,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 188.67169000031936 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 296889.5564021817,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.3682558999998946 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 108536.87829366873,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.213458279998576 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}