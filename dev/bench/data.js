window.BENCHMARK_DATA = {
  "lastUpdate": 1632465881208,
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
          "id": "49fc95ae2d00cf4201dc20944e4c216f83f8e1b4",
          "message": "Refine `BacktestEngine` runs",
          "timestamp": "2021-09-24T16:23:27+10:00",
          "tree_id": "89fdaa44dadb3489ed5eb3d73c4b3bad1277b296",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/49fc95ae2d00cf4201dc20944e4c216f83f8e1b4"
        },
        "date": 1632465873465,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 2.6270762907002227,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 380.6512979999752 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 8.165364504680442,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 122.46850700012146 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 1.7896963248823388,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 558.7540110000191 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 5894554.321812292,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 169.64811000207192 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 5921186.169921264,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 168.8850799996544 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 5881864.400473954,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 170.01411999899574 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 6638985.637296881,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 150.62542000123358 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 165.9470924142445,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.026017000067441 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 10374039.09149566,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 96.39447000154178 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 8769305.955777146,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 114.03411000173946 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 4429401.605998802,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 225.7641300002433 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 8894261.022524392,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 112.43205000027956 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 1926837.887375688,
            "unit": "iter/sec",
            "range": "stddev: 0.0000029926598969833366",
            "extra": "mean: 518.985020250966 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 705023.7666057205,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018062950663422365",
            "extra": "mean: 1.4183919001970935 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 549787.747594595,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024799374983242794",
            "extra": "mean: 1.8188837499110377 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 541025.0767171441,
            "unit": "iter/sec",
            "range": "stddev: 0.0000029258829712800502",
            "extra": "mean: 1.8483431601134725 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3251931.6314615235,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010003033326695238",
            "extra": "mean: 307.5095399685779 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1120318.5482174975,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016109635644081836",
            "extra": "mean: 892.6032703743658 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2283473.5593444863,
            "unit": "iter/sec",
            "range": "stddev: 9.528082390387187e-7",
            "extra": "mean: 437.9293098918424 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 3570306.7300529904,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014874840401412297",
            "extra": "mean: 280.08797999973467 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1207860.394960822,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017365832196463315",
            "extra": "mean: 827.9102487108503 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 650109.9567717529,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026039865877976705",
            "extra": "mean: 1.538201329765343 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 761683.5170727487,
            "unit": "iter/sec",
            "range": "stddev: 0.000005041372112383543",
            "extra": "mean: 1.312881239498438 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 5966514.844762864,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 167.60202999876128 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 3695795.5225714436,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 270.57774000013524 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 6835864.802205791,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 146.28726999944774 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 10531923.20717308,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 94.94941999946604 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 4172497.384037192,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 239.6646200008945 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 4224105.347147221,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 236.73652000070433 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 65153.31924778999,
            "unit": "iter/sec",
            "range": "stddev: 0.00006944892909589441",
            "extra": "mean: 15.348412199796257 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 11612.719942642354,
            "unit": "iter/sec",
            "range": "stddev: 0.00007736812901771328",
            "extra": "mean: 86.11247019985058 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 3.355501928833583,
            "unit": "iter/sec",
            "range": "stddev: 0.22623794091212857",
            "extra": "mean: 298.0180077999876 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 1719566.4635891344,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 581.5419300006397 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1339755.4600646985,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 746.4048699989689 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 6071095.073110057,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 164.71493000153714 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2148704.304442089,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 465.39675000076386 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 1983024.7135415159,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 504.28015000079546 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 260692.42494125513,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.835938080001142 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 43081.1730810601,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 23.211995599990587 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 37667.272446812975,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 26.548245599997244 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 2.9610186331953523,
            "unit": "iter/sec",
            "range": "stddev: 0.002457298935587517",
            "extra": "mean: 337.7216167400002 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 10035263.917323286,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 99.64860000081899 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 4055151.191630027,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 246.599930001139 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 211653.15719864945,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.724710999994386 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_mean",
            "value": 112681.88151491832,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.874541200020758 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_std",
            "value": 37557.90438265988,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 26.625553700000637 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_mean",
            "value": 1768332.6493988994,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 565.5044600007386 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_std",
            "value": 1031004.246285518,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 969.9281099983637 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 81202.35535032651,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 12.314913719999367 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}