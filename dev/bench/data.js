window.BENCHMARK_DATA = {
  "lastUpdate": 1630990811338,
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
          "id": "84570057fc3487899d2a603b8d5e78cb0fa81203",
          "message": "Standardize optional params to numpydoc spec",
          "timestamp": "2021-09-07T14:37:20+10:00",
          "tree_id": "4b2eec0ceb6f213b1047a6d204510507015a52fa",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/84570057fc3487899d2a603b8d5e78cb0fa81203"
        },
        "date": 1630990795487,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 0.21146721476493657,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.728865422999888 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 0.5256847414628115,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.9022808180000084 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 0.19668129080504257,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.084367689000146 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 5287819.729306352,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 189.11386000127095 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 4760913.358405161,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 210.04372999868792 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 4735258.335780929,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 211.1817200011501 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 4726954.113379414,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 211.55271999987235 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 147.00136329130015,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.802657999969597 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 8573072.151751792,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 116.6443000010986 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 8281417.815189842,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 120.75226999968437 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 4145429.2869857275,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 241.22953999949462 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 7281615.079710698,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 137.33216999980868 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2015291.1445932442,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022151943541638924",
            "extra": "mean: 496.20621947497057 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 736181.9691731111,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017641413688160209",
            "extra": "mean: 1.3583598103105032 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 529980.633479421,
            "unit": "iter/sec",
            "range": "stddev: 0.00000754526236850538",
            "extra": "mean: 1.8868613998870387 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 512095.0920993006,
            "unit": "iter/sec",
            "range": "stddev: 0.000003372713166376083",
            "extra": "mean: 1.952762319788235 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3186944.842858149,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010435263102263975",
            "extra": "mean: 313.7801403249796 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1024764.2375807483,
            "unit": "iter/sec",
            "range": "stddev: 0.000003464574877496294",
            "extra": "mean: 975.8342097893546 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 1942322.461725,
            "unit": "iter/sec",
            "range": "stddev: 0.00000934419392013365",
            "extra": "mean: 514.8475702185351 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 3384948.9557729424,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012480840835604422",
            "extra": "mean: 295.4254297674197 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1003929.107177496,
            "unit": "iter/sec",
            "range": "stddev: 0.000004385999394168783",
            "extra": "mean: 996.086270286014 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 548492.2671991532,
            "unit": "iter/sec",
            "range": "stddev: 0.0000036553450744835154",
            "extra": "mean: 1.82317975986507 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 585622.2373470549,
            "unit": "iter/sec",
            "range": "stddev: 0.000013203640228458268",
            "extra": "mean: 1.7075854300378523 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 5448287.551463078,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 183.5439100000258 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 3020235.2134989104,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 331.10004000036497 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 6053451.24812959,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 165.19501999937347 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 8184425.888702542,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 122.18328000017209 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 4110480.5085848025,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 243.28056000058493 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 3719554.516402242,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 268.84939999945345 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 62660.38866413769,
            "unit": "iter/sec",
            "range": "stddev: 0.00007096858392737344",
            "extra": "mean: 15.959045599925048 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 10684.55108939525,
            "unit": "iter/sec",
            "range": "stddev: 0.000163742169847396",
            "extra": "mean: 93.59307580011773 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 3.5225221531407214,
            "unit": "iter/sec",
            "range": "stddev: 0.2250420176000732",
            "extra": "mean: 283.8874977999467 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 1685875.8735439195,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 593.1634800003849 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1336256.0638629308,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 748.3595600001536 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 5407425.151775052,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 184.93089999992662 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 1860569.6197104708,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 537.469810001312 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 1810656.9910940437,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 552.2857200003273 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 254023.1771660631,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.936648660001083 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 41209.28464466769,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 24.266376100013076 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 37199.501589188505,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 26.882080599989422 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 2.612127182074557,
            "unit": "iter/sec",
            "range": "stddev: 0.006108277056589065",
            "extra": "mean: 382.82975150000084 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 8439228.775981085,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 118.49424000047293 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 3930560.516792178,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 254.41664000027234 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 230326.37869787274,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.341665099991587 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_mean",
            "value": 102113.7369965408,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.79300169999533 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_std",
            "value": 29577.860661325263,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 33.809071299992866 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_mean",
            "value": 1696306.4267613334,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 589.5161300009022 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_std",
            "value": 1025006.9510844254,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 975.6031400002031 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 78006.32714623793,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 12.819472940000196 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}