window.BENCHMARK_DATA = {
  "lastUpdate": 1629006207898,
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
          "id": "588e2a529f81bb40990f7f1bc2a358068c1d37a4",
          "message": "Rename OrderState to OrderStatus",
          "timestamp": "2021-08-15T15:11:08+10:00",
          "tree_id": "8c94db5b4bc4a2487f24c64d0a149fa59e70dfad",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/588e2a529f81bb40990f7f1bc2a358068c1d37a4"
        },
        "date": 1629006200190,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 0.2871345209829053,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.4826881719998255 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 0.3545237803022797,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.8206852559999334 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 0.10274401126899044,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.732927375999907 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 6806516.531698992,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 146.91803000005166 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 5336939.396541606,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 187.37331000011181 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 6614803.520219139,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 151.1760699986553 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 8300626.0995438285,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 120.47284000118452 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 196.36196264674624,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.092635999972117 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 12075166.948504934,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 82.81458999817914 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 9489219.961397648,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 105.38274000055026 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 5739038.02128419,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 174.24523000045156 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 10024489.828599695,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 99.75570000051448 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 3062484.3614038564,
            "unit": "iter/sec",
            "range": "stddev: 8.820177833249969e-7",
            "extra": "mean: 326.5322796755754 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 926070.3930039632,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014127926076237549",
            "extra": "mean: 1.0798315198871933 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 656840.9780145567,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019778384859916796",
            "extra": "mean: 1.5224385101896587 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 728934.8577322455,
            "unit": "iter/sec",
            "range": "stddev: 0.000001738565609856223",
            "extra": "mean: 1.371864700106471 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 4435190.4648014475,
            "unit": "iter/sec",
            "range": "stddev: 5.905416015685316e-7",
            "extra": "mean: 225.46946020383984 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1406042.470047198,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011788433014508992",
            "extra": "mean: 711.2160701421999 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2943215.2518289327,
            "unit": "iter/sec",
            "range": "stddev: 7.222705732386938e-7",
            "extra": "mean: 339.7644801475508 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 4941116.247365482,
            "unit": "iter/sec",
            "range": "stddev: 4.745877949816031e-7",
            "extra": "mean: 202.38341903677792 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1295778.4268908887,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010631036583359497",
            "extra": "mean: 771.7368797375457 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 713129.7462907769,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025785260853381983",
            "extra": "mean: 1.4022693699166666 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 868540.4532119791,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016243657595164318",
            "extra": "mean: 1.1513568496457083 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 7165631.053832123,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 139.55505000012636 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 4340263.837706178,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 230.40073999936794 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 8026394.638227444,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 124.58894000019426 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 11506466.922094382,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 86.90764999983003 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 5281046.187963298,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 189.3564199986031 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 5322676.341684129,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 187.8754100016522 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_mean",
            "value": 147702.6136083843,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.770360899986372 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_std",
            "value": 37888.80760267129,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 26.39301849999356 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_mean",
            "value": 2129578.324541405,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 469.5765299993582 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_std",
            "value": 1045214.7461109726,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 956.7411900002297 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 80384.34262154804,
            "unit": "iter/sec",
            "range": "stddev: 0.000055231553403175736",
            "extra": "mean: 12.440233600068494 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 10435.349126552606,
            "unit": "iter/sec",
            "range": "stddev: 0.0002463092701018306",
            "extra": "mean: 95.82813070005615 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 3.467762888657993,
            "unit": "iter/sec",
            "range": "stddev: 0.2408640170207774",
            "extra": "mean: 288.37035060000744 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 2205810.2586201476,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 453.34815000160233 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1663713.1045236783,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 601.0651699989467 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 7271988.967593383,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 137.51395999861415 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2635263.878467595,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 379.4686399987768 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2650898.275441072,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 377.2306199994091 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 366111.54661708645,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.731407979999858 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 51631.11868448642,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 19.368164499996965 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 44488.070039111786,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 22.477936199993565 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.5595490302555164,
            "unit": "iter/sec",
            "range": "stddev: 0.010828548489044906",
            "extra": "mean: 280.9344643099962 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 10959547.870399399,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 91.2446400002409 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 5021179.334398428,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 199.15640000135681 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 286709.1994023823,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.4878546000072674 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 106529.62389045753,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.387060269998528 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}