window.BENCHMARK_DATA = {
  "lastUpdate": 1632432709230,
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
          "id": "1ccae86217a8097b7d430b3bb343008a6af9c883",
          "message": "Refine exchange message processing\n\n- Add message queue to `SimulatedExchange`.\n- Fix event ordering in main backtest loop.",
          "timestamp": "2021-09-24T07:15:42+10:00",
          "tree_id": "78e0f00f0051109604c5b28bd8b4ba4600b6a52c",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/1ccae86217a8097b7d430b3bb343008a6af9c883"
        },
        "date": 1632432702960,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 3.636436523778679,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 274.99448799972015 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 3.748629501053102,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 266.7641600000934 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 2.5133262590299443,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 397.87910399900284 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 7824320.837033817,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 127.80662000295708 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 8006887.845588592,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 124.89246999393798 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 7402746.966080944,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 135.08499001545715 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 9191376.687116968,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 108.79763000048115 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 212.0016688594882,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.716944000392687 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 14347900.133019116,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 69.69661000766791 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 13446670.840883335,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 74.36784999299562 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 6632979.9717576355,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 150.76180001415196 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 12606509.243952433,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 79.32410000648815 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 3532681.113203952,
            "unit": "iter/sec",
            "range": "stddev: 1.721512185477579e-7",
            "extra": "mean: 283.071120193199 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 1148474.6542188518,
            "unit": "iter/sec",
            "range": "stddev: 3.580397744113567e-7",
            "extra": "mean: 870.7201298057043 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 831222.7055300701,
            "unit": "iter/sec",
            "range": "stddev: 4.970961963008297e-7",
            "extra": "mean: 1.2030470213903754 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 853810.3214908281,
            "unit": "iter/sec",
            "range": "stddev: 4.308925084733835e-7",
            "extra": "mean: 1.1712203223942197 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 4598213.242408867,
            "unit": "iter/sec",
            "range": "stddev: 1.7987547789085163e-7",
            "extra": "mean: 217.4757774992031 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1445316.969986199,
            "unit": "iter/sec",
            "range": "stddev: 2.473498984713386e-7",
            "extra": "mean: 691.889752051793 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 3031707.669536808,
            "unit": "iter/sec",
            "range": "stddev: 1.8494936893787054e-7",
            "extra": "mean: 329.84710565870046 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 5476205.9731466025,
            "unit": "iter/sec",
            "range": "stddev: 1.558884770283257e-7",
            "extra": "mean: 182.6081788931333 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1755185.037521223,
            "unit": "iter/sec",
            "range": "stddev: 2.4831123373729205e-7",
            "extra": "mean: 569.7404995044053 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 910832.1298665083,
            "unit": "iter/sec",
            "range": "stddev: 3.978669040652261e-7",
            "extra": "mean: 1.097897150539211 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 1017491.0581020525,
            "unit": "iter/sec",
            "range": "stddev: 4.7249073445838774e-7",
            "extra": "mean: 982.809619836189 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 7829406.0117410505,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 127.7236100031587 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 4887523.42330831,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 204.6026000061829 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 9227508.9385938,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 108.37161000381457 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 12481410.498179233,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 80.11915000679437 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 5829038.497821217,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 171.554879998439 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 5644896.071376798,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 177.1511799961445 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 74786.41523816994,
            "unit": "iter/sec",
            "range": "stddev: 0.0000707766751460049",
            "extra": "mean: 13.371412399101246 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 20141.128768604154,
            "unit": "iter/sec",
            "range": "stddev: 0.00012011512323876918",
            "extra": "mean: 49.64965029957966 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 5.539247493938825,
            "unit": "iter/sec",
            "range": "stddev: 0.1524032282375577",
            "extra": "mean: 180.5299367999396 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 2623460.304319059,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 381.1759599921061 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 2184040.4867356988,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 457.8669699913007 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 8572204.968345376,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 116.65609999909066 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 3063452.369854739,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 326.42910000504344 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2832793.138592871,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 353.0084799967881 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 378123.22981442243,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.6446404800117307 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 70465.09662649009,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 14.191423099873646 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 64376.81179708791,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 15.533543399942571 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.8028245972545034,
            "unit": "iter/sec",
            "range": "stddev: 0.002964894771939816",
            "extra": "mean: 262.9624307999802 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 12971332.835743088,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 77.09307999903103 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 5742960.809730128,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 174.12621000403306 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 298992.3747695778,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.344566899977508 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_mean",
            "value": 183406.8721528574,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.452358399998047 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_std",
            "value": 63207.02229478209,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 15.82102690008469 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_mean",
            "value": 2513377.1355773713,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 397.87105000868905 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_std",
            "value": 1385401.9476374483,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 721.8121799996879 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 121782.7525296967,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.211343389994 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}