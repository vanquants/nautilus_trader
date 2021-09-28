window.BENCHMARK_DATA = {
  "lastUpdate": 1632824329219,
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
      },
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
          "id": "8050ed1d54c9eef5fb281dfd7e21e6a0d24ee8e5",
          "message": "Remove colorama\n\n- Update dependencies",
          "timestamp": "2021-09-28T19:13:06+10:00",
          "tree_id": "c40b1e861cc96117c9b94cb1c6abf3bd81bfe38e",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/8050ed1d54c9eef5fb281dfd7e21e6a0d24ee8e5"
        },
        "date": 1632823749550,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 3.0411146259258732,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 328.8268030000836 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 9.650678631873756,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 103.61965599986434 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 1.4634934279188812,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 683.2965429998694 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 7203582.831616695,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 138.81980999940424 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 6724861.375305138,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 148.7019500018505 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 7163229.880240374,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 139.60183000108373 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 8992283.361868007,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 111.20646000108536 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 191.28984639780285,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.227668999850721 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 11931593.786075566,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 83.81110000300396 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 12016473.624406409,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 83.21908999732841 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 5918202.977997221,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 168.97020999749657 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 10909979.576263394,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 91.659200002141 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2836304.764298024,
            "unit": "iter/sec",
            "range": "stddev: 9.07492185471099e-8",
            "extra": "mean: 352.5714205989061 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 953974.0531714114,
            "unit": "iter/sec",
            "range": "stddev: 1.2870001092678453e-7",
            "extra": "mean: 1.04824653948981 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 762385.5902564602,
            "unit": "iter/sec",
            "range": "stddev: 2.632108493056752e-7",
            "extra": "mean: 1.3116722204358666 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 761676.2820636948,
            "unit": "iter/sec",
            "range": "stddev: 1.6338695372823985e-7",
            "extra": "mean: 1.3128937102919735 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 4116185.261267426,
            "unit": "iter/sec",
            "range": "stddev: 6.511278764980911e-8",
            "extra": "mean: 242.94338969866658 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1331342.071818019,
            "unit": "iter/sec",
            "range": "stddev: 1.193180286694073e-7",
            "extra": "mean: 751.1217598903386 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2615315.8166370695,
            "unit": "iter/sec",
            "range": "stddev: 8.727263736247201e-8",
            "extra": "mean: 382.36299938944285 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 4796811.38100232,
            "unit": "iter/sec",
            "range": "stddev: 6.488564769041974e-8",
            "extra": "mean: 208.47182025136135 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1446761.4147813586,
            "unit": "iter/sec",
            "range": "stddev: 1.2410950385672837e-7",
            "extra": "mean: 691.1989701848142 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 785653.5631766864,
            "unit": "iter/sec",
            "range": "stddev: 2.2901097719272454e-7",
            "extra": "mean: 1.2728256408036032 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 918832.2195465303,
            "unit": "iter/sec",
            "range": "stddev: 2.85073292108852e-7",
            "extra": "mean: 1.0883379780625546 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 7629294.4154323,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 131.0737199992218 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 4581001.870615437,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 218.29285999956483 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 8645544.103818169,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 115.6665200005591 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 12194367.982584208,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 82.00506999855861 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 5043714.122473644,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 198.26659000045765 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 5148918.5674794065,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 194.2155400001866 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 93549.04495693861,
            "unit": "iter/sec",
            "range": "stddev: 0.00004699509352806907",
            "extra": "mean: 10.689580000098431 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 13327.66754636031,
            "unit": "iter/sec",
            "range": "stddev: 0.0001481043476971206",
            "extra": "mean: 75.03188360014974 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 4.4605623554416525,
            "unit": "iter/sec",
            "range": "stddev: 0.17228759899837676",
            "extra": "mean: 224.18697920006707 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 2241982.357220299,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 446.03383999856305 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1928678.2870025304,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 518.4897899971475 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 7568834.958766458,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 132.12072999976954 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2712174.4956802656,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 368.7078399980237 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2709675.7970498353,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 369.047839999439 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 283369.1814713406,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.5289652699975704 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 42493.59467492262,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 23.53295849998176 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 39008.975266884634,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.635126100041816 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.422189767772962,
            "unit": "iter/sec",
            "range": "stddev: 0.00010606303052076376",
            "extra": "mean: 292.2105633700039 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 11561879.235415135,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 86.49113000046782 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 5101609.52213481,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 196.0165699983918 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 252997.9114021103,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.9526017999833134 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_mean",
            "value": 160217.59086934233,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.241511899997931 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_std",
            "value": 53757.706704841374,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 18.601983999997174 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_mean",
            "value": 2308239.0584997144,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 433.23069000052783 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_std",
            "value": 1284004.9119874726,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 778.8132199993925 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 106713.8150497713,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.370857930002785 usec\nrounds: 1"
          }
        ]
      },
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
        "date": 1632823839994,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 2.2695412082493185,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 440.6176880002022 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 7.094501577516139,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 140.95422900027188 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 0.882070189945343,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.1336966279995977 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 5108138.265538858,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 195.76603999666986 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 5739275.174185513,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 174.23803000383487 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 6490049.48843379,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 154.08203000333742 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 6995696.177656079,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 142.94503000201075 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 173.1211421993655,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.776302000413125 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 10205016.745187553,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 97.99102000215498 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 7714023.856260946,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 129.63402999957907 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 3901920.5447813408,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 256.2840500013408 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 8581185.133848108,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 116.5340199986531 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2639719.633012465,
            "unit": "iter/sec",
            "range": "stddev: 0.000005267019808022079",
            "extra": "mean: 378.8281101878965 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 942409.1316949958,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018418108685260351",
            "extra": "mean: 1.0611102613165713 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 679393.3900665038,
            "unit": "iter/sec",
            "range": "stddev: 0.0000028571215771684494",
            "extra": "mean: 1.4719012793193542 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 656435.5448999386,
            "unit": "iter/sec",
            "range": "stddev: 0.000006518974152333618",
            "extra": "mean: 1.5233788111709146 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3679850.2358145905,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011615420450610497",
            "extra": "mean: 271.75018979505694 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1120963.7195593605,
            "unit": "iter/sec",
            "range": "stddev: 0.000002232254893543555",
            "extra": "mean: 892.0895320261479 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2293192.820872161,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014796711324554696",
            "extra": "mean: 436.07322982097685 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 3970426.6700343504,
            "unit": "iter/sec",
            "range": "stddev: 8.880483777186553e-7",
            "extra": "mean: 251.86210024912725 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1298852.4209944173,
            "unit": "iter/sec",
            "range": "stddev: 0.000004652676331687425",
            "extra": "mean: 769.9104100174736 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 683386.9592186583,
            "unit": "iter/sec",
            "range": "stddev: 0.000003283530907264943",
            "extra": "mean: 1.4632997989065188 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 757178.4097074695,
            "unit": "iter/sec",
            "range": "stddev: 0.0000029932959971798683",
            "extra": "mean: 1.3206927022474702 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 6209787.743304725,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 161.03609999845503 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 3886934.5165914255,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 257.2721500018815 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 6846497.219013281,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 146.06009000090125 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 11484873.559875699,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 87.07105000212323 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 4204363.338803968,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 237.848139995549 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 4109947.0005750377,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 243.31214000085313 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 73705.17802087814,
            "unit": "iter/sec",
            "range": "stddev: 0.00005936256964115645",
            "extra": "mean: 13.567567799873359 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 7457.164509011363,
            "unit": "iter/sec",
            "range": "stddev: 0.00018510382710619592",
            "extra": "mean: 134.0992275001554 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 2.9625762445006405,
            "unit": "iter/sec",
            "range": "stddev: 0.27869456049081287",
            "extra": "mean: 337.54405539984873 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 1782238.030422479,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 561.0922800042317 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1288366.9393760273,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 776.1763899998186 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 6337132.4017409915,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 157.8000800054724 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2142124.7045423407,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 466.8262299946946 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2185409.1030348185,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 457.58022999507375 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 241869.7280743968,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.134457039999688 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 25267.928798855868,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 39.57585950001885 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 23007.333944296206,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 43.46440150002309 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 2.992541010612837,
            "unit": "iter/sec",
            "range": "stddev: 0.00741448797923494",
            "extra": "mean: 334.16417567998906 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 10633430.249579297,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 94.04303000337677 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 3956273.6808091984,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 252.7630999975372 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 233978.24053945823,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.2739016999803425 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_mean",
            "value": 124542.56760301576,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.02938320002795 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_std",
            "value": 37080.92904598403,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 26.968040600058885 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_mean",
            "value": 1685779.955512023,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 593.1972300004418 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_std",
            "value": 1018005.0584421199,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 982.3133900044922 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 93257.30814790411,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.72302020999814 usec\nrounds: 1"
          }
        ]
      },
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
          "id": "8050ed1d54c9eef5fb281dfd7e21e6a0d24ee8e5",
          "message": "Remove colorama\n\n- Update dependencies",
          "timestamp": "2021-09-28T19:13:06+10:00",
          "tree_id": "c40b1e861cc96117c9b94cb1c6abf3bd81bfe38e",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/8050ed1d54c9eef5fb281dfd7e21e6a0d24ee8e5"
        },
        "date": 1632824321318,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 2.8739867019815475,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 347.9487220001829 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 9.564945347640776,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 104.54842799981634 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 1.125342322663603,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 888.618494000184 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 6976663.061936696,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 143.33500000248023 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 7921552.548297717,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 126.23787999928027 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 7426278.95751207,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 134.65693999933137 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 10567511.285826517,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 94.62965999773587 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 163.0272729983114,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.1339429998952255 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 16374268.622801702,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 61.07143000008364 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 17103837.912904292,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 58.46641000061936 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 7231758.17934744,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 138.27895999838802 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 14362145.520281516,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 69.62748000205465 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 3400130.482438769,
            "unit": "iter/sec",
            "range": "stddev: 8.819544737789635e-7",
            "extra": "mean: 294.1063600837879 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 1108100.5359231762,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014416410270988913",
            "extra": "mean: 902.4451911909637 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 823383.8309191491,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018965964240283357",
            "extra": "mean: 1.2145004097101264 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 862826.155256721,
            "unit": "iter/sec",
            "range": "stddev: 0.000001695244682539764",
            "extra": "mean: 1.1589820196195433 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 4360725.889893367,
            "unit": "iter/sec",
            "range": "stddev: 7.813055287498115e-7",
            "extra": "mean: 229.3196190839808 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1331512.8535907136,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015525863934668999",
            "extra": "mean: 751.0254199223709 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2595349.1026857556,
            "unit": "iter/sec",
            "range": "stddev: 0.000006266844010466659",
            "extra": "mean: 385.30462008566246 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 4696451.218866738,
            "unit": "iter/sec",
            "range": "stddev: 0.000003586735710357426",
            "extra": "mean: 212.92672986419348 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1427160.9437294195,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013901095228725266",
            "extra": "mean: 700.6918206343471 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 869903.3675688386,
            "unit": "iter/sec",
            "range": "stddev: 0.00000238221042286146",
            "extra": "mean: 1.1495529702278873 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 888727.9538345307,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022242968609690015",
            "extra": "mean: 1.125203720312129 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 7638957.215009597,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 130.90792000184592 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 4227799.770537596,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 236.5296500011027 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 9866145.023680525,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 101.35671000170987 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 18370405.424563657,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 54.43537999781256 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 5822002.745575937,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 171.76220000237663 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 6139483.917395965,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 162.88014000110707 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 45624.74004404684,
            "unit": "iter/sec",
            "range": "stddev: 0.000130738494105817",
            "extra": "mean: 21.91793310021239 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 9637.252337868225,
            "unit": "iter/sec",
            "range": "stddev: 0.0001278680656602617",
            "extra": "mean: 103.7640153999746 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 3.3640587576678236,
            "unit": "iter/sec",
            "range": "stddev: 0.24127889915297948",
            "extra": "mean: 297.25996839997606 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 2200049.681514748,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 454.53519000147935 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1841590.7469340684,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 543.008810000174 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 8435129.17508972,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 118.55183000079705 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2453928.3540465035,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 407.5098599969351 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2561916.854893545,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 390.33272999859037 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 247961.18441396323,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.0328892700017605 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 28007.02280580314,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 35.70533029997023 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 24777.060408388515,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 40.359912899975825 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.48560651882142,
            "unit": "iter/sec",
            "range": "stddev: 0.0044730980454741045",
            "extra": "mean: 286.89411573000143 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 12829299.245769897,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 77.94657999966148 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 5155876.054034791,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 193.95345999782876 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 243574.4511752619,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.10552089997509 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_mean",
            "value": 128373.682850233,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.789758600029017 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_std",
            "value": 35680.159171164,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 28.02678080001897 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_mean",
            "value": 2060701.464839508,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 485.2716499999587 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_std",
            "value": 1154299.1896412836,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 866.3265199993475 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 103214.49840435878,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.688561349998963 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}