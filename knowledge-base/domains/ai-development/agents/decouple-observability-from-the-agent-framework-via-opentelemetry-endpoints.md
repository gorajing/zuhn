---
id: INS-260605-E9A6
domain: ai-development
topic: agents
title: Decouple observability from the agent framework via OpenTelemetry endpoints
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - opentelemetry
  - observability
  - interoperability
  - tracing
  - architecture
sources:
  - type: youtube
    title: >-
      Mind the Gap (In your Agent Observability) — Amy Boyd & Nitya Narasimhan,
      Microsoft
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=iOXM3zE-2dk'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Build observability on OpenTelemetry so any agent — LangGraph, custom, or
    platform-native — can be traced and evaluated through a common endpoint.
  standard: >-
    The tracing layer 'doesn't care what kind of agent you have' — as long as
    the agent has an endpoint that emits auto-traces, the platform can gather
    them; the same holds for evaluation, which just needs an endpoint to hit.
    Microsoft built this on the OpenTelemetry (hotel/OTel) standard, which means
    agents built in different frameworks across an organization can all be
    instrumented and managed in one control plane. The design principle
    generalizes: treat observability as an interface (standardized telemetry + a
    callable endpoint) rather than a framework feature. This avoids lock-in and
    lets a heterogeneous fleet of agents be monitored centrally without
    rewriting them onto one stack.
stance: >-
  Tracing and evaluation should depend only on an instrumented endpoint, not on
  how the agent was built.
related:
  - INS-260327-5EEA
  - INS-260602-1DF1
  - INS-260605-8B25
  - INS-260605-809A
  - INS-260605-A03E
  - INS-260605-E18B
---
The tracing layer 'doesn't care what kind of agent you have' — as long as the agent has an endpoint that emits auto-traces, the platform can gather them; the same holds for evaluation, which just needs an endpoint to hit. Microsoft built this on the OpenTelemetry (hotel/OTel) standard, which means agents built in different frameworks across an organization can all be instrumented and managed in one control plane. The design principle generalizes: treat observability as an interface (standardized telemetry + a callable endpoint) rather than a framework feature. This avoids lock-in and lets a heterogeneous fleet of agents be monitored centrally without rewriting them onto one stack.
