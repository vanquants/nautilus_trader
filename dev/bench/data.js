window.BENCHMARK_DATA = {
  "lastUpdate": 1631218844364,
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
          "id": "31ade2fb4430c0e909dfc7ebb294074309497c12",
          "message": "Improve bracket order methods",
          "timestamp": "2021-09-10T05:59:29+10:00",
          "tree_id": "5ab04525157d4c9bf46a34a647e5fdbaf86de476",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/31ade2fb4430c0e909dfc7ebb294074309497c12"
        },
        "date": 1631218823225,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 80624.67586058343,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 12.403150640000149 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 0.23415846046360303,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.270612294000102 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 0.6000638256687575,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.6664893920001305 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 0.21700266173251195,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.608238406000055 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 5584018.850713906,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 179.08249000129217 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 5724214.11831838,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 174.6964700009812 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 5724607.017162706,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 174.684480000451 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 6714545.4041026505,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 148.9304100005029 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 162.99078971839094,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.135315999927116 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 9304204.597850839,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 107.47829000138154 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 9393791.399026657,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 106.45328999999037 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 4629981.379580571,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 215.98359000108758 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 8220619.731126327,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 121.64533000031952 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 1859573.7995346158,
            "unit": "iter/sec",
            "range": "stddev: 8.376561917446042e-7",
            "extra": "mean: 537.7576304044851 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 712869.6495330611,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015469721551174308",
            "extra": "mean: 1.4027810002221486 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 543617.3764875855,
            "unit": "iter/sec",
            "range": "stddev: 0.000005289647807917547",
            "extra": "mean: 1.839529130693336 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 567970.4912419921,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016472340848051815",
            "extra": "mean: 1.7606548498906704 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3373318.9705830542,
            "unit": "iter/sec",
            "range": "stddev: 9.932183523778897e-7",
            "extra": "mean: 296.4439499260152 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1133175.1646438877,
            "unit": "iter/sec",
            "range": "stddev: 7.755782758871548e-7",
            "extra": "mean: 882.476100077838 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2289947.7325955722,
            "unit": "iter/sec",
            "range": "stddev: 6.207554085869192e-7",
            "extra": "mean: 436.69118983189037 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 3649278.899949169,
            "unit": "iter/sec",
            "range": "stddev: 9.531292285785562e-7",
            "extra": "mean: 274.0267399167351 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1034260.2534583947,
            "unit": "iter/sec",
            "range": "stddev: 0.00000530341141368399",
            "extra": "mean: 966.8746301099418 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 590370.1384303375,
            "unit": "iter/sec",
            "range": "stddev: 0.00000546414819693229",
            "extra": "mean: 1.6938526102603646 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 726715.8146450825,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015662421345437088",
            "extra": "mean: 1.3760537198277234 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 6062316.368623746,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 164.95345000066663 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 3324249.0471587316,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 300.8198199995604 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 6518632.010335014,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 153.4064199995555 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 9728166.807836104,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 102.79428999865559 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 4224567.176207495,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 236.71063999927355 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 4283047.232197962,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 233.47863000026337 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 63633.94537229657,
            "unit": "iter/sec",
            "range": "stddev: 0.00007171554205688862",
            "extra": "mean: 15.71488290014713 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 10709.417025919225,
            "unit": "iter/sec",
            "range": "stddev: 0.00015973597682619026",
            "extra": "mean: 93.37576429975343 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 3.6734326297397843,
            "unit": "iter/sec",
            "range": "stddev: 0.2094734701476184",
            "extra": "mean: 272.2249461999354 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 1851622.867825557,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 540.0667799995063 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1543107.1694263571,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 648.0431299996781 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 5761823.059250292,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 173.5561800001051 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2115963.5633628536,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 472.5979299996652 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2093627.043249764,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 477.63998999926116 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 272727.4710745352,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.666663999999855 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 47026.3658210864,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 21.264666799993392 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 38243.04111172998,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 26.148548099990876 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 2.884706035725923,
            "unit": "iter/sec",
            "range": "stddev: 0.0015262610904696356",
            "extra": "mean: 346.65577275999794 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 8562104.92849787,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 116.7937099990013 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 3727926.6666122642,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 268.24562000001606 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 230154.03611295822,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.344916199988802 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_mean",
            "value": 117868.0794996405,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.484061199987991 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_std",
            "value": 39021.5811469114,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.626844699991125 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_mean",
            "value": 1576588.7170208048,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 634.280829999625 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_std",
            "value": 898478.4734261611,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.1129927199999656 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}