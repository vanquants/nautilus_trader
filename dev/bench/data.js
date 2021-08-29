window.BENCHMARK_DATA = {
  "lastUpdate": 1630215520540,
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
          "id": "ca36ad474923e7066f2293292c2c7e9731252fef",
          "message": "Refine configuration\n\n- Add pydantic configuration models.\n- Update examples.\n- Update tests.",
          "timestamp": "2021-08-29T15:16:25+10:00",
          "tree_id": "009dd67c441e4bab695c161339bc0526bd316566",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/ca36ad474923e7066f2293292c2c7e9731252fef"
        },
        "date": 1630215511345,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 0.23801033510517888,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.201498222999817 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 0.5883031261601411,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.6998039880002125 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 0.22278677023504292,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.4885968720000164 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 5734936.400945881,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 174.36985000131244 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 5695121.14343394,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 175.5888900015634 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 5873517.443451822,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 170.2557299995533 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 7006335.198298987,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 142.7279700010331 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 170.56513174027197,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.862863000174912 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 9617244.257508427,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 103.97989000011876 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 9469612.675924769,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 105.6009399985669 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 4686256.750684776,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 213.3899300019948 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 8168772.726171123,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 122.41740999797912 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2364876.2875836454,
            "unit": "iter/sec",
            "range": "stddev: 7.014211847292364e-7",
            "extra": "mean: 422.85510039164365 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 699098.6987434116,
            "unit": "iter/sec",
            "range": "stddev: 0.000004345545128195508",
            "extra": "mean: 1.4304131902940753 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 550078.3793077989,
            "unit": "iter/sec",
            "range": "stddev: 0.000004614678640060315",
            "extra": "mean: 1.8179227499513217 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 577681.0145139566,
            "unit": "iter/sec",
            "range": "stddev: 0.0000028351053553112323",
            "extra": "mean: 1.7310591396903874 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3479504.9021022874,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016814920883425494",
            "extra": "mean: 287.3972096995203 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1150088.9150665107,
            "unit": "iter/sec",
            "range": "stddev: 0.00000213761202204171",
            "extra": "mean: 869.4979900246835 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2341639.2112345635,
            "unit": "iter/sec",
            "range": "stddev: 0.000001958740144493034",
            "extra": "mean: 427.05127041017477 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 3680251.776366587,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023939965922360518",
            "extra": "mean: 271.72053999720447 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1249493.0024823549,
            "unit": "iter/sec",
            "range": "stddev: 0.000006089619364206002",
            "extra": "mean: 800.3246100724937 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 655373.2829381605,
            "unit": "iter/sec",
            "range": "stddev: 0.000013848028893186084",
            "extra": "mean: 1.5258479801264002 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 730880.7320842596,
            "unit": "iter/sec",
            "range": "stddev: 0.0000031639392822960985",
            "extra": "mean: 1.368212289778512 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 5787441.622052879,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 172.78792000070098 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 3591632.272601351,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 278.4249399996952 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 6633266.401513994,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 150.75528999886956 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 10083711.951467993,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 99.16983000039181 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 4183648.619385905,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 239.02580999902054 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 4136746.0992363812,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 241.73588999929052 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_mean",
            "value": 121720.77832842528,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.21552419999989 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_std",
            "value": 37263.60652738346,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 26.835835099996075 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_mean",
            "value": 1823494.3534765432,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 548.3976400000756 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_std",
            "value": 997910.8038779285,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.0020935700003974 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 71693.18123097338,
            "unit": "iter/sec",
            "range": "stddev: 0.0000605490181334396",
            "extra": "mean: 13.948327899947799 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 10248.252468761124,
            "unit": "iter/sec",
            "range": "stddev: 0.00017150090604778234",
            "extra": "mean: 97.57761169996684 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 3.3287796515364416,
            "unit": "iter/sec",
            "range": "stddev: 0.2404345959993425",
            "extra": "mean: 300.41039200009436 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 1668737.5699911723,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 599.2553999999473 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1468627.682126999,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 680.9077700017951 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 5698814.572485518,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 175.47508999996353 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 1997820.2582247031,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 500.54553000109075 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2074882.5528279503,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 481.95499000030395 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 270244.23771592806,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.70035641999948 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 42355.139936441185,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 23.60988539999198 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 36806.981542357964,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 27.168758700008766 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 2.844551505251713,
            "unit": "iter/sec",
            "range": "stddev: 0.0038657498620765784",
            "extra": "mean: 351.5492681899991 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 8989963.245436016,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 111.23515999997835 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 4083916.9795090333,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 244.86296000077348 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 252819.42324604603,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.9553923000084983 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 84211.4390614223,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.874871289999192 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}