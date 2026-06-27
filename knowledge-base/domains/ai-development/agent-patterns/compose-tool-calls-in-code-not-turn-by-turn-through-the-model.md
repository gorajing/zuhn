---
id: INS-260626-8116
domain: ai-development
topic: agent-patterns
title: 'Compose tool calls in code, not turn-by-turn through the model'
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - mcp
  - programmatic-tool-calling
  - code-mode
  - orchestration
  - structured-output
  - latency
sources:
  - type: youtube
    title: 'The Future of MCP — David Soria Parra, Anthropic'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=v3Fr2JR47KA'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Give the model a REPL/execution environment (V8 isolate, Lua, etc.) and let
    it write code that chains tools, instead of call-result-call-result
    orchestration that burns inference and latency.
  standard: >-
    The default agent loop has the model call a tool, read the result, reason,
    call another tool, read that result, and so on. Every hop through that chain
    consumes inference and is latency-sensitive — yet most of the orchestration
    logic could be expressed far more efficiently as a script. Soria Parra calls
    the fix 'programmatic tool calling' (a.k.a. 'code mode'): provide the model
    an execution environment such as a V8 isolate or a Lua interpreter, and have
    it write code that composes the tools, then execute that code.


    MCP's structured output primitive is what makes this clean — it declares the
    return type of a tool, so the model has type information to compose calls
    reliably (e.g., call once and filter the returned JSON rather than making
    two round-trip calls). Where structured output is unavailable, you can still
    bolt it on by asking a cheap model to coerce the result into an expected
    type. Either way, the model ends up with typed values it can wire together
    in code.


    This can live on the client side or the server side. The Cloudflare MCP
    server is cited as an example of a server that, instead of exposing many
    discrete tools, exposes an execution environment and lets the model
    orchestrate within it — cutting token usage and latency while gaining
    compositional power. Soria Parra argues this technique is badly underused
    and is a key place harnesses can improve.
stance: >-
  Having the model write a script that composes tool calls in an execution
  environment beats orchestrating tools one inference at a time.
related:
  - INS-260605-05F4
  - INS-260626-15F3
  - INS-260626-2F2E
  - INS-260626-AC8E
  - INS-260627-8B10
  - INS-260627-37CC
  - INS-260605-0C88
---
The default agent loop has the model call a tool, read the result, reason, call another tool, read that result, and so on. Every hop through that chain consumes inference and is latency-sensitive — yet most of the orchestration logic could be expressed far more efficiently as a script. Soria Parra calls the fix 'programmatic tool calling' (a.k.a. 'code mode'): provide the model an execution environment such as a V8 isolate or a Lua interpreter, and have it write code that composes the tools, then execute that code.

MCP's structured output primitive is what makes this clean — it declares the return type of a tool, so the model has type information to compose calls reliably (e.g., call once and filter the returned JSON rather than making two round-trip calls). Where structured output is unavailable, you can still bolt it on by asking a cheap model to coerce the result into an expected type. Either way, the model ends up with typed values it can wire together in code.

This can live on the client side or the server side. The Cloudflare MCP server is cited as an example of a server that, instead of exposing many discrete tools, exposes an execution environment and lets the model orchestrate within it — cutting token usage and latency while gaining compositional power. Soria Parra argues this technique is badly underused and is a key place harnesses can improve.
