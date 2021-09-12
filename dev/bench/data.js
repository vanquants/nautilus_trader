window.BENCHMARK_DATA = {
  "lastUpdate": 1631453200995,
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
          "id": "a7c401bac88159129084e3daa2731a6878725dcf",
          "message": "Update README",
          "timestamp": "2021-09-12T23:09:35+10:00",
          "tree_id": "f6edd68a9e2222cc0cb3adedec990d4cd9dd3956",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/a7c401bac88159129084e3daa2731a6878725dcf"
        },
        "date": 1631453197575,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 0.31303380608244546,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.1945431469999903 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 0.7590455918609655,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.3174439199999597 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 0.2971310450733925,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.3655184020000206 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 7322648.027674326,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 136.56262000040442 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 6485848.559477736,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 154.18182999951568 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 7060567.240332682,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 141.63167999981852 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 8776445.074557818,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 113.94135000045935 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 193.81118255662426,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.159660999993321 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 11801359.516613418,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 84.7360000000208 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 12007397.998129902,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 83.28198999947745 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 6180931.184477068,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 161.7879200000516 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 10489642.893684499,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 95.33213000054275 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2819219.9988752166,
            "unit": "iter/sec",
            "range": "stddev: 7.313028038272387e-8",
            "extra": "mean: 354.7080399539482 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 935067.2647178074,
            "unit": "iter/sec",
            "range": "stddev: 1.646077670214635e-7",
            "extra": "mean: 1.0694417800004885 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 681090.2094738805,
            "unit": "iter/sec",
            "range": "stddev: 1.4398118045400952e-7",
            "extra": "mean: 1.4682342898049683 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 669131.0002278953,
            "unit": "iter/sec",
            "range": "stddev: 1.2136439649168432e-7",
            "extra": "mean: 1.4944756701743245 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 4175996.1890514,
            "unit": "iter/sec",
            "range": "stddev: 5.691133553017877e-8",
            "extra": "mean: 239.46382006329256 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1341977.9796795854,
            "unit": "iter/sec",
            "range": "stddev: 1.0805475995688567e-7",
            "extra": "mean: 745.1687100251547 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2791577.395306542,
            "unit": "iter/sec",
            "range": "stddev: 8.854611621587523e-8",
            "extra": "mean: 358.2204103247477 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 4485451.634098627,
            "unit": "iter/sec",
            "range": "stddev: 6.564507041592638e-8",
            "extra": "mean: 222.94299026611952 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1511807.397290858,
            "unit": "iter/sec",
            "range": "stddev: 1.1526338095378085e-7",
            "extra": "mean: 661.459919955405 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 787484.6140294902,
            "unit": "iter/sec",
            "range": "stddev: 1.6338841729027563e-7",
            "extra": "mean: 1.2698660801549977 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 881556.8824474352,
            "unit": "iter/sec",
            "range": "stddev: 2.638155308809643e-7",
            "extra": "mean: 1.1343567498715856 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 7676744.569011482,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 130.26354999965406 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 4567448.887982271,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 218.94059999908677 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 8602122.418843655,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 116.25038000033783 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 12042970.764864145,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 83.03598999987116 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 5397347.311747245,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 185.276199999862 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 5554347.79347949,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 180.03914000018995 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 105108.89123529449,
            "unit": "iter/sec",
            "range": "stddev: 0.00004030696864268389",
            "extra": "mean: 9.513942999944902 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 15621.819177964402,
            "unit": "iter/sec",
            "range": "stddev: 0.00015274558714974376",
            "extra": "mean: 64.01303129987355 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 4.687566671113916,
            "unit": "iter/sec",
            "range": "stddev: 0.17975745160396364",
            "extra": "mean: 213.33029910001642 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 2305081.395190915,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 433.82415999985824 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1966823.4257708397,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 508.4340500002327 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 7353881.500010923,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 135.9826099997008 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2681041.0503857345,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 372.9894399998557 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2615448.8548332183,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 382.34354999985953 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 357388.39573467907,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.798076299999366 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 71813.92649701478,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 13.924875700001849 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 62706.776378925366,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 15.947239800004809 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.451173018163529,
            "unit": "iter/sec",
            "range": "stddev: 0.00016242659280296564",
            "extra": "mean: 289.756553709999 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 11614126.680418657,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 86.10203999978694 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 4973950.674214806,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 201.04743000047165 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 264774.72066584247,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.7767955999925107 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_mean",
            "value": 159211.18119722424,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.280965900009505 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_std",
            "value": 53776.640134148976,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 18.595434700000624 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_mean",
            "value": 2250597.9613718274,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 444.3263600001046 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_std",
            "value": 1291917.3066989349,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 774.0433499998289 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 109389.52132221527,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.14164344000028 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}