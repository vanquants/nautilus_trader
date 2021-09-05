window.BENCHMARK_DATA = {
  "lastUpdate": 1630800280625,
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
          "id": "08594db09e19f76f5b3eb4e66a19cb83b9cde621",
          "message": "Add `StrategyBuilder`\n\n- Rename `BacktestRunConfig`.",
          "timestamp": "2021-09-05T09:45:05+10:00",
          "tree_id": "c98ad2093f541d9dbb253fb59ee918f8c5ac18b4",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/08594db09e19f76f5b3eb4e66a19cb83b9cde621"
        },
        "date": 1630800267951,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 0.24949066673741155,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.008165968999947 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 0.6308890086095836,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.5850648630000705 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 0.2282088828995422,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.381950375000088 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 5702851.984887356,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 175.3508599995257 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 6040962.3156083375,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 165.53654000063034 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 5922884.985143092,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 168.83664000033605 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 7062260.108228961,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 141.59773000073983 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 173.2683946483087,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.771393000031821 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 10102509.150003389,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 98.98531000089861 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 9467228.856023889,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 105.62752999931035 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 5083972.740375416,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 196.6965699989487 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 8511585.800299687,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 117.48692000082883 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2877595.4925695052,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013465937853612028",
            "extra": "mean: 347.5123597399943 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 804247.4299795493,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024602344918540244",
            "extra": "mean: 1.2433984402355236 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 618188.1307771086,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023978598808401255",
            "extra": "mean: 1.6176305403064362 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 615275.1266554999,
            "unit": "iter/sec",
            "range": "stddev: 0.000003420766226170858",
            "extra": "mean: 1.6252891701242334 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3587873.5954073104,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012434969956410657",
            "extra": "mean: 278.71661958215554 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1163883.8015259672,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024307461107039285",
            "extra": "mean: 859.1922996856738 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2329681.3058865904,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014895230708886372",
            "extra": "mean: 429.24326064394336 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 3934029.165983042,
            "unit": "iter/sec",
            "range": "stddev: 0.000001883094073562124",
            "extra": "mean: 254.19231983505597 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1212109.5466521545,
            "unit": "iter/sec",
            "range": "stddev: 0.00000267444422559589",
            "extra": "mean: 825.0079398862908 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 667375.766953471,
            "unit": "iter/sec",
            "range": "stddev: 0.0000029381090294511966",
            "extra": "mean: 1.4984062195799197 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 765099.9591500867,
            "unit": "iter/sec",
            "range": "stddev: 0.00000292017887516699",
            "extra": "mean: 1.3070187601510952 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 6490339.292177238,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 154.07515000106287 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 3465776.2394396686,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 288.53564999963055 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 7156881.051337318,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 139.72566999882474 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 9975027.518707953,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 100.25034999898708 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 4291333.664537526,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 233.02779000005103 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 4483270.362810656,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 223.0514600000788 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_mean",
            "value": 117398.10853814337,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.518024799991508 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_std",
            "value": 36537.268104827184,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 27.369314999987182 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_mean",
            "value": 1879731.8254262921,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 531.990780000342 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_std",
            "value": 1060988.2462554812,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 942.517510000016 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 50129.99560072386,
            "unit": "iter/sec",
            "range": "stddev: 0.00011222102715883801",
            "extra": "mean: 19.948136599987265 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 11472.187716065384,
            "unit": "iter/sec",
            "range": "stddev: 0.00014952503952727923",
            "extra": "mean: 87.16733239987207 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 3.925287649701078,
            "unit": "iter/sec",
            "range": "stddev: 0.19454044186342556",
            "extra": "mean: 254.7583996999947 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 1901988.4071496567,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 525.7655600007638 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1517128.3563916811,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 659.1400099978273 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 5979659.947493204,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 167.23359000025084 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 1900798.9019766764,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 526.0945800000627 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2159106.82759266,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 463.1544800008669 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 281028.0261495221,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.5583639599985872 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 46854.22271456047,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 21.3427935000027 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 37517.43937202576,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 26.654271100005644 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.0437200711030568,
            "unit": "iter/sec",
            "range": "stddev: 0.002254193234889608",
            "extra": "mean: 328.5453250099954 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 9239101.763413306,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 108.23563000030845 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 3986709.585984799,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 250.83342000016273 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 264492.41208344005,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.7808267999935197 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 91331.71455236753,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.949099169999954 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}