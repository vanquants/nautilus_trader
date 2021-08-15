window.BENCHMARK_DATA = {
  "lastUpdate": 1628999514184,
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
          "id": "37e14a971796c830563771c602f32f86b5fc9a08",
          "message": "Heavy Re-engineering\n\n- Extract portfolio to subpackage.\n- Separate `PortfolioFacade` from `Portfolio`.\n- Move accounts to dedicated subpackage.\n- Added `AccountsManager`.\n- Move registration of custom account cls to `AccountFactory`.\n- Move registration of calculated account to `AccountFactory`.\n- Rename `msgbus.message_bus` to `msgbus.bus`.\n- Fix `TimeBarAggregator._stored_close_ns` property name.",
          "timestamp": "2021-08-15T13:34:05+10:00",
          "tree_id": "33945e1769937f2d565fde8bab50ad2055054134",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/37e14a971796c830563771c602f32f86b5fc9a08"
        },
        "date": 1628999506717,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 101096.8911591154,
            "unit": "iter/sec",
            "range": "stddev: 0.00004205510563494567",
            "extra": "mean: 9.891501000026892 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 16507.44247949212,
            "unit": "iter/sec",
            "range": "stddev: 0.00010723920790446061",
            "extra": "mean: 60.57873599997947 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 4.945496565127235,
            "unit": "iter/sec",
            "range": "stddev: 0.18653475714183426",
            "extra": "mean: 202.20416429998522 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 2259710.365242188,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 442.53458999946815 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1904529.0080722803,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 525.0641999998606 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 7665036.083491201,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 130.46253000084107 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2693993.023251128,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 371.1962100010169 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2694987.7539724116,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 371.05920000044534 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 348789.2730835968,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.8670606499997575 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 71904.94166711737,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 13.907249999999749 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 62404.5557422413,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 16.024471100001847 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.503080895769103,
            "unit": "iter/sec",
            "range": "stddev: 0.00046554002665670746",
            "extra": "mean: 285.46300521000376 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 11497462.912235035,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 86.97571000084281 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 5285420.08411757,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 189.199720000488 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 288202.85976808675,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.4697781999966537 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 106328.2325787647,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.404839859998901 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 0.28282822553128706,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.535715001999961 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 0.35439830992973553,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.821683885000084 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 0.1194640950459842,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.37071590100004 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 6761284.075965689,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 147.90090000133205 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 7113400.0451628715,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 140.57975000014267 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 7179589.461023797,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 139.28372999998828 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 8973745.423281735,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 111.43618999994942 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 195.11433700763055,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.1251999998385145 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 11575186.04227952,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 86.39169999923979 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 11670970.142577583,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 85.68267999862655 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 5925177.685709348,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 168.771310000011 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 10691204.54910367,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 93.53483000040796 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2867030.7537592356,
            "unit": "iter/sec",
            "range": "stddev: 9.476122946206019e-8",
            "extra": "mean: 348.79291011748137 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 927764.1100973253,
            "unit": "iter/sec",
            "range": "stddev: 1.316016073394666e-7",
            "extra": "mean: 1.0778601900165086 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 692042.0109597779,
            "unit": "iter/sec",
            "range": "stddev: 2.340905759784691e-7",
            "extra": "mean: 1.4449989800664298 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 692320.8369026429,
            "unit": "iter/sec",
            "range": "stddev: 1.4537263026346853e-7",
            "extra": "mean: 1.4444170198225947 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 4049194.14594608,
            "unit": "iter/sec",
            "range": "stddev: 6.92221754577145e-8",
            "extra": "mean: 246.96271997754596 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1384984.3485870163,
            "unit": "iter/sec",
            "range": "stddev: 1.267803990370372e-7",
            "extra": "mean: 722.029820062744 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2781298.43859996,
            "unit": "iter/sec",
            "range": "stddev: 8.976203112165286e-8",
            "extra": "mean: 359.5442999289844 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 4552279.035331107,
            "unit": "iter/sec",
            "range": "stddev: 2.4417795952843767e-7",
            "extra": "mean: 219.67018986288167 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1459727.5193809653,
            "unit": "iter/sec",
            "range": "stddev: 1.0390308228046222e-7",
            "extra": "mean: 685.0593598619525 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 798187.2910974573,
            "unit": "iter/sec",
            "range": "stddev: 1.4730315669633958e-7",
            "extra": "mean: 1.2528387900351845 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 881530.2272547403,
            "unit": "iter/sec",
            "range": "stddev: 2.7969976918937333e-7",
            "extra": "mean: 1.134391049884016 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 7732663.8701934265,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 129.32154000054652 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 4579126.108588002,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 218.382279999787 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 8610796.147273647,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 116.13328000066758 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 11766967.909010943,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 84.98365999912494 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 5412818.6262431815,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 184.7466300000633 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 5551252.40971817,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 180.13953000036054 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_mean",
            "value": 164876.68295819848,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.065138999997544 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_std",
            "value": 54594.87024856302,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 18.316739199985932 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_mean",
            "value": 2247601.4889296205,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 444.9187299996993 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_std",
            "value": 1285105.450484945,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 778.1462599996303 nsec\nrounds: 1"
          }
        ]
      }
    ]
  }
}