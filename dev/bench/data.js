window.BENCHMARK_DATA = {
  "lastUpdate": 1629882486074,
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
          "id": "4b1e9dd0d1d386b0172f167cd5638dd7b0d6b735",
          "message": "Refine BarType definition using AggregationSource\n\n- Cleanup bar aggregation parsing.\n- Cleanup bar aggregation logic.\n- Cleanup examples.\n- Cleanup tests.",
          "timestamp": "2021-08-25T18:46:20+10:00",
          "tree_id": "a0820e9436f04d4f7f6fe059db8742fa0b0a780d",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/4b1e9dd0d1d386b0172f167cd5638dd7b0d6b735"
        },
        "date": 1629882478661,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 0.2707848292885063,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.6929690729998583 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 0.6653040835418266,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.5030720909999218 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 0.25900742695197343,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.8608931480000592 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 6245253.607190997,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 160.12160000173026 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 5641335.827683938,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 177.26298000070528 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 6227789.755515152,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 160.57061000083195 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 7390598.449272703,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 135.30704000004334 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 163.98719784397215,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.0980370001288975 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 9703997.979318375,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 103.05030999916198 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 9918246.866734408,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 100.82426999815652 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 5167655.807640888,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 193.51134000089587 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 8911820.388945742,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 112.21052000109921 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2612971.9733328675,
            "unit": "iter/sec",
            "range": "stddev: 7.577467464629482e-8",
            "extra": "mean: 382.70598008921297 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 795495.0790544908,
            "unit": "iter/sec",
            "range": "stddev: 1.898834536361672e-7",
            "extra": "mean: 1.257078800774707 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 618258.3870690349,
            "unit": "iter/sec",
            "range": "stddev: 2.333064663645267e-7",
            "extra": "mean: 1.6174467195514808 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 627139.4390902151,
            "unit": "iter/sec",
            "range": "stddev: 2.2146413589970454e-7",
            "extra": "mean: 1.5945417201805867 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3500196.9337592446,
            "unit": "iter/sec",
            "range": "stddev: 8.589835085067371e-8",
            "extra": "mean: 285.6982103935479 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1117982.5793775215,
            "unit": "iter/sec",
            "range": "stddev: 1.4034326075873076e-7",
            "extra": "mean: 894.4683203890236 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2402139.4223514623,
            "unit": "iter/sec",
            "range": "stddev: 1.0565653579081141e-7",
            "extra": "mean: 416.2955699803206 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 3970132.5364061585,
            "unit": "iter/sec",
            "range": "stddev: 2.723257432038872e-7",
            "extra": "mean: 251.88075985624894 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1191036.3040443615,
            "unit": "iter/sec",
            "range": "stddev: 2.2774863746860998e-7",
            "extra": "mean: 839.6049697262242 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 665592.8038222798,
            "unit": "iter/sec",
            "range": "stddev: 1.7596808470888906e-7",
            "extra": "mean: 1.5024200896664297 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 770156.1768829904,
            "unit": "iter/sec",
            "range": "stddev: 3.424481562959767e-7",
            "extra": "mean: 1.298437940272379 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 6410400.2334267255,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 155.9964999978547 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 3833696.397169191,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 260.8448599994517 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 7165061.66903059,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 139.56613999880574 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 10190853.281043168,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 98.12721000116653 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 4391124.097875739,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 227.7321200017468 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 4546716.259232352,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 219.93894999923214 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_mean",
            "value": 143130.37875017748,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.986636999999973 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_std",
            "value": 45930.3650378688,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 21.772089099999903 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_mean",
            "value": 1921396.8462864023,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 520.4546899994966 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_std",
            "value": 1071732.1472138304,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 933.0689600005826 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 56226.05342914682,
            "unit": "iter/sec",
            "range": "stddev: 0.00008953874990312152",
            "extra": "mean: 17.785349300038433 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 13600.604876557794,
            "unit": "iter/sec",
            "range": "stddev: 0.0001630178235551573",
            "extra": "mean: 73.52614160004123 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 3.935549402791039,
            "unit": "iter/sec",
            "range": "stddev: 0.21215667570958613",
            "extra": "mean: 254.09412960000282 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 1955292.3575608467,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 511.4324700002726 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1651253.3723144473,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 605.6005799996456 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 6428160.898598444,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 155.56549000166342 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2238408.30188102,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 446.7460199998641 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2234347.130369004,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 447.55802999816297 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 308169.37569479155,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.244968770000014 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 59535.33847125537,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 16.796746699992582 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 52060.473362575125,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 19.208430799994858 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 2.9244812581267126,
            "unit": "iter/sec",
            "range": "stddev: 0.0003641819863485525",
            "extra": "mean: 341.94098431000157 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 9641404.355400227,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 103.71932999987621 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 4152058.169003942,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 240.84441000013615 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 251241.16906175,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.980239399993479 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 87683.5544292282,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.404647159999968 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}