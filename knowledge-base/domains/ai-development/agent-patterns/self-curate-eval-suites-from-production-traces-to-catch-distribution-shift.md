---
id: INS-260605-159E
domain: ai-development
topic: agent-patterns
title: Self-curate eval suites from production traces to catch distribution shift
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - evals
  - traces
  - distribution-shift
  - online-evaluation
  - telemetry
sources:
  - type: youtube
    title: >-
      Malleable Evals: Why Are We Evaluating Adaptive Systems with Static Tests?
      — Vincent Koc, OpenClaw
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=4VhbYlfC7Gs'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Feed production traces back into an agent that detects 'something has
    changed' and updates the test suite — always-on, not a one-time offline
    pass.
  standard: >-
    Roughly 80% of an agent's traffic is stable, but customer bases change, and
    when they do, users start asking questions differently and the agent's
    behavior shifts. Most teams never measure this drift. Koc proposes
    self-curating eval suites: once applications are traced, an agent (not a
    human) can detect when the distribution has changed, alert the owners, and
    regenerate the test suites — turning evaluation into an always-on online
    optimization service rather than a static benchmark run before deployment.


    This extends to telemetry-in-the-loop: when the harness is aware of what's
    breaking and what it's costing, it can self-correct against set conditions
    and heal itself. The principle is to use live data to update the agent
    rather than trying to predict every failure in advance.
stance: >-
  Agents should mine their own production traces to detect when usage has
  shifted and regenerate their eval suites automatically.
related:
  - INS-260605-CF2E
  - INS-260605-25B2
  - INS-260605-A2AD
  - INS-260605-3163
  - INS-260530-D34F
  - INS-260501-3502
---
Roughly 80% of an agent's traffic is stable, but customer bases change, and when they do, users start asking questions differently and the agent's behavior shifts. Most teams never measure this drift. Koc proposes self-curating eval suites: once applications are traced, an agent (not a human) can detect when the distribution has changed, alert the owners, and regenerate the test suites — turning evaluation into an always-on online optimization service rather than a static benchmark run before deployment.

This extends to telemetry-in-the-loop: when the harness is aware of what's breaking and what it's costing, it can self-correct against set conditions and heal itself. The principle is to use live data to update the agent rather than trying to predict every failure in advance.
