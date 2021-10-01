window.BENCHMARK_DATA = {
  "lastUpdate": 1633128000211,
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
          "id": "928cb62197aa51761139904529fdbd4aeabb1906",
          "message": "Reinstate some datetime core functions",
          "timestamp": "2021-10-02T07:02:41+10:00",
          "tree_id": "cad54e414fa16666e7d090928acc9d4510f36cd3",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/928cb62197aa51761139904529fdbd4aeabb1906"
        },
        "date": 1633125180115,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 2.5133735222741764,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 397.8716220003662 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 8.053447055735248,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 124.17043200002809 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 1.1854239137553906,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 843.5800800002653 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 6549534.786507904,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 152.6826000008441 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 7021494.620656625,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 142.4198199993043 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 6463507.8426001975,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 154.71475000140344 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 9183135.318902172,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 108.89527000017551 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 162.32269492524483,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.160567999813793 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 13292088.868393539,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 75.23271999616554 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 13563809.585775731,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 73.72560000021622 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 6794346.940272645,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 147.18118000018876 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 11997552.978959119,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 83.35033000093972 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2910778.189510792,
            "unit": "iter/sec",
            "range": "stddev: 1.5461293540198822e-7",
            "extra": "mean: 343.5507396625326 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 948717.4753940986,
            "unit": "iter/sec",
            "range": "stddev: 2.5827063689065025e-7",
            "extra": "mean: 1.0540545799312895 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 726693.365108399,
            "unit": "iter/sec",
            "range": "stddev: 4.081711753290348e-7",
            "extra": "mean: 1.3760962298738377 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 723913.3432619448,
            "unit": "iter/sec",
            "range": "stddev: 3.0781183541712496e-7",
            "extra": "mean: 1.3813808093300395 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3878851.9759262353,
            "unit": "iter/sec",
            "range": "stddev: 1.232405875474585e-7",
            "extra": "mean: 257.8082397076287 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1290243.832782393,
            "unit": "iter/sec",
            "range": "stddev: 1.5471943132444318e-7",
            "extra": "mean: 775.047300821825 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2480780.7699319553,
            "unit": "iter/sec",
            "range": "stddev: 1.2515889993512476e-7",
            "extra": "mean: 403.0989002012575 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 4400590.125598439,
            "unit": "iter/sec",
            "range": "stddev: 1.3702789066683394e-7",
            "extra": "mean: 227.24224966623296 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1232091.1846208994,
            "unit": "iter/sec",
            "range": "stddev: 2.2688142707391344e-7",
            "extra": "mean: 811.628240248865 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 773079.4802763775,
            "unit": "iter/sec",
            "range": "stddev: 2.9382305796857386e-7",
            "extra": "mean: 1.2935280595502263 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 721525.329249751,
            "unit": "iter/sec",
            "range": "stddev: 5.074727614692056e-7",
            "extra": "mean: 1.3859527302247443 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 7835904.254334801,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 127.61769000007915 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 4070307.7279036697,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 245.68166999870303 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 8970261.519777387,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 111.4794700015409 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 15509911.608946972,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 64.47490000027756 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 5334265.336097148,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 187.46724000266113 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 5484354.9178908,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 182.33684999813704 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 79086.89185052777,
            "unit": "iter/sec",
            "range": "stddev: 0.00005564351924355173",
            "extra": "mean: 12.64432040002248 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 10379.448957608727,
            "unit": "iter/sec",
            "range": "stddev: 0.00020058418446725673",
            "extra": "mean: 96.34422829999494 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 3.793876524402402,
            "unit": "iter/sec",
            "range": "stddev: 0.204978166653158",
            "extra": "mean: 263.5826425999767 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 2252365.2763406243,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 443.977720001385 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1865582.1565036504,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 536.0257099982846 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 8327149.03727632,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 120.08912000055716 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2528623.768195292,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 395.47203999973135 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2516925.1259260764,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 397.31019000100787 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 240267.47574919133,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.162028159998954 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 38456.265072212555,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 26.003565300015907 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 34567.03352520245,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 28.929297600006976 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 2.99917184503671,
            "unit": "iter/sec",
            "range": "stddev: 0.00020995713914037173",
            "extra": "mean: 333.425375959996 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 12695831.616209233,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 78.76600999679795 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 5031974.170345454,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 198.7291599971286 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 213595.4713662245,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.681747199992969 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_mean",
            "value": 135712.7911285879,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.368502200006333 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_std",
            "value": 45541.311382003165,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 21.958085300002494 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_mean",
            "value": 2048167.7859045977,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 488.241250000101 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_std",
            "value": 1093924.6553290843,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 914.1397399980633 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 93411.16160758924,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.7053587900009 usec\nrounds: 1"
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
          "id": "299205a8acf3a247137fa30cd83c70c857739107",
          "message": "Improve pydantic config pattern",
          "timestamp": "2021-10-02T07:55:31+10:00",
          "tree_id": "65b79dac559f213585c735f32c1139ed61890499",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/299205a8acf3a247137fa30cd83c70c857739107"
        },
        "date": 1633127991145,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 2.877474980255163,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 347.5269139999 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 9.167340374505715,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 109.08289200006038 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 1.3381962027299779,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 747.2745760001089 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 6801324.272209149,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 147.0301900008053 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 5952302.297028042,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 168.0022199980158 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 6418641.7896596,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 155.79620000153227 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 8827827.784824982,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 113.27815000186092 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 169.17591198577148,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.911007000122481 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 11497276.525193049,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 86.97711999957392 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 11381469.056413293,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 87.86211999904481 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 5829434.364775818,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 171.54322999886062 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 10219814.93372199,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 97.84912999748485 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2760398.6167083895,
            "unit": "iter/sec",
            "range": "stddev: 2.8282495055589957e-7",
            "extra": "mean: 362.2665197508468 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 983933.999841077,
            "unit": "iter/sec",
            "range": "stddev: 3.935538194699426e-7",
            "extra": "mean: 1.0163283311294435 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 762532.3738891791,
            "unit": "iter/sec",
            "range": "stddev: 4.707030154238555e-7",
            "extra": "mean: 1.3114197301547392 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 769662.4791777771,
            "unit": "iter/sec",
            "range": "stddev: 5.547594011468512e-7",
            "extra": "mean: 1.2992708194224178 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 4144247.867557615,
            "unit": "iter/sec",
            "range": "stddev: 2.0341063905764322e-7",
            "extra": "mean: 241.29830839228813 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1318337.525362924,
            "unit": "iter/sec",
            "range": "stddev: 4.197149486640065e-7",
            "extra": "mean: 758.5310899230535 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2592368.4224223825,
            "unit": "iter/sec",
            "range": "stddev: 2.920858906860004e-7",
            "extra": "mean: 385.7476396296988 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 4704548.01578087,
            "unit": "iter/sec",
            "range": "stddev: 2.0497480806336205e-7",
            "extra": "mean: 212.5602707519647 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1417103.2777929732,
            "unit": "iter/sec",
            "range": "stddev: 3.8581583766628685e-7",
            "extra": "mean: 705.6648697880519 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 782054.1412439684,
            "unit": "iter/sec",
            "range": "stddev: 4.858685320541841e-7",
            "extra": "mean: 1.2786838497004283 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 910425.6425331411,
            "unit": "iter/sec",
            "range": "stddev: 5.158471345183218e-7",
            "extra": "mean: 1.0983873402528843 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 6875442.219810136,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 145.445190000828 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 4483896.958433245,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 223.02029000002221 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 8439875.508389024,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 118.48516000100062 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 11611285.286869515,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 86.12310999978945 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 4984690.519953425,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 200.61426000211213 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 5313686.8617495755,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 188.19325000094977 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 89317.97482249513,
            "unit": "iter/sec",
            "range": "stddev: 0.00004906447425414606",
            "extra": "mean: 11.195954699905997 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 11838.734071498844,
            "unit": "iter/sec",
            "range": "stddev: 0.00015352933167695084",
            "extra": "mean: 84.46849079982712 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 4.736734499119952,
            "unit": "iter/sec",
            "range": "stddev: 0.18167188463297515",
            "extra": "mean: 211.11590700002125 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 2187462.854146441,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 457.15061999999307 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1825547.9039799867,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 547.7807499983101 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 7212707.579188984,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 138.64418999673944 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2487874.41110081,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 401.9495500006087 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2556240.2899645013,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 391.19952999953966 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 270296.12884346064,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.6996460299997125 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 44136.99438047894,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 22.656730800008518 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 39593.60427727909,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.256604399965 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.17760344942066,
            "unit": "iter/sec",
            "range": "stddev: 0.005593492075437266",
            "extra": "mean: 314.70257881999714 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 10791081.214622002,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 92.66911999930016 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 4999293.349974036,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 200.0282699964373 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 263845.6222395161,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.790095099975588 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_mean",
            "value": 152552.07105576532,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.555138800013083 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_std",
            "value": 49917.54395464182,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 20.033036899985746 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_mean",
            "value": 2162374.331988521,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 462.45462000115367 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_std",
            "value": 1209156.0536916761,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 827.0231100004821 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 103809.03437859128,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.633072940000602 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}