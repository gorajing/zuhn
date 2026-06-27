---
id: INS-260626-A5CB
domain: ai-development
topic: mcp
title: 'Expose a wide API surface as search + execute, not one tool per endpoint'
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - mcp
  - api-design
  - token-efficiency
  - tool-design
  - scaling
sources:
  - type: youtube
    title: 'Code Mode: Let the Code do the Talking - Sunil Pai, Cloudflare'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=8txf05vVVl4'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Cloudflare turned 2,600 API endpoints (1.2M tokens if exposed as tools) into
    two tools — search and execute, both taking code as input — for a ~99.9%
    token reduction to ~1,000 tokens.
  standard: >-
    Cloudflare's API surface is about 2,600 endpoints. Exposing one MCP tool per
    endpoint would cost roughly 1.2 million tokens on the very first call —
    there is simply no way to build an MCP server for the entire surface that
    way. Matt Carey's solution was to expose only two tool calls, both of which
    accept a string of code as input: 'search,' whose input is the full OpenAPI
    JSON spec, and 'execute,' which returns callable functions for whatever
    search surfaced.


    This reduced the 1.2–1.5 million token problem to roughly 1,000 tokens —
    about a 99.9% reduction. A real-world prompt like 'we're being DDoS'd, find
    every offending IP and block them' — which would otherwise be ~8 sequential
    API round trips — becomes a single generated code string run immediately
    next to the API.


    The design lesson for anyone building MCP servers or agent integrations over
    large APIs: don't enumerate the surface as static tools. Make the surface
    searchable and let the agent generate code against the subset it discovers.
    Tool count is a context-budget liability; searchable code execution is the
    escape hatch.
stance: >-
  A two-tool 'search + execute' pair over a code sandbox scales to thousands of
  endpoints where per-endpoint MCP tools are impossible.
related:
  - INS-260320-CE36
  - INS-260320-9FD5
  - INS-260605-6A32
  - INS-260605-9F7A
  - INS-260625-2D05
  - INS-260625-E1CB
  - INS-260626-2727
  - INS-260626-5D7C
---
Cloudflare's API surface is about 2,600 endpoints. Exposing one MCP tool per endpoint would cost roughly 1.2 million tokens on the very first call — there is simply no way to build an MCP server for the entire surface that way. Matt Carey's solution was to expose only two tool calls, both of which accept a string of code as input: 'search,' whose input is the full OpenAPI JSON spec, and 'execute,' which returns callable functions for whatever search surfaced.

This reduced the 1.2–1.5 million token problem to roughly 1,000 tokens — about a 99.9% reduction. A real-world prompt like 'we're being DDoS'd, find every offending IP and block them' — which would otherwise be ~8 sequential API round trips — becomes a single generated code string run immediately next to the API.

The design lesson for anyone building MCP servers or agent integrations over large APIs: don't enumerate the surface as static tools. Make the surface searchable and let the agent generate code against the subset it discovers. Tool count is a context-budget liability; searchable code execution is the escape hatch.
