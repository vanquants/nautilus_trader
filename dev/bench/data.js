window.BENCHMARK_DATA = {
  "lastUpdate": 1627976741125,
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
          "id": "9ca66bd030b88c25f8438665ac9c4a7d2cd6c8bc",
          "message": "Bump version",
          "timestamp": "2021-08-03T17:24:12+10:00",
          "tree_id": "f51b059763677e5e42298027963629da16b1505f",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/9ca66bd030b88c25f8438665ac9c4a7d2cd6c8bc"
        },
        "date": 1627976738100,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 0.232483202845647,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.301386026000046 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 0.2942749217714587,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.3981828759999644 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 0.08870208205964913,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.273692530999824 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 5794571.992614263,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 172.57530000051702 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 5666546.5169622,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 176.4743300009286 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 5534145.48392451,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 180.69637000053262 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 6641290.296478446,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 150.573149999218 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 164.06767069713297,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.095045999927606 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 9356391.599074494,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 106.87880999967092 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 9893470.082021488,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 101.07677000178228 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 4774350.356537952,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 209.4525799998337 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 8556743.48822198,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 116.8668900004377 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2460871.2846380533,
            "unit": "iter/sec",
            "range": "stddev: 7.974576497754759e-7",
            "extra": "mean: 406.36014010260624 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 826571.1958435164,
            "unit": "iter/sec",
            "range": "stddev: 0.000002099392854756972",
            "extra": "mean: 1.2098171398042723 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 612945.9769422389,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018159854769543496",
            "extra": "mean: 1.6314651496509214 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 600811.8987827344,
            "unit": "iter/sec",
            "range": "stddev: 0.0000052516806998395626",
            "extra": "mean: 1.6644144399037941 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3378948.2332629305,
            "unit": "iter/sec",
            "range": "stddev: 7.847524200444893e-7",
            "extra": "mean: 295.95008001479073 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1123638.6080147526,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013398723369444558",
            "extra": "mean: 889.9658599011673 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2241187.198698212,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015675352937123459",
            "extra": "mean: 446.19208988024184 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 3747803.2765295664,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010639872713471797",
            "extra": "mean: 266.82296967464936 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1165081.4105048142,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016592765135395983",
            "extra": "mean: 858.3091198465809 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 621197.0781248512,
            "unit": "iter/sec",
            "range": "stddev: 0.000009348230726799971",
            "extra": "mean: 1.6097950798780403 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 718810.3637498678,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017245592232631373",
            "extra": "mean: 1.3911875098506243 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 5583461.697085643,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 179.1003600010299 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 3427389.938725239,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 291.7672099988522 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 6350287.309149764,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 157.4731900018378 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 9564453.898431204,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 104.55379999939396 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 4155260.1313242908,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 240.6588200005899 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 4208031.617450109,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 237.6408000009178 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_mean",
            "value": 108087.65792325848,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.25175009999748 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_std",
            "value": 34007.6680966117,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 29.405132900001263 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_mean",
            "value": 1757950.224411016,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 568.8443200006077 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_std",
            "value": 946610.2360765074,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.0564009999984592 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 39957.32589572451,
            "unit": "iter/sec",
            "range": "stddev: 0.00011871899643335825",
            "extra": "mean: 25.026699799923335 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 10301.629889464386,
            "unit": "iter/sec",
            "range": "stddev: 0.00015185418168802114",
            "extra": "mean: 97.07201780008745 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 3.639389308174124,
            "unit": "iter/sec",
            "range": "stddev: 0.23957884065951146",
            "extra": "mean: 274.7713737999902 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 1647528.915860602,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 606.9696200006547 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1555742.48665987,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 642.7798999993684 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 5814348.661225527,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 171.98831000087011 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2100418.3550300705,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 476.0956299992358 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2086512.4393216814,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 479.26864999908497 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 285233.6499002405,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.505897709999317 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 43304.84192301239,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 23.09210600001279 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 37851.830923158785,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 26.41880129999663 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 2.906223791953591,
            "unit": "iter/sec",
            "range": "stddev: 0.0039815854451970166",
            "extra": "mean: 344.08912443999725 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 9050524.00725667,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 110.49083999978393 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 3723756.26913868,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 268.54603999936444 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 230028.73288940694,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.347282999992785 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 86623.06166845959,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.544269859998622 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}