---
id: INS-260625-81E1
domain: ai-development
topic: system-building
title: Profile to find performance bottlenecks instead of predicting them
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - profiling
  - performance
  - systems
  - debugging
  - tooling
sources:
  - type: youtube
    title: >-
      Road to 5 Million Tokens: Breaking Barriers in Long Context Training — Max
      Ryabinin, Together AI
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=TUnPNY4E2fw'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    The talk's explicit takeaway: long-context bottlenecks show up where you
    least expect, so lean on tooling like the PyTorch profiler rather than
    guessing.
  standard: >-
    After a deeply technical walkthrough, Ryabinin's closing lesson is
    methodological rather than algorithmic: the bottlenecks in large-context
    training 'might appear where you least expect.' His prescription is to
    measure with tooling — specifically the PyTorch profiler — instead of
    reasoning a priori about where time and memory go. The whole project's
    finding that activations rather than parameters dominate memory is itself an
    instance of an expensive surprise that only measurement reveals.


    This is a durable performance-engineering principle that transfers across
    domains: human intuition about hotspots is unreliable, and optimization
    effort spent on the wrong component is wasted. The disciplined move is to
    profile first, locate the real consumer of the constrained resource, and
    only then choose an optimization — turning performance work into a
    measurement-driven loop rather than a guessing game.
stance: >-
  In systems performance work, bottlenecks appear where you least expect, so
  profiling beats reasoning about where the cost lives.
related:
  - INS-260403-E5D4
  - INS-260410-761B
  - INS-260409-384A
  - INS-260605-FB77
  - INS-260327-DECA
  - INS-260625-FFDF
---
After a deeply technical walkthrough, Ryabinin's closing lesson is methodological rather than algorithmic: the bottlenecks in large-context training 'might appear where you least expect.' His prescription is to measure with tooling — specifically the PyTorch profiler — instead of reasoning a priori about where time and memory go. The whole project's finding that activations rather than parameters dominate memory is itself an instance of an expensive surprise that only measurement reveals.

This is a durable performance-engineering principle that transfers across domains: human intuition about hotspots is unreliable, and optimization effort spent on the wrong component is wasted. The disciplined move is to profile first, locate the real consumer of the constrained resource, and only then choose an optimization — turning performance work into a measurement-driven loop rather than a guessing game.
