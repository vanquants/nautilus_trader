window.BENCHMARK_DATA = {
  "lastUpdate": 1629589715522,
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
          "id": "085a5722eebc940bf2d16bb29b37705d4328a4f0",
          "message": "Add order `active` concept\n\n- Add order methods.\n- Add cache methods.",
          "timestamp": "2021-08-22T09:27:57+10:00",
          "tree_id": "1b2ed64c84f10ea526b4b1a9e574f77162c8841d",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/085a5722eebc940bf2d16bb29b37705d4328a4f0"
        },
        "date": 1629589710392,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 90566.72965199902,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.041582309999285 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 0.2546803563501102,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.9264905009999893 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 0.3027884792679912,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.302635564000184 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 0.09143091377363936,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.937219795000146 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 6204506.618582503,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 161.1731699995289 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 6349684.490502216,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 157.4881400006234 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 5840533.348182654,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 171.21723999935057 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 7560181.311225844,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 132.27196000116237 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 172.7699971716676,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.788042000176574 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 8717420.710488321,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 114.71282999991672 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 9732573.219392598,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 102.7477499997076 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 4837286.032898511,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 206.72749000141266 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 8170476.6688992055,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 122.39187999966816 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2605079.5298368447,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013775043147123944",
            "extra": "mean: 383.86544001696166 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 853212.7933097407,
            "unit": "iter/sec",
            "range": "stddev: 0.000005702883661901404",
            "extra": "mean: 1.1720405599180594 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 558258.3259686804,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019524866381100003",
            "extra": "mean: 1.7912854201767914 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 540565.6958706863,
            "unit": "iter/sec",
            "range": "stddev: 0.000005905591500082125",
            "extra": "mean: 1.8499139098889827 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3598752.8706579125,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013969722573130341",
            "extra": "mean: 277.87404024138596 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1139115.934236264,
            "unit": "iter/sec",
            "range": "stddev: 0.00000164523416435667",
            "extra": "mean: 877.8737703028128 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2387928.5445527034,
            "unit": "iter/sec",
            "range": "stddev: 0.000001499782189542441",
            "extra": "mean: 418.7729998375289 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 4060503.123164502,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011672899570250115",
            "extra": "mean: 246.27489985050485 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1122608.744891898,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015357589298729322",
            "extra": "mean: 890.7823002004989 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 544542.1125740263,
            "unit": "iter/sec",
            "range": "stddev: 0.000038210068054587724",
            "extra": "mean: 1.8364052603260461 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 725110.9209402801,
            "unit": "iter/sec",
            "range": "stddev: 0.000003660784361145729",
            "extra": "mean: 1.3790993503494064 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 5998936.62853218,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 166.69620999891777 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 3054793.494876029,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 327.354370001558 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 4456037.469581301,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 224.4146299995009 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 9804138.797530329,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 101.99774000057005 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 3951400.4612776567,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 253.0748300000596 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 4197558.599190642,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 238.23371999924348 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_mean",
            "value": 111626.89060083215,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.958414900007483 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_std",
            "value": 38294.325992511185,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 26.11352920000627 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_mean",
            "value": 1777186.7091721885,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 562.6870800006145 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_std",
            "value": 880549.7074584052,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.1356542299995454 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 22248.789402802642,
            "unit": "iter/sec",
            "range": "stddev: 0.000271564684050921",
            "extra": "mean: 44.94626569992306 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 10263.264453897638,
            "unit": "iter/sec",
            "range": "stddev: 0.00016195333371463885",
            "extra": "mean: 97.43488579993027 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 3.8337934116090677,
            "unit": "iter/sec",
            "range": "stddev: 0.22792501524808756",
            "extra": "mean: 260.8382593000215 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 1950558.9482739249,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 512.6735599992571 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1602591.5058530818,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 623.9893299994037 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 6431816.187961159,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 155.47707999985505 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2320729.5055363346,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 430.89899000051446 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2350436.109313535,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 425.45296000071176 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 298599.06931561197,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.3489722600006644 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 43721.4876876444,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 22.872048799990807 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 39811.4776840465,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.11838440000247 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.106258518719455,
            "unit": "iter/sec",
            "range": "stddev: 0.0038079383967804703",
            "extra": "mean: 321.9307066600004 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 10125179.620635,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 98.76368000050206 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 4509449.867866501,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 221.75653999966016 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 271919.7575666548,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.6775555000076565 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}