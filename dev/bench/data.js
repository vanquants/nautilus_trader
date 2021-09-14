window.BENCHMARK_DATA = {
  "lastUpdate": 1631609895972,
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
          "id": "f43d555e09eadd003c2311f3e1bcfb66fcbf3940",
          "message": "Refactor and move backtest data wranglers",
          "timestamp": "2021-09-14T18:36:51+10:00",
          "tree_id": "b2352fcc9dc92689c85921f26085ea2c245f2cc3",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/f43d555e09eadd003c2311f3e1bcfb66fcbf3940"
        },
        "date": 1631609890847,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 2.7286684759268276,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 366.47911199997907 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 2.7439943067824872,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 364.4322430000102 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 1.8566971609675957,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 538.5907950001183 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 5696688.805296918,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 175.540570000976 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 5523823.643769704,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 181.0340199995153 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 6008863.915562322,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 166.42080999872633 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 6539294.720126715,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 152.9216899984931 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 159.15654669730387,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.2831220000134635 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 9808012.08647878,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 101.95746000135841 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 9848391.88564572,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 101.53941999988092 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 4936131.152229892,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 202.58780999938608 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 8953973.531608758,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 111.68226000108916 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2527774.874664656,
            "unit": "iter/sec",
            "range": "stddev: 6.624372726885753e-8",
            "extra": "mean: 395.6048499503595 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 816859.4829116316,
            "unit": "iter/sec",
            "range": "stddev: 1.4609523743397664e-7",
            "extra": "mean: 1.2242007602526428 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 654309.2212967753,
            "unit": "iter/sec",
            "range": "stddev: 1.9303068113984782e-7",
            "extra": "mean: 1.5283293700463219 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 661439.0275937127,
            "unit": "iter/sec",
            "range": "stddev: 2.8034469062672185e-7",
            "extra": "mean: 1.511855149578878 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3478609.0943507873,
            "unit": "iter/sec",
            "range": "stddev: 1.180996838714511e-7",
            "extra": "mean: 287.47121992637403 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1137985.1355746128,
            "unit": "iter/sec",
            "range": "stddev: 1.211425996681813e-7",
            "extra": "mean: 878.7461002248165 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2267045.0787729705,
            "unit": "iter/sec",
            "range": "stddev: 1.4049472052237785e-7",
            "extra": "mean: 441.102830006912 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 3781819.2842785283,
            "unit": "iter/sec",
            "range": "stddev: 1.342978835601699e-7",
            "extra": "mean: 264.4229998395531 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1250984.0078944832,
            "unit": "iter/sec",
            "range": "stddev: 1.530407619018582e-7",
            "extra": "mean: 799.370730312603 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 671873.1054735695,
            "unit": "iter/sec",
            "range": "stddev: 2.1312191534348915e-7",
            "extra": "mean: 1.488376289887583 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 717164.6231427225,
            "unit": "iter/sec",
            "range": "stddev: 2.9670006374747536e-7",
            "extra": "mean: 1.3943799899357145 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 6278835.15804277,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 159.2652099998304 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 3773912.737633316,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 264.9769799995738 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 6579656.845848407,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 151.98361000102523 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 10083875.660820104,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 99.16822000150205 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 4407930.713662136,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 226.86382000074445 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 4550062.103803003,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 219.77721999974165 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 12958.364970316547,
            "unit": "iter/sec",
            "range": "stddev: 0.0006860334580056538",
            "extra": "mean: 77.17022960000578 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 15936.721246608371,
            "unit": "iter/sec",
            "range": "stddev: 0.0001315165192434576",
            "extra": "mean: 62.74816410011681 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 4.641294726739295,
            "unit": "iter/sec",
            "range": "stddev: 0.17389551937484934",
            "extra": "mean: 215.45712110003024 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 1950808.1866738726,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 512.6080599984562 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1611084.4154420297,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 620.6999400001223 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 6449585.236825155,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 155.0487300005443 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2195879.6207383736,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 455.39836999978434 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2243135.3217627867,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 445.80457999927603 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 297506.3467252111,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.3612728299999617 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 62081.10078829523,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 16.107961800003068 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 53831.35403334773,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 18.576534400017408 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 2.884486364175128,
            "unit": "iter/sec",
            "range": "stddev: 0.0007486356264813056",
            "extra": "mean: 346.68217275000643 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 9558342.449642593,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 104.62064999956056 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 4245717.143481486,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 235.53146999802266 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 227350.04695638962,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.398503600009462 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_mean",
            "value": 137543.23654422976,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.270441100013159 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_std",
            "value": 45856.26089054785,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 21.807273000013083 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_mean",
            "value": 1810771.9418554027,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 552.2506600004817 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_std",
            "value": 1065066.3632750716,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 938.9086299984228 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 89536.63743444992,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.168612409999241 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}