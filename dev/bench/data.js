window.BENCHMARK_DATA = {
  "lastUpdate": 1632694313295,
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
          "id": "ee1ddccbdee4a36e9c6cc68038f61a0352450a6a",
          "message": "Merge branch 'master' into develop",
          "timestamp": "2021-09-27T07:02:20+10:00",
          "tree_id": "333f10cf7903b0b96f9deeabf439087aa323643c",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/ee1ddccbdee4a36e9c6cc68038f61a0352450a6a"
        },
        "date": 1632693903530,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 6742877.3637059145,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 148.3046400016974 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 6503665.7261624355,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 153.75943999970332 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 6527395.118333789,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 153.20046999931947 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 7621645.6566039175,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 131.20525999966048 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 186.81786958523045,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.3528069997810235 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 11647288.877999924,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 85.85689000028651 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 11702488.569384962,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 85.45190999939223 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 5200639.366624929,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 192.28404999921622 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 9994764.741924832,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 100.05238000303507 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2194921.301329434,
            "unit": "iter/sec",
            "range": "stddev: 4.474974107285594e-7",
            "extra": "mean: 455.5972004072828 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 804394.0962168052,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019621355097566704",
            "extra": "mean: 1.2431717297567957 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 611802.3712750204,
            "unit": "iter/sec",
            "range": "stddev: 0.000004659700305765341",
            "extra": "mean: 1.6345147501078827 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 609260.7498634494,
            "unit": "iter/sec",
            "range": "stddev: 0.00000225861051143129",
            "extra": "mean: 1.6413333703576427 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3959293.8683519047,
            "unit": "iter/sec",
            "range": "stddev: 3.044010585331247e-7",
            "extra": "mean: 252.57028986743535 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1261904.1081306865,
            "unit": "iter/sec",
            "range": "stddev: 6.826918821184578e-7",
            "extra": "mean: 792.4532407469087 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2585469.681291255,
            "unit": "iter/sec",
            "range": "stddev: 5.43600476752553e-7",
            "extra": "mean: 386.77691996781505 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 4333074.626420751,
            "unit": "iter/sec",
            "range": "stddev: 3.581748268210706e-7",
            "extra": "mean: 230.78300888300873 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1407639.4484551968,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015846228999704435",
            "extra": "mean: 710.4091897235776 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 755285.3208706622,
            "unit": "iter/sec",
            "range": "stddev: 8.160466393457758e-7",
            "extra": "mean: 1.3240029593680447 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 771597.4067668569,
            "unit": "iter/sec",
            "range": "stddev: 0.000001662329555099691",
            "extra": "mean: 1.296012650159355 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 6856893.344762284,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 145.8386399963274 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 3979290.0238718167,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 251.3011099972573 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 7771905.757522013,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 128.66857000062737 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 12216074.00754195,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 81.8593600024542 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 4718562.96357993,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 211.92892999806645 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 4834072.865992988,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 206.86489999661717 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 49291.291292747446,
            "unit": "iter/sec",
            "range": "stddev: 0.00011940040025039014",
            "extra": "mean: 20.287559399912425 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 9402.822254635888,
            "unit": "iter/sec",
            "range": "stddev: 0.00012172441171146531",
            "extra": "mean: 106.35104790021614 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 3.4296199170781496,
            "unit": "iter/sec",
            "range": "stddev: 0.20658495633899893",
            "extra": "mean: 291.5774995999982 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 1694860.4728985373,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 590.0190700003805 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1491437.500707208,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 670.4940700001316 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 6696846.227266023,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 149.32402000340517 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2438405.5705051436,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 410.10404999724415 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2453060.443114199,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 407.65404000012495 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 307605.1986327545,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.2509203499967043 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 31290.40030702046,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 31.958683499988183 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 27012.999176574052,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 37.0192140999734 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.355954199216854,
            "unit": "iter/sec",
            "range": "stddev: 0.0019587170262656945",
            "extra": "mean: 297.9778449400055 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 11291652.081322717,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 88.56100000230072 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 4372980.229755205,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 228.67700000006153 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 237522.35679175972,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.2101300000013 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_mean",
            "value": 138842.80079299834,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.202389999974912 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_std",
            "value": 41223.95556545189,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 24.257740099983494 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_mean",
            "value": 2107845.8237300576,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 474.41799999887735 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_std",
            "value": 1147479.8473804975,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 871.4750000035565 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 93849.55073498616,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.655352019998645 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 2.6577537724486073,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 376.25757900013923 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 8.419873849221469,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 118.76662500026214 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 1.683584785700242,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 593.970679999984 msec\nrounds: 1"
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
        "date": 1632693996566,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.380434652923366,
            "unit": "iter/sec",
            "range": "stddev: 0.011059155784033544",
            "extra": "mean: 295.8199470400086 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 14027191.14903157,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 71.29010999960883 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 6046122.848111132,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 165.39525000098365 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 275223.8836221909,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.6334055999759585 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_mean",
            "value": 124910.65141100006,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.005722400002924 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_std",
            "value": 34676.6070721132,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 28.83788479998657 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_mean",
            "value": 2304324.4311934696,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 433.9666699979716 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_std",
            "value": 1258984.0630628313,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 794.2912299995442 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 115244.72876194537,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.677186460004123 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 3.048622842404433,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 328.0169609997756 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 9.195908052660704,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 108.74401899991426 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 1.8441756653070995,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 542.2476930002631 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 7999663.374058245,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 125.00526000167156 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 7523646.633398659,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 132.91426999785472 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 8715186.316536367,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 114.74224000266986 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 11448042.258839834,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 87.3511800000415 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 173.4301235259096,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.766011000105209 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 15189689.603148464,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 65.83413000043947 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 16911568.730233204,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 59.13112000143883 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 7670696.390290651,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 130.36626000030083 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 14943631.129859526,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 66.91813999623264 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 3632869.075647059,
            "unit": "iter/sec",
            "range": "stddev: 0.000001248225387804291",
            "extra": "mean: 275.264530368986 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 1099320.605584196,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014639852574314424",
            "extra": "mean: 909.6527390829579 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 719647.3805162614,
            "unit": "iter/sec",
            "range": "stddev: 0.000020285867988871628",
            "extra": "mean: 1.389569429520634 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 740813.9715891185,
            "unit": "iter/sec",
            "range": "stddev: 0.00002386486187607647",
            "extra": "mean: 1.349866549971921 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 4671424.603247531,
            "unit": "iter/sec",
            "range": "stddev: 9.982171874911362e-7",
            "extra": "mean: 214.06746012871736 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1545981.7413929899,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019589076968133972",
            "extra": "mean: 646.8381697050063 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2759847.890848366,
            "unit": "iter/sec",
            "range": "stddev: 0.0000027494046506915796",
            "extra": "mean: 362.3388098003488 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 5234303.651252742,
            "unit": "iter/sec",
            "range": "stddev: 5.198784795434503e-7",
            "extra": "mean: 191.0473802490742 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1504831.6521078777,
            "unit": "iter/sec",
            "range": "stddev: 0.000001841626720779673",
            "extra": "mean: 664.5261605171982 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 827519.1420314516,
            "unit": "iter/sec",
            "range": "stddev: 0.000004451625802209488",
            "extra": "mean: 1.208431260629368 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 845384.808062747,
            "unit": "iter/sec",
            "range": "stddev: 0.000005039893266674482",
            "extra": "mean: 1.182893269979104 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 7767397.513916712,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 128.74325000211684 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 4002666.4162964323,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 249.833459997717 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 9423454.223981945,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 106.11819999667205 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 18108032.88593747,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 55.22411000129068 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 5686524.750335962,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 175.85433000022022 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 5792791.947835988,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 172.6283300013165 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 73671.41667047932,
            "unit": "iter/sec",
            "range": "stddev: 0.00005913911248925013",
            "extra": "mean: 13.573785400012639 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 9634.872571904742,
            "unit": "iter/sec",
            "range": "stddev: 0.00014774352732461435",
            "extra": "mean: 103.78964459955569 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 3.5691458566368253,
            "unit": "iter/sec",
            "range": "stddev: 0.19646232594959756",
            "extra": "mean: 280.17907930002366 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 2574622.007508364,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 388.4065300007933 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 2088011.0871665475,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 478.9246600012121 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 8548019.697297229,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 116.98616000103357 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2882048.034043138,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 346.97548000167444 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2581587.657294696,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 387.35853000162024 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 350543.38589062245,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.8527139300013005 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 34572.21733262082,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 28.924959899995883 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 31303.64260674917,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 31.94516409998869 usec\nrounds: 1"
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
          "id": "9d656de5415d1659e491353ee0c9cdfc05d415a7",
          "message": "Update workflows",
          "timestamp": "2021-09-27T06:37:06+10:00",
          "tree_id": "66207544591991a27da2351e51ce3d18bf66b36d",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/9d656de5415d1659e491353ee0c9cdfc05d415a7"
        },
        "date": 1632694305347,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 2.1322056137654464,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 468.99792099975457 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 7.4647044327153225,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 133.96377700064477 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 1.5392121506592287,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 649.6830209998734 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 7291325.189657116,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 137.14927999899373 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 8171155.640343376,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 122.38171000717556 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 6529379.924347359,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 153.15390000068874 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 8420090.436900008,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 118.76356999891868 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 187.72626880422197,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.326905000401894 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 12867197.653906662,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 77.71699999466364 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 14754134.88474386,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 67.7776099928451 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 4991870.240185836,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 200.32571999763604 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 11163523.855785869,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 89.57744999861461 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 3071482.8602117137,
            "unit": "iter/sec",
            "range": "stddev: 0.000001864043663091787",
            "extra": "mean: 325.57564066337363 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 1009189.8641545774,
            "unit": "iter/sec",
            "range": "stddev: 0.0000030012780299268122",
            "extra": "mean: 990.8938203989237 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 736394.8711077037,
            "unit": "iter/sec",
            "range": "stddev: 0.000003745134472767071",
            "extra": "mean: 1.3579670897161122 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 726164.0359922007,
            "unit": "iter/sec",
            "range": "stddev: 0.000004790543383127323",
            "extra": "mean: 1.377099319761328 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 4135918.8749937513,
            "unit": "iter/sec",
            "range": "stddev: 0.000002895676178185926",
            "extra": "mean: 241.78423954253958 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1304692.9739262878,
            "unit": "iter/sec",
            "range": "stddev: 0.000004084767129645705",
            "extra": "mean: 766.4638501046284 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2220285.988757719,
            "unit": "iter/sec",
            "range": "stddev: 0.00002471138046444776",
            "extra": "mean: 450.3924292021111 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 4285393.881247424,
            "unit": "iter/sec",
            "range": "stddev: 0.000001852763504431424",
            "extra": "mean: 233.3507788807765 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1301124.2112838833,
            "unit": "iter/sec",
            "range": "stddev: 0.000014348855031223018",
            "extra": "mean: 768.5661302184599 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 805114.7010006608,
            "unit": "iter/sec",
            "range": "stddev: 0.000004837165873419341",
            "extra": "mean: 1.2420590491728944 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 765676.3413501107,
            "unit": "iter/sec",
            "range": "stddev: 0.000006327489414862196",
            "extra": "mean: 1.306034868775896 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 7982640.630250795,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 125.27183000202058 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 4055750.344308823,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 246.56349999531813 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 7817634.598128413,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 127.91592999747081 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 15530728.477001883,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 64.38848000470898 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 5088215.149079835,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 196.5325700075482 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 5379549.835163923,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 185.8891599931667 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 19660.120206618685,
            "unit": "iter/sec",
            "range": "stddev: 0.0003538320352567406",
            "extra": "mean: 50.86438889948113 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 6952.947058538526,
            "unit": "iter/sec",
            "range": "stddev: 0.00039304047211037623",
            "extra": "mean: 143.8239054002224 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 2.096060325606474,
            "unit": "iter/sec",
            "range": "stddev: 0.48447720378986503",
            "extra": "mean: 477.085505499781 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 2053102.7638853902,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 487.06767999647127 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1839226.4478450376,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 543.7068399987766 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 8545000.836613571,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 117.02749000505719 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2201080.017135544,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 454.32242000060796 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2472728.891220341,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 404.41150000333437 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 284583.53693781537,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.5139067099953536 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 32683.87969511009,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 30.596122899987677 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 27214.913938302594,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 36.744558600003074 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.022902749288707,
            "unit": "iter/sec",
            "range": "stddev: 0.012441177352918604",
            "extra": "mean: 330.8078634799949 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 13720854.162065912,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 72.88175999747182 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 5052074.7657243945,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 197.93848000517755 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 211755.4603914437,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.722428399963974 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_mean",
            "value": 115982.82939207935,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.62196589996529 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_std",
            "value": 36331.030518898115,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 27.524680299939064 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_mean",
            "value": 1730667.2012721652,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 577.8118400030507 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_std",
            "value": 887711.3890518754,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.126492249995863 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 88454.62026242148,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.30523195999558 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}