window.BENCHMARK_DATA = {
  "lastUpdate": 1632285572820,
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
          "id": "896e6e63ae53982c38febb1a533c524850da68d9",
          "message": "Improve logging",
          "timestamp": "2021-09-22T14:15:43+10:00",
          "tree_id": "1c9ab2dd2851529279ee7f4d5d79e1ef76603b0b",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/896e6e63ae53982c38febb1a533c524850da68d9"
        },
        "date": 1632285567668,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 2.7578143960182273,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 362.60598300009406 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 2.7436001712400744,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 364.48459600001115 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 1.8816722557572918,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 531.4421769999171 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 6317230.7332335375,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 158.29721000045538 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 6070419.169089695,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 164.73327000085192 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 6755655.311122336,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 148.02412999870285 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 7522585.434269774,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 132.93302000192853 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 189.42479267154224,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.279140000084226 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 10727804.280380506,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 93.21571999862499 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 11634311.259339998,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 85.95265999929325 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 5178061.093662986,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 193.12248000005638 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 9917705.852014605,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 100.82977000138271 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2968039.0555162556,
            "unit": "iter/sec",
            "range": "stddev: 6.591073524160824e-7",
            "extra": "mean: 336.9227901976046 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 972693.4220399784,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013725890853117167",
            "extra": "mean: 1.028073159889118 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 731497.9446209413,
            "unit": "iter/sec",
            "range": "stddev: 0.0000032477981707918907",
            "extra": "mean: 1.367057839811423 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 749589.2531959211,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013692842823059812",
            "extra": "mean: 1.334063950005202 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3738819.5254593557,
            "unit": "iter/sec",
            "range": "stddev: 8.35534486982253e-7",
            "extra": "mean: 267.4641001499367 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1295931.606926801,
            "unit": "iter/sec",
            "range": "stddev: 9.37328043205858e-7",
            "extra": "mean: 771.6456598905097 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2523027.4823320587,
            "unit": "iter/sec",
            "range": "stddev: 6.837425156568019e-7",
            "extra": "mean: 396.3492300431426 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 4062882.6960505373,
            "unit": "iter/sec",
            "range": "stddev: 3.987083919830809e-7",
            "extra": "mean: 246.13066012761917 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1406203.690477862,
            "unit": "iter/sec",
            "range": "stddev: 9.815690117567926e-7",
            "extra": "mean: 711.1345296357285 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 763032.3173888816,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017256597839825304",
            "extra": "mean: 1.3105604798261083 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 848723.4194219344,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025362274975543717",
            "extra": "mean: 1.178240139386162 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 6738901.854180168,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 148.39212999959273 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 4139897.7428451707,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 241.55186000143658 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 7524340.111605845,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 132.90202000007412 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 11933652.709840145,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 83.79663999903642 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 4881059.084368341,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 204.87357000092743 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 4456333.546221437,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 224.3997200002923 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 47388.39745682105,
            "unit": "iter/sec",
            "range": "stddev: 0.00013098376620532343",
            "extra": "mean: 21.10221180007557 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 12588.652469319584,
            "unit": "iter/sec",
            "range": "stddev: 0.00010143692192085676",
            "extra": "mean: 79.43661980002616 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 4.080752501370994,
            "unit": "iter/sec",
            "range": "stddev: 0.1853329633184071",
            "extra": "mean: 245.05284250001296 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 2037594.722943637,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 490.77472999897515 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1777562.0054524203,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 562.5682799995957 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 6297300.2025658,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 158.79820999998628 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2408157.9722804017,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 415.2551499987567 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2228360.5632704194,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 448.7604099995224 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 289142.08328613377,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.458507280001868 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 49670.97203062929,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 20.132482999997592 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 44321.40526865531,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 22.56246150000152 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.304600918534473,
            "unit": "iter/sec",
            "range": "stddev: 0.003101539787758011",
            "extra": "mean: 302.6084010300042 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 10967240.414254172,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 91.180639999493 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 4721067.750668075,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 211.81649000027392 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 225196.2438885419,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.440571400004956 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_mean",
            "value": 127672.58294628804,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.8325351999865225 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_std",
            "value": 39012.6661955229,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.63270079999711 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_mean",
            "value": 2037753.6244241924,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 490.7364599989706 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_std",
            "value": 1151081.6144129059,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 868.7481300012223 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 95452.89251850477,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.476371889999427 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}