---
id: INS-260605-6066
domain: ai-development
topic: research-methodology
title: Benchmark results are uncomparable without disclosed run configuration
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - evaluation
  - benchmarks
  - transparency
  - reproducibility
sources:
  - type: youtube
    title: >-
      Agentic Evaluations at Scale, For Everybody — Nicholas Kang & Michael
      Aaron, Google DeepMind
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=Ubwb6NzegyA'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    A competing lab beat a published benchmark mainly by enabling its own API's
    compaction feature — same task, different config, much better-looking
    number.
  standard: >-
    The speakers recount publishing a benchmark with one AI lab, after which a
    competing lab disliked the results, reran it themselves, and published much
    higher numbers. The difference wasn't capability — it was that the
    competitor used compaction provided through its own API while the original
    run used none across all models. The standings reversed on a configuration
    choice, not on model quality.


    This is the core reason to distrust the marketing charts that accompany
    model releases: we rarely know how the model was configured or how the
    benchmark was orchestrated and facilitated. The defensive takeaway is to
    treat any headline benchmark score as a claim about a (model, configuration,
    harness) tuple, never about the model alone, and to demand reproducible,
    transparent, verifiable setups before believing a comparison. For your own
    evals, hold configuration identical across all models or explicitly report
    the per-model settings — otherwise you are publishing noise dressed as
    signal.
stance: >-
  A benchmark number is meaningless unless the full run configuration is
  disclosed, because per-model optimizations can move results more than real
  capability differences.
related:
  - INS-260321-E8CB
  - INS-260403-D645
  - INS-260409-E776
  - INS-260413-C040
  - INS-260505-CDAE
  - INS-260514-BB1C
  - INS-260605-3E7F
  - PRI-260413-A957
  - INS-260327-40DA
---
The speakers recount publishing a benchmark with one AI lab, after which a competing lab disliked the results, reran it themselves, and published much higher numbers. The difference wasn't capability — it was that the competitor used compaction provided through its own API while the original run used none across all models. The standings reversed on a configuration choice, not on model quality.

This is the core reason to distrust the marketing charts that accompany model releases: we rarely know how the model was configured or how the benchmark was orchestrated and facilitated. The defensive takeaway is to treat any headline benchmark score as a claim about a (model, configuration, harness) tuple, never about the model alone, and to demand reproducible, transparent, verifiable setups before believing a comparison. For your own evals, hold configuration identical across all models or explicitly report the per-model settings — otherwise you are publishing noise dressed as signal.
