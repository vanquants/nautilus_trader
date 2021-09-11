window.BENCHMARK_DATA = {
  "lastUpdate": 1631354489206,
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
          "id": "3920042371cd66dcf41e45bdb6ce37986168a95d",
          "message": "Fix behavior of passive orders `reduce_only`\n\n- Move `is_reduce_only` to `PassiveOrder` base.\n- Add `order.leaves_qty`.\n- Add `order.type_string_c`.\n- Clarify responsibility of `_fill_order`.",
          "timestamp": "2021-09-11T19:42:36+10:00",
          "tree_id": "4a29f0acaa6cf61587933b26eb092a4c21391d09",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/3920042371cd66dcf41e45bdb6ce37986168a95d"
        },
        "date": 1631354470159,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 0.3057402930807804,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.2707497920000606 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 0.731542352666887,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.3669748529998742 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 0.2923461266076894,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.4206028710000282 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 6543565.620358015,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 152.82187999900998 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 5590802.459043765,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 178.86520000047312 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 6659170.660216722,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 150.1688500002274 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 7623252.1694019735,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 131.17760999875827 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 212.8040810718175,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.699157999993986 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 10864471.905660437,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 92.04313000054754 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 12611615.954008361,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 79.29198000056203 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 5236332.439258297,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 190.97335999958887 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 9731482.13288757,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 102.75927000066076 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2920789.191793584,
            "unit": "iter/sec",
            "range": "stddev: 3.5161919306568805e-7",
            "extra": "mean: 342.37321981663627 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 832506.8070814427,
            "unit": "iter/sec",
            "range": "stddev: 6.840003925903943e-7",
            "extra": "mean: 1.2011913794503926 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 634438.3490536894,
            "unit": "iter/sec",
            "range": "stddev: 7.586605307257395e-7",
            "extra": "mean: 1.5761972798327406 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 640156.3783728608,
            "unit": "iter/sec",
            "range": "stddev: 7.498077089082595e-7",
            "extra": "mean: 1.5621183101256975 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3883098.6927430276,
            "unit": "iter/sec",
            "range": "stddev: 3.01067632503822e-7",
            "extra": "mean: 257.5262899881636 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1226631.0984133093,
            "unit": "iter/sec",
            "range": "stddev: 4.694038413659724e-7",
            "extra": "mean: 815.2410299180701 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2612537.399652719,
            "unit": "iter/sec",
            "range": "stddev: 3.62547720774881e-7",
            "extra": "mean: 382.7696400185232 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 4356147.456841113,
            "unit": "iter/sec",
            "range": "stddev: 2.739325667916263e-7",
            "extra": "mean: 229.5606404300088 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1324883.2802780208,
            "unit": "iter/sec",
            "range": "stddev: 4.5642807308616645e-7",
            "extra": "mean: 754.7834702768341 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 774911.4182314797,
            "unit": "iter/sec",
            "range": "stddev: 6.864230780591337e-7",
            "extra": "mean: 1.29047008015732 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 858750.1108839738,
            "unit": "iter/sec",
            "range": "stddev: 6.784232199140661e-7",
            "extra": "mean: 1.1644831101921227 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 7557629.570673462,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 132.31661999952848 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 4256788.918504341,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 234.91886000101658 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 7953580.3598699,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 125.72954000006575 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 10287728.211333098,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 97.20319000052768 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 5189242.596282906,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 192.70635000111724 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 5759900.505812239,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 173.6141099991073 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 69305.70933467775,
            "unit": "iter/sec",
            "range": "stddev: 0.00007306108816310653",
            "extra": "mean: 14.428825699928893 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 16041.299519105421,
            "unit": "iter/sec",
            "range": "stddev: 0.0001389662790628977",
            "extra": "mean: 62.33908909991896 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 4.9611422108357255,
            "unit": "iter/sec",
            "range": "stddev: 0.16231304610764472",
            "extra": "mean: 201.56648560000576 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 2022600.4566030232,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 494.413019998774 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1685101.025937721,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 593.4362299990426 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 6596530.15920891,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 151.5948499991282 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2293739.4377526897,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 435.96931000138284 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2307841.7138106306,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 433.30528000069535 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 328843.62691059534,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.040959039999507 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 72088.5991951471,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 13.871819000019059 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 59628.89018055874,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 16.770394300010594 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.129750829233381,
            "unit": "iter/sec",
            "range": "stddev: 0.0041190094124893654",
            "extra": "mean: 319.51425355000083 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 11029477.04952796,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 90.66612999959034 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 4331875.931446404,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 230.8468699993682 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 248371.92205007438,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.026220000014291 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_mean",
            "value": 142257.6811820861,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.029497400003493 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_std",
            "value": 48815.385566832854,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 20.485344700000496 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_mean",
            "value": 1973560.9928102943,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 506.6982999983338 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_std",
            "value": 1125867.4301910654,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 888.2040399998914 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 98912.51906879806,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.109943710001517 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}