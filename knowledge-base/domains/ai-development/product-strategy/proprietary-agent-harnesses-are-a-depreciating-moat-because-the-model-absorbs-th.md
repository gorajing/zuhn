---
id: INS-260625-1B69
domain: ai-development
topic: product-strategy
title: >-
  Proprietary agent harnesses are a depreciating moat because the model absorbs
  the scaffolding
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - agent-harness
  - moats
  - scaffolding
  - llm-capability
  - infrastructure
sources:
  - type: youtube
    title: 'Google DeepMind''s Logan Kilpatrick: Why the Model Eats the Harness'
    author: Sequoia Capital
    url: 'https://www.youtube.com/watch?v=cMAs8z2dehs'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Scaffolding runs a step ahead of the model, but the model keeps digesting it
    and upstreaming it natively, so today's harness alpha evaporates within
    about a year.
  standard: >-
    Kilpatrick reframes 'the model' as no longer just a set of weights but an
    expanding system around the weights: tool calling, hosted search, code
    execution, containerized runtimes, agent harnesses. Scaffolding is typically
    a couple of steps ahead of what's baked into the weights, but the recurring
    pattern is that the model 'eats that scaffolding' and it becomes part of the
    native model system. His concrete prediction: the belief that 'the harness
    is where the alpha is' won't hold 12 months out, because models will have
    digested that capability and the alpha will move elsewhere.


    The practical lesson is about where to invest engineering effort. Any
    capability you build as external scaffolding to compensate for a model
    limitation is on a depreciation clock — you are betting against the model
    labs closing that exact gap. The lock-in counterargument (build your own
    harness to avoid being captive to one provider) weakens over time too:
    Kilpatrick argues 'you don't have a generalized model if it can't use
    another harness,' so portability becomes a model property rather than
    something you must engineer around. He even proposes a 'harness bench' to
    measure how well models adapt across harnesses. Durable value lives in the
    cases that stay external for genuine reasons (e.g., search where users want
    provider choice), not in racing to hand-build orchestration the model will
    soon own.
stance: >-
  Building a custom agent harness as a durable competitive advantage will fail
  because frontier models absorb scaffolding into native capability within
  roughly 12 months.
related:
  - INS-260605-320E
  - INS-260410-B0D6
  - PRI-260426-890F
  - INS-260410-9DB0
  - INS-260625-6042
  - INS-260626-C412
---
Kilpatrick reframes 'the model' as no longer just a set of weights but an expanding system around the weights: tool calling, hosted search, code execution, containerized runtimes, agent harnesses. Scaffolding is typically a couple of steps ahead of what's baked into the weights, but the recurring pattern is that the model 'eats that scaffolding' and it becomes part of the native model system. His concrete prediction: the belief that 'the harness is where the alpha is' won't hold 12 months out, because models will have digested that capability and the alpha will move elsewhere.

The practical lesson is about where to invest engineering effort. Any capability you build as external scaffolding to compensate for a model limitation is on a depreciation clock — you are betting against the model labs closing that exact gap. The lock-in counterargument (build your own harness to avoid being captive to one provider) weakens over time too: Kilpatrick argues 'you don't have a generalized model if it can't use another harness,' so portability becomes a model property rather than something you must engineer around. He even proposes a 'harness bench' to measure how well models adapt across harnesses. Durable value lives in the cases that stay external for genuine reasons (e.g., search where users want provider choice), not in racing to hand-build orchestration the model will soon own.
