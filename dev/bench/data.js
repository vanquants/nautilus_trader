window.BENCHMARK_DATA = {
  "lastUpdate": 1629190067948,
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
          "id": "37b1257c440f6faa75f8f2a763b17623d1acef46",
          "message": "Fix attribute name",
          "timestamp": "2021-08-17T18:25:10+10:00",
          "tree_id": "2e6d2322b8b5ec0c3bfceafbe38d1e3eda578891",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/37b1257c440f6faa75f8f2a763b17623d1acef46"
        },
        "date": 1629190065319,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 89995.070214052,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.111719759999232 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 0.27533366287908717,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.631956912000078 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 0.36689403067735743,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.725582637999878 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 0.11330258244292282,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.825924162000092 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 5887418.545392115,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 169.85372999897663 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 6104842.48920502,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 163.8043900015873 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 6234289.5902318815,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 160.40320000001884 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 7405721.097269887,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 135.03074000027482 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 164.43179196344147,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.081549000100495 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 9774420.06902862,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 102.3078599996552 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 9970810.452548109,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 100.29274999851623 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 5141674.99829297,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 194.4891500011181 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 8927501.722703297,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 112.01341999822034 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2505115.756122951,
            "unit": "iter/sec",
            "range": "stddev: 9.143389717629164e-8",
            "extra": "mean: 399.18315054137565 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 804112.3137915,
            "unit": "iter/sec",
            "range": "stddev: 1.6197823643233833e-7",
            "extra": "mean: 1.243607370324753 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 595604.1471526888,
            "unit": "iter/sec",
            "range": "stddev: 2.483122155681714e-7",
            "extra": "mean: 1.6789674900360296 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 587049.8091743019,
            "unit": "iter/sec",
            "range": "stddev: 2.7781446767936916e-7",
            "extra": "mean: 1.7034329700345552 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3570004.2668635068,
            "unit": "iter/sec",
            "range": "stddev: 8.358802222884964e-8",
            "extra": "mean: 280.11171002845003 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1134094.1849743656,
            "unit": "iter/sec",
            "range": "stddev: 1.3845934720845417e-7",
            "extra": "mean: 881.7609800394166 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2383219.7295424333,
            "unit": "iter/sec",
            "range": "stddev: 1.9727265936589764e-7",
            "extra": "mean: 419.6004202231052 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 4062623.0560904536,
            "unit": "iter/sec",
            "range": "stddev: 6.092262446049888e-8",
            "extra": "mean: 246.14639020001053 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1223409.1710538229,
            "unit": "iter/sec",
            "range": "stddev: 1.3969234347909253e-7",
            "extra": "mean: 817.3880200183703 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 670375.9056119006,
            "unit": "iter/sec",
            "range": "stddev: 2.12940255490165e-7",
            "extra": "mean: 1.4917003902269244 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 764284.034715218,
            "unit": "iter/sec",
            "range": "stddev: 2.6785177939359133e-7",
            "extra": "mean: 1.3084140902833497 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 6398240.842145473,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 156.2929599981544 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 3645726.9236900434,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 274.2937199991502 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 7157376.392056203,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 139.71600000104445 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 10142332.422022363,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 98.59665000021778 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 4511155.207163445,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 221.67270999943867 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 4630929.720260014,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 215.93936000044778 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_mean",
            "value": 145507.59487833382,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.872493499986376 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_std",
            "value": 46514.63318498825,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 21.498610899993764 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_mean",
            "value": 1908524.4243418234,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 523.9649999998619 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_std",
            "value": 1070419.1394198264,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 934.21348999982 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 27133.102424257133,
            "unit": "iter/sec",
            "range": "stddev: 0.00022044560767717284",
            "extra": "mean: 36.8553505000591 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 14872.34768768307,
            "unit": "iter/sec",
            "range": "stddev: 0.0001542921046298885",
            "extra": "mean: 67.23887989978721 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 4.323868239897783,
            "unit": "iter/sec",
            "range": "stddev: 0.22306736307992944",
            "extra": "mean: 231.27439239999603 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 1940840.3147672103,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 515.2407399987169 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1511747.3578715583,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 661.486189999323 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 6448494.743965985,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 155.0749500006532 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2135032.1129141124,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 468.3770299993739 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2133415.028901129,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 468.7320500011083 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 308992.28100208135,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.2363267999994605 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 61762.04203098513,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 16.19117449999976 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 52540.411378589924,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 19.032968600004097 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 2.9168061484096204,
            "unit": "iter/sec",
            "range": "stddev: 0.002204794834137311",
            "extra": "mean: 342.840747419998 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 9584418.648794137,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 104.33601000158887 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 4403480.5286251865,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 227.09308999992572 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 263911.5427620935,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.7891484000056153 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}