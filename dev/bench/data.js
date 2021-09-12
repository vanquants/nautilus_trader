window.BENCHMARK_DATA = {
  "lastUpdate": 1631408016759,
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
          "id": "3c816f97409a06d6902a11f0633bde1354956b4b",
          "message": "Fix reduce-only order behaviour (#437)\n\n- Refactor exchange handling for positions.\n- Move `reduce_only` to `Order` base class.\n- Add enum parsing convenience methods to `Order`.\n- Add tests.",
          "timestamp": "2021-09-12T10:31:51+10:00",
          "tree_id": "2449933dfa8f452798f5df74d97a825ef413ceca",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/3c816f97409a06d6902a11f0633bde1354956b4b"
        },
        "date": 1631408012517,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 0.23882131111776897,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.187231010999994 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 0.604351651593448,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.6546657850001338 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 0.22576019461619615,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.429478818000007 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 5549977.211748107,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 180.1809200014759 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 5316124.400728588,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 188.10695999945892 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 5574138.494658003,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 179.39991999810445 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 6680260.1052695755,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 149.6947700002238 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 152.01648345094324,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.5782340000168915 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 8834501.342611413,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 113.19258000185073 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 8963097.76126578,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 111.56857000059972 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 4500994.134565385,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 222.17314000045008 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 7440659.438839876,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 134.39669000035792 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2444265.0135251647,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011612887910458578",
            "extra": "mean: 409.12094002351296 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 827744.9713006376,
            "unit": "iter/sec",
            "range": "stddev: 0.000001782247523747179",
            "extra": "mean: 1.2081015707394727 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 627014.5783837576,
            "unit": "iter/sec",
            "range": "stddev: 0.000002333704612940066",
            "extra": "mean: 1.5948592496488345 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 647660.348378313,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016272521633869946",
            "extra": "mean: 1.5440191799666536 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3294245.0306539615,
            "unit": "iter/sec",
            "range": "stddev: 0.000001532925416909111",
            "extra": "mean: 303.55968991216287 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1111542.7355223293,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013177909578739036",
            "extra": "mean: 899.6505199866078 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2304655.6027719043,
            "unit": "iter/sec",
            "range": "stddev: 8.428190816518263e-7",
            "extra": "mean: 433.90431038687893 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 3784018.5118078566,
            "unit": "iter/sec",
            "range": "stddev: 7.046400464293553e-7",
            "extra": "mean: 264.2693202687951 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1265202.4348025823,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010164463144356303",
            "extra": "mean: 790.3873502709757 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 668292.5019914776,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025906459436664876",
            "extra": "mean: 1.4963507700895207 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 712120.3089918233,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018005234296449888",
            "extra": "mean: 1.404257100061841 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 5873959.398692573,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 170.2429200008737 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 3453640.0796593423,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 289.54956999996284 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 6403079.62512703,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 156.17485000120723 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 9318832.484619802,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 107.3095799984003 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 4068955.2830939624,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 245.76333000140946 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 4125390.2464569258,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 242.4013099994227 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 76777.02104377556,
            "unit": "iter/sec",
            "range": "stddev: 0.000055315395064949757",
            "extra": "mean: 13.024730399865803 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 11220.38873354815,
            "unit": "iter/sec",
            "range": "stddev: 0.00014262188246831885",
            "extra": "mean: 89.12347189987031 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 3.840756729119784,
            "unit": "iter/sec",
            "range": "stddev: 0.20063313564088164",
            "extra": "mean: 260.3653577999921 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 1730987.118772576,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 577.7050500000769 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1494199.8002720382,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 669.2545400005656 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 5789519.360492226,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 172.72590999937165 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 1963029.5191088428,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 509.41669000167167 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 1942759.6185450703,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 514.7317199998724 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 275688.12838920025,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.6272871300002407 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 48476.53073481613,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 20.628538899995874 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 37719.82183315887,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 26.511259899984907 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 2.8122736957117342,
            "unit": "iter/sec",
            "range": "stddev: 0.0016671854017914168",
            "extra": "mean: 355.5841671899998 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 8839890.749596033,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 113.1235699995159 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 3895927.618028902,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 256.67827999996007 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 206060.89804296262,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.852934299992739 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_mean",
            "value": 120818.74416813189,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.276861399986046 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_std",
            "value": 36124.4941825559,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 27.68204850001439 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_mean",
            "value": 1694002.3305406664,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 590.317959999993 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_std",
            "value": 971524.4719974024,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.0293101499996737 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 86574.51897651682,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.550742780000292 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}