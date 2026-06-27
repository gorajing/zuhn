---
id: INS-260625-B9A5
domain: ai-development
topic: foundation-models
title: A 70B open model can set state-of-the-art for its size class on real-world SWE
actionability: inspiration
confidence: medium
shelf_life: time-sensitive
status: active
tags:
  - open-source
  - swe-bench
  - model-efficiency
  - benchmarks
  - democratization
sources:
  - type: youtube
    title: SWE-RL by Meta — Reinforcement Learning for Software Engineering LLMs
    author: AI Papers Academy
    url: 'https://www.youtube.com/watch?v=DimD-eX0DW8'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Llama-3-SWE-RL-70B scores 41% pass@1 on SWE-bench Verified, a new SOTA for
    open models under 100B parameters.
  standard: >-
    On SWE-bench Verified — a human-curated benchmark of real GitHub issues —
    Llama-3-SWE-RL-70B solves 41% of issues on the first attempt, setting a new
    state-of-the-art among open-source models with fewer than 100 billion
    parameters. It does not beat the largest closed-source or 100B+ models, but
    it reaches that performance at a far more deployable, fine-tune-friendly
    size. The signal for builders is that method (RL on the right data with the
    right reward) can substitute for raw scale on a specialized task: you don't
    necessarily need a frontier-scale model to get strong real-world
    software-engineering performance if you train the objective that matches the
    task. The specific 41% figure is time-sensitive as benchmarks and models
    advance, but the size-vs-method tradeoff is the durable lesson.
stance: >-
  Targeted RL on software-evolution data lets a sub-100B open model reach
  state-of-the-art bug-fixing performance among models of its size, closing the
  gap with much larger systems.
related:
  - INS-260413-C040
  - INS-260605-A0BC
  - INS-260626-6DCA
  - INS-260409-E776
  - INS-260413-25EC
---
On SWE-bench Verified — a human-curated benchmark of real GitHub issues — Llama-3-SWE-RL-70B solves 41% of issues on the first attempt, setting a new state-of-the-art among open-source models with fewer than 100 billion parameters. It does not beat the largest closed-source or 100B+ models, but it reaches that performance at a far more deployable, fine-tune-friendly size. The signal for builders is that method (RL on the right data with the right reward) can substitute for raw scale on a specialized task: you don't necessarily need a frontier-scale model to get strong real-world software-engineering performance if you train the objective that matches the task. The specific 41% figure is time-sensitive as benchmarks and models advance, but the size-vs-method tradeoff is the durable lesson.
