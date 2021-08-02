window.BENCHMARK_DATA = {
  "lastUpdate": 1627936649920,
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
          "id": "807a994410fcea6a0903b232eb6b2ee889149870",
          "message": "Patch fix for DataEngine exception handling",
          "timestamp": "2021-08-03T06:20:34+10:00",
          "tree_id": "5693a65fd5df42c7f86cfc9379f1127fefab9b48",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/807a994410fcea6a0903b232eb6b2ee889149870"
        },
        "date": 1627936647939,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 0.330954116983223,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.0215668840000944 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 0.44649358906757763,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.2396738149999464 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 0.13790791044574993,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.2512156609999465 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 7350189.179150537,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 136.05092000034347 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 7167382.389566343,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 139.52094999922338 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 7385582.736863885,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 135.39893000029224 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 8409027.898742488,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 118.9198099996247 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 197.50218980685685,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.063234999965971 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 11923986.494059796,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 83.86456999915026 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 11557409.466728253,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 86.52458000028673 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 5867471.652456084,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 170.43116000081682 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 10704617.533169296,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 93.41762999952152 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2887941.5988337123,
            "unit": "iter/sec",
            "range": "stddev: 7.627482677678847e-8",
            "extra": "mean: 346.2673900344271 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 951637.5240624804,
            "unit": "iter/sec",
            "range": "stddev: 1.2384314606312458e-7",
            "extra": "mean: 1.050820270023678 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 737069.957740042,
            "unit": "iter/sec",
            "range": "stddev: 1.3674803558950478e-7",
            "extra": "mean: 1.3567233198136819 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 741418.9139148411,
            "unit": "iter/sec",
            "range": "stddev: 1.207391489323007e-7",
            "extra": "mean: 1.348765159928007 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 4199853.206949063,
            "unit": "iter/sec",
            "range": "stddev: 5.737319189383412e-8",
            "extra": "mean: 238.10355998762134 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1342132.0648965642,
            "unit": "iter/sec",
            "range": "stddev: 9.104799149149878e-8",
            "extra": "mean: 745.0831599624053 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2651594.7190517504,
            "unit": "iter/sec",
            "range": "stddev: 7.815342086758001e-8",
            "extra": "mean: 377.1315400558706 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 4546209.839857198,
            "unit": "iter/sec",
            "range": "stddev: 5.497614324996568e-8",
            "extra": "mean: 219.96344982426308 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1500540.1870901166,
            "unit": "iter/sec",
            "range": "stddev: 9.452296798124227e-8",
            "extra": "mean: 666.4266699442578 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 798274.621997938,
            "unit": "iter/sec",
            "range": "stddev: 1.3598137101460851e-7",
            "extra": "mean: 1.2527017300101306 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 920221.8626087423,
            "unit": "iter/sec",
            "range": "stddev: 2.4140362203797486e-7",
            "extra": "mean: 1.0866944599263206 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 7683802.904629269,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 130.143889999772 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 4588261.355432136,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 217.94748000047548 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 8644701.804930601,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 115.67778999960865 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 11959352.07575766,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 83.61657000023115 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 5415819.587373915,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 184.6442599992315 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 5563337.42830758,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 179.74822000041968 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_mean",
            "value": 160690.52446363907,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.223142300007112 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_std",
            "value": 52677.85505678224,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 18.983308999997917 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_mean",
            "value": 2179261.139813515,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 458.8711200005946 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_std",
            "value": 1283153.0005084658,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 779.3302899995069 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 79403.42176510805,
            "unit": "iter/sec",
            "range": "stddev: 0.00005137790674936256",
            "extra": "mean: 12.593915699983425 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 16757.24628571551,
            "unit": "iter/sec",
            "range": "stddev: 0.00013640204058732843",
            "extra": "mean: 59.675676000085794 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 5.063116514275271,
            "unit": "iter/sec",
            "range": "stddev: 0.19038707950033443",
            "extra": "mean: 197.50681169997506 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 2298414.1930345204,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 435.08259000077487 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1954299.755539054,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 511.69222999988057 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 7207770.841912289,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 138.73914999976478 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2592183.2868515723,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 385.77519000000393 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2690884.121456972,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 371.6250700006185 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 336713.7667046265,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.9698815400001877 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 71577.7317525217,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 13.970825499995954 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 61282.60233680949,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 16.317844899992906 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.521288488260064,
            "unit": "iter/sec",
            "range": "stddev: 0.00021519418203355534",
            "extra": "mean: 283.9869562900026 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 11420644.848326214,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 87.56073000085962 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 5296986.681980761,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 188.78658000062387 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 290195.8380815694,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.445948799992493 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 106171.86872565972,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.418690769999785 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}