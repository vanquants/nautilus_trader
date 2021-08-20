window.BENCHMARK_DATA = {
  "lastUpdate": 1629431286020,
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
          "id": "deb8f272ed7be447c80d900a1c8092790d81d516",
          "message": "Refactor tests\n\n- Separate `Actor` tests from `TradingStrategy`.\n- Add `MockActor` and `KaboomActor`.\n- Fix Arrange, Act, Assert formatting.\n- Fix bar subscriptions bug.",
          "timestamp": "2021-08-20T13:27:26+10:00",
          "tree_id": "21ed437820c24307f68e758cdd1c5672e3131b7e",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/deb8f272ed7be447c80d900a1c8092790d81d516"
        },
        "date": 1629431282142,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 0.23526010960808208,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.250614358999883 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 0.3056389292539075,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.2718345219998355 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 0.09036384822307635,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.066372444999843 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 6149645.094822445,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 162.6110099982725 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 6114860.811710836,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 163.53601999981038 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 5986695.407578248,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 167.03706000043894 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 6833830.824801353,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 146.33081000056336 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 159.03618979882324,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.287876999977016 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 9689146.034530729,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 103.20826999986821 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 9819974.33838488,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 101.83326000060333 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 4897818.7662043525,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 204.1725200001565 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 8629212.490289768,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 115.88543000016216 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2650512.042440894,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021129462578741504",
            "extra": "mean: 377.28559010020035 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 778677.7171970542,
            "unit": "iter/sec",
            "range": "stddev: 0.000001284388917738334",
            "extra": "mean: 1.2842283500799567 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 648658.5728183491,
            "unit": "iter/sec",
            "range": "stddev: 0.000003258356483241246",
            "extra": "mean: 1.5416430798950387 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 674887.8306708571,
            "unit": "iter/sec",
            "range": "stddev: 0.000002869391260453588",
            "extra": "mean: 1.4817277102270054 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 2991429.3213539952,
            "unit": "iter/sec",
            "range": "stddev: 0.000017140883927843242",
            "extra": "mean: 334.28835936774703 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1133937.2170927315,
            "unit": "iter/sec",
            "range": "stddev: 0.000002542786931400351",
            "extra": "mean: 881.8830398422506 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2496659.411994597,
            "unit": "iter/sec",
            "range": "stddev: 5.080308985424423e-7",
            "extra": "mean: 400.5352092462999 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 3978342.379339488,
            "unit": "iter/sec",
            "range": "stddev: 6.378976993183914e-7",
            "extra": "mean: 251.36097013501055 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1283345.206641799,
            "unit": "iter/sec",
            "range": "stddev: 0.000003783000475060237",
            "extra": "mean: 779.2135699924074 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 685502.0698887927,
            "unit": "iter/sec",
            "range": "stddev: 0.000002288375799820281",
            "extra": "mean: 1.4587848001133352 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 631687.4699939478,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018790160737581228",
            "extra": "mean: 1.5830613198795618 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 6265547.5646880455,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 159.60296999992352 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 3776288.7283819388,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 264.8102600005586 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 7138180.614820821,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 140.09171999987302 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 10468554.712498022,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 95.52416999895286 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 4415151.386711528,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 226.49279999995997 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 4673516.546384492,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 213.9716400006364 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_mean",
            "value": 112860.58562103882,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.860489199992116 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_std",
            "value": 35967.803880745836,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 27.802642699998614 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_mean",
            "value": 1915725.5840374422,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 521.9954299991514 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_std",
            "value": 1104285.193048098,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 905.5631699993683 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 34423.837000959415,
            "unit": "iter/sec",
            "range": "stddev: 0.0001756655639655332",
            "extra": "mean: 29.04963789981139 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 11111.222013463248,
            "unit": "iter/sec",
            "range": "stddev: 0.00014971035158451335",
            "extra": "mean: 89.99910169991381 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 3.84292275956032,
            "unit": "iter/sec",
            "range": "stddev: 0.22449491636546107",
            "extra": "mean: 260.21860510004444 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 1967681.3067786542,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 508.21238000025915 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1653071.2576240315,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 604.9345999986144 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 6074925.58058078,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 164.6110700016834 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2245507.6374175777,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 445.33360000059474 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2295750.0982286558,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 435.5874800012316 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 298711.56204257807,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.34771106000062 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 38432.201536129935,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 26.01984689999881 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 32997.83249116945,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 30.305020800005877 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.046889098141544,
            "unit": "iter/sec",
            "range": "stddev: 0.0063639928451342176",
            "extra": "mean: 328.2036095799981 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 9682110.181035183,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 103.28327000024728 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 4127132.3500081697,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 242.29898999919897 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 248895.55707832694,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.017749499985257 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 90471.80579889797,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.053167239999766 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}