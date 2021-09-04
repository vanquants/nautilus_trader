window.BENCHMARK_DATA = {
  "lastUpdate": 1630713844885,
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
          "id": "0f8fdda49a585c3ef8b6838d601fa6908a0735f4",
          "message": "Fix betting instrument test",
          "timestamp": "2021-09-04T09:42:11+10:00",
          "tree_id": "55b32d9588ee50edb7b3846a3adfee0cb89e4999",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/0f8fdda49a585c3ef8b6838d601fa6908a0735f4"
        },
        "date": 1630713831984,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 0.24597327549211362,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.065482309000117 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 0.636490718505509,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.5711148190000586 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 0.23138207219120824,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.321856013000115 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 5729118.894166203,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 174.54691000011735 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 5931624.50348073,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 168.5878800003593 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 6590229.233826789,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 151.73979000110194 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 6767055.025674918,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 147.77477000052386 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 170.91300015695037,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.850929999951404 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 10141832.513637252,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 98.60150999884354 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 10245743.124117453,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 97.6015100013683 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 4976311.513129225,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 200.95204999961425 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 5340112.285417417,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 187.26198000194927 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2833152.2078013457,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010005452499624254",
            "extra": "mean: 352.96374026302146 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 836525.1721473725,
            "unit": "iter/sec",
            "range": "stddev: 0.0000037846548526781342",
            "extra": "mean: 1.1954212895147975 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 676993.3196123006,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023468876258745177",
            "extra": "mean: 1.477119450119062 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 675141.9530141299,
            "unit": "iter/sec",
            "range": "stddev: 0.000004219252567657636",
            "extra": "mean: 1.4811699903043518 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3244051.3071340625,
            "unit": "iter/sec",
            "range": "stddev: 0.000006647982741901561",
            "extra": "mean: 308.25653028387023 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1133678.26198996,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024088436585122147",
            "extra": "mean: 882.0844798106009 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2295250.8270604894,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014461742244043362",
            "extra": "mean: 435.6822305476271 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 3797468.4069389007,
            "unit": "iter/sec",
            "range": "stddev: 0.000001190794697714672",
            "extra": "mean: 263.33332969215917 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1222846.479460748,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019491661397391985",
            "extra": "mean: 817.764140304007 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 667304.3204074244,
            "unit": "iter/sec",
            "range": "stddev: 0.000003324497509719996",
            "extra": "mean: 1.4985666500547268 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 641897.9267860452,
            "unit": "iter/sec",
            "range": "stddev: 0.000007800317152588937",
            "extra": "mean: 1.5578800900743772 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 5633868.836352572,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 177.4979199990412 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 3651641.8402458127,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 273.8494200002606 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 6417792.379560727,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 155.8168199994725 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 9003609.276828475,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 111.06657000027553 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 4209866.385992879,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 237.53723000027094 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 4239403.705835856,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 235.8822299993335 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_mean",
            "value": 113337.35907637735,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.823215999996137 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_std",
            "value": 31936.359267176107,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 31.312273000003184 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_mean",
            "value": 1447463.7251109893,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 690.8636000002844 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_std",
            "value": 886980.2099724002,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.127420870000151 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 45860.52870336168,
            "unit": "iter/sec",
            "range": "stddev: 0.00010749906425123149",
            "extra": "mean: 21.80524359996525 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 10930.634637453562,
            "unit": "iter/sec",
            "range": "stddev: 0.00015047810312751668",
            "extra": "mean: 91.48599630011631 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 3.7538506042270274,
            "unit": "iter/sec",
            "range": "stddev: 0.20370179669835514",
            "extra": "mean: 266.39312679997147 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 1861483.962733468,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 537.2058099987953 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1617831.7676258243,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 618.1112400008715 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 5618926.747891324,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 177.96993000047223 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2032898.0641088206,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 491.90857999974475 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 1968718.36453924,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 507.94467000059734 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 274307.77678190806,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.645540099998925 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 47793.174996966525,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 20.92348959999981 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 40073.25262344419,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 24.954300800004603 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 2.922083612532187,
            "unit": "iter/sec",
            "range": "stddev: 0.003426072743611169",
            "extra": "mean: 342.2215557799973 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 9642777.520929784,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 103.70456000146078 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 4008444.5098800627,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 249.47333000000071 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 243465.2763375977,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.107361899991702 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 89936.40967011226,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.118967319998774 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}