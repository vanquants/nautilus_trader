window.BENCHMARK_DATA = {
  "lastUpdate": 1628139063875,
  "repoUrl": "https://github.com/nautechsystems/nautilus_trader",
  "entries": {
    "Benchmark with pytest-benchmark": [
      {
        "commit": {
          "author": {
            "email": "chris@cjdsellers.io",
            "name": "Christopher Sellers",
            "username": "cjdsellers"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cf7b5aa45a9ce68e2daeb4c97bf0a3209aed46d2",
          "message": "Merge pull request #412 from nautechsystems/betfair_bug_fixes",
          "timestamp": "2021-08-05T14:33:29+10:00",
          "tree_id": "083d4158d6e26b365f01e076a98200d78673f916",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/cf7b5aa45a9ce68e2daeb4c97bf0a3209aed46d2"
        },
        "date": 1628139060555,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 0.3334463613129947,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.998983092999879 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 0.438800433737385,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.278940317999968 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 0.13442878262107,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.438883105999821 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 7004291.7397019565,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 142.7696099995046 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 6716829.742357562,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 148.87975999954506 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 7327217.793084399,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 136.47745000071154 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 8659064.239132743,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 115.48592000053759 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 203.56134646793592,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.912524000019403 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 12333185.951956965,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 81.08204999871305 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 11344141.199194238,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 88.15122999976666 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 6053262.169592,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 165.2001799993741 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 10572792.67317428,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 94.58238999968671 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 3191623.647189771,
            "unit": "iter/sec",
            "range": "stddev: 3.478374177764958e-7",
            "extra": "mean: 313.32015003727065 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 936406.3066704274,
            "unit": "iter/sec",
            "range": "stddev: 6.140179551025682e-7",
            "extra": "mean: 1.0679125000297063 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 719266.2425737513,
            "unit": "iter/sec",
            "range": "stddev: 7.006493561512341e-7",
            "extra": "mean: 1.39030575996685 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 714824.7942367708,
            "unit": "iter/sec",
            "range": "stddev: 6.514207041377018e-7",
            "extra": "mean: 1.3989442001206953 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 4053170.9485993814,
            "unit": "iter/sec",
            "range": "stddev: 2.7213415102338733e-7",
            "extra": "mean: 246.72041043459103 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1417849.3079643892,
            "unit": "iter/sec",
            "range": "stddev: 4.843810792173594e-7",
            "extra": "mean: 705.2935699039153 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2894015.0052488516,
            "unit": "iter/sec",
            "range": "stddev: 3.355152754547283e-7",
            "extra": "mean: 345.54071011598353 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 4803254.14357601,
            "unit": "iter/sec",
            "range": "stddev: 2.1867932563883403e-7",
            "extra": "mean: 208.1921901503847 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1529636.0093492111,
            "unit": "iter/sec",
            "range": "stddev: 4.228299767077097e-7",
            "extra": "mean: 653.750299998137 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 802255.1328365483,
            "unit": "iter/sec",
            "range": "stddev: 6.80358572595621e-7",
            "extra": "mean: 1.2464862598812942 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 852615.6121371705,
            "unit": "iter/sec",
            "range": "stddev: 6.61650527983642e-7",
            "extra": "mean: 1.1728614697699413 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 7910754.663018006,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 126.41019000056984 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 4612514.637796742,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 216.80148000086774 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 8518470.215639476,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 117.39196999997148 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 11512886.546509057,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 86.85919000072317 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 5217005.5181155065,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 191.68084000057206 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 5453852.418707284,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 183.35662999788838 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_mean",
            "value": 171725.19874286672,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.823257199995169 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_std",
            "value": 55404.55874141391,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 18.049056299992117 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_mean",
            "value": 2129794.4895233237,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 469.52887000088595 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_std",
            "value": 1209451.7688181188,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 826.8208999993476 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 55971.010643409965,
            "unit": "iter/sec",
            "range": "stddev: 0.00008409873363883393",
            "extra": "mean: 17.86639169999944 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 17076.400437174278,
            "unit": "iter/sec",
            "range": "stddev: 0.00013529399762731442",
            "extra": "mean: 58.56035079987123 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 5.0503242284924275,
            "unit": "iter/sec",
            "range": "stddev: 0.1889306982543803",
            "extra": "mean: 198.0070891999958 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 2298692.0442215162,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 435.03000000100656 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1957591.0604773245,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 510.83192000078265 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 7220242.672292784,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 138.4995000012168 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2420976.600173724,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 413.05644999965807 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2666833.8593716044,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 374.97648999988087 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 355314.8636878011,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.814405199999328 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 67719.04959079338,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 14.766893599994546 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 61723.70901297085,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 16.201229900002545 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.117788965378897,
            "unit": "iter/sec",
            "range": "stddev: 0.0052317693479561654",
            "extra": "mean: 320.74011779000335 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 9945346.343705336,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 100.54953999997451 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 4223668.7724410435,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 236.76099000113027 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 260340.9305068615,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.8411171000007016 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 94128.69612878584,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.62375281000186 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}