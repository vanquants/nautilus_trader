window.BENCHMARK_DATA = {
  "lastUpdate": 1631593276789,
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
          "id": "c4dc44cd8c144158d3888d62437db415c95f6a55",
          "message": "Backtest config notebook\n\n* Strip notebook output\r\n\r\n* Add simple plot\r\n\r\n* Fix tests/cleanup",
          "timestamp": "2021-09-14T14:03:11+10:00",
          "tree_id": "53f0830ba0508295ba36131dcefec52d61cdea35",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/c4dc44cd8c144158d3888d62437db415c95f6a55"
        },
        "date": 1631593272539,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 3.1059199744740775,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 321.9657970000753 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 3.164024935238078,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 316.05313499994736 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 2.056212951167359,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 486.33095100012724 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 6352918.873969957,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 157.4079600004552 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 6238655.395071563,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 160.29095000021698 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 6343489.153754007,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 157.6419499997428 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 7624568.678176111,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 131.15495999954874 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 193.39374695724894,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.170798000108334 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 10821108.996834023,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 92.41197000164902 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 10971412.120571282,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 91.14597000007052 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 5528406.472784227,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 180.88394999949742 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 9824055.102730503,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 101.79096000001664 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2533006.149488812,
            "unit": "iter/sec",
            "range": "stddev: 6.400138561022177e-7",
            "extra": "mean: 394.78782955256975 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 866070.2850402797,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012768381972085503",
            "extra": "mean: 1.1546406998058956 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 661767.1323565834,
            "unit": "iter/sec",
            "range": "stddev: 0.0000029422132529725444",
            "extra": "mean: 1.5111055703823695 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 671676.2521463258,
            "unit": "iter/sec",
            "range": "stddev: 0.000004239015933210599",
            "extra": "mean: 1.48881249977876 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 4014791.6226358223,
            "unit": "iter/sec",
            "range": "stddev: 5.721620594185984e-7",
            "extra": "mean: 249.078929616644 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1262486.241109614,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013836182599326123",
            "extra": "mean: 792.0878401978371 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2568225.622132247,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016727263526918264",
            "extra": "mean: 389.37388965450737 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 4403521.638981223,
            "unit": "iter/sec",
            "range": "stddev: 7.685270875242502e-7",
            "extra": "mean: 227.090969906385 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1249071.331031745,
            "unit": "iter/sec",
            "range": "stddev: 7.122067289769486e-7",
            "extra": "mean: 800.594790030118 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 686557.3592850426,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010080621913719342",
            "extra": "mean: 1.456542540074679 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 850731.7689540483,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011687084770259638",
            "extra": "mean: 1.1754586304323311 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 6979099.551011215,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 143.28495999961888 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 4048469.409321457,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 247.00693000113463 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 7660430.871714576,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 130.54095999905257 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 11258856.07569394,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 88.81896999810124 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 4807231.460583972,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 208.0199400006677 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 4948634.656880452,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 202.0759399988492 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 45046.90536047301,
            "unit": "iter/sec",
            "range": "stddev: 0.0001081589389913231",
            "extra": "mean: 22.199083200007408 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 12366.709242651874,
            "unit": "iter/sec",
            "range": "stddev: 0.00010104199329363626",
            "extra": "mean: 80.86225529998501 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 4.03148062111383,
            "unit": "iter/sec",
            "range": "stddev: 0.19003501521308946",
            "extra": "mean: 248.0478250999795 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 1998261.871858751,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 500.4349099999672 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1625244.889871504,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 615.2918899988435 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 6584190.029718122,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 151.87897000032535 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2419134.8535083644,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 413.3709200004887 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2416521.6814054656,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 413.81793000027756 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 324607.7219555694,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.080641439998999 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 52935.74607264712,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 18.890826599999855 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 44898.62718362621,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 22.27239589999499 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.3094543323957493,
            "unit": "iter/sec",
            "range": "stddev: 0.0021399795370863808",
            "extra": "mean: 302.16461675000346 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 10637053.110687792,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 94.01100000104634 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 4463807.648471682,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 224.02398999929574 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 242184.1249375063,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.12908979999429 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_mean",
            "value": 130810.27007636195,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.64465970000856 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_std",
            "value": 41286.04528242751,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 24.22125909999977 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_mean",
            "value": 2076631.955491245,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 481.54897999893365 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_std",
            "value": 1181072.6586929068,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 846.6879599995991 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 88126.08857970848,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.347377560000496 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}