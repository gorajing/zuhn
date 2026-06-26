---
id: INS-260625-BB42
domain: ai-development
topic: agent-evals
title: Dollar-denominated evals never saturate the way percentage benchmarks do
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - evaluation-design
  - benchmarks
  - agentic-ai
  - metrics
sources:
  - type: youtube
    title: >-
      When AI Agents Run Businesses — Lukas Petersson and Axel Backlund of Andon
      Labs
    author: Latent Space
    url: 'https://www.youtube.com/watch?v=T8u7wOXhDb0'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    An agent eval measured in dollars earned can never saturate, while
    percentage benchmarks lose all signal once models cluster near the top.
  standard: >-
    Andon Labs argues that most benchmarks have a fatal design flaw: once a
    model scores ~92%, the remaining 8% is mostly noise and label error, so the
    gap between 92 and 93 carries no real signal even though people keep
    treating saturated benchmarks as discriminating. Money-based evals
    (Vending-Bench, and freelancer/Upwork-style dollar tasks) escape this
    because there is no 100% ceiling — an agent can always make more money, so
    the metric keeps separating models indefinitely. This makes 'how much money
    did the agent make running a business' a candidate proxy for AGI-level
    capability that resists the saturation that kills most evals. The design
    lesson generalizes: when building an evaluation, prefer an unbounded,
    real-stakes outcome metric over a bounded percentage, because unbounded
    metrics preserve discrimination between strong models exactly where bounded
    ones go flat.
stance: >-
  Evals scored in money earned are structurally superior to percentage-scored
  benchmarks because they have no ceiling and never collapse into noise.
related:
  - INS-260405-F20D
  - INS-260410-F40F
  - INS-260410-AF66
  - INS-260410-F167
  - INS-260605-365A
  - INS-260624-6753
  - INS-260625-C69F
  - INS-260625-D1F9
  - INS-260605-72C4
  - INS-260625-7926
---
Andon Labs argues that most benchmarks have a fatal design flaw: once a model scores ~92%, the remaining 8% is mostly noise and label error, so the gap between 92 and 93 carries no real signal even though people keep treating saturated benchmarks as discriminating. Money-based evals (Vending-Bench, and freelancer/Upwork-style dollar tasks) escape this because there is no 100% ceiling — an agent can always make more money, so the metric keeps separating models indefinitely. This makes 'how much money did the agent make running a business' a candidate proxy for AGI-level capability that resists the saturation that kills most evals. The design lesson generalizes: when building an evaluation, prefer an unbounded, real-stakes outcome metric over a bounded percentage, because unbounded metrics preserve discrimination between strong models exactly where bounded ones go flat.
