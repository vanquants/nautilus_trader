window.BENCHMARK_DATA = {
  "lastUpdate": 1633065553080,
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
      },
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
        "date": 1633064290566,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 2.5454672181765248,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 392.85518700035027 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 7.664785687387223,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 130.4667919998792 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 1.015594362057104,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 984.6450879999793 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 6321017.420917199,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 158.20237999832898 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 6753132.423568718,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 148.07943000050727 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 6412459.665621493,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 155.94640000017534 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 8630097.205213921,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 115.87354999846866 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 156.60296841006317,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.385574999967503 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 11883587.897420524,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 84.1496700013522 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 14173795.968168518,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 70.5527299987807 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 5984320.481915869,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 167.10334999970655 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 11099068.621689366,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 90.09764999973413 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2948612.264235622,
            "unit": "iter/sec",
            "range": "stddev: 9.363883512210695e-7",
            "extra": "mean: 339.142589932635 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 927755.8385771707,
            "unit": "iter/sec",
            "range": "stddev: 0.000001712143810319357",
            "extra": "mean: 1.077869799810287 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 716200.6101568888,
            "unit": "iter/sec",
            "range": "stddev: 0.0000031538393476808657",
            "extra": "mean: 1.3962568389615626 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 686990.3979785205,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026713437526642793",
            "extra": "mean: 1.4556244205778057 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3781861.0477024587,
            "unit": "iter/sec",
            "range": "stddev: 8.862859107725469e-7",
            "extra": "mean: 264.4200797931262 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1199115.6633675206,
            "unit": "iter/sec",
            "range": "stddev: 0.000004662695619238541",
            "extra": "mean: 833.9479089045199 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2425787.7491214434,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012113981028574015",
            "extra": "mean: 412.2372208212255 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 4353864.71014967,
            "unit": "iter/sec",
            "range": "stddev: 7.400779965905105e-7",
            "extra": "mean: 229.68099988702306 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1259018.062322829,
            "unit": "iter/sec",
            "range": "stddev: 0.000003818830305637666",
            "extra": "mean: 794.2697804946874 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 743438.0940647479,
            "unit": "iter/sec",
            "range": "stddev: 0.000004045197908213542",
            "extra": "mean: 1.345101909605546 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 768593.7413653855,
            "unit": "iter/sec",
            "range": "stddev: 0.000004496129947209935",
            "extra": "mean: 1.3010774693839267 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 7291315.088485801,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 137.14947000153188 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 3480283.7921125474,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 287.3328899977423 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 8951144.29651303,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 111.71755999839661 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 13861028.22262431,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 72.14471999759553 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 5216531.438508001,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 191.69826000052126 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 5454189.742152058,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 183.34529000185285 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 69279.54949494536,
            "unit": "iter/sec",
            "range": "stddev: 0.00006427133411076151",
            "extra": "mean: 14.43427399990469 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 7090.994198837085,
            "unit": "iter/sec",
            "range": "stddev: 0.00022086143640423505",
            "extra": "mean: 141.02394839978842 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 3.046892378760398,
            "unit": "iter/sec",
            "range": "stddev: 0.23417620069375772",
            "extra": "mean: 328.20325619995856 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 2110105.917601248,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 473.90986000209523 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1842721.6778046433,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 542.67555000024 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 6159066.389080415,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 162.36226999808423 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2160532.2566211703,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 462.84891000141215 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2294851.57164787,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 435.7580299983965 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 221643.55178932814,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.511748670001907 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 24590.895594207836,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 40.665456699980496 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 22988.704454081362,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 43.49962400001459 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 2.955281451459288,
            "unit": "iter/sec",
            "range": "stddev: 0.00463448514199084",
            "extra": "mean: 338.3772464399999 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 12069041.676819954,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 82.8566200016212 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 4456646.346021272,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 224.38396999859833 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 230507.68788089987,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.338250099999641 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_mean",
            "value": 109274.83373582123,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.151237900005071 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_std",
            "value": 33151.495721722866,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 30.164551500001835 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_mean",
            "value": 1788523.4492241866,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 559.120430002622 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_std",
            "value": 1034398.3374495892,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 966.7455599992536 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 88153.19445489807,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.34388840000156 usec\nrounds: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "nautechsystems",
            "username": "nautechsystems"
          },
          "committer": {
            "name": "nautechsystems",
            "username": "nautechsystems"
          },
          "id": "6a39be3d022df25976835d60237afd2b07e0a1f6",
          "message": "Catalog batching",
          "timestamp": "2021-09-26T21:03:10Z",
          "url": "https://github.com/nautechsystems/nautilus_trader/pull/448/commits/6a39be3d022df25976835d60237afd2b07e0a1f6"
        },
        "date": 1633065543642,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 2.911484755149204,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 343.46736599991345 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 8.249038063188854,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 121.22625599977255 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 1.1068805656245562,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 903.4398389999296 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 7916486.137808731,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 126.31866999981865 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 5401231.275510107,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 185.14296999910584 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 7560882.684458368,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 132.25969000359328 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 8740219.694211712,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 114.4135999993523 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 220.29226615118012,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.539424000086001 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 13286319.24964542,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 75.26539000082266 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 14019470.52139522,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 71.32936999823869 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 5746700.058003002,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 174.01291000169294 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 11404529.377300061,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 87.68445999976393 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 3076840.1523756688,
            "unit": "iter/sec",
            "range": "stddev: 0.00000537058871378612",
            "extra": "mean: 325.00875914138305 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 977821.5978797283,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015331554260231027",
            "extra": "mean: 1.0226814402221862 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 715067.098821293,
            "unit": "iter/sec",
            "range": "stddev: 0.000007279127309045442",
            "extra": "mean: 1.3984701598610627 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 681472.5340305436,
            "unit": "iter/sec",
            "range": "stddev: 0.0000051702634490954404",
            "extra": "mean: 1.4674105705853435 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3926228.6758053843,
            "unit": "iter/sec",
            "range": "stddev: 6.971085262240047e-7",
            "extra": "mean: 254.6973400103525 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1344633.9412705358,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015719301396166395",
            "extra": "mean: 743.6968302727109 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2799114.257351181,
            "unit": "iter/sec",
            "range": "stddev: 8.801237168497285e-7",
            "extra": "mean: 357.2558702717288 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 4434546.343843006,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016926449160174031",
            "extra": "mean: 225.50220980065205 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1522666.7512168605,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026963820186694105",
            "extra": "mean: 656.7425204502797 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 726488.700778071,
            "unit": "iter/sec",
            "range": "stddev: 0.0000036762086286392816",
            "extra": "mean: 1.3764838997894913 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 801120.1710869579,
            "unit": "iter/sec",
            "range": "stddev: 0.000003952366207554756",
            "extra": "mean: 1.248252179998417 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 6024863.285312544,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 165.97886999988987 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 3877120.857804401,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 257.9233500000555 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 6782108.553396909,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 147.44677000180673 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 11324584.563027153,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 88.30346000195277 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 4390775.70030912,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 227.7501900016432 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 4842050.37980686,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 206.5240799993262 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 79781.10808286052,
            "unit": "iter/sec",
            "range": "stddev: 0.000054888815983321676",
            "extra": "mean: 12.534295700197617 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 9021.959047717704,
            "unit": "iter/sec",
            "range": "stddev: 0.00015504688597598522",
            "extra": "mean: 110.84067160036284 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 3.350758046968494,
            "unit": "iter/sec",
            "range": "stddev: 0.23694907519234096",
            "extra": "mean: 298.43993090003096 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 1829552.0852211565,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 546.5818699985903 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1786480.1433804026,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 559.7599299971989 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 6403203.855704304,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 156.17182000369212 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2491956.587114731,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 401.29110000179935 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2321487.694748272,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 430.758259999493 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 265709.0710144146,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.763514719998966 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 30157.121194932177,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 33.159663800006456 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 25912.66867831609,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 38.59116220000942 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.732440374683365,
            "unit": "iter/sec",
            "range": "stddev: 0.0029987302897269024",
            "extra": "mean: 267.9212256899973 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 12131021.338699076,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 82.43328999924415 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 4921460.624499177,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 203.1917100021019 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 273122.3466817309,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.6613628000395693 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_mean",
            "value": 132147.59236829836,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.567296400020496 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_std",
            "value": 33313.695132159264,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 30.017684799986455 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_mean",
            "value": 2226796.7555393972,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 449.07555999998294 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_std",
            "value": 1174181.6661250084,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 851.6569699986576 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 109435.3532040051,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.1378148900003 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}