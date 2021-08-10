window.BENCHMARK_DATA = {
  "lastUpdate": 1628580977873,
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
          "id": "c06ae8ac025c2e31755fe1e85c6f55d79d5a7d21",
          "message": "Update dependencies",
          "timestamp": "2021-08-10T17:16:45+10:00",
          "tree_id": "1a1e26b065a0f7590f49cb3d7343b52104419ef5",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/c06ae8ac025c2e31755fe1e85c6f55d79d5a7d21"
        },
        "date": 1628580971231,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 0.31792553769776494,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.145390607000081 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 0.4334680044589047,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.306975347000048 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 0.13432013324189526,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.444900298000107 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 7165332.231020245,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 139.56086999996842 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 6854857.643463461,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 145.88194999987536 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 7495589.407798109,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 133.41179000008196 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 8164488.979755709,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 122.4816399997053 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 197.50480331711307,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.063167999992402 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 11669408.005082425,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 85.6941500001085 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 11471945.872586101,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 87.16917000015201 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 6182373.718670988,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 161.75017000023217 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 10587022.893126328,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 94.45526000035898 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2991993.9936870905,
            "unit": "iter/sec",
            "range": "stddev: 7.053667805278066e-8",
            "extra": "mean: 334.22526987351375 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 948633.2097297605,
            "unit": "iter/sec",
            "range": "stddev: 1.2263041994306464e-7",
            "extra": "mean: 1.054148210017729 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 732497.8232370876,
            "unit": "iter/sec",
            "range": "stddev: 1.414741888072343e-7",
            "extra": "mean: 1.3651917702372884 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 711282.2942257287,
            "unit": "iter/sec",
            "range": "stddev: 1.4525126184472163e-7",
            "extra": "mean: 1.4059115601753547 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 4356196.424887672,
            "unit": "iter/sec",
            "range": "stddev: 5.875961734461958e-8",
            "extra": "mean: 229.5580599366076 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1396654.6383947835,
            "unit": "iter/sec",
            "range": "stddev: 1.1217202684083326e-7",
            "extra": "mean: 715.9966197150425 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2856778.0911127315,
            "unit": "iter/sec",
            "range": "stddev: 9.191784449933183e-8",
            "extra": "mean: 350.04468954412005 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 4833698.532076181,
            "unit": "iter/sec",
            "range": "stddev: 5.1321537134217184e-8",
            "extra": "mean: 206.88092014097492 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1486021.3319448535,
            "unit": "iter/sec",
            "range": "stddev: 1.0383019143416199e-7",
            "extra": "mean: 672.9378498835104 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 801990.4697465941,
            "unit": "iter/sec",
            "range": "stddev: 1.3246413986266644e-7",
            "extra": "mean: 1.2468976100376494 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 911237.6276959246,
            "unit": "iter/sec",
            "range": "stddev: 2.965554324996773e-7",
            "extra": "mean: 1.0974085898192243 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 7675024.128352358,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 130.29275000008056 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 4588504.73111661,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 217.93591999994533 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 8663894.104919275,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 115.4215400015346 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 11998878.824680768,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 83.34112000056848 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 5409339.018240857,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 184.86547000065912 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 5556530.726694119,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 179.96841000012864 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_mean",
            "value": 169974.402535084,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.883238799992796 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_std",
            "value": 54949.66347067581,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 18.198473600000398 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_mean",
            "value": 2299840.193309489,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 434.8128199990242 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_std",
            "value": 1287840.9526746098,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 776.4933999987988 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 72517.34792605828,
            "unit": "iter/sec",
            "range": "stddev: 0.00005556724850405355",
            "extra": "mean: 13.789803800045775 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 15693.286294719202,
            "unit": "iter/sec",
            "range": "stddev: 0.0001695361164468663",
            "extra": "mean: 63.72151640007359 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 4.771605342405675,
            "unit": "iter/sec",
            "range": "stddev: 0.21099439283117913",
            "extra": "mean: 209.5730741000125 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 2284608.169822763,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 437.7118200000041 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1914231.187134781,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 522.4029400005747 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 7768335.193691428,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 128.72771000047578 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2693479.863673652,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 371.2669299989102 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2649153.9225010364,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 377.4790099987513 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 323759.1252438469,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.088716030001706 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 70165.59424054598,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 14.251999299995077 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 61996.694559428615,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 16.12989220000145 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.413732374331201,
            "unit": "iter/sec",
            "range": "stddev: 0.00025514209078837587",
            "extra": "mean: 292.9345040399994 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 11417851.697023388,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 87.58214999943448 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 4960719.780586709,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 201.58365000042977 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 288955.08207685227,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.4607455000013942 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 106637.62528860001,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.377553159999934 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}