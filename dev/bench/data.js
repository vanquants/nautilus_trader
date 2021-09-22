window.BENCHMARK_DATA = {
  "lastUpdate": 1632275047725,
  "repoUrl": "https://github.com/nautechsystems/nautilus_trader",
  "entries": {
    "Benchmark with pytest-benchmark": [
      {
        "commit": {
          "author": {
            "email": "bradley.mcelroy@live.com",
            "name": "Bradley McElroy",
            "username": "limx0"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "19e709aa08d1670b114cb08ab4187bcd5d863cf4",
          "message": "Fix bug in overwriting parquet instruments (#441)\n\n* Fix bug in overwriting parquet instruments\r\n\r\n* Fix rewriting already validated files\r\n\r\n* Fix test",
          "timestamp": "2021-09-22T11:23:44+10:00",
          "tree_id": "4758db421b1a07a6c0365b6426e2fe9a524022a5",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/19e709aa08d1670b114cb08ab4187bcd5d863cf4"
        },
        "date": 1632275042662,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2801124.5279452223,
            "unit": "iter/sec",
            "range": "stddev: 8.589730429547844e-7",
            "extra": "mean: 356.99948003866666 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 909154.252106581,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025629432324244145",
            "extra": "mean: 1.0999233602910863 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 559528.9102094355,
            "unit": "iter/sec",
            "range": "stddev: 0.00000533829465353286",
            "extra": "mean: 1.787217750063519 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 588242.7889212853,
            "unit": "iter/sec",
            "range": "stddev: 0.000013344841017230122",
            "extra": "mean: 1.6999783402934554 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3671167.5005053096,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010372101711831109",
            "extra": "mean: 272.39291039222735 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1197738.8938731838,
            "unit": "iter/sec",
            "range": "stddev: 0.000005162844726427423",
            "extra": "mean: 834.9065101879205 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2377818.1330936793,
            "unit": "iter/sec",
            "range": "stddev: 0.000004433442730840144",
            "extra": "mean: 420.55361008578984 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 3784690.8982075457,
            "unit": "iter/sec",
            "range": "stddev: 0.000006619488594230913",
            "extra": "mean: 264.22237030601536 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1265964.3808803628,
            "unit": "iter/sec",
            "range": "stddev: 0.000004352776576375549",
            "extra": "mean: 789.9116397766193 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 673748.9038553153,
            "unit": "iter/sec",
            "range": "stddev: 0.00000507925024226079",
            "extra": "mean: 1.4842324704022758 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 778799.2282131127,
            "unit": "iter/sec",
            "range": "stddev: 0.000008820870695452132",
            "extra": "mean: 1.2840279802207988 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 5115238.915645462,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 195.4942900010792 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 3409542.867241321,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 293.2944500003032 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 6613853.721883276,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 151.1977800009845 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 11119877.281017378,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 89.92905000013707 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 4305561.756732802,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 232.25773000149275 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 4929304.166074933,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 202.86839000164036 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 52317.44080217375,
            "unit": "iter/sec",
            "range": "stddev: 0.0001024742135055094",
            "extra": "mean: 19.11408479977581 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 9963.805470285475,
            "unit": "iter/sec",
            "range": "stddev: 0.0001260493108456414",
            "extra": "mean: 100.36326009999357 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 3.848422368287037,
            "unit": "iter/sec",
            "range": "stddev: 0.21822811379752044",
            "extra": "mean: 259.84673829996154 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 2019106.1962043734,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 495.2686499996161 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1655051.295994782,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 604.2108800011192 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 5800263.181156887,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 172.40596999954505 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2278802.3526334646,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 438.8270000004013 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2287397.9151471835,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 437.1779799998876 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 292889.1570854256,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.4142609100013033 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 50142.28550435523,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 19.943247299988798 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 42254.55124509264,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 23.666089700009252 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.086554887603666,
            "unit": "iter/sec",
            "range": "stddev: 0.0032341181114293764",
            "extra": "mean: 323.9858147399991 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 10865691.362133011,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 92.03280000065206 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 4412147.91391115,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 226.64697999971395 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 203370.54960135426,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.917132800005675 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_mean",
            "value": 109804.08502583273,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.107129300014094 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_std",
            "value": 38078.99279908046,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 26.26119879998896 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_mean",
            "value": 1581741.6148859588,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 632.2145099989029 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_std",
            "value": 1044563.8733798515,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 957.3373399985029 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 89597.91285318519,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.16097426999886 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 2.737899653300944,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 365.24348099987947 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 2.7712212760792636,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 360.85173300011775 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 1.9021925679700642,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 525.7091299999956 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 6390972.470233838,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 156.47070999875723 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 5733718.104098697,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 174.40689999830283 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 6225845.664384871,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 160.62075000036202 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 6966089.147673527,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 143.55257000033816 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 195.26078640042138,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.12135600001784 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 10785274.777891843,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 92.71901000147409 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 11212023.05606922,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 89.18996999909723 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 4657697.865743315,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 214.69834000072296 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 9867176.944421384,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 101.34611000012228 nsec\nrounds: 1"
          }
        ]
      }
    ]
  }
}