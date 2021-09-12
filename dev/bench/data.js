window.BENCHMARK_DATA = {
  "lastUpdate": 1631412570916,
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
          "id": "7d001b4c6f74d7baf1efc669d2e1a5c0a14f7518",
          "message": "Refactor `Order` and `SimulatedExchange`\n\n- Now allows correct behavior for `reduce_only` market orders.\n- Market orders can now be updated (for quantity changes by venue).",
          "timestamp": "2021-09-12T11:49:46+10:00",
          "tree_id": "902f9f46ab2acf58c61bf5a01b5672cd4fc009a0",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/7d001b4c6f74d7baf1efc669d2e1a5c0a14f7518"
        },
        "date": 1631412567256,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 2240459.261885408,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 446.3370600001326 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1722725.3259697105,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 580.4755899998781 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 6600899.2668801155,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 151.49451000070258 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2235310.6615702296,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 447.36511000110113 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2108420.81768422,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 474.2886200006069 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 322485.555613911,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.1009140800006207 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 69459.59869588938,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 14.396858300005988 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 58020.56708422178,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 17.235267599994586 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.101820655573462,
            "unit": "iter/sec",
            "range": "stddev: 0.0035742824669532484",
            "extra": "mean: 322.3913020900045 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 10150058.464298896,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 98.52160000036747 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 4857488.571565249,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 205.86769999908938 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 218155.7743492912,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.5838804999903005 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_mean",
            "value": 148675.62282628016,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.726052200019694 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_std",
            "value": 46231.296164032654,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 21.630369100012103 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_mean",
            "value": 2128399.0799290705,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 469.8367000014514 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_std",
            "value": 1064266.3742097782,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 939.6143899994058 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 97513.85767481674,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.254952719999437 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 0.2920554225035733,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.4240076469998257 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 0.7189698242598463,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.3908789580000303 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 0.2776408702111415,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.6017751970000518 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 6174015.999248017,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 161.96912999930646 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 5375173.974215305,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 186.0404900003232 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 5906062.307234514,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 169.3175499985955 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 7096126.614716124,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 140.92195000102947 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 189.64187459118529,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.273097000099369 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 10129499.57432913,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 98.72156000028554 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 9698962.628097605,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 103.1038099995385 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 5270878.622229819,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 189.72169000107897 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 8793650.913669907,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 113.71841000027416 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2810858.696833703,
            "unit": "iter/sec",
            "range": "stddev: 4.965330511618229e-7",
            "extra": "mean: 355.76316985498124 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 920434.816659926,
            "unit": "iter/sec",
            "range": "stddev: 0.000001744779177591029",
            "extra": "mean: 1.0864430396372882 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 617785.4208878996,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016635046911457132",
            "extra": "mean: 1.618685009696037 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 655463.961780178,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011653361904028676",
            "extra": "mean: 1.5256368897598804 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3635808.74114154,
            "unit": "iter/sec",
            "range": "stddev: 4.4291108662389065e-7",
            "extra": "mean: 275.0419703556872 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1268043.8040054368,
            "unit": "iter/sec",
            "range": "stddev: 8.895736420315804e-7",
            "extra": "mean: 788.6162897852955 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2455033.422659143,
            "unit": "iter/sec",
            "range": "stddev: 6.633624673298868e-7",
            "extra": "mean: 407.3264301700874 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 4088440.160478332,
            "unit": "iter/sec",
            "range": "stddev: 4.3312986592855013e-7",
            "extra": "mean: 244.59205974608267 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1324187.1364218616,
            "unit": "iter/sec",
            "range": "stddev: 9.162874668016654e-7",
            "extra": "mean: 755.1802705938826 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 730202.3256729229,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011141465002983802",
            "extra": "mean: 1.3694834497800912 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 827716.7164814413,
            "unit": "iter/sec",
            "range": "stddev: 9.506197981115442e-7",
            "extra": "mean: 1.208142810321533 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 7357612.719594694,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 135.91364999911093 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 3925349.8939013453,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 254.75436000078844 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 7827102.437908702,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 127.76120000125958 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 10223431.040739665,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 97.81451999970159 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 4778429.252920036,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 209.2737899988606 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 5506176.470852097,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 181.61423000037757 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 79179.31338446855,
            "unit": "iter/sec",
            "range": "stddev: 0.00005752894926296907",
            "extra": "mean: 12.62956140001279 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 15352.677021635434,
            "unit": "iter/sec",
            "range": "stddev: 0.00013551716561079543",
            "extra": "mean: 65.13522030006698 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 4.4428413981572765,
            "unit": "iter/sec",
            "range": "stddev: 0.18743437899274307",
            "extra": "mean: 225.08118349999222 msec\nrounds: 10"
          }
        ]
      }
    ]
  }
}