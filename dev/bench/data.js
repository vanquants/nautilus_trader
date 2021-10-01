window.BENCHMARK_DATA = {
  "lastUpdate": 1633125189051,
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
          "id": "928cb62197aa51761139904529fdbd4aeabb1906",
          "message": "Reinstate some datetime core functions",
          "timestamp": "2021-10-02T07:02:41+10:00",
          "tree_id": "cad54e414fa16666e7d090928acc9d4510f36cd3",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/928cb62197aa51761139904529fdbd4aeabb1906"
        },
        "date": 1633125179096,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 2.3736642032625515,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 421.2895819996447 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 7.604286843708044,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 131.5047709999817 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 1.0574458292709437,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 945.674919999874 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 6206829.175496904,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 161.11286000068503 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 6526097.996402398,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 153.23092000016914 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 6698195.070930875,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 149.29394999853685 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 8265477.89245664,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 120.98514000172143 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 186.0651354511042,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.374461999963387 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 10975941.176264973,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 91.10835999763367 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 11418082.451805096,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 87.58037999996304 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 4982770.079268967,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 200.69158000296738 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 9952002.487254914,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 100.4822899994906 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2757574.94464015,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012741721859433756",
            "extra": "mean: 362.63746954318776 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 808991.7684698501,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023165726605807647",
            "extra": "mean: 1.236106520454996 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 606310.0711922913,
            "unit": "iter/sec",
            "range": "stddev: 0.0000047893540866599496",
            "extra": "mean: 1.6493211106217132 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 618723.6058842912,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026474512677010887",
            "extra": "mean: 1.6162305599618776 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3645485.7073164433,
            "unit": "iter/sec",
            "range": "stddev: 7.897941397766011e-7",
            "extra": "mean: 274.31186960711784 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1179710.7552539976,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014939668106042323",
            "extra": "mean: 847.6654091236924 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2662797.3744069627,
            "unit": "iter/sec",
            "range": "stddev: 7.554895771836525e-7",
            "extra": "mean: 375.54490987986355 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 4078153.5809329664,
            "unit": "iter/sec",
            "range": "stddev: 7.84070726199797e-7",
            "extra": "mean: 245.20900945844915 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1315000.507153974,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013440621029776316",
            "extra": "mean: 760.4559804804012 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 726599.7955957502,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018921716809411352",
            "extra": "mean: 1.3762734397414533 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 875360.5993192361,
            "unit": "iter/sec",
            "range": "stddev: 0.000001660266383248526",
            "extra": "mean: 1.142386350011293 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 6817057.313737614,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 146.69085999685194 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 3963157.6934863296,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 252.32404999769645 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 7480944.5380337415,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 133.67296000069473 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 11984033.432881,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 83.44435999788402 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 4793694.029727386,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 208.6073899999974 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 4424343.178622468,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 226.022249999005 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 78027.33903244368,
            "unit": "iter/sec",
            "range": "stddev: 0.00005637928288652308",
            "extra": "mean: 12.816020799891703 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 7442.078070072479,
            "unit": "iter/sec",
            "range": "stddev: 0.00017108781203505492",
            "extra": "mean: 134.37107090039717 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 3.2642508884646104,
            "unit": "iter/sec",
            "range": "stddev: 0.24469332011179",
            "extra": "mean: 306.3490013999399 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 1993916.7593610089,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 501.5254499994625 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1749008.0107456022,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 571.752670002752 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 5837230.803762348,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 171.31410999809304 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2299391.5396219464,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 434.8976599976595 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2368176.8001064295,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 422.2657700029231 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 236446.9388987117,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.229278689999774 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 22930.5905081835,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 43.60986689998754 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 21589.39567916911,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 46.31903620002049 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.2481219263445613,
            "unit": "iter/sec",
            "range": "stddev: 0.003589219651046743",
            "extra": "mean: 307.87021629000265 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 10728066.68222957,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 93.21343999999954 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 4801765.5900550485,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 208.256729997629 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 235773.19212984655,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.2413643000145385 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_mean",
            "value": 134773.88829816866,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.419834899974376 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_std",
            "value": 33307.97730251467,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 30.022837800015623 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_mean",
            "value": 1941457.7489820523,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 515.0768800012884 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_std",
            "value": 999196.715783297,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.000803930000984 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 92145.66801489308,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.852382119996946 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}