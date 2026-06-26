---
id: INS-260626-ECC7
domain: ai-development
topic: agent-evals
title: 'Evals and observability are one flywheel, not two separate systems'
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - evals
  - observability
  - agents
  - feedback-loops
  - production
sources:
  - type: youtube
    title: 'Why building eval platforms is hard — Phil Hetzel, Braintrust'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=_fQ7Z_Wfouk'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Treat production observability and offline evals as the same flywheel:
    production traffic surfaces failure modes, offline evals fix them, and the
    improved agent generates new traffic.
  standard: >-
    Braintrust started as an offline-only evals platform and discovered a
    customer piping all production traffic into a database to run hourly evals
    against it — revealing that observability and evals are the same problem
    from a systems perspective, just before vs. after production. The connective
    tissue is a flywheel: observe real agent behavior in production, pull those
    actual examples back into an offline environment, improve the agent with
    offline evals, ship it, and observe again.


    The strategic implication is that you should not architect evals and
    observability as separate tools bolted together later. Production trace data
    is the highest-signal input you have — it lets you 'rerun production in a
    safe environment' and measure the real lift of each change. Teams that treat
    evals as a pre-launch gate and observability as a post-launch dashboard miss
    the loop entirely; the value compounds only when the two share a data layer
    and you run the loop as many times as possible across the agent's lifetime.
stance: >-
  Offline evals and production observability should be built as a single closed
  loop, because production traces are the raw material that makes evals improve
  over the agent's lifetime.
related:
  - INS-260327-E07C
  - INS-260505-4351
  - INS-260605-E18B
  - INS-260605-A03E
  - INS-260605-159E
  - INS-260605-09E0
  - INS-260605-1B9D
  - INS-260625-25D6
  - INS-260626-B7EB
  - INS-260626-67E8
---
Braintrust started as an offline-only evals platform and discovered a customer piping all production traffic into a database to run hourly evals against it — revealing that observability and evals are the same problem from a systems perspective, just before vs. after production. The connective tissue is a flywheel: observe real agent behavior in production, pull those actual examples back into an offline environment, improve the agent with offline evals, ship it, and observe again.

The strategic implication is that you should not architect evals and observability as separate tools bolted together later. Production trace data is the highest-signal input you have — it lets you 'rerun production in a safe environment' and measure the real lift of each change. Teams that treat evals as a pre-launch gate and observability as a post-launch dashboard miss the loop entirely; the value compounds only when the two share a data layer and you run the loop as many times as possible across the agent's lifetime.
