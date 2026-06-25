---
id: INS-260625-A53F
domain: ai-development
topic: research-methodology
title: Agent benchmarks need harness ablations
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - agent-evaluation
  - benchmark-design
  - harness-design
  - research-methodology
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
    A single leaderboard score cannot separate model capability, harness
    knowledge, and robustness to deployment drift.
  standard: >-
    The authors run each RL algorithm across combinations of three harness
    levels and multiple task settings, then evaluate both in-distribution and
    under tool/task shift. They note that prior ALFWorld work often used a
    highly informative harness without making that assumption explicit.


    For evaluation work, the durable lesson is to expose scaffold assumptions. A
    benchmark should answer whether the model learned transferable tool
    behavior, whether the harness supplied hidden environment knowledge, and
    whether the result survives plausible interface evolution.
stance: >-
  Benchmarks for tool-using agents should vary harness informativeness, task
  distribution, and tool schema rather than reporting a single fixed scaffold
  result.
related:
  - INS-260605-33B4
  - INS-260410-5951
  - PRI-260328-A82C
  - INS-260410-D03C
  - INS-260605-77E5
---
The authors run each RL algorithm across combinations of three harness levels and multiple task settings, then evaluate both in-distribution and under tool/task shift. They note that prior ALFWorld work often used a highly informative harness without making that assumption explicit.

For evaluation work, the durable lesson is to expose scaffold assumptions. A benchmark should answer whether the model learned transferable tool behavior, whether the harness supplied hidden environment knowledge, and whether the result survives plausible interface evolution.
