---
id: INS-260626-181F
domain: ai-development
topic: agent-patterns
title: >-
  Defer tool loading with progressive discovery instead of dumping every tool
  into context
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - mcp
  - context-management
  - tool-search
  - agent-harness
  - progressive-discovery
  - token-efficiency
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
    Give the model a tool-loading tool and let it pull tools on demand —
    progressive discovery cut tool context usage dramatically in Claude Code.
  standard: >-
    A protocol like MCP only puts information across the wire; the
    client/harness is responsible for what it does with that information. The
    naive pattern everyone adopted during the early experimentation phase was to
    stuff every tool from every connected server into the context window, then
    act surprised when the context window blows up. Soria Parra names this as
    the number-one thing client/harness builders must fix.


    The fix is progressive discovery: instead of front-loading all tool
    definitions, give the model a 'tool search' or tool-loading tool. When the
    model decides it needs a capability, it looks up and loads the relevant
    tools on demand. Anthropic's API supports this, competitor APIs can do it,
    and you can also build it yourself by downloading tool definitions lazily.
    The before/after Claude Code data Soria Parra showed demonstrated a massive
    reduction in tool context usage.


    The deeper point is architectural: context is a scarce, shared budget, and
    the harness — not the protocol — owns the decision of what enters it.
    Treating tool discovery as a runtime, model-driven lookup rather than a
    static manifest is the lever that makes many-tool, many-server agents viable
    without drowning the context window.
stance: >-
  Loading all of an MCP server's tools into the context window is the wrong
  default; harnesses should defer tool loading until the model requests them.
related:
  - INS-260410-60C8
  - PRI-260411-9CB1
  - INS-260626-3ACC
  - INS-260626-78E6
  - INS-260626-2727
  - INS-260626-B983
  - INS-260627-B2C4
  - INS-260628-7862
---
A protocol like MCP only puts information across the wire; the client/harness is responsible for what it does with that information. The naive pattern everyone adopted during the early experimentation phase was to stuff every tool from every connected server into the context window, then act surprised when the context window blows up. Soria Parra names this as the number-one thing client/harness builders must fix.

The fix is progressive discovery: instead of front-loading all tool definitions, give the model a 'tool search' or tool-loading tool. When the model decides it needs a capability, it looks up and loads the relevant tools on demand. Anthropic's API supports this, competitor APIs can do it, and you can also build it yourself by downloading tool definitions lazily. The before/after Claude Code data Soria Parra showed demonstrated a massive reduction in tool context usage.

The deeper point is architectural: context is a scarce, shared budget, and the harness — not the protocol — owns the decision of what enters it. Treating tool discovery as a runtime, model-driven lookup rather than a static manifest is the lever that makes many-tool, many-server agents viable without drowning the context window.
