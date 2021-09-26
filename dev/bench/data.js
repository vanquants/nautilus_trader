window.BENCHMARK_DATA = {
  "lastUpdate": 1632646980430,
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
          "id": "b169713f5d1d5a04a43726bb84a2abc15556b176",
          "message": "Update release notes",
          "timestamp": "2021-09-26T17:51:21+10:00",
          "tree_id": "f83646e0bd5f0b57207290b07b415a748fd0938f",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/b169713f5d1d5a04a43726bb84a2abc15556b176"
        },
        "date": 1632646972368,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 1970265.1135368447,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 507.54591000440996 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1548685.0757844308,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 645.709069995064 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 6126775.233203794,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 163.2179999978689 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2246008.5003766576,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 445.2342900003714 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2100817.8273747377,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 476.0050999993837 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 294640.7765577199,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.3939633600039087 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 31693.81422510212,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 31.551898199995776 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 28102.309808686965,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 35.58426359995792 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 2.963009094336848,
            "unit": "iter/sec",
            "range": "stddev: 0.006055864141245496",
            "extra": "mean: 337.49474543000355 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 10324455.29992905,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 96.85740999884729 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 4278118.974396741,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 233.74759000034828 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 211822.60322923903,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.720931500014558 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_mean",
            "value": 125951.21189098505,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.939582200015138 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_std",
            "value": 35160.46012170747,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 28.44103850002284 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_mean",
            "value": 1811933.3495566577,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 551.8966799991176 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_std",
            "value": 1049121.7146407429,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 953.1782500016561 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 87319.16277793136,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.452239899999768 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 2.5486724306851594,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 392.36113199967804 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 8.155088714615706,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 122.62282299980143 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 1.636138699121695,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 611.1951270004283 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 6700030.1367824655,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 149.253059998955 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 6170402.577823919,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 162.06398000576883 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 6223434.492142567,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 160.6829799948173 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 7456501.566021972,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 134.11115000053542 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 166.14988513188612,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.018662000315089 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 10879805.242087156,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 91.91341000587272 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 10884896.357138475,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 91.87042000121437 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 4956660.93938614,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 201.7487200009782 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 9390171.28870815,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 106.49433000253339 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2621359.656649983,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010632658594786918",
            "extra": "mean: 381.48141841702454 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 812960.4704321597,
            "unit": "iter/sec",
            "range": "stddev: 0.000017832826505397137",
            "extra": "mean: 1.230072108510285 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 668179.7048265379,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026253160543426076",
            "extra": "mean: 1.4966033729797346 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 662715.7544710668,
            "unit": "iter/sec",
            "range": "stddev: 0.00001413566910300164",
            "extra": "mean: 1.5089425492806186 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3548574.625792058,
            "unit": "iter/sec",
            "range": "stddev: 7.434080568126913e-7",
            "extra": "mean: 281.80328877169813 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1117837.5273724594,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011803651952853095",
            "extra": "mean: 894.5843877245352 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2388536.608463762,
            "unit": "iter/sec",
            "range": "stddev: 7.580997074791601e-7",
            "extra": "mean: 418.66639031468367 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 3978556.0409288155,
            "unit": "iter/sec",
            "range": "stddev: 4.567086205980655e-7",
            "extra": "mean: 251.34747122137924 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1197959.429807964,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014318270665794679",
            "extra": "mean: 834.7528097510803 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 677044.7610694497,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018474569334619415",
            "extra": "mean: 1.4770072194642125 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 768210.5797135769,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018277630935079717",
            "extra": "mean: 1.3017264099289605 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 5995924.569902963,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 166.77995000463852 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 3676885.995278797,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 271.9692699974985 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 6819278.947079931,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 146.64307000202825 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 10676185.838351253,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 93.66641000269738 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 3705030.790843611,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 269.903290000002 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 4140144.384201409,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 241.53747000127623 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 70030.36664388512,
            "unit": "iter/sec",
            "range": "stddev: 0.00006161007603583903",
            "extra": "mean: 14.279519698720833 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 7716.451537278548,
            "unit": "iter/sec",
            "range": "stddev: 0.00020032920760319848",
            "extra": "mean: 129.59324569965247 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 3.327317126945511,
            "unit": "iter/sec",
            "range": "stddev: 0.23438831140645264",
            "extra": "mean: 300.54243759987 msec\nrounds: 10"
          }
        ]
      }
    ]
  }
}