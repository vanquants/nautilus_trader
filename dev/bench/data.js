window.BENCHMARK_DATA = {
  "lastUpdate": 1630297595433,
  "repoUrl": "https://github.com/nautechsystems/nautilus_trader",
  "entries": {
    "Benchmark with pytest-benchmark": [
      {
        "commit": {
          "author": {
            "email": "chris@cjdsellers.io",
            "name": "Christopher Sellers",
            "username": "cjdsellers"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "66449de0d43a15858103a36a71a0ee0c899b7c27",
          "message": "Persistence refactor",
          "timestamp": "2021-08-30T14:08:42+10:00",
          "tree_id": "0cd8e589c59900e8ef289ef846907fbb0b99c1f4",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/66449de0d43a15858103a36a71a0ee0c899b7c27"
        },
        "date": 1630297586452,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 0.31496156984593354,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.174990525000112 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 0.7705218467464992,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.2978217350000705 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 0.3025994066103013,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.3046991440000966 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 7103297.862286056,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 140.779680000378 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 6578605.886787803,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 152.00789000118675 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 7063060.202100128,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 141.58169000211274 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 8881535.766766187,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 112.5931399997171 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 194.52232902526458,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.140797999956703 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 11680383.135393454,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 85.61362999898847 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 11874989.609319147,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 84.21060000046054 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 6186546.14289356,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 161.64107999884436 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 10586401.978542058,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 94.46079999861468 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2976608.177064808,
            "unit": "iter/sec",
            "range": "stddev: 7.607243410714846e-8",
            "extra": "mean: 335.9528498594955 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 955522.1716450138,
            "unit": "iter/sec",
            "range": "stddev: 1.1769633264303988e-7",
            "extra": "mean: 1.04654819079542 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 737010.4526253843,
            "unit": "iter/sec",
            "range": "stddev: 1.5107999957117184e-7",
            "extra": "mean: 1.3568328596124957 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 722210.332116609,
            "unit": "iter/sec",
            "range": "stddev: 1.3609168233860013e-7",
            "extra": "mean: 1.384638180222737 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 4133157.2664060383,
            "unit": "iter/sec",
            "range": "stddev: 7.076686772979641e-8",
            "extra": "mean: 241.94578999640726 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1358826.3839057973,
            "unit": "iter/sec",
            "range": "stddev: 1.7021027380598178e-7",
            "extra": "mean: 735.9291899570053 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2811242.2594479644,
            "unit": "iter/sec",
            "range": "stddev: 9.572854442812579e-8",
            "extra": "mean: 355.7146299431224 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 4639254.141852573,
            "unit": "iter/sec",
            "range": "stddev: 9.310740759042422e-8",
            "extra": "mean: 215.55189033051647 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1479594.9653469878,
            "unit": "iter/sec",
            "range": "stddev: 1.1694145844864783e-7",
            "extra": "mean: 675.8606398511802 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 825174.1556699082,
            "unit": "iter/sec",
            "range": "stddev: 1.4626749453419974e-7",
            "extra": "mean: 1.2118653900256504 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 906605.4174403901,
            "unit": "iter/sec",
            "range": "stddev: 2.6769803470393923e-7",
            "extra": "mean: 1.1030156899164467 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 7552555.210649037,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 132.40552000070238 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 4335095.983349569,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 230.67540000056397 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 8568229.92881257,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 116.71021999973163 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 11911057.74949636,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 83.95560000053592 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 5394426.144433717,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 185.37653000066712 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 5546759.627433675,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 180.28543999889735 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_mean",
            "value": 156001.32170546817,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.4102021000053355 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_std",
            "value": 54148.510716111006,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 18.46772860001238 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_mean",
            "value": 2204680.218619964,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 453.5805200021059 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_std",
            "value": 1234687.9860735426,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 809.9212199999783 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 76926.78005971204,
            "unit": "iter/sec",
            "range": "stddev: 0.00006325026091285318",
            "extra": "mean: 12.999374200035163 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 15791.780896615886,
            "unit": "iter/sec",
            "range": "stddev: 0.00014707483915362985",
            "extra": "mean: 63.32408020011827 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 4.600297747831493,
            "unit": "iter/sec",
            "range": "stddev: 0.18314821660866942",
            "extra": "mean: 217.3772339999914 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 2347026.614182532,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 426.0710099993048 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1915166.5119508523,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 522.1478099997512 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 7725382.431630603,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 129.44342999844594 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2666282.366498221,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 375.05405000047176 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2567886.4435443236,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 389.4253199996456 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 344607.33221298765,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.901853519999804 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 71425.64807884015,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 14.00057299999844 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 62327.30894598221,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 16.04433140000765 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.4634100390898785,
            "unit": "iter/sec",
            "range": "stddev: 0.00017047780219753235",
            "extra": "mean: 288.73277744000006 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 11531141.924404891,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 86.721679999755 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 4900424.837480741,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 204.06393999792272 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 292140.03089776146,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.4230159999879106 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 108700.40852568371,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.199597440001526 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}