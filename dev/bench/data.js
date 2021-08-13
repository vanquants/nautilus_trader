window.BENCHMARK_DATA = {
  "lastUpdate": 1628837961609,
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
          "id": "81b7bcd5b68c61540fc2d2217a19be7a16531bcf",
          "message": "Extract accounting subpackage",
          "timestamp": "2021-08-13T16:38:00+10:00",
          "tree_id": "b8cf9bf88dfa6f41389ceb0547cd5cfc6030076b",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/81b7bcd5b68c61540fc2d2217a19be7a16531bcf"
        },
        "date": 1628837953748,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 0.22906900346449668,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.365496793000148 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 0.29410058861918076,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.4001972070000193 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 0.08994240583463357,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.118226054999923 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 6050931.904037435,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 165.26379999959318 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 5642044.652092498,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 177.24071000202457 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 5975044.152569822,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 167.36278000053062 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 6810646.920935293,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 146.8289299987191 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 155.65042968467085,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.424652999839964 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 10008079.522497445,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 99.91927000100986 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 10258694.52555437,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 97.478290001618 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 4416622.666067407,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 226.41734999979235 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 9111185.620277878,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 109.75520000101824 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2727566.4633550704,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011844404275169491",
            "extra": "mean: 366.6271797351328 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 776930.3156374209,
            "unit": "iter/sec",
            "range": "stddev: 0.000002388205713262858",
            "extra": "mean: 1.2871167206026257 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 583931.8331793466,
            "unit": "iter/sec",
            "range": "stddev: 0.00000290692958338461",
            "extra": "mean: 1.712528660332282 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 555606.7269320593,
            "unit": "iter/sec",
            "range": "stddev: 0.000008441496227564349",
            "extra": "mean: 1.7998342200098705 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3123744.8407282587,
            "unit": "iter/sec",
            "range": "stddev: 8.085067701299348e-7",
            "extra": "mean: 320.12857995368904 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1009585.0817890008,
            "unit": "iter/sec",
            "range": "stddev: 0.000030174423808459646",
            "extra": "mean: 990.5059197467382 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2323901.809330331,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013525379945214288",
            "extra": "mean: 430.3107799069039 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 3636879.4088906646,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010459153025850288",
            "extra": "mean: 274.9610002342706 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1292849.2928602307,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014071770991139097",
            "extra": "mean: 773.4853594479318 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 622446.8981503212,
            "unit": "iter/sec",
            "range": "stddev: 0.000012453046867734544",
            "extra": "mean: 1.606562749323075 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 741446.9056867204,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023954408757340118",
            "extra": "mean: 1.3487142401299934 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 6602711.9186858395,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 151.45291999942856 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 3591798.946038108,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 278.41201999990517 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 6454073.779120913,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 154.9408999994739 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 9790266.06711822,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 102.14227000005849 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 4196191.94742384,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 238.3113099995171 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 4228467.30195365,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 236.49231000035797 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_mean",
            "value": 134802.0084044333,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.418287099994814 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_std",
            "value": 35329.58626564108,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 28.304888499997105 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_mean",
            "value": 1878508.5491216579,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 532.3372099996959 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_std",
            "value": 1003689.6534971824,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 996.3239100011377 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 46049.51523881133,
            "unit": "iter/sec",
            "range": "stddev: 0.00012131166171461204",
            "extra": "mean: 21.715755199898013 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 10693.16588295581,
            "unit": "iter/sec",
            "range": "stddev: 0.00016464362711116683",
            "extra": "mean: 93.51767389991892 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 3.7071133445436883,
            "unit": "iter/sec",
            "range": "stddev: 0.23643977102823774",
            "extra": "mean: 269.7516657999813 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 1918614.9994139296,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 521.2093099999038 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1469412.3380709044,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 680.5441699998482 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 5684410.0790406475,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 175.91974999959348 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2147191.248391977,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 465.72470000000976 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2173815.0800312757,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 460.0207299995418 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 287475.9928078428,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.478551340001559 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 47068.836676851846,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 21.245479399999567 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 41026.73978484959,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 24.374347200000557 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.0038009929552136,
            "unit": "iter/sec",
            "range": "stddev: 0.003983231995982031",
            "extra": "mean: 332.9115351999985 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 9430368.93783608,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 106.040389998725 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 3914637.1100159055,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 255.4515199994967 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 229911.7536614433,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.349494899997808 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 83562.72003301204,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.967058990001078 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}