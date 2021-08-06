window.BENCHMARK_DATA = {
  "lastUpdate": 1628292595223,
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
          "id": "f8d4c11a13ddfb2a9669c732fcac63d73593ccf5",
          "message": "Correctly type callables",
          "timestamp": "2021-08-07T09:09:40+10:00",
          "tree_id": "af736078c8642428832f53061441a6afc4b0e9e0",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/f8d4c11a13ddfb2a9669c732fcac63d73593ccf5"
        },
        "date": 1628292591039,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 0.2619022961882042,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.8182177649996447 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 0.32111494881400904,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.1141496330001246 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 0.09604217068188814,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.412092864000442 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 4889461.020812901,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 204.52152000871138 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 5348383.2558946675,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 186.97239000175614 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 5565842.159407163,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 179.66733000321256 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 6284400.020171893,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 159.12417999970785 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 152.60770709440865,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.552748999638425 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 10025490.813043522,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 99.74573999897984 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 10072041.282543194,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 99.28473999934795 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 5183994.479368956,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 192.9014399956941 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 6838116.949458379,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 146.23908999965352 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2074191.378544188,
            "unit": "iter/sec",
            "range": "stddev: 0.000002188615498026482",
            "extra": "mean: 482.1155898844154 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 731537.2811489645,
            "unit": "iter/sec",
            "range": "stddev: 0.000003558968552975421",
            "extra": "mean: 1.3669843298066553 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 554916.9877778798,
            "unit": "iter/sec",
            "range": "stddev: 0.000006238272348147297",
            "extra": "mean: 1.8020713404439448 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 601651.5681790758,
            "unit": "iter/sec",
            "range": "stddev: 0.000004966314728114408",
            "extra": "mean: 1.662091570751727 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3642242.5871805497,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011838507820165722",
            "extra": "mean: 274.55612196717993 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1202823.3452609747,
            "unit": "iter/sec",
            "range": "stddev: 0.000006295740923203173",
            "extra": "mean: 831.3772790825169 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2432679.1248234943,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016844523692272747",
            "extra": "mean: 411.06942127953516 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 3961418.971202438,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010065580898995396",
            "extra": "mean: 252.43479855816986 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1244648.031210402,
            "unit": "iter/sec",
            "range": "stddev: 0.000005188566986464682",
            "extra": "mean: 803.4399885946186 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 659350.8182356999,
            "unit": "iter/sec",
            "range": "stddev: 0.0000071844745394560955",
            "extra": "mean: 1.516643298746203 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 749358.7938899747,
            "unit": "iter/sec",
            "range": "stddev: 0.0000074263388892509",
            "extra": "mean: 1.334474230707201 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 6072964.728147145,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 164.6642199921189 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 3590702.178227712,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 278.49706000779406 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 6448902.284271628,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 155.06514999287901 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 9983453.424728565,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 100.16573999564571 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 3011690.2370617967,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 332.03945999957796 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 4301043.450310228,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 232.50172000189195 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_mean",
            "value": 124926.61342256638,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.004699499997514 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_std",
            "value": 35464.13777191116,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 28.197499300040363 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_mean",
            "value": 2035264.4159465511,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 491.33665000226756 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_std",
            "value": 1039863.0026216886,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 961.6651400028786 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 50273.94852667897,
            "unit": "iter/sec",
            "range": "stddev: 0.00008315651648948183",
            "extra": "mean: 19.891017700138036 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 11051.874085224004,
            "unit": "iter/sec",
            "range": "stddev: 0.00015594753144648163",
            "extra": "mean: 90.48239170015222 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 3.777981772170493,
            "unit": "iter/sec",
            "range": "stddev: 0.23002369455256474",
            "extra": "mean: 264.69158939999033 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 1880657.6411505823,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 531.7288900005224 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1574018.222660382,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 635.3166600001714 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 5867193.149603682,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 170.43924999597948 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2069157.2781793424,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 483.28853999919374 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2245675.760448519,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 445.30025999847567 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 270938.60771470645,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.690873030000148 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 47353.093030836586,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 21.117944700017688 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 39214.46093787643,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.500796800042735 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.071369135047719,
            "unit": "iter/sec",
            "range": "stddev: 0.00521119504722907",
            "extra": "mean: 325.5876959200031 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 10858391.696411824,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 92.09466999891447 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 3309009.9044723962,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 302.20520000511897 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 259012.46163211568,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.8608181000199693 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 94275.11267215625,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.607253300004231 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}