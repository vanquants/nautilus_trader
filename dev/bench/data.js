window.BENCHMARK_DATA = {
  "lastUpdate": 1632531826030,
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
          "id": "34dbb0007f05c14bd2d3e75053714a831cd46e2f",
          "message": "Update tests",
          "timestamp": "2021-09-25T10:41:58+10:00",
          "tree_id": "0acabd16d5a9acbcf45a44d637e091659dd65c61",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/34dbb0007f05c14bd2d3e75053714a831cd46e2f"
        },
        "date": 1632531818790,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 2.2142939623730813,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 451.6112209998937 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 7.4789809783743255,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 133.70805499994276 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 1.6378110563515302,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 610.571039999968 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 5596352.968674922,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 178.68780000071638 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 5231718.29663651,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 191.14179000098375 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 6024429.543723688,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 165.9908200008431 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 6785372.690593202,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 147.37584000158677 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 157.87328269024897,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.334194000146454 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 9634385.662057018,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 103.79488999888054 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 9813456.977720745,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 101.90088999934233 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 4462676.759948444,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 224.08075999919674 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 8421202.972132381,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 118.74788000113767 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2582081.8662677566,
            "unit": "iter/sec",
            "range": "stddev: 9.887479257192075e-7",
            "extra": "mean: 387.28438980342617 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 763934.5869095542,
            "unit": "iter/sec",
            "range": "stddev: 0.000001727989838358422",
            "extra": "mean: 1.3090126002089164 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 610111.6776183528,
            "unit": "iter/sec",
            "range": "stddev: 0.000002276213154019936",
            "extra": "mean: 1.6390441892599483 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 612708.2079352121,
            "unit": "iter/sec",
            "range": "stddev: 0.0000037272742038074956",
            "extra": "mean: 1.632098259904069 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3354323.458438963,
            "unit": "iter/sec",
            "range": "stddev: 8.127523274047496e-7",
            "extra": "mean: 298.12271010541735 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1105907.166646638,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016920752040821123",
            "extra": "mean: 904.235029991014 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2332418.30851023,
            "unit": "iter/sec",
            "range": "stddev: 9.876686909965768e-7",
            "extra": "mean: 428.7395602887045 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 3800104.909853933,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010995317687295764",
            "extra": "mean: 263.15062971207226 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1241544.8936218554,
            "unit": "iter/sec",
            "range": "stddev: 0.000004143738721310294",
            "extra": "mean: 805.4481196268171 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 684506.9577892747,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020126598676196847",
            "extra": "mean: 1.4609055300616092 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 758999.1105238283,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023779577589490735",
            "extra": "mean: 1.3175246006676389 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 5908600.334146716,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 169.24481999922136 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 3832831.513479562,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 260.9037199999875 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 6585843.43979945,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 151.84083999884024 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 10971781.674899694,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 91.14289999843095 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 4299138.345212789,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 232.6047499991546 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 4447137.235460914,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 224.86375999960728 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 51736.72931246282,
            "unit": "iter/sec",
            "range": "stddev: 0.00009943345311371611",
            "extra": "mean: 19.328628100174683 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 10021.139352975853,
            "unit": "iter/sec",
            "range": "stddev: 0.00016499393231120583",
            "extra": "mean: 99.78905239981941 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 3.3423052336764476,
            "unit": "iter/sec",
            "range": "stddev: 0.26256672037381523",
            "extra": "mean: 299.19469649994426 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 1873515.06367252,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 533.7560499992833 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1606686.6442083817,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 622.3989000000074 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 5707707.4998091925,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 175.20169000135866 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2156059.0930919754,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 463.8091800006805 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2196198.731391393,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 455.3321999992477 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 265622.4975454918,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.7647413500008042 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 48564.92185704674,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 20.590993700011495 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 38834.67305318359,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.750184599996828 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 2.9060125421495684,
            "unit": "iter/sec",
            "range": "stddev: 0.009463197496812742",
            "extra": "mean: 344.11413766999885 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 9219752.619355986,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 108.4627799991722 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 3903665.65133306,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 256.16948000106277 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 217883.4129819048,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.5896105000110765 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_mean",
            "value": 120389.34540340844,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.30638289999115 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_std",
            "value": 35509.4947222321,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 28.161482099994828 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_mean",
            "value": 1742109.229479409,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 574.0168200009066 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_std",
            "value": 981539.2972362641,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.0188079099998504 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 86414.10632998173,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.57218470999851 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}