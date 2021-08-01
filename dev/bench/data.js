window.BENCHMARK_DATA = {
  "lastUpdate": 1627851266044,
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
          "id": "bc6fb180273a49a38970b0faf2ced46a3357e155",
          "message": "Update docs",
          "timestamp": "2021-08-02T06:35:01+10:00",
          "tree_id": "3793f51fef3bacfcd51332f57cd0a14e6b06c926",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/bc6fb180273a49a38970b0faf2ced46a3357e155"
        },
        "date": 1627851264294,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 86079.20435958098,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.617207750000489 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 0.28062662790034243,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.5634537159999127 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 0.3862745131326996,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.588832464999996 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 0.12048690636046436,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.299657034999882 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 5917807.570620334,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 168.98150000088208 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 6039040.099472922,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 165.58922999820425 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 5766718.365274558,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 173.4088500006692 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 7092789.144283311,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 140.98826000008557 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 167.67900068557148,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.963776000044163 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 9931271.627780689,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 100.69204000046739 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 9863868.747425187,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 101.38009999991482 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 4676654.254203056,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 213.82807999998477 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 9352739.894551689,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 106.92053999946438 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2589885.6735622366,
            "unit": "iter/sec",
            "range": "stddev: 2.6145651136851064e-7",
            "extra": "mean: 386.11742989587583 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 793851.0708816833,
            "unit": "iter/sec",
            "range": "stddev: 4.160981212344013e-7",
            "extra": "mean: 1.2596821200850172 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 639444.6961176895,
            "unit": "iter/sec",
            "range": "stddev: 5.119830474887329e-7",
            "extra": "mean: 1.5638568996996582 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 634285.3268222329,
            "unit": "iter/sec",
            "range": "stddev: 5.575628886980111e-7",
            "extra": "mean: 1.5765775396539539 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3721748.8074288815,
            "unit": "iter/sec",
            "range": "stddev: 1.75020764913832e-7",
            "extra": "mean: 268.6908901546303 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1189414.8502658582,
            "unit": "iter/sec",
            "range": "stddev: 3.8109496111505696e-7",
            "extra": "mean: 840.7495498954631 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2341101.7037365027,
            "unit": "iter/sec",
            "range": "stddev: 2.7753136054663756e-7",
            "extra": "mean: 427.1493196574738 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 4157619.856196509,
            "unit": "iter/sec",
            "range": "stddev: 2.2218089431170146e-7",
            "extra": "mean: 240.52223016724383 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1246977.544161751,
            "unit": "iter/sec",
            "range": "stddev: 4.0525392590524095e-7",
            "extra": "mean: 801.9390603158172 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 688463.2621522193,
            "unit": "iter/sec",
            "range": "stddev: 4.684301715274528e-7",
            "extra": "mean: 1.45251032985243 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 778565.8881643004,
            "unit": "iter/sec",
            "range": "stddev: 7.004198563241704e-7",
            "extra": "mean: 1.2844128097594876 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 6552728.693785929,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 152.6081800011525 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 3917077.352643227,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 255.29237999990076 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 6727942.0719311675,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 148.63385999888123 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 10274665.438805144,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 97.3267700010183 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 4497924.972268419,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 222.32474000020375 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 4689177.626559159,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 213.257010000234 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_mean",
            "value": 140524.47866868044,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.1161978999953135 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_std",
            "value": 45561.36282712028,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 21.948421599995527 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_mean",
            "value": 1911721.517839849,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 523.0887400011852 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_std",
            "value": 1097132.7379439888,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 911.466739999014 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 62502.74621411573,
            "unit": "iter/sec",
            "range": "stddev: 0.00006458296341057637",
            "extra": "mean: 15.999297000075785 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 14817.660815498624,
            "unit": "iter/sec",
            "range": "stddev: 0.00014559244640844276",
            "extra": "mean: 67.48703539994949 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 4.520502826687719,
            "unit": "iter/sec",
            "range": "stddev: 0.20845914935878881",
            "extra": "mean: 221.21432909991654 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 1951855.569560966,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 512.3329899993223 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1609783.0767385135,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 621.2017100006051 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 6511336.986456934,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 153.5782900009508 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2179272.5379066495,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 458.8687199998276 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2246233.812770084,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 445.18962999973155 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 317925.9326046778,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.145386700000472 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 59670.958818656116,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 16.758570999991207 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 54017.43490499209,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 18.512541399991278 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.005012327687685,
            "unit": "iter/sec",
            "range": "stddev: 0.0021664374084813566",
            "extra": "mean: 332.777336980007 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 9962243.098613407,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 100.3790000004301 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 4439709.543542793,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 225.23996000018087 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 250790.74321360848,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.987387999995917 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}