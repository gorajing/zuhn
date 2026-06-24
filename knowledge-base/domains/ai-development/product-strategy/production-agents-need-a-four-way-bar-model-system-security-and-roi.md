---
id: INS-260624-5865
domain: ai-development
topic: product-strategy
title: 'Production agents need a four-way bar: model, system, security, and ROI'
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - agents
  - production
  - security
  - roi
sources:
  - type: paste
    title: Stanford AI Agent Seminar Slide Notes And User Field Notes
date_extracted: '2026-06-24'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    A production agent is not ready until model behavior, runtime reliability,
    safety boundary, and business value all hold at once.
  standard: >-
    The slide framing asks four questions: efficiency, security, bottleneck, and
    value. That reframes agent progress away from benchmark comparisons and
    toward the combined condition for real deployment: the model must be
    capable, the system must run reliably, the agent must not cross unsafe
    boundaries, and the workflow must change enough to justify cost.


    For builders, this is a release checklist. A demo that only improves task
    accuracy can still fail because latency is too high, tool calls are too
    expensive, the agent can perform unsafe actions, or the user workflow is
    unchanged. The right question is not 'did the agent solve the benchmark?'
    but 'can model + system + security + business run together?'
stance: >-
  Agent teams should evaluate model quality, systems reliability, security
  boundary, and workflow ROI together because benchmark gains alone do not prove
  an agent is useful in production.
related:
  - INS-260619-90F6
  - INS-260605-D912
  - INS-260501-9465
  - INS-260605-705B
  - INS-260405-CC9D
---
The slide framing asks four questions: efficiency, security, bottleneck, and value. That reframes agent progress away from benchmark comparisons and toward the combined condition for real deployment: the model must be capable, the system must run reliably, the agent must not cross unsafe boundaries, and the workflow must change enough to justify cost.

For builders, this is a release checklist. A demo that only improves task accuracy can still fail because latency is too high, tool calls are too expensive, the agent can perform unsafe actions, or the user workflow is unchanged. The right question is not 'did the agent solve the benchmark?' but 'can model + system + security + business run together?'
