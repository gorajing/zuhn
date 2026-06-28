---
id: INS-260625-DF35
domain: ai-development
topic: architecture
title: >-
  Evaluation belongs in the control plane as continuous infrastructure, not a
  pre-deploy QA phase
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - control-plane
  - continuous-evaluation
  - drift-detection
  - architecture-pattern
  - operational-capability
sources:
  - type: youtube
    title: >-
      Production Evals For Agentic AI Systems - Nishant Gupta, Meta
      Superintelligence Labs
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=vljxQZfJ9wY'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Architect evaluation as a control plane that continuously observes,
    simulates, and governs the execution plane — because agent systems drift
    constantly and degradation is gradual, not catastrophic.
  standard: >-
    Gupta's central architectural claim is that evaluation is becoming part of
    the control plane rather than an offline process or a separate tool. The
    control plane continuously observes the system, collects telemetry, runs
    simulations, and coordinates human review; the execution plane performs the
    actual work. The control plane measures and governs behavior, and this
    separation of governance from execution is emerging as a foundational
    pattern for production AI.


    The motivation is drift. Agent systems change constantly — new model
    versions every few weeks, evolving prompts, changing tools, shifting user
    behavior — and no single change looks catastrophic. Reliability degrades
    slowly: success rate declines, escalations rise, tool failures creep up.
    Without continuous evaluation, teams discover drift only when users
    complain. So the evaluation loop never stops: humans review edge cases, that
    feedback improves datasets, offline scenarios validate updates, and the
    cycle repeats as an operational capability rather than a deployment gate.
    Evaluation also becomes inseparable from observability — to evaluate an
    agent you need traces of reasoning paths, tool calls, memory access, and
    state transitions, which function as distributed tracing for autonomous
    workloads. The summary shift: evaluation is infrastructure, not QA.
stance: >-
  Evaluation should be a separate always-running control plane that observes and
  governs the execution plane, not a one-time testing gate before deployment.
related:
  - INS-260605-AABE
  - INS-260605-C513
  - INS-260605-0C5C
  - INS-260605-CA2B
  - INS-260605-6444
  - INS-260627-6418
  - PRI-260411-14DC
  - INS-260628-ACEA
---
Gupta's central architectural claim is that evaluation is becoming part of the control plane rather than an offline process or a separate tool. The control plane continuously observes the system, collects telemetry, runs simulations, and coordinates human review; the execution plane performs the actual work. The control plane measures and governs behavior, and this separation of governance from execution is emerging as a foundational pattern for production AI.

The motivation is drift. Agent systems change constantly — new model versions every few weeks, evolving prompts, changing tools, shifting user behavior — and no single change looks catastrophic. Reliability degrades slowly: success rate declines, escalations rise, tool failures creep up. Without continuous evaluation, teams discover drift only when users complain. So the evaluation loop never stops: humans review edge cases, that feedback improves datasets, offline scenarios validate updates, and the cycle repeats as an operational capability rather than a deployment gate. Evaluation also becomes inseparable from observability — to evaluate an agent you need traces of reasoning paths, tool calls, memory access, and state transitions, which function as distributed tracing for autonomous workloads. The summary shift: evaluation is infrastructure, not QA.
