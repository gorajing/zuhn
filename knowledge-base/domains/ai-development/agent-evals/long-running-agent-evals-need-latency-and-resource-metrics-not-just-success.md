---
id: INS-260625-FDC1
domain: ai-development
topic: agent-evals
title: 'Long-running agent evals need latency and resource metrics, not just success'
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - agent-evals
  - reliability
  - long-horizon
  - cost
sources:
  - type: blog
    title: 'SentinelBench: A Benchmark for Long-Running Monitoring Agents'
    url: 'https://arxiv.org/html/2606.05342v2'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Long-running agent gates should report success, reaction latency, and
    resource use together.
  standard: >-
    SentinelBench makes the production tradeoff explicit: monitoring agents can
    complete a task while being too slow or too expensive to deploy. For
    AgentRun, any watch/automation gate should pair the binary outcome with
    elapsed time, token/tool-call budget, polling behavior, and whether the
    system waited for the right condition instead of continuously acting.
subtopic: long-running-agents
stance: >-
  An agent benchmark that scores only task completion will overrate long-running
  systems that succeed by burning excessive polling, tokens, or wall-clock time.
related:
  - INS-260330-FC4D
  - INS-260605-C436
  - INS-260625-C1E8
  - INS-260625-A5E7
  - INS-260605-D912
  - INS-260625-2B5A
---
SentinelBench makes the production tradeoff explicit: monitoring agents can complete a task while being too slow or too expensive to deploy. For AgentRun, any watch/automation gate should pair the binary outcome with elapsed time, token/tool-call budget, polling behavior, and whether the system waited for the right condition instead of continuously acting.
