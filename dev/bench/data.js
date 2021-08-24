window.BENCHMARK_DATA = {
  "lastUpdate": 1629795327819,
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
          "id": "d691efffab6f74ec056e407f954ec32ef0e39354",
          "message": "Improve strategy configuration\n\n- Update examples.\n- Update tests.",
          "timestamp": "2021-08-24T18:35:46+10:00",
          "tree_id": "bb3b9ffa27daa28ff57fbd7bfb870d702becc319",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/d691efffab6f74ec056e407f954ec32ef0e39354"
        },
        "date": 1629795320321,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 0.3005772416098876,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.3269318550001117 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 0.40064874824195373,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.4959518890000254 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 0.12377865386592625,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.078937431999975 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 6321554.065589841,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 158.18894999938493 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 6702420.0562071325,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 149.19984000016484 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 6903036.293662743,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 144.86378999890803 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 7606146.435749061,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 131.47261999847615 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 176.85752128379505,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.654268999933265 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 11031546.693466246,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 90.6491199998527 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 11620602.212123878,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 86.05406000015137 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 5403732.293039373,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 185.0572800003647 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 9890292.914923951,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 101.10923999945953 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2895455.522365449,
            "unit": "iter/sec",
            "range": "stddev: 3.229959367763226e-7",
            "extra": "mean: 345.3688002718991 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 924483.29544643,
            "unit": "iter/sec",
            "range": "stddev: 6.183619615058863e-7",
            "extra": "mean: 1.0816853099731816 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 695619.7277751522,
            "unit": "iter/sec",
            "range": "stddev: 6.074967464652618e-7",
            "extra": "mean: 1.437567050029429 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 671122.1932464151,
            "unit": "iter/sec",
            "range": "stddev: 7.359581603726082e-7",
            "extra": "mean: 1.4900416199361644 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3982666.7970967134,
            "unit": "iter/sec",
            "range": "stddev: 3.1788990534883307e-7",
            "extra": "mean: 251.0880399859161 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1313569.1608270172,
            "unit": "iter/sec",
            "range": "stddev: 5.146882612638194e-7",
            "extra": "mean: 761.2846204233392 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2681784.852034026,
            "unit": "iter/sec",
            "range": "stddev: 3.6256040879516894e-7",
            "extra": "mean: 372.8859901798387 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 4461932.244865729,
            "unit": "iter/sec",
            "range": "stddev: 2.6427775196922627e-7",
            "extra": "mean: 224.1181499675804 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1370119.0951770395,
            "unit": "iter/sec",
            "range": "stddev: 4.878896910767248e-7",
            "extra": "mean: 729.8635596862368 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 755032.2995723919,
            "unit": "iter/sec",
            "range": "stddev: 7.031148692737416e-7",
            "extra": "mean: 1.3244466502510477 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 805924.1485136256,
            "unit": "iter/sec",
            "range": "stddev: 6.163874316655861e-7",
            "extra": "mean: 1.2408115600510428 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 6754026.396014682,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 148.05982999860134 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 4048287.1595530473,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 247.01805000177046 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 8672393.568345284,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 115.30842000183839 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 11388992.4023139,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 87.80407999893214 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 5188703.548951617,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 192.72637000085524 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 5168269.0195547845,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 193.48838000041724 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_mean",
            "value": 150438.55848569167,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.647232000000258 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_std",
            "value": 48525.753165539136,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 20.6076142000029 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_mean",
            "value": 2174737.22160788,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 459.8256700001002 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_std",
            "value": 1189700.9445154252,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 840.547370000877 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 41167.477044354106,
            "unit": "iter/sec",
            "range": "stddev: 0.00014520154458879436",
            "extra": "mean: 24.291019799989044 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 15448.420092781627,
            "unit": "iter/sec",
            "range": "stddev: 0.00014663957199053418",
            "extra": "mean: 64.73153849999562 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 4.724926320785952,
            "unit": "iter/sec",
            "range": "stddev: 0.20093344038506658",
            "extra": "mean: 211.64351190002435 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 2074762.4894851989,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 481.98288000094186 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1854810.7214811991,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 539.1385699999773 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 7289284.816922529,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 137.18767000000298 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2468563.217701959,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 405.09394000082466 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2428150.8936600373,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 411.83601999819075 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 340527.7980638812,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.93661782000072 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 66054.1478744181,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 15.139094700020905 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 59729.9336138494,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 16.74202429999241 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.2580385223553154,
            "unit": "iter/sec",
            "range": "stddev: 0.0019540428749685586",
            "extra": "mean: 306.93314186999714 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 10307981.882558733,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 97.01220000124522 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 4927674.0639496045,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 202.93549999905736 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 282311.73562106746,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.542183599984128 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 96853.94023966412,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.324825169998348 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}