window.BENCHMARK_DATA = {
  "lastUpdate": 1630827169889,
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
          "id": "af5c4b8a903b2e18bde229885a6b104c33175cf5",
          "message": "Add `pragma: no cover` to `NotImplementedError`",
          "timestamp": "2021-09-05T17:12:45+10:00",
          "tree_id": "c8ed6657812c0846f7eaac8597792568d7dd249e",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/af5c4b8a903b2e18bde229885a6b104c33175cf5"
        },
        "date": 1630827155277,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 0.27743238324599295,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.6044818860000305 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 0.7067570779062571,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.4149133149999216 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 0.2697438130928471,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.707221265000044 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 6580655.741310938,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 151.96053999943615 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 5923821.784401572,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 168.8099400007559 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 6556921.719395453,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 152.51058999865563 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 7690370.902059011,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 130.032739998569 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 182.37352578439106,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.483251999976346 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 10199179.78193509,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 98.04710000025807 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 10435917.673533566,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 95.82291000015175 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 5325083.004753746,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 187.79049999920971 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 9087350.15404835,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 110.04308000110541 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2761219.4358877437,
            "unit": "iter/sec",
            "range": "stddev: 2.78693627844276e-7",
            "extra": "mean: 362.1588299006362 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 848320.1386436997,
            "unit": "iter/sec",
            "range": "stddev: 5.808745898902332e-7",
            "extra": "mean: 1.1788002600042091 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 634461.7519168152,
            "unit": "iter/sec",
            "range": "stddev: 5.684683862390621e-7",
            "extra": "mean: 1.5761391399541935 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 650324.8488311898,
            "unit": "iter/sec",
            "range": "stddev: 6.034335741107174e-7",
            "extra": "mean: 1.5376930495540364 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3631938.086694307,
            "unit": "iter/sec",
            "range": "stddev: 2.2484330288128368e-7",
            "extra": "mean: 275.33509000704726 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1222263.106585749,
            "unit": "iter/sec",
            "range": "stddev: 3.800956926856663e-7",
            "extra": "mean: 818.1544502258475 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2509830.127086765,
            "unit": "iter/sec",
            "range": "stddev: 3.1072630977207845e-7",
            "extra": "mean: 398.4333398534545 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 4173465.41643817,
            "unit": "iter/sec",
            "range": "stddev: 2.149418103310631e-7",
            "extra": "mean: 239.60902995895594 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1321807.5073410461,
            "unit": "iter/sec",
            "range": "stddev: 3.728113783092957e-7",
            "extra": "mean: 756.5398096517129 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 661189.4787321615,
            "unit": "iter/sec",
            "range": "stddev: 5.389376763595697e-7",
            "extra": "mean: 1.5124257601883073 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 803554.396790604,
            "unit": "iter/sec",
            "range": "stddev: 6.097889670351782e-7",
            "extra": "mean: 1.2444708211342004 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 7025888.643181493,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 142.33074999992823 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 4231451.780217715,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 236.32550999991508 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 7647552.450530043,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 130.76079000029495 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 10291981.455479953,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 97.16302000015276 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 4971251.00689851,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 201.15660999863394 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 4881455.798523561,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 204.85691999965638 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_mean",
            "value": 143186.33642669301,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.9839065999985905 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_std",
            "value": 49545.577132475424,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 20.183436299998903 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_mean",
            "value": 2042160.6934160974,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 489.6774300004836 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_std",
            "value": 1153651.9498515006,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 866.8125600001986 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 65853.79551263616,
            "unit": "iter/sec",
            "range": "stddev: 0.00007907150059817544",
            "extra": "mean: 15.185153599963995 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 15457.042257273673,
            "unit": "iter/sec",
            "range": "stddev: 0.0001417789365282912",
            "extra": "mean: 64.69543030002569 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 4.82283273547654,
            "unit": "iter/sec",
            "range": "stddev: 0.1680223807609531",
            "extra": "mean: 207.3470208999879 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 2133171.053055066,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 468.7856600003215 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1834381.2052537163,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 545.1429599997937 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 6600376.881565284,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 151.50649999895904 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2567782.261919127,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 389.44112000081077 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2426695.651759694,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 412.0829900011813 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 335738.60386087286,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.9785076500002106 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 63946.919759310666,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 15.637969800013709 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 53496.70027273997,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 18.69274169998789 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 2.974145762662785,
            "unit": "iter/sec",
            "range": "stddev: 0.0015219766950178102",
            "extra": "mean: 336.23099868000054 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 10036711.278799588,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 99.63423000044713 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 4524963.6588836005,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 220.99625000009837 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 280326.04273481277,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.5672747000035088 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 91297.13969066634,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.953245669998068 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}