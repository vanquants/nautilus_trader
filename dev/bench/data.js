window.BENCHMARK_DATA = {
  "lastUpdate": 1630219289789,
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
          "id": "1d03641d00bbda9034bf9e4c911967d7131d880f",
          "message": "Add instrument types\n\n- Update schemas.\n- Update providers.",
          "timestamp": "2021-08-29T16:19:59+10:00",
          "tree_id": "3a71dca4260b6becd3fad4b9db0a2acd2d320ff8",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/1d03641d00bbda9034bf9e4c911967d7131d880f"
        },
        "date": 1630219280602,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 0.23172604939158278,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.315440593000176 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 0.607659582704295,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.645658241000092 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 0.21411095563905244,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.6704756280000765 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 6075576.280499302,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 164.5934400016813 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 5680217.070644015,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 176.04960999960895 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 5645678.780485534,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 177.12662000121782 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 6826769.428634427,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 146.4821700005814 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 162.73946502012691,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.144790999996985 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 9564842.698884035,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 104.54955000113841 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 9297603.263696723,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 107.55460000154926 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 4701608.867062441,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 212.69314999926792 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 8670341.562057156,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 115.33570999972653 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2398667.3406023066,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013645436214444841",
            "extra": "mean: 416.898159687662 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 692071.5664497976,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015603617886906315",
            "extra": "mean: 1.4449372701869834 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 560676.5038114176,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018953640948590245",
            "extra": "mean: 1.7835596697955225 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 555443.2141007592,
            "unit": "iter/sec",
            "range": "stddev: 0.000004361300700898449",
            "extra": "mean: 1.8003640599317805 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3508254.802124522,
            "unit": "iter/sec",
            "range": "stddev: 8.666819637373207e-7",
            "extra": "mean: 285.0420098889117 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1130063.9026049916,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013005390072553815",
            "extra": "mean: 884.9057099291713 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2346370.5109147695,
            "unit": "iter/sec",
            "range": "stddev: 8.989714176374548e-7",
            "extra": "mean: 426.19014999900173 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 3934103.596065482,
            "unit": "iter/sec",
            "range": "stddev: 6.508470015343718e-7",
            "extra": "mean: 254.18751072038506 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1251568.8257832942,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018180423839037006",
            "extra": "mean: 798.9972100608611 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 649590.1286522475,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021668823637849522",
            "extra": "mean: 1.5394322602696775 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 717878.4547941595,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015460936546968423",
            "extra": "mean: 1.392993470303736 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 5958250.893463576,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 167.8344900005868 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 3421267.5502029215,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 292.2893300001306 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 5921802.246067444,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 168.86750999901778 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 9441393.353411783,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 105.91656999849874 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 4134357.0111552435,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 241.87557999994172 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 4231595.205593755,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 236.31750000049578 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_mean",
            "value": 111380.73912926369,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.978213000000324 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_std",
            "value": 37071.19814612509,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 26.97511950000262 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_mean",
            "value": 1861071.219563831,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 537.324950000766 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_std",
            "value": 1031992.4363209252,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 968.9993500001037 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 61886.78282157785,
            "unit": "iter/sec",
            "range": "stddev: 0.00007321505565644566",
            "extra": "mean: 16.1585391000699 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 10390.9377414947,
            "unit": "iter/sec",
            "range": "stddev: 0.0001542300079899568",
            "extra": "mean: 96.23770489997696 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 3.382497844797582,
            "unit": "iter/sec",
            "range": "stddev: 0.23179733071185107",
            "extra": "mean: 295.63950839999507 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 1650726.208931296,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 605.7939800007262 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1390047.899244806,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 719.3996699993477 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 5577535.38302332,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 179.2906600007882 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2066670.0739126494,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 483.87017000095506 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2163538.17243383,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 462.20585000128267 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 280675.05933178327,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.562838830000601 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 44787.21393117662,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 22.32780100000582 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 38767.665242644405,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.794692399995256 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 2.92451058268824,
            "unit": "iter/sec",
            "range": "stddev: 0.00220084676629748",
            "extra": "mean: 341.93755561000216 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 9390501.958102614,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 106.49057999899014 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 4032734.8378448584,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 247.97067999998035 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 257393.7844597873,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.885097700003825 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 84541.42008132646,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.828521439999804 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}