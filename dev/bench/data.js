window.BENCHMARK_DATA = {
  "lastUpdate": 1630802194948,
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
          "id": "008cee64b6e53141b80f84f22c0d2690b68a71a7",
          "message": "Merge adapter_template branch",
          "timestamp": "2021-09-05T10:19:08+10:00",
          "tree_id": "c26b425496f7f684093013a607b7e4aec8d0cbad",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/008cee64b6e53141b80f84f22c0d2690b68a71a7"
        },
        "date": 1630802183077,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 0.3176741306055664,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.1478798670000288 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 0.752420024513743,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.3290449050000461 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 0.2959496061082955,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.3789536440000347 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 6197890.46120501,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 161.3452200001575 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 5826950.297717468,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 171.6163600008258 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 6489245.924341902,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 154.10110999937388 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 7918613.754766532,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 126.28473000063424 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 176.85101557557059,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.654477000007319 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 10401138.63337359,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 96.14332000069226 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 10495568.19383691,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 95.27831000013975 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 5493011.516120787,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 182.04949999926612 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 9596797.280006915,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 104.20143000033022 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 3121503.72286297,
            "unit": "iter/sec",
            "range": "stddev: 2.466241864937432e-7",
            "extra": "mean: 320.3584197819964 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 886678.0103786192,
            "unit": "iter/sec",
            "range": "stddev: 4.826019077353729e-7",
            "extra": "mean: 1.1278051201168182 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 646594.4817172377,
            "unit": "iter/sec",
            "range": "stddev: 5.583076677732227e-7",
            "extra": "mean: 1.5465643896993697 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 654723.7160027771,
            "unit": "iter/sec",
            "range": "stddev: 5.305149730836169e-7",
            "extra": "mean: 1.52736181011619 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3526480.802448171,
            "unit": "iter/sec",
            "range": "stddev: 2.0220757426222986e-7",
            "extra": "mean: 283.5688200275399 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1257483.4880035112,
            "unit": "iter/sec",
            "range": "stddev: 3.157877606534046e-7",
            "extra": "mean: 795.2390703655965 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2859053.4405146227,
            "unit": "iter/sec",
            "range": "stddev: 1.5845628584485912e-7",
            "extra": "mean: 349.7661099402194 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 4418964.888354908,
            "unit": "iter/sec",
            "range": "stddev: 1.8845039780314707e-7",
            "extra": "mean: 226.29734004794955 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1504786.0244579362,
            "unit": "iter/sec",
            "range": "stddev: 3.1134691034670764e-7",
            "extra": "mean: 664.5463100710458 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 758628.0379268508,
            "unit": "iter/sec",
            "range": "stddev: 5.073825954064763e-7",
            "extra": "mean: 1.318169049924336 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 842785.5455001085,
            "unit": "iter/sec",
            "range": "stddev: 5.402109057517263e-7",
            "extra": "mean: 1.1865414699377652 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 8130366.194137441,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 122.99568999992516 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 4489477.696861316,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 222.743059999857 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 9528579.25836789,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 104.94743999970524 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 14395539.91616984,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 69.46596000034333 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 5953078.667412383,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 167.98030999893854 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 5922826.050362874,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 168.83832000075927 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_mean",
            "value": 186132.25713125998,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.372523900007309 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_std",
            "value": 62265.95511704558,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 16.06014070000583 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_mean",
            "value": 2297889.2646236187,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 435.1819800001522 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_std",
            "value": 1410590.9481777595,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 708.922739999025 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 104470.04877663919,
            "unit": "iter/sec",
            "range": "stddev: 0.00004165620709422026",
            "extra": "mean: 9.572121499991226 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 16765.61753696203,
            "unit": "iter/sec",
            "range": "stddev: 0.0001242140484853594",
            "extra": "mean: 59.64587930002381 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 5.302112501331117,
            "unit": "iter/sec",
            "range": "stddev: 0.15642527300637765",
            "extra": "mean: 188.60407050000276 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 2555130.844541751,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 391.369390000591 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 2191832.27292642,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 456.2392900004397 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 8191572.706614887,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 122.07667999973638 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2714661.299317609,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 368.37007999906746 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2904699.004198763,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 344.26974999973936 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 358016.48000694497,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.793167510000103 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 66464.75780990458,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 15.045567499998924 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 64900.37105099702,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 15.408232400000088 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.39892090238011,
            "unit": "iter/sec",
            "range": "stddev: 0.004865005469114516",
            "extra": "mean: 294.2110242400008 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 9916663.336252062,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 100.84037000069657 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 4434116.500262791,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 225.52407000148378 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 255679.06672719834,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.911153199987894 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 103336.5856181408,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.677114779999556 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}