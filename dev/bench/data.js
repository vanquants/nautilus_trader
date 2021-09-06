window.BENCHMARK_DATA = {
  "lastUpdate": 1630916670703,
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
          "id": "066606ccfb85f3b3059492212fc5ae47f533f1ec",
          "message": "Fix update_forward_refs",
          "timestamp": "2021-09-06T18:04:00+10:00",
          "tree_id": "bb9e290896e840918740c29098bce4651bbfb7eb",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/066606ccfb85f3b3059492212fc5ae47f533f1ec"
        },
        "date": 1630916654328,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_mean",
            "value": 145018.8960343686,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.895653100013988 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_std",
            "value": 49223.66236383608,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 20.315432699999292 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_mean",
            "value": 1964052.304200438,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 509.1514100013228 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_std",
            "value": 1061064.9342140106,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 942.4493899996378 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 69445.60428217203,
            "unit": "iter/sec",
            "range": "stddev: 0.00006962511045368771",
            "extra": "mean: 14.399759500065556 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 15548.153518441219,
            "unit": "iter/sec",
            "range": "stddev: 0.00011856311622228777",
            "extra": "mean: 64.31631890011431 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 4.542656663335013,
            "unit": "iter/sec",
            "range": "stddev: 0.18296031786550584",
            "extra": "mean: 220.13550090000535 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 2022185.8049033885,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 494.51439999984365 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1646246.4067320284,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 607.4424800021916 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 6477478.939316222,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 154.38104999930147 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2277933.2821648484,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 438.9944199988349 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2351837.5282844366,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 425.1994400010517 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 309371.6369078657,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.2323583700008385 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 64195.256291592355,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 15.577474999986407 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 59038.35121849234,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 16.93814239999938 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 2.9420244464005583,
            "unit": "iter/sec",
            "range": "stddev: 0.0034081868095713385",
            "extra": "mean: 339.9020022500008 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 10040752.4016112,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 99.59413000160566 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 4426949.729350209,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 225.88917000121 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 254329.87714253223,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.931901400005699 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 90047.59127757486,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.105238750001263 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 0.25186277608447316,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.9704160159999446 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 0.5392969960032598,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.8542658450001 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 0.25349442630690006,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.9448599109998668 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 5648866.354401184,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 177.02667000094152 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 5941309.95780951,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 168.31305000096108 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 6190931.931500357,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 161.52657000020554 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 6684460.2541736355,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 149.60071000132302 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 156.61322031539126,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.38515700006792 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 9674885.15924754,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 103.36039999856439 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 10051451.36932176,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 99.48811999947793 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 5163959.056616519,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 193.6498700001721 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 8867522.495033903,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 112.77106999841635 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2544828.5562863527,
            "unit": "iter/sec",
            "range": "stddev: 2.111030035623492e-7",
            "extra": "mean: 392.95377974667645 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 839046.5202669878,
            "unit": "iter/sec",
            "range": "stddev: 4.852288297212941e-7",
            "extra": "mean: 1.1918290295534462 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 609615.3804657571,
            "unit": "iter/sec",
            "range": "stddev: 4.793713322192557e-7",
            "extra": "mean: 1.6403785600618903 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 659411.8046715081,
            "unit": "iter/sec",
            "range": "stddev: 6.035558097704842e-7",
            "extra": "mean: 1.5165030303001004 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3858152.853588899,
            "unit": "iter/sec",
            "range": "stddev: 2.723967143062338e-7",
            "extra": "mean: 259.1913897526865 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1215325.3105740058,
            "unit": "iter/sec",
            "range": "stddev: 4.445099752850546e-7",
            "extra": "mean: 822.8249599505943 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2365317.687098245,
            "unit": "iter/sec",
            "range": "stddev: 2.73374956286785e-7",
            "extra": "mean: 422.77619004607914 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 3951601.573992898,
            "unit": "iter/sec",
            "range": "stddev: 2.7181016963828774e-7",
            "extra": "mean: 253.0619500157627 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1229281.5501506976,
            "unit": "iter/sec",
            "range": "stddev: 4.334547580488038e-7",
            "extra": "mean: 813.4832902010203 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 663183.116211853,
            "unit": "iter/sec",
            "range": "stddev: 4.2642001553850096e-7",
            "extra": "mean: 1.5078791596988594 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 772586.928547104,
            "unit": "iter/sec",
            "range": "stddev: 4.024134100502921e-7",
            "extra": "mean: 1.294352729835282 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 6428961.391017524,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 155.5461199995989 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 3829295.079992655,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 261.1446700007036 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 7206951.652532474,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 138.75492000124723 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 10102533.644833727,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 98.98506999888923 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 4509301.019571022,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 221.76385999955528 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 4635285.751226657,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 215.73643000010634 nsec\nrounds: 1"
          }
        ]
      }
    ]
  }
}