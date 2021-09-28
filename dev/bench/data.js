window.BENCHMARK_DATA = {
  "lastUpdate": 1632823757051,
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
      }
    ]
  }
}