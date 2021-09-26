window.BENCHMARK_DATA = {
  "lastUpdate": 1632636261544,
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
          "id": "fa863d07ad90590146186468c61c2be38aea29b3",
          "message": "Update README",
          "timestamp": "2021-09-26T14:55:34+10:00",
          "tree_id": "8408a3d99d8b1308006e89315293d9740491bf6c",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/fa863d07ad90590146186468c61c2be38aea29b3"
        },
        "date": 1632636253867,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 2.6426418179480526,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 378.4092089999831 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 8.466800304364863,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 118.1083720002789 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 1.694806786602697,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 590.0377600000866 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 7020698.493440692,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 142.43597000131558 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 6979975.914949847,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 143.26696999887645 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 7139391.478198308,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 140.0679600010335 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 10229343.937210253,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 97.75797999736824 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 162.72601219626793,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.145298999854276 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 11781063.542409515,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 84.88198000122793 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 12859093.39796952,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 77.76597999963997 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 6755982.101165588,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 148.01697000166314 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 12128565.707340159,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 82.44998000009218 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 3035159.9329520147,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015230416933389252",
            "extra": "mean: 329.47192968094896 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 939669.673249335,
            "unit": "iter/sec",
            "range": "stddev: 0.000004137488975880205",
            "extra": "mean: 1.0642037606066879 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 766503.3619535008,
            "unit": "iter/sec",
            "range": "stddev: 0.000004875597194740326",
            "extra": "mean: 1.3046257193855126 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 708590.8604892405,
            "unit": "iter/sec",
            "range": "stddev: 0.0000033617507858046574",
            "extra": "mean: 1.411251620306757 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 4630316.224489333,
            "unit": "iter/sec",
            "range": "stddev: 6.947818693894528e-7",
            "extra": "mean: 215.9679709802731 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1525481.1733109273,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013125783021600136",
            "extra": "mean: 655.5308695351414 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2792259.364603703,
            "unit": "iter/sec",
            "range": "stddev: 9.63726385222692e-7",
            "extra": "mean: 358.13292012790043 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 4577456.1665007,
            "unit": "iter/sec",
            "range": "stddev: 9.476253171198858e-7",
            "extra": "mean: 218.46194996214763 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1294838.9787815954,
            "unit": "iter/sec",
            "range": "stddev: 0.000002103269633417808",
            "extra": "mean: 772.296800132608 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 758745.6398969782,
            "unit": "iter/sec",
            "range": "stddev: 0.000007123313553098464",
            "extra": "mean: 1.3179647399829264 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 795503.2943605661,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024174015018828537",
            "extra": "mean: 1.2570658186950823 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 7475352.268602646,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 133.77295999816852 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 4134282.4874310046,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 241.8799399993077 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 9172042.476904353,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 109.02697000346961 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 15766907.090939384,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 63.42398000015237 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 4946284.585970834,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 202.17194999986532 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 5240130.005558551,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 190.83495999893785 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 44144.27378071502,
            "unit": "iter/sec",
            "range": "stddev: 0.00012438800014207276",
            "extra": "mean: 22.6529947002291 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 9270.207039050325,
            "unit": "iter/sec",
            "range": "stddev: 0.0001429694618852502",
            "extra": "mean: 107.8724558995873 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 3.2056971095079807,
            "unit": "iter/sec",
            "range": "stddev: 0.2660996941838591",
            "extra": "mean: 311.9446304000576 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 2496754.6558852587,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 400.5199299990636 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 2159878.94827287,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 462.9889100033324 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 8766625.247532578,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 114.06897999677312 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2960446.013698319,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 337.78693999920506 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2803979.9579199827,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 356.63593000208493 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 322354.01365186536,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.102179460001935 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 32706.12289070932,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 30.575314699990486 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 27655.942824995625,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 36.15859370001999 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.450306182844662,
            "unit": "iter/sec",
            "range": "stddev: 0.003888297112218309",
            "extra": "mean: 289.82935049999924 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 15155653.104844276,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 65.9819799966499 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 5287705.091478847,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 189.11796000338654 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 234740.731561401,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.260019100001955 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_mean",
            "value": 116235.97865724946,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.603188200004297 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_std",
            "value": 32609.049602150404,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 30.666333799990756 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_mean",
            "value": 1581000.497271436,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 632.5108700002602 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_std",
            "value": 1085100.280789062,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 921.573810001064 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 91973.04766629142,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.872750499997892 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}