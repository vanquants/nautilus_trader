window.BENCHMARK_DATA = {
  "lastUpdate": 1632995592726,
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
          "id": "3b3b5c48baefea534dd32275093dae111352f60d",
          "message": "Refactor `SimulatedExchange`\n\n- Separate bid and ask side orders sorted by price.\n- Simplify exchange order index/cache.\n- Improve market order execution for running on bar data.\n- Add `bar_execution` mode.",
          "timestamp": "2021-09-30T19:01:27+10:00",
          "tree_id": "335012c9a0b5918c11cd19355aa488dbf716f3d8",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/3b3b5c48baefea534dd32275093dae111352f60d"
        },
        "date": 1632995582263,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 2.4171645387107437,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 413.70787299956646 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 7.7191555685543936,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 129.54784899966398 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 0.9195314632623014,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.0875103680000393 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 6164769.366443848,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 162.21206999944116 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 5663366.226768392,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 176.5734299988253 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 3941346.924620237,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 253.72036999669942 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 6806069.489515633,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 146.92767999804346 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 170.8745375952546,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.852246999893396 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 9680767.963811148,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 103.29758999887417 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 10356853.679301651,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 96.55441999711911 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 4497422.482221644,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 222.34957999899052 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 8575305.589626122,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 116.61391999950865 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2522804.8288676166,
            "unit": "iter/sec",
            "range": "stddev: 6.371058639225883e-7",
            "extra": "mean: 396.3842103667048 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 803379.9544684252,
            "unit": "iter/sec",
            "range": "stddev: 0.00001807994981353322",
            "extra": "mean: 1.2447410399499859 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 633875.3083027422,
            "unit": "iter/sec",
            "range": "stddev: 0.000004462819201457484",
            "extra": "mean: 1.577597339573913 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 596463.2769195365,
            "unit": "iter/sec",
            "range": "stddev: 0.000029660278908189886",
            "extra": "mean: 1.6765491501246288 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3369983.590799024,
            "unit": "iter/sec",
            "range": "stddev: 0.000001846080507544905",
            "extra": "mean: 296.73734991774836 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1076502.3147968322,
            "unit": "iter/sec",
            "range": "stddev: 0.0000036231666138126733",
            "extra": "mean: 928.9343703721897 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2109278.8716118853,
            "unit": "iter/sec",
            "range": "stddev: 0.0000034145585451447602",
            "extra": "mean: 474.09567955128296 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 3778790.215766692,
            "unit": "iter/sec",
            "range": "stddev: 8.028995403564801e-7",
            "extra": "mean: 264.63496063570346 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1238523.3941291706,
            "unit": "iter/sec",
            "range": "stddev: 0.000002095818531352194",
            "extra": "mean: 807.4130894419795 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 659220.8199338869,
            "unit": "iter/sec",
            "range": "stddev: 0.0000038273374339164426",
            "extra": "mean: 1.5169423807037674 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 715062.0926353313,
            "unit": "iter/sec",
            "range": "stddev: 0.000005256045635303462",
            "extra": "mean: 1.3984799506215495 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 6045615.133494768,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 165.4091399996105 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 3360797.2080018395,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 297.54844999843044 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 6760744.682536182,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 147.9126999993241 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 9868011.400335297,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 101.337539999804 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 4355974.410579834,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 229.56975999932183 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 4300431.036468158,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 232.5348300018959 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 70875.83509143336,
            "unit": "iter/sec",
            "range": "stddev: 0.00006140601369905396",
            "extra": "mean: 14.109181199910381 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 7904.219844586473,
            "unit": "iter/sec",
            "range": "stddev: 0.0001779993909331445",
            "extra": "mean: 126.51469969991922 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 3.0612001894884218,
            "unit": "iter/sec",
            "range": "stddev: 0.22778103294099003",
            "extra": "mean: 326.66925980006454 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 1776267.9973424617,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 562.9781100014952 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1510645.6711038898,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 661.9686000021829 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 5953401.181123163,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 167.97120999854087 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2136575.321446264,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 468.03873000044405 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 1994226.4352782401,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 501.4475699999821 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 228666.20561766208,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.373186660000101 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 24176.992742872506,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 41.361637099998916 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 21622.056540532878,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 46.24906969997937 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 2.852470453002406,
            "unit": "iter/sec",
            "range": "stddev: 0.002420663625919017",
            "extra": "mean: 350.5733070600036 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 9835109.47189384,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 101.67655000259401 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 4071393.51381586,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 245.61615000038725 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 193253.53083396723,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.174549699995623 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_mean",
            "value": 119021.5391615758,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.40184059998137 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_std",
            "value": 36417.11204550929,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 27.459618400007457 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_mean",
            "value": 1802844.8531124636,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 554.6789000027275 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_std",
            "value": 931730.338493907,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.0732719099996757 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 86398.23034860802,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.574311139997917 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}