window.BENCHMARK_DATA = {
  "lastUpdate": 1628060577373,
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
          "id": "ebebf7d4565cae110bf003058f1d0d9a7d2f6ce3",
          "message": "Refine and standardize identifiers\n\n- Clarify venue position IDs.\n- Refine ordering of `OrderEvent` base class properties.\n- Standardize trading venue terminology.",
          "timestamp": "2021-08-04T16:42:44+10:00",
          "tree_id": "b0efac1007af329c270b2df4764334cf90740437",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/ebebf7d4565cae110bf003058f1d0d9a7d2f6ce3"
        },
        "date": 1628060573789,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 0.22917600745103203,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.363458509999873 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 0.30437540963205306,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.285416522999867 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 0.08877940540801305,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.263873590999992 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 6335817.058094344,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 157.8328400000828 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 6112921.181069982,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 163.5879099990234 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 5538720.9210573165,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 180.54709999887564 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 7036770.291242456,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 142.11065000154122 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 187.82651291439865,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.324061999999685 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 11138331.95679978,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 89.7800500001722 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 10166098.80528937,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 98.36615000040183 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 5252177.526572354,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 190.3972199988857 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 9949934.91257713,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 100.5031699992287 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2795608.479588096,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016211929308668252",
            "extra": "mean: 357.703879960809 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 867652.8276061396,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020341901255205217",
            "extra": "mean: 1.1525347099473038 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 706784.8436885497,
            "unit": "iter/sec",
            "range": "stddev: 0.000002212303784910422",
            "extra": "mean: 1.4148577306514198 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 685319.7124280691,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023870247481416423",
            "extra": "mean: 1.4591729697326628 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3478731.916104478,
            "unit": "iter/sec",
            "range": "stddev: 9.489212395090836e-7",
            "extra": "mean: 287.46107033157386 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1166301.2096936535,
            "unit": "iter/sec",
            "range": "stddev: 0.000004382901323166245",
            "extra": "mean: 857.4114402767918 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2483265.6463074437,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011857738926179843",
            "extra": "mean: 402.6955398376231 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 4035820.6483601946,
            "unit": "iter/sec",
            "range": "stddev: 8.612411175268753e-7",
            "extra": "mean: 247.78108026339396 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1391237.7805999273,
            "unit": "iter/sec",
            "range": "stddev: 0.000001929782414977389",
            "extra": "mean: 718.7843903784596 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 659084.2885793975,
            "unit": "iter/sec",
            "range": "stddev: 0.000006607171072974676",
            "extra": "mean: 1.5172566200226356 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 732003.8302379685,
            "unit": "iter/sec",
            "range": "stddev: 0.000002259239013575384",
            "extra": "mean: 1.3661130703030722 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 6640116.823570372,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 150.59975999974995 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 3705403.3859533165,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 269.87615000052756 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 6985646.661613042,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 143.1506700009777 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 9493860.462883329,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 105.33122999959232 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 4602641.741488943,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 217.26652999859652 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 4200855.151272006,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 238.0467700004374 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_mean",
            "value": 110605.82070891494,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.041115499985608 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_std",
            "value": 29665.60323882775,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 33.70907350001744 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_mean",
            "value": 1898674.7535060823,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 526.6831499989166 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_std",
            "value": 1034481.0321072522,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 966.6682800002492 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 51810.155384420854,
            "unit": "iter/sec",
            "range": "stddev: 0.00007750890292732798",
            "extra": "mean: 19.301235299917604 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 10817.280304554339,
            "unit": "iter/sec",
            "range": "stddev: 0.0001426330574761884",
            "extra": "mean: 92.44467850010096 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 3.77917974453869,
            "unit": "iter/sec",
            "range": "stddev: 0.2223135513317446",
            "extra": "mean: 264.60768409999673 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 2054252.3105078544,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 486.795119998078 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1694033.1797743314,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 590.3072099999918 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 6115021.599486403,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 163.53171999980987 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2321955.20330567,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 430.6715300003816 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2328405.1551636574,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 429.4785199999751 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 306950.9719829468,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.2578492699985873 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 48168.60924561869,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 20.760408400019514 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 41492.27205393099,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 24.10087350001504 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.129679288348223,
            "unit": "iter/sec",
            "range": "stddev: 0.004191452513858655",
            "extra": "mean: 319.52155728000434 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 10767960.149876589,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 92.86810000048717 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 4512887.701592281,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 221.58761000127924 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 242815.18959557012,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.118358499999886 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 91622.12275452014,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.91439457999968 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}