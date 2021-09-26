window.BENCHMARK_DATA = {
  "lastUpdate": 1632692604591,
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
          "id": "9d656de5415d1659e491353ee0c9cdfc05d415a7",
          "message": "Update workflows",
          "timestamp": "2021-09-27T06:37:06+10:00",
          "tree_id": "66207544591991a27da2351e51ce3d18bf66b36d",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/9d656de5415d1659e491353ee0c9cdfc05d415a7"
        },
        "date": 1632692596724,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 2.7856472467283377,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 358.9829979996466 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 8.429753770189581,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 118.62742699986484 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 1.9046716596051647,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 525.0248749998718 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 6767512.529066083,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 147.76477999930648 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 5971151.69409694,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 167.47188000408642 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 6928385.505160707,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 144.33377000386827 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 8148388.676396188,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 122.72365000171702 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 190.9881478381022,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.235927000285301 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 11526253.462525662,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 86.75846000187448 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 11693519.860286986,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 85.51745000204392 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 5270258.87513437,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 189.74399999933667 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 9732877.289677812,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 102.74453999954858 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2878999.4804754006,
            "unit": "iter/sec",
            "range": "stddev: 5.576968841355281e-7",
            "extra": "mean: 347.34289004973107 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 855253.3629958458,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024112797443597026",
            "extra": "mean: 1.1692441599961967 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 704610.0547393091,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023332271537204596",
            "extra": "mean: 1.4192247091477839 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 692570.7904404687,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020144127886969183",
            "extra": "mean: 1.443895719835382 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3908994.6906335354,
            "unit": "iter/sec",
            "range": "stddev: 2.668406016035557e-7",
            "extra": "mean: 255.82025025414623 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1272251.5362420285,
            "unit": "iter/sec",
            "range": "stddev: 8.026477624011763e-7",
            "extra": "mean: 786.0080899990862 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2429595.7843997306,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016856618893786122",
            "extra": "mean: 411.59109940053895 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 4108071.3646631213,
            "unit": "iter/sec",
            "range": "stddev: 3.70303070272556e-7",
            "extra": "mean: 243.42322984011847 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1343798.5658586652,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022028206291002502",
            "extra": "mean: 744.1591510860235 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 767808.5516965209,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010358294696085635",
            "extra": "mean: 1.3024079997421723 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 815127.2356150446,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015563365978112042",
            "extra": "mean: 1.226802339938331 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 6359307.351903801,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 157.24982999927306 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 3921301.82514504,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 255.01735000034387 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 7333221.2817144105,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 136.36571999995795 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 12067902.709420763,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 82.86444000077609 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 4453982.10269174,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 224.51819000252726 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 4562831.466958264,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 219.162159996813 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 80030.4371771573,
            "unit": "iter/sec",
            "range": "stddev: 0.000054198503021215466",
            "extra": "mean: 12.495245999798499 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 9143.125672789354,
            "unit": "iter/sec",
            "range": "stddev: 0.0001549668167992845",
            "extra": "mean: 109.37178770013816 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 3.4741481886488104,
            "unit": "iter/sec",
            "range": "stddev: 0.20464683550747012",
            "extra": "mean: 287.8403411999898 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 2042047.4310859893,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 489.7045899997465 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1680166.383516206,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 595.1791500001491 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 6180666.060692973,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 161.79486000055476 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2335683.170739328,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 428.14026000087324 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2405695.590139977,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 415.6801900035134 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 313613.24371179705,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.188640849998592 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 34057.561474784765,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 29.362055199999304 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 28050.0515245839,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 35.650558399993315 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.16943819764539,
            "unit": "iter/sec",
            "range": "stddev: 0.003591760165506351",
            "extra": "mean: 315.5133300100033 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 10315711.312772335,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 96.93951000372181 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 4296284.865034811,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 232.75923999790393 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 223829.13134763154,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.467693700007658 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_mean",
            "value": 130201.87749020314,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.68038080000224 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_std",
            "value": 40181.39149856414,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 24.887142099987614 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_mean",
            "value": 1991422.2672129641,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 502.15366999964317 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_std",
            "value": 1151412.320622097,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 868.4986100024616 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 99006.95440587885,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.100300590002007 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}