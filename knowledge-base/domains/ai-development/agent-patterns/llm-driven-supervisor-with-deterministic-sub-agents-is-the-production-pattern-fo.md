---
id: INS-260530-69DC
domain: ai-development
topic: agent-patterns
title: >-
  LLM-driven supervisor with deterministic sub-agents is the production pattern
  for multi-agent workflows
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - multi-agent
  - agent-architecture
  - supervisor-pattern
  - google-adk
  - production-systems
sources:
  - type: audio
    title: paypal
date_extracted: '2026-05-30'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    PayPal's ADK incident platform uses one LLM-driven supervisor orchestrating
    deterministic sub-agents (detection, triage, communication, mitigation, RCA)
    — the supervisor decides which agent to invoke, but each sub-agent's job is
    fixed.
  standard: >-
    The architecture choice PayPal made is significant: rather than a peer mesh
    of equal agents that 'negotiate' (which is what most agent-framework demos
    show), they pinned all non-determinism at the supervisor. The supervisor
    uses an LLM to decide which sub-agent to delegate to based on the incident's
    state; each sub-agent is a deterministic specialist (data collector, service
    analyst, change analyst, report generator). This narrows the failure surface
    — debugging 'why did the supervisor pick the wrong sub-agent' is a clean
    question; debugging 'why did three agents negotiate this outcome' is not.


    For Zuhn this maps directly to the agent-execution layer of any future
    Zuhn-built agent system: keep judgment at the orchestrator, keep sub-tools
    narrow and predictable. It also reframes when peer negotiation makes sense —
    only when no single agent has enough context to be a deterministic
    specialist, which is a higher bar than most frameworks assume.
stance: >-
  Production multi-agent systems should put non-determinism only at the
  supervisor (which sub-agent to invoke) and keep sub-agents deterministic
  specialists, not a flat mesh of negotiating peers
related:
  - INS-260320-63D3
  - INS-260423-FF52
  - INS-260327-C1A4
  - PRI-260328-1ED1
  - INS-260327-2101
  - INS-260501-4C5E
---
The architecture choice PayPal made is significant: rather than a peer mesh of equal agents that 'negotiate' (which is what most agent-framework demos show), they pinned all non-determinism at the supervisor. The supervisor uses an LLM to decide which sub-agent to delegate to based on the incident's state; each sub-agent is a deterministic specialist (data collector, service analyst, change analyst, report generator). This narrows the failure surface — debugging 'why did the supervisor pick the wrong sub-agent' is a clean question; debugging 'why did three agents negotiate this outcome' is not.

For Zuhn this maps directly to the agent-execution layer of any future Zuhn-built agent system: keep judgment at the orchestrator, keep sub-tools narrow and predictable. It also reframes when peer negotiation makes sense — only when no single agent has enough context to be a deterministic specialist, which is a higher bar than most frameworks assume.
