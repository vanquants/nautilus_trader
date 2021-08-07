window.BENCHMARK_DATA = {
  "lastUpdate": 1628323681389,
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
          "id": "bb5e0744079a96ebd998ab15a9e67d12e436ff7d",
          "message": "Improve DataEngine and DataClient feeds machinery\n\n- Fix subscription mechanics.\n- Add query methods.\n- Remove redundant MockMarketDataClient.",
          "timestamp": "2021-08-07T17:45:13+10:00",
          "tree_id": "c7a1b0a11048b94f6295bdeca7a47445ae6edce9",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/bb5e0744079a96ebd998ab15a9e67d12e436ff7d"
        },
        "date": 1628323676250,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 0.21249281312650262,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.706041514000162 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 0.2625636087484731,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.808600912999964 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 0.07879552580578914,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 12.691075918000024 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 5455619.814920809,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 183.29722999851583 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 5299437.846237937,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 188.69925999979387 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 5594712.325444456,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 178.74020000135715 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 6420708.995235997,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 155.74603999993997 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 149.97349218439837,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.667845000038142 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 8876126.990791332,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 112.66174999946088 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 8942564.1461773,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 111.82474999941405 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 4253824.517912435,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 235.0825700000314 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 6820492.414973257,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 146.61698000054457 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2398744.037876822,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015512251306028121",
            "extra": "mean: 416.88482981498964 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 648608.4517029413,
            "unit": "iter/sec",
            "range": "stddev: 0.000003395533853913573",
            "extra": "mean: 1.5417622101199413 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 524060.7423128773,
            "unit": "iter/sec",
            "range": "stddev: 0.00000321124796638154",
            "extra": "mean: 1.9081757499839116 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 516186.6400377785,
            "unit": "iter/sec",
            "range": "stddev: 0.0000034153951492656118",
            "extra": "mean: 1.9372837699302183 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3070582.0848197085,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012719961761061863",
            "extra": "mean: 325.6711504127452 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1041236.917734615,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023989488305900096",
            "extra": "mean: 960.3962200799288 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2100199.2010660125,
            "unit": "iter/sec",
            "range": "stddev: 0.000001556665000368484",
            "extra": "mean: 476.1453101650659 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 3431554.606141898,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014779225647360204",
            "extra": "mean: 291.413110026042 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1159328.9545618407,
            "unit": "iter/sec",
            "range": "stddev: 0.000002948362703536287",
            "extra": "mean: 862.5679502483763 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 614007.0442044482,
            "unit": "iter/sec",
            "range": "stddev: 0.0000033045852378729566",
            "extra": "mean: 1.6286458102376855 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 681962.5873084073,
            "unit": "iter/sec",
            "range": "stddev: 0.0000027954286697988936",
            "extra": "mean: 1.4663561001884773 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 5383254.332283913,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 185.76123999991978 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 3296532.818857843,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 303.34902000049624 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 6208478.086558542,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 161.0700700007328 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 9174082.153670752,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 109.00273000061134 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 4028754.8347351295,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 248.21565000138435 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 4099912.9096602174,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 243.90761999939056 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_mean",
            "value": 113611.33428475769,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.80193870000312 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_std",
            "value": 33434.62967361228,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 29.90910949999943 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_mean",
            "value": 1685436.9566959885,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 593.3179499993457 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_std",
            "value": 921533.929348786,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.0851472400008788 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 50639.08679727093,
            "unit": "iter/sec",
            "range": "stddev: 0.00007789616666561084",
            "extra": "mean: 19.747591499890405 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 9036.042577181124,
            "unit": "iter/sec",
            "range": "stddev: 0.00016974604683403347",
            "extra": "mean: 110.66791589996683 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 3.217272345087541,
            "unit": "iter/sec",
            "range": "stddev: 0.2625974966682188",
            "extra": "mean: 310.8223030999852 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 1651459.4227649604,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 605.5250200006412 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1379497.1763113036,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 724.9018100014837 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 5201363.776825287,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 192.25726999820836 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 1924537.165653992,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 519.6054499992897 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 1922683.3276193126,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 520.1064499988206 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 253462.27760338492,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.9453602699995827 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 39847.02408676761,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.095977000000858 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 34004.39210248462,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 29.40796580001006 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 2.6458850830624887,
            "unit": "iter/sec",
            "range": "stddev: 0.0022349427820380122",
            "extra": "mean: 377.9453636900007 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 8434425.546401212,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 118.56172000079823 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 3672991.2392680654,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 272.2576599990134 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 219257.4810319964,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.56084780000765 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 79880.71936195163,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 12.518665430000055 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}