window.BENCHMARK_DATA = {
  "lastUpdate": 1632823048476,
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
          "id": "1fa0af48d57263335348957eed4cf66f256f75d2",
          "message": "Improve efficiency of timers\n\n- Change `Clock.set_time_alert(...)` method signature.\n- Change `Clock.set_timer(...)` method signature.\n- Remove `pd.Timestamp` from `TimeEvent`.\n- Add `Clock.set_time_alert_ns(...)` method.\n- Add `Clock.set_timer_ns(...)` method.",
          "timestamp": "2021-09-28T18:58:59+10:00",
          "tree_id": "855c392f63d78b4bd3f3e3323b2c385780afc7c3",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/1fa0af48d57263335348957eed4cf66f256f75d2"
        },
        "date": 1632823039405,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 3.319777773275264,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 301.224982000349 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 10.338055874432065,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 96.72998599990024 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 1.402974747559908,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 712.7712040000915 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 7828313.192585068,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 127.7414400010457 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 8389448.95917783,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 119.1973400000279 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 8496586.751379732,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 117.69431999709923 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 11048500.486491935,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 90.51001999978325 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 195.06649523509014,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.126457000187656 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 15943699.608464655,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 62.72069999795348 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 16330079.238810763,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 61.236689998622744 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 8179398.418215128,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 122.25838000176738 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 14636194.694466362,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 68.32377000137058 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2811641.6581783164,
            "unit": "iter/sec",
            "range": "stddev: 1.042186579751345e-7",
            "extra": "mean: 355.6641000432137 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 1096286.708146262,
            "unit": "iter/sec",
            "range": "stddev: 1.1515888357937756e-7",
            "extra": "mean: 912.170139954469 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 834053.8237170152,
            "unit": "iter/sec",
            "range": "stddev: 2.4480273264668507e-7",
            "extra": "mean: 1.1989633900884655 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 847299.3834676743,
            "unit": "iter/sec",
            "range": "stddev: 2.0746974342790263e-7",
            "extra": "mean: 1.180220379610546 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 4589378.717671283,
            "unit": "iter/sec",
            "range": "stddev: 6.453355698061451e-8",
            "extra": "mean: 217.8944169827446 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1520523.4091109415,
            "unit": "iter/sec",
            "range": "stddev: 2.2628475018024372e-7",
            "extra": "mean: 657.6682700233505 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2958697.442270068,
            "unit": "iter/sec",
            "range": "stddev: 8.474607935680367e-8",
            "extra": "mean: 337.9865699389484 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 5068165.799474863,
            "unit": "iter/sec",
            "range": "stddev: 7.249578408410406e-8",
            "extra": "mean: 197.3100406667072 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1493392.5362656324,
            "unit": "iter/sec",
            "range": "stddev: 1.3654090586514514e-7",
            "extra": "mean: 669.6163103242725 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 927702.6318544464,
            "unit": "iter/sec",
            "range": "stddev: 1.315670454911288e-7",
            "extra": "mean: 1.0779316191019461 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 949613.4349453428,
            "unit": "iter/sec",
            "range": "stddev: 4.989441154200086e-7",
            "extra": "mean: 1.0530600802394474 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 9312879.02288411,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 107.3781799959761 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 4898569.245458743,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 204.1412400012632 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 10689811.391500091,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 93.54701999654935 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 18450664.491166536,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 54.198590000851254 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 6043325.44616076,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 165.47181000078126 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 6138592.601320705,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 162.9037899965624 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 47668.849990946816,
            "unit": "iter/sec",
            "range": "stddev: 0.00012661254032292826",
            "extra": "mean: 20.978060099832874 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 13217.007751892583,
            "unit": "iter/sec",
            "range": "stddev: 0.00013781742859354231",
            "extra": "mean: 75.66009029969791 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 4.132984298070804,
            "unit": "iter/sec",
            "range": "stddev: 0.21992507689008767",
            "extra": "mean: 241.955915599965 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 2655009.475868089,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 376.64648999907513 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 2225361.6140412902,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 449.3651699976908 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 9693683.479598062,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 103.15995999917504 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 3037648.1555738645,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 329.20205000209535 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 3041796.874557409,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 328.7530500028879 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 264149.83715645794,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.78573014000267 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 45277.68464410509,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 22.085934999995516 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 39574.01814534134,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.269104500011963 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.6402833637633587,
            "unit": "iter/sec",
            "range": "stddev: 0.0006432268624286764",
            "extra": "mean: 274.7038897999937 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 15361056.25072244,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 65.09969000035198 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 5985773.731405105,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 167.06277999674057 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 253331.82651497534,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.9473919000101887 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_mean",
            "value": 159736.33537132182,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.260316399993826 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_std",
            "value": 52270.820053002724,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 19.131132800021078 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_mean",
            "value": 2479246.967401236,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 403.3482800014099 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_std",
            "value": 1344783.9173645738,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 743.6138899993239 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 107766.60563767742,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.279312400003619 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}