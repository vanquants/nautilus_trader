window.BENCHMARK_DATA = {
  "lastUpdate": 1632655001228,
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
      },
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
        "date": 1632654993587,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 2.5143546012795905,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 397.71637600006216 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 8.103902467466186,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 123.39733899989369 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 1.672379965383551,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 597.9502390000562 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 6608205.633676805,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 151.32700999856752 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 6612051.124507109,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 151.23899999707646 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 6691112.422628167,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 149.451980005324 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 9251940.802609492,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 108.08543000166537 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 167.4935544223936,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.9703790002458845 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 12994435.002860438,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 76.95602000239887 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 13680644.775718525,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 73.09596999220958 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 6068690.660035066,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 164.780189998055 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 11938144.65195269,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 83.76511000278697 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2877055.948444071,
            "unit": "iter/sec",
            "range": "stddev: 6.392186181784902e-7",
            "extra": "mean: 347.57752991936286 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 812857.156875504,
            "unit": "iter/sec",
            "range": "stddev: 0.000005393244966879422",
            "extra": "mean: 1.2302284497854998 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 623184.7678868859,
            "unit": "iter/sec",
            "range": "stddev: 0.000004510969397139604",
            "extra": "mean: 1.6046605301198724 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 616097.3243100017,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017992840207127157",
            "extra": "mean: 1.6231201801110728 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 4021261.373976548,
            "unit": "iter/sec",
            "range": "stddev: 3.024050473960657e-7",
            "extra": "mean: 248.67819000064625 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1276319.738052355,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021482285371676864",
            "extra": "mean: 783.5027306919073 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2505798.6641721344,
            "unit": "iter/sec",
            "range": "stddev: 4.968003169198159e-7",
            "extra": "mean: 399.0743607209879 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 4145864.7561348574,
            "unit": "iter/sec",
            "range": "stddev: 0.000003791517201784034",
            "extra": "mean: 241.20420197505155 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1230290.8633856848,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025568989600568724",
            "extra": "mean: 812.8159200077789 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 742112.3675444031,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013704468623348162",
            "extra": "mean: 1.347504830446269 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 764051.9070607906,
            "unit": "iter/sec",
            "range": "stddev: 0.000004442954548585601",
            "extra": "mean: 1.3088116013568651 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 7549634.125463172,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 132.45675000689516 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 3695224.1224118522,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 270.61957999649167 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 8900400.86499911,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 112.3544900019624 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 12641099.957574273,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 79.10704000096302 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 4843583.0250617815,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 206.45872999921266 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 5026928.249191915,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 198.92864000212285 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 42702.59551366552,
            "unit": "iter/sec",
            "range": "stddev: 0.00012898997568547976",
            "extra": "mean: 23.417780300496812 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 8333.681222892104,
            "unit": "iter/sec",
            "range": "stddev: 0.00013212695742776867",
            "extra": "mean: 119.99499059947993 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 3.131037674858617,
            "unit": "iter/sec",
            "range": "stddev: 0.2493249402118688",
            "extra": "mean: 319.3829342999379 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 2116611.1793782823,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 472.45332999409584 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1698266.7693116132,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 588.8356400009798 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 7462212.66076625,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 134.00851000369585 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2440854.316606707,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 409.6926199963491 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2458303.5458374377,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 406.7845900044631 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 297085.0063740206,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.3660399499967752 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 29182.07908450124,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 34.267606399953365 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 24594.54152091758,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 40.659428399976605 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 2.998560265966463,
            "unit": "iter/sec",
            "range": "stddev: 0.0023683329953457528",
            "extra": "mean: 333.4933805899982 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 12683265.256777935,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 78.84404999458638 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 4745615.999821705,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 210.72080000521964 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 202145.73656624692,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.946925999956875 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_mean",
            "value": 117276.6907561104,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.526843599975109 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_std",
            "value": 36074.97178561394,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 27.720049399977142 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_mean",
            "value": 1936408.7997360642,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 516.4198800048325 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_std",
            "value": 1068715.7852683873,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 935.7024699966132 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 89565.89375475737,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.164964230001715 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}