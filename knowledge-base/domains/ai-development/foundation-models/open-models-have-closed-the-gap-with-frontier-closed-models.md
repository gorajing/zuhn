---
id: INS-260605-A0BC
domain: ai-development
topic: foundation-models
title: Open models have closed the gap with frontier closed models
actionability: reference
confidence: medium
shelf_life: time-sensitive
status: active
tags:
  - open-source
  - benchmarks
  - model-selection
  - swe-bench
sources:
  - type: youtube
    title: >-
      Self-Training Agents: Hermes Agent, HF Traces, Skills, MCP & Finetuning  —
      Merve Noyan, Hugging Face
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=OV56RddyFuU'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    The old 'open models aren't as good as closed' argument no longer holds—GLM
    5.1 currently tops SWE-Bench among open models and the AI Index shows open
    and closed converging.
  standard: >-
    The speaker directly rebuts the few-years-old claim that open-source models
    trail closed ones, citing the Artificial Intelligence Index where open
    (green) and closed (black) model lines have converged, and noting GLM 5.1 is
    at the top of the open-model SWE-Bench ranking—she runs it in her own coding
    setup. Hugging Face's new benchmark-datasets feature lets you filter models
    by popular benchmarks (SWE-Bench Pro, Humanity's Last Exam, AIME) to pick a
    capable open model.


    The practical consequence is that model selection is no longer a
    quality-driven default toward closed APIs; for many agentic and coding use
    cases, a top open model is competitive, plus tooling now exists to verify
    this empirically per-benchmark. Combined with inference-provider routing
    (which surfaces cheapest/fastest options and a tool-use column), the
    decision becomes a measurable tradeoff rather than an assumed closed-model
    win. Time-sensitive because the specific leading models will rotate quickly
    even as the convergence trend persists.
stance: >-
  Open-weight models have effectively caught up to closed frontier models on
  capability benchmarks.
related:
  - INS-260327-5D5F
  - INS-260413-25EC
  - INS-260605-77E5
  - INS-260322-5790
  - INS-260413-09C4
---
The speaker directly rebuts the few-years-old claim that open-source models trail closed ones, citing the Artificial Intelligence Index where open (green) and closed (black) model lines have converged, and noting GLM 5.1 is at the top of the open-model SWE-Bench ranking—she runs it in her own coding setup. Hugging Face's new benchmark-datasets feature lets you filter models by popular benchmarks (SWE-Bench Pro, Humanity's Last Exam, AIME) to pick a capable open model.

The practical consequence is that model selection is no longer a quality-driven default toward closed APIs; for many agentic and coding use cases, a top open model is competitive, plus tooling now exists to verify this empirically per-benchmark. Combined with inference-provider routing (which surfaces cheapest/fastest options and a tool-use column), the decision becomes a measurable tradeoff rather than an assumed closed-model win. Time-sensitive because the specific leading models will rotate quickly even as the convergence trend persists.
