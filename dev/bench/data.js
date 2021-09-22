window.BENCHMARK_DATA = {
  "lastUpdate": 1632296770164,
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
          "id": "ed7d3195163f401bcf7428e01efbe2cbe62ffef4",
          "message": "Fix hedging position_id assignment",
          "timestamp": "2021-09-22T17:26:10+10:00",
          "tree_id": "8aced35ab27650efac15dd48c9d7140dd72467fe",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/ed7d3195163f401bcf7428e01efbe2cbe62ffef4"
        },
        "date": 1632296763638,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 2.817829387137597,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 354.88308999993023 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 2.9508640182970622,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 338.88379599989094 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 1.903512573261189,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 525.3445729999839 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 6239052.412760556,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 160.2807499989467 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 5875827.316478127,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 170.18880000023273 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 5931170.310640223,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 168.60079000025507 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 5670772.097734967,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 176.3428300000669 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 105.90366325044563,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.442543999966801 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 8429460.086254291,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 118.6315600011767 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 9688187.619019333,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 103.21848000103273 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 4379547.914157873,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 228.33407000007355 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 8319358.890201627,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 120.20157000051768 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2715907.9656494115,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018092387141064272",
            "extra": "mean: 368.2009893736904 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 873592.6085034487,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017060163480681212",
            "extra": "mean: 1.1446983299379099 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 667603.4611172549,
            "unit": "iter/sec",
            "range": "stddev: 0.000004630398347172374",
            "extra": "mean: 1.497895170175525 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 701503.3609823231,
            "unit": "iter/sec",
            "range": "stddev: 0.000002222319713551384",
            "extra": "mean: 1.4255099200090626 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3728113.7294490025,
            "unit": "iter/sec",
            "range": "stddev: 5.026686938884146e-7",
            "extra": "mean: 268.232160435673 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1216323.3515458638,
            "unit": "iter/sec",
            "range": "stddev: 0.0000034026499506299413",
            "extra": "mean: 822.1497998283667 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2471522.8666088204,
            "unit": "iter/sec",
            "range": "stddev: 5.831276436390953e-7",
            "extra": "mean: 404.6088399627479 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 3977928.066463142,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010821492596668045",
            "extra": "mean: 251.38715011735258 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1158937.52691813,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014540585306900406",
            "extra": "mean: 862.859279964141 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 633204.5781793603,
            "unit": "iter/sec",
            "range": "stddev: 0.000021014602268031243",
            "extra": "mean: 1.5792684299208304 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 834871.026792884,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018894481067885139",
            "extra": "mean: 1.197789799750808 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 6197754.479170027,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 161.34876000023723 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 4028210.8496182067,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 248.2491699993261 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 7111785.750952141,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 140.61165999919467 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 11698040.812243607,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 85.48439999913171 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 4675365.964273345,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 213.88699999988603 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 4694196.344454392,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 213.02900999899066 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 52366.055485199555,
            "unit": "iter/sec",
            "range": "stddev: 0.00010482792914186846",
            "extra": "mean: 19.09633999991911 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 12450.452614531747,
            "unit": "iter/sec",
            "range": "stddev: 0.00010480662575919123",
            "extra": "mean: 80.31836520005982 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 4.11602664716843,
            "unit": "iter/sec",
            "range": "stddev: 0.18608208505494866",
            "extra": "mean: 242.95275169997694 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 1790893.3253537843,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 558.3805499986738 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1537120.7671353207,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 650.5669700004546 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 6148293.7716238815,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 162.6467500000217 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2161437.2745174463,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 462.65511000001425 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2287230.3927171966,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 437.21000000005006 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 299796.47656643443,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.3355962399991768 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 52639.081678806586,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 18.997291899995616 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 43834.73734172288,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 22.81295749999117 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.0634935270463806,
            "unit": "iter/sec",
            "range": "stddev: 0.004701955155060263",
            "extra": "mean: 326.42471452000564 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 10357066.06690998,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 96.55243999986851 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 3977105.236919503,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 251.43915999933597 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 215830.22311156365,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.633271400007288 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_mean",
            "value": 119782.01828742128,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.348498500004098 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_std",
            "value": 37679.28392027564,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 26.53978250000364 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_mean",
            "value": 1704966.7266380864,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 586.5217099994879 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_std",
            "value": 1023448.7354670741,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 977.0885100010674 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 83327.59504794536,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 12.000826369999231 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}