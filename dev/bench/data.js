window.BENCHMARK_DATA = {
  "lastUpdate": 1630724572057,
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
          "id": "d4ba726c04e1834e7e8ddb1dc9616722851a79b2",
          "message": "Add BacktestNode\n\n- Consolidate backtest configs.\n- Refactor backtest configuration.\n- Cleanup strategy configs.",
          "timestamp": "2021-09-04T12:42:40+10:00",
          "tree_id": "aa123bbea7149d54b550cd8dbd49eef4183c9f38",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/d4ba726c04e1834e7e8ddb1dc9616722851a79b2"
        },
        "date": 1630724560630,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 0.23648573398249342,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.228584883999929 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 0.5836545374427214,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.7133422869999322 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 0.23839075618789252,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.194793522999817 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 6306438.684770752,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 158.56809999831967 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 6192405.596632413,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 161.48812999972506 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 6312091.252666308,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 158.4260999993603 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 7583116.070714072,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 131.8719100004273 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 189.23133663080432,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.284537000079581 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 10966880.78773829,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 91.18362999970486 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 8651506.170991978,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 115.58680999996795 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 4899717.2422166765,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 204.09341000004133 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 9856227.213549612,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 101.45870000087598 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2230205.2175911027,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014348623628511246",
            "extra": "mean: 448.3892298844694 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 749800.4968846942,
            "unit": "iter/sec",
            "range": "stddev: 0.0000031575223431629803",
            "extra": "mean: 1.3336880999077039 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 613116.4431006501,
            "unit": "iter/sec",
            "range": "stddev: 0.0000027943109712929757",
            "extra": "mean: 1.6310115496867184 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 655203.8577543503,
            "unit": "iter/sec",
            "range": "stddev: 0.000002057910947177577",
            "extra": "mean: 1.5262425398827872 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3680911.22593702,
            "unit": "iter/sec",
            "range": "stddev: 9.98355609755588e-7",
            "extra": "mean: 271.6718602050605 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1227664.622332333,
            "unit": "iter/sec",
            "range": "stddev: 0.000007307642297717005",
            "extra": "mean: 814.5547096569317 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2510548.005402393,
            "unit": "iter/sec",
            "range": "stddev: 0.000002810862055685796",
            "extra": "mean: 398.31940988506176 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 4109954.771402895,
            "unit": "iter/sec",
            "range": "stddev: 0.000001894886972409662",
            "extra": "mean: 243.31167996251682 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1207805.5828731426,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016489943958765348",
            "extra": "mean: 827.9478205599844 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 670644.9864597403,
            "unit": "iter/sec",
            "range": "stddev: 0.000003403101013187886",
            "extra": "mean: 1.4911018798170517 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 800478.5902603873,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018204537102031818",
            "extra": "mean: 1.2492526498112966 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 6047515.937502257,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 165.35714999918127 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 3620421.66907801,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 276.2109199989027 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 7052187.17242273,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 141.7999799991776 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 9726707.720573153,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 102.80970999929195 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 4722829.643726949,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 211.73746999920695 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 4707001.4009911865,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 212.44948000003205 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_mean",
            "value": 121607.94105677027,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.223147200010317 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_std",
            "value": 35513.298455353084,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 28.158465799992882 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_mean",
            "value": 1952238.2567809245,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 512.2325599995747 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_std",
            "value": 1148994.678490225,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 870.3260499987664 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 77618.84207285321,
            "unit": "iter/sec",
            "range": "stddev: 0.00005596035246211438",
            "extra": "mean: 12.883469700068417 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 11085.181172619297,
            "unit": "iter/sec",
            "range": "stddev: 0.00015134304075715892",
            "extra": "mean: 90.21052380001038 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 3.746891555347422,
            "unit": "iter/sec",
            "range": "stddev: 0.20528472192780614",
            "extra": "mean: 266.8878950000135 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 2009717.2239425636,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 497.5824400003148 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1720826.7636453689,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 581.1160200005361 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 7018677.191337005,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 142.47698999952263 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2526708.9560268284,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 395.7717399998728 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2336814.680902919,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 427.9329499991036 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 297357.4217624322,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.3629562500004795 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 49402.45287821068,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 20.24190990000534 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 41470.56841845622,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 24.113486700002795 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.1818049810877778,
            "unit": "iter/sec",
            "range": "stddev: 0.0061419459979662454",
            "extra": "mean: 314.2870182000047 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 9490841.053460963,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 105.36474000218732 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 4561283.6510556005,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 219.2365299993071 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 298016.9889935296,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.3555134000152975 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 95316.00917652869,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.491417010000532 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}