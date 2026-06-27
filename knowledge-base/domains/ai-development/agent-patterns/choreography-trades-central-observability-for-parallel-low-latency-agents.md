---
id: INS-260625-6FC0
domain: ai-development
topic: agent-patterns
title: Choreography trades central observability for parallel low-latency agents
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - multi-agent
  - orchestration
  - agents
  - architecture
  - latency
sources:
  - type: youtube
    title: >-
      The Production AI Playbook: Deploying Agents at Enterprise Scale —
      Sandipan Bhaumik, Databricks
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=ObTPqBGsEbA'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Orchestrator-worker gives you one central control/log plane; choreography
    (agents listening to a shared message bus) gives you parallel, independent
    agents and lower latency but no single point of observability.
  standard: >-
    Bhaumik notes that a single agent rarely needs orchestration, but the moment
    you add five, coordination complexity grows exponentially — agents must talk
    to each other, wait on each other, and recover from each other's failures —
    and you must consciously choose a pattern. He contrasts three. In
    orchestrator-worker, one orchestrator controls all work from a central plane
    and dispatches to specialized agents; every request flows through it, so you
    get central control and a single place (the orchestrator logs) to debug what
    happened. In choreography, agents are autonomous and independent: they all
    subscribe to a message bus and react to the events they care about, running
    in parallel rather than in an orchestrator-mediated sequence. The advantage
    is reduced latency, because agents aren't bottlenecked on round-trips
    through a central coordinator; the tradeoff is the loss of that central
    observability and control point. The third, human-in-the-loop, routes to a
    human whenever an agent's confidence falls below a threshold.


    The key directional claim is the explicit tradeoff: choreography's
    parallelism and latency win is paid for with the centralized traceability
    that orchestrator-worker provides. That matters because — per the talk's
    other pillars — observability is often non-negotiable in regulated
    production, so the latency benefit of choreography must be weighed against
    harder debugging and audit. Bhaumik flags that real-world multi-agent design
    also hinges on state management and fault tolerance (he references saga,
    compensation, and circuit-breaker recovery patterns), meaning pattern choice
    is not purely about the happy path but about how failures are contained.


    Confidence is medium because the right pattern is genuinely use-case
    dependent (sequential dependency vs. independent parallel tasks like a
    mortgage application where one agent checks customer details while another
    checks approvals), and the talk presents the tradeoff as a design heuristic
    rather than a universal rule.
stance: >-
  Choosing message-bus choreography over an orchestrator-worker pattern buys
  parallelism and lower latency at the direct cost of the centralized control
  and traceability the orchestrator provides.
related:
  - INS-260409-B80C
  - PRI-260328-1ED1
  - INS-260627-9968
  - INS-260626-2D64
  - INS-260327-C1A4
  - INS-260605-9A01
  - INS-260625-1C5E
---
Bhaumik notes that a single agent rarely needs orchestration, but the moment you add five, coordination complexity grows exponentially — agents must talk to each other, wait on each other, and recover from each other's failures — and you must consciously choose a pattern. He contrasts three. In orchestrator-worker, one orchestrator controls all work from a central plane and dispatches to specialized agents; every request flows through it, so you get central control and a single place (the orchestrator logs) to debug what happened. In choreography, agents are autonomous and independent: they all subscribe to a message bus and react to the events they care about, running in parallel rather than in an orchestrator-mediated sequence. The advantage is reduced latency, because agents aren't bottlenecked on round-trips through a central coordinator; the tradeoff is the loss of that central observability and control point. The third, human-in-the-loop, routes to a human whenever an agent's confidence falls below a threshold.

The key directional claim is the explicit tradeoff: choreography's parallelism and latency win is paid for with the centralized traceability that orchestrator-worker provides. That matters because — per the talk's other pillars — observability is often non-negotiable in regulated production, so the latency benefit of choreography must be weighed against harder debugging and audit. Bhaumik flags that real-world multi-agent design also hinges on state management and fault tolerance (he references saga, compensation, and circuit-breaker recovery patterns), meaning pattern choice is not purely about the happy path but about how failures are contained.

Confidence is medium because the right pattern is genuinely use-case dependent (sequential dependency vs. independent parallel tasks like a mortgage application where one agent checks customer details while another checks approvals), and the talk presents the tradeoff as a design heuristic rather than a universal rule.
