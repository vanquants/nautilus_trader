window.BENCHMARK_DATA = {
  "lastUpdate": 1630614489392,
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
          "id": "62c462857ca390e20263a910126ce0890545b9e7",
          "message": "Merge remote-tracking branch 'origin/develop' into develop",
          "timestamp": "2021-09-03T06:05:06+10:00",
          "tree_id": "47df2ef0bf9fd1253a926a05677dfa73e4cb55ad",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/62c462857ca390e20263a910126ce0890545b9e7"
        },
        "date": 1630614360936,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 6305556.285944381,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 158.59029000012015 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 3817195.427146552,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 261.972439998317 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 7184120.163371038,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 139.19588999897314 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 9966602.910438979,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 100.3350899986799 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 4466645.658510169,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 223.88165000165827 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 4596358.801326082,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 217.56352000011248 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_mean",
            "value": 136050.1162916963,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.350232599992523 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_std",
            "value": 46627.86097130238,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 21.446405200003937 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_mean",
            "value": 1916550.2218726906,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 521.7708299983315 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_std",
            "value": 1065841.8699103086,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 938.2254799993461 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 70135.10082382563,
            "unit": "iter/sec",
            "range": "stddev: 0.0000675558460152612",
            "extra": "mean: 14.258195800016436 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 15050.768680978661,
            "unit": "iter/sec",
            "range": "stddev: 0.00012617539132517427",
            "extra": "mean: 66.44178920003014 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 4.358002701598065,
            "unit": "iter/sec",
            "range": "stddev: 0.1893685722980503",
            "extra": "mean: 229.46291419996214 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 1895684.3570268208,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 527.513980000549 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1649779.4690265155,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 606.1416200009262 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 6466330.270950308,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 154.64721999933317 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2226753.170099359,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 449.08434999797464 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2236554.510842211,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 447.11630999927365 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 310446.1021701075,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.221171059999506 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 59251.775452799135,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 16.87713139999687 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 52708.63064297206,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 18.97222499999316 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 2.8775178815927114,
            "unit": "iter/sec",
            "range": "stddev: 0.0011009578502248654",
            "extra": "mean: 347.5217326699976 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 9543607.510461899,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 104.78217999889239 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 4117089.0237522773,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 242.8900599988992 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 254294.92688246554,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.9324417999978323 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 86318.619187016,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.584986059999665 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 0.24426686355827273,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.093883162999873 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 0.5266485043784668,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.8987996579999162 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 0.24368423067247055,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.1036713669998335 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 6022301.667039434,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 166.04947000132597 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 6041256.830253131,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 165.52847000184556 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 6064080.962795669,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 164.90544999896883 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 7398593.2166813845,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 135.16083000013168 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 159.5600737288204,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.267232000027434 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 9512648.016722651,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 105.12320000088948 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 10006495.216075795,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 99.93508999968981 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 5103053.61623627,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 195.96110000065892 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 8853838.705606708,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 112.94536000150401 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2333546.6033521835,
            "unit": "iter/sec",
            "range": "stddev: 1.002149080452728e-7",
            "extra": "mean: 428.5322601072039 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 792598.606511082,
            "unit": "iter/sec",
            "range": "stddev: 1.9378525983817624e-7",
            "extra": "mean: 1.261672669854761 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 556992.8167110821,
            "unit": "iter/sec",
            "range": "stddev: 1.7543278987473136e-7",
            "extra": "mean: 1.7953552900462455 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 581894.8175111787,
            "unit": "iter/sec",
            "range": "stddev: 1.758757568646403e-7",
            "extra": "mean: 1.7185236401951443 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3681852.048191517,
            "unit": "iter/sec",
            "range": "stddev: 1.2630222282010924e-7",
            "extra": "mean: 271.6024399978778 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1194900.6948627362,
            "unit": "iter/sec",
            "range": "stddev: 1.4095812654869015e-7",
            "extra": "mean: 836.8896296565254 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2383363.324101973,
            "unit": "iter/sec",
            "range": "stddev: 1.1856540667104023e-7",
            "extra": "mean: 419.5751398401626 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 4085820.035447453,
            "unit": "iter/sec",
            "range": "stddev: 7.60120764714444e-8",
            "extra": "mean: 244.74890996771134 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1223323.3401302146,
            "unit": "iter/sec",
            "range": "stddev: 1.596814690667017e-7",
            "extra": "mean: 817.4453696710771 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 675456.2389850625,
            "unit": "iter/sec",
            "range": "stddev: 1.8059302939966692e-7",
            "extra": "mean: 1.4804808102780953 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 763856.2414418103,
            "unit": "iter/sec",
            "range": "stddev: 2.8524346315195723e-7",
            "extra": "mean: 1.3091468600327971 usec\nrounds: 100000"
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
          "id": "82a8bcc439c6502de434cd18e4998d9833bccf2a",
          "message": "Update dependencies",
          "timestamp": "2021-09-03T06:08:12+10:00",
          "tree_id": "ad473a5416a154394ef182f532e5eefb6a590f7b",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/82a8bcc439c6502de434cd18e4998d9833bccf2a"
        },
        "date": 1630614479860,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 0.31242433307207307,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.200775017000069 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 0.759930582104288,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.3159096680001312 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 0.29839479762922644,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.3512648609998905 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 6872967.491711558,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 145.4975599995123 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 6404478.421181904,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 156.14074000041 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 7255397.689411669,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 137.82841999955053 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 8836264.808208153,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 113.16999000200667 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 197.45328699477065,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.0644890000057785 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 11608803.745192762,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 86.14152000063768 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 11854594.390199365,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 84.35548000079507 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 6141794.629890669,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 162.81886000115264 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 10594605.269484248,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 94.38765999902898 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2855226.021557242,
            "unit": "iter/sec",
            "range": "stddev: 6.935129320970248e-8",
            "extra": "mean: 350.2349699988372 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 924754.1340123685,
            "unit": "iter/sec",
            "range": "stddev: 2.428780396741843e-7",
            "extra": "mean: 1.081368509985623 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 730252.1507381633,
            "unit": "iter/sec",
            "range": "stddev: 1.5660224723876497e-7",
            "extra": "mean: 1.3693900099974599 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 720792.1713432809,
            "unit": "iter/sec",
            "range": "stddev: 1.7333313453041446e-7",
            "extra": "mean: 1.387362460022814 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 4106022.9333649618,
            "unit": "iter/sec",
            "range": "stddev: 6.14085835320109e-8",
            "extra": "mean: 243.5446699223576 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1359120.5802536926,
            "unit": "iter/sec",
            "range": "stddev: 1.3365795340695066e-7",
            "extra": "mean: 735.7698901250842 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2656390.685623463,
            "unit": "iter/sec",
            "range": "stddev: 8.161476182474148e-8",
            "extra": "mean: 376.45064990329047 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 4703919.995863924,
            "unit": "iter/sec",
            "range": "stddev: 4.24583980088287e-8",
            "extra": "mean: 212.58864965375324 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1439945.9734956443,
            "unit": "iter/sec",
            "range": "stddev: 1.4325167099651387e-7",
            "extra": "mean: 694.4704998704765 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 816157.3363561592,
            "unit": "iter/sec",
            "range": "stddev: 2.446164475113503e-7",
            "extra": "mean: 1.2252539497649195 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 909151.9628244444,
            "unit": "iter/sec",
            "range": "stddev: 2.7253538569342015e-7",
            "extra": "mean: 1.0999261299434693 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 7442449.214712615,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 134.36437000109436 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 4505663.393599376,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 221.94290000015826 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 8596009.474665916,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 116.3330499980475 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 12244032.380899318,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 81.67244000105711 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 5388620.290095253,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 185.5762600007438 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 5525161.336116945,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 180.9901899991928 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_mean",
            "value": 160595.887830369,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.226809499980845 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_std",
            "value": 54816.264432988595,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 18.24276079998981 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_mean",
            "value": 2199358.6670080186,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 454.6780000009676 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_std",
            "value": 1218026.1438129032,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 821.0004399984427 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 67999.83285652098,
            "unit": "iter/sec",
            "range": "stddev: 0.00007988201040013872",
            "extra": "mean: 14.70591849997618 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 16067.655188715444,
            "unit": "iter/sec",
            "range": "stddev: 0.00014300968218368157",
            "extra": "mean: 62.23683470020659 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 5.140078530366928,
            "unit": "iter/sec",
            "range": "stddev: 0.15451167853715295",
            "extra": "mean: 194.5495567999842 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 2332830.530588744,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 428.663800000777 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1915014.417760473,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 522.1892800000205 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 7760176.404367271,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 128.86304999938147 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2684888.7560629086,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 372.454910000215 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2683671.050522906,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 372.6239100001294 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 352816.3247349977,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.8343359700011206 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 71598.30236418723,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 13.966811599993889 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 63316.86472240657,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 15.79358049998518 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.4032162190508966,
            "unit": "iter/sec",
            "range": "stddev: 0.0009138365708130813",
            "extra": "mean: 293.8396903499961 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 11495353.520588445,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 86.99167000031593 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 4877074.5551122995,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 205.04094999978406 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 315929.7032396958,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.165261100002681 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 107417.94294730214,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.309431670001231 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}