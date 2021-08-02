window.BENCHMARK_DATA = {
  "lastUpdate": 1627891224891,
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
          "id": "6e23cce3ade644da8d208ca94c1504f0c3b5150f",
          "message": "Improve PositionId logic",
          "timestamp": "2021-08-02T17:38:58+10:00",
          "tree_id": "3cc5d5b95a1a9a6ff8fa513cdb14dc3338b4dc81",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/6e23cce3ade644da8d208ca94c1504f0c3b5150f"
        },
        "date": 1627891221317,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 0.2550577990240491,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.9206799549999687 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 0.30913242458631995,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.2348596279998674 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 0.09281487839103249,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.774134679000099 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 5902818.708114952,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 169.41058999918823 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 6259558.737348366,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 159.75567000168667 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 6221162.578530802,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 160.74165999953038 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 7477201.265614228,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 133.73988000012105 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 174.4849596599578,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.731152999942424 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 10287410.709065748,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 97.2061900006338 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 8901306.409131892,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 112.34306000005745 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 4924839.318482816,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 203.0523100006576 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 8140208.2492994545,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 122.84698000030403 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2397601.3836354823,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012000885610970461",
            "extra": "mean: 417.0835097215786 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 698806.139823931,
            "unit": "iter/sec",
            "range": "stddev: 0.000005100650756472264",
            "extra": "mean: 1.431012040409314 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 542214.200453926,
            "unit": "iter/sec",
            "range": "stddev: 0.000014862229293441772",
            "extra": "mean: 1.8442895799535108 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 557748.0382054338,
            "unit": "iter/sec",
            "range": "stddev: 0.000018217940519476755",
            "extra": "mean: 1.792924280321131 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3528111.924327838,
            "unit": "iter/sec",
            "range": "stddev: 0.000002956531595948516",
            "extra": "mean: 283.437720074744 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1208028.2067624193,
            "unit": "iter/sec",
            "range": "stddev: 0.0000034025108547353705",
            "extra": "mean: 827.7952405433098 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2191702.713648182,
            "unit": "iter/sec",
            "range": "stddev: 0.000008930499786976867",
            "extra": "mean: 456.26625991417313 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 3714920.5628394852,
            "unit": "iter/sec",
            "range": "stddev: 0.0000032108635503329815",
            "extra": "mean: 269.1847599658104 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1340397.1899979608,
            "unit": "iter/sec",
            "range": "stddev: 0.0000040366189911681305",
            "extra": "mean: 746.0475204379691 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 707593.3167857007,
            "unit": "iter/sec",
            "range": "stddev: 0.0000036172354870663586",
            "extra": "mean: 1.413241160250891 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 759956.2976098196,
            "unit": "iter/sec",
            "range": "stddev: 0.000004159586337555888",
            "extra": "mean: 1.3158651400681265 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 6790075.381438912,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 147.27376999871922 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 3367337.606431455,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 296.9705200007411 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 6042419.476607396,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 165.4966199998853 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 11016704.077586543,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 90.7712499997615 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 4412339.867373303,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 226.6371199993955 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 3390709.334356861,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 294.9235400001271 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_mean",
            "value": 112802.5706171317,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.865046200003235 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_std",
            "value": 33292.095524336946,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 30.037160000006224 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_mean",
            "value": 1949398.5647293741,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 512.9787300006683 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_std",
            "value": 1024850.7133289555,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 975.7518699984757 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 26885.21796575711,
            "unit": "iter/sec",
            "range": "stddev: 0.00024033308301057738",
            "extra": "mean: 37.195160599912924 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 11035.464729290496,
            "unit": "iter/sec",
            "range": "stddev: 0.00014945221652382576",
            "extra": "mean: 90.61693589992501 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 3.8323300494461905,
            "unit": "iter/sec",
            "range": "stddev: 0.2270575607905324",
            "extra": "mean: 260.9378594999953 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 1871709.6514141837,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 534.2709000001378 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1472685.100648084,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 679.0317900004084 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 5638897.203147179,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 177.33963999944535 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2122469.0538157523,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 471.1493900003916 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2042440.9424143103,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 489.61023999936515 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 275515.1737005682,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.629564160000882 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 44222.708834196,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 22.612816499986366 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 39021.47669104481,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.626913300015985 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.003587068457848,
            "unit": "iter/sec",
            "range": "stddev: 0.006012141410881577",
            "extra": "mean: 332.93524615999786 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 10066962.41394858,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 99.3348299994068 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 3954983.27297941,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 252.84557000077257 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 240238.91856462267,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.162522900014665 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 89013.78583295792,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.234214909998173 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}