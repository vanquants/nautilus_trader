window.BENCHMARK_DATA = {
  "lastUpdate": 1631312375349,
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
          "id": "2e04392a929341de958865c8863878666bfc8fc9",
          "message": "Refactor indicators to allow pure Python (#434)\n\n- Refactor `Indicator` base for generality to pure Python.\n- Refactor count increments for moving averages.\n- Add pure Python EMA cross example.\n- Add `indicators.py` to `test_kit`.\n- Add tests.",
          "timestamp": "2021-09-11T07:58:52+10:00",
          "tree_id": "da0ace1c1fc1c17a5f9faf28f8bafaa2eefc8fbb",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/2e04392a929341de958865c8863878666bfc8fc9"
        },
        "date": 1631312354531,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 0.2686716902691565,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.722014771999966 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 0.655870893588058,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.524690316000033 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 0.25553483384121756,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.913360793000038 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 6081421.846192247,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 164.43522999907145 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 5362634.194507764,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 186.47552000174983 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 6156756.310491345,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 162.42318999957206 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 7290124.957171987,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 137.17185999894355 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 156.75735497467522,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.379286000083084 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 9709926.622995628,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 102.98739000063506 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 9935976.541563446,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 100.64435999993293 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 5145127.8494477505,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 194.3586300012612 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 8931242.029351983,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 111.96651000091151 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2425968.596934192,
            "unit": "iter/sec",
            "range": "stddev: 8.813667142288086e-8",
            "extra": "mean: 412.20648992066344 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 807352.0187719879,
            "unit": "iter/sec",
            "range": "stddev: 1.6954386359602218e-7",
            "extra": "mean: 1.2386170799709362 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 617965.5398520029,
            "unit": "iter/sec",
            "range": "stddev: 1.7590596527255945e-7",
            "extra": "mean: 1.6182132101403113 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 631348.473347072,
            "unit": "iter/sec",
            "range": "stddev: 2.3146223891607985e-7",
            "extra": "mean: 1.5839113298216034 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3548541.9935287195,
            "unit": "iter/sec",
            "range": "stddev: 6.092711262137001e-8",
            "extra": "mean: 281.8058802245105 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1156288.3099953635,
            "unit": "iter/sec",
            "range": "stddev: 1.252367111219497e-7",
            "extra": "mean: 864.8362102735518 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2338210.12103846,
            "unit": "iter/sec",
            "range": "stddev: 1.125982459686821e-7",
            "extra": "mean: 427.6775602852467 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 3859164.2754442235,
            "unit": "iter/sec",
            "range": "stddev: 6.06837766057895e-8",
            "extra": "mean: 259.12346006180087 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1215404.4839720652,
            "unit": "iter/sec",
            "range": "stddev: 2.222312498208763e-7",
            "extra": "mean: 822.7713598125774 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 672191.5431833965,
            "unit": "iter/sec",
            "range": "stddev: 1.90038980215299e-7",
            "extra": "mean: 1.487671200479781 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 771477.1504651215,
            "unit": "iter/sec",
            "range": "stddev: 3.0977779196195276e-7",
            "extra": "mean: 1.296214669996516 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 5742131.772174179,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 174.1513499996472 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 3814005.5930036963,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 262.1915400004582 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 7181592.601384876,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 139.24488000156998 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 10019905.544365922,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 99.80133999988539 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 4509298.172871528,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 221.76399999807472 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 4618107.238243154,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 216.5389300012066 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 71524.16756590841,
            "unit": "iter/sec",
            "range": "stddev: 0.00006238781447904585",
            "extra": "mean: 13.981288199943263 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 14446.401235129306,
            "unit": "iter/sec",
            "range": "stddev: 0.00015194990467372804",
            "extra": "mean: 69.22139180021532 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 4.623304471798706,
            "unit": "iter/sec",
            "range": "stddev: 0.17510268200434043",
            "extra": "mean: 216.29551030000584 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 1866388.2164760516,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 535.7942099999491 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1634365.5294146447,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 611.8582299995978 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 6430947.158237348,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 155.49809000049208 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2239029.823007162,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 446.6220099993734 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2233942.876555907,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 447.63902000113376 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 309489.9711431328,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.2311224699992636 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 64719.18903695872,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 15.4513679000047 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 56561.988789205316,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 17.679717800001526 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 2.8993549093805773,
            "unit": "iter/sec",
            "range": "stddev: 0.0003721510440916417",
            "extra": "mean: 344.90430845999526 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 9615994.861166991,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 103.99340000049051 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 4086665.2562132073,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 244.69829000054233 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 222247.38556476872,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.4994905000066865 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_mean",
            "value": 139154.31221052958,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.186266700000488 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_std",
            "value": 45150.502381967075,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 22.148147799998696 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_mean",
            "value": 1843877.7974438833,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 542.3352899993006 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_std",
            "value": 1075730.9188208845,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 929.6004999987417 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 87851.93131176637,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.382789030001277 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}