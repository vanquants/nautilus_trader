window.BENCHMARK_DATA = {
  "lastUpdate": 1632532937629,
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
          "id": "01591c9bc08af2c9a021aa211381c67511b3cbf3",
          "message": "Cleanups and update dependencies",
          "timestamp": "2021-09-25T11:01:19+10:00",
          "tree_id": "96cf2b08cb960252ceddd695b463a828fde35890",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/01591c9bc08af2c9a021aa211381c67511b3cbf3"
        },
        "date": 1632532930328,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 2.1877638573106277,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 457.08772300008604 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 7.132888727071695,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 140.19565399985368 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 1.557791198823915,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 641.9345550000344 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 5906198.6972365035,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 169.3136400012918 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 5916297.874252041,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 169.02461999961815 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 5768647.80299162,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 173.3508500001335 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 6822051.161557892,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 146.58348000011756 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 177.80663777427816,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.624086999887368 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 9611382.029465724,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 104.04330999790545 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 10146100.807937996,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 98.56002999867997 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 4575503.959741093,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 218.55515999959607 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 7377628.566101914,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 135.54490999922564 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2459001.50014472,
            "unit": "iter/sec",
            "range": "stddev: 0.000002864140640559749",
            "extra": "mean: 406.66912970209523 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 777030.3425432184,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025291306035500566",
            "extra": "mean: 1.2869510304153664 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 585137.3839691778,
            "unit": "iter/sec",
            "range": "stddev: 0.0000033501158407485774",
            "extra": "mean: 1.7090003602515935 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 587988.9785147689,
            "unit": "iter/sec",
            "range": "stddev: 0.0000029001986099882123",
            "extra": "mean: 1.700712150295658 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3312918.580263187,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016060548282878485",
            "extra": "mean: 301.8486496944206 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1111386.401021422,
            "unit": "iter/sec",
            "range": "stddev: 0.000002592845831276882",
            "extra": "mean: 899.7770704058894 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2257866.2022639085,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012135659418231764",
            "extra": "mean: 442.8960400741744 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 3832078.026525607,
            "unit": "iter/sec",
            "range": "stddev: 6.547564039412818e-7",
            "extra": "mean: 260.95502050793584 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1235658.010490734,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026956724116139386",
            "extra": "mean: 809.2854102915226 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 675565.5220883253,
            "unit": "iter/sec",
            "range": "stddev: 0.0000031485994970303924",
            "extra": "mean: 1.4802413197594433 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 747645.4513345684,
            "unit": "iter/sec",
            "range": "stddev: 0.000003959669554007385",
            "extra": "mean: 1.3375323801074046 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 5884545.453595651,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 169.93665999962104 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 3588986.405661337,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 278.6301999981333 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 6572083.000695165,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 152.15875999956552 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 10422867.186921008,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 95.94289000006029 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 4279522.855463451,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 233.67090999954598 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 4365445.785340013,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 229.07168000074307 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 69891.02186578738,
            "unit": "iter/sec",
            "range": "stddev: 0.00006232350155779892",
            "extra": "mean: 14.3079893998447 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 9457.710172887664,
            "unit": "iter/sec",
            "range": "stddev: 0.00017420862903243402",
            "extra": "mean: 105.73383850000937 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 3.3852294159633507,
            "unit": "iter/sec",
            "range": "stddev: 0.25276875094337864",
            "extra": "mean: 295.4009542999984 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 1820715.9900100154,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 549.2344799995408 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1477528.5999656846,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 676.8058500006191 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 6041701.758842161,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 165.5162800011567 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2100391.0466055432,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 476.10181999971246 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2134556.280392888,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 468.4814400002324 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 271264.8297770421,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.6864343999991434 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 45263.80972695131,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 22.092705099998966 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 37516.35248703286,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 26.655043300002035 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 2.824792763439638,
            "unit": "iter/sec",
            "range": "stddev: 0.0023775396740760577",
            "extra": "mean: 354.0082702500058 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 9982023.374254754,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 100.18008999850281 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 3892291.57343905,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 256.918059999407 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 209391.51955093458,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.775742600008925 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_mean",
            "value": 115666.31803297135,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.645559199999298 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_std",
            "value": 34593.41137276754,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 28.90723870000329 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_mean",
            "value": 1764755.326647537,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 566.6507899991302 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_std",
            "value": 1011992.9155235119,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 988.1492099998468 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 87525.15754202007,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.425286490000417 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}