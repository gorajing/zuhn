---
id: INS-260626-5B28
domain: ai-development
topic: architecture
title: Separate the agent harness from the data layer so agents become swappable
actionability: inspiration
confidence: medium
shelf_life: evergreen
status: active
tags:
  - architecture
  - agents
  - mcp
  - decoupling
  - gateway
sources:
  - type: youtube
    title: 'Gateways are All You Need — Karan Sampath, Anthropic'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=CD6R4Wf3jnY'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Keep the agent harness decoupled from the data/MCP layer so agents can be
    swapped in and out without re-architecting, with the gateway as the
    invariant.
  standard: >-
    Sampath's forward-looking thesis is that the agent harness should not be
    tightly coupled to how an enterprise's data and MCP servers are structured.
    With an explosion of agents and surfaces coming, the 'orange box' (the
    agent) and the data/MCP layer should be mutually un-opinionated. A gateway
    is what enforces this separation: it presents a stable interface that agents
    listen to, regardless of how the underlying servers are organized.


    The strategic payoff is optionality. Because the gateway is the invariant,
    an enterprise can decide—and later re-decide—which agents to keep in-house
    versus run externally without re-plumbing its data layer each time. A
    gateway can connect to managed agents (e.g. Claude managed agents) or to
    internally hosted agents built on an agent SDK, interchangeably. This lets
    enterprises invest heavily in opinionated, durable MCP/gateway primitives
    now while deferring agent-design commitments, because the harness choice has
    become cheap to change. The principle generalizes beyond MCP: when the
    substrate that everything routes through is held stable, the components on
    either side become disposable and swappable.
stance: >-
  Decoupling the agent harness from where data and MCP servers live—via a
  gateway—turns the choice of in-house versus external agents into a reversible,
  invariant decision.
related:
  - INS-260514-4FDC
  - INS-260625-25AC
  - INS-260625-AF2A
  - INS-260626-09E1
  - INS-260626-9BC5
  - PRI-260426-890F
  - INS-260403-C1EB
---
Sampath's forward-looking thesis is that the agent harness should not be tightly coupled to how an enterprise's data and MCP servers are structured. With an explosion of agents and surfaces coming, the 'orange box' (the agent) and the data/MCP layer should be mutually un-opinionated. A gateway is what enforces this separation: it presents a stable interface that agents listen to, regardless of how the underlying servers are organized.

The strategic payoff is optionality. Because the gateway is the invariant, an enterprise can decide—and later re-decide—which agents to keep in-house versus run externally without re-plumbing its data layer each time. A gateway can connect to managed agents (e.g. Claude managed agents) or to internally hosted agents built on an agent SDK, interchangeably. This lets enterprises invest heavily in opinionated, durable MCP/gateway primitives now while deferring agent-design commitments, because the harness choice has become cheap to change. The principle generalizes beyond MCP: when the substrate that everything routes through is held stable, the components on either side become disposable and swappable.
