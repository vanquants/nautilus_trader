window.BENCHMARK_DATA = {
  "lastUpdate": 1632626110037,
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
          "id": "84c35fd49ef990986123d4bd654671957ae24ba5",
          "message": "Update `build-test` workflow",
          "timestamp": "2021-09-26T12:03:31+10:00",
          "tree_id": "f308a16f2a0ff5660a03aa1f557c3972b5e716b0",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/84c35fd49ef990986123d4bd654671957ae24ba5"
        },
        "date": 1632625953725,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 56210.06903335013,
            "unit": "iter/sec",
            "range": "stddev: 0.00009406079311318859",
            "extra": "mean: 17.7904069003489 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 8927.699734380272,
            "unit": "iter/sec",
            "range": "stddev: 0.000109171906607292",
            "extra": "mean: 112.0109355995737 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 3.229864810087599,
            "unit": "iter/sec",
            "range": "stddev: 0.2213381791459676",
            "extra": "mean: 309.61048179997306 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 2214727.191662515,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 451.5228800028126 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1784964.2819739038,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 560.2352999994764 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 7110816.312412963,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 140.63083000110055 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2450245.7988298065,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 408.12232000462245 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2384151.344366348,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 419.43646000618173 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 320806.27908484783,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.1171459699999104 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 32511.0165855352,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 30.758804400011286 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 29645.12019312386,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 33.73236449997421 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.1096159763632056,
            "unit": "iter/sec",
            "range": "stddev: 0.010918851053548697",
            "extra": "mean: 321.58311753000817 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 11526145.851903934,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 86.75926999785588 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 4461412.285833263,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 224.1442700051266 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 226361.3962956148,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.417714399914985 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_mean",
            "value": 133863.6296407997,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.47028899995712 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_std",
            "value": 35804.6189777492,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 27.929357399989385 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_mean",
            "value": 1958382.6070674136,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 510.6254499969509 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_std",
            "value": 1178897.216396517,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 848.2503699997324 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 97594.13466897016,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.246517410005254 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 2.723484812981375,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 367.17663900071784 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 7.950136995178139,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 125.78399599988188 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 1.6817070614190732,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 594.6338829999149 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 6723645.9804274645,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 148.72882999952708 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 6877257.932839011,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 145.40678999765078 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 6988571.449217756,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 143.09076000245113 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 7376444.372048728,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 135.56667000557354 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 175.6891847435633,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.691870000191557 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 11691522.453391708,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 85.53206000215141 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 9118733.663785685,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 109.66434999318153 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 4895085.828292667,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 204.28650999747333 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 9620816.676149344,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 103.94128000370984 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2812161.048118802,
            "unit": "iter/sec",
            "range": "stddev: 0.000004653126198990994",
            "extra": "mean: 355.5984109334531 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 902854.3026617551,
            "unit": "iter/sec",
            "range": "stddev: 0.0000028386491600133355",
            "extra": "mean: 1.107598420976501 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 711345.7580895484,
            "unit": "iter/sec",
            "range": "stddev: 0.000005866487447400533",
            "extra": "mean: 1.405786129498665 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 736530.8123290592,
            "unit": "iter/sec",
            "range": "stddev: 0.0000044884771118004",
            "extra": "mean: 1.3577164502294181 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3392320.018835408,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018772622426074802",
            "extra": "mean: 294.78350935278286 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1246551.6964293998,
            "unit": "iter/sec",
            "range": "stddev: 0.000004592035813693296",
            "extra": "mean: 802.2130192148325 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2454697.0312352865,
            "unit": "iter/sec",
            "range": "stddev: 0.0000035618328070004185",
            "extra": "mean: 407.3822501413815 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 3825216.5340837874,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010425816904716487",
            "extra": "mean: 261.4231092775299 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1236014.878324481,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018238845835076572",
            "extra": "mean: 809.0517497294059 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 716611.6718260028,
            "unit": "iter/sec",
            "range": "stddev: 0.000005089918475906836",
            "extra": "mean: 1.395455920292079 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 826626.6989664523,
            "unit": "iter/sec",
            "range": "stddev: 0.0000052497489650401514",
            "extra": "mean: 1.2097359076960856 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 6014131.7662235405,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 166.2750400009827 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 3948712.386176311,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 253.24710999484523 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 7009783.9057687335,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 142.65775000239955 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 12424985.702394133,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 80.48298999710823 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 4722759.606821352,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 211.74060999328503 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 4539662.142903844,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 220.28071000022464 nsec\nrounds: 1"
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
          "id": "84c35fd49ef990986123d4bd654671957ae24ba5",
          "message": "Update `build-test` workflow",
          "timestamp": "2021-09-26T12:03:31+10:00",
          "tree_id": "f308a16f2a0ff5660a03aa1f557c3972b5e716b0",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/84c35fd49ef990986123d4bd654671957ae24ba5"
        },
        "date": 1632626102076,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 2.5065668730851325,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 398.9520530003574 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 7.602818483407484,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 131.53016900014336 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 1.6805347220845452,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 595.0486989995625 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 7159527.591375932,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 139.6740200016211 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 7426549.75241277,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 134.65202999213943 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 6588178.620495779,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 151.78701999502664 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 9502450.730027737,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 105.23600999476912 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 179.18253701231652,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.580901000030281 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 14309425.003058556,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 69.88400999944133 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 14108746.264634244,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 70.87802000569354 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 6569826.547210443,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 152.21102000396058 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 13299462.264325766,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 75.1910099916131 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 3058992.116256311,
            "unit": "iter/sec",
            "range": "stddev: 8.820619024063622e-7",
            "extra": "mean: 326.9050595736189 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 910419.9585223916,
            "unit": "iter/sec",
            "range": "stddev: 0.000004071975564867967",
            "extra": "mean: 1.098394197797461 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 688772.9586257922,
            "unit": "iter/sec",
            "range": "stddev: 0.000007291353158848648",
            "extra": "mean: 1.4518572302768007 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 708047.6777212397,
            "unit": "iter/sec",
            "range": "stddev: 0.000002267832750168289",
            "extra": "mean: 1.41233426994404 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3894777.6048288024,
            "unit": "iter/sec",
            "range": "stddev: 7.68785593663617e-7",
            "extra": "mean: 256.7540695417847 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1308787.1678509284,
            "unit": "iter/sec",
            "range": "stddev: 0.000002818052725627113",
            "extra": "mean: 764.0661710047425 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2569742.3540148223,
            "unit": "iter/sec",
            "range": "stddev: 6.934282928244593e-7",
            "extra": "mean: 389.1440705865534 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 4585760.886614344,
            "unit": "iter/sec",
            "range": "stddev: 9.584535602357827e-7",
            "extra": "mean: 218.06631979416125 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1251316.3683956491,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011686960422601524",
            "extra": "mean: 799.1584105002403 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 766971.7956298544,
            "unit": "iter/sec",
            "range": "stddev: 0.000001658904824892957",
            "extra": "mean: 1.303828909613003 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 788371.2407734843,
            "unit": "iter/sec",
            "range": "stddev: 0.0000035556195366889406",
            "extra": "mean: 1.2684379493839515 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 7479308.493014907,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 133.7022000006982 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 3863071.2752889334,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 258.86139000249386 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 8917172.575069515,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 112.1431699993991 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 16491556.570285574,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 60.63709000045492 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 5028908.934492646,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 198.85028999851784 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 5043187.334748181,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 198.28729999971983 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 41445.939580447994,
            "unit": "iter/sec",
            "range": "stddev: 0.0001343980989887904",
            "extra": "mean: 24.12781590001032 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 8281.963804089843,
            "unit": "iter/sec",
            "range": "stddev: 0.00013959591722474012",
            "extra": "mean: 120.74430939992453 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 3.0520743292236308,
            "unit": "iter/sec",
            "range": "stddev: 0.26201729998096335",
            "extra": "mean: 327.6460178000889 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 2156775.260345242,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 463.6551700059499 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1753696.8543391516,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 570.2239800029929 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 8220994.809435337,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 121.63977999989584 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2485427.441827544,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 402.34527999928105 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2541533.098530928,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 393.46329999716545 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 311680.1594308205,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.2084172499980923 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 33032.914719649874,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 30.272835699997813 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 28194.010417645688,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 35.468526299973746 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.120190751124098,
            "unit": "iter/sec",
            "range": "stddev: 0.0039589856352742585",
            "extra": "mean: 320.4932261400154 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 13294156.339776186,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 75.22102000621089 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 4471550.3866862245,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 223.6360799997783 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 231850.10704986332,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.3131315000209725 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_mean",
            "value": 119885.20416341277,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.341312899938202 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_std",
            "value": 37315.14654783109,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 26.79876920001334 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_mean",
            "value": 1942497.4900114962,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 514.8011799974483 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_std",
            "value": 1103346.8470839884,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 906.3333100039017 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 92619.8150999199,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.796825699999317 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}