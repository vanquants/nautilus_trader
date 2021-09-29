window.BENCHMARK_DATA = {
  "lastUpdate": 1632910528930,
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
          "id": "a09e8d8ae5b8cfa7e324f57c49678a77ad99a787",
          "message": "Refine logging",
          "timestamp": "2021-09-29T19:30:39+10:00",
          "tree_id": "ba625490bb85b12cb0ef33a6af61a759d177e3c3",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/a09e8d8ae5b8cfa7e324f57c49678a77ad99a787"
        },
        "date": 1632910519661,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 2.9498804920829387,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 338.99678399984623 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 9.562613150830984,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 104.57392599982995 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 1.1567707055482903,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 864.4755569998779 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 7758251.637509314,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 128.89502000234643 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 7043790.257855974,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 141.9690200009427 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 8084333.830261221,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 123.69603000024654 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 8398067.033877594,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 119.07501999758097 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 225.71829767483865,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.4303010004114185 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 12631682.128229987,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 79.16602000022976 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 13206023.74289587,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 75.72301999971387 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 5951529.671108595,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 168.02402999928745 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 11848198.043251649,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 84.40101999894978 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 3393614.5541348914,
            "unit": "iter/sec",
            "range": "stddev: 7.57153735374293e-7",
            "extra": "mean: 294.6710606192937 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 938687.548019779,
            "unit": "iter/sec",
            "range": "stddev: 0.000001608884516014781",
            "extra": "mean: 1.0653172103002362 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 723349.1492133337,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019326427980486315",
            "extra": "mean: 1.3824582514371286 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 739314.0074020353,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012820206024040453",
            "extra": "mean: 1.3526052394354338 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 4352101.720968661,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010974017022069474",
            "extra": "mean: 229.7740411677296 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1458310.2696387342,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010212136597766576",
            "extra": "mean: 685.7251305291356 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2910529.7026488306,
            "unit": "iter/sec",
            "range": "stddev: 7.628147547335572e-7",
            "extra": "mean: 343.58007035280025 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 4859321.654428515,
            "unit": "iter/sec",
            "range": "stddev: 4.449107669532689e-7",
            "extra": "mean: 205.7900404861357 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1297003.1516928861,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012334016506173553",
            "extra": "mean: 771.0081495906707 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 696072.4034505372,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023211667504758294",
            "extra": "mean: 1.4366321593024622 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 983573.1666891129,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015933637892952724",
            "extra": "mean: 1.0167011808243842 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 7980780.365626385,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 125.30102999789962 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 4612183.618039852,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 216.81704000002355 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 8338682.598094484,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 119.92302000180644 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 13496183.684188552,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 74.09501999973145 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 4937173.723749684,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 202.54503000160184 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 5586528.82303725,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 179.0020300040851 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 82298.82205061331,
            "unit": "iter/sec",
            "range": "stddev: 0.00005399960797268114",
            "extra": "mean: 12.15084220020799 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 9594.459569552846,
            "unit": "iter/sec",
            "range": "stddev: 0.00014807778175218183",
            "extra": "mean: 104.22681890008789 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 3.6274503050474847,
            "unit": "iter/sec",
            "range": "stddev: 0.19585341701902365",
            "extra": "mean: 275.67572699990706 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 2316391.033101712,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 431.70604000351886 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1845256.5631850313,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 541.9300599987764 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 6942997.504640342,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 144.03000999664073 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2652871.452114588,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 376.950040003976 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2569452.0314734164,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 389.1880399987713 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 309883.10304488475,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.227023320000626 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 29891.02929349076,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 33.454853300008836 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 25779.511989624,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 38.79049379997923 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.439027724294065,
            "unit": "iter/sec",
            "range": "stddev: 0.009887557464395853",
            "extra": "mean: 290.77985993999846 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 12745819.052939337,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 78.45709999855899 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 4782395.276080372,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 209.10023999931582 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 244688.13860543416,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.086834800000361 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_mean",
            "value": 151233.81766084462,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.612277699969127 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_std",
            "value": 39076.87922301898,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.590579900017474 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_mean",
            "value": 2273628.9216031367,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 439.8255100022652 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_std",
            "value": 1283372.6458138155,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 779.1969100026108 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 110528.8383135436,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.04741255999852 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}