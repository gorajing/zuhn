---
id: INS-260605-A558
domain: ai-development
topic: llm-costs
title: >-
  Start agent model selection with the strongest baseline, then downshift with
  evals
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - model-selection
  - evals
  - latency
  - cost-optimization
  - baseline
sources:
  - type: blog
    title: A practical guide to building agents
    url: >-
      https://openai.com/business/guides-and-resources/a-practical-guide-to-building-ai-agents/
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Optimize model cost only after a strong-model baseline proves the workflow
    can work.
  standard: >-
    The guide recommends beginning with the most capable model for every task so
    the team can learn whether the agent can meet the target at all. Once that
    baseline exists, smaller models can be swapped into simpler tasks like
    retrieval, routing, or classification. This avoids prematurely blaming the
    architecture when the real issue is insufficient model capability.
  deep: >-
    The useful discipline is sequencing: first establish task feasibility, then
    localize where capability is actually required. This maps well to
    benchmark-driven development: capability evals define the hill to climb,
    then cost evals test whether cheaper components preserve the behavior.
stance: >-
  Agent teams should prototype with the strongest available model to establish a
  quality baseline before replacing sub-tasks with smaller models for cost and
  latency.
related:
  - INS-260330-38E1
  - PRI-260324-36BF
  - PRI-260403-7585
  - INS-260625-2E48
  - INS-260625-5929
  - INS-260322-5790
  - INS-260626-4320
---
The guide recommends beginning with the most capable model for every task so the team can learn whether the agent can meet the target at all. Once that baseline exists, smaller models can be swapped into simpler tasks like retrieval, routing, or classification. This avoids prematurely blaming the architecture when the real issue is insufficient model capability.
