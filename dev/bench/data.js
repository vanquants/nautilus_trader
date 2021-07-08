window.BENCHMARK_DATA = {
  "lastUpdate": 1625779069218,
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
          "id": "7a8b1d85c3ede9a59c3696e895b2ae9e96e5a3c7",
          "message": "Start integrating mypy",
          "timestamp": "2021-07-08T14:48:02+10:00",
          "tree_id": "d6f3b941d5d017c000b17892d8183a4e75439d1c",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/7a8b1d85c3ede9a59c3696e895b2ae9e96e5a3c7"
        },
        "date": 1625720695797,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 11797451.443611221,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 84.76407000102881 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 11735012.1597397,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 85.2150800005802 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 5665746.776016518,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 176.49924000011197 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 10809972.891847042,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 92.50716999986253 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2924018.5028353073,
            "unit": "iter/sec",
            "range": "stddev: 9.25968110720273e-8",
            "extra": "mean: 341.99509990457955 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 1022357.6113523521,
            "unit": "iter/sec",
            "range": "stddev: 9.216945337682591e-8",
            "extra": "mean: 978.1313200937802 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 794340.3503959735,
            "unit": "iter/sec",
            "range": "stddev: 1.8847021986899425e-7",
            "extra": "mean: 1.2589062100414594 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 786518.481721216,
            "unit": "iter/sec",
            "range": "stddev: 1.3306260976062793e-7",
            "extra": "mean: 1.271425940063864 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 4326216.631900103,
            "unit": "iter/sec",
            "range": "stddev: 7.178030023976647e-8",
            "extra": "mean: 231.14885015843356 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1371906.9107012635,
            "unit": "iter/sec",
            "range": "stddev: 1.2057611785606733e-7",
            "extra": "mean: 728.912429990487 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2769647.631546873,
            "unit": "iter/sec",
            "range": "stddev: 6.568200613596504e-8",
            "extra": "mean: 361.0567599321257 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 4796680.928573133,
            "unit": "iter/sec",
            "range": "stddev: 5.5443948332631824e-8",
            "extra": "mean: 208.4774899333297 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1611770.748318552,
            "unit": "iter/sec",
            "range": "stddev: 7.409378913252048e-8",
            "extra": "mean: 620.4356302180258 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 847452.6716993286,
            "unit": "iter/sec",
            "range": "stddev: 1.932712767118197e-7",
            "extra": "mean: 1.1800068999662017 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 909474.8148705801,
            "unit": "iter/sec",
            "range": "stddev: 2.471723225480426e-7",
            "extra": "mean: 1.0995356700914272 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 7522151.419596009,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 132.94068999925912 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 4525013.823920096,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 220.99379999986013 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 8328507.657210331,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 120.06952999968235 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 12057919.00808823,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 82.93305000051987 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 4567342.49634165,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 218.9456999997219 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 4462159.415651305,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 224.10673999956998 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_mean",
            "value": 163648.51081886448,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.110657500005345 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_std",
            "value": 49293.99246179125,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 20.28644769999346 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_mean",
            "value": 2297285.3576225583,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 435.2963799999543 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_std",
            "value": 1271678.7527864387,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 786.3621199999216 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 623393.786946567,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.604122499998084 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 27607.36998287806,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 36.22221169999875 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 2337200.37938288,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 427.8623300001527 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1869084.9535743995,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 535.0211600000421 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 7517438.20139525,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 133.02404000000934 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2590197.1399019267,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 386.07100000035643 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2704838.2821840732,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 369.70786999972916 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 348145.0071580931,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.8723663400000987 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 72729.66936817892,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 13.749546900010046 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 63195.172571330106,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 15.823993499998325 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 11751618.726771161,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 85.0946599996405 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 5274081.349973118,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 189.6064799996111 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 104146.65098208579,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.60184500000878 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 105727.14559096443,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.458308879999322 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 7479165.289266416,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 133.70475999977316 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 7302479.432759114,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 136.93978999981482 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 7504197.097398764,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 133.25876000067183 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 9088874.009336071,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 110.02463000068019 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 199.7830755368436,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.005428999993455 msec\nrounds: 1"
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
          "id": "596f9d4d82bf18039e977142a4bc8ac1afe8400b",
          "message": "Improve `MessageBus` and add test",
          "timestamp": "2021-07-08T15:30:28+10:00",
          "tree_id": "f14162f834873d0c3012f609e167c7831f77fbbd",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/596f9d4d82bf18039e977142a4bc8ac1afe8400b"
        },
        "date": 1625723675586,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 0.2597301147494437,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.8501503799999455 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 0.3381995395031865,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.9568343039999263 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 0.1029875145411171,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.709914881000032 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 7217390.099365371,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 138.5542399998485 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 7154906.516479808,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 139.7642300003099 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 7501407.826671279,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 133.30831000075705 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 9387322.327365741,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 106.52664999952322 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 171.87369483489948,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.818225999973947 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 12393112.502942065,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 80.68997999998828 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 12236912.499731446,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 81.71995999987303 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 6192105.746304449,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 161.49595000001682 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 10665776.998647295,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 93.75782000006438 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2965321.952845527,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011531258725657819",
            "extra": "mean: 337.2315100693868 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 1036401.251468694,
            "unit": "iter/sec",
            "range": "stddev: 0.000004607835206255501",
            "extra": "mean: 964.8772602145073 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 871814.9625438597,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020939445683341205",
            "extra": "mean: 1.1470323898572587 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 856125.3593397847,
            "unit": "iter/sec",
            "range": "stddev: 0.000002010084088174516",
            "extra": "mean: 1.1680532402067456 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 4385503.666526909,
            "unit": "iter/sec",
            "range": "stddev: 4.999791467262575e-7",
            "extra": "mean: 228.02397992109036 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1464141.340951786,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010636175483142564",
            "extra": "mean: 682.994170050506 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2915022.884288969,
            "unit": "iter/sec",
            "range": "stddev: 0.000001111646518659213",
            "extra": "mean: 343.0504801144707 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 4314954.757530905,
            "unit": "iter/sec",
            "range": "stddev: 8.857489870544458e-7",
            "extra": "mean: 231.75214021762258 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1675706.2364820333,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015921721207074735",
            "extra": "mean: 596.7633098384795 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 819123.7950732191,
            "unit": "iter/sec",
            "range": "stddev: 0.000007856136447206453",
            "extra": "mean: 1.220816689753974 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 972886.5372915682,
            "unit": "iter/sec",
            "range": "stddev: 0.000001318893826482855",
            "extra": "mean: 1.0278690902475773 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 7739856.009244395,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 129.20137000037357 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 4610052.911886036,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 216.91724999982398 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 8586674.58007633,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 116.4595200009444 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 12142413.511145098,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 82.35594999973728 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 5313563.758850722,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 188.19761000031576 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 5849737.557395738,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 170.94783999937135 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_mean",
            "value": 159215.3612253571,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.2808010000026115 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_std",
            "value": 37894.43569702231,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 26.38909859999785 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_mean",
            "value": 2231692.6330836583,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 448.0903799992575 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_std",
            "value": 1260115.5301641626,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 793.5780299999351 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 48842.23630444488,
            "unit": "iter/sec",
            "range": "stddev: 0.0000974188459488856",
            "extra": "mean: 20.47408299994231 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 14548.250602824271,
            "unit": "iter/sec",
            "range": "stddev: 0.000129397178520119",
            "extra": "mean: 68.73678680004787 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 2.5245011323529023,
            "unit": "iter/sec",
            "range": "stddev: 0.4126224606814408",
            "extra": "mean: 396.117865500014 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 2225370.577616789,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 449.3633599986424 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1860568.0965555871,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 537.4702500012063 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 7261464.345402328,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 137.71327000085876 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2580737.5350406608,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 387.486130000525 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2597003.4683196577,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 385.0591700006589 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 355120.1132702492,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.815948639999988 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 50510.78705083298,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 19.797751300006894 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 38601.96841397514,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.905414699991525 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.6294876201085127,
            "unit": "iter/sec",
            "range": "stddev: 0.009954205025380594",
            "extra": "mean: 275.5209838600035 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 10349208.156218432,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 96.62574999993012 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 4658221.404447111,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 214.67420999897513 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 93292.10195595388,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.719020999999884 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 104381.65187799117,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.580227769999965 usec\nrounds: 1"
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
          "id": "c84eb822dd0f2836da4293fac737c5c0d04a548c",
          "message": "Add tests",
          "timestamp": "2021-07-08T16:20:22+10:00",
          "tree_id": "0a94d14424ff9ccfd5e42c7a7fd575491d6dd90c",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/c84eb822dd0f2836da4293fac737c5c0d04a548c"
        },
        "date": 1625726399018,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 0.26412548187917345,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.7860792260000835 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 0.32025701727320016,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.122492080000029 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 0.09828776999071202,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.174205804999929 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 6204619.028603125,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 161.1702500008505 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 5825711.94280326,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 171.6528399992967 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 5784429.022713612,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 172.87791000171637 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 7033330.602121216,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 142.1801499986941 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 180.13087948909322,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.551519000164262 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 10279332.641059248,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 97.28257999995549 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 9781973.505484449,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 102.22885999837672 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 4953300.775624291,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 201.88557999972545 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 9162941.472838154,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 109.13525999967533 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2666882.506005605,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013468041805993466",
            "extra": "mean: 374.96965004947924 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 819375.6114245763,
            "unit": "iter/sec",
            "range": "stddev: 0.0000032496068229271895",
            "extra": "mean: 1.2204414996699597 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 668458.2863178038,
            "unit": "iter/sec",
            "range": "stddev: 0.00000244568581959113",
            "extra": "mean: 1.4959796601647213 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 633696.6069059017,
            "unit": "iter/sec",
            "range": "stddev: 0.000006464047978969521",
            "extra": "mean: 1.578042219418876 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3760976.8302743845,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012744314162878344",
            "extra": "mean: 265.88837026338297 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1110131.7278395302,
            "unit": "iter/sec",
            "range": "stddev: 0.000009989495510967167",
            "extra": "mean: 900.7940003175463 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2482316.471627788,
            "unit": "iter/sec",
            "range": "stddev: 0.000002494673782815364",
            "extra": "mean: 402.8495203692728 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 3978726.0701054055,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013842243364386428",
            "extra": "mean: 251.33672999345436 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1294055.1541420373,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023082232590906604",
            "extra": "mean: 772.7645895147361 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 743877.2415194666,
            "unit": "iter/sec",
            "range": "stddev: 0.0000047803828117212905",
            "extra": "mean: 1.3443078295517807 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 750694.8151371211,
            "unit": "iter/sec",
            "range": "stddev: 0.000003000537956588937",
            "extra": "mean: 1.3320992497028783 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 6620218.3322005,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 151.05241999890495 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 2832229.915438362,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 353.0786800001806 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 5559260.802872123,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 179.88003000027675 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 9102401.286315791,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 109.86111999955028 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 4334129.108293296,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 230.72686000205067 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 4322232.830891506,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 231.36190000059287 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_mean",
            "value": 127521.6253723117,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.841807199997675 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_std",
            "value": 37510.14217980902,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 26.659456399988812 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_mean",
            "value": 1889118.1711670754,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 529.347509998388 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_std",
            "value": 1113140.6262063598,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 898.3590899993033 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 42787.53407917764,
            "unit": "iter/sec",
            "range": "stddev: 0.0001081425322993374",
            "extra": "mean: 23.371293100217372 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 12939.270590611271,
            "unit": "iter/sec",
            "range": "stddev: 0.00015619686322141516",
            "extra": "mean: 77.28410910006005 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 2.1299533048676413,
            "unit": "iter/sec",
            "range": "stddev: 0.4847984516026629",
            "extra": "mean: 469.4938605999823 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 1909336.4202437566,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 523.7421700007872 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1679943.0042378563,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 595.258289999947 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 5977513.550440811,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 167.2936399995706 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2217285.116636032,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 451.00198999989516 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2187100.5944144595,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 457.2263400018528 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 311854.4865510222,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.206623739999941 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 44873.950173370205,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 22.284643900002266 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 35392.16906992175,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 28.254837899999075 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.141927053551011,
            "unit": "iter/sec",
            "range": "stddev: 0.0038464288508836607",
            "extra": "mean: 318.2760079900004 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 10369730.673108993,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 96.43452000091202 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 4170876.993231326,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 239.75772999847322 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 84459.18482437967,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.840038500008632 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 92249.12586388193,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.840211120000731 usec\nrounds: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "chris@cjdsellers.io",
            "name": "Christopher Sellers",
            "username": "cjdsellers"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4c9b5e6e9050d115773893438045afecdb38c9f2",
          "message": "Convert unittest tests to pytest (tests/unit_tests/indicators)",
          "timestamp": "2021-07-09T06:08:45+10:00",
          "tree_id": "9d29a0eb1dc1c469acb7b413a67d4811b188a1cc",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/4c9b5e6e9050d115773893438045afecdb38c9f2"
        },
        "date": 1625776007413,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 0.290516307958929,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.442147557999988 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 0.4040779511268817,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.4747700220000297 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 0.12367536966606722,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.08568434200015 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 5764752.332750981,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 173.46798999824387 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 5562833.596144538,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 179.76450000105615 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 6462558.392456088,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 154.73747999976695 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 8148571.270173941,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 122.7209000012408 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 188.1174131077632,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.315828999982841 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 10625232.227731736,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 94.11559000000125 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 11488571.972710134,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 87.0430200006922 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 5797003.656350132,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 172.502909999821 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 9547592.121155528,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 104.7384499997861 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2955557.8613955574,
            "unit": "iter/sec",
            "range": "stddev: 9.004982785880919e-7",
            "extra": "mean: 338.34560069408326 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 827106.1748497388,
            "unit": "iter/sec",
            "range": "stddev: 0.000001003031780902553",
            "extra": "mean: 1.2090346202307956 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 637872.6976204328,
            "unit": "iter/sec",
            "range": "stddev: 0.000007343782659592246",
            "extra": "mean: 1.5677109299872427 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 609549.1853731241,
            "unit": "iter/sec",
            "range": "stddev: 0.000014916595469778867",
            "extra": "mean: 1.6405566999287657 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3218851.6581513765,
            "unit": "iter/sec",
            "range": "stddev: 0.000014732007549436324",
            "extra": "mean: 310.66979973047637 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1117104.6129602587,
            "unit": "iter/sec",
            "range": "stddev: 0.000020708350041487904",
            "extra": "mean: 895.1713101873793 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2506583.4814676074,
            "unit": "iter/sec",
            "range": "stddev: 6.797651439564871e-7",
            "extra": "mean: 398.94940958220104 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 4362536.177537738,
            "unit": "iter/sec",
            "range": "stddev: 3.986379893110779e-7",
            "extra": "mean: 229.22446010852582 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1450264.800662582,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013369631225554149",
            "extra": "mean: 689.5292497915761 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 775409.296136927,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015060370600529953",
            "extra": "mean: 1.2896414899614683 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 748477.8336608774,
            "unit": "iter/sec",
            "range": "stddev: 0.000001369124930948508",
            "extra": "mean: 1.3360449101196537 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 7833657.607617322,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 127.65428999955476 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 4384476.690132251,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 228.0773899997257 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 8183918.845007452,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 122.19084999969711 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 11972932.074014777,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 83.52173000048424 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 5099678.052225225,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 196.09080999998696 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 5038925.44714212,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 198.45500999963406 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_mean",
            "value": 150635.86259706877,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.638525399989703 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_std",
            "value": 49871.811739325974,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 20.051407100004326 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_mean",
            "value": 2149924.9751394754,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 465.13251000078526 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_std",
            "value": 1143176.5137147782,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 874.7555499985538 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 75125.75958199841,
            "unit": "iter/sec",
            "range": "stddev: 0.00005388946096210576",
            "extra": "mean: 13.31101350008339 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 17159.010262531665,
            "unit": "iter/sec",
            "range": "stddev: 0.00015225899075718263",
            "extra": "mean: 58.27841959996931 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 2.6412081521453765,
            "unit": "iter/sec",
            "range": "stddev: 0.40136766771213195",
            "extra": "mean: 378.61461210004563 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 1893937.4569562953,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 528.0005400004484 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1519336.5276183307,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 658.1820299993524 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 6301721.775398987,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 158.68678999822805 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2181629.70487918,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 458.37292999976853 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2250408.3872365714,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 444.36378999989756 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 318279.64909971115,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.141891109999051 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 61390.32272301229,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 16.28921229998923 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 53767.86861528369,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 18.598468300001514 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.251435621985196,
            "unit": "iter/sec",
            "range": "stddev: 0.004895527404198662",
            "extra": "mean: 307.5564508299999 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 10521481.445506912,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 95.04365000111648 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 4763335.804062483,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 209.9369100005788 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 96432.15212650567,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.369985300008011 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 101777.95440368429,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.825310460000765 usec\nrounds: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "chris@cjdsellers.io",
            "name": "Christopher Sellers",
            "username": "cjdsellers"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b49d3a41e069c9347edc1d89770e34f2695c1a33",
          "message": "Convert analysis tests to pytest",
          "timestamp": "2021-07-09T06:31:52+10:00",
          "tree_id": "71cb6b3840d449101023858eb99b9f141cbbe0af",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/b49d3a41e069c9347edc1d89770e34f2695c1a33"
        },
        "date": 1625777500775,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 3936353.416532752,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 254.04222999895865 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 4251949.976149808,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 235.186209999938 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_mean",
            "value": 120030.47285643463,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.331217699992521 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_std",
            "value": 34446.36840806557,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 29.030636500010587 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_mean",
            "value": 1792305.7782623235,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 557.9405100002077 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_std",
            "value": 991582.5351838581,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.0084889200015823 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 74783.11662306984,
            "unit": "iter/sec",
            "range": "stddev: 0.000055530669473614246",
            "extra": "mean: 13.372002199912458 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 12808.18722281741,
            "unit": "iter/sec",
            "range": "stddev: 0.00013155145831569178",
            "extra": "mean: 78.07506109986662 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 2.316646467053899,
            "unit": "iter/sec",
            "range": "stddev: 0.4333449790653999",
            "extra": "mean: 431.65844000000106 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 2075672.88955521,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 481.7714800014983 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1454852.9734290135,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 687.3546800011354 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 5533906.299240803,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 180.70417999979327 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 1993189.2722532854,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 501.7085000008592 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 1922938.1756993462,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 520.0375199979135 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 283069.8840607899,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.5326965400008703 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 44601.15824568708,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 22.420942400003696 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 39989.194759614504,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.00675510000292 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.169700031634485,
            "unit": "iter/sec",
            "range": "stddev: 0.015099060701076986",
            "extra": "mean: 315.4872669400015 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 11147018.133502632,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 89.71009000106278 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 4782670.204970375,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 209.08821999910288 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 100767.64286484159,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.92382050001197 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 98170.05336481688,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.186405790000208 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 0.23879593279347197,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.18767601400009 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 0.2887760126793482,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.4628915010000583 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 0.09397646600608961,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.640961960999903 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 5725470.011015226,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 174.65814999923168 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 5881206.105982053,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 170.03315000010844 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 5813103.490969356,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 172.02515000008134 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 6477768.880218377,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 154.3741399996179 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 164.26551549320016,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.087705000027199 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 9391338.875148268,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 106.48109000158001 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 9127161.346038777,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 109.5630899999378 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 4615629.101669257,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 216.6551900018021 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 8115954.261785365,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 123.21409999913158 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2276973.88235372,
            "unit": "iter/sec",
            "range": "stddev: 0.0000033918472402493603",
            "extra": "mean: 439.17938969343595 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 867724.7729946041,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015864446079684307",
            "extra": "mean: 1.1524391502030085 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 627991.847342471,
            "unit": "iter/sec",
            "range": "stddev: 0.000003375751098518501",
            "extra": "mean: 1.5923773600434288 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 608541.867451445,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024795864663953532",
            "extra": "mean: 1.643272309574968 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3297312.4975965656,
            "unit": "iter/sec",
            "range": "stddev: 6.135782039369884e-7",
            "extra": "mean: 303.27729043847285 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1147744.6983440157,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010405144638355392",
            "extra": "mean: 871.2739004090508 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2191754.9776073527,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012652959387632835",
            "extra": "mean: 456.25537992009413 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 3891728.228812954,
            "unit": "iter/sec",
            "range": "stddev: 9.022308989956944e-7",
            "extra": "mean: 256.95525000855923 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1322026.376713292,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017367220825423502",
            "extra": "mean: 756.4145599621952 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 762539.1480789713,
            "unit": "iter/sec",
            "range": "stddev: 0.000005105104346660852",
            "extra": "mean: 1.311408079859575 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 855132.8064576305,
            "unit": "iter/sec",
            "range": "stddev: 0.000001679483987851283",
            "extra": "mean: 1.1694089999218704 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 6564430.906852934,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 152.33612999963952 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 3717040.5829821043,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 269.03123000010964 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 6927504.77104309,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 144.35211999852982 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 11000364.332125587,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 90.90607999951317 nsec\nrounds: 1"
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
          "id": "9e7b753698b3e6bd3334b04c93dabff0c4bc9a88",
          "message": "Update dependencies",
          "timestamp": "2021-07-09T06:57:50+10:00",
          "tree_id": "0666961bed8ed284c9880535900244c2724da3da",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/9e7b753698b3e6bd3334b04c93dabff0c4bc9a88"
        },
        "date": 1625779067307,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 9655153.636202073,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 103.57162999980574 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 3609304.6140324385,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 277.0616800012249 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 84990.93129772264,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.76596119998976 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 85064.35604677524,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.75580521000029 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 0.28346958242118475,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.527715360000002 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 0.3865583333999317,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.5869316830001026 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 0.1244167938062487,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.037500159000047 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 7131953.913591358,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 140.21403000015198 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 6353879.577125464,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 157.3841600020387 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 6491435.556908224,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 154.04913000111264 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 9031481.124192167,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 110.72380999848974 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 178.23272274478097,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.6106419999650825 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 12629518.873415105,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 79.17958000007275 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 11930665.652402332,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 83.81761999999071 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 6160776.933043139,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 162.31719000188605 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 11067374.078515971,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 90.35566999955336 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2466597.5813454026,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012340072218631912",
            "extra": "mean: 405.41676014072436 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 814413.3904795552,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016344242034881745",
            "extra": "mean: 1.2278776499624655 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 578637.394796485,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021175605888144663",
            "extra": "mean: 1.728198020025502 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 572540.2090017316,
            "unit": "iter/sec",
            "range": "stddev: 0.000004041319599451441",
            "extra": "mean: 1.7466022198573228 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 4002646.223386828,
            "unit": "iter/sec",
            "range": "stddev: 4.93488404490382e-7",
            "extra": "mean: 249.83472038002222 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1020107.9290758525,
            "unit": "iter/sec",
            "range": "stddev: 0.000014566162745845282",
            "extra": "mean: 980.288429780103 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2355103.493648092,
            "unit": "iter/sec",
            "range": "stddev: 6.64432763917975e-7",
            "extra": "mean: 424.6097900568202 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 4050337.437578561,
            "unit": "iter/sec",
            "range": "stddev: 5.216311140051967e-7",
            "extra": "mean: 246.89300963473215 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1333294.898034303,
            "unit": "iter/sec",
            "range": "stddev: 0.0000070595919003796215",
            "extra": "mean: 750.0216204789467 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 831166.9520129375,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013634702003337795",
            "extra": "mean: 1.203127720102657 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 842330.4688948194,
            "unit": "iter/sec",
            "range": "stddev: 0.00000117875074438454",
            "extra": "mean: 1.1871825096295652 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 7287893.511609342,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 137.21386000042912 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 4315507.253128886,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 231.7224700004772 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 7989339.664380217,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 125.16678999872967 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 9554779.749829387,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 104.65966000083426 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 5151977.408760904,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 194.10023000091314 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 5657448.721416345,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 176.75812000106816 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_mean",
            "value": 168306.8845797015,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.941527599998153 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_std",
            "value": 51217.377130043795,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 19.524623400002383 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_mean",
            "value": 1849439.292543225,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 540.704420000111 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_std",
            "value": 996355.9873932757,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.0036573399997906 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 58086.51810338838,
            "unit": "iter/sec",
            "range": "stddev: 0.00006864765626694044",
            "extra": "mean: 17.215698799850543 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 16717.82921460624,
            "unit": "iter/sec",
            "range": "stddev: 0.00015166798759722738",
            "extra": "mean: 59.816378500045175 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 2.5258147614127022,
            "unit": "iter/sec",
            "range": "stddev: 0.4212409339008784",
            "extra": "mean: 395.91185200006294 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 1735651.1635495909,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 576.1526400010553 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1469714.4036299067,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 680.4042999988269 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 7634530.155397108,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 130.9838299994226 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2508091.6051364206,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 398.70952000001125 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2363755.0499221347,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 423.05568000074345 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 292749.2518140627,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.4158925900010217 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 61087.5657573662,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 16.36994349998986 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 51519.005152332225,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 19.410312700006216 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.263134014548518,
            "unit": "iter/sec",
            "range": "stddev: 0.012526216452430959",
            "extra": "mean: 306.45385556999827 msec\nrounds: 10"
          }
        ]
      }
    ]
  }
}