window.BENCHMARK_DATA = {
  "lastUpdate": 1628386277572,
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
          "id": "66ee8466e8e85a50ac2d87bb490684cec521c940",
          "message": "Refactor Account machinery\n\n- Move margin calculation methods from `Instrument` to `Account`.\n- Subclass `Account` with `CashAccount` and `MarginAccount`.\n- Allow registration of custom account classes.\n- Add `client_id` to `AccountState` events.",
          "timestamp": "2021-08-08T11:14:14+10:00",
          "tree_id": "7f2c3ec451289be32485805f868b3c6dc98ee1c3",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/66ee8466e8e85a50ac2d87bb490684cec521c940"
        },
        "date": 1628386272376,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 0.3273037894021268,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.0552655739998045 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 0.4247809405114512,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.3541545880000285 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 0.1399825799014388,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.14374603400006 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 7441425.747340922,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 134.3828500012023 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 6925666.269967821,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 144.3904399980056 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 7805823.581564312,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 128.10947999923883 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 8966477.211009558,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 111.52651999964291 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 201.43055983513108,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.964490000020305 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 12189355.791486062,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 82.03878999893277 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 12538923.954605987,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 79.75166000051104 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 6881436.7669614665,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 145.31848999922659 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 11178651.280300735,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 89.45622999817715 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 3515047.589973676,
            "unit": "iter/sec",
            "range": "stddev: 2.5915811325443645e-7",
            "extra": "mean: 284.49116957972365 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 1044405.6094472473,
            "unit": "iter/sec",
            "range": "stddev: 4.444351879522324e-7",
            "extra": "mean: 957.4824100468503 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 751163.2136744207,
            "unit": "iter/sec",
            "range": "stddev: 5.680496909653391e-7",
            "extra": "mean: 1.3312686002132068 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 734210.4285544493,
            "unit": "iter/sec",
            "range": "stddev: 6.307323476541696e-7",
            "extra": "mean: 1.362007349812302 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 4275829.4842783,
            "unit": "iter/sec",
            "range": "stddev: 2.703906391453497e-7",
            "extra": "mean: 233.87274999549845 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1311179.38375401,
            "unit": "iter/sec",
            "range": "stddev: 4.5846484551409716e-7",
            "extra": "mean: 762.6721502720102 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 3007188.8663163674,
            "unit": "iter/sec",
            "range": "stddev: 2.980779521516802e-7",
            "extra": "mean: 332.5364799002273 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 4854365.158951603,
            "unit": "iter/sec",
            "range": "stddev: 1.8871368382693793e-7",
            "extra": "mean: 206.00016011485422 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1554702.6550749675,
            "unit": "iter/sec",
            "range": "stddev: 3.54924870978017e-7",
            "extra": "mean: 643.209810400549 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 805537.6977947364,
            "unit": "iter/sec",
            "range": "stddev: 5.884644838145908e-7",
            "extra": "mean: 1.2414068301677617 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 914788.9630147428,
            "unit": "iter/sec",
            "range": "stddev: 5.946970675473208e-7",
            "extra": "mean: 1.0931483002423192 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 7945272.959767284,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 125.86100000135048 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 5026917.635865904,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 198.92905999995492 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 9192439.586191285,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 108.78504999936922 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 14061740.885474676,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 71.1149500011743 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 5103658.103071289,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 195.9378900005504 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 4999647.024906041,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 200.01412000056007 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_mean",
            "value": 159868.58035363405,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.2551377999852775 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_std",
            "value": 59015.217433825965,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 16.94478209999488 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_mean",
            "value": 2501380.574478323,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 399.77922999923976 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_std",
            "value": 1392201.3031747625,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 718.2869300004313 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 79712.03358347189,
            "unit": "iter/sec",
            "range": "stddev: 0.0000506902628085422",
            "extra": "mean: 12.54515729990544 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 17562.899989606158,
            "unit": "iter/sec",
            "range": "stddev: 0.00012622856390097166",
            "extra": "mean: 56.938204999846675 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 5.394487071461088,
            "unit": "iter/sec",
            "range": "stddev: 0.17767339298024654",
            "extra": "mean: 185.37443630004873 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 2094660.9543006106,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 477.40423000050214 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1819610.4770786774,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 549.5681699994748 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 7479049.499467338,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 133.70683000175632 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2820685.4970947523,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 354.5237499997711 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2660317.3758491627,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 375.89500000194676 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 371623.22236365144,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.6908974999992097 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 79349.28759739462,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 12.602507599990531 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 63439.52911731635,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 15.76304259999688 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.5440910902549647,
            "unit": "iter/sec",
            "range": "stddev: 0.005828278071716338",
            "extra": "mean: 282.159790630003 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 11584388.738457153,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 86.32307000198125 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 5080047.321620703,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 196.84856000139916 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 309975.7031761974,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.226059299981898 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 108557.95407902046,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.211669549999897 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}