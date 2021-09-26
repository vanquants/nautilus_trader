window.BENCHMARK_DATA = {
  "lastUpdate": 1632693448305,
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
      },
      {
        "commit": {
          "author": {
            "email": "chris@cjdsellers.io",
            "name": "Christopher Sellers",
            "username": "cjdsellers"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "504c44798bf38bc21b38e755bcb8821c3f5757e0",
          "message": "Update workflows and release",
          "timestamp": "2021-09-27T07:03:07+10:00",
          "tree_id": "333f10cf7903b0b96f9deeabf439087aa323643c",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/504c44798bf38bc21b38e755bcb8821c3f5757e0"
        },
        "date": 1632693441052,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 2.877151745902823,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 347.56595700036996 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 9.195107801753503,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 108.75348299987309 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 2.0383925571407477,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 490.58263899996746 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 7231493.559443854,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 138.28401999944617 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 6167229.611322673,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 162.1473600016543 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 7363663.4284410365,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 135.8019700001023 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 8699231.718927784,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 114.95267999634962 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 191.31520787898373,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.226975999903516 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 11904589.005084202,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 84.0012199978446 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 11881957.03472942,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 84.16121999744064 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 5931287.810054517,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 168.59745000147086 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 10738213.52163616,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 93.12536000379623 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 3022095.56710797,
            "unit": "iter/sec",
            "range": "stddev: 8.101714830716597e-8",
            "extra": "mean: 330.89622012084874 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 994393.1251525531,
            "unit": "iter/sec",
            "range": "stddev: 1.1675979754389079e-7",
            "extra": "mean: 1.0056384891504422 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 753066.3395271681,
            "unit": "iter/sec",
            "range": "stddev: 1.395314455541349e-7",
            "extra": "mean: 1.3279042595740975 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 738608.3835826794,
            "unit": "iter/sec",
            "range": "stddev: 1.476358006109132e-7",
            "extra": "mean: 1.3538974404127657 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3844737.3576066154,
            "unit": "iter/sec",
            "range": "stddev: 7.04237985121807e-8",
            "extra": "mean: 260.0957899039713 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1333344.2493592035,
            "unit": "iter/sec",
            "range": "stddev: 1.0200201453050953e-7",
            "extra": "mean: 749.9938597857181 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2626518.6155017857,
            "unit": "iter/sec",
            "range": "stddev: 6.975458081810937e-8",
            "extra": "mean: 380.73211973369325 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 4212469.0148830395,
            "unit": "iter/sec",
            "range": "stddev: 8.423751671410938e-8",
            "extra": "mean: 237.39047016533732 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1487248.4809678101,
            "unit": "iter/sec",
            "range": "stddev: 1.8766276921653528e-7",
            "extra": "mean: 672.3825996778032 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 833836.574637368,
            "unit": "iter/sec",
            "range": "stddev: 1.3361694157906057e-7",
            "extra": "mean: 1.1992757698772039 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 943156.4960137238,
            "unit": "iter/sec",
            "range": "stddev: 2.763475080898529e-7",
            "extra": "mean: 1.06026942954486 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 7688650.260519088,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 130.06184000005305 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 4167354.627468398,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 239.96037999950204 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 8682091.501802098,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 115.17962000198168 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 12090411.61448012,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 82.71016999970016 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 5116928.205620447,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 195.42975000149454 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 5233637.698993198,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 191.07169000108115 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 95282.03840874622,
            "unit": "iter/sec",
            "range": "stddev: 0.000046050783818183394",
            "extra": "mean: 10.495157499781271 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 14102.31200565978,
            "unit": "iter/sec",
            "range": "stddev: 0.00014053200765844562",
            "extra": "mean: 70.91035849998661 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 4.603465108932058,
            "unit": "iter/sec",
            "range": "stddev: 0.1677877295903889",
            "extra": "mean: 217.22767010001007 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 2171025.5794611545,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 460.61179999924207 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1933979.247601309,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 517.0686299970839 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 7464637.400001862,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 133.96498000020074 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2583881.1139784274,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 387.0147099996757 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2624226.8306034696,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 381.0646200008705 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 343697.7804927281,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.9095328999983394 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 52249.655416098045,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 19.13888220001354 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 46075.029499461954,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 21.703730000035648 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.382816541911135,
            "unit": "iter/sec",
            "range": "stddev: 0.0006579471285230002",
            "extra": "mean: 295.6116560299916 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 11532397.271772446,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 86.71223999954236 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 4984799.849739202,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 200.60986000316916 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 259465.63726429705,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.854074900027626 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_mean",
            "value": 158901.9367682614,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.293189500001972 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_std",
            "value": 53181.79330239333,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 18.803427600005307 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_mean",
            "value": 2248498.0201980365,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 444.7413299976688 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_std",
            "value": 1295737.9628062914,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 771.7609800010905 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 103106.18571488478,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.6987391499988 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}