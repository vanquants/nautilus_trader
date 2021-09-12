window.BENCHMARK_DATA = {
  "lastUpdate": 1631431922051,
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
          "id": "82ea6be8f2141de988ac8fee18c96b48d8719b36",
          "message": "Refactor and fix accounting (#433 and #435)\n\n- Commissions now correctly accounted for in PnLs.\n- Commission rebates correctly credited to account.\n- Separated concepts of locked balance and margins between `CASH` and `MARGIN` accounts.",
          "timestamp": "2021-09-12T17:10:53+10:00",
          "tree_id": "f405536c397d6e7acfeb53a9367ec163c5ff0a10",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/82ea6be8f2141de988ac8fee18c96b48d8719b36"
        },
        "date": 1631431918280,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 0.234493165466195,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.264516613999831 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 0.6039236854202961,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.6558383519998188 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 0.22203573105650357,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.503779617999953 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 5739791.379278862,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 174.22235999902114 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 5505776.605769544,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 181.62741999958598 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 5521584.924613202,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 181.10741999862512 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 6899638.479674024,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 144.93512999933955 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 159.80187124687512,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.257749000042168 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 9353850.943050953,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 106.9078399996215 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 7650757.0194719685,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 130.70601999970677 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 4676706.964175445,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 213.82566999818664 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 8329172.911469665,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 120.05993999991917 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2212773.3875386203,
            "unit": "iter/sec",
            "range": "stddev: 0.00000921745382705659",
            "extra": "mean: 451.92155944732804 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 730044.9280144946,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014811144506433558",
            "extra": "mean: 1.3697787103592418 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 556335.0829523547,
            "unit": "iter/sec",
            "range": "stddev: 0.00000245202482838317",
            "extra": "mean: 1.7974778701591276 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 557846.4946981599,
            "unit": "iter/sec",
            "range": "stddev: 0.0000033428919393241264",
            "extra": "mean: 1.7926078401569612 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3020440.1919733114,
            "unit": "iter/sec",
            "range": "stddev: 6.527862085709709e-7",
            "extra": "mean: 331.07757030165885 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1100867.5145529017,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012213449494195817",
            "extra": "mean: 908.3745198950055 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2154602.3250266793,
            "unit": "iter/sec",
            "range": "stddev: 5.26767862842319e-7",
            "extra": "mean: 464.12277030640325 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 3503163.302596679,
            "unit": "iter/sec",
            "range": "stddev: 6.120960780891554e-7",
            "extra": "mean: 285.4562901075042 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1064958.711140308,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017666569121949429",
            "extra": "mean: 939.0035402680041 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 591570.2016496824,
            "unit": "iter/sec",
            "range": "stddev: 0.0000029524860148218113",
            "extra": "mean: 1.6904164496645535 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 710120.305801158,
            "unit": "iter/sec",
            "range": "stddev: 0.000003882763399972617",
            "extra": "mean: 1.408212090022971 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 5911551.484863701,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 169.16033000143216 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 3352101.301595363,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 298.32033999809937 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 6418640.96568917,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 155.79622000132076 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 9478779.00428316,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 105.4988200007756 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 4123594.0090917787,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 242.50689999917086 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 4235011.816743669,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 236.12684999989142 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 57430.810302530626,
            "unit": "iter/sec",
            "range": "stddev: 0.00008716266569471347",
            "extra": "mean: 17.412256500165313 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 11226.724191267685,
            "unit": "iter/sec",
            "range": "stddev: 0.00013811604873568056",
            "extra": "mean: 89.07317779996902 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 3.6590636556361824,
            "unit": "iter/sec",
            "range": "stddev: 0.21730564089973442",
            "extra": "mean: 273.29396100001304 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 1787361.307239647,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 559.483970000656 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1551971.907574267,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 644.3415599983382 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 5817057.497317193,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 171.90821999975014 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2058132.1907081644,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 485.8774399986032 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2056511.0734384602,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 486.26044999991797 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 274096.59427669586,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.648348869999154 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 46462.63122543694,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 21.522672600008264 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 39938.1796916783,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.038697499985574 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 2.813641414845451,
            "unit": "iter/sec",
            "range": "stddev: 0.0018223775420594288",
            "extra": "mean: 355.41131670999675 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 8980064.078205502,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 111.35777999925267 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 3846259.9141795924,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 259.9928299991916 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 214276.2448053073,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.66687290002028 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_mean",
            "value": 115336.91469845631,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.670250999989548 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_std",
            "value": 33753.61250147202,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 29.626458500001718 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_mean",
            "value": 1600841.68413498,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 624.6713900009127 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_std",
            "value": 974681.4694673818,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.0259762099985892 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 87310.63408302379,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.45335857999953 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}