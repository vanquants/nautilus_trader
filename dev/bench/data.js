window.BENCHMARK_DATA = {
  "lastUpdate": 1629512417655,
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
          "id": "5c14c174ce9b2ce49f5ecfd10fe36538cc6a0d0c",
          "message": "Fix `is_initialized` property\n\n- Add tests.",
          "timestamp": "2021-08-21T11:57:50+10:00",
          "tree_id": "d11639e0e1731ec9834cd99d63c6b455d4888c21",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/5c14c174ce9b2ce49f5ecfd10fe36538cc6a0d0c"
        },
        "date": 1629512413034,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 0.23393530820734149,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.274686056000064 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 0.2998583956508821,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.3349074579998614 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 0.09048736812999479,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.051266278000185 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 5676316.347684571,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 176.17059000031077 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 5518290.539575453,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 181.2155399989024 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 5723128.765867862,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 174.7295999984999 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 5956328.438119861,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 167.88866000069902 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 152.4867229831525,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.55794799990872 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 9023063.039382173,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 110.82710999971823 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 9437421.168042675,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 105.96114999998463 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 4752844.70826472,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 210.40030999984083 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 8448796.701358857,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 118.36004999850047 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2619913.921584436,
            "unit": "iter/sec",
            "range": "stddev: 8.731945877267614e-7",
            "extra": "mean: 381.69192955592735 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 795724.7237730417,
            "unit": "iter/sec",
            "range": "stddev: 0.000002119031814000615",
            "extra": "mean: 1.2567160101025365 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 586571.3636440424,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026438307127093245",
            "extra": "mean: 1.704822400104149 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 589415.7101432342,
            "unit": "iter/sec",
            "range": "stddev: 0.000002309211644583885",
            "extra": "mean: 1.6965954296620112 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3457686.366996018,
            "unit": "iter/sec",
            "range": "stddev: 8.625431535085704e-7",
            "extra": "mean: 289.2107304887759 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1046024.10935487,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020612501564992367",
            "extra": "mean: 956.0009095935129 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2330731.7714449265,
            "unit": "iter/sec",
            "range": "stddev: 9.29184150972873e-7",
            "extra": "mean: 429.04979983177327 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 3715926.633525911,
            "unit": "iter/sec",
            "range": "stddev: 9.210714601687348e-7",
            "extra": "mean: 269.1118793836722 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1272097.8664542239,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017715414711778776",
            "extra": "mean: 786.1030400022173 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 668063.8109179854,
            "unit": "iter/sec",
            "range": "stddev: 0.0000027319722629958306",
            "extra": "mean: 1.4968629996974414 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 711297.973245259,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017276318764453106",
            "extra": "mean: 1.4058805699073673 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 6109341.9475217685,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 163.6837499995636 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 3433090.1206497895,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 291.2827699992704 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 6412442.806698638,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 155.94680999811317 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 10345727.307548087,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 96.65826000173183 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 3736195.3187524625,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 267.6519599981475 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 4265188.795839318,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 234.45620999837047 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_mean",
            "value": 121711.25241952197,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.216167199998381 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_std",
            "value": 36115.218294255326,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 27.689158399994085 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_mean",
            "value": 1548924.955469121,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 645.609069999864 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_std",
            "value": 902836.2727895915,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.107620540001335 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 32328.390445446545,
            "unit": "iter/sec",
            "range": "stddev: 0.00018285895729458035",
            "extra": "mean: 30.932563799842683 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 10948.925648717166,
            "unit": "iter/sec",
            "range": "stddev: 0.00015484277815024227",
            "extra": "mean: 91.33316199997807 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 3.715361209555511,
            "unit": "iter/sec",
            "range": "stddev: 0.2360275637263594",
            "extra": "mean: 269.1528342999618 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 1665911.2592040822,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 600.2720700007558 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1512620.0309336449,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 661.1045600016041 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 6035890.369939119,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 165.67563999842605 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2101391.7748836027,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 475.8750900009545 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2037307.334905519,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 490.8439599989834 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 280403.6284611989,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.5662876599985793 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 44095.72856359391,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 22.67793350001739 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 37262.045694059234,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 26.83695919999991 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 2.882223254713731,
            "unit": "iter/sec",
            "range": "stddev: 0.001732423883351035",
            "extra": "mean: 346.95438612000316 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 8125319.731306095,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 123.0720800003837 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 4100811.394733201,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 243.8541800006533 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 231134.3679541763,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.326487699995596 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 87511.88126935126,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.427019799998561 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}