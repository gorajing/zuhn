---
id: INS-260423-74BF
domain: ai-development
topic: agent-patterns
title: >-
  Agent Cards plus A2A protocol are becoming the standard for agent-to-agent
  discovery and invocation
actionability: reference
confidence: medium
shelf_life: time-sensitive
status: active
tags:
  - a2a
  - agent-card
  - agent-interop
  - multi-agent-systems
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
    Google ADK demo: the Guardian agent has an Agent Card declaring streaming
    capability, description, skills, version, and URL — and that card is what
    lets other agents discover and call it via A2A.
  standard: >-
    As multi-agent systems mature, the coordination problem (how does agent A
    find and invoke agent B?) is resolving into a converging standard: each
    agent publishes an Agent Card (a structured description of capabilities,
    skills, streaming support, version, and invocation URL) and agents discover
    each other through those cards. The invocation uses the A2A protocol, which
    standardizes request/response shapes across ADK, LangGraph, and other agent
    frameworks. The immediate implication for builders: an agent without an
    Agent Card is isolated — it cannot be composed into larger systems, cannot
    be invoked by other teams' agents, and cannot participate in
    cross-organization agent ecosystems. The standardization is still early but
    the direction is visible. Any production agent built today should publish an
    Agent Card by default; retrofitting this later is harder than treating it as
    a v0 requirement.
stance: >-
  Production multi-agent systems are converging on Agent Card self-description
  plus A2A invocation protocol as the interoperability standard — agents that
  lack an Agent Card cannot be discovered or called by other agents in the
  ecosystem
related:
  - INS-260605-9276
  - INS-260605-74CC
  - INS-260605-0C56
  - INS-260519-20E0
  - INS-260605-BA6A
  - INS-260505-4A52
  - INS-260605-8409
  - INS-260605-48CA
---
As multi-agent systems mature, the coordination problem (how does agent A find and invoke agent B?) is resolving into a converging standard: each agent publishes an Agent Card (a structured description of capabilities, skills, streaming support, version, and invocation URL) and agents discover each other through those cards. The invocation uses the A2A protocol, which standardizes request/response shapes across ADK, LangGraph, and other agent frameworks. The immediate implication for builders: an agent without an Agent Card is isolated — it cannot be composed into larger systems, cannot be invoked by other teams' agents, and cannot participate in cross-organization agent ecosystems. The standardization is still early but the direction is visible. Any production agent built today should publish an Agent Card by default; retrofitting this later is harder than treating it as a v0 requirement.
