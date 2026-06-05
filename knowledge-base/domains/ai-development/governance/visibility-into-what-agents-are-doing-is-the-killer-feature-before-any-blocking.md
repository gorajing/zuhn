---
id: INS-260605-98BD
domain: ai-development
topic: governance
title: >-
  Visibility into what agents are doing is the killer feature before any
  blocking
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - observability
  - agent-monitoring
  - audit
  - tool-calls
  - adoption
sources:
  - type: youtube
    title: 'What if the network was the sandbox? — Remy Guercio, Tailscale'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=BM2JX9hqsVQ'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    The first thing organizations want from an agent gateway is not enforcement
    but an answer to 'what are people even doing?' — a guaranteed, complete
    record of every tool call, bash command, and request.
  standard: >-
    When pitched on agent controls, a lot of teams responded: 'forget about
    blocking it for a second — I don't even know what tools people are using.'
    This inverts the usual security framing where policy enforcement is the
    headline. The value of a network-layer gateway is that it provides a
    guarantee, not a sample: 'I've seen every tool call this thing has ever
    made' — not from inside the container or the harness, where an agent could
    obfuscate, but from the network chokepoint every request must cross. That
    completeness enables cost attribution per identity, full request/response
    inspection, per-session drill-down, and webhooks that are 'guaranteed to
    exist and run no matter what.' Enforcement (budgets, quotas, blocking rm
    -rf) is layered on after, but observability is what gets the system adopted,
    because you cannot govern — or even reason about — behavior you cannot see.
stance: >-
  Teams need to see what their agents are actually doing more urgently than they
  need to block specific actions.
related:
  - INS-260605-5C58
  - INS-260410-85AD
  - INS-260605-2DD5
  - INS-260524-2C7C
  - INS-260605-3553
  - INS-260605-B794
  - INS-260605-2E27
---
When pitched on agent controls, a lot of teams responded: 'forget about blocking it for a second — I don't even know what tools people are using.' This inverts the usual security framing where policy enforcement is the headline. The value of a network-layer gateway is that it provides a guarantee, not a sample: 'I've seen every tool call this thing has ever made' — not from inside the container or the harness, where an agent could obfuscate, but from the network chokepoint every request must cross. That completeness enables cost attribution per identity, full request/response inspection, per-session drill-down, and webhooks that are 'guaranteed to exist and run no matter what.' Enforcement (budgets, quotas, blocking rm -rf) is layered on after, but observability is what gets the system adopted, because you cannot govern — or even reason about — behavior you cannot see.
