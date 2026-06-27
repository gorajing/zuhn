---
id: INS-260626-5D7C
domain: ai-development
topic: mcp
title: >-
  Code mode: give agents one 'write code' tool against a typed SDK instead of
  many tool calls
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - code-mode
  - mcp
  - typescript
  - typed-sdk
  - tool-calling
  - context-efficiency
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
    Generate a typed SDK from your API and expose a single 'code' tool the model
    writes against — Cloudflare fit an entire API into ~1,000 tokens this way.
  standard: >-
    Instead of N individual tool calls, expose one tool — 'code' — and let the
    model generate code against a typed SDK auto-generated from your OpenAPI
    spec. TypeScript types are an unusually concise representation of inputs and
    outputs that models can reason over, so a few type definitions replace
    thousands of tokens of tool schemas: Cloudflare's 'Code Mode' gave agents an
    entire API in roughly a thousand tokens. The deeper argument is that code
    has far more degrees of freedom than a single tool call — loops,
    composition, conditionals, chaining endpoints — so as models get better at
    writing code, a single code tool dominates a fixed menu of tool calls. You
    also inherit improvements for free: better models and a better OpenAPI spec
    (treated as the source of truth) both improve agent capability with no
    tool-by-tool rework. For any large API, generating a typed SDK and exposing
    code-generation against it is the recommended pattern over enumerating
    endpoints as tools.
stance: >-
  Letting the model write code against a typed SDK beats discrete per-endpoint
  tool calls for exposing large APIs to agents.
related:
  - INS-260323-A5EC
  - INS-260410-2F8D
  - INS-260410-264E
  - INS-260501-F0E5
  - INS-260625-2D05
  - INS-260625-E1CB
  - INS-260626-A5CB
  - INS-260410-699C
  - INS-260626-AC8E
---
Instead of N individual tool calls, expose one tool — 'code' — and let the model generate code against a typed SDK auto-generated from your OpenAPI spec. TypeScript types are an unusually concise representation of inputs and outputs that models can reason over, so a few type definitions replace thousands of tokens of tool schemas: Cloudflare's 'Code Mode' gave agents an entire API in roughly a thousand tokens. The deeper argument is that code has far more degrees of freedom than a single tool call — loops, composition, conditionals, chaining endpoints — so as models get better at writing code, a single code tool dominates a fixed menu of tool calls. You also inherit improvements for free: better models and a better OpenAPI spec (treated as the source of truth) both improve agent capability with no tool-by-tool rework. For any large API, generating a typed SDK and exposing code-generation against it is the recommended pattern over enumerating endpoints as tools.
