window.BENCHMARK_DATA = {
  "lastUpdate": 1631489094742,
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
          "id": "7b25c261699fa4c456b942e66b7cc3bb476a537f",
          "message": "Update README",
          "timestamp": "2021-09-13T09:07:10+10:00",
          "tree_id": "e504f695dd7e567cd30b9103c3132cea7fbdc760",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/7b25c261699fa4c456b942e66b7cc3bb476a537f"
        },
        "date": 1631489090990,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 0.25437625319286533,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.9311845640002048 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 0.6537302510681,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.5296829210001306 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 0.2438165595176325,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.101444142999981 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 7650055.260160305,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 130.71801000023697 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 7190851.4535506945,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 139.0655900013371 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 7511557.093944164,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 133.1281900002068 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 9353891.190679008,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 106.90737999993871 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 197.97087769308678,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.051247999972475 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 12451975.842130378,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 80.30854000026011 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 11685804.70401169,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 85.57390999840209 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 5878523.601729991,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 170.11074000038207 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 8706029.003468147,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 114.86292999961734 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2971782.4195308154,
            "unit": "iter/sec",
            "range": "stddev: 5.993546064202084e-7",
            "extra": "mean: 336.4983901337837 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 953213.4251000467,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019748917945669454",
            "extra": "mean: 1.0490830003732299 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 696418.7240131088,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015310739502876056",
            "extra": "mean: 1.4359177395999723 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 751628.70054687,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014728211273736216",
            "extra": "mean: 1.330444139869087 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 4141626.2203029655,
            "unit": "iter/sec",
            "range": "stddev: 0.000001018303807315831",
            "extra": "mean: 241.45105009665713 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1236800.830353865,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020494922090840985",
            "extra": "mean: 808.537620171137 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2386166.5521332896,
            "unit": "iter/sec",
            "range": "stddev: 0.000013956269232263875",
            "extra": "mean: 419.0822300756736 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 5054579.358285415,
            "unit": "iter/sec",
            "range": "stddev: 4.88780056374119e-7",
            "extra": "mean: 197.84039958949506 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1321334.3160551894,
            "unit": "iter/sec",
            "range": "stddev: 0.000006449739730539992",
            "extra": "mean: 756.8107388487988 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 750423.8490157449,
            "unit": "iter/sec",
            "range": "stddev: 0.00000610759662756139",
            "extra": "mean: 1.3325802495637618 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 900086.8659216155,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017509962713976275",
            "extra": "mean: 1.111003879582313 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 6802298.142900806,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 147.00913999831755 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 3836606.892583018,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 260.6469800002742 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 4909395.871812237,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 203.69105000099808 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 8660110.328053193,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 115.47197000027154 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 4737752.1526183635,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 211.07056000118973 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 5158405.076841699,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 193.8583700007257 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 67939.41836601325,
            "unit": "iter/sec",
            "range": "stddev: 0.00006879237292198252",
            "extra": "mean: 14.718995600060223 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 11059.078258485803,
            "unit": "iter/sec",
            "range": "stddev: 0.00012496451837054268",
            "extra": "mean: 90.42344910008069 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 3.832605410612096,
            "unit": "iter/sec",
            "range": "stddev: 0.18947162946826535",
            "extra": "mean: 260.9191118999888 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 2447703.6488882955,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 408.54618999901504 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 2018517.1496592355,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 495.41318000137835 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 7244301.686636732,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 138.0395299997872 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2762049.593253405,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 362.0499800013022 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2645327.1301530893,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 378.0250799991336 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 366221.16594284493,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.7305903999990733 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 45855.77388804726,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 21.80750459999672 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 39137.23851925557,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.551112900006956 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.704722896161278,
            "unit": "iter/sec",
            "range": "stddev: 0.005415159113739085",
            "extra": "mean: 269.9257213099986 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 11588702.12784553,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 86.29094000070836 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 5085524.278864902,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 196.63656000147967 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 236999.35308681673,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.219420799995532 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_mean",
            "value": 131788.71685607595,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.587903000012375 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_std",
            "value": 32526.820624228785,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 30.74385939999047 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_mean",
            "value": 2300527.2095138505,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 434.6829700011767 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_std",
            "value": 1315982.7499957762,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 759.8883799983014 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 99838.17250585606,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.016208980000556 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}