window.BENCHMARK_DATA = {
  "lastUpdate": 1632531169197,
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
          "id": "2df2fa884e256229b5d27458257bf49ff7b729ce",
          "message": "Streaming backtest (#443)\n\n- Streaming backtest plumbing done.\r\n\r\n- Fix streaming timestamps.\r\n\r\n- Cleanup `BacktestConfig`.\r\n\r\n- Add `Portfolio.balances_locked()`.\r\n\r\n- Add portfolio tests.\r\n\r\nCo-authored-by: cjdsellers <chris@cjdsellers.io>",
          "timestamp": "2021-09-25T10:31:18+10:00",
          "tree_id": "33baba841fb5eb9e9f37fb1307494556013f2e0c",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/2df2fa884e256229b5d27458257bf49ff7b729ce"
        },
        "date": 1632531161187,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 2.4572869106032145,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 406.9528859999991 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 7.7213206735268765,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 129.51152300001922 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 1.6339539927184603,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 612.012335999907 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 5789415.454856033,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 172.72901000069396 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 5003652.416084784,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 199.8540099998536 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 6086278.721993705,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 164.3040099997961 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 6896123.213300052,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 145.0090100001944 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 163.34531198941662,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.122000000004846 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 9652601.89271596,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 103.59900999901583 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 9850760.00102467,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 101.51500999882046 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 4356557.955019237,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 229.53900999937105 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 8831424.965356993,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 113.2320100009565 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2573201.0749796745,
            "unit": "iter/sec",
            "range": "stddev: 9.03666742696891e-7",
            "extra": "mean: 388.62100973119595 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 796427.4810453427,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018417812190310296",
            "extra": "mean: 1.2556071002063618 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 553124.2241463393,
            "unit": "iter/sec",
            "range": "stddev: 0.0000047108754866009795",
            "extra": "mean: 1.8079121404298348 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 572231.3072104674,
            "unit": "iter/sec",
            "range": "stddev: 0.000004112457835171589",
            "extra": "mean: 1.747545070322758 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3296750.390633306,
            "unit": "iter/sec",
            "range": "stddev: 9.733200354838534e-7",
            "extra": "mean: 303.32900023040565 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1080856.6834883925,
            "unit": "iter/sec",
            "range": "stddev: 0.000002122717649172459",
            "extra": "mean: 925.1920400515701 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2146272.4155422878,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010757170590568548",
            "extra": "mean: 465.92407970138083 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 3649514.90041337,
            "unit": "iter/sec",
            "range": "stddev: 7.74358809552468e-7",
            "extra": "mean: 274.0090196334677 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1219006.7094581833,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014028515856075612",
            "extra": "mean: 820.3400295019492 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 654806.3341649385,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017049178700865081",
            "extra": "mean: 1.5271690999679777 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 731975.4057355023,
            "unit": "iter/sec",
            "range": "stddev: 0.000003301222015655707",
            "extra": "mean: 1.3661661200148956 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 5760102.88926342,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 173.60800999995263 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 3421329.8223243398,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 292.2840099995483 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 6312931.642772655,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 158.4050099995693 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 10225785.340406442,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 97.79199999911725 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 4120805.3652424295,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 242.67101000077673 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 4226399.604982814,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 236.6080100000545 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 59671.599738166304,
            "unit": "iter/sec",
            "range": "stddev: 0.00008131746226133165",
            "extra": "mean: 16.758390999871153 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 9902.28662206313,
            "unit": "iter/sec",
            "range": "stddev: 0.00016386334077849243",
            "extra": "mean: 100.98677590001444 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 3.403244267701074,
            "unit": "iter/sec",
            "range": "stddev: 0.2570191009753711",
            "extra": "mean: 293.8372686000321 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 1741873.6282507677,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 574.0944600006515 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1504418.7863802023,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 664.7085300005529 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 5688018.768646799,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 175.80813999984457 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 1949962.3667000362,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 512.8304100003334 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 1977017.5661992705,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 505.81239999928584 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 277657.6229840285,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.601557879999291 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 42986.55338480495,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 23.26308860001518 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 37849.4816273094,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 26.4204411000037 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 2.8739670152986485,
            "unit": "iter/sec",
            "range": "stddev: 0.0013911650706005313",
            "extra": "mean: 347.95110544999943 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 9037899.346351275,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 110.64518000011958 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 3792742.8368836157,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 263.6614300013207 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 209734.71515782425,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.767927900002178 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_mean",
            "value": 119324.42472277749,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.380513900010556 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_std",
            "value": 35450.23614962653,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 28.208556799995677 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_mean",
            "value": 1624167.5613379662,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 615.7000200005314 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_std",
            "value": 947125.0846784484,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.0558267500005059 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 86108.45617692519,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.613261279999278 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}