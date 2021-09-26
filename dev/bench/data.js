window.BENCHMARK_DATA = {
  "lastUpdate": 1632651498512,
  "repoUrl": "https://github.com/nautechsystems/nautilus_trader",
  "entries": {
    "Benchmark with pytest-benchmark": [
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
          "id": "b169713f5d1d5a04a43726bb84a2abc15556b176",
          "message": "Release 1.130.0",
          "timestamp": "2021-09-15T09:49:14Z",
          "url": "https://github.com/nautechsystems/nautilus_trader/pull/445/commits/b169713f5d1d5a04a43726bb84a2abc15556b176"
        },
        "date": 1632651228754,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 3.3874478580275675,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 295.20749600033014 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 10.946581318068274,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 91.35272200001054 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 2.0419587399370505,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 489.7258599999077 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 7626421.278937459,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 131.12309999996796 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 8205256.79641273,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 121.87308999727976 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 7516700.228763943,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 133.03709999945568 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 10778873.881579502,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 92.7740699989954 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 187.72630406103372,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.326903999957722 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 17139417.50742882,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 58.34503999722074 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 16854584.04184387,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 59.33104000177991 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 7699527.479915202,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 129.87810000140598 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 16495378.65375827,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 60.623040003520146 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 3582981.3868324305,
            "unit": "iter/sec",
            "range": "stddev: 0.000001133043961201098",
            "extra": "mean: 279.0971797048769 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 1019131.5032912018,
            "unit": "iter/sec",
            "range": "stddev: 0.000001468585553513205",
            "extra": "mean: 981.2276401726195 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 759034.6043898299,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021103957036511247",
            "extra": "mean: 1.3174629907734925 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 760282.2760880616,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017305909958368262",
            "extra": "mean: 1.3153009499910695 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 5193506.690634921,
            "unit": "iter/sec",
            "range": "stddev: 5.116587539081712e-7",
            "extra": "mean: 192.54812972576474 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1547979.3002271953,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014772929241996128",
            "extra": "mean: 646.0034703650308 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 3377280.083848153,
            "unit": "iter/sec",
            "range": "stddev: 4.864650418570556e-7",
            "extra": "mean: 296.0962594670491 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 6078581.341755704,
            "unit": "iter/sec",
            "range": "stddev: 3.4094335006886035e-7",
            "extra": "mean: 164.51207013233216 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1583540.1013165303,
            "unit": "iter/sec",
            "range": "stddev: 9.645463895800277e-7",
            "extra": "mean: 631.4964800503731 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 956918.697096437,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015911452083652279",
            "extra": "mean: 1.0450208602196653 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 1028944.4012342552,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011844529384351454",
            "extra": "mean: 971.869810264252 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 9851627.592306623,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 101.50607000014134 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 4402393.369954502,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 227.14917000030255 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 11266201.64278026,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 88.76106000116124 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 17905407.52266978,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 55.8490499997788 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 5822480.036421622,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 171.74812000121165 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 5888340.690813087,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 169.8271300028864 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 55774.52292430809,
            "unit": "iter/sec",
            "range": "stddev: 0.00009796268091040978",
            "extra": "mean: 17.92933309993714 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 9874.809680954613,
            "unit": "iter/sec",
            "range": "stddev: 0.00011941421461963026",
            "extra": "mean: 101.26777449986548 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 3.7316026271797913,
            "unit": "iter/sec",
            "range": "stddev: 0.2138065409378617",
            "extra": "mean: 267.98137420000785 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 2635847.6332406597,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 379.3846000007761 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 2030078.5368433597,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 492.59177999829257 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 9484951.03428365,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 105.43017000145483 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 3009976.295524844,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 332.2285300009753 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 3187022.4446179904,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 313.77249999877677 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 389614.8823255043,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.5666370699991603 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 34739.62146516165,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 28.785575599977165 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 29004.64652987931,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 34.47723449999103 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.625556204141222,
            "unit": "iter/sec",
            "range": "stddev: 0.010293456997547483",
            "extra": "mean: 275.8197483899903 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 14391367.481904594,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 69.48610000108602 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 5376568.109724837,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 185.99224999888975 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 235968.95554763835,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.237845599982393 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_mean",
            "value": 127870.85248490851,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.82039050000094 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_std",
            "value": 35585.207111260475,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 28.10156470000038 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_mean",
            "value": 2255780.5674224924,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 443.30552999781503 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_std",
            "value": 1223222.153323449,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 817.5129900018874 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 111747.27868390245,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.948763779999354 usec\nrounds: 1"
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
          "id": "b169713f5d1d5a04a43726bb84a2abc15556b176",
          "message": "Release 1.130.0",
          "timestamp": "2021-09-15T09:49:14Z",
          "url": "https://github.com/nautechsystems/nautilus_trader/pull/445/commits/b169713f5d1d5a04a43726bb84a2abc15556b176"
        },
        "date": 1632651490490,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 2.635763214534871,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 379.39675100005843 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 8.7501891353355,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 114.28324400003476 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 1.7764930622101731,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 562.906785999985 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 5924712.544766611,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 168.78456000085862 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 5744525.883279635,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 174.0787700009605 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 5937059.804041169,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 168.43354000229738 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 7378425.4986296855,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 135.5302699994354 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 176.40044311598643,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.668920000061917 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 11410001.162834415,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 87.64240999880712 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 10848507.321533393,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 92.17857999828993 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 5148229.0993376905,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 194.24154999796883 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 9729236.326194324,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 102.78298999764957 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2863221.2335046837,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013003740435853295",
            "extra": "mean: 349.2569796208045 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 890126.5682666419,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025581218724621906",
            "extra": "mean: 1.1234357400962836 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 670662.6312815613,
            "unit": "iter/sec",
            "range": "stddev: 0.000008642115388595837",
            "extra": "mean: 1.4910626496202894 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 695137.0231703924,
            "unit": "iter/sec",
            "range": "stddev: 0.0000030753653940105492",
            "extra": "mean: 1.4385652995997589 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3769184.342313491,
            "unit": "iter/sec",
            "range": "stddev: 0.000001061845296581031",
            "extra": "mean: 265.3093903563786 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1221209.810559436,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016772505465856076",
            "extra": "mean: 818.8601101574022 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2490097.1334595755,
            "unit": "iter/sec",
            "range": "stddev: 5.918948866055525e-7",
            "extra": "mean: 401.59075987958204 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 3945786.3270347337,
            "unit": "iter/sec",
            "range": "stddev: 7.148005278127633e-7",
            "extra": "mean: 253.43490932300483 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1322104.52325526,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012401401368513222",
            "extra": "mean: 756.3698500462124 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 728647.4175847071,
            "unit": "iter/sec",
            "range": "stddev: 0.000002826802478073681",
            "extra": "mean: 1.3724058795332894 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 810243.6385713305,
            "unit": "iter/sec",
            "range": "stddev: 0.0000029422431217613225",
            "extra": "mean: 1.2341966692429196 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 6491017.989101196,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 154.05903999635484 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 3931884.504717186,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 254.33096999677218 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 7234506.977794741,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 138.2264199992278 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 12197768.272026151,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 81.98220999929617 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 4402262.745407534,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 227.15591000178392 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 4648407.474167105,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 215.1274400011971 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 76596.17739939073,
            "unit": "iter/sec",
            "range": "stddev: 0.000056599977698006056",
            "extra": "mean: 13.05548180016558 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 8496.239839519805,
            "unit": "iter/sec",
            "range": "stddev: 0.00016033949164129035",
            "extra": "mean: 117.6991256000747 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 3.2746179768947288,
            "unit": "iter/sec",
            "range": "stddev: 0.21188788636129693",
            "extra": "mean: 305.379133399947 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 1971131.2842706365,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 507.3228800029029 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1680219.541520094,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 595.160319999195 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 6081155.205427567,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 164.44244000012986 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2302333.0784185315,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 434.3420200029868 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2201116.9347805907,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 454.314799999338 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 296793.6767705553,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.3693440199976976 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 30703.29313266776,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 32.56979620000493 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 28099.813820749085,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 35.5874244000006 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.105369418478029,
            "unit": "iter/sec",
            "range": "stddev: 0.0041695532173891565",
            "extra": "mean: 322.0228788400027 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 10755968.163887287,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 92.9716400014513 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 4237517.069279178,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 235.98724999828846 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 232336.69024967056,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.304098500006148 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_mean",
            "value": 124222.75067186709,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.050055199964845 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_std",
            "value": 39799.404791138455,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.126003900004434 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_mean",
            "value": 1944597.8624203675,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 514.2451399979109 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_std",
            "value": 1107658.4781020698,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 902.8053499969246 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 92759.39494144656,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.780579160000343 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}