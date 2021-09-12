window.BENCHMARK_DATA = {
  "lastUpdate": 1631435825784,
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
          "id": "ca33757222097eab0a0086f066a3f75e9ed09993",
          "message": "Update README",
          "timestamp": "2021-09-12T18:17:29+10:00",
          "tree_id": "c7d68aec93ea5d0b2f0b004a6329cfddc48c8036",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/ca33757222097eab0a0086f066a3f75e9ed09993"
        },
        "date": 1631435821481,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 0.26996392352766607,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.7041986459998952 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 0.6623160261675055,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.5098532430001796 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 0.24285281311411985,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.1177204710002115 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 6175543.021675871,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 161.92907999993622 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 5531850.6534892265,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 180.77133000133472 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 6549604.708436857,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 152.6809699998921 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 6983833.26399291,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 143.1878400012465 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 184.19021692614493,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.429169999842998 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 10973915.223067839,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 91.12517999938063 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 10793983.865259446,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 92.64419999908569 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 5480642.780762421,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 182.4603499994737 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 9391402.377725273,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 106.48037000009936 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2771505.6282178336,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012094196851755422",
            "extra": "mean: 360.81471017723743 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 890932.5690394995,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021762120193066726",
            "extra": "mean: 1.1224194004694255 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 712523.4659409543,
            "unit": "iter/sec",
            "range": "stddev: 0.000001444804898768106",
            "extra": "mean: 1.4034625493763997 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 708449.4922780328,
            "unit": "iter/sec",
            "range": "stddev: 0.000002232488883787812",
            "extra": "mean: 1.411533229820634 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3734611.484807886,
            "unit": "iter/sec",
            "range": "stddev: 6.817473776329018e-7",
            "extra": "mean: 267.765470134691 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1137467.7687509519,
            "unit": "iter/sec",
            "range": "stddev: 0.00001375589906101734",
            "extra": "mean: 879.1457898610133 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2451195.4724419108,
            "unit": "iter/sec",
            "range": "stddev: 9.633386664917143e-7",
            "extra": "mean: 407.964200016977 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 3887049.934498814,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017325310889585417",
            "extra": "mean: 257.2645108375582 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1215051.7552068853,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014942680713077507",
            "extra": "mean: 823.0102098241332 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 700201.0744740767,
            "unit": "iter/sec",
            "range": "stddev: 0.0000033631569132399447",
            "extra": "mean: 1.4281611903425073 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 781682.3005020572,
            "unit": "iter/sec",
            "range": "stddev: 0.000004297307726476845",
            "extra": "mean: 1.2792921105642563 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 6120584.075083114,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 163.38310000037382 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 3868077.9632605365,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 258.526330001132 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 7343181.224688503,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 136.18076000057044 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 10434358.33849767,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 95.83723000105238 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 4909333.689061662,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 203.69362999872465 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 4992995.326860974,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 200.28057999979865 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 78032.55032632645,
            "unit": "iter/sec",
            "range": "stddev: 0.00005684500098270621",
            "extra": "mean: 12.815164900007403 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 11578.645937263884,
            "unit": "iter/sec",
            "range": "stddev: 0.00013705931128685234",
            "extra": "mean: 86.36588470001243 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 3.8007618459126586,
            "unit": "iter/sec",
            "range": "stddev: 0.20347774590694231",
            "extra": "mean: 263.1051458999991 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 2080787.792918598,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 480.58720999961224 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1722099.6479527077,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 580.6864900000619 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 6360836.381333816,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 157.21202999884554 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 1957787.7851615667,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 510.780590000195 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2279598.9164319215,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 438.6736599985852 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 299113.26526497473,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.3432151500005602 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 51677.47726761846,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 19.35078980000071 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 41742.90225081167,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 23.95616850001261 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.159506981239163,
            "unit": "iter/sec",
            "range": "stddev: 0.004516108585916593",
            "extra": "mean: 316.5050768800006 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 10260805.03814541,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 97.45823999992353 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 4459689.247985298,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 224.2308699987916 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 224632.42329660474,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.451717099982488 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_mean",
            "value": 123980.51904017839,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.065783300003204 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_std",
            "value": 37970.928796225584,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 26.33593729999575 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_mean",
            "value": 2018145.7539119683,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 495.5043500012834 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_std",
            "value": 1102187.5314336573,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 907.2866199994678 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 89427.94280149655,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.182187229999272 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}