window.BENCHMARK_DATA = {
  "lastUpdate": 1632995045333,
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
          "id": "3b3b5c48baefea534dd32275093dae111352f60d",
          "message": "Refactor `SimulatedExchange`\n\n- Separate bid and ask side orders sorted by price.\n- Simplify exchange order index/cache.\n- Improve market order execution for running on bar data.\n- Add `bar_execution` mode.",
          "timestamp": "2021-09-30T19:01:27+10:00",
          "tree_id": "335012c9a0b5918c11cd19355aa488dbf716f3d8",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/3b3b5c48baefea534dd32275093dae111352f60d"
        },
        "date": 1632995035939,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 3.177806080309774,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 314.68251199976294 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 9.987526079289744,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 100.12489500013544 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 1.4172823575084028,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 705.5757059997632 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 7522519.791315174,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 132.93418000102974 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 8176007.196054739,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 122.30909000209066 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 7756137.722684539,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 128.93014999917796 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 11055488.491735449,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 90.45280999998795 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 196.3847530685667,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.092045000310463 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 16031149.163819995,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 62.37856000097963 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 16380405.431137739,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 61.04855000103271 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 8185778.535892817,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 122.16308999995816 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 14426138.316345375,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 69.31861999873945 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 3585531.4880802482,
            "unit": "iter/sec",
            "range": "stddev: 1.0877959079101664e-7",
            "extra": "mean: 278.8986802443105 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 1104743.5900809078,
            "unit": "iter/sec",
            "range": "stddev: 1.3935028221249754e-7",
            "extra": "mean: 905.187419939466 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 838574.0517360395,
            "unit": "iter/sec",
            "range": "stddev: 2.010056081167787e-7",
            "extra": "mean: 1.192500528641176 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 839044.7877180603,
            "unit": "iter/sec",
            "range": "stddev: 1.787127515921092e-7",
            "extra": "mean: 1.191831490568802 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 4121993.1769463364,
            "unit": "iter/sec",
            "range": "stddev: 6.975450307927112e-8",
            "extra": "mean: 242.60108085400134 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1532983.4582713328,
            "unit": "iter/sec",
            "range": "stddev: 1.604395146779677e-7",
            "extra": "mean: 652.3227596517245 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2940866.642781222,
            "unit": "iter/sec",
            "range": "stddev: 1.2026051939101732e-7",
            "extra": "mean: 340.03581986780773 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 5159349.885681087,
            "unit": "iter/sec",
            "range": "stddev: 6.212396877277195e-8",
            "extra": "mean: 193.82286957807082 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1431724.9658394053,
            "unit": "iter/sec",
            "range": "stddev: 1.5438383053448402e-7",
            "extra": "mean: 698.4581702909054 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 933308.925472344,
            "unit": "iter/sec",
            "range": "stddev: 2.1753046806163805e-7",
            "extra": "mean: 1.0714565913895058 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 943112.7947546102,
            "unit": "iter/sec",
            "range": "stddev: 5.66207928891707e-7",
            "extra": "mean: 1.0603185595209652 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 9318365.305211928,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 107.3149600006218 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 4426012.169232984,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 225.93701999994664 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 10808727.355751434,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 92.51782999854186 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 18681992.87560892,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 53.52747999950225 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 6391883.841460019,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 156.44840000277327 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 6575600.7335932795,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 152.07736000320438 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 89193.25353140589,
            "unit": "iter/sec",
            "range": "stddev: 0.00005036820513600051",
            "extra": "mean: 11.211610300188113 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 10985.611075148197,
            "unit": "iter/sec",
            "range": "stddev: 0.00022388803070430967",
            "extra": "mean: 91.0281634002331 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 4.148132167453148,
            "unit": "iter/sec",
            "range": "stddev: 0.19199963300271075",
            "extra": "mean: 241.07235730002685 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 2727083.93867575,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 366.6920500018023 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 2247823.9378338363,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 444.8747000014919 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 9810380.069044864,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 101.93284999786556 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2980867.68827558,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 335.4727899977661 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2990683.0056066075,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 334.3717799998558 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 283236.98177688196,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.5306123999998817 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 45000.39937850575,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 22.22202500001913 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 40468.126055422596,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 24.710805700033234 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.6540951094963208,
            "unit": "iter/sec",
            "range": "stddev: 0.00035119443473512164",
            "extra": "mean: 273.66556425999534 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 15158501.842714379,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 65.96958000045561 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 5831464.834862553,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 171.4834999984305 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 261795.63426580094,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.819773399982296 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_mean",
            "value": 157875.74023575953,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.334095400006845 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_std",
            "value": 53544.1966622004,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 18.676160300037736 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_mean",
            "value": 2478035.5600865115,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 403.5454600034427 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_std",
            "value": 1345590.0982443749,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 743.1683699996938 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 110584.66140343026,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.042845429999034 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}