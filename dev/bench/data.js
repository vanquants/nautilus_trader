window.BENCHMARK_DATA = {
  "lastUpdate": 1629701624256,
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
          "id": "2675647a5ed443688bcae128eb6e53f1b5abe757",
          "message": "Improve system identifiers",
          "timestamp": "2021-08-23T16:33:11+10:00",
          "tree_id": "dd9a155b7c08614b868dfd681f7d4d50e69bb565",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/2675647a5ed443688bcae128eb6e53f1b5abe757"
        },
        "date": 1629701618436,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 0.2740365402696007,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.649148390999926 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 0.34410260141951954,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.9061099680000098 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 0.10283118361372943,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.724676550999902 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 6869791.281324472,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 145.5648299997847 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 7258382.59713457,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 137.77174000097148 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 6819893.766580396,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 146.62984999858963 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 8509010.361256504,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 117.52247999993415 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 187.94636086116842,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.32066699997813 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 12041656.908136591,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 83.04504999841811 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 10465592.22018634,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 95.55120999948485 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 5831102.0135025745,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 171.49417000155154 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 10493377.62924018,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 95.29820000125255 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 3166704.2021602606,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019252898585036037",
            "extra": "mean: 315.785730576863 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 959709.6793834409,
            "unit": "iter/sec",
            "range": "stddev: 0.000002711230245229458",
            "extra": "mean: 1.0419817799925113 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 704919.8121831404,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019635479294597585",
            "extra": "mean: 1.4186010702451313 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 725213.6007334937,
            "unit": "iter/sec",
            "range": "stddev: 0.000002808836946599934",
            "extra": "mean: 1.3789040897586347 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3870021.615189861,
            "unit": "iter/sec",
            "range": "stddev: 0.0000027789000522915377",
            "extra": "mean: 258.3964895893587 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1258835.7827758149,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012700984683067636",
            "extra": "mean: 794.384790838194 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2861291.7305276287,
            "unit": "iter/sec",
            "range": "stddev: 7.076128872370241e-7",
            "extra": "mean: 349.49249995406717 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 4335686.160422785,
            "unit": "iter/sec",
            "range": "stddev: 7.691052512950151e-7",
            "extra": "mean: 230.6440002803356 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1560815.7580621552,
            "unit": "iter/sec",
            "range": "stddev: 0.000001073208403060084",
            "extra": "mean: 640.6906099164189 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 774625.4396698005,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018173098526700053",
            "extra": "mean: 1.2909464998028852 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 827454.1816634681,
            "unit": "iter/sec",
            "range": "stddev: 0.0000031861326282229938",
            "extra": "mean: 1.2085261300990169 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 7025738.088939336,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 142.33379999950557 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 4089777.486684121,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 244.51207999845792 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 6899605.632287119,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 144.93582000113747 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 11598629.877098044,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 86.21707999964201 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 4110843.636816451,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 243.2590699982029 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 4271351.2568962965,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 234.11795000129132 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_mean",
            "value": 142560.2407899035,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.014578500002244 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_std",
            "value": 37935.45741700489,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 26.360562599984405 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_mean",
            "value": 2131728.3635698333,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 469.10292000120535 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_std",
            "value": 1165489.1710140677,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 858.0088300004718 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 36197.77368930561,
            "unit": "iter/sec",
            "range": "stddev: 0.0001780122386668188",
            "extra": "mean: 27.626008399943203 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 12277.79665107694,
            "unit": "iter/sec",
            "range": "stddev: 0.0001664949978826111",
            "extra": "mean: 81.44783859995641 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 3.8080093127211825,
            "unit": "iter/sec",
            "range": "stddev: 0.2394423569991056",
            "extra": "mean: 262.6043998000114 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 2151930.8823909857,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 464.6989399998347 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1763960.0903998076,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 566.9062500010114 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 6442676.702815846,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 155.2149899998767 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2243708.4731591083,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 445.6907000007959 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2346121.085269701,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 426.2354600018625 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 305559.5145035889,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.2726848699985567 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 47343.84416542847,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 21.122070199999143 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 39327.38329163431,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.42757530000017 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.340788992953168,
            "unit": "iter/sec",
            "range": "stddev: 0.013753685116829025",
            "extra": "mean: 299.33048812999914 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 8866079.814940928,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 112.78941999989911 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 4079317.09950659,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 245.13906999800386 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 264483.2761141851,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.7809573999993518 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 95094.56737736425,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.51584782999953 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}