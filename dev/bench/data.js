window.BENCHMARK_DATA = {
  "lastUpdate": 1630797733748,
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
          "id": "a1b910f7d97864edc7f5c57fb96b8e6a35efd0e7",
          "message": "Remove CCXT integration\n\n- Update dependencies.\n- Temporary removal of live examples.\n- Update release notes.\n- Update `Makefile`.\n- Update nox extras.",
          "timestamp": "2021-09-05T08:59:16+10:00",
          "tree_id": "a5026dca7fe8b377a9feaed2864fec8259fb6b66",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/a1b910f7d97864edc7f5c57fb96b8e6a35efd0e7"
        },
        "date": 1630797720662,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 0.21656168065350095,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.617622087999962 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 0.5616625521130855,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.780428473000029 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 0.20368861405889202,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.909454583999832 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 4983420.161119924,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 200.66540000016175 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 4746855.64720525,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 210.66577000055986 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 5592509.929067346,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 178.81059000046662 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 6876190.61240548,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 145.42935999998008 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 165.95797081405192,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.025621999924624 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 9513219.95101666,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 105.11687999951391 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 9477604.846332235,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 105.51188999897931 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 4626567.313332376,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 216.14296999814542 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 7596945.572098268,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 131.63184999939403 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2108288.1730051627,
            "unit": "iter/sec",
            "range": "stddev: 0.0000037738512556595683",
            "extra": "mean: 474.3184602580186 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 696414.7809147446,
            "unit": "iter/sec",
            "range": "stddev: 0.00000415336660706629",
            "extra": "mean: 1.4359258697618316 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 536371.7865957293,
            "unit": "iter/sec",
            "range": "stddev: 0.000008775996811491692",
            "extra": "mean: 1.864378449781725 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 526983.5885273202,
            "unit": "iter/sec",
            "range": "stddev: 0.000016139113264803318",
            "extra": "mean: 1.8975923003495154 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3227106.3473059335,
            "unit": "iter/sec",
            "range": "stddev: 0.000002468974254563081",
            "extra": "mean: 309.87513034233416 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 981404.5715303142,
            "unit": "iter/sec",
            "range": "stddev: 0.000006527490536935569",
            "extra": "mean: 1.0189477703784178 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 1917204.2696787806,
            "unit": "iter/sec",
            "range": "stddev: 0.000004103215531371682",
            "extra": "mean: 521.5928296297534 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 2933813.2894900357,
            "unit": "iter/sec",
            "range": "stddev: 0.00000411836339357686",
            "extra": "mean: 340.85332000586277 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1146700.0422191557,
            "unit": "iter/sec",
            "range": "stddev: 0.000003988593837371225",
            "extra": "mean: 872.06764034363 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 659850.5252285182,
            "unit": "iter/sec",
            "range": "stddev: 0.000003120215100130624",
            "extra": "mean: 1.5154947397422802 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 673727.7286988673,
            "unit": "iter/sec",
            "range": "stddev: 0.00000589924758727857",
            "extra": "mean: 1.4842791195951577 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 5859387.931833251,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 170.666290000554 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 3613419.0821809284,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 276.74619999970673 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 6347722.795715976,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 157.53680999978315 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 9554397.244154824,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 104.66384999972433 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 4226851.394739897,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 236.58271999920544 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 4284791.219258423,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 233.38360000025204 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_mean",
            "value": 102359.80184815043,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.769460100005745 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_std",
            "value": 38388.59997392517,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 26.049400100009734 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_mean",
            "value": 1831383.9990453247,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 546.035130000746 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_std",
            "value": 1042816.6544578144,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 958.9413399999103 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 58090.98601745831,
            "unit": "iter/sec",
            "range": "stddev: 0.00007485360761279523",
            "extra": "mean: 17.21437470005185 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 9315.238113166975,
            "unit": "iter/sec",
            "range": "stddev: 0.00018401153386542654",
            "extra": "mean: 107.35098640006981 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 3.2425498914286743,
            "unit": "iter/sec",
            "range": "stddev: 0.22968537650076995",
            "extra": "mean: 308.39926400003606 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 1825730.250110377,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 547.7260399993611 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1459783.5613967208,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 685.0330599991139 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 5846952.73779235,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 171.02926000006846 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 1755815.7842327289,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 569.5358299999498 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2125126.5592608247,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 470.5602099988937 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 249155.7475841901,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.013553810000303 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 38026.83050714936,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 26.297221899994838 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 30378.909361956743,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 32.91757410001992 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 2.729304498656775,
            "unit": "iter/sec",
            "range": "stddev: 0.004720703528711928",
            "extra": "mean: 366.3937096400014 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 9155833.103489725,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 109.21998999947391 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 3785460.394872629,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 264.1686600009052 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 210179.24127699633,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.757843800007322 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 75969.20160858706,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 13.163229029999002 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}