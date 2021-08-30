window.BENCHMARK_DATA = {
  "lastUpdate": 1630299259820,
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
          "id": "388119b7e69f8c69c487f03ec865c4a221e03abf",
          "message": "Merge remote-tracking branch 'origin/develop' into develop",
          "timestamp": "2021-08-30T14:12:26+10:00",
          "tree_id": "199459fdb33cfcc7fa5deeca231c48c603bb0a48",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/388119b7e69f8c69c487f03ec865c4a221e03abf"
        },
        "date": 1630299250495,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 0.254690291987404,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.9263373260000662 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 0.614120801636987,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.6283441260000018 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 0.21904466442715506,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.5652789700000085 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 6100684.600570518,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 163.91602999874522 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 5729473.730624779,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 174.5361000007506 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 6083648.70972099,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 164.37503999895853 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 7588472.291020079,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 131.77883000025759 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 166.89369772681005,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.991837999999916 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 10175360.121354101,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 98.27661999906923 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 9639794.614453893,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 103.73665000088295 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 4325082.733455152,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 231.2094499984596 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 8823110.832980603,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 113.33871000033469 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2624283.371672435,
            "unit": "iter/sec",
            "range": "stddev: 7.34175591205536e-7",
            "extra": "mean: 381.05640983530975 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 841375.7991340465,
            "unit": "iter/sec",
            "range": "stddev: 0.000004549977178516351",
            "extra": "mean: 1.188529550088333 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 638427.0789808632,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021172480751179674",
            "extra": "mean: 1.5663496003276123 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 660821.5065762382,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017295100401627778",
            "extra": "mean: 1.5132679400539928 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3586996.39320637,
            "unit": "iter/sec",
            "range": "stddev: 5.866453576850868e-7",
            "extra": "mean: 278.7847799049814 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1190986.1735874629,
            "unit": "iter/sec",
            "range": "stddev: 6.953885568529792e-7",
            "extra": "mean: 839.6403100027783 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2485649.975394298,
            "unit": "iter/sec",
            "range": "stddev: 7.793399774432795e-7",
            "extra": "mean: 402.3092591069144 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 4243823.430552752,
            "unit": "iter/sec",
            "range": "stddev: 5.53445901392536e-7",
            "extra": "mean: 235.6365707396435 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1265115.05721571,
            "unit": "iter/sec",
            "range": "stddev: 0.000021437131592282327",
            "extra": "mean: 790.4419398823848 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 686927.7611549312,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014986192968627226",
            "extra": "mean: 1.4557571502405153 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 722789.5499228861,
            "unit": "iter/sec",
            "range": "stddev: 0.000004514008133705318",
            "extra": "mean: 1.3835285804930209 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 6135909.662703865,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 162.97502000043096 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 3774900.137874563,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 264.90766999813786 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 7059958.604680636,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 141.643889999159 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 9774250.01211587,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 102.30963999902087 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 4507440.635087096,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 221.8553900002007 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 4648582.286988002,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 215.1193500003501 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_mean",
            "value": 120360.22901806822,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.308392300000378 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_std",
            "value": 36674.487317732026,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 27.266911499987145 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_mean",
            "value": 1884757.128504409,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 530.5723399987983 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_std",
            "value": 1087572.6789483733,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 919.478779999281 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 78418.26962506027,
            "unit": "iter/sec",
            "range": "stddev: 0.000054347649243469174",
            "extra": "mean: 12.752130399985617 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 10579.108391154597,
            "unit": "iter/sec",
            "range": "stddev: 0.0001572764156963343",
            "extra": "mean: 94.52592439984073 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 3.5109168129641897,
            "unit": "iter/sec",
            "range": "stddev: 0.22720822883875985",
            "extra": "mean: 284.82588830001987 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 1907776.8462741575,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 524.1703199999392 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1526831.4518854092,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 654.9511399998664 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 6327311.841540732,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 158.04500000058397 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2223967.542529676,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 449.64684999968085 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2262096.4476506338,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 442.06779999967694 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 295945.162403216,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.37900437999906 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 45478.71304939606,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 21.988309099992875 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 41362.184118571306,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 24.176672999988114 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.0782153377682655,
            "unit": "iter/sec",
            "range": "stddev: 0.003965833342503968",
            "extra": "mean: 324.86356225000463 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 9864594.62836945,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 101.37263999922652 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 4162512.479193895,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 240.23952000106874 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 256628.41029976794,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.896684699998332 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 91652.80215633415,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.910741150000831 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}