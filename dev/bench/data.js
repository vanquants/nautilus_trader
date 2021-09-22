window.BENCHMARK_DATA = {
  "lastUpdate": 1632284223824,
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
          "id": "608b511135e921aef481ec16835ce7f3d804895a",
          "message": "Catalog data streaming (#442)\n\n* Implement calc_streaming_chunks",
          "timestamp": "2021-09-22T13:57:58+10:00",
          "tree_id": "7e8fd87a9a44586de3dd8ca3c986e7372c8773d5",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/608b511135e921aef481ec16835ce7f3d804895a"
        },
        "date": 1632284218354,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 2.9015933185722167,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 344.63823499982027 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 2.9371412359087117,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 340.4671139999209 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 1.9242853039376218,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 519.6734589999323 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 6497994.329100103,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 153.89363999929628 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 6193343.67905123,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 161.4636700014671 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 5944218.266984247,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 168.23069999873042 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 7097706.603196756,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 140.89058000081423 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 176.15483587549602,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.676823999920089 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 11371858.99297327,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 87.93637000053423 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 9894874.870284492,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 101.06242000119892 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 3984602.8570152908,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 250.96604000054867 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 8367816.407466523,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 119.50548999948295 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2651340.8574273223,
            "unit": "iter/sec",
            "range": "stddev: 0.0000027109943886210377",
            "extra": "mean: 377.1676497945009 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 865535.1652526268,
            "unit": "iter/sec",
            "range": "stddev: 0.000004741255903119909",
            "extra": "mean: 1.1553545599826975 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 664670.2232375727,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025268797942938604",
            "extra": "mean: 1.5045054901497679 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 625621.3982574213,
            "unit": "iter/sec",
            "range": "stddev: 0.000018065676993584734",
            "extra": "mean: 1.598410800502279 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3692239.5617340384,
            "unit": "iter/sec",
            "range": "stddev: 0.0000033726326077766326",
            "extra": "mean: 270.83833085043807 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1242224.1735126132,
            "unit": "iter/sec",
            "range": "stddev: 0.000001093428627287353",
            "extra": "mean: 805.0076800327588 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2395221.629179187,
            "unit": "iter/sec",
            "range": "stddev: 0.000002290918308068631",
            "extra": "mean: 417.4978999094492 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 4210700.59261649,
            "unit": "iter/sec",
            "range": "stddev: 5.527249762101414e-7",
            "extra": "mean: 237.49017010459283 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1288257.3799094937,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011346409281479118",
            "extra": "mean: 776.2423996905454 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 698102.9547205587,
            "unit": "iter/sec",
            "range": "stddev: 0.000002486155343453658",
            "extra": "mean: 1.4324534701336233 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 750374.4988889474,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021308954445188058",
            "extra": "mean: 1.332667889807908 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 6673710.991089938,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 149.84166999965964 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 4016030.225618453,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 249.00210999931002 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 7576125.476970902,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 131.99359000054756 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 11597377.554432485,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 86.22639000122945 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 4739832.041191932,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 210.9779400007028 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 4933182.509526247,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 202.7088999989246 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 45206.67090805679,
            "unit": "iter/sec",
            "range": "stddev: 0.0001336417275027911",
            "extra": "mean: 22.120629099936195 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 12010.385697590766,
            "unit": "iter/sec",
            "range": "stddev: 0.00009846950098467484",
            "extra": "mean: 83.26127279997309 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 3.797461450261308,
            "unit": "iter/sec",
            "range": "stddev: 0.19957527484545598",
            "extra": "mean: 263.3338120999724 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 1946892.2829292156,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 513.6390999996365 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1658185.0776338235,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 603.0689899989738 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 5369737.576621924,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 186.22884000023987 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2188847.023291896,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 456.86153000133345 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2197833.5471207737,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 454.99350999989474 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 303575.01964698936,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.2940786800008937 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 50183.451377634214,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 19.926887699989493 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 41381.78788675792,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 24.165219799988336 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.1900003306667846,
            "unit": "iter/sec",
            "range": "stddev: 0.004612276554633558",
            "extra": "mean: 313.4795913300036 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 11102282.329433743,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 90.07157000041843 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 4491124.1912494935,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 222.66140000056112 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 222665.16260819032,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.491048299996692 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_mean",
            "value": 125511.45762082125,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.967400100005761 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_std",
            "value": 37969.114676716505,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 26.33719560001282 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_mean",
            "value": 1944151.4122156904,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 514.3632300018908 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_std",
            "value": 1071021.7323466435,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 933.6878700014495 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 96185.68583552868,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.39655735999986 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}