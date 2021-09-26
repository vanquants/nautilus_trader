window.BENCHMARK_DATA = {
  "lastUpdate": 1632654917467,
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
          "id": "6d288b3739fc8bca63fe5170d4dc4cd6d381115f",
          "message": "Release 1.130.0\n\nSee release notes.",
          "timestamp": "2021-09-26T20:05:04+10:00",
          "tree_id": "f83646e0bd5f0b57207290b07b415a748fd0938f",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/6d288b3739fc8bca63fe5170d4dc4cd6d381115f"
        },
        "date": 1632654910096,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 2.4938981046898094,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 400.9786920000806 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 8.148189227095777,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 122.72665399996185 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 1.6824825777458439,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 594.3597949999457 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 6591136.200431514,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 151.71891000136384 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 6036490.099827717,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 165.65917999741941 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 6841498.890300751,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 146.16680000017368 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 7648504.70601024,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 130.74450999738474 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 183.20370145096197,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.458404999899358 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 11201129.61147181,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 89.27671000037662 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 11671384.240010738,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 85.6796400012172 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 5101890.883232076,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 196.00575999902503 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 10082993.116042636,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 99.17690000293078 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2886869.697844455,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012601292101220567",
            "extra": "mean: 346.3959598684596 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 930554.0274801058,
            "unit": "iter/sec",
            "range": "stddev: 0.0000037828017068628094",
            "extra": "mean: 1.0746286303310626 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 599574.9639614895,
            "unit": "iter/sec",
            "range": "stddev: 0.0000036738403825655013",
            "extra": "mean: 1.6678481592907701 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 584117.4038702026,
            "unit": "iter/sec",
            "range": "stddev: 0.000004428682629724022",
            "extra": "mean: 1.7119845999695826 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3241121.901317073,
            "unit": "iter/sec",
            "range": "stddev: 0.000001423940679584758",
            "extra": "mean: 308.5351401296066 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1105526.7760135538,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015550480860527957",
            "extra": "mean: 904.5461599816917 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2045191.7038787901,
            "unit": "iter/sec",
            "range": "stddev: 0.000005507106586437259",
            "extra": "mean: 488.95171934418613 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 3658058.718522999,
            "unit": "iter/sec",
            "range": "stddev: 0.000001549655069723411",
            "extra": "mean: 273.3690399600164 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1026882.6049342776,
            "unit": "iter/sec",
            "range": "stddev: 0.000005572124520549609",
            "extra": "mean: 973.8211507283268 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 602212.9505829148,
            "unit": "iter/sec",
            "range": "stddev: 0.000005471287754027036",
            "extra": "mean: 1.6605421703934553 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 699326.4862964491,
            "unit": "iter/sec",
            "range": "stddev: 0.000010071236541615704",
            "extra": "mean: 1.429947270116827 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 5602792.700776157,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 178.48242000127357 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 3427961.055657828,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 291.7185999967842 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 6312571.789830404,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 158.41403999729664 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 9810562.935028732,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 101.93094999976893 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 3929552.8625133624,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 254.4818799970017 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 3741813.100021826,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 267.25012000042625 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 71933.20081563735,
            "unit": "iter/sec",
            "range": "stddev: 0.000060552091730996834",
            "extra": "mean: 13.901786499991431 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 8425.801186065804,
            "unit": "iter/sec",
            "range": "stddev: 0.00018401136101995737",
            "extra": "mean: 118.68307570011893 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 3.359566377489113,
            "unit": "iter/sec",
            "range": "stddev: 0.21318779268019294",
            "extra": "mean: 297.65746159996525 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 1842787.7929712008,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 542.6560799969593 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1678404.1102672098,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 595.8040699988487 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 5638876.217031325,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 177.34030000156054 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2299024.560662215,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 434.9670800002059 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 1985946.0160954576,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 503.53836000340374 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 304665.4331779892,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.2822889999988547 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 33183.520798099475,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 30.135440000003655 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 28308.78251810896,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 35.32472649999363 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.0658908635373607,
            "unit": "iter/sec",
            "range": "stddev: 0.00880905949000693",
            "extra": "mean: 326.16947064000215 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 10941055.501181133,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 91.39885999957187 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 4021240.514084236,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 248.67948000064644 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 193178.17918699599,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.17656810002336 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_mean",
            "value": 135112.09669704706,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.401261799986969 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_std",
            "value": 38831.27914830858,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.752435200001855 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_mean",
            "value": 1907137.2896608952,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 524.346100000912 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_std",
            "value": 1074810.913082664,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 930.3962100011631 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 86118.60916417665,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.611892129999433 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}