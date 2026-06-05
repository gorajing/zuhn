---
id: INS-260605-C048
domain: ai-development
topic: prompting
title: Harness structure transfers better than prose strategy
actionability: reference
confidence: medium
shelf_life: time-sensitive
status: active
tags:
  - harness-engineering
  - tools
  - middleware
  - long-term-memory
  - prompting
sources:
  - type: blog
    title: >-
      Agentic Harness Engineering: Observability-Driven Automatic Evolution of
      Coding-Agent Harnesses
    url: 'https://arxiv.org/abs/2604.25850'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Put reusable intelligence into tools, middleware, and memory before
    polishing prompts.
  standard: >-
    AHE reports that ablations localized gains to tools, middleware, and
    long-term memory rather than the system prompt. The frozen harness also
    transferred across benchmarks and model families, suggesting the learned
    components encoded general engineering experience.


    This does not make prompts irrelevant, but it changes the investment order.
    Prompts are easy to tweak and hard to validate. Tool affordances, middleware
    behavior, and memory retrieval policies are more inspectable, testable, and
    transferable. A harness should graduate repeated prompt advice into
    executable structure.
stance: >-
  Durable gains in coding-agent harnesses come more from tools, middleware, and
  long-term memory than from system-prompt prose.
related:
  - INS-260320-A4BF
  - INS-260410-095B
  - PRI-260405-49C0
  - INS-260409-04C8
  - INS-260410-60C8
---
AHE reports that ablations localized gains to tools, middleware, and long-term memory rather than the system prompt. The frozen harness also transferred across benchmarks and model families, suggesting the learned components encoded general engineering experience.

This does not make prompts irrelevant, but it changes the investment order. Prompts are easy to tweak and hard to validate. Tool affordances, middleware behavior, and memory retrieval policies are more inspectable, testable, and transferable. A harness should graduate repeated prompt advice into executable structure.
