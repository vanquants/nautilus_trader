window.BENCHMARK_DATA = {
  "lastUpdate": 1630736103646,
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
          "id": "e327da3ed4f2df46412b1eb66246a089d85e03f5",
          "message": "Refine cache and add tests",
          "timestamp": "2021-09-04T15:54:06+10:00",
          "tree_id": "47cdf03149e5e48b6c680b7a0b04638d69d0fcbb",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/e327da3ed4f2df46412b1eb66246a089d85e03f5"
        },
        "date": 1630736092265,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 0.2687371275000041,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.7211084649998156 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 0.678679183240983,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.4734502320000047 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 0.2488997138007232,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.017682401999991 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 6202050.782519438,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 161.23698999990665 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 5684707.692924037,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 175.91053999922224 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 5814176.9284855565,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 171.99339000171676 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 7310899.205455859,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 136.78208000101222 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 168.1485882002812,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.947120999962863 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 9972005.588879535,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 100.28072999830329 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 9861080.062489938,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 101.40876999912507 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 5136522.870898232,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 194.68423000034818 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 8667517.412376873,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 115.37329000020691 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2437530.540801071,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013498528177242822",
            "extra": "mean: 410.2512699887484 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 818916.6336081503,
            "unit": "iter/sec",
            "range": "stddev: 0.0000034202398794434563",
            "extra": "mean: 1.2211255199372317 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 580533.9883006219,
            "unit": "iter/sec",
            "range": "stddev: 0.000003757691156206692",
            "extra": "mean: 1.7225520299462005 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 606670.1736577865,
            "unit": "iter/sec",
            "range": "stddev: 0.000002199976353346312",
            "extra": "mean: 1.6483421196903691 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3880171.3047888475,
            "unit": "iter/sec",
            "range": "stddev: 9.463349939553035e-7",
            "extra": "mean: 257.720580214027 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1231980.8484516195,
            "unit": "iter/sec",
            "range": "stddev: 0.000002017644655231389",
            "extra": "mean: 811.7009296506694 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2505518.026640564,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017667408480001147",
            "extra": "mean: 399.119060157318 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 4161084.743006519,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015124192981291635",
            "extra": "mean: 240.32195010704527 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1385669.7663102164,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019794660821617264",
            "extra": "mean: 721.6726700062281 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 736951.9560287535,
            "unit": "iter/sec",
            "range": "stddev: 0.0000031450083283120458",
            "extra": "mean: 1.3569405601265316 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 797215.4219941165,
            "unit": "iter/sec",
            "range": "stddev: 0.0000028237156769979296",
            "extra": "mean: 1.2543661003178386 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 6048137.733055187,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 165.34014999933788 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 3688402.706605836,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 271.1200699991423 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 6689027.640163706,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 149.4985599993015 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 10017760.487441685,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 99.82271000126275 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 4452233.874996939,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 224.60634999788454 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 4399095.827431717,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 227.31944000042859 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_mean",
            "value": 133920.48538132003,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.467117500004861 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_std",
            "value": 39242.54479552291,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.482547199999317 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_mean",
            "value": 1459916.9721870401,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 684.9704599994766 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_std",
            "value": 835441.0885419545,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.1969724899995526 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 56220.294953074335,
            "unit": "iter/sec",
            "range": "stddev: 0.00009119433465319743",
            "extra": "mean: 17.7871709999863 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 10642.279873796148,
            "unit": "iter/sec",
            "range": "stddev: 0.0001517023481235941",
            "extra": "mean: 93.96482820022811 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 4.007208328232357,
            "unit": "iter/sec",
            "range": "stddev: 0.18710909893995956",
            "extra": "mean: 249.55028989998027 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 1972855.6371202557,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 506.87945999925427 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1716415.9532242487,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 582.609359998969 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 6609175.2139647165,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 151.30480999914653 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2311082.7905933196,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 432.69760999919527 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2283319.6965848943,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 437.95882000040365 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 304781.6940921851,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.281036949999816 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 43186.45394339417,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 23.155408899992835 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 37361.51836463497,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 26.76550749999933 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.0059863498524253,
            "unit": "iter/sec",
            "range": "stddev: 0.007700485991822692",
            "extra": "mean: 332.66950797999925 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 9131146.734265376,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 109.51526999861017 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 4087379.1745159645,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 244.65555000006134 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 239612.6307193415,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.1734027000075 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 88426.03909693692,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.308886049998819 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}