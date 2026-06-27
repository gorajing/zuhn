---
id: INS-260627-DD09
domain: ai-development
topic: architecture
title: >-
  Expose platform capabilities as well-defined APIs, with CLI/MCP as wrappers on
  top
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - api-design
  - mcp
  - agent-interfaces
  - schema-validation
  - discoverability
sources:
  - type: youtube
    title: "Platforms for Humans and Machines: Engineering for the Age of Agents —\_Juan Herreros Elorza"
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=cCRO3ChaYhM'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Self-service can take many forms — buttons, text, CLIs, MCP servers — but
    underneath them all should sit a well-defined API, because that gives agents
    discoverability, schema validation, and built-in auth.
  standard: >-
    The argument is that agents are specifically good at calling well-defined
    APIs, and that an API gives an agent three things a button or a free-text
    channel cannot. First, discoverability: as the agent interacts with the API
    it learns what operations exist and what options are available, so it can
    explore the capability surface on its own. Second, schema validation: the
    agent will naturally only send requests that conform, so malformed calls
    fail fast at the boundary. Third, authentication and authorization: the
    agent can act with the developer's credentials or its own scoped identity
    and operate securely while knowing exactly what it's allowed to do.


    Crucially, CLIs and MCP servers are not alternatives to an API — they are
    presentation layers on top of one. The talk explicitly endorses wrapping an
    API in a CLI or an MCP server as good ideas, but insists that 'generally
    under all of that you should have a well-defined API.' This inverts a common
    instinct to build an MCP server or CLI as the primary integration; the
    durable investment is the API, and the agent-facing surfaces are thin
    adapters over it.


    The payoff is the agentic loop: with a clear API the agent can attempt an
    operation, read the structured response, and iterate — going back and forth
    until it achieves the goal — without a human translating intent into the
    platform's idiom each time.
stance: >-
  Agents are dramatically more effective against discoverable, schema-validated
  APIs than against GUIs or ad-hoc text interfaces, so every agent-facing
  capability should bottom out in a well-defined API.
related:
  - INS-260605-B794
  - INS-260625-BBB1
  - INS-260625-EDA3
  - INS-260605-0C56
  - INS-260625-2439
  - PRI-260406-788D
  - INS-260626-FEA0
  - INS-260627-FF5D
---
The argument is that agents are specifically good at calling well-defined APIs, and that an API gives an agent three things a button or a free-text channel cannot. First, discoverability: as the agent interacts with the API it learns what operations exist and what options are available, so it can explore the capability surface on its own. Second, schema validation: the agent will naturally only send requests that conform, so malformed calls fail fast at the boundary. Third, authentication and authorization: the agent can act with the developer's credentials or its own scoped identity and operate securely while knowing exactly what it's allowed to do.

Crucially, CLIs and MCP servers are not alternatives to an API — they are presentation layers on top of one. The talk explicitly endorses wrapping an API in a CLI or an MCP server as good ideas, but insists that 'generally under all of that you should have a well-defined API.' This inverts a common instinct to build an MCP server or CLI as the primary integration; the durable investment is the API, and the agent-facing surfaces are thin adapters over it.

The payoff is the agentic loop: with a clear API the agent can attempt an operation, read the structured response, and iterate — going back and forth until it achieves the goal — without a human translating intent into the platform's idiom each time.
