window.BENCHMARK_DATA = {
  "lastUpdate": 1633155385050,
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
      },
      {
        "commit": {
          "author": {
            "name": "nautechsystems",
            "username": "nautechsystems"
          },
          "committer": {
            "name": "nautechsystems",
            "username": "nautechsystems"
          },
          "id": "c2008085e11d5ca65872c6fed6158556e3b560d5",
          "message": "Resolve data class path",
          "timestamp": "2021-09-26T21:03:10Z",
          "url": "https://github.com/nautechsystems/nautilus_trader/pull/451/commits/c2008085e11d5ca65872c6fed6158556e3b560d5"
        },
        "date": 1633154543852,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 2.9962676632294833,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 333.7485540000671 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 9.52097744103387,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 105.03123300031803 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 1.4186825746461735,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 704.8793139997542 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 7296560.758877764,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 137.05086999834748 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 6707896.529124586,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 149.07802999914566 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 7390062.6568459505,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 135.31684999634308 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 9001101.014460707,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 111.09752000265871 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 190.1440360074784,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.259171000034257 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 11940134.553325964,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 83.75115000035294 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 11986219.683000868,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 83.42913999968005 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 5919250.4145425195,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 168.94030999992538 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 10785711.004017217,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 92.71525999793084 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2918018.0484891664,
            "unit": "iter/sec",
            "range": "stddev: 8.750634884804888e-8",
            "extra": "mean: 342.6983601139 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 992258.9505426864,
            "unit": "iter/sec",
            "range": "stddev: 1.0979448735219919e-7",
            "extra": "mean: 1.0078014407963565 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 759269.6132556128,
            "unit": "iter/sec",
            "range": "stddev: 1.4536222813936374e-7",
            "extra": "mean: 1.317055210088256 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 776160.5577679215,
            "unit": "iter/sec",
            "range": "stddev: 1.1819775564495922e-7",
            "extra": "mean: 1.2883932196655223 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 4073136.427170911,
            "unit": "iter/sec",
            "range": "stddev: 6.459948204887415e-8",
            "extra": "mean: 245.51104974761984 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1274846.7966262605,
            "unit": "iter/sec",
            "range": "stddev: 9.623397810873684e-8",
            "extra": "mean: 784.4079795677317 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2635503.642964215,
            "unit": "iter/sec",
            "range": "stddev: 6.479468751755519e-8",
            "extra": "mean: 379.43411790365644 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 4708176.177555246,
            "unit": "iter/sec",
            "range": "stddev: 4.892892789918589e-8",
            "extra": "mean: 212.39646994672512 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1508555.9048741932,
            "unit": "iter/sec",
            "range": "stddev: 9.943733451315495e-8",
            "extra": "mean: 662.885609190198 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 784840.2576466654,
            "unit": "iter/sec",
            "range": "stddev: 1.4135427577172055e-7",
            "extra": "mean: 1.2741446303971316 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 952553.7903872353,
            "unit": "iter/sec",
            "range": "stddev: 2.6529542287071333e-7",
            "extra": "mean: 1.0498094806735025 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 7768151.139493968,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 128.73076000232686 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 4583203.896034926,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 218.1879799991293 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 8633447.807013098,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 115.82858000110718 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 12200013.859257806,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 81.9671199997174 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 5296706.116163912,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 188.79658000059862 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 5428542.145471888,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 184.21151999973517 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 92897.11621942208,
            "unit": "iter/sec",
            "range": "stddev: 0.00004788042604043896",
            "extra": "mean: 10.764596800163417 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 11805.277788865624,
            "unit": "iter/sec",
            "range": "stddev: 0.0001598221414458721",
            "extra": "mean: 84.70787539986304 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 4.708036058988838,
            "unit": "iter/sec",
            "range": "stddev: 0.1865696734209297",
            "extra": "mean: 212.4027912001111 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 2331981.600204516,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 428.81984999894485 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1839210.9549571935,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 543.7114200003634 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 7748287.880182759,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 129.06077000025107 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2554223.9392933585,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 391.5083499987304 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2695613.4578833845,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 370.9730699983993 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 262437.36259858176,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.8104330499982098 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 43619.08755918806,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 22.92574319999403 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 39703.740061731914,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.18654410000636 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.4199061886580027,
            "unit": "iter/sec",
            "range": "stddev: 0.001221513536040677",
            "extra": "mean: 292.4056815699987 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 11644945.156459639,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 85.87416999944253 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 4946362.632838289,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 202.16876000176853 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 265640.8326085357,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.764481500002148 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_mean",
            "value": 152601.64051292025,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.55300950002129 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_std",
            "value": 54117.75943271163,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 18.478222500016273 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_mean",
            "value": 2061708.4598836922,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 485.03462999633484 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_std",
            "value": 1236575.351558764,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 808.6850499967113 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 104308.0909446276,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.586984010002197 usec\nrounds: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "nautechsystems",
            "username": "nautechsystems"
          },
          "committer": {
            "name": "nautechsystems",
            "username": "nautechsystems"
          },
          "id": "c2008085e11d5ca65872c6fed6158556e3b560d5",
          "message": "Resolve data class path",
          "timestamp": "2021-09-26T21:03:10Z",
          "url": "https://github.com/nautechsystems/nautilus_trader/pull/451/commits/c2008085e11d5ca65872c6fed6158556e3b560d5"
        },
        "date": 1633155374283,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 87084.14165532483,
            "unit": "iter/sec",
            "range": "stddev: 0.00004897934427087385",
            "extra": "mean: 11.483147000035387 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 10592.199257708811,
            "unit": "iter/sec",
            "range": "stddev: 0.00016176499120799226",
            "extra": "mean: 94.40910009998333 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 3.744087789598317,
            "unit": "iter/sec",
            "range": "stddev: 0.23290072686209118",
            "extra": "mean: 267.0877543999268 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 2280417.878377186,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 438.5161199979848 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1854229.4547475358,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 539.3075799975122 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 8090161.287804747,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 123.6069300011877 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2514296.857638692,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 397.7255100016919 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2410982.8950480097,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 414.7685999987516 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 250892.26069126575,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.9857746000006955 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 38408.35810121722,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 26.035999699979584 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 34694.324130673784,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 28.823158400018656 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.003082824132947,
            "unit": "iter/sec",
            "range": "stddev: 0.0010536615873858273",
            "extra": "mean: 332.9911489499864 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 12771550.299430346,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 78.29902999674232 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 5073909.869187962,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 197.0866700003171 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 232033.2587211391,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.309726999963459 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_mean",
            "value": 125116.61337565024,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.992543699992894 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_std",
            "value": 43249.422159614885,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 23.121696199996222 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_mean",
            "value": 2060147.2346143415,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 485.40219999722467 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_std",
            "value": 1117583.8338169402,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 894.7874600016803 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 93217.75435493785,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.727570159997413 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 2.5615585030145325,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 390.3873360000034 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 8.170004859848724,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 122.39894799995454 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 1.113619749948283,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 897.9725799999869 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 6788108.18469823,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 147.31645000210847 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 7024487.997366101,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 142.3591299999316 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 7026363.548326402,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 142.32113000161917 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 8967230.60095911,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 111.51714999869 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 160.7355516026166,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.221398999969097 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 12781182.827256564,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 78.24001999779284 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 13090393.091087079,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 76.39190000190865 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 6203961.564478696,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 161.18732999984786 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 11921028.431944005,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 83.88537999962864 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 3020056.524577339,
            "unit": "iter/sec",
            "range": "stddev: 1.1222841503744925e-7",
            "extra": "mean: 331.1196303320685 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 913706.2719029485,
            "unit": "iter/sec",
            "range": "stddev: 2.7004695220904934e-7",
            "extra": "mean: 1.0944436201771168 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 709808.3494700193,
            "unit": "iter/sec",
            "range": "stddev: 2.5575325005709995e-7",
            "extra": "mean: 1.4088309904309426 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 719385.6965026105,
            "unit": "iter/sec",
            "range": "stddev: 2.660690795620926e-7",
            "extra": "mean: 1.3900748998230483 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3926681.4678642107,
            "unit": "iter/sec",
            "range": "stddev: 8.548632702283538e-8",
            "extra": "mean: 254.66797044373382 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1325313.2610989483,
            "unit": "iter/sec",
            "range": "stddev: 1.587583414719034e-7",
            "extra": "mean: 754.5385904995783 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2517166.2503762254,
            "unit": "iter/sec",
            "range": "stddev: 1.2953085117304964e-7",
            "extra": "mean: 397.2721308537075 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 4103633.142375958,
            "unit": "iter/sec",
            "range": "stddev: 1.0687891920285815e-7",
            "extra": "mean: 243.68650054839236 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1229545.3457650088,
            "unit": "iter/sec",
            "range": "stddev: 1.5470750844277758e-7",
            "extra": "mean: 813.3087595706456 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 788081.3413664863,
            "unit": "iter/sec",
            "range": "stddev: 2.870145383056537e-7",
            "extra": "mean: 1.268904550215666 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 781917.0480362339,
            "unit": "iter/sec",
            "range": "stddev: 6.881663082500945e-7",
            "extra": "mean: 1.2789080408356313 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 7729510.420560152,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 129.37429999965389 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 4013759.6497106114,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 249.14297000123042 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 8879242.47992666,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 112.6222199991389 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 15502880.900290169,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 64.50414000028104 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 5271282.05005594,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 189.70717000229342 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 5445532.207583044,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 183.63678000241634 nsec\nrounds: 1"
          }
        ]
      }
    ]
  }
}