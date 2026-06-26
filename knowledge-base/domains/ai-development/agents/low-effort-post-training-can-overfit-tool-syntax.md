---
id: INS-260625-CBC7
domain: ai-development
topic: agents
title: Low-effort post-training can overfit tool syntax
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - post-training
  - tool-use
  - ood-robustness
  - failure-modes
sources:
  - type: blog
    title: The Interplay of Harness Design and Post-Training in LLM Agents
    url: 'https://arxiv.org/html/2606.25447'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    A higher in-distribution agent score can hide learned dependence on obsolete
    tool syntax.
  standard: >-
    Under the stronger v2.0 tool-schema shift, Qwen2.5-7B-Instruct post-trained
    with GRPO under h-low scores 2.7, below the 13.5 base model reported without
    post-training. In the GiGPO analysis, h-low and h-mid agents produce invalid
    tool formats in 81.2% and 75.1% of attempts, while h-high produces 95.7%
    valid tool calls under v2.0 but still has admissibility errors.


    The immediate implication is that post-training should be judged by
    robustness curves, not only by same-harness success. Agents can learn
    plausible-looking non-existent tools when training exposes them to too
    little structured guidance about the action space.
stance: >-
  Post-training under a sparse harness can create agents that improve
  in-distribution while becoming brittle under stronger tool-interface shifts.
related:
  - INS-260410-D03C
  - INS-260605-C122
  - PRI-260406-3EF8
  - INS-260403-B800
  - INS-260626-ACD0
---
Under the stronger v2.0 tool-schema shift, Qwen2.5-7B-Instruct post-trained with GRPO under h-low scores 2.7, below the 13.5 base model reported without post-training. In the GiGPO analysis, h-low and h-mid agents produce invalid tool formats in 81.2% and 75.1% of attempts, while h-high produces 95.7% valid tool calls under v2.0 but still has admissibility errors.

The immediate implication is that post-training should be judged by robustness curves, not only by same-harness success. Agents can learn plausible-looking non-existent tools when training exposes them to too little structured guidance about the action space.
