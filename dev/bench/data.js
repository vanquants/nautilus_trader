window.BENCHMARK_DATA = {
  "lastUpdate": 1631255916714,
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
          "id": "b93e28b765b7f0856eb6f31a80cfa473b6dc5455",
          "message": "Refactor `BacktestNode`\n\n- Refactor tests.",
          "timestamp": "2021-09-10T16:20:51+10:00",
          "tree_id": "61bad197db5ff259b921a8e228672d3a5b1ed8aa",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/b93e28b765b7f0856eb6f31a80cfa473b6dc5455"
        },
        "date": 1631255898740,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 0.30707908691282143,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.2564900790000593 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 0.7534081803425282,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.3273017550000077 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 0.29847430219159643,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.3503721849999692 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 7360774.989476779,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 135.85526000042591 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 6648830.071877324,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 150.40239999962068 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 7430069.118256796,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 134.58824999929675 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 8746529.595699169,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 114.33106000026783 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 187.37644865245534,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.336850000048798 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 11821759.082450146,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 84.58978000021489 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 11865240.765347278,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 84.27978999975494 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 6181027.459854875,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 161.78539999941677 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 10741752.375144111,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 93.09467999969456 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2823498.2117123813,
            "unit": "iter/sec",
            "range": "stddev: 8.407367928917086e-8",
            "extra": "mean: 354.17058025814185 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 957177.0290876002,
            "unit": "iter/sec",
            "range": "stddev: 1.8315730734983303e-7",
            "extra": "mean: 1.044738820104385 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 753945.004034294,
            "unit": "iter/sec",
            "range": "stddev: 2.619870205492759e-7",
            "extra": "mean: 1.3263566900093338 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 754432.0791306474,
            "unit": "iter/sec",
            "range": "stddev: 1.7184045438521038e-7",
            "extra": "mean: 1.3255003699634926 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 4287946.58925069,
            "unit": "iter/sec",
            "range": "stddev: 9.645422368166825e-8",
            "extra": "mean: 233.21186007933647 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1361853.450108185,
            "unit": "iter/sec",
            "range": "stddev: 1.4826437149985194e-7",
            "extra": "mean: 734.2933998666012 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2863870.8248098027,
            "unit": "iter/sec",
            "range": "stddev: 8.680248847918637e-8",
            "extra": "mean: 349.1777601618651 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 4707834.832101449,
            "unit": "iter/sec",
            "range": "stddev: 7.4849618447902e-8",
            "extra": "mean: 212.41186992824623 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1453711.7537345348,
            "unit": "iter/sec",
            "range": "stddev: 1.5074966015044576e-7",
            "extra": "mean: 687.8942798880416 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 812530.401820956,
            "unit": "iter/sec",
            "range": "stddev: 1.7687313024350614e-7",
            "extra": "mean: 1.2307231800298268 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 900557.4395965626,
            "unit": "iter/sec",
            "range": "stddev: 2.9420441530410526e-7",
            "extra": "mean: 1.1104233400681096 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 6858706.328678612,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 145.80008999928395 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 4557581.025597097,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 219.41463999951338 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 8629775.469683943,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 115.87786999939453 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 12083771.470755491,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 82.75561999994352 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 5360165.6076549115,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 186.56140000075538 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 5508508.304197187,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 181.5373500005535 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 82507.09014375145,
            "unit": "iter/sec",
            "range": "stddev: 0.000058101198020242075",
            "extra": "mean: 12.120170499986216 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 15573.619126448286,
            "unit": "iter/sec",
            "range": "stddev: 0.00016219620326466606",
            "extra": "mean: 64.21115039995584 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 5.127721589318996,
            "unit": "iter/sec",
            "range": "stddev: 0.15973730062020497",
            "extra": "mean: 195.0183882999795 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 2339068.4641079595,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 427.5206200009052 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1970163.4118542084,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 507.57211000018293 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 7715109.401388125,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 129.61579000034362 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2681006.1891315808,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 372.99428999972406 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2679863.8168186983,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 373.15329000080055 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 349569.48909391,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.860661560000608 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 73203.68872213537,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 13.660513800004992 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 63786.22449988709,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 15.677366199997778 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.4172868705848254,
            "unit": "iter/sec",
            "range": "stddev: 0.0002680348125055805",
            "extra": "mean: 292.6298077599972 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 11481640.225522408,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 87.0955700020204 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 5206889.235138913,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 192.05325000029916 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 278294.67147762136,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.5933135000050243 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_mean",
            "value": 159688.51796449718,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.2621909999961645 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_std",
            "value": 55109.995528022104,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 18.14552860000731 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_mean",
            "value": 2168759.8343823017,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 461.09300999887637 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_std",
            "value": 1243508.4815843406,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 804.1762600009861 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 100200.15190764083,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.980024789999788 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}