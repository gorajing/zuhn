---
id: INS-260410-F167
domain: ai-development
topic: research-methodology
title: 'Agentic evals are end-to-end system tests, not pure capability measurements'
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - evals
  - benchmarks
  - agents
  - system-tests
sources:
  - type: blog
    title: Quantifying infrastructure noise in agentic coding evals
    url: 'https://www.anthropic.com/engineering/infrastructure-noise'
date_extracted: '2026-04-10'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Unlike static benchmarks that score a model's output directly, agentic evals
    give the model a full runtime environment — so CPU, RAM, time limits, API
    latency, cluster health, and even egress bandwidth all become part of what
    gets measured.
  standard: >-
    Static benchmarks are clean: a prompt goes in, an answer comes out, and it's
    graded. Agentic evals are categorically different because the runtime is an
    integral component of the problem-solving process. The model writes code,
    runs tests, installs dependencies, iterates. Two agents with different
    resource budgets are literally not taking the same test.


    This means the boundary between 'model capability' and 'infrastructure
    behavior' is blurrier than a single benchmark number suggests. Pass rates
    fluctuate with time of day because API latency varies with traffic. The same
    eval on the same model on different hardware can produce different results.
    Eval consumers should treat these as end-to-end stack tests, not pure
    capability probes, and demand disclosure of the full setup. Eval designers
    should accept that pure capability measurement is probably impossible under
    these conditions and instead optimize for reproducibility and documented
    enforcement.
stance: >-
  Agentic benchmarks conflate model capability with infrastructure behavior by
  construction, so any component of the runtime can act as a confounder.
related:
  - INS-260327-E07C
  - INS-260410-4EB9
  - INS-260327-33FA
  - INS-260326-7F79
  - INS-260323-8AEC
  - INS-260410-D03C
  - INS-260326-2410
---
Static benchmarks are clean: a prompt goes in, an answer comes out, and it's graded. Agentic evals are categorically different because the runtime is an integral component of the problem-solving process. The model writes code, runs tests, installs dependencies, iterates. Two agents with different resource budgets are literally not taking the same test.

This means the boundary between 'model capability' and 'infrastructure behavior' is blurrier than a single benchmark number suggests. Pass rates fluctuate with time of day because API latency varies with traffic. The same eval on the same model on different hardware can produce different results. Eval consumers should treat these as end-to-end stack tests, not pure capability probes, and demand disclosure of the full setup. Eval designers should accept that pure capability measurement is probably impossible under these conditions and instead optimize for reproducibility and documented enforcement.
