window.BENCHMARK_DATA = {
  "lastUpdate": 1630187851478,
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
          "id": "15c16cbe28527649befcc17624b8170282b878a1",
          "message": "Drop Python 3.7 support",
          "timestamp": "2021-08-29T07:36:28+10:00",
          "tree_id": "39d3b0905a3b1824caaa1bb6f135b17210292697",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/15c16cbe28527649befcc17624b8170282b878a1"
        },
        "date": 1630187843126,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 0.27524239211628004,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.633161274000031 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 0.6805256652993953,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.4694522939998933 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 0.2639556164691366,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.7885157109999454 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 6313793.7831233,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 158.38338000094154 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 5738629.966325404,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 174.25762000129907 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 6338568.420314922,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 157.7643300015552 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 7423820.6499563735,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 134.7015300007115 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 167.33973497176666,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.975866999960999 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 9978462.486554425,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 100.21584000014627 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 10495442.616490193,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 95.27944999945248 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 5127330.8525703605,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 195.0332499995966 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 8910926.203431562,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 112.22178000025451 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2687781.810924399,
            "unit": "iter/sec",
            "range": "stddev: 2.1370562298867697e-7",
            "extra": "mean: 372.05400971743074 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 825422.906921657,
            "unit": "iter/sec",
            "range": "stddev: 4.649850063689439e-7",
            "extra": "mean: 1.2115001796223623 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 630499.8184915194,
            "unit": "iter/sec",
            "range": "stddev: 5.600096217161912e-7",
            "extra": "mean: 1.5860432797467183 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 633784.1816033556,
            "unit": "iter/sec",
            "range": "stddev: 5.415699452439954e-7",
            "extra": "mean: 1.577824169530686 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3545589.3330451543,
            "unit": "iter/sec",
            "range": "stddev: 2.0524599956087312e-7",
            "extra": "mean: 282.0405597117315 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1159317.234976106,
            "unit": "iter/sec",
            "range": "stddev: 3.7791952899533684e-7",
            "extra": "mean: 862.5766699833548 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2388651.4587183218,
            "unit": "iter/sec",
            "range": "stddev: 2.4948707759498594e-7",
            "extra": "mean: 418.6462601523999 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 4014286.849316382,
            "unit": "iter/sec",
            "range": "stddev: 2.6168605884315285e-7",
            "extra": "mean: 249.11024984930918 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1281785.0815624879,
            "unit": "iter/sec",
            "range": "stddev: 3.5378562645852457e-7",
            "extra": "mean: 780.1619900124024 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 690801.4934142715,
            "unit": "iter/sec",
            "range": "stddev: 5.831008388262411e-7",
            "extra": "mean: 1.4475938595001026 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 798064.5657531184,
            "unit": "iter/sec",
            "range": "stddev: 6.174121642262874e-7",
            "extra": "mean: 1.2530314499758788 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 6237348.707657276,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 160.32452999979796 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 3849376.9590975842,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 259.7822999996424 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 7296516.037588464,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 137.05171000083283 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 10208076.323851468,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 97.96164999897883 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 4574082.271004983,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 218.62308999970992 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 4910049.8507747585,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 203.66391999914413 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_mean",
            "value": 138244.60757570504,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.233555199991315 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_std",
            "value": 46777.75941695047,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 21.3776806000169 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_mean",
            "value": 1923829.3623334076,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 519.7966200012161 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_std",
            "value": 1080875.0721351944,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 925.1762999997482 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 61754.40472077358,
            "unit": "iter/sec",
            "range": "stddev: 0.00008238014915115171",
            "extra": "mean: 16.193176900037543 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 14234.338551935249,
            "unit": "iter/sec",
            "range": "stddev: 0.00015216777173200792",
            "extra": "mean: 70.25264969997806 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 4.1603459968730805,
            "unit": "iter/sec",
            "range": "stddev: 0.20093665536139854",
            "extra": "mean: 240.36462369995206 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 1933800.5537241735,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 517.1164100011083 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1645436.4502892827,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 607.7414900005351 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 5583379.707938992,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 179.10299000050145 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2235801.136847381,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 447.26696999987325 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2235611.0483890907,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 447.3050000001422 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 310082.87203521415,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.224944329999744 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 61222.89800058488,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 16.333757999996124 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 52724.61291431066,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 18.966474000012568 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 2.953580024864187,
            "unit": "iter/sec",
            "range": "stddev: 0.0017265049395949303",
            "extra": "mean: 338.5721705800006 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 9535051.80409863,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 104.87619999821618 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 4396304.519181504,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 227.46376999975837 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 270238.19226668193,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.700439199997163 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 92047.93261700592,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.86390505000054 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}