window.BENCHMARK_DATA = {
  "lastUpdate": 1632304384213,
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
          "id": "40cf5f3446e6d35b45f47662d4016203d791d625",
          "message": "Fix fill dynamics for reduce-only orders",
          "timestamp": "2021-09-22T19:31:51+10:00",
          "tree_id": "f1e436f3f251f8d9ae89d689522ef011a50c8205",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/40cf5f3446e6d35b45f47662d4016203d791d625"
        },
        "date": 1632304378529,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 2.424946281801295,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 412.3802690000957 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 2.4695923111812683,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 404.92513499998495 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 1.7063921441182548,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 586.0317650001434 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 5591721.255386256,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 178.8358099997822 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 5254643.4364430895,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 190.307870000197 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 5595538.47570973,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 178.71381000077236 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 6320923.926978217,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 158.20471999859365 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 158.93629658352998,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.2918290000197885 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 9523312.497611878,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 105.00547999981791 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 9686874.682098975,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 103.23246999860203 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 4508525.418666238,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 221.8020100008289 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 8681043.864235032,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 115.19352000050276 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2488224.599987146,
            "unit": "iter/sec",
            "range": "stddev: 8.307793281081084e-7",
            "extra": "mean: 401.89298024188247 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 725033.6653943588,
            "unit": "iter/sec",
            "range": "stddev: 0.000001663126662231897",
            "extra": "mean: 1.379246299488841 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 542484.217518584,
            "unit": "iter/sec",
            "range": "stddev: 0.000003595137744295393",
            "extra": "mean: 1.8433715999594824 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 548144.3906666641,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025039216344566657",
            "extra": "mean: 1.8243368299067697 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3124330.027178803,
            "unit": "iter/sec",
            "range": "stddev: 6.090679429783119e-7",
            "extra": "mean: 320.0686199284064 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1116315.3862831234,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013120450959346616",
            "extra": "mean: 895.8041896471514 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2207315.1954119042,
            "unit": "iter/sec",
            "range": "stddev: 9.068700952321006e-7",
            "extra": "mean: 453.0390594322853 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 3463321.486094859,
            "unit": "iter/sec",
            "range": "stddev: 9.77366339047997e-7",
            "extra": "mean: 288.7401599923578 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1174130.5053239053,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023588787123175686",
            "extra": "mean: 851.6940795470873 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 566059.4010402418,
            "unit": "iter/sec",
            "range": "stddev: 0.000001920560337825967",
            "extra": "mean: 1.766599049785782 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 710988.0350688283,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018507058652565071",
            "extra": "mean: 1.4064934298130538 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 5657586.673838743,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 176.75380999889967 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 3405364.3956067027,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 293.6543300006633 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 5900513.6809536265,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 169.47677000189287 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 9886360.243612414,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 101.14945999930569 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 4109812.3784225723,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 243.32011000069542 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 4224006.14206518,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 236.74207999874852 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 39455.863710238045,
            "unit": "iter/sec",
            "range": "stddev: 0.00015141710595272873",
            "extra": "mean: 25.344775299913636 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 11779.648616089993,
            "unit": "iter/sec",
            "range": "stddev: 0.00011104960490712114",
            "extra": "mean: 84.89217569988341 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 3.760111853069385,
            "unit": "iter/sec",
            "range": "stddev: 0.20354582684430017",
            "extra": "mean: 265.9495353000466 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 1758246.1480637733,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 568.74857999901 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1396245.843988478,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 716.2062499992317 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 5661398.546675382,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 176.63479999782794 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 1972829.0150989466,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 506.8863000019519 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2049901.9521633482,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 487.82821000031623 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 279025.46806075494,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.583902240000043 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 45115.13506533637,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 22.165510500008168 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 39207.221204794245,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.505505600017386 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 2.794380221255233,
            "unit": "iter/sec",
            "range": "stddev: 0.004614873526654559",
            "extra": "mean: 357.8611072299964 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 8885699.515094778,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 112.54038000060973 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 3943733.025660982,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 253.56686000122863 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 213338.52627744272,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.687385900001573 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_mean",
            "value": 118608.50353942938,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.431098699998074 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_std",
            "value": 35610.37261213365,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 28.081705599993256 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_mean",
            "value": 1642405.4098096855,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 608.8630699991882 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_std",
            "value": 975904.4411538366,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.0246904900009213 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 85968.98945353093,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.632101370000782 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}