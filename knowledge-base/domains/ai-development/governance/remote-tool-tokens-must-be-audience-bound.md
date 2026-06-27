---
id: INS-260605-3588
domain: ai-development
topic: governance
title: Remote tool tokens must be audience-bound
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - mcp
  - oauth
  - authorization
  - agent-security
  - tool-access
sources:
  - type: blog
    title: Authorization - Model Context Protocol
    url: >-
      https://modelcontextprotocol.io/specification/2025-06-18/basic/authorization
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    A remote tool token should only work for the exact MCP server it was issued
    to.
  standard: >-
    The MCP Authorization spec requires resource indicators and server-side
    validation that access tokens were issued for the intended MCP server. This
    is not ceremonial OAuth compliance; it is the boundary that prevents a token
    for one service from becoming ambient authority in another.


    For harness design, remote tools need an authority ledger: target resource,
    scopes, expiry, token audience, and validation behavior. The model should
    never be asked to remember these boundaries. The harness should make invalid
    authority states unrepresentable.
stance: >-
  Agent harnesses should require audience-bound tokens for remote tools because
  any token accepted outside its intended resource boundary creates
  cross-service escalation risk.
related:
  - INS-260605-52E4
  - INS-260627-B416
  - INS-260605-35B4
  - INS-260626-BC79
  - INS-260410-8ECF
  - INS-260626-8B56
  - INS-260626-8A80
---
The MCP Authorization spec requires resource indicators and server-side validation that access tokens were issued for the intended MCP server. This is not ceremonial OAuth compliance; it is the boundary that prevents a token for one service from becoming ambient authority in another.

For harness design, remote tools need an authority ledger: target resource, scopes, expiry, token audience, and validation behavior. The model should never be asked to remember these boundaries. The harness should make invalid authority states unrepresentable.
