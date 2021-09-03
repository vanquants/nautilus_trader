window.BENCHMARK_DATA = {
  "lastUpdate": 1630647950150,
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
          "id": "b770d96fb926205d8e422365ab256a73413a51c7",
          "message": "Standardize config docs",
          "timestamp": "2021-09-03T15:22:09+10:00",
          "tree_id": "ae886c16a16d1381ab8838f49bc7253661904739",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/b770d96fb926205d8e422365ab256a73413a51c7"
        },
        "date": 1630647939055,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 0.21817835492175303,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.5834060869999576 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 0.5474560548443635,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.8266306329999225 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 0.20277985591643904,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.9314563099999305 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 5257920.176061913,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 190.18926999933683 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 5453240.940132679,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 183.3771900010106 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 5733153.0294701625,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 174.42409000068437 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 5301095.322897055,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 188.64026000073864 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 140.26453329749293,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.129386000087834 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 9300051.178111956,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 107.5262900008056 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 9265153.784284519,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 107.93129000148838 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 4640854.050802596,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 215.47757999996975 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 8042497.198552317,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 124.33949000069335 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2511320.657232359,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021478533428996754",
            "extra": "mean: 398.19685993506937 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 583815.8834371974,
            "unit": "iter/sec",
            "range": "stddev: 0.00004140353252986275",
            "extra": "mean: 1.7128687799868203 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 535102.9230554142,
            "unit": "iter/sec",
            "range": "stddev: 0.000006803526724543159",
            "extra": "mean: 1.8687993597382047 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 531570.5235493112,
            "unit": "iter/sec",
            "range": "stddev: 0.000010001581956858017",
            "extra": "mean: 1.8812179300743992 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3142938.4201990725,
            "unit": "iter/sec",
            "range": "stddev: 7.918249588217269e-7",
            "extra": "mean: 318.17358990338107 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1062852.1436851867,
            "unit": "iter/sec",
            "range": "stddev: 0.000003609773062428699",
            "extra": "mean: 940.8646404313004 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2137003.7831898136,
            "unit": "iter/sec",
            "range": "stddev: 0.000004582996937666194",
            "extra": "mean: 467.9448898809824 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 3753820.5494391974,
            "unit": "iter/sec",
            "range": "stddev: 7.366707824119247e-7",
            "extra": "mean: 266.3952596640229 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1017975.0157849569,
            "unit": "iter/sec",
            "range": "stddev: 0.00000168961497685852",
            "extra": "mean: 982.342380209502 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 551075.3923207821,
            "unit": "iter/sec",
            "range": "stddev: 0.000013430774480540452",
            "extra": "mean: 1.8146337396569834 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 696457.40961256,
            "unit": "iter/sec",
            "range": "stddev: 0.000005923073692955508",
            "extra": "mean: 1.4358379797499765 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 5825635.241817031,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 171.6551000004074 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 3305602.6328356904,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 302.51670000097874 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 6392761.5527952295,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 156.42692000028546 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 9532863.019958597,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 104.90028000049278 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 4112146.796373889,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 243.18198000173655 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 4081799.2570949914,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 244.990000001053 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_mean",
            "value": 114888.5628044419,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.704086600005212 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_std",
            "value": 33339.29317653418,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 29.994637099980537 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_mean",
            "value": 1671002.0257220147,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 598.4433200001149 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_std",
            "value": 962675.4275006094,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.0387717100002192 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 70928.61487468806,
            "unit": "iter/sec",
            "range": "stddev: 0.00006110923630999207",
            "extra": "mean: 14.098682199937684 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 9936.418625878066,
            "unit": "iter/sec",
            "range": "stddev: 0.00017827657576108833",
            "extra": "mean: 100.63988220017563 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 3.5559630581749064,
            "unit": "iter/sec",
            "range": "stddev: 0.21631340134644667",
            "extra": "mean: 281.21776960001625 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 1776550.6786908086,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 562.8885300006914 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1457906.6982000056,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 685.914949999642 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 5807639.706166201,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 172.18698999840854 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2019705.2951046387,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 495.1217400002861 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 1904634.6026060744,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 525.035090001893 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 252930.39784161048,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.9536568500011526 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 39142.82505243595,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.547466200009694 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 36009.31517772253,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 27.77059200000167 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 2.7040245061055335,
            "unit": "iter/sec",
            "range": "stddev: 0.0017505956369122885",
            "extra": "mean: 369.81913357000167 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 7907109.179186499,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 126.46846999814441 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 3808144.7533907196,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 262.59505999860266 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 209405.41927839824,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.775425599996197 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 79007.0256073113,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 12.657102230000419 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}