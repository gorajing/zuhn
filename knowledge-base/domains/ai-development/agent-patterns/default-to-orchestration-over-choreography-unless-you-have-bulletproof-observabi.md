---
id: INS-260627-9968
domain: ai-development
topic: agent-patterns
title: >-
  Default to orchestration over choreography unless you have bulletproof
  observability
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - multi-agent
  - orchestration
  - choreography
  - coordination
  - observability
  - decision-framework
sources:
  - type: youtube
    title: >-
      From Chaos to Choreography: Multi-Agent Orchestration Patterns That
      Actually Work — Sandipan Bhaumik
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=2czYyrTzILg'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Choreography (agents coordinate via events on a message bus) scales and
    decouples but is a debugging nightmare without bulletproof event
    observability; orchestration (a central coordinator calls each agent,
    manages parallelism, state, retries, and logging) trades autonomy for
    debuggability and rollback — choose by workflow complexity vs. autonomy
    need.
  standard: >-
    The two fundamental coordination patterns are choreography and
    orchestration. In choreography, each agent publishes events ('research
    completed') to a message bus and subscribes to the event types it cares
    about; there is no central coordinator. Agents are loosely coupled, easy to
    add, and highly autonomous — but when something fails you play detective
    with no clue: which agent failed to publish, did the event get consumed, was
    it consumed twice? Choreography is only viable with bulletproof
    observability and strong delivery guarantees. Teams that pick it because it
    'feels more agentic' often spend months firefighting undebuggable event
    flows.


    In orchestration, a central coordinator calls each agent directly, waits for
    results, manages parallelism (not the agents), and combines outputs
    downstream. Agents never call each other and are 'dumb' — take input, do
    work, return output. The orchestrator is the single source of truth: it
    knows the execution graph, manages state, handles retries, logs every step,
    and enables rollback. In regulated industries (financial services) the
    author uses orchestration almost exclusively, because knowing exactly which
    agent acted, in what order, with what data matters more than autonomy.


    The decision framework is two axes: workflow complexity (simple→complex) and
    autonomy requirement (low→high). Simple + high-autonomy → choreography.
    Complex + low-autonomy → orchestration. The hard quadrant — complex workflow
    that still needs autonomy — calls for hybrids like choreography with saga
    compensation. Implementable on stacks like LangGraph as the orchestrator;
    any engine giving you DAGs plus proper retries fits. Don't pick
    instinctively and regret it; choose against the axes.
stance: >-
  For most production multi-agent workflows you should pick centralized
  orchestration, reserving event-driven choreography for cases where you have
  strong event tracing and genuinely need agent autonomy.
related:
  - INS-260327-13B3
  - PRI-260328-1ED1
  - INS-260405-CADE
  - INS-260410-0E26
  - INS-260410-CD01
  - INS-260410-1ED3
  - INS-260411-D060
  - INS-260421-7ADE
  - INS-260530-69DC
  - INS-260605-3B06
---
The two fundamental coordination patterns are choreography and orchestration. In choreography, each agent publishes events ('research completed') to a message bus and subscribes to the event types it cares about; there is no central coordinator. Agents are loosely coupled, easy to add, and highly autonomous — but when something fails you play detective with no clue: which agent failed to publish, did the event get consumed, was it consumed twice? Choreography is only viable with bulletproof observability and strong delivery guarantees. Teams that pick it because it 'feels more agentic' often spend months firefighting undebuggable event flows.

In orchestration, a central coordinator calls each agent directly, waits for results, manages parallelism (not the agents), and combines outputs downstream. Agents never call each other and are 'dumb' — take input, do work, return output. The orchestrator is the single source of truth: it knows the execution graph, manages state, handles retries, logs every step, and enables rollback. In regulated industries (financial services) the author uses orchestration almost exclusively, because knowing exactly which agent acted, in what order, with what data matters more than autonomy.

The decision framework is two axes: workflow complexity (simple→complex) and autonomy requirement (low→high). Simple + high-autonomy → choreography. Complex + low-autonomy → orchestration. The hard quadrant — complex workflow that still needs autonomy — calls for hybrids like choreography with saga compensation. Implementable on stacks like LangGraph as the orchestrator; any engine giving you DAGs plus proper retries fits. Don't pick instinctively and regret it; choose against the axes.
