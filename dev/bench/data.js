window.BENCHMARK_DATA = {
  "lastUpdate": 1629621054634,
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
          "id": "8502a2fff24fa46520eb964edb1a0ff3488d46c5",
          "message": "Improve adding bar data to `BacktestEngine`\n\n- Add `add_bar_objects()`.\n- Add `add_bars_as_ticks()`.\n- Add tests.\n- Rename `DataProducerFacade` to `DataProducer`.",
          "timestamp": "2021-08-22T18:08:32+10:00",
          "tree_id": "f2b2c65408b4ebb289b1e1121b3436eee864540a",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/8502a2fff24fa46520eb964edb1a0ff3488d46c5"
        },
        "date": 1629621049267,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 86166.96559136175,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.605375599999661 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 0.2247138410018141,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.450104165999846 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 0.29358105807920026,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.406214306000038 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 0.08630147047941528,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.587288078000029 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 6004756.006955046,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 166.53465999979744 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 5499926.245973677,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 181.82062000050792 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 6008399.983457702,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 166.43366000153037 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 6497950.416493713,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 153.89467999966655 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 172.28641996982964,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.80428800003574 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 9313781.098829232,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 107.36778000136837 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 9367964.951073067,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 106.74676999997246 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 4881177.972694266,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 204.86858000140273 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 8748465.51909732,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 114.3057600006614 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2751226.0763199986,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010215751396694557",
            "extra": "mean: 363.4743100928972 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 824886.3528087686,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016326821816941307",
            "extra": "mean: 1.2122882098788068 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 626811.8584533755,
            "unit": "iter/sec",
            "range": "stddev: 0.00000269829420700492",
            "extra": "mean: 1.5953750499670605 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 624146.6318264469,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021110178999560165",
            "extra": "mean: 1.6021876094623622 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3265966.676012814,
            "unit": "iter/sec",
            "range": "stddev: 7.974384405523893e-7",
            "extra": "mean: 306.1880598306743 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1074941.3879409388,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020072759119898865",
            "extra": "mean: 930.2832798312011 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2307070.6423556763,
            "unit": "iter/sec",
            "range": "stddev: 0.000001424472785535909",
            "extra": "mean: 433.4500997242685 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 3882650.314251481,
            "unit": "iter/sec",
            "range": "stddev: 9.211881399427919e-7",
            "extra": "mean: 257.5560297896118 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 972376.4571722009,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021323622257803983",
            "extra": "mean: 1.0284082801717886 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 543254.6259096836,
            "unit": "iter/sec",
            "range": "stddev: 0.000005040654084944408",
            "extra": "mean: 1.8407574502020907 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 658331.1497263644,
            "unit": "iter/sec",
            "range": "stddev: 0.000005693253757773416",
            "extra": "mean: 1.518992380074451 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 5149355.776925174,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 194.19905000177096 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 3344044.5308963936,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 299.0390800005116 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 6401227.396913646,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 156.2200400007896 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 9971578.011137266,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 100.28503000057754 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 3925554.6818523286,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 254.74107000036383 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 4051041.994840573,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 246.85007000016412 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_mean",
            "value": 116883.15999323042,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.555552400002853 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_std",
            "value": 35905.40776337158,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 27.85095790000014 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_mean",
            "value": 1720284.582547218,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 581.2991700008752 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_std",
            "value": 976816.9207442945,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.023733289998745 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 21276.558080621184,
            "unit": "iter/sec",
            "range": "stddev: 0.0002775654178841709",
            "extra": "mean: 47.00008320005509 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 10128.313814985298,
            "unit": "iter/sec",
            "range": "stddev: 0.0001673903062303465",
            "extra": "mean: 98.73311770024884 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 3.6006119517982262,
            "unit": "iter/sec",
            "range": "stddev: 0.23835340205057873",
            "extra": "mean: 277.73056729997734 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 1792234.5951923758,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 557.9626700000517 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1495746.2025051406,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 668.5626199987382 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 5779748.800584524,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 173.01789999919492 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2032001.132393665,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 492.1257099999821 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2079535.062538784,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 480.87672000065146 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 272136.77032380237,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.6746228700008032 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 41345.50529020999,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 24.186425900006725 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 36212.224624903814,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 27.6149839000027 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 2.8214636172030327,
            "unit": "iter/sec",
            "range": "stddev: 0.004288773923390209",
            "extra": "mean: 354.4259773199974 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 9742088.912417563,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 102.64738999921974 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 4153567.1811027047,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 240.7569100000728 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 261190.40242217618,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.8286246000097885 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}