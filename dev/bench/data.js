window.BENCHMARK_DATA = {
  "lastUpdate": 1632523090468,
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
          "id": "9e46eb5af13df11e7d12452fb3c265f3090b6b95",
          "message": "Refine `BacktestEngine` runs",
          "timestamp": "2021-09-25T08:19:10+10:00",
          "tree_id": "aa3c72269957ab541ec843332a91c4a8fcc992f5",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/9e46eb5af13df11e7d12452fb3c265f3090b6b95"
        },
        "date": 1632523083277,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 2.5853499711593013,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 386.79482900010953 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 8.459912375279274,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 118.20453399991493 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 1.8838377883270276,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 530.8312669999395 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 6213031.298798815,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 160.95203000077163 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 6314046.530995939,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 158.37703999977748 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 6809317.32507284,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 146.8576000002031 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 7993555.914889846,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 125.10077000115415 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 167.61292543820224,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.966126999965127 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 10794060.76244666,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 92.64353999924424 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 11376260.133977681,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 87.90235000105895 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 5640102.255054851,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 177.30174999996962 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 10122608.065784657,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 98.78876999891872 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2713671.3628504,
            "unit": "iter/sec",
            "range": "stddev: 3.006071176201828e-7",
            "extra": "mean: 368.50445993195535 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 844062.7638721187,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014395719565374094",
            "extra": "mean: 1.184746019848717 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 682241.061079565,
            "unit": "iter/sec",
            "range": "stddev: 4.804124318438182e-7",
            "extra": "mean: 1.4657575702312897 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 714673.9965657123,
            "unit": "iter/sec",
            "range": "stddev: 6.07184005186311e-7",
            "extra": "mean: 1.39923938020047 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 4004092.667170128,
            "unit": "iter/sec",
            "range": "stddev: 2.1059142105939554e-7",
            "extra": "mean: 249.74446975193135 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1223471.842659797,
            "unit": "iter/sec",
            "range": "stddev: 4.2792687443429495e-7",
            "extra": "mean: 817.3461498108736 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2545818.623546169,
            "unit": "iter/sec",
            "range": "stddev: 3.234195954245877e-7",
            "extra": "mean: 392.8009602691418 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 4287742.32770081,
            "unit": "iter/sec",
            "range": "stddev: 1.7034076826293942e-7",
            "extra": "mean: 233.2229699391064 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1399934.6845435963,
            "unit": "iter/sec",
            "range": "stddev: 3.758044951119232e-7",
            "extra": "mean: 714.319040052942 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 716887.5500863375,
            "unit": "iter/sec",
            "range": "stddev: 5.209599655780873e-7",
            "extra": "mean: 1.3949189100571857 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 830600.0085323536,
            "unit": "iter/sec",
            "range": "stddev: 4.949822912189455e-7",
            "extra": "mean: 1.203948940196824 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 6758417.135476357,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 147.9636399994888 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 4079345.8883026033,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 245.1373400003831 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 7536473.138554019,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 132.68806000041877 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 10540115.574470975,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 94.87562000003891 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 4507540.800230087,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 221.8504600000415 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 4768399.094400577,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 209.7139900001821 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 67213.03063868453,
            "unit": "iter/sec",
            "range": "stddev: 0.0000756404092440713",
            "extra": "mean: 14.878067399990869 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 19203.062867091518,
            "unit": "iter/sec",
            "range": "stddev: 0.00006070373331335783",
            "extra": "mean: 52.075026099805655 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 4.4595373363000625,
            "unit": "iter/sec",
            "range": "stddev: 0.18656792621158946",
            "extra": "mean: 224.23850829998173 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 1940385.0833887784,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 515.3616200004763 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1530079.3401210383,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 653.5608800004411 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 6430499.292179809,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 155.50892000192107 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2240228.7327366327,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 446.3829899987104 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2273524.3496969976,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 439.8457399997824 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 304210.8142977065,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.2871941200005494 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 62547.89409531131,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 15.98774849999245 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 55488.36531048803,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 18.021796000016366 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 2.989175205251774,
            "unit": "iter/sec",
            "range": "stddev: 0.006172820701334169",
            "extra": "mean: 334.54044387999375 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 9695654.378583996,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 103.13899000038873 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 4459733.202716194,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 224.22865999942587 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 243288.95329221615,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.110338700002103 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_mean",
            "value": 155237.1093937921,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.44175869999799 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_std",
            "value": 48509.930176760594,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 20.614335999994182 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_mean",
            "value": 2140424.519813003,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 467.19703999997364 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_std",
            "value": 1197042.4528460307,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 835.3922600008445 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 95284.05418579426,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.49493547000111 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}