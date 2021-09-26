window.BENCHMARK_DATA = {
  "lastUpdate": 1632636085115,
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
          "id": "fa863d07ad90590146186468c61c2be38aea29b3",
          "message": "Update README",
          "timestamp": "2021-09-26T14:55:34+10:00",
          "tree_id": "8408a3d99d8b1308006e89315293d9740491bf6c",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/fa863d07ad90590146186468c61c2be38aea29b3"
        },
        "date": 1632636077375,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 2.74174323681282,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 364.73145500031023 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 8.332251390477902,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 120.01558200017826 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 1.920549631190775,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 520.6842789998518 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 6743516.227149337,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 148.29059000021516 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 6020042.648408887,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 166.11177999948268 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 7037915.29052981,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 142.08753000275465 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 7878273.737836375,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 126.93136000052618 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 190.41612779164987,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.251655999927607 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 11567656.969579043,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 86.44793000257778 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 11657332.252102517,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 85.78292000038346 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 5026486.315691262,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 198.94612999905803 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 10173555.774851704,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 98.29404999891267 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2879425.33454356,
            "unit": "iter/sec",
            "range": "stddev: 8.442364596844404e-7",
            "extra": "mean: 347.2915195970927 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 805216.3656553191,
            "unit": "iter/sec",
            "range": "stddev: 0.000006762430341887239",
            "extra": "mean: 1.2419022298263371 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 615790.7341742476,
            "unit": "iter/sec",
            "range": "stddev: 0.000008107025805900979",
            "extra": "mean: 1.623928299832187 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 600982.2081696086,
            "unit": "iter/sec",
            "range": "stddev: 0.000009655813703082707",
            "extra": "mean: 1.6639427696964049 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3759975.2057443494,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020057312721247036",
            "extra": "mean: 265.9592006011735 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1250430.0853941815,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010700463686401055",
            "extra": "mean: 799.724840021554 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2407277.215419183,
            "unit": "iter/sec",
            "range": "stddev: 9.114869495958635e-7",
            "extra": "mean: 415.40708049524255 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 4188751.6698788623,
            "unit": "iter/sec",
            "range": "stddev: 7.989280238777545e-7",
            "extra": "mean: 238.73461088442127 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1293194.0556642031,
            "unit": "iter/sec",
            "range": "stddev: 0.0000072254416098460275",
            "extra": "mean: 773.2791498847291 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 749748.3618038206,
            "unit": "iter/sec",
            "range": "stddev: 0.000001231431174884055",
            "extra": "mean: 1.3337808402729934 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 789308.5942123958,
            "unit": "iter/sec",
            "range": "stddev: 0.000003956934192225001",
            "extra": "mean: 1.2669315997982267 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 6746787.011307603,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 148.21870000105264 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 4058625.7119796984,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 246.38882000090234 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 7508661.992301527,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 133.17952000306832 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 11323872.8412094,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 88.30901000237645 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 4447793.929782192,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 224.83056000055512 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 4657565.318283168,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 214.7044499997719 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 78272.64360678477,
            "unit": "iter/sec",
            "range": "stddev: 0.00005554066454878861",
            "extra": "mean: 12.7758557002835 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 8629.414037412667,
            "unit": "iter/sec",
            "range": "stddev: 0.0001621149189234442",
            "extra": "mean: 115.88272339981813 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 3.3601401178952406,
            "unit": "iter/sec",
            "range": "stddev: 0.20792530231527642",
            "extra": "mean: 297.60663690012734 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 2009800.5916128247,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 497.5617999980386 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1726740.6651007761,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 579.1257600003519 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 6480595.800051871,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 154.3068000000858 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2368686.3642071728,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 422.1749299995281 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 1938239.8479447751,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 515.9320200027651 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 304893.64018605347,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.2798322700000426 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 31821.345496356673,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 31.42544679999446 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 28064.821812874943,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 35.63179580000906 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.0838740027235363,
            "unit": "iter/sec",
            "range": "stddev: 0.0024480033817840382",
            "extra": "mean: 324.26746330000697 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 10737564.370491516,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 93.13098999882641 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 4425123.568214252,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 225.9823900021729 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 247932.0852523977,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.033362600011969 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_mean",
            "value": 127793.1966660178,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.825142699994103 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_std",
            "value": 38905.280569739574,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.703451700019286 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_mean",
            "value": 1918525.9213334417,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 521.2335099986376 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_std",
            "value": 1100016.0921363095,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 909.0776099992581 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 95776.69823708475,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.440952950002611 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}