window.BENCHMARK_DATA = {
  "lastUpdate": 1632559252603,
  "repoUrl": "https://github.com/nautechsystems/nautilus_trader",
  "entries": {
    "Benchmark with pytest-benchmark": [
      {
        "commit": {
          "author": {
            "name": "nautechsystems",
            "username": "nautechsystems"
          },
          "committer": {
            "name": "nautechsystems",
            "username": "nautechsystems"
          },
          "id": "94fda59aec89cbc1765b6690c32975dd5b21ee45",
          "message": "Fix paths on windows",
          "timestamp": "2021-09-15T09:49:14Z",
          "url": "https://github.com/nautechsystems/nautilus_trader/pull/444/commits/94fda59aec89cbc1765b6690c32975dd5b21ee45"
        },
        "date": 1632558234524,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 95899.28932824694,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.427605950000007 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_mean",
            "value": 69364.03178212703,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 14.416693700000138 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_std",
            "value": 22693.11844935052,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 44.06622220000003 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_mean",
            "value": 2316770.018549341,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 431.63542000002053 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_std",
            "value": 1406527.1891481203,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 710.9709699999911 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 119628.37922506935,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.35922050000022 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 17989477.9543454,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 55.588049999997224 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 6181350.309793954,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 161.7769499999966 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.787663225795306,
            "unit": "iter/sec",
            "range": "stddev: 0.001210938353721172",
            "extra": "mean: 264.0150246700002 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 237567.36905756456,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.209332299999886 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 25690.93337519341,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 38.92423780000058 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 23491.792947152146,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 42.56805779999979 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 2931737.9128330494,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 341.09460999999897 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 2166325.300736789,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 461.6111899998998 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 10944411.909141337,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 91.37082999998825 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 3143776.6975415833,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 318.0887499999585 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 3015479.754234353,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 331.6221900000471 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 40496.95383330609,
            "unit": "iter/sec",
            "range": "stddev: 0.00011991352739078281",
            "extra": "mean: 24.693215300000304 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 8257.823451615846,
            "unit": "iter/sec",
            "range": "stddev: 0.00011677746523707065",
            "extra": "mean: 121.09728499999903 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 2.9306231569644687,
            "unit": "iter/sec",
            "range": "stddev: 0.26518722641609016",
            "extra": "mean: 341.2243561999958 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 6590917.254655591,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 151.72395000007555 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 6567446.559702312,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 152.26617999999803 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 9078118.022607187,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 110.15499000009754 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 5167734.0535250055,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 193.50840999990737 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 13570257.361304214,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 73.6905699999113 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 15787482.799557155,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 63.3413199999211 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2780882.091968559,
            "unit": "iter/sec",
            "range": "stddev: 1.617604359597297e-7",
            "extra": "mean: 359.5981299919515 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 742578.3802144347,
            "unit": "iter/sec",
            "range": "stddev: 5.673440161763317e-7",
            "extra": "mean: 1.3466591899850755 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 520734.2256800557,
            "unit": "iter/sec",
            "range": "stddev: 9.329760250186097e-7",
            "extra": "mean: 1.9203654199876043 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 531390.2446783265,
            "unit": "iter/sec",
            "range": "stddev: 7.287501934601914e-7",
            "extra": "mean: 1.8818561500039266 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3934887.991766731,
            "unit": "iter/sec",
            "range": "stddev: 2.0683708149190225e-7",
            "extra": "mean: 254.1368400046906 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1477137.2973212386,
            "unit": "iter/sec",
            "range": "stddev: 4.900730865517722e-7",
            "extra": "mean: 676.9851399822358 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2610303.190580494,
            "unit": "iter/sec",
            "range": "stddev: 1.5937299458788386e-7",
            "extra": "mean: 383.09725996910515 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 5503850.2458109455,
            "unit": "iter/sec",
            "range": "stddev: 1.8921735105993446e-7",
            "extra": "mean: 181.69099000488131 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1192840.343249746,
            "unit": "iter/sec",
            "range": "stddev: 4.3090298955916294e-7",
            "extra": "mean: 838.3351599893274 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 677981.4815205294,
            "unit": "iter/sec",
            "range": "stddev: 7.016907254259376e-7",
            "extra": "mean: 1.474966540025946 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 797548.0183697378,
            "unit": "iter/sec",
            "range": "stddev: 7.153800767580247e-7",
            "extra": "mean: 1.2538430000040535 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 17645588.011881452,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 56.671389999962685 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 16874156.924936432,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 59.262219999993704 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 8199013.002813335,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 121.96590000002062 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 15092141.29565027,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 66.25964999997791 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 9574800.351057585,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 104.4408199999225 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 10402080.998715509,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 96.13461000000711 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 9441911.284559418,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 105.91075999997202 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 11934676.740343992,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 83.78944999989812 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 177.60090306518094,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.630601999996543 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 2.3151404779087574,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 431.9392319999906 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 7.565327339193601,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 132.18198699999562 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 1.3180287525072696,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 758.70879 msec\nrounds: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "nautechsystems",
            "username": "nautechsystems"
          },
          "committer": {
            "name": "nautechsystems",
            "username": "nautechsystems"
          },
          "id": "94fda59aec89cbc1765b6690c32975dd5b21ee45",
          "message": "Fix paths on windows",
          "timestamp": "2021-09-15T09:49:14Z",
          "url": "https://github.com/nautechsystems/nautilus_trader/pull/444/commits/94fda59aec89cbc1765b6690c32975dd5b21ee45"
        },
        "date": 1632559244986,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 15682955.873914389,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 63.76348999765469 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 4601219.654445197,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 217.3336800024117 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 233732.06699296524,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.278403100033756 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_mean",
            "value": 125477.88723867587,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.969531700018706 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_std",
            "value": 34785.0377197299,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 28.747992399985378 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_mean",
            "value": 1743331.287127895,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 573.6144399998011 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_std",
            "value": 1023383.7454874713,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 977.1505600019738 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 99103.36183832856,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.090475049992165 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 2.6354251006335794,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 379.44542599962006 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 8.551750456052488,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 116.93512400051986 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 1.6550050185976386,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 604.2277749993445 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 8113375.662514581,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 123.25325999881899 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 8338179.205287102,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 119.93025999800011 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 6887891.506994954,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 145.18230999783555 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 9498189.73999273,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 105.28322000027401 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 166.27832361906977,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.01401300082216 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 12162761.589002402,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 82.21817000048759 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 13096348.789399285,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 76.35716000550019 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 5576735.376899474,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 179.31637999936356 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 11466156.834909683,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 87.21318000425526 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 3051993.301591249,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023113446922840717",
            "extra": "mean: 327.6547165023658 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 892806.6043774805,
            "unit": "iter/sec",
            "range": "stddev: 0.000002048302548383123",
            "extra": "mean: 1.1200633990574715 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 727927.1048416139,
            "unit": "iter/sec",
            "range": "stddev: 0.000005208976995095709",
            "extra": "mean: 1.3737639295868576 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 761387.9170575718,
            "unit": "iter/sec",
            "range": "stddev: 0.000005814480770245187",
            "extra": "mean: 1.3133909503903851 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 4068125.789714648,
            "unit": "iter/sec",
            "range": "stddev: 0.0000046366455396572475",
            "extra": "mean: 245.8134412972868 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1364817.5803729699,
            "unit": "iter/sec",
            "range": "stddev: 0.000001475543807358226",
            "extra": "mean: 732.6986509997369 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2780328.099717383,
            "unit": "iter/sec",
            "range": "stddev: 9.54905461547677e-7",
            "extra": "mean: 359.66978145552275 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 5054760.240079784,
            "unit": "iter/sec",
            "range": "stddev: 6.259989005433528e-7",
            "extra": "mean: 197.8333199804183 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1277381.3555236415,
            "unit": "iter/sec",
            "range": "stddev: 0.0000068710779475644745",
            "extra": "mean: 782.8515702658478 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 826456.7658568019,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018167806490725167",
            "extra": "mean: 1.2099846493038058 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 846876.6760687742,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018659479556206664",
            "extra": "mean: 1.1808094711523154 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 7789298.236618619,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 128.3812699966802 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 3574024.9728936628,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 279.7965900026611 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 8709796.12529215,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 114.81325000204379 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 15614718.68536501,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 64.04213999303465 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 5384612.360957064,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 185.7143899997027 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 5417722.964435673,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 184.57939000654733 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 79521.42985533485,
            "unit": "iter/sec",
            "range": "stddev: 0.00005525550936057348",
            "extra": "mean: 12.575226600165479 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 7717.651646965376,
            "unit": "iter/sec",
            "range": "stddev: 0.0002349848030049863",
            "extra": "mean: 129.57309370049188 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 3.214565282731268,
            "unit": "iter/sec",
            "range": "stddev: 0.22749095684851386",
            "extra": "mean: 311.0840540000936 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 2168073.4789311728,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 461.2389800058736 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 2062327.4966209629,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 484.8890399989614 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 8571974.239319213,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 116.65923999316874 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2410795.2712245095,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 414.8008799984382 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2446777.2725653765,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 408.70087000257627 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 317118.9635604911,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.1533907300035935 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 33936.67895579162,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 29.466642899933504 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 31109.21273021032,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 32.144818599954306 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.359716653006667,
            "unit": "iter/sec",
            "range": "stddev: 0.0036691291236965605",
            "extra": "mean: 297.644147789988 msec\nrounds: 10"
          }
        ]
      }
    ]
  }
}