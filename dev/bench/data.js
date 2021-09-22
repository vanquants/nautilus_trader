window.BENCHMARK_DATA = {
  "lastUpdate": 1632297991281,
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
          "id": "58ba141635e46eca281454eb5bb2417e18403487",
          "message": "Add LIMIT order fill option flag",
          "timestamp": "2021-09-22T17:45:59+10:00",
          "tree_id": "23205095cb6075cfea30cf59b475364138a7eee5",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/58ba141635e46eca281454eb5bb2417e18403487"
        },
        "date": 1632297985771,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 2.5936332869881467,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 385.5595180000364 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 2.6619960207320887,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 375.65796199987744 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 1.7798812398450434,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 561.8352379999578 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 5843624.1502556885,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 171.12667999981568 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 5542100.874130885,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 180.4369899991798 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 6197424.536272244,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 161.357350000344 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 6591999.962023767,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 151.69903000014529 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 168.91329798587728,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.920197000023109 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 10493271.923886344,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 95.29916000019512 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 9200766.239692267,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 108.68660000141972 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 4721345.481477445,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 211.80403000016668 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 8982329.870795866,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 111.3296900007299 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2395438.7990971236,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012105269805655302",
            "extra": "mean: 417.4600496480707 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 801615.8588869139,
            "unit": "iter/sec",
            "range": "stddev: 0.0000044334497552318794",
            "extra": "mean: 1.2474803098189113 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 600610.9318486262,
            "unit": "iter/sec",
            "range": "stddev: 0.000014345481092669971",
            "extra": "mean: 1.664971359948595 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 610590.9765472313,
            "unit": "iter/sec",
            "range": "stddev: 0.000008076193033763434",
            "extra": "mean: 1.637757579803747 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3433754.1623935318,
            "unit": "iter/sec",
            "range": "stddev: 0.000001019624220279147",
            "extra": "mean: 291.2264398401021 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1147083.7726157424,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013043827610649666",
            "extra": "mean: 871.7759102455602 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2281431.0888865744,
            "unit": "iter/sec",
            "range": "stddev: 0.000001621797228293451",
            "extra": "mean: 438.3213698065447 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 3853247.0808716845,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011231711841021695",
            "extra": "mean: 259.52138002367064 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1139554.9470959476,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022430087572401553",
            "extra": "mean: 877.5355699594911 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 581607.3378067373,
            "unit": "iter/sec",
            "range": "stddev: 0.000022393946560607863",
            "extra": "mean: 1.7193730804206098 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 762907.090634717,
            "unit": "iter/sec",
            "range": "stddev: 0.000004123141514105116",
            "extra": "mean: 1.3107756006934324 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 5942489.537073422,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 168.2796399995823 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 3681409.3613036354,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 271.63510000036695 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 6330664.936996521,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 157.96128999909342 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 10654263.399444982,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 93.8591399994948 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 4264995.243472512,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 234.46684999953504 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 4410501.421555687,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 226.73158999850784 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 42410.00880283866,
            "unit": "iter/sec",
            "range": "stddev: 0.00014155297791241378",
            "extra": "mean: 23.579339599973537 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 11678.337309899218,
            "unit": "iter/sec",
            "range": "stddev: 0.00010854482978835485",
            "extra": "mean: 85.62862789999599 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 3.724907778481317,
            "unit": "iter/sec",
            "range": "stddev: 0.20689710617300366",
            "extra": "mean: 268.463022300034 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 1819749.0522351516,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 549.5263200009504 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1539615.8950871006,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 649.512649999906 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 5797244.279990893,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 172.4957499982338 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2069621.6586733276,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 483.1801000000269 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 1996618.9255142142,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 500.84669999932885 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 279584.18439586635,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.5767402299984496 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 49981.66422649667,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 20.00733699999273 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 41587.336050640806,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 24.04578160001165 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.000338205503352,
            "unit": "iter/sec",
            "range": "stddev: 0.005579937142633075",
            "extra": "mean: 333.2957591800004 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 9835704.393861916,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 101.67039999942062 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 3970863.077403004,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 251.834420000705 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 206415.7311907894,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.844591999994918 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_mean",
            "value": 119378.32400724552,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.37673010000799 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_std",
            "value": 37869.918571697526,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 26.406183000017336 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_mean",
            "value": 1846397.7638175597,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 541.5951100007987 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_std",
            "value": 1034610.4937711015,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 966.5473200016095 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 91710.03112818913,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.903932620001342 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}