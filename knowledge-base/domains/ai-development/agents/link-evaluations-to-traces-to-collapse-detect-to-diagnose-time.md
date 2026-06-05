---
id: INS-260605-E18B
domain: ai-development
topic: agents
title: Link evaluations to traces to collapse detect-to-diagnose time
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - observability
  - evaluation
  - tracing
  - debugging
  - agents
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
    The point of observability is shortening the gap between detecting a failure
    and diagnosing it, which requires evals linked back to the exact trace.
  standard: >-
    Knowing a metric failed is worthless if you can't find which step caused it.
    The speakers stress 'trace-linked evaluations' — every eval result hangs off
    the trace that produced it, so when an eval flags a regression you can jump
    into the trace and see what differed between versions (e.g. a tool that
    stopped getting called after a model swap). The key reframe: observability
    is not about alerting on failure, it's about minimizing the time between
    detection and diagnosis. Without the trace link, you detect a problem but
    still have to reconstruct the cause by hand. With it, detection and
    diagnosis become a single navigable view, which is what makes fast iteration
    on non-deterministic agents possible.
stance: >-
  Observability that only tells you something went wrong is insufficient;
  evaluations must be attached to the underlying trace.
related:
  - INS-260605-E9A6
  - INS-260605-A03E
  - INS-260605-8B25
  - INS-260605-2186
  - INS-260605-EF23
  - INS-260605-6C72
---
Knowing a metric failed is worthless if you can't find which step caused it. The speakers stress 'trace-linked evaluations' — every eval result hangs off the trace that produced it, so when an eval flags a regression you can jump into the trace and see what differed between versions (e.g. a tool that stopped getting called after a model swap). The key reframe: observability is not about alerting on failure, it's about minimizing the time between detection and diagnosis. Without the trace link, you detect a problem but still have to reconstruct the cause by hand. With it, detection and diagnosis become a single navigable view, which is what makes fast iteration on non-deterministic agents possible.
