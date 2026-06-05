---
id: INS-260605-B8AB
domain: ai-development
topic: system-design
title: Token passthrough is a harness design smell
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - mcp
  - confused-deputy
  - token-passthrough
  - security-architecture
  - tool-proxy
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
  one_line: 'Tool proxies should translate authority, not pass it through.'
  standard: >-
    The MCP spec explicitly forbids servers from accepting or transiting tokens
    intended for other resources. If an MCP server calls an upstream API, it may
    act as an OAuth client to that API, but the upstream token must be separate
    from the token received from the MCP client.


    This matters because many agent harnesses treat tool proxies as dumb relays.
    They are not. A tool proxy is an authority boundary and should perform token
    exchange, audience validation, logging, and policy checks. Passing user or
    agent tokens through multiple services makes the harness unable to explain
    who had authority to do what.
stance: >-
  An MCP server that forwards the client's token upstream is not just leaky
  plumbing; it creates a confused-deputy risk and should exchange for a separate
  upstream token instead.
related:
  - INS-260323-B1F5
  - INS-260410-992A
  - INS-260423-31A1
  - INS-260329-882A
  - INS-260605-2D9B
---
The MCP spec explicitly forbids servers from accepting or transiting tokens intended for other resources. If an MCP server calls an upstream API, it may act as an OAuth client to that API, but the upstream token must be separate from the token received from the MCP client.

This matters because many agent harnesses treat tool proxies as dumb relays. They are not. A tool proxy is an authority boundary and should perform token exchange, audience validation, logging, and policy checks. Passing user or agent tokens through multiple services makes the harness unable to explain who had authority to do what.
