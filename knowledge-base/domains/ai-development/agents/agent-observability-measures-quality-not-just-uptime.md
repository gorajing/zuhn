---
id: INS-260605-809A
domain: ai-development
topic: agents
title: 'Agent observability measures quality, not just uptime'
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - observability
  - agent-quality
  - evals
  - non-determinism
  - monitoring
sources:
  - type: youtube
    title: 'How agent o11y differs from traditional o11y — Phil Hetzel, Braintrust'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=XBaznoTRDFI'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Traditional observability asks 'is the system up?'; agent observability must
    also ask 'was the response grounded, did it use the right tools, did it
    match the brand voice?'
  standard: >-
    Traditional observability has a narrow, deterministic scope: uptime,
    latency, duration, and 400/500-level errors — the technical health of a
    system performing known control flow. Agents are non-deterministic, so the
    interesting questions shift from 'did it work technically' to 'did it work
    well.' Agent observability still captures the traditional metrics
    (time-to-first-token, total tokens, latency) but layers qualitative
    judgments on top: was the answer grounded in retrieved context, did the
    agent invoke the tools you'd expect during reasoning, is the response
    aligned to the brand standard set in the system prompt. These cannot be
    computed by Grafana or Datadog because the trace information required to
    evaluate them is far larger and richer than a conventional o11y trace. The
    practical takeaway: don't assume your existing observability contract covers
    agents — the scope is categorically wider.
stance: >-
  Traditional uptime-and-latency observability is insufficient for agents
  because the questions that matter are qualitative behavioral ones.
related:
  - INS-260327-5EEA
  - INS-260605-E9A6
  - INS-260605-8B25
  - INS-260605-A03E
  - PRI-260328-1ED1
---
Traditional observability has a narrow, deterministic scope: uptime, latency, duration, and 400/500-level errors — the technical health of a system performing known control flow. Agents are non-deterministic, so the interesting questions shift from 'did it work technically' to 'did it work well.' Agent observability still captures the traditional metrics (time-to-first-token, total tokens, latency) but layers qualitative judgments on top: was the answer grounded in retrieved context, did the agent invoke the tools you'd expect during reasoning, is the response aligned to the brand standard set in the system prompt. These cannot be computed by Grafana or Datadog because the trace information required to evaluate them is far larger and richer than a conventional o11y trace. The practical takeaway: don't assume your existing observability contract covers agents — the scope is categorically wider.
