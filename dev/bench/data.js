window.BENCHMARK_DATA = {
  "lastUpdate": 1631322017753,
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
          "id": "e85bb9635851e1695626abbdf0d79c54118f928e",
          "message": "Improve `OrderBook` integrity\n\n- Add improved integrity checks.\n- Add `BookIntegrityError`.\n- Update tests.\n- Update release notes.",
          "timestamp": "2021-09-11T10:41:18+10:00",
          "tree_id": "216cb5d4762d5febf86bb18996046fc4f28c2062",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/e85bb9635851e1695626abbdf0d79c54118f928e"
        },
        "date": 1631321996820,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.354001396289978,
            "unit": "iter/sec",
            "range": "stddev: 0.004581794704211038",
            "extra": "mean: 298.15133681999896 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 10838886.456242766,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 92.26039999930435 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 4578585.816775108,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 218.40805000010732 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 254372.34260459608,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.931244999989758 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_mean",
            "value": 136019.42498879135,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.351891099983732 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_std",
            "value": 41856.79908366874,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 23.89098119999744 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_mean",
            "value": 2010218.5439308104,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 497.45834999839644 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_std",
            "value": 1042224.2675065994,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 959.4863899997108 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 98251.79037014817,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.177931580001314 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 0.27409401204406586,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.6483832409999195 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 0.6896881290421426,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.4499307119999685 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 0.2535940894304123,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.9433095710001 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 6471828.3899138775,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 154.51583999947616 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 6561130.44608962,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 152.41275999869686 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 6820605.458268631,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 146.6145500012317 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 7758983.020847248,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 128.8828699989608 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 195.29369535127574,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.120493000049464 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 10907687.585404914,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 91.67846000082136 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 10522152.340013392,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 95.03758999926504 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 5532018.966183406,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 180.76583000038227 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 9798651.431292674,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 102.0548599990434 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2959441.009579296,
            "unit": "iter/sec",
            "range": "stddev: 9.721592291341277e-7",
            "extra": "mean: 337.9016499275167 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 889100.2734581089,
            "unit": "iter/sec",
            "range": "stddev: 0.000001529128309231633",
            "extra": "mean: 1.1247325300109878 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 699096.8953824912,
            "unit": "iter/sec",
            "range": "stddev: 0.000002147338783408331",
            "extra": "mean: 1.4304168801277228 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 716135.5588669837,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025076598702468585",
            "extra": "mean: 1.3963836701282162 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3833398.5132946554,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011780982918158224",
            "extra": "mean: 260.86512960546315 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1276361.4432342164,
            "unit": "iter/sec",
            "range": "stddev: 0.0000033398258843554045",
            "extra": "mean: 783.4771296961662 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2640602.2990020923,
            "unit": "iter/sec",
            "range": "stddev: 0.000001298899406210047",
            "extra": "mean: 378.70148048341434 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 4290696.586642914,
            "unit": "iter/sec",
            "range": "stddev: 8.733135342799858e-7",
            "extra": "mean: 233.06238970917548 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1422846.6668956808,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013445906517249493",
            "extra": "mean: 702.8164195526188 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 746008.9676930245,
            "unit": "iter/sec",
            "range": "stddev: 0.000005167135070942798",
            "extra": "mean: 1.340466459930667 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 837514.9476242979,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022023534220029702",
            "extra": "mean: 1.1940085401897704 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 6722839.5768645415,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 148.74666999958208 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 4072865.850871695,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 245.52736000032385 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 7037574.029981994,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 142.09442000037598 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 11229469.721950017,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 89.05140000024403 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 4941646.322356871,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 202.3617099985131 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 4939913.119765493,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 202.43271000026652 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 89915.32790369034,
            "unit": "iter/sec",
            "range": "stddev: 0.00004720519484403872",
            "extra": "mean: 11.121574300113933 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 11969.984898963085,
            "unit": "iter/sec",
            "range": "stddev: 0.00015224590541622004",
            "extra": "mean: 83.54229420010597 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 4.173403872529344,
            "unit": "iter/sec",
            "range": "stddev: 0.183132646368269",
            "extra": "mean: 239.6125633999418 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 2022719.8364812462,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 494.3838399981359 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1795960.1743643144,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 556.8052200010243 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 6769948.092105416,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 147.7116199998818 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2390983.4674469964,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 418.23794000038106 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2296930.7102613547,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 435.36358999972435 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 318373.21982024447,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.1409676999987823 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 55851.37453277357,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 17.904662299997653 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 47067.440304150885,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 21.24610969999594 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}