window.BENCHMARK_DATA = {
  "lastUpdate": 1631002711636,
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
          "id": "82216344e76d17ea769eb2eed20f658f78a00a8c",
          "message": "Add `ContingencyType` enum",
          "timestamp": "2021-09-07T17:58:03+10:00",
          "tree_id": "5e4b8dd4749bda87cad3070b3499dab2a18cb515",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/82216344e76d17ea769eb2eed20f658f78a00a8c"
        },
        "date": 1631002694925,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 0.24781663464932302,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.035241627000005 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 0.6237362530455289,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.6032417470000837 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 0.2295033910106013,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.357234093999978 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 5845551.070969037,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 171.07026999838126 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 5624097.0512057785,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 177.80632000039986 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 5958153.267973581,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 167.83724000106304 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 7000445.088309577,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 142.84805999977834 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 161.54446850249812,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.1902460001874715 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 9492549.203174785,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 105.34578000033434 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 9517303.313868577,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 105.0717800012535 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 4807587.372804146,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 208.00454000209356 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 8854741.855896536,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 112.93384000055084 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2518245.0620657303,
            "unit": "iter/sec",
            "range": "stddev: 0.00000208692791994699",
            "extra": "mean: 397.1019401819831 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 760399.714966767,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019213645411275474",
            "extra": "mean: 1.3150978101612054 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 618370.4466200077,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022475691135175494",
            "extra": "mean: 1.6171536098886463 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 595769.8056383227,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022759096854285144",
            "extra": "mean: 1.6785006399049962 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3417737.0829273793,
            "unit": "iter/sec",
            "range": "stddev: 8.995613836040114e-7",
            "extra": "mean: 292.5912601631353 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1094801.380515069,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011911400561570913",
            "extra": "mean: 913.4076900136279 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2277104.802317065,
            "unit": "iter/sec",
            "range": "stddev: 9.780599236567453e-7",
            "extra": "mean: 439.1541394943488 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 3685697.164931722,
            "unit": "iter/sec",
            "range": "stddev: 6.853624532588516e-7",
            "extra": "mean: 271.31908978162755 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1306884.7216483047,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011782903622992538",
            "extra": "mean: 765.1784303811837 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 681726.3934543603,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017452289507395754",
            "extra": "mean: 1.466864140220423 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 737092.9768986736,
            "unit": "iter/sec",
            "range": "stddev: 0.000002522058454596744",
            "extra": "mean: 1.3566809498138355 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 5717478.027292725,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 174.90229000031832 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 3631002.428266092,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 275.4060400002345 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 6539660.786472413,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 152.9131300003428 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 9468282.107219705,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 105.61577999851579 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 4507476.190148002,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 221.85364000051777 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 4393428.345059791,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 227.6126799984013 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 69068.65675180526,
            "unit": "iter/sec",
            "range": "stddev: 0.00006602176487767852",
            "extra": "mean: 14.478347300041605 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 10551.008336499444,
            "unit": "iter/sec",
            "range": "stddev: 0.00016499414489827102",
            "extra": "mean: 94.77767129997119 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 3.838231520763655,
            "unit": "iter/sec",
            "range": "stddev: 0.19996746717957817",
            "extra": "mean: 260.5366545999914 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 1908363.5502068994,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 524.0091699988625 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1648131.1519491272,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 606.7478299996765 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 6053440.2549008895,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 165.1953199984746 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2235758.1979217567,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 447.27555999998003 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2164873.8480389914,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 461.920679999821 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 297137.4558970217,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.3654457900001944 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 41475.4957379551,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 24.110621999989235 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 36716.02084368264,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 27.236066899990874 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 2.9884246661707814,
            "unit": "iter/sec",
            "range": "stddev: 0.007722691017293524",
            "extra": "mean: 334.6244632900016 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 9100438.076780641,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 109.88482000129807 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 3885638.8110725856,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 257.35793999956513 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 240613.59160816975,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.156041199985339 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_mean",
            "value": 118945.90189313143,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.407183300005272 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_std",
            "value": 34667.179528301895,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 28.84572709999702 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_mean",
            "value": 1820382.362580308,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 549.3351399991298 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_std",
            "value": 1046785.8967664274,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 955.3051900002174 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 95027.98203462425,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.523216199999297 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}