window.BENCHMARK_DATA = {
  "lastUpdate": 1632304221144,
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
          "id": "016630476aa7a3350b85c78004abfdf09da66b7a",
          "message": "Fix fill dynamics for reduce-only orders",
          "timestamp": "2021-09-22T19:33:04+10:00",
          "tree_id": "9a363685fddc510e8c6317b5a46af9f686814924",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/016630476aa7a3350b85c78004abfdf09da66b7a"
        },
        "date": 1632304215885,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 3.3747425493282215,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 296.3188999999602 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 3.3522374720204025,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 298.308221999946 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 2.245053115262443,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 445.4237600000397 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 8527380.993996216,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 117.26930000008906 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 7279899.694641383,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 137.3645299997861 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 8314048.896891483,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 120.2783400003682 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 9975647.449439414,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 100.24412000007032 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 203.0104418416469,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.925855000010415 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 12865896.445451451,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 77.72486000021672 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 14343954.840775484,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 69.71577999934198 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 6119957.782049356,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 163.39982000090458 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 12053430.93073333,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 82.96393000023272 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 3428683.6532020373,
            "unit": "iter/sec",
            "range": "stddev: 2.296579212684917e-7",
            "extra": "mean: 291.65712009216804 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 1053169.5601742764,
            "unit": "iter/sec",
            "range": "stddev: 4.284135674140134e-7",
            "extra": "mean: 949.514719960689 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 847588.3138248371,
            "unit": "iter/sec",
            "range": "stddev: 4.91127900346221e-7",
            "extra": "mean: 1.1798180598873387 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 841078.7858666775,
            "unit": "iter/sec",
            "range": "stddev: 4.772160786390844e-7",
            "extra": "mean: 1.188949259931178 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 4558001.063215154,
            "unit": "iter/sec",
            "range": "stddev: 3.1224655948407326e-7",
            "extra": "mean: 219.39442008260812 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1518897.0923648127,
            "unit": "iter/sec",
            "range": "stddev: 2.904659774902553e-7",
            "extra": "mean: 658.3724500012522 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2923252.3772061775,
            "unit": "iter/sec",
            "range": "stddev: 2.9512732577776874e-7",
            "extra": "mean: 342.08472993896066 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 4978234.162089141,
            "unit": "iter/sec",
            "range": "stddev: 2.452393183397233e-7",
            "extra": "mean: 200.8744401007334 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1643412.9759938798,
            "unit": "iter/sec",
            "range": "stddev: 3.201962234581874e-7",
            "extra": "mean: 608.4897798712063 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 891530.4658966518,
            "unit": "iter/sec",
            "range": "stddev: 4.596995580980757e-7",
            "extra": "mean: 1.1216666600330427 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 1026910.6345612428,
            "unit": "iter/sec",
            "range": "stddev: 4.6852502828363374e-7",
            "extra": "mean: 973.7945701840545 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 7603610.407138351,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 131.516469999724 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 5004523.588857874,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 199.8192200005633 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 9704861.572812643,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 103.0411399995046 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 13196644.251706166,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 75.77684000011686 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 5859023.687455032,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 170.6768999997621 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 5771575.027619615,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 173.2629299999644 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 60637.58075545046,
            "unit": "iter/sec",
            "range": "stddev: 0.00010063632057482933",
            "extra": "mean: 16.491423100023894 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 20627.496998472412,
            "unit": "iter/sec",
            "range": "stddev: 0.00008615927022444792",
            "extra": "mean: 48.478979300011815 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 5.551451549389437,
            "unit": "iter/sec",
            "range": "stddev: 0.1497311292198647",
            "extra": "mean: 180.13306809999676 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 2237067.051184086,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 447.013870000319 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1949816.671412921,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 512.8687299998091 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 7297682.693804449,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 137.0298000006187 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2887806.9110643575,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 346.28354000005857 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2607276.1150308317,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 383.54203999915626 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 365055.8387951072,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.7393069599997943 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 79837.1673070144,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 12.525494500005152 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 64569.06191602914,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 15.487293300009242 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.686293452772621,
            "unit": "iter/sec",
            "range": "stddev: 0.0021863990811224632",
            "extra": "mean: 271.27520171999777 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 11967434.218087416,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 83.56009999943126 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 5227104.355132384,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 191.31050999931176 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 278093.16632726236,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.5959172000048056 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_mean",
            "value": 182286.09032654256,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.485882099992523 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_std",
            "value": 60585.73023814244,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 16.505536799991205 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_mean",
            "value": 2482145.3082585465,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 402.87730000045485 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_std",
            "value": 1406178.3398372661,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 711.1473499981003 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 106837.0019986343,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.36005299000044 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}