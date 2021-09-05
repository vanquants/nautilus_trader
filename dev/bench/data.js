window.BENCHMARK_DATA = {
  "lastUpdate": 1630820383032,
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
          "id": "cc5a208c607a6977cb6ecb7621fe2d7dfd110a32",
          "message": "Modify `pragma: no cover` position",
          "timestamp": "2021-09-05T15:20:32+10:00",
          "tree_id": "925ab4da122ab21233430ff482a92f04487283d2",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/cc5a208c607a6977cb6ecb7621fe2d7dfd110a32"
        },
        "date": 1630820370374,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 0.281922259194455,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.54707713699986 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 0.7110729753510434,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.4063254189998133 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 0.2596320782015849,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.8516041889999997 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 7016807.218084085,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 142.51495999815234 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 6519030.614987227,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 153.39703999870835 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 7131348.165719671,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 140.22593999925448 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 8517394.222479256,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 117.40680000002612 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 187.7851047321006,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.325236000089717 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 10666936.326707538,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 93.74763000096209 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 11380371.976802353,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 87.8705899981469 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 5652298.091552116,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 176.9191900007172 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 10106045.770193035,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 98.95066999888513 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 3126669.9348351117,
            "unit": "iter/sec",
            "range": "stddev: 9.200120417386922e-7",
            "extra": "mean: 319.8290900036227 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 963985.8643707996,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016799559456152248",
            "extra": "mean: 1.0373596096792426 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 732661.803909036,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021200765820337037",
            "extra": "mean: 1.3648862198965617 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 718978.4711791736,
            "unit": "iter/sec",
            "range": "stddev: 0.000002446334049464866",
            "extra": "mean: 1.3908622303529228 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3681846.7581959944,
            "unit": "iter/sec",
            "range": "stddev: 9.224142272925717e-7",
            "extra": "mean: 271.602830230222 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1244429.2663949498,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018593826842144772",
            "extra": "mean: 803.5812295679534 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2496563.730715241,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012958246622450814",
            "extra": "mean: 400.55055983430066 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 4245643.60779968,
            "unit": "iter/sec",
            "range": "stddev: 8.311519095027459e-7",
            "extra": "mean: 235.53554946602162 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1340988.032285345,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026281589357242575",
            "extra": "mean: 745.7188102534928 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 769656.1939058882,
            "unit": "iter/sec",
            "range": "stddev: 0.000001976727484085503",
            "extra": "mean: 1.299281429705843 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 838894.9902846707,
            "unit": "iter/sec",
            "range": "stddev: 0.000002054226209565733",
            "extra": "mean: 1.1920443101712408 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 7153739.001952845,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 139.78703999782738 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 4017647.9202538906,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 248.9018500000384 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 7547170.380929073,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 132.49998999981472 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 11477149.28259343,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 87.12965000086115 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 4476543.048721793,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 223.3866599999601 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 5061818.2141907085,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 197.55747000090196 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_mean",
            "value": 127352.38642199303,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.852228199999445 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_std",
            "value": 35931.070179912116,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 27.831066399994597 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_mean",
            "value": 2078619.327830304,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 481.08856999988353 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_std",
            "value": 1157394.8019853178,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 864.0094099996531 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 61716.50853846727,
            "unit": "iter/sec",
            "range": "stddev: 0.00008022705299506247",
            "extra": "mean: 16.20312009997633 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 12549.88878852603,
            "unit": "iter/sec",
            "range": "stddev: 0.00013413424693627397",
            "extra": "mean: 79.68198100004429 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 4.170144428115966,
            "unit": "iter/sec",
            "range": "stddev: 0.1886076065122731",
            "extra": "mean: 239.79984799993872 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 2219236.756991219,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 450.60536999926626 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1683268.0662974282,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 594.0824399999656 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 6915242.9103704095,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 144.60807999967074 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2416631.7040375425,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 413.799090001703 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2299293.2547417576,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 434.9162499988779 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 297658.550275039,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.359554090000074 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 54557.22829294243,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 18.329376899987437 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 44135.36098065116,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 22.657569300008618 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.227805221162557,
            "unit": "iter/sec",
            "range": "stddev: 0.008106169130107423",
            "extra": "mean: 309.80803718999823 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 10556799.381015666,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 94.72568000091997 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 4439618.086271408,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 225.24460000113322 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 289026.1371253467,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.4598946999949476 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 97440.48916154493,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.26267426000004 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}