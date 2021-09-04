window.BENCHMARK_DATA = {
  "lastUpdate": 1630743361607,
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
          "id": "3c81ded9b67f703f5d23c40c3f8c36551ec56da4",
          "message": "Iterate towards importable strategy configs",
          "timestamp": "2021-09-04T17:51:31+10:00",
          "tree_id": "5ba31b4d395faf156f170edc5e7bb04d8dfa260b",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/3c81ded9b67f703f5d23c40c3f8c36551ec56da4"
        },
        "date": 1630743348847,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 0.26465394049099955,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.778519216999939 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 0.6603231608473944,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.5144100030001937 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 0.2555736911101035,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.912765808000131 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 6051890.2383574555,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 165.23762999895553 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 5614995.58684552,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 178.09453000154463 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 6255698.550377313,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 159.8542500005351 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 7561476.124035987,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 132.24931000195284 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 167.01681742795392,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.987420999872484 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 9776012.968601977,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 102.29118999859566 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 9894709.407795643,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 101.06410999924265 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 5265697.623827544,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 189.90836000057243 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 9085644.372904792,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 110.06374000089636 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2541365.102446039,
            "unit": "iter/sec",
            "range": "stddev: 0.000001152052145526437",
            "extra": "mean: 393.48930975620533 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 832777.3363154153,
            "unit": "iter/sec",
            "range": "stddev: 9.8401236630177e-7",
            "extra": "mean: 1.2008011702437216 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 618894.8347056377,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019849242052603227",
            "extra": "mean: 1.615783399574866 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 623219.6832939764,
            "unit": "iter/sec",
            "range": "stddev: 0.000003086896474139643",
            "extra": "mean: 1.6045706302384133 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3569404.977683386,
            "unit": "iter/sec",
            "range": "stddev: 8.963958206760933e-7",
            "extra": "mean: 280.15873969252425 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1140988.8805671483,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010788238199254714",
            "extra": "mean: 876.4327304425024 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2373223.35837968,
            "unit": "iter/sec",
            "range": "stddev: 5.39568700998455e-7",
            "extra": "mean: 421.3678398491538 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 3900296.4108877913,
            "unit": "iter/sec",
            "range": "stddev: 1.9237209473484374e-7",
            "extra": "mean: 256.39076999596 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1252850.0611622415,
            "unit": "iter/sec",
            "range": "stddev: 6.424313599999262e-7",
            "extra": "mean: 798.1801102937425 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 705640.1653984042,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012508809773940574",
            "extra": "mean: 1.4171528904330444 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 720054.5704521294,
            "unit": "iter/sec",
            "range": "stddev: 0.0000034627186984492732",
            "extra": "mean: 1.3887836297908507 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 6391001.469953025,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 156.46999999944455 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 3786077.8194728014,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 264.12558000174613 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 7173559.979512444,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 139.40080000111266 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 10021745.18266135,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 99.7830200003591 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 4458677.1363663105,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 224.28176999937932 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 4569352.257749369,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 218.8494000006358 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_mean",
            "value": 135907.27948757994,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.357957599992915 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_std",
            "value": 45533.90919552952,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 21.961654899996574 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_mean",
            "value": 1937127.3923341972,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 516.2283100003151 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_std",
            "value": 1059578.6337619587,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 943.7713900001654 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 80714.4754967996,
            "unit": "iter/sec",
            "range": "stddev: 0.00005437718973500426",
            "extra": "mean: 12.38935140004287 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 14386.01978103694,
            "unit": "iter/sec",
            "range": "stddev: 0.00013951782609318778",
            "extra": "mean: 69.51193000013518 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 4.575919375564765,
            "unit": "iter/sec",
            "range": "stddev: 0.17647172967135066",
            "extra": "mean: 218.53531890005797 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 1869810.4113213,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 534.8135799999909 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1611054.0994823494,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 620.7116200016571 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 6297698.770511335,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 158.78815999940343 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2264348.975676371,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 441.62803999824973 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2277308.4409640348,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 439.1148699983205 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 314123.55347581254,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.1834607400014647 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 59966.1958560344,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 16.67606200001046 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 53476.09511325882,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 18.69994430001043 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 2.8955130357012426,
            "unit": "iter/sec",
            "range": "stddev: 0.0020285960568882807",
            "extra": "mean: 345.36194024000224 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 9677706.251893595,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 103.3302700011518 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 4445930.175516181,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 224.9248099997203 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 264699.72886277083,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.777865600000041 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 92237.24748638184,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.841607130000739 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}