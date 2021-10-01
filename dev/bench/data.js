window.BENCHMARK_DATA = {
  "lastUpdate": 1633063848424,
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
          "id": "b2de915801c84c67776783bed71c508f808fa714",
          "message": "Refactor `SimulatedExchange`",
          "timestamp": "2021-10-01T14:03:55+10:00",
          "tree_id": "ce2235c1b0a513465227a4c1b61d07bef1e0902e",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/b2de915801c84c67776783bed71c508f808fa714"
        },
        "date": 1633063839113,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 9701049.546858272,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 103.081629999906 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 10004256.811076408,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 99.95745000196621 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 4690857.701215869,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 213.1806300030803 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 8939897.960072327,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 111.85809999915364 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2691352.7593099154,
            "unit": "iter/sec",
            "range": "stddev: 2.8388776151385943e-7",
            "extra": "mean: 371.56035994939884 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 886505.0409071249,
            "unit": "iter/sec",
            "range": "stddev: 5.042528575154481e-7",
            "extra": "mean: 1.1280251705920818 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 680404.3295548746,
            "unit": "iter/sec",
            "range": "stddev: 5.501998727600961e-7",
            "extra": "mean: 1.4697143397870605 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 652167.981035746,
            "unit": "iter/sec",
            "range": "stddev: 5.566862830774546e-7",
            "extra": "mean: 1.5333472802694814 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3388629.6641086056,
            "unit": "iter/sec",
            "range": "stddev: 2.0883117131933172e-7",
            "extra": "mean: 295.10454051433044 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1182853.950961579,
            "unit": "iter/sec",
            "range": "stddev: 4.1259513597220357e-7",
            "extra": "mean: 845.4129093342999 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2329724.1886132653,
            "unit": "iter/sec",
            "range": "stddev: 2.7105815899808733e-7",
            "extra": "mean: 429.235359656559 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 3870840.2905767057,
            "unit": "iter/sec",
            "range": "stddev: 2.311168135023215e-7",
            "extra": "mean: 258.34183922142984 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1251310.2299141525,
            "unit": "iter/sec",
            "range": "stddev: 4.0732148588366306e-7",
            "extra": "mean: 799.1623308862472 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 698355.2436564219,
            "unit": "iter/sec",
            "range": "stddev: 5.991002099888322e-7",
            "extra": "mean: 1.4319359796945719 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 818553.591069916,
            "unit": "iter/sec",
            "range": "stddev: 6.300107448896128e-7",
            "extra": "mean: 1.2216671100213716 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 6544445.653698458,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 152.80133000032947 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 4039775.6308945525,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 247.53849999797237 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 7645486.146928027,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 130.79613000172685 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 10594774.7631377,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 94.38614999908168 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 4577079.669391924,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 218.47991999948135 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 4631263.865490395,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 215.923779996956 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 50422.05300362278,
            "unit": "iter/sec",
            "range": "stddev: 0.0001215374445415975",
            "extra": "mean: 19.83259190037643 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 12663.527887154893,
            "unit": "iter/sec",
            "range": "stddev: 0.00011941266984420464",
            "extra": "mean: 78.96693630013942 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 4.080302374559834,
            "unit": "iter/sec",
            "range": "stddev: 0.19020457801686538",
            "extra": "mean: 245.07987600009074 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 1809899.356739121,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 552.5169100019411 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1586975.3001419206,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 630.1295299999765 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 7177962.506729132,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 139.31529999808845 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2347173.370690942,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 426.04437000136386 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2377453.8443952245,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 420.6180500023038 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 245141.54282681676,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.079275950002739 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 40830.994690432744,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 24.49119860002611 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 36725.88500161512,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 27.228751600023315 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 2.989518124705266,
            "unit": "iter/sec",
            "range": "stddev: 0.004553403960642977",
            "extra": "mean: 334.50206966000223 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 10647316.3758639,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 93.92037999987224 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 4763786.68445744,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 209.91704000152822 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 238574.06760917074,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.191570400007549 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_mean",
            "value": 150160.92972036343,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.659521900019172 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_std",
            "value": 50466.16505051065,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 19.815256399988357 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_mean",
            "value": 2042938.1888323,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 489.49107000225916 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_std",
            "value": 1104907.790475453,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 905.0528999978269 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 95555.09069702595,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.465167190000102 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 2.72222926054513,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 367.34598900011406 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 8.311169729211358,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 120.32000700037315 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 1.2532754259261145,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 797.9092059999857 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 5911817.788784117,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 169.1527100001622 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 6085300.208767033,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 164.33043000233738 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 6217736.166959129,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 160.83024000181467 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 7566781.19480009,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 132.15659000252344 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 165.78669850127838,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.031847000031121 msec\nrounds: 1"
          }
        ]
      }
    ]
  }
}