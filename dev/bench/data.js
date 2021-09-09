window.BENCHMARK_DATA = {
  "lastUpdate": 1631217335966,
  "repoUrl": "https://github.com/nautechsystems/nautilus_trader",
  "entries": {
    "Benchmark with pytest-benchmark": [
      {
        "commit": {
          "author": {
            "email": "chris@cjdsellers.io",
            "name": "Christopher Sellers",
            "username": "cjdsellers"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7b61260e933655e50926983af192a44c7a6d8a16",
          "message": "Fix `max_loser` stat #432",
          "timestamp": "2021-09-10T05:34:57+10:00",
          "tree_id": "da8c6e3cd1b5936560156b547d346af0374229bc",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/7b61260e933655e50926983af192a44c7a6d8a16"
        },
        "date": 1631217317074,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 0.26885056135629626,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.7195384490000833 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 0.6627651124903011,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.5088301740001953 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 0.25642425763497495,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.8997870529999545 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 6143866.624036865,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 162.76394999977128 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 5559194.975184222,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 179.8821600004885 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 6172422.296131195,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 162.01095000042187 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 7352149.73906534,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 136.01464000203123 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 159.24390991351189,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.279675000087082 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 9729781.586888295,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 102.77722999944672 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 9946566.052658461,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 100.53720999849247 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 5131432.931035483,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 194.8773400022219 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 8864355.504460307,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 112.8113600020697 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2534509.628535181,
            "unit": "iter/sec",
            "range": "stddev: 1.1572678061095474e-7",
            "extra": "mean: 394.5536401761274 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 806789.2154439192,
            "unit": "iter/sec",
            "range": "stddev: 1.9624612239480697e-7",
            "extra": "mean: 1.2394811195508737 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 590653.3104840538,
            "unit": "iter/sec",
            "range": "stddev: 3.7209383041862715e-7",
            "extra": "mean: 1.6930405404491466 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 596009.6899645118,
            "unit": "iter/sec",
            "range": "stddev: 3.6864188285610504e-7",
            "extra": "mean: 1.677825070360086 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3673179.583913471,
            "unit": "iter/sec",
            "range": "stddev: 8.147814396076869e-8",
            "extra": "mean: 272.2436998124067 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1127337.493166543,
            "unit": "iter/sec",
            "range": "stddev: 2.1959984924297975e-7",
            "extra": "mean: 887.0458102046541 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2310554.996138529,
            "unit": "iter/sec",
            "range": "stddev: 1.9811117272141117e-7",
            "extra": "mean: 432.79645006123246 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 4057254.0226899893,
            "unit": "iter/sec",
            "range": "stddev: 6.465028220903809e-8",
            "extra": "mean: 246.47211991350557 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1236375.2379406746,
            "unit": "iter/sec",
            "range": "stddev: 1.1530915828519947e-7",
            "extra": "mean: 808.8159397834715 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 669914.9188038458,
            "unit": "iter/sec",
            "range": "stddev: 2.2426473291372643e-7",
            "extra": "mean: 1.4927268701308094 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 768711.7172164031,
            "unit": "iter/sec",
            "range": "stddev: 3.167958096039499e-7",
            "extra": "mean: 1.3008777902086877 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 6369918.087313064,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 156.98788999998214 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 3833324.8872348582,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 260.87014000040654 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 7155293.042135068,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 139.7566800005734 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 10177475.841562344,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 98.25618999911967 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 4414743.424178602,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 226.5137299991693 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 4594920.535888918,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 217.63162000070224 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 61640.17769455181,
            "unit": "iter/sec",
            "range": "stddev: 0.00008416200814201584",
            "extra": "mean: 16.223184899877197 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 14369.439425719125,
            "unit": "iter/sec",
            "range": "stddev: 0.00014838484695666427",
            "extra": "mean: 69.59213719987929 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 4.515674260743115,
            "unit": "iter/sec",
            "range": "stddev: 0.1796750595895671",
            "extra": "mean: 221.45087139997486 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 1875618.68454551,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 533.157410000058 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1618677.1516379905,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 617.7884199996697 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 6372962.731028912,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 156.9128900018768 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2224167.578038423,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 449.60640999988755 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2232444.8850162947,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 447.93938999873717 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 308855.41823395714,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.2377609100012705 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 61876.806965154,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 16.161144200009403 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 54250.84797875508,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 18.432891599991308 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 2.9004638924797272,
            "unit": "iter/sec",
            "range": "stddev: 0.0008051171717955903",
            "extra": "mean: 344.7724354000002 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 9569112.436223524,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 104.50289999880624 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 4151478.1379209394,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 240.87806000125056 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 231854.11720321456,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.3130569000140895 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_mean",
            "value": 134524.9771043528,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.433563800009324 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_std",
            "value": 44652.38165533681,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 22.395222000000103 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_mean",
            "value": 1733036.3255664418,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 577.0219500004714 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_std",
            "value": 991227.9793130953,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.0088496499997746 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 87848.66989936451,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.383211620000111 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}