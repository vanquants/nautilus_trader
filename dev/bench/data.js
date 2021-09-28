window.BENCHMARK_DATA = {
  "lastUpdate": 1632864434215,
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
          "id": "8ecbf6bd8c1b357ba0ebfc7fb302c04a30e941a3",
          "message": "Add `fill_stop_at_price` option",
          "timestamp": "2021-09-29T06:37:40+10:00",
          "tree_id": "6c712d47e6a09c062355c23395a37ba8cc7a9590",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/8ecbf6bd8c1b357ba0ebfc7fb302c04a30e941a3"
        },
        "date": 1632864302066,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 2.861982821707171,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 349.40810700027214 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 8.899132225154801,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 112.37050699992324 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 1.149518736623461,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 869.9292739997873 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 7057666.570432073,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 141.6898899969965 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 6557636.774621287,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 152.49395999944682 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 7137815.805448105,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 140.0988800014602 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 8355353.170387389,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 119.68374999923981 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 194.08310484396395,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.152431999704277 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 11726279.554005595,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 85.27854000021762 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 11489822.028596668,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 87.03354999852309 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 5396940.377291354,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 185.29017000219028 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 10276371.71331181,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 97.31060999911278 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2692163.7536108224,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010733873268285487",
            "extra": "mean: 371.44843015539664 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 906806.9673971884,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010890147585382325",
            "extra": "mean: 1.102770529951158 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 696644.9332695486,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022963166045106758",
            "extra": "mean: 1.4354514792876216 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 693043.4242436602,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011786598107374774",
            "extra": "mean: 1.4429110283981572 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3788945.582648699,
            "unit": "iter/sec",
            "range": "stddev: 7.045550822544899e-7",
            "extra": "mean: 263.9256696056691 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1208879.364001359,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011570604055159417",
            "extra": "mean: 827.2123999950054 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2536806.4029571046,
            "unit": "iter/sec",
            "range": "stddev: 3.605903313772356e-7",
            "extra": "mean: 394.19641910171777 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 4146305.383628609,
            "unit": "iter/sec",
            "range": "stddev: 3.452654937817524e-7",
            "extra": "mean: 241.17856922657666 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1237508.833109011,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013805704452294005",
            "extra": "mean: 808.0750401495607 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 709689.9095516531,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017066033819547467",
            "extra": "mean: 1.4090661097770862 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 809273.0060151011,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014597193930276045",
            "extra": "mean: 1.2356769502594034 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 6882316.246282279,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 145.29992000007041 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 4203261.310450812,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 237.91049999999814 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 7701678.858253806,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 129.84181999854627 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 12341335.167280119,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 81.02850999875955 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 4885357.990923352,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 204.69329000206926 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 5057164.928118436,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 197.73924999753945 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 80811.16110094464,
            "unit": "iter/sec",
            "range": "stddev: 0.00005389267195524593",
            "extra": "mean: 12.374528300006205 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 8666.172049500894,
            "unit": "iter/sec",
            "range": "stddev: 0.00015517528636914228",
            "extra": "mean: 115.39120090023971 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 3.4389905827531027,
            "unit": "iter/sec",
            "range": "stddev: 0.20039946580174092",
            "extra": "mean: 290.7830003999152 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 1893063.3501973734,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 528.2443399983094 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1448369.9002339311,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 690.4313599989109 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 5145720.898215157,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 194.33623000168154 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 1831537.1875436944,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 545.9894600016924 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2031372.0219770535,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 492.27812000026455 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 211457.7582784415,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.72907689999829 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 24441.028365377184,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 40.91480869997213 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 21455.284161539526,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 46.60856469999999 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.349087969506879,
            "unit": "iter/sec",
            "range": "stddev: 0.0016979373804032341",
            "extra": "mean: 298.5887528500007 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 11327778.79456467,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 88.27856000152678 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 4262656.723029419,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 234.5954799966421 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 188447.298659353,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.306523399985963 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_mean",
            "value": 136589.70101053282,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.321196200018676 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_std",
            "value": 40150.53705096624,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 24.906267100004698 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_mean",
            "value": 2105795.1925842525,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 474.879990001682 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_std",
            "value": 1157326.4347435816,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 864.0604499987603 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 93795.64092954836,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.661476270001913 usec\nrounds: 1"
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
          "id": "8ecbf6bd8c1b357ba0ebfc7fb302c04a30e941a3",
          "message": "Add `fill_stop_at_price` option",
          "timestamp": "2021-09-29T06:37:40+10:00",
          "tree_id": "6c712d47e6a09c062355c23395a37ba8cc7a9590",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/8ecbf6bd8c1b357ba0ebfc7fb302c04a30e941a3"
        },
        "date": 1632864425135,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 2.9604932274103,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 337.7815529997861 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 9.164938380801573,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 109.1114809996725 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 1.183326740211236,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 845.0751310001579 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 7849410.627091028,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 127.39809999857243 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 7817930.407837842,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 127.91108999863354 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 7918026.257730446,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 126.29410000045027 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 10856576.26742885,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 92.11007000430982 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 172.26813741295248,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.804904000342503 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 15160002.456666552,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 65.9630499967534 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 16279475.618521564,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 61.42704000012599 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 7434662.328797749,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 134.50509999984206 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 13808521.377058806,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 72.41904999773396 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 3212456.618840527,
            "unit": "iter/sec",
            "range": "stddev: 7.097212446847869e-7",
            "extra": "mean: 311.28825028645224 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 1035858.714772414,
            "unit": "iter/sec",
            "range": "stddev: 0.000003439744944762494",
            "extra": "mean: 965.3826199837569 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 745470.3858185962,
            "unit": "iter/sec",
            "range": "stddev: 0.000006784198990532616",
            "extra": "mean: 1.3414349101230982 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 819249.7942404976,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020248792796917055",
            "extra": "mean: 1.2206289303094309 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 4416763.508264693,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016640082967070276",
            "extra": "mean: 226.4101299806498 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1326980.4584645315,
            "unit": "iter/sec",
            "range": "stddev: 0.000011031074574416195",
            "extra": "mean: 753.5906000885007 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2711803.296315846,
            "unit": "iter/sec",
            "range": "stddev: 8.468250876727106e-7",
            "extra": "mean: 368.7583097780589 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 4937658.360007803,
            "unit": "iter/sec",
            "range": "stddev: 5.701966230975017e-7",
            "extra": "mean: 202.52514999810955 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1314219.672996079,
            "unit": "iter/sec",
            "range": "stddev: 0.000017254680813036515",
            "extra": "mean: 760.9077999268266 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 834088.2456051756,
            "unit": "iter/sec",
            "range": "stddev: 0.0000041113051789745816",
            "extra": "mean: 1.1989139102115587 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 812992.9876880327,
            "unit": "iter/sec",
            "range": "stddev: 0.000007499689782707868",
            "extra": "mean: 1.2300229093534654 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 8208354.299036174,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 121.82709999706277 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 4165673.847675333,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 240.05720000332073 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 9875657.570916595,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 101.25907999736228 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 17049993.137713954,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 58.65104999884352 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 5666359.965534466,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 176.48013999860268 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 5952446.85446276,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 167.99814000023616 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 49197.08633154638,
            "unit": "iter/sec",
            "range": "stddev: 0.00010910148885999052",
            "extra": "mean: 20.32640700022057 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 8450.779549156065,
            "unit": "iter/sec",
            "range": "stddev: 0.00011913208623201541",
            "extra": "mean: 118.33227860024635 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 3.271061528773222,
            "unit": "iter/sec",
            "range": "stddev: 0.23980484335344457",
            "extra": "mean: 305.7111556000109 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 2272715.0310529657,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 440.00237000091147 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1903067.4859790585,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 525.4674399975556 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 8440948.39111874,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 118.47010000110458 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2647783.9425082547,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 377.6743200023702 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2696418.517150537,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 370.86231000103 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 240799.56107271492,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.1528314899960606 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 26521.201975756725,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 37.70568170002662 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 22516.027713485884,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 44.41280729997743 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.2616384052164697,
            "unit": "iter/sec",
            "range": "stddev: 0.004608993862151937",
            "extra": "mean: 306.59437857999814 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 13641247.203421684,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 73.3070799969937 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 5099771.938152516,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 196.08720000178437 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 244084.96099461408,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.0969341000163695 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_mean",
            "value": 128274.39966965234,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.79578780002339 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_std",
            "value": 38216.97028307536,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 26.166386100021555 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_mean",
            "value": 2113336.2357879044,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 473.18547000031685 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_std",
            "value": 1136653.1212493866,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 879.7758799983058 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 99364.04961349403,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.06400205999853 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}