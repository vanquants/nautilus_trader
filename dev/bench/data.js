window.BENCHMARK_DATA = {
  "lastUpdate": 1631059648241,
  "repoUrl": "https://github.com/nautechsystems/nautilus_trader",
  "entries": {
    "Benchmark with pytest-benchmark": [
      {
        "commit": {
          "author": {
            "email": "bradley.mcelroy@live.com",
            "name": "Bradley McElroy",
            "username": "limx0"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b3c11bd7f41420a405b081af8d6c1f7491331159",
          "message": "Split backtest sync vs dask (#431)\n\n* Split backtest sync vs dask\r\n\r\n* Add simple doc\r\n\r\n* Fix test",
          "timestamp": "2021-09-08T09:49:53+10:00",
          "tree_id": "2091a3a23df7df319b3e2362930acd2d64de5280",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/b3c11bd7f41420a405b081af8d6c1f7491331159"
        },
        "date": 1631059630751,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 0.3100182388938247,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.225616672000001 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 0.7520865230419419,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.3296342500000264 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 0.2964663907036898,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.373063630000047 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 7207169.80782973,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 138.75072000018918 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 6342000.628510937,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 157.6789499995357 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 7236062.27675429,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 138.19670999964728 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 8642562.042555805,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 115.70643000027303 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 185.91624919443908,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.3787659999215975 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 11635609.479533834,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 85.94307000066692 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 10197607.192707844,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 98.06221999951958 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 6173182.460756142,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 161.9909999999436 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 10665397.05780256,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 93.76115999998547 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2830895.1244041235,
            "unit": "iter/sec",
            "range": "stddev: 9.503980973269142e-8",
            "extra": "mean: 353.2451595890507 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 974163.5271007929,
            "unit": "iter/sec",
            "range": "stddev: 1.2312739639613054e-7",
            "extra": "mean: 1.026521700084686 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 714156.1717202308,
            "unit": "iter/sec",
            "range": "stddev: 1.5281530019510698e-7",
            "extra": "mean: 1.4002539494845223 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 707272.351098992,
            "unit": "iter/sec",
            "range": "stddev: 1.361590066702998e-7",
            "extra": "mean: 1.4138825000668476 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 4095505.2167692618,
            "unit": "iter/sec",
            "range": "stddev: 3.178545422386661e-7",
            "extra": "mean: 244.1701199416002 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1381450.3542260986,
            "unit": "iter/sec",
            "range": "stddev: 1.367563879301955e-7",
            "extra": "mean: 723.876900057121 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2861048.926263965,
            "unit": "iter/sec",
            "range": "stddev: 6.920258438720257e-8",
            "extra": "mean: 349.52215979956236 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 4748598.96362054,
            "unit": "iter/sec",
            "range": "stddev: 7.908156615266447e-8",
            "extra": "mean: 210.58842990555604 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1427008.202200974,
            "unit": "iter/sec",
            "range": "stddev: 1.009112911058439e-7",
            "extra": "mean: 700.7668200208172 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 788618.9539638521,
            "unit": "iter/sec",
            "range": "stddev: 1.26947037461192e-7",
            "extra": "mean: 1.2680395201937245 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 904171.5829107146,
            "unit": "iter/sec",
            "range": "stddev: 2.52129256427662e-7",
            "extra": "mean: 1.1059847698163594 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 7123434.082189862,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 140.38173000017196 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 4582138.941552976,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 218.23868999945262 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 8653780.668061467,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 115.55642999951488 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 11983506.381157294,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 83.44802999999956 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 5362525.49209324,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 186.47930000042834 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 5517142.755615637,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 181.25324000038745 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 60735.027572087005,
            "unit": "iter/sec",
            "range": "stddev: 0.00009620938019143446",
            "extra": "mean: 16.4649633000181 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 16636.8803011816,
            "unit": "iter/sec",
            "range": "stddev: 0.00014556493539437745",
            "extra": "mean: 60.1074229000119 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 5.3108770474230695,
            "unit": "iter/sec",
            "range": "stddev: 0.1556152130331014",
            "extra": "mean: 188.29281700001275 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 1930936.6894731566,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 517.8833699994811 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1935264.062423988,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 516.7253500007973 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 7715776.115612318,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 129.6045900005538 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2567903.1265718923,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 389.42279000025337 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2666200.1882826844,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 375.06560999986505 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 350810.838035744,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.8505390699990585 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 78045.81033075994,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 12.81298760000027 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 67382.52740743916,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 14.840642499996193 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.4544111423547483,
            "unit": "iter/sec",
            "range": "stddev: 0.0006380120178640803",
            "extra": "mean: 289.48493934000453 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 11677057.886121765,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 85.63800999809246 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 4765093.2900232775,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 209.85948000088683 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 295869.367756451,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.379870000003393 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_mean",
            "value": 159832.39591325575,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.256553900016115 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_std",
            "value": 54558.181679654794,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 18.329056600009608 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_mean",
            "value": 2015231.6853427165,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 496.22085999999393 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_std",
            "value": 1157601.399428814,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 863.8552100001107 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 96616.1207546963,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.350239610002063 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}