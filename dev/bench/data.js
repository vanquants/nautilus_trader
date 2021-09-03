window.BENCHMARK_DATA = {
  "lastUpdate": 1630705933249,
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
          "id": "4626184027c9b335b4bac4323835e58855ae54de",
          "message": "Updates",
          "timestamp": "2021-09-04T07:31:06+10:00",
          "tree_id": "b0432193176768910a094c323a44beee409229e4",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/4626184027c9b335b4bac4323835e58855ae54de"
        },
        "date": 1630705921599,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 0.27717469361111474,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.6078329769998163 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 0.6780705976606677,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.4747726909999983 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 0.2638554742426288,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.7899535829999422 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 5774896.386849406,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 173.16327999878922 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 5534555.606696044,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 180.68298000116556 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 6162976.841046587,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 162.25925000071584 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 7377093.563832758,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 135.55473999986134 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 163.19134380665238,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.12777600008485 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 9663541.573946578,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 103.4817300001123 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 9826893.377082532,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 101.76155999943148 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 5137708.57169395,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 194.63930000028995 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 9012140.524839606,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 110.96143000031589 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2654135.187270391,
            "unit": "iter/sec",
            "range": "stddev: 2.1368322681190254e-7",
            "extra": "mean: 376.7705596897031 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 799396.8839244199,
            "unit": "iter/sec",
            "range": "stddev: 4.878041634527097e-7",
            "extra": "mean: 1.2509430798513677 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 626183.5377148201,
            "unit": "iter/sec",
            "range": "stddev: 5.409848711715203e-7",
            "extra": "mean: 1.5969758701248793 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 623829.8432908141,
            "unit": "iter/sec",
            "range": "stddev: 5.461323855261007e-7",
            "extra": "mean: 1.6030012202122634 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3644371.1812146455,
            "unit": "iter/sec",
            "range": "stddev: 2.2405865062061073e-7",
            "extra": "mean: 274.395760002335 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1114453.6803368533,
            "unit": "iter/sec",
            "range": "stddev: 3.0071303028247694e-7",
            "extra": "mean: 897.300639446712 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2356768.6794685847,
            "unit": "iter/sec",
            "range": "stddev: 1.1569151318344589e-7",
            "extra": "mean: 424.30978004404096 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 4057270.8106105733,
            "unit": "iter/sec",
            "range": "stddev: 8.994538799751512e-8",
            "extra": "mean: 246.47110007663284 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1201982.092138509,
            "unit": "iter/sec",
            "range": "stddev: 3.082601762117345e-7",
            "extra": "mean: 831.9591502572621 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 673866.7622581188,
            "unit": "iter/sec",
            "range": "stddev: 4.236470295282384e-7",
            "extra": "mean: 1.4839728801121055 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 779359.402086175,
            "unit": "iter/sec",
            "range": "stddev: 4.815719091537721e-7",
            "extra": "mean: 1.2831050697832325 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 6458673.691979561,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 154.83055000004242 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 3919463.1840602914,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 255.13697999940632 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 7295335.384416428,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 137.07389000046533 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 10147312.595841255,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 98.54826000037065 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 4532603.789571892,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 220.6237400014288 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 4732409.2326192055,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 211.30886000037208 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_mean",
            "value": 143245.6188362131,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.981016300005649 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_std",
            "value": 46885.106157893875,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 21.32873489999838 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_mean",
            "value": 1978112.1103703217,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 505.53252000099747 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_std",
            "value": 1081523.1375858856,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 924.6219200008454 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 69240.77319115095,
            "unit": "iter/sec",
            "range": "stddev: 0.00006991392931300796",
            "extra": "mean: 14.442357499956415 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 14049.904225733593,
            "unit": "iter/sec",
            "range": "stddev: 0.00015782101390699336",
            "extra": "mean: 71.17486240001654 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 4.451851944208473,
            "unit": "iter/sec",
            "range": "stddev: 0.18252512795300666",
            "extra": "mean: 224.62561930005904 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 1948891.3380794884,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 513.1122400007371 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1670008.6322724118,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 598.7993000007918 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 6484853.004575852,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 154.20550000044386 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2147698.146531434,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 465.6147799983046 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2211168.7371104653,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 452.24952000125995 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 313428.8296857917,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.190516970000772 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 63138.37195348432,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 15.838229099995262 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 54067.50078764587,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 18.495398999993995 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 2.879056888890546,
            "unit": "iter/sec",
            "range": "stddev: 0.0009732324163711184",
            "extra": "mean: 347.3359640299963 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 9666532.656306962,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 103.44970999994985 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 4409165.632429616,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 226.80027999967933 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 246565.92229610038,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.055710500006171 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 91627.71936535633,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.913727930001187 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}