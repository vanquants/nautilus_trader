window.BENCHMARK_DATA = {
  "lastUpdate": 1629102435662,
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
      },
      {
        "commit": {
          "author": {
            "email": "bradley.mcelroy@live.com",
            "name": "Bradley McElroy",
            "username": "limx0"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a9e324574dbdfb9017200d8826058f22373b071d",
          "message": "Parquet",
          "timestamp": "2021-08-15T16:43:29+10:00",
          "tree_id": "71c4ffdbe3684ff93afbb912047d1b65f79dcd0a",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/a9e324574dbdfb9017200d8826058f22373b071d"
        },
        "date": 1629011074756,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 0.2409627501865173,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.150019035000014 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 0.29759316967870747,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.3602921770000194 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 0.0852512585176126,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.73003211199989 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 5512034.673349164,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 181.4212099998258 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 5945511.055869072,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 168.19412000131706 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 5327529.87746571,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 187.70424999956958 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 4932587.558988988,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 202.73334999956205 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 80.82256682561687,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 12.372781999829385 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 9174923.868817583,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 108.99272999949972 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 9286196.106597636,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 107.68672000040169 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 4826735.170222442,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 207.1793800018895 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 8435558.951452415,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 118.54579000100784 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2870310.2844197233,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012109950515435625",
            "extra": "mean: 348.39438977314785 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 808263.0153165724,
            "unit": "iter/sec",
            "range": "stddev: 0.000009861900845901213",
            "extra": "mean: 1.2372210296030062 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 647710.6165309665,
            "unit": "iter/sec",
            "range": "stddev: 0.000006244633111759854",
            "extra": "mean: 1.543899350231186 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 627952.7398938121,
            "unit": "iter/sec",
            "range": "stddev: 0.000003574326118741049",
            "extra": "mean: 1.5924765296335863 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3575300.621464773,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010586454918870682",
            "extra": "mean: 279.696760042043 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 953607.8375295883,
            "unit": "iter/sec",
            "range": "stddev: 0.000004934434356639747",
            "extra": "mean: 1.048649099393515 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 1924002.1813534005,
            "unit": "iter/sec",
            "range": "stddev: 0.000004850999308554",
            "extra": "mean: 519.7499304790654 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 3814862.296576413,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016725718418652873",
            "extra": "mean: 262.13265964997845 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1053300.7345379777,
            "unit": "iter/sec",
            "range": "stddev: 0.000004787913902395155",
            "extra": "mean: 949.3964707417035 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 569547.2687943038,
            "unit": "iter/sec",
            "range": "stddev: 0.000014137933603323306",
            "extra": "mean: 1.7557805204069155 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 786292.9819647362,
            "unit": "iter/sec",
            "range": "stddev: 0.000009467690395384328",
            "extra": "mean: 1.2717905703561883 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 6137526.75348698,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 162.9320799997913 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 3808772.9371505436,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 262.5517499996022 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 6111196.022718316,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 163.63409000177853 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 9235253.585870882,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 108.28072999856886 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 4488723.406644246,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 222.78048999851308 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 4173716.7699079663,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 239.59460000014585 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_mean",
            "value": 124466.45121960176,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.034293499986234 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_std",
            "value": 29430.59483324918,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 33.97824630001196 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_mean",
            "value": 1539694.9051435068,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 649.4793199999549 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_std",
            "value": 830552.3533605409,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.2040180200006034 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 62731.96555796655,
            "unit": "iter/sec",
            "range": "stddev: 0.00006998872262949701",
            "extra": "mean: 15.94083639984092 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 8642.059329727635,
            "unit": "iter/sec",
            "range": "stddev: 0.00027951697782022816",
            "extra": "mean: 115.71316070003377 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 3.25549991252217,
            "unit": "iter/sec",
            "range": "stddev: 0.24884878248506279",
            "extra": "mean: 307.1724855999946 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 1949069.184977629,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 513.0654200002027 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1643045.0191867673,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 608.6260500001117 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 6396723.240165472,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 156.330039999375 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2159887.4854134424,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 462.98707999994804 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2199537.512041344,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 454.6410300008574 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 297533.8280862759,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.3609623699999247 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 48198.79163602689,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 20.747408100010034 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 37158.629431009555,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 26.911649199996646 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.0684974105462155,
            "unit": "iter/sec",
            "range": "stddev: 0.005840702581205689",
            "extra": "mean: 325.8924047200003 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 10563161.207741082,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 94.6686299994326 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 4393315.622993496,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 227.61852000030558 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 272010.81602058903,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.6763243999985207 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 85460.4953416501,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.701312939999298 usec\nrounds: 1"
          }
        ]
      },
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
          "id": "63de4a0ec47fe8791436993497f6cf0b63fd9522",
          "message": "Update docs",
          "timestamp": "2021-08-15T17:13:42+10:00",
          "tree_id": "d8be7ad9e3bb0ca3a9e93e05b865bf5c05de6b6b",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/63de4a0ec47fe8791436993497f6cf0b63fd9522"
        },
        "date": 1629012827342,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 66947.85345280834,
            "unit": "iter/sec",
            "range": "stddev: 0.0000688892878458584",
            "extra": "mean: 14.93699870011369 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 11476.889922103168,
            "unit": "iter/sec",
            "range": "stddev: 0.00009985648439311348",
            "extra": "mean: 87.13161900020623 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 3.7346299823231774,
            "unit": "iter/sec",
            "range": "stddev: 0.22664670714685292",
            "extra": "mean: 267.7641438999899 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 1930484.7499383453,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 518.0046099985702 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1579175.750476083,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 633.2417400017221 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 6187154.3661876125,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 161.6251900009047 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2156652.602560287,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 463.681539999925 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2200052.876073901,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 454.53452999936417 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 282053.2227942458,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.5454301500021757 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 45680.00618471104,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 21.891415599998254 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 37986.35704033195,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 26.32524089999606 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.3427476142790113,
            "unit": "iter/sec",
            "range": "stddev: 0.01011398669537657",
            "extra": "mean: 299.1551009499972 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 10229748.90778165,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 97.75410999964151 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 4761672.5736704925,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 210.0102400004289 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 231484.96983187858,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.319934899990585 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 97326.88953281147,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.274652819998664 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 0.2298894567098915,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.349916757000074 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 0.2772333576912499,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.607069539999884 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 0.08784042890258008,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.38427956800001 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 6341951.157075794,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 157.68018000017037 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 6305481.538022404,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 158.5921699984283 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 6114967.005461837,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 163.53318000028594 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 7485918.052356444,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 133.58415000084278 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 191.27751575158598,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.22800599992479 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 11090273.719168365,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 90.16909999900236 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 9821145.161298886,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 101.8211199993857 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 5353800.269328406,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 186.78320999924836 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 9037495.847256524,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 110.65012000017305 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2512843.778389633,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011255097185183905",
            "extra": "mean: 397.9554991042278 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 808711.8778987314,
            "unit": "iter/sec",
            "range": "stddev: 0.000002268061786737576",
            "extra": "mean: 1.236534329875667 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 598456.6090831809,
            "unit": "iter/sec",
            "range": "stddev: 0.000002378182069758822",
            "extra": "mean: 1.6709649201334287 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 591837.120909573,
            "unit": "iter/sec",
            "range": "stddev: 0.000012682593328702562",
            "extra": "mean: 1.68965406979396 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3714306.533462837,
            "unit": "iter/sec",
            "range": "stddev: 8.888250419614798e-7",
            "extra": "mean: 269.22926015686244 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1206523.1197644207,
            "unit": "iter/sec",
            "range": "stddev: 0.000001803642613084707",
            "extra": "mean: 828.827880393419 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2397406.063712322,
            "unit": "iter/sec",
            "range": "stddev: 0.000001062071843136334",
            "extra": "mean: 417.1174900807273 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 3867106.721614017,
            "unit": "iter/sec",
            "range": "stddev: 9.84030796210906e-7",
            "extra": "mean: 258.5912600784468 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1322774.3483906817,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015839184017379073",
            "extra": "mean: 755.9868402472603 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 672665.6244372712,
            "unit": "iter/sec",
            "range": "stddev: 0.00000613417554850126",
            "extra": "mean: 1.4866227196262116 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 787228.4835023273,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018471533212282996",
            "extra": "mean: 1.2702792403433705 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 7037240.726075658,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 142.10114999968937 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 4031343.372215066,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 248.056269999779 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 7467247.7181151435,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 133.91814999977214 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 11376811.486947792,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 87.89809000063542 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 4638041.663007271,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 215.6082399983461 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 4658806.917748794,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 214.64723000008235 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_mean",
            "value": 121585.58496860646,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.22465920000468 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_std",
            "value": 35645.45040310211,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 28.05407109999578 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_mean",
            "value": 1865363.3000158428,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 536.0886000016762 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_std",
            "value": 1167591.4672193993,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 856.4639499991245 nsec\nrounds: 1"
          }
        ]
      },
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
          "id": "e31d12d6a60dea405d8ca61f9d32b73fa33edc26",
          "message": "Update docs",
          "timestamp": "2021-08-15T18:14:08+10:00",
          "tree_id": "4285495a15aaca671497bd40a7421e388a63c912",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/e31d12d6a60dea405d8ca61f9d32b73fa33edc26"
        },
        "date": 1629016288623,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 102025.85569229857,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.80143703000067 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 0.31645086992619903,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.1600481939999554 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 0.42286673700261945,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.364811210000198 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 0.128279703841204,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.795465455999874 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 7057284.543219511,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 141.69756000001144 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 7312693.937264357,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 136.74850999905175 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 7113967.321541061,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 140.5685400004586 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 8213327.04305458,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 121.75333999948633 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 195.19976451434664,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.122956999912276 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 11851159.393115986,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 84.37992999915878 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 11538956.382152198,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 86.66295000011814 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 5939975.949068613,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 168.35084999911487 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 10470979.418661196,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 95.50205000095957 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 3060851.7236735993,
            "unit": "iter/sec",
            "range": "stddev: 6.880369368843014e-8",
            "extra": "mean: 326.70644979816643 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 902235.5434537,
            "unit": "iter/sec",
            "range": "stddev: 1.3589577337102045e-7",
            "extra": "mean: 1.108358019428124 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 707283.3463964327,
            "unit": "iter/sec",
            "range": "stddev: 1.5425894947951872e-7",
            "extra": "mean: 1.413860520108301 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 700865.8503365376,
            "unit": "iter/sec",
            "range": "stddev: 1.874309283122027e-7",
            "extra": "mean: 1.4268065700730403 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 4465293.397020857,
            "unit": "iter/sec",
            "range": "stddev: 5.335121179011945e-8",
            "extra": "mean: 223.9494499212924 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1345127.2291553952,
            "unit": "iter/sec",
            "range": "stddev: 1.7610154665259782e-7",
            "extra": "mean: 743.4241002079034 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2908368.7868523793,
            "unit": "iter/sec",
            "range": "stddev: 7.972122698196911e-8",
            "extra": "mean: 343.83535008373656 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 4999320.340839164,
            "unit": "iter/sec",
            "range": "stddev: 4.104165323526643e-8",
            "extra": "mean: 200.02719006242842 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1482302.9844788401,
            "unit": "iter/sec",
            "range": "stddev: 9.061463801977501e-8",
            "extra": "mean: 674.6259101350915 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 811794.1678130135,
            "unit": "iter/sec",
            "range": "stddev: 1.2537126955071085e-7",
            "extra": "mean: 1.2318393499845115 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 899406.4843255803,
            "unit": "iter/sec",
            "range": "stddev: 2.597627108636639e-7",
            "extra": "mean: 1.1118443300415493 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 7625561.736973295,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 131.13788000055138 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 4588009.375112736,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 217.9594500012172 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 8578552.6917728,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 116.5697800001908 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 11900430.997734938,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 84.03057000123226 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 5361261.933848881,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 186.52324999948178 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 5505752.355065221,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 181.62821999794687 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_mean",
            "value": 162174.40063097145,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.166201300015928 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_std",
            "value": 53696.36515074538,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 18.623234500000763 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_mean",
            "value": 2294246.6808912377,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 435.8729199998379 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_std",
            "value": 1278057.7938498904,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 782.4372300001414 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 70996.93995345528,
            "unit": "iter/sec",
            "range": "stddev: 0.0000715392316165059",
            "extra": "mean: 14.085114100066678 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 12615.730402845156,
            "unit": "iter/sec",
            "range": "stddev: 0.00024585925549451077",
            "extra": "mean: 79.26612000003388 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 4.261178848285155,
            "unit": "iter/sec",
            "range": "stddev: 0.2053452439358328",
            "extra": "mean: 234.6768430999873 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 2368825.909908653,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 422.1500600010586 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1929980.388690923,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 518.1399800017061 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 7710085.369944813,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 129.70024999958696 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2649472.4383804975,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 377.4336299989045 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2576922.8876281115,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 388.0597299985311 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 359233.3682592768,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.7837057700003243 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 70320.04226404187,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 14.220696799998223 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 61203.94113469242,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 16.338817100017877 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.381990961481568,
            "unit": "iter/sec",
            "range": "stddev: 0.00021381485319326446",
            "extra": "mean: 295.68381801999976 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 11521245.695690315,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 86.79616999870632 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 4798744.955426603,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 208.3878200005529 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 319684.683487125,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.1280823000088276 usec\nrounds: 1"
          }
        ]
      },
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
          "id": "05fa56e283d7beaf2718a984a31c3c8d428e45e2",
          "message": "Fix docs",
          "timestamp": "2021-08-16T15:41:29+10:00",
          "tree_id": "664a46521ec749f7bdb3cc54ca006a0df766b521",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/05fa56e283d7beaf2718a984a31c3c8d428e45e2"
        },
        "date": 1629093683233,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 0.2958654627951853,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.379914609000025 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 0.3943734402123672,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.535667715000045 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 0.1208062668040226,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.27771626799995 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 6269384.152193245,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 159.50529999827268 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 6285700.026160227,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 159.09126999986256 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 5676993.38249313,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 176.14958000194747 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 7284882.164920604,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 137.27057999858516 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 171.80509948567487,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.820548999963648 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 10191854.527093314,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 98.11757000079524 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 10933137.848840905,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 91.46504999989702 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 5442675.375400046,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 183.7331699994138 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 9448655.815329112,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 105.83515999996962 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2781889.1755568795,
            "unit": "iter/sec",
            "range": "stddev: 2.331973389530025e-7",
            "extra": "mean: 359.4679503362386 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 874577.6270693776,
            "unit": "iter/sec",
            "range": "stddev: 4.971337402733012e-7",
            "extra": "mean: 1.1434090800503327 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 675491.8051509969,
            "unit": "iter/sec",
            "range": "stddev: 6.327513406629425e-7",
            "extra": "mean: 1.4804028596267926 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 693194.0331188433,
            "unit": "iter/sec",
            "range": "stddev: 6.669653048977417e-7",
            "extra": "mean: 1.4425975300173377 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 4052000.2921703807,
            "unit": "iter/sec",
            "range": "stddev: 2.6361436859168786e-7",
            "extra": "mean: 246.7916900036471 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1281597.1039143256,
            "unit": "iter/sec",
            "range": "stddev: 4.4652164127028125e-7",
            "extra": "mean: 780.2764199027479 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2572168.685813049,
            "unit": "iter/sec",
            "range": "stddev: 3.3369658347767197e-7",
            "extra": "mean: 388.77699021668377 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 4401928.657648712,
            "unit": "iter/sec",
            "range": "stddev: 2.661609914371887e-7",
            "extra": "mean: 227.17315017416695 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1294912.9212629194,
            "unit": "iter/sec",
            "range": "stddev: 4.623166584934593e-7",
            "extra": "mean: 772.2527002238166 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 748337.0658192608,
            "unit": "iter/sec",
            "range": "stddev: 6.474783022640861e-7",
            "extra": "mean: 1.3362962302358028 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 852836.9613490929,
            "unit": "iter/sec",
            "range": "stddev: 6.281852463257296e-7",
            "extra": "mean: 1.172557059931023 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 6335322.138805332,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 157.8451699992911 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 4690465.840155635,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 213.19844000117882 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 7208366.260526289,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 138.72769000045082 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 11641493.682697644,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 85.8996300007675 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 4903794.418855217,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 203.92371999832903 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 4771330.183859075,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 209.58516000064265 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_mean",
            "value": 156211.34989500113,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.401583499996377 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_std",
            "value": 50746.56056303459,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 19.705769000006512 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_mean",
            "value": 2172508.091934412,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 460.2974800013726 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_std",
            "value": 1208471.2042872284,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 827.4917900007495 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 38456.13256458917,
            "unit": "iter/sec",
            "range": "stddev: 0.0001634941471368143",
            "extra": "mean: 26.003654900046058 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 15880.064630385494,
            "unit": "iter/sec",
            "range": "stddev: 0.00014949190641135108",
            "extra": "mean: 62.97203590006575 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 4.513156589585119,
            "unit": "iter/sec",
            "range": "stddev: 0.21111160171186696",
            "extra": "mean: 221.5744081000139 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 1952467.1863469742,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 512.1725000003607 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1704956.4943733364,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 586.5252299986423 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 6509914.436908098,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 153.6118500007433 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2264707.8906187494,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 441.5580499994576 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2340309.288258776,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 427.293949999239 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 342562.758516619,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.9191731299988533 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 63661.2553030254,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 15.70814139997765 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 54391.64121442982,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 18.385177899995142 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.0035271922783955,
            "unit": "iter/sec",
            "range": "stddev: 0.009135256528289597",
            "extra": "mean: 332.94188331999976 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 9790303.448314331,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 102.14188000190916 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 4666474.687923612,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 214.29452999882415 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 285525.82235602825,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.5023101999968276 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 95387.61041177229,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.483541789999435 usec\nrounds: 1"
          }
        ]
      },
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
          "id": "773aeffa1d5953ba72392a0a24ea1aedf7621f77",
          "message": "Update workflow",
          "timestamp": "2021-08-16T18:10:25+10:00",
          "tree_id": "c7cb44ba6c0efb04466924501468f0f45be5b933",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/773aeffa1d5953ba72392a0a24ea1aedf7621f77"
        },
        "date": 1629102433071,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 0.35166079663797073,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.8436493620000647 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 0.47837406655501896,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.090414322000015 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 0.14586705213128262,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.8555577519999815 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 8313847.061528342,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 120.2812599990466 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 7780017.8177598,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 128.5344100006114 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 7855065.248432547,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 127.30639000096744 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 9310031.689488268,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 107.41101999997227 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 220.8341568555491,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.528285000105825 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 13279611.109233923,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 75.30341000006047 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 12989130.046378387,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 76.98745000084273 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 6716106.162813225,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 148.8958000004459 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 12056100.410905834,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 82.94556000009834 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 3221963.064567032,
            "unit": "iter/sec",
            "range": "stddev: 7.80581076865409e-8",
            "extra": "mean: 310.369790081495 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 1108426.1949609863,
            "unit": "iter/sec",
            "range": "stddev: 1.2266952707363877e-7",
            "extra": "mean: 902.180050007928 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 790867.8677099724,
            "unit": "iter/sec",
            "range": "stddev: 1.8456491559632162e-7",
            "extra": "mean: 1.264433720003808 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 807915.0011932192,
            "unit": "iter/sec",
            "range": "stddev: 1.75391437391061e-7",
            "extra": "mean: 1.237753969815003 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 4829504.735816543,
            "unit": "iter/sec",
            "range": "stddev: 4.3821514529261394e-8",
            "extra": "mean: 207.06056929270744 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1530452.7266117,
            "unit": "iter/sec",
            "range": "stddev: 1.331833289813494e-7",
            "extra": "mean: 653.4014299245428 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 3152307.2552735503,
            "unit": "iter/sec",
            "range": "stddev: 7.117590891118861e-8",
            "extra": "mean: 317.22796003691656 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 5364418.354617903,
            "unit": "iter/sec",
            "range": "stddev: 7.547074609067233e-8",
            "extra": "mean: 186.4134998231748 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1659784.1225653496,
            "unit": "iter/sec",
            "range": "stddev: 1.0282743605690353e-7",
            "extra": "mean: 602.4879900974156 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 917271.0231914326,
            "unit": "iter/sec",
            "range": "stddev: 1.3210652983768342e-7",
            "extra": "mean: 1.0901903305750693 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 1027580.9508111116,
            "unit": "iter/sec",
            "range": "stddev: 2.50921575014387e-7",
            "extra": "mean: 973.1593401090777 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 8686951.625304673,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 115.1151800002026 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 5201759.609610809,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 192.2426400005861 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 9824540.582288839,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 101.78593000091496 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 13488830.77599865,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 74.13541000005353 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 6131354.8350477945,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 163.096090000181 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 6298180.6886544125,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 158.77600999942842 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_mean",
            "value": 190751.98878495555,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.242409300001327 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_std",
            "value": 60397.62109471488,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 16.556943500006582 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_mean",
            "value": 2486420.353081452,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 402.1846099999493 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_std",
            "value": 1429216.107123497,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 699.6842499995637 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 44226.089234498184,
            "unit": "iter/sec",
            "range": "stddev: 0.00014875718382704968",
            "extra": "mean: 22.611088100006782 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 18180.373172706448,
            "unit": "iter/sec",
            "range": "stddev: 0.00014370834510817558",
            "extra": "mean: 55.00437149999016 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 5.595068726646057,
            "unit": "iter/sec",
            "range": "stddev: 0.1756994753417899",
            "extra": "mean: 178.72881440000583 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 2572582.98496694,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 388.71438000001035 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 2222041.2986828997,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 450.03663999978016 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 8774378.183883535,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 113.96819000083269 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 3043386.7343204683,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 328.5813100001178 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 3034051.1868061847,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 329.5923300004233 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 404892.65809755755,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.46979040000042 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 79512.04159781999,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 12.576711399992746 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 70572.81554908161,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 14.169761999994535 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.921141718451432,
            "unit": "iter/sec",
            "range": "stddev: 0.0002613016477363769",
            "extra": "mean: 255.02776278000172 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 13051517.99594509,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 76.6194400000586 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 5997212.615508879,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 166.74413000032473 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 349524.0077216942,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.8610337999907642 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 115586.69604988353,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.651514700000007 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}