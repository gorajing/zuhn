---
id: INS-260628-5DBC
domain: ai-development
topic: llm-behavior
title: 'Input brittleness, not non-determinism, is the core obstacle to production AI'
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - brittleness
  - robustness
  - llm-reliability
  - production-ai
  - non-determinism
sources:
  - type: youtube
    title: 'Fuzzing in the GenAI Era — Leonard Tang, Haize Labs'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=OMGPvW8TBHc'
date_extracted: '2026-06-28'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Non-determinism is tamable with temperature zero; what actually breaks AI
    apps is that near-identical inputs produce wildly different outputs.
  standard: >-
    The common diagnosis 'AI is non-deterministic' misidentifies the real
    problem. Non-determinism is largely controllable — set temperature to zero,
    constrain outputs through a workflow, and it stops biting you in practice.
    The property that genuinely makes building with LLMs hard is brittleness, or
    technically Lipschitz discontinuity: two inputs that differ only slightly in
    syntax, semantics, or surface form can yield dramatically divergent outputs.
    Public failures (Air Canada's hallucinating support bot, a Chevy portal
    selling a truck for $1) are all manifestations of this input-space
    sensitivity, and they recur weekly.


    The practical consequence is that reliability work should target input-space
    sensitivity, not output variance. Teams that 'fix' non-determinism and
    declare victory are solving the easy 10%. Hardening against brittleness
    means systematically probing the neighborhood around known-good inputs to
    find the perturbations that flip behavior — which is precisely why static,
    point-sampled evaluation misses the failures that matter.
stance: >-
  The hardest property to engineer around in GenAI apps is brittleness
  (Lipschitz discontinuity), not non-determinism.
related:
  - INS-260329-4109
  - INS-260410-F682
  - INS-260505-3608
  - INS-260627-A81B
  - INS-260625-9C3B
  - INS-260514-3A62
  - INS-260627-6846
---
The common diagnosis 'AI is non-deterministic' misidentifies the real problem. Non-determinism is largely controllable — set temperature to zero, constrain outputs through a workflow, and it stops biting you in practice. The property that genuinely makes building with LLMs hard is brittleness, or technically Lipschitz discontinuity: two inputs that differ only slightly in syntax, semantics, or surface form can yield dramatically divergent outputs. Public failures (Air Canada's hallucinating support bot, a Chevy portal selling a truck for $1) are all manifestations of this input-space sensitivity, and they recur weekly.

The practical consequence is that reliability work should target input-space sensitivity, not output variance. Teams that 'fix' non-determinism and declare victory are solving the easy 10%. Hardening against brittleness means systematically probing the neighborhood around known-good inputs to find the perturbations that flip behavior — which is precisely why static, point-sampled evaluation misses the failures that matter.
