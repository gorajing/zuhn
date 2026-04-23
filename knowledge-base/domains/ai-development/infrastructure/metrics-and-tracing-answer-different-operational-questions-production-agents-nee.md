---
id: INS-260423-2B80
domain: ai-development
topic: infrastructure
title: >-
  Metrics and tracing answer different operational questions — production agents
  need both
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - observability
  - metrics
  - tracing
  - agent-ops
sources:
  - type: youtube
    title: 'Gemma 4 production stack: Model Armor, ADK Agents, Tracing'
    author: Google Cloud Tech
    url: 'https://youtu.be/7wENq-LMHgQ'
date_extracted: '2026-04-23'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Annie: metrics shows what is going on — GPU utilization, current token
    usage, like a dashboard in your car; tracing shows why a 2.5-second request
    broke down as it did, the detail behind the scenes.
  standard: >-
    The observability divide between metrics and tracing maps to two different
    operational questions. Metrics answer what: how many tokens per second,
    current GPU utilization, request rate, error rate, cost per hour. They
    aggregate across requests and give you the dashboard view. Tracing answers
    why: this specific 2.5-second request spent 800ms in model inference, 900ms
    waiting on the vector DB, 600ms in post-processing, 200ms in network.
    Metrics show the forest; tracing shows individual trees when one is sick.
    Production agent systems need both because many failure modes are invisible
    to either alone. A metrics-only system notices 'latency is up' but cannot
    localize the cause. A tracing-only system captures every request in detail
    but cannot tell you whether anything is abnormal without aggregate
    baselines. The practical rule: build metrics first (cheap, uniform,
    compulsory) and add tracing selectively on the 5-10 most important request
    paths (expensive, verbose, high-signal for those paths).
stance: >-
  Production AI agent operations require both metrics (what is happening now,
  dashboard-style) and tracing (why did this specific request behave this way,
  breakdown-style); systems that capture only one of these hit observability
  walls when issues escalate
related:
  - INS-260322-4757
  - INS-260321-167A
  - INS-260327-EBDF
  - INS-260403-9067
  - INS-260403-6807
  - INS-260412-2B01
  - PRI-260323-2E5A
  - INS-260403-2A0F
  - PRI-260406-818D
  - INS-260423-9225
---
The observability divide between metrics and tracing maps to two different operational questions. Metrics answer what: how many tokens per second, current GPU utilization, request rate, error rate, cost per hour. They aggregate across requests and give you the dashboard view. Tracing answers why: this specific 2.5-second request spent 800ms in model inference, 900ms waiting on the vector DB, 600ms in post-processing, 200ms in network. Metrics show the forest; tracing shows individual trees when one is sick. Production agent systems need both because many failure modes are invisible to either alone. A metrics-only system notices 'latency is up' but cannot localize the cause. A tracing-only system captures every request in detail but cannot tell you whether anything is abnormal without aggregate baselines. The practical rule: build metrics first (cheap, uniform, compulsory) and add tracing selectively on the 5-10 most important request paths (expensive, verbose, high-signal for those paths).
