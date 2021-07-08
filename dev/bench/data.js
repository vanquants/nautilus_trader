window.BENCHMARK_DATA = {
  "lastUpdate": 1625707938997,
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
          "id": "9fe0ca206ed90e9322c4c6baa3eb0c97b9d32309",
          "message": "Fix pre-commit",
          "timestamp": "2021-07-08T08:46:18+10:00",
          "tree_id": "2b51bf4de43b4bf5648a3abebeb29ada147d33fa",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/9fe0ca206ed90e9322c4c6baa3eb0c97b9d32309"
        },
        "date": 1625698852286,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 8457650.934789743,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 118.23614000036287 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 7818324.651879721,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 127.90463999976963 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 7782060.591563514,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 128.50067000044874 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 9406672.265520388,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 106.30751999997301 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 235.11592743481424,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.25322099999903 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 13048701.145299371,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 76.6359800002192 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 13058074.349298082,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 76.58096999989539 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 6966676.85195113,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 143.54045999994014 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 12685348.80274789,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 78.83109999966109 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 3506647.2697100244,
            "unit": "iter/sec",
            "range": "stddev: 2.03278076667384e-7",
            "extra": "mean: 285.17268008044994 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 1166369.4846986094,
            "unit": "iter/sec",
            "range": "stddev: 3.417171094088264e-7",
            "extra": "mean: 857.3612505460915 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 890312.8670698358,
            "unit": "iter/sec",
            "range": "stddev: 4.4608136438753325e-7",
            "extra": "mean: 1.1232006601130706 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 846864.5421507725,
            "unit": "iter/sec",
            "range": "stddev: 4.0560402025518265e-7",
            "extra": "mean: 1.1808263898501536 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 4568249.488186393,
            "unit": "iter/sec",
            "range": "stddev: 1.9642392096034223e-7",
            "extra": "mean: 218.90222996489683 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1523767.5431444633,
            "unit": "iter/sec",
            "range": "stddev: 3.080196128854393e-7",
            "extra": "mean: 656.2680800618637 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 3107515.756868171,
            "unit": "iter/sec",
            "range": "stddev: 1.9376362862522743e-7",
            "extra": "mean: 321.80045999439244 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 5199618.826058927,
            "unit": "iter/sec",
            "range": "stddev: 1.691372903809915e-7",
            "extra": "mean: 192.32179001051009 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1682909.2935132755,
            "unit": "iter/sec",
            "range": "stddev: 3.186709714420076e-7",
            "extra": "mean: 594.2090900884978 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 925613.5656536183,
            "unit": "iter/sec",
            "range": "stddev: 4.434591373458956e-7",
            "extra": "mean: 1.080364459971861 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 1040401.3429505795,
            "unit": "iter/sec",
            "range": "stddev: 4.501505102959224e-7",
            "extra": "mean: 961.1675405608366 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 8551755.13654796,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 116.9350600002872 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 5111425.4978488535,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 195.64014000025054 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 9429647.755463868,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 106.04850000049737 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 13967707.498215046,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 71.59371000057035 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 5956930.203269492,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 167.87169999929574 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 6161451.470376691,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 162.2994199999539 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_mean",
            "value": 180585.69756590403,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.537537099996825 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_std",
            "value": 53248.83467453179,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 18.77975370000513 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_mean",
            "value": 2532527.273799037,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 394.8624800000289 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_std",
            "value": 1420544.3383838658,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 703.9555000005748 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 1837666.765976052,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 544.1682999958175 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 22353.127351721985,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 44.736469500003295 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 2491579.7063827193,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 401.3517999999294 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 2018996.0065863836,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 495.2956800002539 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 8436885.55742136,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 118.52715000031822 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 3054983.874724425,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 327.3339700001543 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2904757.222570327,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 344.26284999995005 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 398770.3485630094,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.507709019999993 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 82640.41138921706,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 12.10061740000583 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 71104.9464070715,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 14.063719199998559 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 13503506.320341919,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 74.05484000059914 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 5734634.162466836,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 174.37903999962145 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 115576.8917690259,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.652248599992163 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 117566.14551447805,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.505850010000131 usec\nrounds: 1"
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
          "id": "62c12816bb094c6362861e1fff7336f83a8cfb4f",
          "message": "Initial commit backtest config",
          "timestamp": "2021-07-06T04:42:24Z",
          "url": "https://github.com/nautechsystems/nautilus_trader/pull/361/commits/62c12816bb094c6362861e1fff7336f83a8cfb4f"
        },
        "date": 1625700921995,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 5634488.79604266,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 177.47839000094245 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 5355169.572795934,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 186.73544999955993 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 5357550.8920554975,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 186.6524499996558 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 6066772.475238069,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 164.83228999959465 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 164.47509090595935,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.079947999978685 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 9023979.05855601,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 110.81586000045718 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 8846591.956547186,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 113.03788000077475 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 4499220.352610074,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 222.2607299995616 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 8233370.608490552,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 121.45694000082585 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2524998.367619167,
            "unit": "iter/sec",
            "range": "stddev: 0.0000039317961770855175",
            "extra": "mean: 396.03985999519864 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 818189.812834843,
            "unit": "iter/sec",
            "range": "stddev: 0.000005975699001192459",
            "extra": "mean: 1.2222102797090884 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 608639.3628962459,
            "unit": "iter/sec",
            "range": "stddev: 0.0000033099204844733153",
            "extra": "mean: 1.6430090805192776 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 561123.7267179628,
            "unit": "iter/sec",
            "range": "stddev: 0.000007506060863747252",
            "extra": "mean: 1.7821381495468813 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3125151.9565603407,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011502014345601127",
            "extra": "mean: 319.98444040482354 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1028826.8539693496,
            "unit": "iter/sec",
            "range": "stddev: 0.0000041829494517595905",
            "extra": "mean: 971.980849976717 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2099958.4859233075,
            "unit": "iter/sec",
            "range": "stddev: 0.000003692737351609125",
            "extra": "mean: 476.1998899994069 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 3288949.823956471,
            "unit": "iter/sec",
            "range": "stddev: 0.000004095306555950319",
            "extra": "mean: 304.0484207804184 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1165288.317057351,
            "unit": "iter/sec",
            "range": "stddev: 0.000002237772701729669",
            "extra": "mean: 858.1567199826168 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 629729.4413065219,
            "unit": "iter/sec",
            "range": "stddev: 0.000023441831291155573",
            "extra": "mean: 1.5879835599321268 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 691301.2556851994,
            "unit": "iter/sec",
            "range": "stddev: 0.000002353765457669773",
            "extra": "mean: 1.4465473507766546 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 5414933.3465287555,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 184.6744799991029 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 3372824.839952534,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 296.4873800010537 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 5878881.980139253,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 170.10036999863587 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 9409032.765538558,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 106.28085000007559 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 4073950.8445948674,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 245.4619700006333 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 4212017.636079335,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 237.41590999861728 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_mean",
            "value": 118698.76479103169,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.424687499996253 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_std",
            "value": 34799.796163675484,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 28.73580049999873 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_mean",
            "value": 1787714.3230356127,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 559.3734900003255 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_std",
            "value": 1021182.5426591075,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 979.2568500006383 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 1255340.8476283879,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 796.5964000050008 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 14559.931713218408,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 68.68164080001407 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 1632293.5302564325,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 612.6349099986328 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1519811.6260377986,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 657.976279999275 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 5852149.995091934,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 170.87736999883418 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2050655.6653630421,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 487.64891000018906 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2185679.267698862,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 457.5236699997731 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 268116.71910125576,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.729718919998959 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 40416.40472119694,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 24.742428400008976 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 36015.82473392754,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 27.765572699991026 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 9171461.200793132,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 109.03388000087944 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 3929581.274848889,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 254.48003999827048 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 79804.63569800254,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 12.530600400009462 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 84164.77406111176,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.881455289999394 usec\nrounds: 1"
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
          "id": "b80a26b12c2b7a75e69563c2be968aba6cc9d534",
          "message": "Initial commit backtest config",
          "timestamp": "2021-07-06T04:42:24Z",
          "url": "https://github.com/nautechsystems/nautilus_trader/pull/361/commits/b80a26b12c2b7a75e69563c2be968aba6cc9d534"
        },
        "date": 1625701563554,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 11487228.499367582,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 87.05319999990024 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 11957122.714323489,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 83.63216000134344 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 5707585.661000195,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 175.20543000046018 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 9878065.163480649,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 101.23440000143091 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2218543.6292043193,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017275787842423508",
            "extra": "mean: 450.7461502385013 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 836217.5731752599,
            "unit": "iter/sec",
            "range": "stddev: 0.000001853344086957262",
            "extra": "mean: 1.195861020000848 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 652033.011637162,
            "unit": "iter/sec",
            "range": "stddev: 0.000002292149101871541",
            "extra": "mean: 1.533664679782305 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 636014.5597525046,
            "unit": "iter/sec",
            "range": "stddev: 0.000002537569562404132",
            "extra": "mean: 1.5722910500494436 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3502910.7641532915,
            "unit": "iter/sec",
            "range": "stddev: 9.49537907127249e-7",
            "extra": "mean: 285.47686976025943 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1301350.3917105407,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012067692567613392",
            "extra": "mean: 768.4325500417799 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2137900.938142895,
            "unit": "iter/sec",
            "range": "stddev: 0.0000027186119272124882",
            "extra": "mean: 467.74852012958945 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 4828291.932045486,
            "unit": "iter/sec",
            "range": "stddev: 4.555108771527877e-7",
            "extra": "mean: 207.11258019900924 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1614127.6480436819,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026494654956879433",
            "extra": "mean: 619.5296891246471 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 863396.4747661485,
            "unit": "iter/sec",
            "range": "stddev: 0.000003296858890187119",
            "extra": "mean: 1.1582164500623549 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 884239.8310328829,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015333553892606336",
            "extra": "mean: 1.1309148998998353 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 7445464.208370312,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 134.30995999897277 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 4289200.915860382,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 233.14366000022346 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 8244440.402857213,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 121.293859999696 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 12464232.327162007,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 80.22957000093811 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 5841011.635184335,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 171.2032199998248 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 5470929.396012054,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 182.78430000009394 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_mean",
            "value": 145016.4586431129,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.895768999993379 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_std",
            "value": 36924.74151316163,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 27.082112399989455 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_mean",
            "value": 1965008.6585147881,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 508.9036100002886 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_std",
            "value": 1131976.8658333167,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 883.4102800005894 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 612178.083096493,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.6335115999936534 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 19361.533603220243,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 51.648801200008165 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 2091399.8188654403,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 478.1486499996391 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1936677.9516250845,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 516.3481099998535 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 7593616.380786078,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 131.68956000072285 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2450290.7674311306,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 408.11482999970394 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2138015.118929295,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 467.7235400004065 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 323321.7194016817,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.092894599999454 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 46407.42704465338,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 21.54827499998646 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 38405.39538654846,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 26.038008200021068 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 9929383.219450705,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 100.71119000031103 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 5017351.25498551,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 199.30834999968283 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 90024.5465430456,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.108081499992295 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 91330.01784301967,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.949302579999767 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 7060353.881823217,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 141.6359600011674 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 7237673.771123808,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 138.165939999908 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 7337730.4926990885,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 136.28192000169292 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 8418585.542966653,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 118.78479999950287 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 193.53458995770333,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.1670349998858 msec\nrounds: 1"
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
          "id": "322429ac7e842165a7d3b0b7cacbc52463a4242b",
          "message": "Initial commit backtest config",
          "timestamp": "2021-07-06T04:42:24Z",
          "url": "https://github.com/nautechsystems/nautilus_trader/pull/361/commits/322429ac7e842165a7d3b0b7cacbc52463a4242b"
        },
        "date": 1625704877234,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 7443700.132326231,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 134.34179000000768 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 6835085.450510772,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 146.30395000040153 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 6955751.888621473,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 143.76590999972905 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 7955912.786652043,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 125.69267999992915 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 192.47540501155058,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.19546900000023 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 11781875.540351838,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 84.8761299994294 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 11625453.465317206,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 86.01815000019997 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 6063318.017430812,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 164.92619999894487 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 10734076.6680794,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 93.16125000054853 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 3063220.678283939,
            "unit": "iter/sec",
            "range": "stddev: 1.610698332638223e-7",
            "extra": "mean: 326.45378998950036 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 1048094.15881724,
            "unit": "iter/sec",
            "range": "stddev: 8.903817327563139e-8",
            "extra": "mean: 954.1127498778222 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 785368.4352671613,
            "unit": "iter/sec",
            "range": "stddev: 1.6727565186849861e-7",
            "extra": "mean: 1.273287739988973 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 797199.1587300176,
            "unit": "iter/sec",
            "range": "stddev: 1.3797047892795704e-7",
            "extra": "mean: 1.2543916900176555 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 4188405.540439257,
            "unit": "iter/sec",
            "range": "stddev: 5.1928541835448704e-8",
            "extra": "mean: 238.75433989019257 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1399003.724566389,
            "unit": "iter/sec",
            "range": "stddev: 1.0367177609776159e-7",
            "extra": "mean: 714.7943800578105 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2847471.298875659,
            "unit": "iter/sec",
            "range": "stddev: 8.276909494741129e-8",
            "extra": "mean: 351.18878999583103 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 4527529.8487226665,
            "unit": "iter/sec",
            "range": "stddev: 5.864502681142281e-8",
            "extra": "mean: 220.87099001282695 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1568670.3649656628,
            "unit": "iter/sec",
            "range": "stddev: 1.0590510119325148e-7",
            "extra": "mean: 637.4825599652922 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 864207.4693677488,
            "unit": "iter/sec",
            "range": "stddev: 1.1781602975018323e-7",
            "extra": "mean: 1.157129549842466 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 916594.8880941545,
            "unit": "iter/sec",
            "range": "stddev: 2.5912454369340555e-7",
            "extra": "mean: 1.090994520031927 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 7568775.953318677,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 132.12176000024556 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 4543720.909380863,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 220.0839400006771 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 8420302.42696117,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 118.76057999984369 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 11985362.037606096,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 83.43511000020953 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 5559960.27961731,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 179.8574000008557 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 5688918.339769922,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 175.78034000052867 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_mean",
            "value": 167783.56269397543,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.960059400001683 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_std",
            "value": 54299.795851775925,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 18.416275499998846 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_mean",
            "value": 2301958.0063510747,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 434.4127899992145 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_std",
            "value": 1278801.1270109357,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 781.9824200009862 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 273644.3270094692,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.6543787000027805 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 20183.66709159524,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 49.545010600002115 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 2317326.593000401,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 431.5317500004312 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1910606.6141624288,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 523.3939799995824 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 7531437.916425882,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 132.7767700001914 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2674919.828639904,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 373.8429800000631 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2661705.1772306077,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 375.6990100009716 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 349457.5187470996,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.8615781500002413 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 71423.33354739945,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 14.001026699997965 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 63262.66823699567,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 15.807110700006886 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 11676494.772331417,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 85.64213999989079 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 5217775.604843593,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 191.65255000075376 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 104862.94570288823,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.536257000002024 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 108498.87154446144,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.216685720000442 usec\nrounds: 1"
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
          "id": "d78c041adc5d24e8a16d5b9c18c7655c078ef015",
          "message": "Build out `MessageBus`",
          "timestamp": "2021-07-08T10:29:41+10:00",
          "tree_id": "eec305728d67302e2496f334359994bc9e9a3d00",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/d78c041adc5d24e8a16d5b9c18c7655c078ef015"
        },
        "date": 1625705225807,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 7262606.632299573,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 137.69161000027452 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 7235439.239277893,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 138.2086099999924 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 6706065.247035805,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 149.11874000063108 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 8223723.435496363,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 121.59942000039335 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 195.14251257946327,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.124459999933606 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 11710973.181814365,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 85.39000000041597 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 11718933.10834626,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 85.33199999988028 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 6047999.829715429,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 165.34391999925901 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 10745284.324471552,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 93.0640800004312 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2675552.567369011,
            "unit": "iter/sec",
            "range": "stddev: 1.155372731875923e-7",
            "extra": "mean: 373.7545702506395 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 938902.8677213254,
            "unit": "iter/sec",
            "range": "stddev: 1.2967325375608346e-7",
            "extra": "mean: 1.0650728998484738 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 731797.2835380584,
            "unit": "iter/sec",
            "range": "stddev: 1.6099495122267737e-7",
            "extra": "mean: 1.3664986499611587 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 750107.0215240764,
            "unit": "iter/sec",
            "range": "stddev: 1.2968842377296928e-7",
            "extra": "mean: 1.3331430999915028 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3947949.5988366185,
            "unit": "iter/sec",
            "range": "stddev: 9.95262488274743e-8",
            "extra": "mean: 253.29604012540582 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1312423.194267727,
            "unit": "iter/sec",
            "range": "stddev: 1.1757271622945031e-7",
            "extra": "mean: 761.9493501545094 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2590813.0498045674,
            "unit": "iter/sec",
            "range": "stddev: 8.830177187189573e-8",
            "extra": "mean: 385.9792199500589 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 4375890.954307271,
            "unit": "iter/sec",
            "range": "stddev: 7.603309378106317e-8",
            "extra": "mean: 228.52489023193812 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1613932.3679442788,
            "unit": "iter/sec",
            "range": "stddev: 8.769854195109178e-8",
            "extra": "mean: 619.6046500224384 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 832541.3020336592,
            "unit": "iter/sec",
            "range": "stddev: 1.1394093286194474e-7",
            "extra": "mean: 1.201141610100649 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 917441.309779855,
            "unit": "iter/sec",
            "range": "stddev: 2.461688068930112e-7",
            "extra": "mean: 1.089987979983107 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 7396352.326118807,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 135.20178000021588 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 4515449.384284138,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 221.46190000057686 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 8372855.3035353515,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 119.4335700006377 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 12002627.615133224,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 83.31509000072401 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 5566925.692003447,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 179.6323600001415 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 5695853.606559027,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 175.56630999933986 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_mean",
            "value": 166679.48154092222,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.99953869999581 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_std",
            "value": 53467.68550767375,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 18.70288549999941 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_mean",
            "value": 2230286.4921239573,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 448.37288999929115 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_std",
            "value": 1200365.0117949883,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 833.0799299994851 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 602532.3954557212,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.6596617999994123 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 18993.059765024,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 52.650811000000886 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 2341461.952647818,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 427.08360000005996 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1915610.2794330376,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 522.0268499999747 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 7555282.188645361,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 132.35773000019435 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2694815.8507003095,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 371.08287000023665 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2701812.8569893516,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 370.12185999969915 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 344129.5798735015,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.905882139999676 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 71780.43501927247,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 13.931372800004738 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 62985.109740617976,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 15.876768399994036 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 11638851.557229122,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 85.91913000032037 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 5233587.847943314,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 191.07351000002382 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 103954.46636360997,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.619596300001376 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 106439.36543017879,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.395020309999609 usec\nrounds: 1"
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
          "id": "f7edbe4635133381741b1f55dfeecb01b34f8863",
          "message": "Initial commit backtest config",
          "timestamp": "2021-07-06T04:42:24Z",
          "url": "https://github.com/nautechsystems/nautilus_trader/pull/361/commits/f7edbe4635133381741b1f55dfeecb01b34f8863"
        },
        "date": 1625707937180,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 7498996.259358377,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 133.35117999986323 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 6728469.452778234,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 148.6222100015766 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 7188804.386043359,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 139.1051900009188 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 8224551.981823916,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 121.5871700014759 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 213.82566835821686,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.676707000044189 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 12251732.425865158,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 81.6211099981956 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 12396626.084879916,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 80.66710999855786 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 6208741.746940512,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 161.06323000030898 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 11081667.12161267,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 90.23912999964523 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 3035357.8197785863,
            "unit": "iter/sec",
            "range": "stddev: 0.0000052573945339731835",
            "extra": "mean: 329.4504501195661 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 1160154.4759424531,
            "unit": "iter/sec",
            "range": "stddev: 0.000001505398157198563",
            "extra": "mean: 861.9541800135266 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 819127.867735012,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022405985939724947",
            "extra": "mean: 1.2208106199159374 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 849056.0327061262,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011471988529090877",
            "extra": "mean: 1.1777785699405285 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3966374.0214091223,
            "unit": "iter/sec",
            "range": "stddev: 8.900777812742039e-7",
            "extra": "mean: 252.11944072907497 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1187890.718578713,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017068916638075498",
            "extra": "mean: 841.8282796219501 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2498990.4089086414,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013835371827104662",
            "extra": "mean: 400.1615998345187 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 4445327.980810071,
            "unit": "iter/sec",
            "range": "stddev: 9.79667810559673e-7",
            "extra": "mean: 224.95527986166053 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1216001.8797934337,
            "unit": "iter/sec",
            "range": "stddev: 0.000002957903999993058",
            "extra": "mean: 822.367149769434 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 609672.762087103,
            "unit": "iter/sec",
            "range": "stddev: 0.000006677480176618774",
            "extra": "mean: 1.6402241697278441 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 807136.4881214589,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026546025431781166",
            "extra": "mean: 1.2389478294153378 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 6717305.747790284,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 148.86920999970243 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 4131918.267021295,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 242.01833999995873 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 7530790.200483778,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 132.78819000106523 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 11855909.909977697,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 84.34612000201014 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 5076006.3423836455,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 197.00526999940848 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 5198281.427367881,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 192.3712699999669 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_mean",
            "value": 147574.04357929254,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.7762593999987075 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_std",
            "value": 34937.40289977136,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 28.622619800012217 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_mean",
            "value": 2211329.5568152093,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 452.2166299989294 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_std",
            "value": 1263490.7647037792,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 791.4580999999998 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 349498.330097458,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.861243999996077 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 13375.554787916879,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 74.76325400000405 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 2171747.716580686,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 460.45864000006986 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1489675.935001619,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 671.2869400007548 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 6566841.051331003,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 152.28021999973862 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2278337.1082675066,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 438.9166100008879 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2236097.855398937,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 447.20761999997194 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 288514.37376583775,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.466031820000808 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 52190.7413353386,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 19.160486600003424 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 40074.08142780745,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 24.9537847000056 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 11854224.804192975,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 84.3581100002666 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 5204368.526155053,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 192.14626999882967 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 99974.16767486006,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.002583899995443 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 86584.26938742668,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.549442030000137 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}