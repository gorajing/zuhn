---
id: INS-260410-9EA8
domain: ai-development
topic: ai-capabilities
title: LLMs struggle on code that has never been written before
actionability: reference
confidence: high
shelf_life: time-sensitive
status: active
tags:
  - karpathy
  - coding-agents
  - novelty
  - ai-research
  - takeoff-timelines
sources:
  - type: youtube
    title: 'Andrej Karpathy — “We’re summoning ghosts, not building animals”'
    author: Dwarkesh Patel
    url: 'https://www.youtube.com/watch?v=lXUZvyajciY'
date_extracted: '2026-04-10'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Karpathy built nanochat with mostly autocomplete — not agents — because LLM
    agents kept forcing deprecated APIs, bloating code with defensive try/catch,
    and refusing to accept his custom distributed training bypass of PyTorch
    DDP.
  standard: >-
    Karpathy identifies three modes of coding with LLMs: rejecting them
    entirely, autocomplete (his sweet spot), and agent-based vibe coding. Agents
    excel at boilerplate and high-frequency internet patterns — they've seen
    thousands of CRUD apps — but fail on intellectually dense code that deviates
    from conventions. Building nanochat, he found agents kept trying to make
    production-grade bloat, couldn't internalize that he had a custom
    gradient-sync routine, and defaulted to deprecated APIs.


    This matters enormously for AI 2027-style takeoff predictions. The bull case
    assumes you can spin up a million Karpathys inside OpenAI to find
    architectural tweaks. But agents are asymmetrically worse at exactly the
    code that has never been written before — which is what AI research code is.
    Autocomplete is a productivity multiplier akin to compilers or better type
    systems, historically compatible with steady growth, not explosive takeoff.


    The actionable implication: use agents for boilerplate, Rust translations,
    and report generation; keep humans architecting for novel research code. And
    discount forecasts that assume LLM coding capability transfers directly to
    automating LLM research itself.
stance: >-
  Coding agents excel at boilerplate and common patterns but fail precisely on
  novel research code — the exact domain needed for recursive AI
  self-improvement.
related:
  - INS-260321-2482
  - INS-260320-9D89
  - INS-260325-D540
  - INS-260405-A992
  - INS-260410-85AD
---
Karpathy identifies three modes of coding with LLMs: rejecting them entirely, autocomplete (his sweet spot), and agent-based vibe coding. Agents excel at boilerplate and high-frequency internet patterns — they've seen thousands of CRUD apps — but fail on intellectually dense code that deviates from conventions. Building nanochat, he found agents kept trying to make production-grade bloat, couldn't internalize that he had a custom gradient-sync routine, and defaulted to deprecated APIs.

This matters enormously for AI 2027-style takeoff predictions. The bull case assumes you can spin up a million Karpathys inside OpenAI to find architectural tweaks. But agents are asymmetrically worse at exactly the code that has never been written before — which is what AI research code is. Autocomplete is a productivity multiplier akin to compilers or better type systems, historically compatible with steady growth, not explosive takeoff.

The actionable implication: use agents for boilerplate, Rust translations, and report generation; keep humans architecting for novel research code. And discount forecasts that assume LLM coding capability transfers directly to automating LLM research itself.
