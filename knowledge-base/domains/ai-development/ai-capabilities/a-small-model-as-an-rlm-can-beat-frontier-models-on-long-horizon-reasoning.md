---
id: INS-260625-5184
domain: ai-development
topic: ai-capabilities
title: A small model as an RLM can beat frontier models on long-horizon reasoning
actionability: reference
confidence: medium
shelf_life: time-sensitive
status: active
tags:
  - test-time-compute
  - rlm
  - small-models
  - benchmarks
  - long-reasoning
sources:
  - type: youtube
    title: 'Recursive Coding Agents - Raymond Weitekamp, OpenProse'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=3hXJI2q0Jz8'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Qwen-3 8B running as an RLM beat Opus and GPT-5 on the Long-CoT benchmark
    because the hard part is sustaining a long reasoning thread, which recursion
    solves.
  standard: >-
    Weitekamp positions RLMs as the next paradigm of test-time / inference-time
    compute, where reasoning and code execution are unified — chain-of-thought
    became reasoning models, function-calling became parallel tool-calling, and
    RLMs put them together. The striking empirical claim: on the Long-CoT
    benchmark (designed so problems are hard specifically because they need many
    sequential reasoning steps that frontier models can't hold the thread for),
    a small Qwen-3 8B model runnable on a laptop, wrapped as an RLM with
    recursive sub-agent calls, beat Opus and GPT-5 running as plain LLMs.


    The Symbolica team similarly hit ~30% on ARC-AGI-3 within hours of release
    using an RLM harness (Agentica), versus ~2-3% for frontier models — 'too hot
    to benchmark,' which sparked governance fights over whether tool-using
    harnesses should share a leaderboard with no-tool models. The directional
    implication is that for long-horizon tasks, the architecture (recursive
    decomposition) can matter more than base-model scale, so a cheap model plus
    a good harness may beat an expensive model used naively. Marked
    time-sensitive because the specific model-vs-model results will date quickly
    even if the principle holds.
stance: >-
  Recursive decomposition lets a small model outperform frontier LLMs on tasks
  that require holding a very long chain of reasoning.
related:
  - INS-260501-EBDD
  - INS-260501-FE35
  - INS-260626-BC32
  - INS-260413-C040
  - INS-260625-35C5
  - INS-260625-C700
---
Weitekamp positions RLMs as the next paradigm of test-time / inference-time compute, where reasoning and code execution are unified — chain-of-thought became reasoning models, function-calling became parallel tool-calling, and RLMs put them together. The striking empirical claim: on the Long-CoT benchmark (designed so problems are hard specifically because they need many sequential reasoning steps that frontier models can't hold the thread for), a small Qwen-3 8B model runnable on a laptop, wrapped as an RLM with recursive sub-agent calls, beat Opus and GPT-5 running as plain LLMs.

The Symbolica team similarly hit ~30% on ARC-AGI-3 within hours of release using an RLM harness (Agentica), versus ~2-3% for frontier models — 'too hot to benchmark,' which sparked governance fights over whether tool-using harnesses should share a leaderboard with no-tool models. The directional implication is that for long-horizon tasks, the architecture (recursive decomposition) can matter more than base-model scale, so a cheap model plus a good harness may beat an expensive model used naively. Marked time-sensitive because the specific model-vs-model results will date quickly even if the principle holds.
