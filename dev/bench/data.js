window.BENCHMARK_DATA = {
  "lastUpdate": 1628286140550,
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
          "id": "9da28820192a4179fbba346aa9cec48715c7b5d3",
          "message": "Light refactoring for clarity",
          "timestamp": "2021-08-07T07:21:27+10:00",
          "tree_id": "e4247c6944e7fab8c58f45ba8b3b9bbff36717ef",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/9da28820192a4179fbba346aa9cec48715c7b5d3"
        },
        "date": 1628286136685,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 0.2456416336751133,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.070971134000047 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 0.30736282656387565,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.253483875000029 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 0.09250478312955716,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.810251818000097 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 6172847.126967827,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 161.99980000010328 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 5873373.934443863,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 170.25988999876063 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 6010018.099162171,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 166.3888500002031 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 6778436.76230419,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 147.5266400007058 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 159.4853090138197,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.270169999879727 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 9565610.330039993,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 104.54115999891656 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 8636228.911197139,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 115.79127999993943 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 4773330.524080105,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 209.49732999952175 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 9054016.443341514,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 110.44821999803389 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2571953.9498004233,
            "unit": "iter/sec",
            "range": "stddev: 0.0000059223047185469686",
            "extra": "mean: 388.80944974835074 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 779299.0675537087,
            "unit": "iter/sec",
            "range": "stddev: 0.000004539579983245026",
            "extra": "mean: 1.2832044097513062 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 666761.0489349135,
            "unit": "iter/sec",
            "range": "stddev: 0.000006759571658968362",
            "extra": "mean: 1.4997876699567314 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 649466.5496447987,
            "unit": "iter/sec",
            "range": "stddev: 0.000009402370182394825",
            "extra": "mean: 1.5397251799140577 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3453151.7150380844,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014467143803010725",
            "extra": "mean: 289.59051976926276 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1159047.1913367824,
            "unit": "iter/sec",
            "range": "stddev: 0.000003357176669067576",
            "extra": "mean: 862.7776396633635 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2557038.9089079686,
            "unit": "iter/sec",
            "range": "stddev: 0.000001103262348751115",
            "extra": "mean: 391.0773498660092 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 3805797.756603993,
            "unit": "iter/sec",
            "range": "stddev: 8.92435466604522e-7",
            "extra": "mean: 262.7569997025603 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1315643.4024962028,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019553856272885418",
            "extra": "mean: 760.0843800855728 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 675161.07525194,
            "unit": "iter/sec",
            "range": "stddev: 0.000005975241571798496",
            "extra": "mean: 1.4811280398930649 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 767309.2379708369,
            "unit": "iter/sec",
            "range": "stddev: 0.0000066697239349985846",
            "extra": "mean: 1.303255520087987 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 6095040.453438936,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 164.0678199987633 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 3780047.503101739,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 264.5469399999456 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 6303987.3476024475,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 158.62976000107665 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 10196789.887340203,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 98.0700800005252 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 4513461.081711235,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 221.55946000111726 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 4525000.514746032,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 220.99444999867046 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_mean",
            "value": 123051.17395618322,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.126700200000414 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_std",
            "value": 32994.33164311939,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 30.30823629999304 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_mean",
            "value": 1907291.0817239191,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 524.3038200001138 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_std",
            "value": 1013750.5633296985,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 986.4359499988494 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 61902.105360877336,
            "unit": "iter/sec",
            "range": "stddev: 0.00006589066582769122",
            "extra": "mean: 16.15453940007683 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 11188.782107367595,
            "unit": "iter/sec",
            "range": "stddev: 0.00016519828774582492",
            "extra": "mean: 89.37523229999442 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 3.7470553016513106,
            "unit": "iter/sec",
            "range": "stddev: 0.24405099037797623",
            "extra": "mean: 266.8762319999132 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 1866441.3747501597,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 535.7789499998944 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1487507.6061837985,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 672.265470000184 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 5560405.464812022,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 179.84299999852738 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2015688.0598602598,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 496.1085099989759 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 1972232.426884125,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 507.0396299993262 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 301169.09082574886,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.3203938600013316 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 47716.81573894641,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 20.956972599992696 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 42606.657405280166,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 23.47051049998754 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.116615191432125,
            "unit": "iter/sec",
            "range": "stddev: 0.005953295048541945",
            "extra": "mean: 320.8609143499962 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 9447493.570421152,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 105.84818000097584 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 4326558.793144549,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 231.13057000045956 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 259921.67832152522,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.8473127999850476 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 95426.71522900173,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.479245750000246 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}