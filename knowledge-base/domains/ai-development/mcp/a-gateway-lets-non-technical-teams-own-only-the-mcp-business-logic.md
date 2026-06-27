---
id: INS-260626-C623
domain: ai-development
topic: mcp
title: A gateway lets non-technical teams own only the MCP business logic
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - mcp
  - gateway
  - developer-experience
  - separation-of-concerns
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
    A gateway absorbs the five cross-cutting concerns (auth, authz,
    observability, secure connectivity, hosting) so each new MCP server only
    owns its business logic.
  standard: >-
    Sampath defines a gateway as a middleware layer sitting between many MCP
    servers (potentially hundreds) and any MCP client. Its job is to provide
    authorization, authentication, observability, secure client-to-internal
    connectivity, and easy hosting/deployment. The payoff is a clean separation
    of concerns: a new MCP server inherits all five capabilities for free and
    its authors only need to encode their domain logic.


    The load-bearing consequence is organizational, not just technical. A legal
    team that wants a contract-review MCP can build it themselves—they reason
    only about redlines and escalation paths, not about who can access the
    server, how often, whether it's scalable, or how new agents onboard. Because
    the gateway exposes a CLI that coding agents understand, the team's agent
    (e.g. Claude Code) can scaffold the server and wire it into the gateway's
    five components automatically. This is what makes 'every team builds their
    own MCP' realistic rather than aspirational: the cross-cutting concerns that
    would otherwise force every team back to a central engineering group are
    amortized into one-time gateway infrastructure.
stance: >-
  Putting auth, access control, observability, secure connectivity, and hosting
  in a shared gateway means a team building a new MCP server only has to define
  its business logic.
related:
  - INS-260605-98BD
  - INS-260605-B794
  - INS-260627-3251
  - INS-260626-8D48
  - INS-260626-6F00
---
Sampath defines a gateway as a middleware layer sitting between many MCP servers (potentially hundreds) and any MCP client. Its job is to provide authorization, authentication, observability, secure client-to-internal connectivity, and easy hosting/deployment. The payoff is a clean separation of concerns: a new MCP server inherits all five capabilities for free and its authors only need to encode their domain logic.

The load-bearing consequence is organizational, not just technical. A legal team that wants a contract-review MCP can build it themselves—they reason only about redlines and escalation paths, not about who can access the server, how often, whether it's scalable, or how new agents onboard. Because the gateway exposes a CLI that coding agents understand, the team's agent (e.g. Claude Code) can scaffold the server and wire it into the gateway's five components automatically. This is what makes 'every team builds their own MCP' realistic rather than aspirational: the cross-cutting concerns that would otherwise force every team back to a central engineering group are amortized into one-time gateway infrastructure.
