window.BENCHMARK_DATA = {
  "lastUpdate": 1632298196057,
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
          "id": "0e17f11795e5884f1e19b866be6d2ae1bc764d30",
          "message": "Add LIMIT order fill option flag",
          "timestamp": "2021-09-22T17:49:03+10:00",
          "tree_id": "74e5a1fdf0078394ef4204563b31deb72cbcea8a",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/0e17f11795e5884f1e19b866be6d2ae1bc764d30"
        },
        "date": 1632298190457,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 2.471814834729189,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 404.56104800000503 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 2.677642544809914,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 373.46284399995966 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 1.6758688597825948,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 596.7054010000084 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 5847128.463522221,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 171.02411999985634 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 5829947.542735821,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 171.5281299993876 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 6203589.396828779,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 161.1969999999019 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 6779484.980110683,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 147.5038300009146 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 182.73290953558813,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.472468000107256 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 11050196.290298233,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 90.49612999888268 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 8620136.777503658,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 116.00743999906626 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 4681304.951204159,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 213.61565000006522 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 8847881.905552225,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 113.02139999997962 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2384099.448908493,
            "unit": "iter/sec",
            "range": "stddev: 0.00001581532039823067",
            "extra": "mean: 419.4455900142202 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 750330.6444966517,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019942580579774725",
            "extra": "mean: 1.3327457799232434 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 637281.3150993624,
            "unit": "iter/sec",
            "range": "stddev: 0.000003438958704670648",
            "extra": "mean: 1.5691657299635153 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 642116.6301808442,
            "unit": "iter/sec",
            "range": "stddev: 0.00000217298878687286",
            "extra": "mean: 1.557349479826371 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3440734.3662265334,
            "unit": "iter/sec",
            "range": "stddev: 9.379153144083301e-7",
            "extra": "mean: 290.63562994451786 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1108695.202714712,
            "unit": "iter/sec",
            "range": "stddev: 0.000013982070885679433",
            "extra": "mean: 901.9611499638813 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2282220.950078704,
            "unit": "iter/sec",
            "range": "stddev: 7.942176605368329e-7",
            "extra": "mean: 438.16966975327887 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 3714280.0443423972,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014760852474439947",
            "extra": "mean: 269.2311802184122 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1255205.3678146494,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012813284243080387",
            "extra": "mean: 796.6823801439205 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 680422.7507971349,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025452710836308797",
            "extra": "mean: 1.4696745498713426 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 770436.2055373474,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020279932435793185",
            "extra": "mean: 1.2979660000564763 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 6373041.524521993,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 156.9109499996557 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 3733191.491982136,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 267.86731999891344 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 6213959.423701568,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 160.92799000034574 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 10233716.596225142,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 97.71621000027153 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 4265776.473076966,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 234.4239099988954 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 4547155.181473366,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 219.9177200009217 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 43572.23538294737,
            "unit": "iter/sec",
            "range": "stddev: 0.00013409964761416265",
            "extra": "mean: 22.950394700001198 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 10807.92155543724,
            "unit": "iter/sec",
            "range": "stddev: 0.00011602670395841489",
            "extra": "mean: 92.52472779994605 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 3.4586016054154567,
            "unit": "iter/sec",
            "range": "stddev: 0.22207834025109177",
            "extra": "mean: 289.1341976000376 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 1801096.5183676824,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 555.2173299997776 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1527492.6373352266,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 654.6676399989337 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 5566584.505674756,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 179.64337000194064 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2063389.8110573909,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 484.63940000146977 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2048624.3446540583,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 488.1324400002995 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 279600.05326166336,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.5765372299988485 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 42720.329597925556,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 23.40805910000654 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 39094.6342622525,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.57895779998489 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 2.9246710303608183,
            "unit": "iter/sec",
            "range": "stddev: 0.0035597408390971863",
            "extra": "mean: 341.91879688999734 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 10037095.09607493,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 99.63041999981215 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 4097596.8905647416,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 244.04547999893114 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 207648.59047617868,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.815828499999952 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_mean",
            "value": 125243.38547081375,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.9844536000109665 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_std",
            "value": 38148.05986083361,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 26.213652899991757 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_mean",
            "value": 1759503.682015214,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 568.3420900004421 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_std",
            "value": 961554.3641679455,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.0399828000004163 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 88675.74825450093,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.277040449999731 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}