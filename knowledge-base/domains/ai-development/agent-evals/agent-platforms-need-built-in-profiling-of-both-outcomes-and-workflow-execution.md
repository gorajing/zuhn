---
id: INS-260627-9387
domain: ai-development
topic: agent-evals
title: >-
  Agent platforms need built-in profiling of both outcomes and workflow
  execution
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - agent-evals
  - instrumentation
  - observability
  - systems
sources:
  - type: blog
    title: >-
      An open-source framework for principled, agentic AI-driven
      hardware/software co-design research
    url: 'https://arxiv.org/html/2606.27350'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    CHIA logs node timing, worker identity, task graphs, and user-specified
    metrics, treating loop telemetry as part of the evaluation apparatus.
  standard: >-
    The paper argues that agentic design platforms need data collection and
    profiling as first-class citizens, not afterthought logging. CHIA profiles
    annotated functions regardless of how they run, reconstructs task graphs
    through object identity, and uses the resulting traces to understand machine
    time, bottlenecks, token costs, and evaluation effort. For agent/eval work,
    this means the harness should measure the workflow as well as the final
    answer.
  deep: >-
    A passing artifact can hide a bad operating profile: too many retries,
    fragile worker assumptions, runaway token-cache costs, or verification
    bottlenecks. CHIA's examples show why evals should record wall-clock time,
    resource use, stage breakdowns, and failure recovery alongside task success.
subtopic: instrumentation
stance: supported
related:
  - INS-260605-C00C
  - INS-260322-24FB
  - INS-260402-D7DE
  - INS-260423-2B80
  - INS-260522-2CE8
---
The paper argues that agentic design platforms need data collection and profiling as first-class citizens, not afterthought logging. CHIA profiles annotated functions regardless of how they run, reconstructs task graphs through object identity, and uses the resulting traces to understand machine time, bottlenecks, token costs, and evaluation effort. For agent/eval work, this means the harness should measure the workflow as well as the final answer.
