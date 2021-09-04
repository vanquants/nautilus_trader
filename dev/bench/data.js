window.BENCHMARK_DATA = {
  "lastUpdate": 1630794529609,
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
          "id": "0bb94b7fec31ba3ead45a70d4c88034983e35e98",
          "message": "Refine core",
          "timestamp": "2021-09-05T08:07:28+10:00",
          "tree_id": "3fd12542cb23b1dcb9b771619c9664a3e8928735",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/0bb94b7fec31ba3ead45a70d4c88034983e35e98"
        },
        "date": 1630794517229,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 0.26555186485466026,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.7657427130000087 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 0.6667544577816068,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.4998024960000294 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 0.2535302122264032,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.9443030919999273 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 6191220.552068695,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 161.51904000025752 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 5318176.671676688,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 188.03436999860423 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 5982109.902153968,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 167.165099999238 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 7410827.367017194,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 134.93769999968208 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 166.859250054485,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.993074999878445 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 9768840.894772438,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 102.36629000019093 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 10195838.609095836,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 98.07923000153096 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 4409212.873924441,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 226.79785000036645 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 8788394.187294167,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 113.78642999943622 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2685052.0410586693,
            "unit": "iter/sec",
            "range": "stddev: 4.24253822113212e-7",
            "extra": "mean: 372.43226004875396 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 805409.9319880783,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016970857333341668",
            "extra": "mean: 1.2416037601269636 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 632205.3629925359,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012460091938249152",
            "extra": "mean: 1.5817645001720848 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 624089.4185039784,
            "unit": "iter/sec",
            "range": "stddev: 0.0000038604864675038566",
            "extra": "mean: 1.6023344898189862 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3451578.312954012,
            "unit": "iter/sec",
            "range": "stddev: 0.000001042910103884628",
            "extra": "mean: 289.7225296169381 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1163265.8912311234,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010680701589678651",
            "extra": "mean: 859.6486904139056 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2196100.5830957736,
            "unit": "iter/sec",
            "range": "stddev: 0.000004741632269335331",
            "extra": "mean: 455.3525497408373 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 3913969.8473692955,
            "unit": "iter/sec",
            "range": "stddev: 4.5244109805435935e-7",
            "extra": "mean: 255.49506996640048 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1289542.2499415353,
            "unit": "iter/sec",
            "range": "stddev: 9.000234982445374e-7",
            "extra": "mean: 775.4689697412687 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 684078.0866069103,
            "unit": "iter/sec",
            "range": "stddev: 0.0000030183506772066",
            "extra": "mean: 1.4618214200663715 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 759042.901243545,
            "unit": "iter/sec",
            "range": "stddev: 0.000001093952987070273",
            "extra": "mean: 1.3174485900094624 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 6244028.367403569,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 160.153019999143 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 3863983.753325121,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 258.80026000095313 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 7019820.251920677,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 142.45378999930836 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 10037212.966993155,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 99.62925000081668 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 4446819.243555232,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 224.8798400000851 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 4607960.906802675,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 217.01572999972996 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_mean",
            "value": 143714.96516570947,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.958217600003991 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_std",
            "value": 46702.93682123776,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 21.411929700002474 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_mean",
            "value": 1916022.3498586402,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 521.9145800015212 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_std",
            "value": 1091595.1604527982,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 916.090539999459 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 81747.73986550925,
            "unit": "iter/sec",
            "range": "stddev: 0.00005368208341731249",
            "extra": "mean: 12.232754099932208 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 14230.928220894864,
            "unit": "iter/sec",
            "range": "stddev: 0.00014900381839946632",
            "extra": "mean: 70.2694851999695 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 4.5431085440887085,
            "unit": "iter/sec",
            "range": "stddev: 0.17813882292458824",
            "extra": "mean: 220.11360510000486 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 1952074.730415966,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 512.2754700005316 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1648025.710517642,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 606.7866500006858 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 6443010.029934805,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 155.20696000066891 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2225899.0612132973,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 449.2566700014322 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2129290.8377717957,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 469.6399299996301 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 302466.5493773975,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.306150720000005 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 59573.625130945606,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 16.78595180001139 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 51876.06333286086,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 19.276713299996118 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 2.857320981144965,
            "unit": "iter/sec",
            "range": "stddev: 0.003501797901445841",
            "extra": "mean: 349.9781811700018 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 9652203.129702795,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 103.60329000150159 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 4341184.829153651,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 230.35186000015528 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 245434.8805434442,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.074400499985131 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 86597.15611666071,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.547723329999826 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}