window.BENCHMARK_DATA = {
  "lastUpdate": 1629965695185,
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
          "id": "5cd9d06b95567f25eb30d3989e22a2b60af084a2",
          "message": "Fix and refine docs",
          "timestamp": "2021-08-26T15:37:01+10:00",
          "tree_id": "80bcd80f6cfe607203b6663f80c2a86cc2c626b4",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/5cd9d06b95567f25eb30d3989e22a2b60af084a2"
        },
        "date": 1629965686420,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 0.245251554546471,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.077446122000083 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 0.621948431787591,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.6078503440000986 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 0.22455382224395934,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.453275344000076 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 5853193.7073324155,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 170.84690000046976 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 5337606.549970564,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 187.3498899999504 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 5484955.343412178,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 182.31689000003826 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 6803002.92711792,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 146.99391000021933 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 168.3700949809331,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.93929699994078 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 9272573.128779987,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 107.8449300007378 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 9177432.253507268,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 108.96294000076523 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 4450123.395263076,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 224.7128699991663 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 8464395.325208127,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 118.1419299996378 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2339740.963336099,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011092422671695457",
            "extra": "mean: 427.3977400362128 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 751972.8192518483,
            "unit": "iter/sec",
            "range": "stddev: 0.000004595055880285521",
            "extra": "mean: 1.3298353004233832 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 535420.4707987497,
            "unit": "iter/sec",
            "range": "stddev: 0.000002884140225187037",
            "extra": "mean: 1.867691010222643 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 575067.962918919,
            "unit": "iter/sec",
            "range": "stddev: 0.000004153627424948327",
            "extra": "mean: 1.7389249001530516 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3350715.1662221407,
            "unit": "iter/sec",
            "range": "stddev: 7.792625863889456e-7",
            "extra": "mean: 298.44375018228675 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1111765.1006089307,
            "unit": "iter/sec",
            "range": "stddev: 0.000002097702133654803",
            "extra": "mean: 899.4705801183045 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2341822.807808803,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012753978311960424",
            "extra": "mean: 427.0177900161798 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 3768368.196477688,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010258594144967928",
            "extra": "mean: 265.36685054679765 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1299640.4996431568,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017786409056298974",
            "extra": "mean: 769.4435501775843 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 677763.3977840832,
            "unit": "iter/sec",
            "range": "stddev: 0.00000192066848477601",
            "extra": "mean: 1.4754411395915668 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 706483.5620613684,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019634331866274625",
            "extra": "mean: 1.4154611001595185 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 6016633.58520885,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 166.20590000002267 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 3753093.862915288,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 266.4468400007536 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 7164867.616186453,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 139.56991999975799 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 9705633.945928093,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 103.03293999868401 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 4167919.4737937786,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 239.92786000007982 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 3851696.5856656516,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 259.62585000115723 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_mean",
            "value": 120859.86816765534,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.274045100006333 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_std",
            "value": 35919.47107458987,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 27.840053599993553 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_mean",
            "value": 1777699.8118169396,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 562.5246699992204 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_std",
            "value": 946138.8061128056,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.0569273700002668 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 71483.04303863739,
            "unit": "iter/sec",
            "range": "stddev: 0.00006092264397471518",
            "extra": "mean: 13.989331700099683 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 11073.280258006971,
            "unit": "iter/sec",
            "range": "stddev: 0.00014019407375577894",
            "extra": "mean: 90.30747680001241 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 3.4518975632346702,
            "unit": "iter/sec",
            "range": "stddev: 0.22923150549571117",
            "extra": "mean: 289.6957344999919 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 1894902.0256991733,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 527.7317700006279 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1579300.5000105535,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 633.1917200009229 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 5203186.514705545,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 192.189919998782 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2189732.384268202,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 456.67680999940785 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 1921577.464444027,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 520.405770000707 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 276304.42739939445,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.6191964399995413 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 42718.50337189422,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 23.40905980001935 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 36818.6908817658,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 27.160118300002978 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 2.840516603011637,
            "unit": "iter/sec",
            "range": "stddev: 0.006527782628380046",
            "extra": "mean: 352.04863754000144 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 9303454.111959483,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 107.48696000064228 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 4026479.4171131137,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 248.35592000044926 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 210122.50898731005,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.759128399996371 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 87702.18816415557,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.402224060000208 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}