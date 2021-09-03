window.BENCHMARK_DATA = {
  "lastUpdate": 1630649823220,
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
          "id": "0c0cd898679d18fd515bc97b4e65c7b56af96de5",
          "message": "Standardize docs",
          "timestamp": "2021-09-03T15:59:20+10:00",
          "tree_id": "24cb59d3f54eb0098ddcd6c0a90af7ce5d52a8f3",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/0c0cd898679d18fd515bc97b4e65c7b56af96de5"
        },
        "date": 1630649812145,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 0.3170300830803263,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.1542747940000027 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 0.7784229139309295,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.2846487199999501 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 0.302102875672889,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.3101306890000615 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 6939153.821491169,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 144.10979000103907 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 6829210.993954593,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 146.42979999962336 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 7491774.219196618,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 133.47973000009006 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 8843404.703584269,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 113.07862000194291 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 196.89194255649056,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.0789279998753045 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 11552083.666630765,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 86.56447000021217 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 12034208.441165322,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 83.0964499982656 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 6175245.183509203,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 161.93688999919686 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 10710478.521674175,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 93.36651000012353 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2219451.854545216,
            "unit": "iter/sec",
            "range": "stddev: 7.185790741273418e-8",
            "extra": "mean: 450.5616997062134 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 884441.1170002541,
            "unit": "iter/sec",
            "range": "stddev: 1.1362802517998226e-7",
            "extra": "mean: 1.1306575200751467 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 685511.3368842334,
            "unit": "iter/sec",
            "range": "stddev: 1.3839336322161255e-7",
            "extra": "mean: 1.4587650797216156 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 699507.7877705798,
            "unit": "iter/sec",
            "range": "stddev: 1.3416808618111468e-7",
            "extra": "mean: 1.429576650157287 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 4225450.424697446,
            "unit": "iter/sec",
            "range": "stddev: 7.513272856632163e-8",
            "extra": "mean: 236.66116022923234 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1391206.7551191305,
            "unit": "iter/sec",
            "range": "stddev: 1.0615872215036147e-7",
            "extra": "mean: 718.8004200816067 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2776598.95767896,
            "unit": "iter/sec",
            "range": "stddev: 6.904101227375043e-8",
            "extra": "mean: 360.152839946295 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 4677876.719423021,
            "unit": "iter/sec",
            "range": "stddev: 4.325388345563926e-8",
            "extra": "mean: 213.77220050453616 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1487147.6241225072,
            "unit": "iter/sec",
            "range": "stddev: 9.919837367848046e-8",
            "extra": "mean: 672.4281999845516 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 823837.0190065947,
            "unit": "iter/sec",
            "range": "stddev: 1.3827469196220614e-7",
            "extra": "mean: 1.213832319899666 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 897274.9082005562,
            "unit": "iter/sec",
            "range": "stddev: 2.5510437986636346e-7",
            "extra": "mean: 1.114485639641316 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 7524472.594677683,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 132.89967999980945 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 4518607.444705947,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 221.3071200003469 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 8654517.627901835,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 115.5465900001218 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 11935249.362660429,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 83.78542999935235 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 5413454.187554716,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 184.72494000207007 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 5562573.050469329,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 179.772920000687 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_mean",
            "value": 161518.75438682068,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.1912314999972295 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_std",
            "value": 54245.89716180173,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 18.434573899980933 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_mean",
            "value": 2015590.4713621167,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 496.13252999961327 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_std",
            "value": 1114040.3316267568,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 897.6335699981064 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 82013.78484437923,
            "unit": "iter/sec",
            "range": "stddev: 0.00005878518094120831",
            "extra": "mean: 12.193072199966082 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 16184.02285299501,
            "unit": "iter/sec",
            "range": "stddev: 0.0001388052332518439",
            "extra": "mean: 61.789334399941254 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 5.253471071962077,
            "unit": "iter/sec",
            "range": "stddev: 0.154944904961637",
            "extra": "mean: 190.35033909999584 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 2295614.8659771523,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 435.6131400004415 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1962178.961280619,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 509.6375099992656 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 7105518.152529317,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 140.73568999947383 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2681275.4709503036,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 372.9568299991115 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2680262.1714556813,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 373.0978299995513 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 357090.5982091344,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.8004097699999875 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 72030.75730626401,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 13.882958299996062 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 61811.23165082881,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 16.178289500021492 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.425136235509666,
            "unit": "iter/sec",
            "range": "stddev: 0.00016690352671303642",
            "extra": "mean: 291.9591897199962 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 11453645.093988555,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 87.30844999945475 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 4815632.081081326,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 207.65706000020145 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 308080.34673815634,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.2459065000011833 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 108678.38282450117,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.20146190999958 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}