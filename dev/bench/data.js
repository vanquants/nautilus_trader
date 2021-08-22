window.BENCHMARK_DATA = {
  "lastUpdate": 1629597342178,
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
          "id": "90fa1fbf4bc79ddca14b972d25fc03b25b8189e8",
          "message": "Add `TradingStateChanged` event\n\n- Event published by RiskEngine on state change.\n- Add serialization schema.\n- Improve throttling config.\n- Add stub.\n- Add tests.",
          "timestamp": "2021-08-22T11:34:22+10:00",
          "tree_id": "432f4971bfb38c776ddcd622bd80219cd1f7c6d8",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/90fa1fbf4bc79ddca14b972d25fc03b25b8189e8"
        },
        "date": 1629597336668,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 0.24663652874503217,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.054549442000052 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 0.3037494607137151,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.292186915000002 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 0.09065077315814091,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.031345516000101 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 5885161.894359717,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 169.91885999914302 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 5745513.070330059,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 174.0488599989476 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 5473907.661158568,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 182.68485000135115 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 7137917.703812547,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 140.09687999987364 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 169.51752768478642,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.899095000131638 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 9422680.826186879,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 106.12691000005725 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 9441362.154268822,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 105.91692000161856 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 4800979.47666274,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 208.290829998532 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 8165404.975465929,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 122.46790000062902 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2277869.459288704,
            "unit": "iter/sec",
            "range": "stddev: 5.495921568816566e-7",
            "extra": "mean: 439.00672003928776 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 753051.8611214021,
            "unit": "iter/sec",
            "range": "stddev: 7.0411255062323e-7",
            "extra": "mean: 1.327929790268172 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 596012.357745914,
            "unit": "iter/sec",
            "range": "stddev: 0.000001778239305405179",
            "extra": "mean: 1.677817560330368 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 598529.3903692176,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015677107975397",
            "extra": "mean: 1.6707617304859923 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3331725.554028898,
            "unit": "iter/sec",
            "range": "stddev: 3.978978066167003e-7",
            "extra": "mean: 300.1447699648452 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1092667.7173479064,
            "unit": "iter/sec",
            "range": "stddev: 0.000005280815213800101",
            "extra": "mean: 915.1913103346487 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2310228.1548022944,
            "unit": "iter/sec",
            "range": "stddev: 6.638933416553367e-7",
            "extra": "mean: 432.85768027772065 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 3755491.3729730505,
            "unit": "iter/sec",
            "range": "stddev: 7.421348055784414e-7",
            "extra": "mean: 266.2767400283883 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1015392.166753461,
            "unit": "iter/sec",
            "range": "stddev: 0.000001052508160854295",
            "extra": "mean: 984.8411606299122 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 572587.9278136822,
            "unit": "iter/sec",
            "range": "stddev: 0.0000064545845288096904",
            "extra": "mean: 1.7464566600597209 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 731417.6846672241,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015020054559561744",
            "extra": "mean: 1.3672078498552764 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 5964812.616008748,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 167.64985999998316 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 3473382.7903737705,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 287.9037699995024 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 6585581.475292913,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 151.84687999862945 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 9892966.022052309,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 101.08191999961491 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 3918344.8284493727,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 255.20980000010243 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 4262505.370233065,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 234.60380999949848 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_mean",
            "value": 120540.40723580534,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.295973300005244 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_std",
            "value": 39215.53341081403,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.500099400005638 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_mean",
            "value": 1771380.2137646403,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 564.5315399988249 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_std",
            "value": 1000525.0855711842,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 999.475189998975 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 32128.3440471212,
            "unit": "iter/sec",
            "range": "stddev: 0.00017714492825122907",
            "extra": "mean: 31.125164699847115 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 11080.13020526201,
            "unit": "iter/sec",
            "range": "stddev: 0.00015564914671790494",
            "extra": "mean: 90.25164700005917 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 3.7686004224844836,
            "unit": "iter/sec",
            "range": "stddev: 0.23184849487426418",
            "extra": "mean: 265.3504983000403 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 1852518.7929184763,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 539.8055900013787 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1583675.4481464538,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 631.4425099981236 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 6053603.325653738,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 165.1908700000604 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2147417.459927866,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 465.67564000042694 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2154510.087671183,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 464.1426400007731 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 283373.5160285089,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.5289112899999964 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 46188.92116787562,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 21.650213399993845 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 40199.565274683104,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 24.875890899988917 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 2.9337009277806856,
            "unit": "iter/sec",
            "range": "stddev: 0.0007809751977483432",
            "extra": "mean: 340.86637480000036 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 9255923.698597044,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 108.03892000012638 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 4107892.818978461,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 243.43381000107914 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 249377.37949679597,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.009986799997023 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 84669.84944694555,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.81057964000047 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}