window.BENCHMARK_DATA = {
  "lastUpdate": 1628154700425,
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
          "id": "41be7bca5d95c52a1f3afb0e4c88f0262e2c7d6d",
          "message": "Add strategy OMS configuration option (experimental)",
          "timestamp": "2021-08-05T18:51:18+10:00",
          "tree_id": "ce3b0ac7eed15cf3b7c52f0e6a17d5cb17c2484a",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/41be7bca5d95c52a1f3afb0e4c88f0262e2c7d6d"
        },
        "date": 1628154696477,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 0.2665772203413767,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.7512582609999754 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 0.31388206293928056,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.1859099899998 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 0.09210923994039291,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.856674104000149 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 6515640.632521809,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 153.47684999824196 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 6243760.531993927,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 160.1598900015233 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 6725997.58812495,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 148.67683000147736 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 7340539.981823481,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 136.2297600007878 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 170.43518749770863,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.867333000196595 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 10771044.115964511,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 92.84150999974372 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 11271861.634796996,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 88.7164899995696 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 5345277.105551602,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 187.08104000097592 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 9474399.17850412,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 105.54759000115155 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2804617.419672659,
            "unit": "iter/sec",
            "range": "stddev: 0.000003349053033610158",
            "extra": "mean: 356.55487018857457 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 921030.257528885,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019370632306918344",
            "extra": "mean: 1.085740660337251 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 668550.423363156,
            "unit": "iter/sec",
            "range": "stddev: 0.0000035298704073560657",
            "extra": "mean: 1.4957734900076503 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 581004.2856975863,
            "unit": "iter/sec",
            "range": "stddev: 0.00000183428326406544",
            "extra": "mean: 1.72115769989432 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3543895.4130482925,
            "unit": "iter/sec",
            "range": "stddev: 8.514124352016282e-7",
            "extra": "mean: 282.17537016416827 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1255340.8792889938,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010221360292235793",
            "extra": "mean: 796.5963799142628 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2488786.333811675,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017882071830840403",
            "extra": "mean: 401.802270614553 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 3774932.47941157,
            "unit": "iter/sec",
            "range": "stddev: 6.873017666040409e-7",
            "extra": "mean: 264.9054004155005 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1244669.3143138199,
            "unit": "iter/sec",
            "range": "stddev: 0.000007222548371040923",
            "extra": "mean: 803.4262502496858 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 731153.306735911,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016407323602476137",
            "extra": "mean: 1.3677022189290255 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 777664.4928459409,
            "unit": "iter/sec",
            "range": "stddev: 0.000003314621326663962",
            "extra": "mean: 1.2859015799222107 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 6026387.501882123,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 165.93689000046652 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 3754001.4840332777,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 266.38241999989987 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 6705747.764696166,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 149.12579999872833 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 9253554.614317402,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 108.0665799986491 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 4514770.7270559985,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 221.49519000095097 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 4459185.520816591,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 224.25620000149138 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_mean",
            "value": 121089.64893924023,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.258344200021384 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_std",
            "value": 37188.27776842631,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 26.89019389999885 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_mean",
            "value": 1960316.4130994743,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 510.12173000117406 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_std",
            "value": 1103353.4939947284,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 906.3278499979788 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 18452.308900516426,
            "unit": "iter/sec",
            "range": "stddev: 0.0004039775435206505",
            "extra": "mean: 54.193759999975555 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 10249.949917977252,
            "unit": "iter/sec",
            "range": "stddev: 0.00016125151216673015",
            "extra": "mean: 97.56145229998765 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 3.5948971552175615,
            "unit": "iter/sec",
            "range": "stddev: 0.24056149305090951",
            "extra": "mean: 278.17207470000085 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 2038471.4187732518,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 490.5636600005891 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1662965.847036471,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 601.3352600007238 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 6496086.367762684,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 153.93884000104663 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2282008.981209209,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 438.2103700004336 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2403024.3888309784,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 416.14225999865084 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 312408.001701195,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.2009423399995285 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 48747.55063055298,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 20.513851200007593 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 39063.82954352047,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.599128700014262 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.1208542982090126,
            "unit": "iter/sec",
            "range": "stddev: 0.0053016944120275805",
            "extra": "mean: 320.42508378999855 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 10480256.716077486,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 95.41750999915166 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 4477474.274668226,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 223.34020000016608 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 268152.5823580593,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.7292201000127534 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 89568.76670323663,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.164606109998658 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}