window.BENCHMARK_DATA = {
  "lastUpdate": 1628413138201,
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
          "id": "8556e2ec921b17a9becffb1ee257f224734e3f0f",
          "message": "Refactor and cleanup network base classes",
          "timestamp": "2021-08-08T18:40:37+10:00",
          "tree_id": "ff216ea9ab845a1ec19c38d571ca3313d8a12d42",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/8556e2ec921b17a9becffb1ee257f224734e3f0f"
        },
        "date": 1628413129434,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 0.29173392944922577,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.4277809299999262 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 0.34038146204622083,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.9378803240001616 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 0.10700275248508793,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.34555398600014 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 6827891.390075196,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 146.45810000047277 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 6003040.540069206,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 166.58224999900995 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 6978996.291922788,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 143.2870799999364 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 7809268.914910716,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 128.05296000124144 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 196.92257279956806,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.078138000044419 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 11051961.015833348,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 90.48167999935686 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 11457291.913232792,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 87.2806600000331 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 5507294.521694937,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 181.5773600014836 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 9975086.224577755,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 100.24976000067909 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2983866.2918884084,
            "unit": "iter/sec",
            "range": "stddev: 7.798819245484706e-7",
            "extra": "mean: 335.1356603070599 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 1039711.478520628,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016501625088464458",
            "extra": "mean: 961.8052898895257 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 805107.9203580364,
            "unit": "iter/sec",
            "range": "stddev: 0.000001836931881430237",
            "extra": "mean: 1.2420695098307988 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 782907.4640463799,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016085080920212792",
            "extra": "mean: 1.2772901599782926 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 4199482.6512067085,
            "unit": "iter/sec",
            "range": "stddev: 5.040084170128597e-7",
            "extra": "mean: 238.12456987116093 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1427761.0337750597,
            "unit": "iter/sec",
            "range": "stddev: 8.461150032718822e-7",
            "extra": "mean: 700.3973188398049 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2715473.7228929554,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010408453035094138",
            "extra": "mean: 368.2598699333539 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 4423687.917622448,
            "unit": "iter/sec",
            "range": "stddev: 4.810211475524593e-7",
            "extra": "mean: 226.055729658583 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1521549.0987476024,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014376691939346237",
            "extra": "mean: 657.2249300552357 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 730191.7791746603,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018505576611842391",
            "extra": "mean: 1.3695032298642218 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 821955.2534802189,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019105001783553644",
            "extra": "mean: 1.216611239804024 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 6761228.304241757,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 147.90211999979874 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 3921554.47907767,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 255.00092000129374 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 7254786.054817761,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 137.8400400017199 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 11093894.619192805,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 90.1396700010082 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 5068822.186677449,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 197.28449000012915 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 5086509.315795076,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 196.59848000173952 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_mean",
            "value": 152067.4443446038,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.576029500001823 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_std",
            "value": 37612.79121660428,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 26.586700100006055 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_mean",
            "value": 1942672.209341677,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 514.7548800005097 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_std",
            "value": 1158647.186719057,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 863.0754999990131 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 65981.32175689617,
            "unit": "iter/sec",
            "range": "stddev: 0.00006041387441849165",
            "extra": "mean: 15.155804299956799 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 12314.181889131014,
            "unit": "iter/sec",
            "range": "stddev: 0.00013307868298449967",
            "extra": "mean: 81.20718119996582 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 4.191234469415728,
            "unit": "iter/sec",
            "range": "stddev: 0.21562908227076283",
            "extra": "mean: 238.59318949994304 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 2277468.2888208465,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 439.08404999911 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1812786.8655964923,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 551.6368299981877 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 7162709.615881548,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 139.61196999844105 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2354459.387286122,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 424.7259499993561 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2389760.868818034,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 418.45190999993065 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 302581.3868663392,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.304895950000173 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 54029.49691758506,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 18.50840849999713 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 37759.22572200126,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 26.483593900002234 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.516768690035412,
            "unit": "iter/sec",
            "range": "stddev: 0.003715022919500336",
            "extra": "mean: 284.35194012999773 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 11998806.838672692,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 83.34161999982825 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 5061860.234647178,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 197.55583000005572 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 299151.78204580885,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.3427846999984467 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 108506.23272549204,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.216060450000896 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}