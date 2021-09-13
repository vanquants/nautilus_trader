window.BENCHMARK_DATA = {
  "lastUpdate": 1631569119858,
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
          "id": "24d2e40d81cd5e144ca949446b792e36641372c3",
          "message": "Refactorings to previous overhaul",
          "timestamp": "2021-09-14T07:17:27+10:00",
          "tree_id": "a76e44cd437307cda33043600fea9e73c693a678",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/24d2e40d81cd5e144ca949446b792e36641372c3"
        },
        "date": 1631569114751,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 2.7307116564453024,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 366.2049039999147 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 2.684514716448861,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 372.5068050000573 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 1.8821832594774437,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 531.2978929998735 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 4911587.737030097,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 203.60015000051135 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 4754791.819778038,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 210.3141499992489 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 5094992.5700160405,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 196.27113999831636 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 7155425.135977401,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 139.7541000005731 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 161.56119816637064,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.189605000145093 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 10346282.84442833,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 96.65306999977474 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 10104575.281063445,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 98.96506999893973 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 5221683.16466824,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 191.50912999975844 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 8844619.406724738,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 113.0630900001961 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2559251.533711679,
            "unit": "iter/sec",
            "range": "stddev: 9.680039666789508e-7",
            "extra": "mean: 390.7392402925325 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 821632.6817673368,
            "unit": "iter/sec",
            "range": "stddev: 0.00000637925835642155",
            "extra": "mean: 1.217088879484436 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 607378.3741383912,
            "unit": "iter/sec",
            "range": "stddev: 0.00002834498282336162",
            "extra": "mean: 1.6464201601161221 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 653790.0536307427,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024633897763391327",
            "extra": "mean: 1.5295429999991939 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3265922.0893863775,
            "unit": "iter/sec",
            "range": "stddev: 9.152957259891793e-7",
            "extra": "mean: 306.19223993426203 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1106317.437551611,
            "unit": "iter/sec",
            "range": "stddev: 0.000001810071475713741",
            "extra": "mean: 903.899700083457 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2417372.3985867575,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014919368494816204",
            "extra": "mean: 413.6722999669473 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 3646305.587270663,
            "unit": "iter/sec",
            "range": "stddev: 8.24015176986481e-7",
            "extra": "mean: 274.250189970644 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1268386.0491645904,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020425096893506727",
            "extra": "mean: 788.4034995959155 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 661259.3636759645,
            "unit": "iter/sec",
            "range": "stddev: 0.000002698761249973229",
            "extra": "mean: 1.5122659200483213 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 735413.1029825307,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022450407823595553",
            "extra": "mean: 1.3597799603303429 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 5698066.412458647,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 175.49812999959613 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 3510728.0828719432,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 284.8412000003009 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 6359740.906741643,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 157.23910999895452 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 10220030.09378778,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 97.84707000108028 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 4476573.3084761575,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 223.3851500000128 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 4612117.462303575,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 216.8201500012401 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 45968.482491976094,
            "unit": "iter/sec",
            "range": "stddev: 0.00010469828191677559",
            "extra": "mean: 21.75403549974817 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 11819.040081452431,
            "unit": "iter/sec",
            "range": "stddev: 0.00010414173137118386",
            "extra": "mean: 84.60924009973496 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 3.9016428776029275,
            "unit": "iter/sec",
            "range": "stddev: 0.19625418650481743",
            "extra": "mean: 256.3022888999967 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 1646344.0584109141,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 607.4064500012355 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1401342.286918022,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 713.6015300011422 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 5594902.32784401,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 178.73412999961147 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2035916.167156045,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 491.1793600012971 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2073577.3248169394,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 482.2583600002872 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 288797.1082050871,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.462638550001884 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 49838.213198787904,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 20.064924799999062 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 40591.35416901977,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 24.635788099999445 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.0189692250039033,
            "unit": "iter/sec",
            "range": "stddev: 0.0060995375161441625",
            "extra": "mean: 331.23888502000455 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 9037173.237333952,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 110.65406999932748 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 4007788.4153815946,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 249.51417000011133 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 239376.3117223105,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.177522800000588 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_mean",
            "value": 118681.74301424752,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.425895799996397 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_std",
            "value": 29422.059657628026,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 33.98810319999939 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_mean",
            "value": 1841612.5881731892,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 543.0023700000675 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_std",
            "value": 1005500.4191083267,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 994.5296699993379 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 86258.02004427288,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.593124900000475 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}