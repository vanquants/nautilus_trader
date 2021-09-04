window.BENCHMARK_DATA = {
  "lastUpdate": 1630791571448,
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
          "id": "3b395719aa1d796321a28119523da9eaaacf4f78",
          "message": "Reshuffle core types\n\n- Move `Data` into core data module.\n- Move `is_nautilus_class` to core inspect module.\n- Move round function to core math module.\n- Move tests.",
          "timestamp": "2021-09-05T07:17:47+10:00",
          "tree_id": "b013a775fddb9ed5013a5c270d5623ac4b579772",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/3b395719aa1d796321a28119523da9eaaacf4f78"
        },
        "date": 1630791559403,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 0.2364578205531152,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.229084061000094 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 0.614352630372842,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.627729663000082 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 0.22013365190579587,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.542694818999962 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 5623445.222884631,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 177.82692999844585 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 5262133.717341171,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 190.03698000005897 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 6122129.754252715,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 163.34185000005164 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 7331071.404564173,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 136.4057099999627 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 161.29987049692,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.199632999823734 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 10485532.586432219,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 95.36949999983335 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 9285692.530660434,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 107.69256000003224 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 5155595.617972029,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 193.96400999994512 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 9110490.848550836,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 109.76357000117787 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2779701.7936453708,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013980105854055784",
            "extra": "mean: 359.7508201369237 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 850892.0002260237,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024381084987559995",
            "extra": "mean: 1.1752372800947342 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 652252.3421309685,
            "unit": "iter/sec",
            "range": "stddev: 0.000002428275210147847",
            "extra": "mean: 1.5331489600066561 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 676695.6481699751,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026395184878408065",
            "extra": "mean: 1.47776921974355 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3716626.8249480273,
            "unit": "iter/sec",
            "range": "stddev: 8.995793752945034e-7",
            "extra": "mean: 269.06118023134695 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 979200.8725494009,
            "unit": "iter/sec",
            "range": "stddev: 0.000002652216442375622",
            "extra": "mean: 1.0212409200539696 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 1845953.2110610472,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021161014684653796",
            "extra": "mean: 541.7255399584064 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 3966156.627916456,
            "unit": "iter/sec",
            "range": "stddev: 8.973909811999597e-7",
            "extra": "mean: 252.13325993263425 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 966166.7254391116,
            "unit": "iter/sec",
            "range": "stddev: 0.000002266346389497774",
            "extra": "mean: 1.0350180498562622 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 597440.7845793148,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024899092519526167",
            "extra": "mean: 1.67380605042581 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 662187.8837904725,
            "unit": "iter/sec",
            "range": "stddev: 0.000013302710779038178",
            "extra": "mean: 1.5101454201726483 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 6207641.768468772,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 161.0917699986203 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 3703672.153919642,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 270.0022999988505 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 6682940.964564598,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 149.63471999863032 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 10075518.022669706,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 99.25048000013703 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 4363970.8818736905,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 229.14909999826705 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 4665005.27171232,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 214.36202999893794 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_mean",
            "value": 119786.01569906576,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.348219899994547 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_std",
            "value": 34724.00918242021,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 28.798517900008846 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_mean",
            "value": 1790591.4731846496,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 558.4746800013818 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_std",
            "value": 910296.4229191679,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.0985432600000422 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 72776.41189030484,
            "unit": "iter/sec",
            "range": "stddev: 0.00006064870564593088",
            "extra": "mean: 13.740715899916722 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 10645.061982544028,
            "unit": "iter/sec",
            "range": "stddev: 0.00015672029464687564",
            "extra": "mean: 93.94027029995868 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 3.784003491003334,
            "unit": "iter/sec",
            "range": "stddev: 0.2000513686941457",
            "extra": "mean: 264.2703693000158 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 1950448.3905351686,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 512.7026199988904 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1672876.1319351231,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 597.7728900006696 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 6407155.921822679,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 156.07548999923893 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2210934.566023341,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 452.2974199994678 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2205794.250919289,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 453.3514400009153 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 278702.736419488,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.588052319998951 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 44429.75083468422,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 22.507441100015058 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 35753.29728614415,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 27.969448300018485 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 2.9691790656700157,
            "unit": "iter/sec",
            "range": "stddev: 0.006343919544940417",
            "extra": "mean: 336.7934293899998 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 9109314.875748403,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 109.77773999911733 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 3910210.156994862,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 255.740729999161 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 229651.73658574204,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.354419500009499 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 84941.7278851113,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.772776759999033 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}