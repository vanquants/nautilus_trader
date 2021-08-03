window.BENCHMARK_DATA = {
  "lastUpdate": 1627979376271,
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
          "id": "1ac27106a04372a6bc26ccd9aefd2ee409afb563",
          "message": "Improve order fill handling",
          "timestamp": "2021-08-03T18:12:52+10:00",
          "tree_id": "e1bdc84e5e032aa53ab248a12ac4470b6ee2475e",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/1ac27106a04372a6bc26ccd9aefd2ee409afb563"
        },
        "date": 1627979373854,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 342049.877001581,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.923550240000168 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 70000.57470476041,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 14.285596999991412 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 62929.90169024299,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 15.890697000008913 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.4312453497605424,
            "unit": "iter/sec",
            "range": "stddev: 0.0001382864591984462",
            "extra": "mean: 291.4393749400017 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 11506411.314861074,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 86.90806999993583 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 5298845.900741887,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 188.7203400008275 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 299733.12062686286,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.3363012999984676 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 109291.27321926497,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.149861380000175 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 0.3201716730799165,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.123324403999959 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 0.44248365325892497,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.259970492999969 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 0.1372922186184273,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.2837339949999205 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 7261443.2539610285,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 137.7136700000392 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 7282277.914002368,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 137.31967000012446 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 6764353.399884274,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 147.83378999936758 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 8919066.252255032,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 112.11935999995148 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 192.7167335738411,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.18896300002325 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 11787722.450511552,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 84.83403000013823 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 11511977.349060055,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 86.86604999979863 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 6191146.957010546,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 161.52096000041638 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 10569802.180766055,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 94.60915000090608 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2870519.5600770297,
            "unit": "iter/sec",
            "range": "stddev: 8.131989258716534e-8",
            "extra": "mean: 348.3689900281206 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 908413.3645700637,
            "unit": "iter/sec",
            "range": "stddev: 1.0198858922274926e-7",
            "extra": "mean: 1.1008204403435684 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 698893.1614587476,
            "unit": "iter/sec",
            "range": "stddev: 1.9253679811347272e-7",
            "extra": "mean: 1.4308338600892512 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 707070.8692618369,
            "unit": "iter/sec",
            "range": "stddev: 1.4029594383989117e-7",
            "extra": "mean: 1.4142853898704288 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 4137342.899623586,
            "unit": "iter/sec",
            "range": "stddev: 6.476086695116188e-8",
            "extra": "mean: 241.70102025891535 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1354423.751846328,
            "unit": "iter/sec",
            "range": "stddev: 9.851020276402448e-8",
            "extra": "mean: 738.3213699824864 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2826563.8773991168,
            "unit": "iter/sec",
            "range": "stddev: 7.664031592994885e-8",
            "extra": "mean: 353.78645004129794 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 4662070.513753205,
            "unit": "iter/sec",
            "range": "stddev: 5.5416311267755646e-8",
            "extra": "mean: 214.49697018738334 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1469786.1427138785,
            "unit": "iter/sec",
            "range": "stddev: 1.0370525796205325e-7",
            "extra": "mean: 680.3710900101123 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 801744.621864473,
            "unit": "iter/sec",
            "range": "stddev: 1.8807358424605838e-7",
            "extra": "mean: 1.2472799601380302 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 881018.8222372194,
            "unit": "iter/sec",
            "range": "stddev: 2.3974522466461916e-7",
            "extra": "mean: 1.1350495298847818 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 7698608.707430869,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 129.89360000005945 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 4174927.6307500233,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 239.5251100006135 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 8581588.682069087,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 116.52853999976287 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 11977284.361612262,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 83.4913799997139 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 5418619.514567177,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 184.54884999982824 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 5558494.146111482,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 179.90484000051765 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_mean",
            "value": 162981.69668276305,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.135658300001978 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_std",
            "value": 54099.83333302486,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 18.484345299998495 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_mean",
            "value": 2308807.6393832127,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 433.123999999907 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_std",
            "value": 1262167.850274466,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 792.2876500003895 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 72127.62151688282,
            "unit": "iter/sec",
            "range": "stddev: 0.00005549715291446405",
            "extra": "mean: 13.864314100055708 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 17199.93082806201,
            "unit": "iter/sec",
            "range": "stddev: 0.00012081178041494785",
            "extra": "mean: 58.139768700027616 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 5.185594143802426,
            "unit": "iter/sec",
            "range": "stddev: 0.18092134960300743",
            "extra": "mean: 192.84193329999653 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 2353543.9052227717,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 424.89115999956084 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1935910.9329202992,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 516.5526899997985 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 7706778.057362433,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 129.75590999985798 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2701847.9694507457,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 370.11704999940775 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2684498.8980129403,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 372.5090000000364 nsec\nrounds: 1"
          }
        ]
      }
    ]
  }
}