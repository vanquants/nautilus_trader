window.BENCHMARK_DATA = {
  "lastUpdate": 1629715420335,
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
          "id": "1465ee10f610babcfd808bb5fed9e3209978cbc9",
          "message": "Fix test",
          "timestamp": "2021-08-23T20:24:58+10:00",
          "tree_id": "032c4e223ede359fada8ed0f8e2ada21778c9025",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/1465ee10f610babcfd808bb5fed9e3209978cbc9"
        },
        "date": 1629715413581,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 334196.2067736106,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.9922541899986754 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 66912.2305379723,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 14.944950900007825 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 60100.18677097621,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 16.638883399991755 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.403120767226726,
            "unit": "iter/sec",
            "range": "stddev: 0.004601914417556855",
            "extra": "mean: 293.84793205999586 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 11002987.201112064,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 90.88440999903469 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 4955772.210895243,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 201.784900000348 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 293338.1268692625,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.4090352000021085 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 105168.56607598996,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.508544590000838 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 0.2968810369691969,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.36835255699998 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 0.40913431654957944,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.444185098999924 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 0.1282564200028788,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.796880654999995 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 7159835.157610974,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 139.66802000140888 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 6596214.261148852,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 151.60210999965784 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 6588391.741228714,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 151.78211000147712 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 8070640.05261107,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 123.90590999984853 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 186.98792188556018,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.347939000102997 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 10254968.250112895,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 97.51370999993014 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 10910161.691853672,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 91.65767000013147 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 5425778.7647713665,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 184.3053399989003 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 9375869.025752138,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 106.6567800012308 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2871305.121233818,
            "unit": "iter/sec",
            "range": "stddev: 2.6440406546019346e-7",
            "extra": "mean: 348.2736796604513 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 929599.5569951801,
            "unit": "iter/sec",
            "range": "stddev: 5.276061830715441e-7",
            "extra": "mean: 1.075732010062893 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 678571.5300508754,
            "unit": "iter/sec",
            "range": "stddev: 6.1263443087628e-7",
            "extra": "mean: 1.473683990138852 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 690535.4242646204,
            "unit": "iter/sec",
            "range": "stddev: 6.225877460196647e-7",
            "extra": "mean: 1.4481516296791597 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3724505.0643994887,
            "unit": "iter/sec",
            "range": "stddev: 2.387654273084054e-7",
            "extra": "mean: 268.4920500064436 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1254822.5658375868,
            "unit": "iter/sec",
            "range": "stddev: 4.5190374872313104e-7",
            "extra": "mean: 796.9254197564624 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2539173.603797852,
            "unit": "iter/sec",
            "range": "stddev: 3.419824527451187e-7",
            "extra": "mean: 393.82892075764175 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 4268550.020683143,
            "unit": "iter/sec",
            "range": "stddev: 2.6113968190524494e-7",
            "extra": "mean: 234.27158992035402 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1363933.3237723333,
            "unit": "iter/sec",
            "range": "stddev: 3.9330089525338496e-7",
            "extra": "mean: 733.1736695414293 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 747093.9667976744,
            "unit": "iter/sec",
            "range": "stddev: 6.025482374569048e-7",
            "extra": "mean: 1.3385197102934399 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 822583.6118630065,
            "unit": "iter/sec",
            "range": "stddev: 6.401916263913177e-7",
            "extra": "mean: 1.2156818900575672 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 6741403.210953028,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 148.33706999979768 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 4045916.4585198793,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 247.1627900013118 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 7506720.767081618,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 133.21396000037566 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 10254969.30174562,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 97.5137000000359 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 4461086.875999359,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 224.16062000047532 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 4631225.687204307,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 215.92556000086915 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_mean",
            "value": 145918.30886075858,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.853149599987773 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_std",
            "value": 52320.05843523148,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 19.11312849999831 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_mean",
            "value": 2069080.3868755659,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 483.30650000025344 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_std",
            "value": 1090603.3452188836,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 916.9236499997169 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 33908.001968813165,
            "unit": "iter/sec",
            "range": "stddev: 0.0001676051504986899",
            "extra": "mean: 29.49156369991215 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 16488.228420642936,
            "unit": "iter/sec",
            "range": "stddev: 0.00014135789059754699",
            "extra": "mean: 60.64932959977795 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 4.672425329338417,
            "unit": "iter/sec",
            "range": "stddev: 0.20283282291005636",
            "extra": "mean: 214.0216117999671 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 2063176.485905962,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 484.6895100013171 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1692794.1258190607,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 590.7392899985098 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 7282048.294554486,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 137.3239999998077 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2615604.62395198,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 382.3207799996453 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2496848.3531733835,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 400.5048999988503 nsec\nrounds: 1"
          }
        ]
      }
    ]
  }
}