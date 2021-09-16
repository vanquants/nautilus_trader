window.BENCHMARK_DATA = {
  "lastUpdate": 1631766001228,
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
          "id": "acc44527c80bc7e4070120c6d48bd9da640077b8",
          "message": "Add bar processing hook",
          "timestamp": "2021-09-16T14:01:58+10:00",
          "tree_id": "f8b96652fee6286e57686f22bc18f98f7ff23d72",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/acc44527c80bc7e4070120c6d48bd9da640077b8"
        },
        "date": 1631765996112,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 6960489.823585624,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 143.66805000008753 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 4234511.838920715,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 236.15472999949816 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 8060881.5815729685,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 124.0559099994698 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 13021077.47856733,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 76.79855999981555 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 5160533.355591444,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 193.77841999926204 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 5354655.715184709,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 186.75336999990577 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 74370.4618492702,
            "unit": "iter/sec",
            "range": "stddev: 0.00006494179483929341",
            "extra": "mean: 13.446198600013304 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 14043.767792741392,
            "unit": "iter/sec",
            "range": "stddev: 0.00008191827807422917",
            "extra": "mean: 71.20596230000729 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 4.52496056916594,
            "unit": "iter/sec",
            "range": "stddev: 0.18753613594785778",
            "extra": "mean: 220.99640089998047 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 2345451.5701436363,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 426.3571299998148 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1954221.3487116816,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 511.7127599999094 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 7564584.340893428,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 132.19496999909097 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2615200.8391898484,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 382.37980999952015 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2551848.001112939,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 391.8728700000429 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 334391.57901947264,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.9905059300006087 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 57194.6650509665,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 17.484148199991978 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 47752.929551485824,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 20.941123600005085 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.5859895385572895,
            "unit": "iter/sec",
            "range": "stddev: 0.010962885077249674",
            "extra": "mean: 278.86305558000004 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 12835227.256948784,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 77.91057999838813 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 5205637.518069538,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 192.09942999850682 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 266844.70545526635,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.7474979999842617 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_mean",
            "value": 146239.64495335397,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.838091000008717 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_std",
            "value": 38935.091604682864,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.683771600006366 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_mean",
            "value": 2200009.9924397566,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 454.54339000116306 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_std",
            "value": 1260581.128911571,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 793.2849199983139 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 109999.0135068476,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.090990619999957 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 3.42551429995033,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 291.92696700010856 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 3.4335216407089137,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 291.2461619998794 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 2.357090282075295,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 424.2518870000822 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 7334549.254808828,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 136.3410300018586 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 7029972.357387009,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 142.24807000118744 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 7765906.381849345,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 128.76796999989892 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 8441818.43855825,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 118.45789000062723 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 215.9670952532902,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.630335000001651 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 12951928.399526145,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 77.20858000084263 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 13279055.63610602,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 75.30655999971714 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 6017997.181637497,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 166.16824000038832 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 11253699.231647624,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 88.85966999969241 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 3447204.9682593374,
            "unit": "iter/sec",
            "range": "stddev: 4.1867639875406976e-7",
            "extra": "mean: 290.09009014771436 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 1071897.5958684278,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015047086292845167",
            "extra": "mean: 932.9249397092099 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 793817.3629975629,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016164087722044159",
            "extra": "mean: 1.25973560999455 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 790380.6938526515,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022480737073048066",
            "extra": "mean: 1.2652130900687553 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 4196186.492483463,
            "unit": "iter/sec",
            "range": "stddev: 5.722959695131057e-7",
            "extra": "mean: 238.31161979842364 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1435812.8475831435,
            "unit": "iter/sec",
            "range": "stddev: 0.000001516590004785153",
            "extra": "mean: 696.4696002569326 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2740657.4757339857,
            "unit": "iter/sec",
            "range": "stddev: 0.000001104722403683791",
            "extra": "mean: 364.87594996970074 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 4791647.210647319,
            "unit": "iter/sec",
            "range": "stddev: 4.6966172726244496e-7",
            "extra": "mean: 208.696499562393 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1502329.4536658807,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011902629956355028",
            "extra": "mean: 665.6329592419752 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 850685.4159000239,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013665336738265193",
            "extra": "mean: 1.1755226800755736 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 928056.701246435,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015535884403024408",
            "extra": "mean: 1.0775203698835867 usec\nrounds: 100000"
          }
        ]
      }
    ]
  }
}