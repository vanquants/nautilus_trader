window.BENCHMARK_DATA = {
  "lastUpdate": 1627966587801,
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
          "id": "2ed1437266d3134255e9143be54bacf9d86f0dbf",
          "message": "Merge pull request #411 from nautechsystems/betfair_acceptance_tests\n\nAdd a couple of new strategies using betfair data to acceptance tests",
          "timestamp": "2021-08-03T14:37:21+10:00",
          "tree_id": "62c5d36f35b428500e283ac56a69265b12fdeb1e",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/2ed1437266d3134255e9143be54bacf9d86f0dbf"
        },
        "date": 1627966585198,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 328088.33172021236,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.047959660000288 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 47888.39911240652,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 20.881884100003845 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 42814.08833709612,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 23.356797700012066 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.426250651975375,
            "unit": "iter/sec",
            "range": "stddev: 0.008854847102860632",
            "extra": "mean: 291.86422756999946 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 10448054.363122407,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 95.7116000017777 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 4800899.035550602,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 208.29432000027737 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 292837.6365235035,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.41486160000386 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 95468.76113061325,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.474630530000013 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 0.2889334764287979,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.4610042849999445 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 0.3383946094637542,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.9551298159999533 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 0.10235122862620191,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.770278416999872 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 7351865.966014672,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 136.01989000108006 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 7059209.543630793,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 141.6589199993723 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 6278723.984987589,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 159.26802999956635 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 8724729.04047184,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 114.61673999974664 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 186.03491689170423,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.375335000053383 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 11423796.934315823,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 87.53656999942905 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 11018726.435935285,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 90.7545899985962 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 5701737.330742189,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 175.38514000079886 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 9554047.629589075,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 104.66768000014781 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2282256.2082018885,
            "unit": "iter/sec",
            "range": "stddev: 9.581389901074023e-7",
            "extra": "mean: 438.16290055701757 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 898974.1639265411,
            "unit": "iter/sec",
            "range": "stddev: 0.000001630367455413914",
            "extra": "mean: 1.1123790205851947 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 708601.4551785372,
            "unit": "iter/sec",
            "range": "stddev: 0.000010737507516676626",
            "extra": "mean: 1.411230519909168 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 665172.5117322608,
            "unit": "iter/sec",
            "range": "stddev: 0.000008443570530910471",
            "extra": "mean: 1.5033694002113407 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3932429.8401568383,
            "unit": "iter/sec",
            "range": "stddev: 0.0000060510518424736405",
            "extra": "mean: 254.2957002788171 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1327357.3246266241,
            "unit": "iter/sec",
            "range": "stddev: 0.000006388989912335232",
            "extra": "mean: 753.3766390156416 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2480777.570923274,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011943733584533596",
            "extra": "mean: 403.0994200047644 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 4622837.4896043185,
            "unit": "iter/sec",
            "range": "stddev: 6.77278695720789e-7",
            "extra": "mean: 216.31735968412613 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1393868.7368345687,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015768364503866563",
            "extra": "mean: 717.4276698901849 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 758187.1838039946,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025061075487247115",
            "extra": "mean: 1.3189355100712419 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 796724.4238958881,
            "unit": "iter/sec",
            "range": "stddev: 0.000004516521586826424",
            "extra": "mean: 1.2551391296756265 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 7292675.258890467,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 137.12388999920222 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 4493686.2584782345,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 222.5344499993298 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 8473228.453296572,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 118.01877000152672 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 12731472.492766587,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 78.54551000036736 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 5181367.285156015,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 192.9992499981381 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 5492870.309273446,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 182.05417999979545 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_mean",
            "value": 143432.6067696434,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.971915400004036 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_std",
            "value": 36518.55724630905,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 27.38333810000313 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_mean",
            "value": 1968824.4523222123,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 507.91730000128155 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_std",
            "value": 1150393.6675884533,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 869.2676500004382 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 75575.35841575208,
            "unit": "iter/sec",
            "range": "stddev: 0.00005814131792587231",
            "extra": "mean: 13.231826099968202 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 11825.5985605404,
            "unit": "iter/sec",
            "range": "stddev: 0.0001604528398189272",
            "extra": "mean: 84.56231579996256 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 4.110107692207406,
            "unit": "iter/sec",
            "range": "stddev: 0.21529659311547084",
            "extra": "mean: 243.30262729999959 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 2288499.6644274024,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 436.9675099997039 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1866632.539644888,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 535.7240800003638 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 6588358.752198323,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 151.78287000026103 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2539996.8864728636,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 393.7012699998377 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2477815.375601496,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 403.5813199993754 nsec\nrounds: 1"
          }
        ]
      }
    ]
  }
}