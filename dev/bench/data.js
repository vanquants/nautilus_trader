window.BENCHMARK_DATA = {
  "lastUpdate": 1633141577114,
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
          "id": "653eeeaebce13d2e7027216db22140a15507bc6a",
          "message": "Refactor `SimulatedExchange`",
          "timestamp": "2021-10-02T11:31:54+10:00",
          "tree_id": "49c66b36a4163eee302b66c7272593e11a3ef9c6",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/653eeeaebce13d2e7027216db22140a15507bc6a"
        },
        "date": 1633140940533,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 3.133883354724513,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 319.09292299997105 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 10.002805987128015,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 99.97194800007492 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 1.4451959052073555,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 691.947712000001 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 8386851.22878615,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 119.23426000066684 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 8250806.021222073,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 121.2002800002665 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 8345415.408365968,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 119.82627000179492 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 11059139.300121827,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 90.42295000199374 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 191.88867386591767,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.211355000028561 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 16020336.856057731,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 62.420660001407676 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 16104185.060031768,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 62.09565999597544 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 8171584.312636017,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 122.3752899977626 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 14534306.996773563,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 68.80272999751469 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 3384252.116422788,
            "unit": "iter/sec",
            "range": "stddev: 7.93164820128041e-8",
            "extra": "mean: 295.4862597698593 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 1040552.9168950015,
            "unit": "iter/sec",
            "range": "stddev: 1.3488924100922677e-7",
            "extra": "mean: 961.0275304248717 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 754179.4931239422,
            "unit": "iter/sec",
            "range": "stddev: 1.6159145015666128e-7",
            "extra": "mean: 1.3259442998878512 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 767535.2958202594,
            "unit": "iter/sec",
            "range": "stddev: 1.292736172088228e-7",
            "extra": "mean: 1.3028716795770379 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 4584880.327314455,
            "unit": "iter/sec",
            "range": "stddev: 5.759517772136728e-8",
            "extra": "mean: 218.10820100199635 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1539909.5755078965,
            "unit": "iter/sec",
            "range": "stddev: 8.693593536306468e-8",
            "extra": "mean: 649.3887796432318 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2833168.5036889818,
            "unit": "iter/sec",
            "range": "stddev: 6.73213955308593e-8",
            "extra": "mean: 352.9617100775795 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 5000945.408729448,
            "unit": "iter/sec",
            "range": "stddev: 7.153224449253802e-8",
            "extra": "mean: 199.96219079985167 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1486554.728534529,
            "unit": "iter/sec",
            "range": "stddev: 9.298759300362002e-8",
            "extra": "mean: 672.6963903884098 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 929306.6830168718,
            "unit": "iter/sec",
            "range": "stddev: 1.18136874568962e-7",
            "extra": "mean: 1.0760710304521126 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 938149.4843232266,
            "unit": "iter/sec",
            "range": "stddev: 4.4013417995550783e-7",
            "extra": "mean: 1.0659282094275113 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 9239399.682869324,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 108.23214000083681 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 4180120.908311429,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 239.22753000078953 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 10715015.100171462,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 93.32698000434902 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 18611725.349874336,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 53.729569999632076 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 6400260.106614083,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 156.2436499989417 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 6579959.903039489,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 151.97661000001972 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 95228.01830003742,
            "unit": "iter/sec",
            "range": "stddev: 0.00004613141762606058",
            "extra": "mean: 10.501111099983973 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 12213.00963152965,
            "unit": "iter/sec",
            "range": "stddev: 0.00016177551154373225",
            "extra": "mean: 81.87989939992804 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 4.536506223005784,
            "unit": "iter/sec",
            "range": "stddev: 0.16841439911421702",
            "extra": "mean: 220.4339531000187 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 2540891.584617601,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 393.562640001619 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 2156598.790090382,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 463.6931100003494 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 9889957.410474086,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 101.11267000411317 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 3047152.955124975,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 328.17518999763706 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2992818.164190619,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 334.1332299987698 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 279205.76168547175,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.581587980002041 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 44170.89585324846,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 22.639341600006446 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 39619.70000835612,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.239968999994744 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.6447640103905843,
            "unit": "iter/sec",
            "range": "stddev: 0.0006062606574471569",
            "extra": "mean: 274.36618588999863 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 14861950.316027295,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 67.2859199994491 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 6026409.655558264,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 165.9362800000963 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 272677.92050223047,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.6673303000043234 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_mean",
            "value": 154760.94100634486,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.4615787000093405 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_std",
            "value": 53038.16167863264,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 18.854348800005027 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_mean",
            "value": 2285432.198082504,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 437.55400000009104 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_std",
            "value": 1298523.2661024332,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 770.1055699999415 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 111158.98197373212,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.996124129998861 usec\nrounds: 1"
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
          "id": "653eeeaebce13d2e7027216db22140a15507bc6a",
          "message": "Refactor `SimulatedExchange`",
          "timestamp": "2021-10-02T11:31:54+10:00",
          "tree_id": "49c66b36a4163eee302b66c7272593e11a3ef9c6",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/653eeeaebce13d2e7027216db22140a15507bc6a"
        },
        "date": 1633141567621,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 198272.1219061719,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.0435733999620425 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_mean",
            "value": 110589.0863874349,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.042483600023843 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_std",
            "value": 30677.96185046164,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 32.59668959999544 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_mean",
            "value": 1854366.3382659033,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 539.2677700001514 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_std",
            "value": 908568.2097975631,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.1006328300027235 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 89142.03682217916,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.21805194999979 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 2.461545702270397,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 406.2488049999047 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 7.849922050277352,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 127.38979999994626 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 1.0284308494790113,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 972.3551179999959 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 6835791.438314297,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 146.28884000103426 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 6390227.144590698,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 156.48895999675005 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 5303735.097099921,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 188.54637000004004 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 6905322.91296458,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 144.8158199991667 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 203.24947124194847,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.9200620001101925 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 11075898.369097166,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 90.28612999827601 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 10748392.28186716,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 93.03717000420875 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 5035868.223243619,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 198.57548999880237 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 9510194.548095787,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 105.15032000057545 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2843472.906691386,
            "unit": "iter/sec",
            "range": "stddev: 9.656586657391364e-7",
            "extra": "mean: 351.682619393614 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 828551.6096242418,
            "unit": "iter/sec",
            "range": "stddev: 0.000002776606304507737",
            "extra": "mean: 1.2069254206789992 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 687389.2621668936,
            "unit": "iter/sec",
            "range": "stddev: 0.000003181583888852723",
            "extra": "mean: 1.454779780597164 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 661478.7637073459,
            "unit": "iter/sec",
            "range": "stddev: 0.0000027975552947396977",
            "extra": "mean: 1.5117643299618067 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3480404.556619048,
            "unit": "iter/sec",
            "range": "stddev: 8.735690390851382e-7",
            "extra": "mean: 287.32292000313464 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1217544.2286346448,
            "unit": "iter/sec",
            "range": "stddev: 0.0000039226055688864905",
            "extra": "mean: 821.3253995063496 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2377016.66535804,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016045065304378746",
            "extra": "mean: 420.69540974353004 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 3724595.104121553,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012014220839734467",
            "extra": "mean: 268.48555938158825 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1178797.8553836262,
            "unit": "iter/sec",
            "range": "stddev: 0.0000028439029795734306",
            "extra": "mean: 848.3218691253569 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 644834.8002265603,
            "unit": "iter/sec",
            "range": "stddev: 0.0000028299270670894092",
            "extra": "mean: 1.5507847896060412 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 774109.3849655632,
            "unit": "iter/sec",
            "range": "stddev: 0.00000437819134157319",
            "extra": "mean: 1.2918071004196463 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 6500516.075840429,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 153.83394000309636 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 4253075.696730876,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 235.12396000114677 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 7317177.395977941,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 136.66471999840724 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 11918944.029362412,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 83.90004999910161 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 3960644.187680027,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 252.48418000046513 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 4181231.1141715534,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 239.16400999951293 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 73449.52622202052,
            "unit": "iter/sec",
            "range": "stddev: 0.00005920287519099093",
            "extra": "mean: 13.614791700319984 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 8460.268422976358,
            "unit": "iter/sec",
            "range": "stddev: 0.00016032180741954588",
            "extra": "mean: 118.1995593998181 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 3.3462932112737676,
            "unit": "iter/sec",
            "range": "stddev: 0.23304838502792674",
            "extra": "mean: 298.8381282999853 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 1891558.215908209,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 528.6646700005804 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1025876.3985136233,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 974.7762999995758 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 5253221.012375011,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 190.35940000321716 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 1838218.8717997242,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 544.0048599984948 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 1609458.9058689643,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 621.3268300007257 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 228829.2807275533,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.370070109998778 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 24796.452984442054,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 40.32834859999639 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 22493.245486434527,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 44.45779070001663 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.0804137658801265,
            "unit": "iter/sec",
            "range": "stddev: 0.009887345414890017",
            "extra": "mean: 324.63171379000863 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 10135177.936096355,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 98.66624999631313 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 4802852.04881131,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 208.20962000016152 nsec\nrounds: 1"
          }
        ]
      }
    ]
  }
}