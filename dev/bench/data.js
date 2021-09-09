window.BENCHMARK_DATA = {
  "lastUpdate": 1631174852494,
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
          "id": "dcf2c3ab2efd2d5f89a6706928f8fc1a525dbf76",
          "message": "Add contingency orders functionality\n\n- Add contingency order handling machinery.\n- Add parent-child relationships.\n- Add `SubmitOrderList`.\n- Update serialization.\n- Update tests.",
          "timestamp": "2021-09-09T17:45:39+10:00",
          "tree_id": "9b9f7e3cf91bacd42ccb2bcce7962f4cd034e2be",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/dcf2c3ab2efd2d5f89a6706928f8fc1a525dbf76"
        },
        "date": 1631174833598,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 0.24357920128517135,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.10544083700006 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 0.6166322795406847,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.6217120530000102 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 0.22762686330076906,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.39315459300019 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 5793952.562058097,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 172.5937499986685 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 5582257.041634683,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 179.13900999928956 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 6013500.308173488,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 166.29250000050888 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 6722335.672845082,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 148.75781999990068 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 164.29971027358897,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.086438000011185 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 8030910.653878792,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 124.51887999986864 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 9617782.587708715,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 103.97406999800296 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 4522438.41738629,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 221.11965000021883 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 8594273.377846995,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 116.35654999963663 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2130323.1582512655,
            "unit": "iter/sec",
            "range": "stddev: 0.000020320265592240914",
            "extra": "mean: 469.412350012135 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 837608.6907877964,
            "unit": "iter/sec",
            "range": "stddev: 0.0000029892889342251496",
            "extra": "mean: 1.1938749096066203 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 625690.6414107056,
            "unit": "iter/sec",
            "range": "stddev: 0.000003703448415746842",
            "extra": "mean: 1.5982339095648967 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 606946.9474494285,
            "unit": "iter/sec",
            "range": "stddev: 0.000012003908626280488",
            "extra": "mean: 1.6475904594335589 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3530262.431543139,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017542757884065556",
            "extra": "mean: 283.2650601453679 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1121042.5891469456,
            "unit": "iter/sec",
            "range": "stddev: 0.000003044301043146151",
            "extra": "mean: 892.0267701523699 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2360519.8908481128,
            "unit": "iter/sec",
            "range": "stddev: 0.000001774024255243967",
            "extra": "mean: 423.6354897398087 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 3741625.491977864,
            "unit": "iter/sec",
            "range": "stddev: 0.0000033956214922053074",
            "extra": "mean: 267.2635201315643 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1129536.2709387434,
            "unit": "iter/sec",
            "range": "stddev: 0.000013665882760179602",
            "extra": "mean: 885.3190691866075 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 644166.3233883156,
            "unit": "iter/sec",
            "range": "stddev: 0.000006402848022569936",
            "extra": "mean: 1.5523941002379615 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 720035.0450335087,
            "unit": "iter/sec",
            "range": "stddev: 0.000007261916621750752",
            "extra": "mean: 1.388821289876887 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 5894987.981007146,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 169.63562999990245 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 3479407.682323574,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 287.4052400011351 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 6732292.606249713,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 148.53780999828814 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 9560861.04732338,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 104.5930899999803 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 4213200.056923494,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 237.34927999839783 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 4301202.917423084,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 232.4930999998287 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 68828.43757582568,
            "unit": "iter/sec",
            "range": "stddev: 0.00006395734697850669",
            "extra": "mean: 14.528878399983114 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 9931.775633790654,
            "unit": "iter/sec",
            "range": "stddev: 0.00016019026099814917",
            "extra": "mean: 100.68693019984494 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 3.603772748463712,
            "unit": "iter/sec",
            "range": "stddev: 0.21262141090228143",
            "extra": "mean: 277.486975399961 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 1808289.9134247492,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 553.0086700014181 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1525016.2677293846,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 655.7307100001708 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 5546001.95097549,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 180.31006999990495 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2098685.7442183085,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 476.4886800012391 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2020457.5366546237,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 494.9373999988893 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 263358.8215775919,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.7971008299996356 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 43952.00269014734,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 22.752091799998198 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 38922.88376798136,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.691827099990405 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 2.7625083250975306,
            "unit": "iter/sec",
            "range": "stddev: 0.0038107449174262504",
            "extra": "mean: 361.98985932999676 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 8886801.083060626,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 112.52643000034368 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 3775274.37654934,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 264.88141000072574 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 205888.78999377048,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.856990999996924 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_mean",
            "value": 120774.03353440101,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.279925500005447 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_std",
            "value": 38114.72190546662,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 26.236581300008766 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_mean",
            "value": 1792657.857822581,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 557.8309299994544 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_std",
            "value": 1010491.0085934626,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 989.6179100019253 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 87226.31150703257,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.464430660000744 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}