---
id: INS-260626-B983
domain: ai-development
topic: mcp
title: >-
  Exposing a full API as MCP tools explodes the context window — the bottleneck
  is context, not the protocol
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - mcp
  - context-window
  - tool-calling
  - api-design
  - scaling
sources:
  - type: youtube
    title: MCP = Mega Context Problem - Matt Carey
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=YBYUvGOuotE'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Naively converting a large API into MCP tools annihilates the context
    window, so the fix is progressive tool loading — not abandoning MCP.
  standard: >-
    Cloudflare's OpenAPI spec is ~2.3M tokens, which compiles to ~1.1M tokens of
    tool definitions across ~2,600 endpoints — more than even the largest
    foundation models can hold, before a single tool is called. The common
    workarounds (splitting into 16 product-specific MCP servers, forcing users
    to pick the right one) trade context bloat for incomplete coverage and
    selection friction: a product suite might expose 6 tools while its API has
    30 endpoints. Carey's key reframing is that this is not an MCP failure — MCP
    is just a protocol, and CLIs, tool-search, and code mode can all be exposed
    over it. The actual mistake is loading all capabilities into context at
    once. The design principle is progressive discovery: surface only the tools
    relevant to the current request rather than the full catalog. Treat any
    'expose the whole API as tools' plan as a context-budget red flag from the
    start.
stance: >-
  Dumping an entire API surface into an agent as MCP tools is an unworkable
  anti-pattern, but MCP itself is not the problem.
related:
  - INS-260403-5BD6
  - INS-260403-2774
  - INS-260410-60C8
  - INS-260505-347C
  - INS-260624-F048
  - INS-260626-2727
  - INS-260626-181F
  - INS-260626-7F76
  - INS-260325-EE14
---
Cloudflare's OpenAPI spec is ~2.3M tokens, which compiles to ~1.1M tokens of tool definitions across ~2,600 endpoints — more than even the largest foundation models can hold, before a single tool is called. The common workarounds (splitting into 16 product-specific MCP servers, forcing users to pick the right one) trade context bloat for incomplete coverage and selection friction: a product suite might expose 6 tools while its API has 30 endpoints. Carey's key reframing is that this is not an MCP failure — MCP is just a protocol, and CLIs, tool-search, and code mode can all be exposed over it. The actual mistake is loading all capabilities into context at once. The design principle is progressive discovery: surface only the tools relevant to the current request rather than the full catalog. Treat any 'expose the whole API as tools' plan as a context-budget red flag from the start.
