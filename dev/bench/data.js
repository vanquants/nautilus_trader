window.BENCHMARK_DATA = {
  "lastUpdate": 1627806948748,
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
          "id": "574c15570286b73bfd0b5bcd78a05ce634d56438",
          "message": "Update workflow",
          "timestamp": "2021-08-01T18:15:06+10:00",
          "tree_id": "c4a3879fc500bc290d2798125d3b9cad0424a111",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/574c15570286b73bfd0b5bcd78a05ce634d56438"
        },
        "date": 1627806947221,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 0.25433009797320016,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.931897985999967 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 0.3186988594357703,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.1377583270000287 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 0.09666176925978535,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.345351710999921 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 5484314.011867322,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 182.33820999967065 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 5547228.856900892,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 180.2701899987369 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 5516870.036920641,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 181.26219999885507 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 6261699.202270271,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 159.70105999940643 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 150.67856585160243,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.636644000082015 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 9168783.738775494,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 109.06572000067172 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 8810902.610760657,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 113.49575000167533 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 4158512.6896493984,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 240.47058999940418 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 7158046.517649451,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 139.702919998399 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 1944721.902105371,
            "unit": "iter/sec",
            "range": "stddev: 0.000001647112463767789",
            "extra": "mean: 514.2123400355558 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 783590.1738817681,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024720660898149204",
            "extra": "mean: 1.2761773096849538 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 629537.6047439717,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024869687988551833",
            "extra": "mean: 1.5884674600283688 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 627237.9418314664,
            "unit": "iter/sec",
            "range": "stddev: 0.0000032237239255764995",
            "extra": "mean: 1.5942913100570877 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3268955.5063927397,
            "unit": "iter/sec",
            "range": "stddev: 0.000001355730826186902",
            "extra": "mean: 305.9081098058414 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1195056.8149349978,
            "unit": "iter/sec",
            "range": "stddev: 0.000002398867966144751",
            "extra": "mean: 836.7802999009655 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2512323.638495335,
            "unit": "iter/sec",
            "range": "stddev: 9.22728244145337e-7",
            "extra": "mean: 398.0378899746029 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 4124076.4723489364,
            "unit": "iter/sec",
            "range": "stddev: 0.000001432901089281212",
            "extra": "mean: 242.4785298489951 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1130797.2485126958,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017613181602628294",
            "extra": "mean: 884.3318298795566 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 629816.2006767988,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020692658249756053",
            "extra": "mean: 1.587764809678447 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 739616.6274182941,
            "unit": "iter/sec",
            "range": "stddev: 0.0000033711358391712115",
            "extra": "mean: 1.3520518102609458 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 6290453.117688788,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 158.97106000011263 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 3355502.2418580735,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 298.01797999880364 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 6196053.287540076,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 161.39306000013676 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 9825241.379343571,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 101.77866999811158 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 4392775.448217947,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 227.6465099998859 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 4160606.2236449784,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 240.3495899989139 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_mean",
            "value": 129368.26165982324,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.729871200012894 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_std",
            "value": 34663.68993384179,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 28.848631000005298 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_mean",
            "value": 1794856.2256476283,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 557.1476899990557 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_std",
            "value": 991030.5000738436,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.0090506799997456 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 38654.870349560704,
            "unit": "iter/sec",
            "range": "stddev: 0.00013242322821061358",
            "extra": "mean: 25.86996130000898 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 11573.60499477246,
            "unit": "iter/sec",
            "range": "stddev: 0.00014406280668775485",
            "extra": "mean: 86.40350180014593 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 3.8776550582893985,
            "unit": "iter/sec",
            "range": "stddev: 0.22927004268842263",
            "extra": "mean: 257.88781749997725 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 1877671.5745855796,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 532.5745000004645 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1524814.8909015502,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 655.817310000657 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 5263954.414170939,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 189.9712499994166 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2104110.858198004,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 475.26012999924205 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2028828.6405702438,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 492.8952499994921 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 303589.1204442691,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.2939256800000294 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 50429.506849097124,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 19.82966049999959 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 42150.952660865914,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 23.724256199989213 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.0834874109954553,
            "unit": "iter/sec",
            "range": "stddev: 0.0031007847116342807",
            "extra": "mean: 324.3081182799983 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 9592630.710836327,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 104.24669000030917 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 4153848.7547969543,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 240.7405899998594 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 248339.44107534393,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.02674660001594 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 86818.66728448814,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.51826020000044 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}