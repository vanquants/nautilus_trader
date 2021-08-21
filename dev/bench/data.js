window.BENCHMARK_DATA = {
  "lastUpdate": 1629526738702,
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
          "id": "7572e2bd21b5057c5af929cf256a9accd7e25b20",
          "message": "Add ComponentStateChanged event\n\n- Component now emits state changed events.\n- Update dependencies.",
          "timestamp": "2021-08-21T15:58:10+10:00",
          "tree_id": "038f73fd0854dc2b3ebdbf5b20d8cf1fb2d1537d",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/7572e2bd21b5057c5af929cf256a9accd7e25b20"
        },
        "date": 1629526734237,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 6275452.05693302,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 159.35106999904747 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 3654112.2575374553,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 273.6642800005029 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 6914969.8655662425,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 144.6137900006761 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 10733898.07935158,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 93.16280000120969 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 4484882.135061102,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 222.9712999996991 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 4753799.533726219,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 210.35804999883112 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_mean",
            "value": 134151.23193021188,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.454273700000158 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_std",
            "value": 40452.68692571923,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 24.72023679999893 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_mean",
            "value": 1963449.137702246,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 509.3078199979573 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_std",
            "value": 1094449.1922869382,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 913.7016199997561 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 64927.362610540295,
            "unit": "iter/sec",
            "range": "stddev: 0.00007248582431075295",
            "extra": "mean: 15.40182689998346 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 11016.68748661431,
            "unit": "iter/sec",
            "range": "stddev: 0.00010950483036556816",
            "extra": "mean: 90.77138669995293 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 3.6474464541414293,
            "unit": "iter/sec",
            "range": "stddev: 0.22948317318955086",
            "extra": "mean: 274.1644086000406 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 2084850.7137446809,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 479.6506499997122 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1733333.5644415056,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 576.9230000009884 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 6453688.492742532,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 154.95014999942214 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2232525.575815874,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 447.92319999942265 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2070836.3107627395,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 482.89669000041613 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 283026.58840927144,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.5332369499997185 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 44981.608819408175,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 22.2313080000049 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 41148.54358001236,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 24.302196700000422 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.071742917548851,
            "unit": "iter/sec",
            "range": "stddev: 0.006612431669281622",
            "extra": "mean: 325.5480770500049 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 9583346.750139829,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 104.347679998682 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 4041961.5429277765,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 247.40462999943702 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 245789.823106831,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.068516699999236 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 88526.85504950634,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.296007290000034 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 0.22374314984476532,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.4694105749999835 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 0.2712193763822278,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.687052205999862 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 0.08704228296404845,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.488669253000126 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 6403074.705251397,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 156.17496999993818 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 6578516.735259025,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 152.00994999986506 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 6173486.960219506,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 161.98300999803905 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 7443919.557018291,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 134.33783000209587 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 158.84513234898728,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.295440000030794 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 9563552.917306723,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 104.56364999981815 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 10532458.984703513,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 94.94459000052302 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 5340078.635902875,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 187.26315999856524 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 9524839.113520458,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 104.98865000045043 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2006871.890462852,
            "unit": "iter/sec",
            "range": "stddev: 9.961017011964276e-7",
            "extra": "mean: 498.2879100316495 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 633257.0346422566,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018175166297614604",
            "extra": "mean: 1.57913760968313 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 483380.01045508304,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020086068988700324",
            "extra": "mean: 2.0687657295934514 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 509430.22082887794,
            "unit": "iter/sec",
            "range": "stddev: 0.000002027159433204645",
            "extra": "mean: 1.9629773796555128 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3664456.835812447,
            "unit": "iter/sec",
            "range": "stddev: 5.984033113740941e-7",
            "extra": "mean: 272.8917394324526 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1212553.6009212043,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012742834658095251",
            "extra": "mean: 824.7058103165728 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2537758.162420805,
            "unit": "iter/sec",
            "range": "stddev: 7.609391867159664e-7",
            "extra": "mean: 394.04857988756703 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 3962806.0595669174,
            "unit": "iter/sec",
            "range": "stddev: 5.616107546788475e-7",
            "extra": "mean: 252.34643961084655 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1278597.39625352,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024938388244414443",
            "extra": "mean: 782.1070204977332 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 579469.4013946117,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022954990047206968",
            "extra": "mean: 1.7257166600916207 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 637333.4337055965,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015464012483996848",
            "extra": "mean: 1.5690374097994209 usec\nrounds: 100000"
          }
        ]
      }
    ]
  }
}