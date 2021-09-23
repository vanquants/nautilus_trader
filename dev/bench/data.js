window.BENCHMARK_DATA = {
  "lastUpdate": 1632387364459,
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
          "id": "8ccb5f5e40ca62dc9935b41005d893f511058019",
          "message": "Upgrade performance stats to `quantstats`\n\n- Remove `empyrical`.\n- De-cythonize analysis classes (no need for Cython).\n- Cleanup backtest performance stats.",
          "timestamp": "2021-09-23T18:35:34+10:00",
          "tree_id": "5c20e42bea5c8eea7632e6d6385c57605631b37b",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/8ccb5f5e40ca62dc9935b41005d893f511058019"
        },
        "date": 1632387357494,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 2.5729459442461478,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 388.6595449998822 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 2.624267152075376,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 381.0587650000343 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 1.8638914168439022,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 536.5119399998548 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 5311129.131189338,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 188.28387999974439 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 5594115.16986341,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 178.75927999966734 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 5390698.9958221475,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 185.50469999809138 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 6431165.531083402,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 155.49280999948678 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 152.39223811742335,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.562013999882765 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 9680775.461119138,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 103.2975099997202 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 9813982.825529598,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 101.89542999796686 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 4881980.084245773,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 204.83492000039405 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 8174161.296241564,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 122.3367100010364 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2462179.750138823,
            "unit": "iter/sec",
            "range": "stddev: 1.2394666478053622e-7",
            "extra": "mean: 406.14418989662227 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 825543.7499967013,
            "unit": "iter/sec",
            "range": "stddev: 4.106054825170171e-7",
            "extra": "mean: 1.2113228402540699 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 669948.3504151836,
            "unit": "iter/sec",
            "range": "stddev: 6.039135574286656e-7",
            "extra": "mean: 1.4926523804115277 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 664215.0842518449,
            "unit": "iter/sec",
            "range": "stddev: 4.3578283556164157e-7",
            "extra": "mean: 1.5055364199179166 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3438077.4565088614,
            "unit": "iter/sec",
            "range": "stddev: 9.19073956491759e-8",
            "extra": "mean: 290.8602300703933 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1121228.868933246,
            "unit": "iter/sec",
            "range": "stddev: 3.948890987806447e-7",
            "extra": "mean: 891.8785697619569 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2217602.170159378,
            "unit": "iter/sec",
            "range": "stddev: 2.8599811318819693e-7",
            "extra": "mean: 450.93750964724677 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 4072641.261479241,
            "unit": "iter/sec",
            "range": "stddev: 1.9204369108673e-7",
            "extra": "mean: 245.54089982302685 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1277587.5550479272,
            "unit": "iter/sec",
            "range": "stddev: 4.242500901955401e-7",
            "extra": "mean: 782.7252199263057 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 662328.3630174057,
            "unit": "iter/sec",
            "range": "stddev: 5.395852040155942e-7",
            "extra": "mean: 1.5098251197400714 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 776995.868651521,
            "unit": "iter/sec",
            "range": "stddev: 4.613077197870311e-7",
            "extra": "mean: 1.287008130088907 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 6425668.953986618,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 155.62581999802205 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 3802749.9890862247,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 262.96758999933445 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 7163231.419696964,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 139.60179999912725 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 10017400.224221846,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 99.82629999967685 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 4401421.430255395,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 227.1993299996211 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 4534511.738088231,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 220.53090999861524 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 65739.78262676571,
            "unit": "iter/sec",
            "range": "stddev: 0.00007571839952585413",
            "extra": "mean: 15.211489299827006 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 14196.320703228126,
            "unit": "iter/sec",
            "range": "stddev: 0.0001632695625253473",
            "extra": "mean: 70.44078679996346 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 3.9977787269995506,
            "unit": "iter/sec",
            "range": "stddev: 0.20228777532499492",
            "extra": "mean: 250.13890669995365 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 1923339.6068831878,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 519.9289799998041 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1633728.9217321342,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 612.0966499997849 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 6672795.852055999,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 149.8622200006139 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2217856.79006346,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 450.8857399991939 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2195191.9457136816,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 455.5410300008589 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 286990.0516104632,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.4844413399991936 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 59537.087711902386,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 16.796253200004685 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 52906.49053966167,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 18.90127260001009 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 2.9185044868582337,
            "unit": "iter/sec",
            "range": "stddev: 0.006580823348278837",
            "extra": "mean: 342.64124126000524 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 9655908.793462653,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 103.56352999906449 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 4162830.6182572898,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 240.22115999969174 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 225410.02590881556,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.4363599000007525 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_mean",
            "value": 137417.58363265032,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.277089099989098 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_std",
            "value": 46898.27649392641,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 21.32274520001829 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_mean",
            "value": 1966749.8129765564,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 508.4530800013453 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_std",
            "value": 1088881.0716895654,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 918.3739400009472 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 89350.13333854839,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.19192509999948 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}