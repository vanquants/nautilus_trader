window.BENCHMARK_DATA = {
  "lastUpdate": 1630905657549,
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
          "id": "25b738dab34111f3059cd629655e444f85293d01",
          "message": "Rename UpdateOrder to ModifyOrder\n\n- Standardize terminology.\n- Standardize variable and method naming.\n- Update tests.",
          "timestamp": "2021-09-06T15:00:05+10:00",
          "tree_id": "4570b170d6a197ec9a3f4e08d5d56cdc18d7350c",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/25b738dab34111f3059cd629655e444f85293d01"
        },
        "date": 1630905643248,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 0.27187542269236753,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.6781552009999814 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 0.6728620643097032,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.486188704999904 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 0.2591777120255046,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.8583564620000743 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 6082547.838159881,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 164.40479000038977 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 5481251.406968719,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 182.44009000000005 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 6164139.698171731,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 162.2286399992845 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 7397232.650828246,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 135.18569000098068 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 160.9749933380226,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.212145000063174 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 9699471.57279737,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 103.098399999908 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 10017414.273084156,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 99.82615999888367 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 5135975.727808235,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 194.7049699992931 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 8853074.46465854,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 112.95511000071201 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2726597.3488824377,
            "unit": "iter/sec",
            "range": "stddev: 2.0565638560959812e-7",
            "extra": "mean: 366.7574900305226 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 810901.0598292366,
            "unit": "iter/sec",
            "range": "stddev: 4.02273005272433e-7",
            "extra": "mean: 1.233196069827045 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 586012.5348297252,
            "unit": "iter/sec",
            "range": "stddev: 3.6038865210600675e-7",
            "extra": "mean: 1.7064481398688258 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 592522.571377245,
            "unit": "iter/sec",
            "range": "stddev: 4.3153998252826914e-7",
            "extra": "mean: 1.687699419915134 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3557245.832186614,
            "unit": "iter/sec",
            "range": "stddev: 1.9203768213495524e-7",
            "extra": "mean: 281.116360008582 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1159979.6355667785,
            "unit": "iter/sec",
            "range": "stddev: 3.308414185898693e-7",
            "extra": "mean: 862.0840998742096 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2404187.6512465556,
            "unit": "iter/sec",
            "range": "stddev: 2.1267798304100676e-7",
            "extra": "mean: 415.94091022034263 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 4058199.6169604217,
            "unit": "iter/sec",
            "range": "stddev: 1.8963467495784696e-7",
            "extra": "mean: 246.41468985919343 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1288780.9826352333,
            "unit": "iter/sec",
            "range": "stddev: 2.4519387310428543e-7",
            "extra": "mean: 775.9270298629417 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 685296.5257533726,
            "unit": "iter/sec",
            "range": "stddev: 4.3893684573665924e-7",
            "extra": "mean: 1.4592223401405136 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 775219.9514533879,
            "unit": "iter/sec",
            "range": "stddev: 4.779055980597441e-7",
            "extra": "mean: 1.2899564802546593 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 6355332.486279349,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 157.3481799982801 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 3874146.9418943403,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 258.1213400003435 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 7190371.115259266,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 139.07487999858859 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 10156099.245468272,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 98.46299999935582 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 4608031.19013917,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 217.01241999835474 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 4853576.338321599,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 206.03363999953217 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_mean",
            "value": 145267.3544697559,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.883859100003065 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_std",
            "value": 48613.67956760891,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 20.570341699999517 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_mean",
            "value": 1974123.1931800044,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 506.55400000096046 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_std",
            "value": 1089331.4656250768,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 917.9942299988397 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 69619.94181357161,
            "unit": "iter/sec",
            "range": "stddev: 0.00006989141544803701",
            "extra": "mean: 14.363700600006268 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 14608.37917727253,
            "unit": "iter/sec",
            "range": "stddev: 0.00014373496830443993",
            "extra": "mean: 68.45386389995838 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 4.6513036732787985,
            "unit": "iter/sec",
            "range": "stddev: 0.17326008994241643",
            "extra": "mean: 214.99348789993746 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 1919798.313666906,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 520.8880500003943 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1624358.1470594956,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 615.6277800005228 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 6468054.69831903,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 154.6059899987995 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2235147.28424353,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 447.3978100008935 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2218101.1873726468,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 450.83606000162035 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 317770.94713591767,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.1469207899999674 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 59570.53090395177,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 16.78682369999933 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 52726.073228287765,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 18.96594869999717 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 2.8782267710998033,
            "unit": "iter/sec",
            "range": "stddev: 0.0017952097830929578",
            "extra": "mean: 347.4361402099976 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 9868212.97604726,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 101.33547000123144 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 4105057.956828172,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 243.60192000131065 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 251165.7923053607,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.9814338999804026 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 91396.83310009047,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.941298140000981 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}