window.BENCHMARK_DATA = {
  "lastUpdate": 1631261622323,
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
          "id": "6b30abd116da04cd9363bb89601a596561e29a4b",
          "message": "Improve `SimulatedExchange` repr",
          "timestamp": "2021-09-10T17:50:24+10:00",
          "tree_id": "484279de3c066aa187cedf60dbae8c6e0ed09fe6",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/6b30abd116da04cd9363bb89601a596561e29a4b"
        },
        "date": 1631261601362,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 0.22858623594367747,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.374716596000098 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 0.5486577110223269,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.822629992999964 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 0.2145389680978449,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.661157871999876 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 5796072.268443574,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 172.53062999998292 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 5436086.3831132045,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 183.95586999986335 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 5721161.569729294,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 174.78967999977613 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 6471601.802378517,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 154.52124999910666 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 159.12843446651453,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.2842320000982 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 9081141.085233772,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 110.11832000122013 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 9513190.08556794,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 105.1172100005715 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 4737911.975627397,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 211.06344000145327 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 8164626.299346365,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 122.47957999989013 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2616457.407069032,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012191975796817543",
            "extra": "mean: 382.1961700191423 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 771127.1549966064,
            "unit": "iter/sec",
            "range": "stddev: 0.0000033561090151948817",
            "extra": "mean: 1.296802989650132 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 586895.0502866292,
            "unit": "iter/sec",
            "range": "stddev: 0.000004712851621315164",
            "extra": "mean: 1.7038821498181278 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 617114.1031403521,
            "unit": "iter/sec",
            "range": "stddev: 0.000004854571940246622",
            "extra": "mean: 1.6204458704009994 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3452181.7067403817,
            "unit": "iter/sec",
            "range": "stddev: 9.052988344146309e-7",
            "extra": "mean: 289.67189011154915 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1088185.8879027932,
            "unit": "iter/sec",
            "range": "stddev: 0.000010724758071854904",
            "extra": "mean: 918.9606400127559 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2299300.3384401063,
            "unit": "iter/sec",
            "range": "stddev: 0.000002726287726530073",
            "extra": "mean: 434.91491010627215 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 3787254.892161325,
            "unit": "iter/sec",
            "range": "stddev: 0.000002055987271141633",
            "extra": "mean: 264.0434901991284 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1145663.127508891,
            "unit": "iter/sec",
            "range": "stddev: 0.000008421806242909482",
            "extra": "mean: 872.8569297454669 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 645188.0635998782,
            "unit": "iter/sec",
            "range": "stddev: 0.000004930659647318257",
            "extra": "mean: 1.5499356798704866 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 669099.7409658678,
            "unit": "iter/sec",
            "range": "stddev: 0.000013471505720819675",
            "extra": "mean: 1.4945454896701449 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 5391975.306518798,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 185.46078999861493 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 2928515.2073456477,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 341.4699700010715 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 6552774.208755054,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 152.60711999872 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 9813438.679981206,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 101.90107999960674 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 4075544.122854323,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 245.36600999908845 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 4368077.443557123,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 228.93367000051512 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 56493.49891501778,
            "unit": "iter/sec",
            "range": "stddev: 0.0000829282380806199",
            "extra": "mean: 17.70115179986078 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 9988.862977143812,
            "unit": "iter/sec",
            "range": "stddev: 0.00019345106813164266",
            "extra": "mean: 100.11149440013014 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 3.551911544365436,
            "unit": "iter/sec",
            "range": "stddev: 0.22083343008092476",
            "extra": "mean: 281.53854270001375 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 1610703.1871078706,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 620.8468499994524 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1497277.6273540778,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 667.8788100020938 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 5683605.934226177,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 175.94464000012522 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2106425.8162538153,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 474.737819999973 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2141861.253873312,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 466.88364999909027 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 282033.1614929735,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.545682339999985 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 46839.72032267201,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 21.349401599991324 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 39332.11566085427,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.424515899999278 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 2.8509187169011376,
            "unit": "iter/sec",
            "range": "stddev: 0.002881716581760772",
            "extra": "mean: 350.7641217800028 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 8735505.067333281,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 114.47534999888376 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 3593261.48487154,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 278.2987000000503 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 214594.78442408337,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.659945499997775 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_mean",
            "value": 117533.75075684565,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.508194399996682 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_std",
            "value": 35915.65620451114,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 27.843010700007653 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_mean",
            "value": 1797835.5498255277,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 556.2243999997918 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_std",
            "value": 911304.1437572633,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.097328490000109 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 80742.46351217714,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 12.385056840000743 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}