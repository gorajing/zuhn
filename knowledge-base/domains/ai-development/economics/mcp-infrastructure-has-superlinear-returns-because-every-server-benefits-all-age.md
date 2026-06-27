---
id: INS-260626-FEA0
domain: ai-development
topic: economics
title: >-
  MCP infrastructure has superlinear returns because every server benefits all
  agents
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - mcp
  - returns
  - infrastructure
  - network-effects
  - platform
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
    Every good MCP server helps all agents in the company, so infrastructure
    that lowers the cost of building servers yields compounding, not linear,
    returns.
  standard: >-
    Sampath's economic argument for gateway investment is that MCP usage is
    exponential: 'every good MCP you have helps all of the agents in your
    company.' A single server added behind the gateway has knock-on effects far
    beyond its own use case, because it becomes immediately callable by every
    agent surface the enterprise runs. This reframes the build/buy decision
    around a gateway from a cost center into a leverage multiplier.


    The implication is that the highest-return move is not building any one MCP
    server well, but lowering the marginal cost and friction of building all of
    them. A one-time gateway investment—ideally low-maintenance and
    agent-buildable—unlocks a flywheel: more teams ship servers, every server
    enriches every agent, and the per-server value grows with the agent
    population. The contrasting failure mode is an enterprise that stays with a
    handful of MCP tools; Sampath argues this doesn't just under-deliver, it
    'fundamentally restricts the protocol and hurts agents' by capping the
    compounding before it starts. Treat the 'paper cuts' that block server
    creation as high-leverage problems worth disproportionate engineering
    investment.
stance: >-
  Because each new MCP server is usable by every agent in the organization,
  investment in gateway infrastructure that unblocks server creation compounds
  rather than scaling linearly.
related:
  - INS-260403-E497
  - INS-260605-82BD
  - INS-260626-2170
  - PRI-260328-8317
  - INS-260327-BB71
  - INS-260405-54A9
---
Sampath's economic argument for gateway investment is that MCP usage is exponential: 'every good MCP you have helps all of the agents in your company.' A single server added behind the gateway has knock-on effects far beyond its own use case, because it becomes immediately callable by every agent surface the enterprise runs. This reframes the build/buy decision around a gateway from a cost center into a leverage multiplier.

The implication is that the highest-return move is not building any one MCP server well, but lowering the marginal cost and friction of building all of them. A one-time gateway investment—ideally low-maintenance and agent-buildable—unlocks a flywheel: more teams ship servers, every server enriches every agent, and the per-server value grows with the agent population. The contrasting failure mode is an enterprise that stays with a handful of MCP tools; Sampath argues this doesn't just under-deliver, it 'fundamentally restricts the protocol and hurts agents' by capping the compounding before it starts. Treat the 'paper cuts' that block server creation as high-leverage problems worth disproportionate engineering investment.
