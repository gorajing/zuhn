---
id: INS-260410-60C8
domain: ai-development
topic: agent-patterns
title: Load tools on-demand instead of stuffing definitions into context upfront
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - tool-use
  - context-window
  - mcp
  - agent-architecture
sources:
  - type: blog
    title: Introducing advanced tool use on the Claude Developer Platform
    url: 'https://www.anthropic.com/engineering/advanced-tool-use'
date_extracted: '2026-04-10'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Preloading every tool definition burns context before work begins;
    discoverable tools preserve the window for actual reasoning.
  standard: >-
    Anthropic measured 58 tools across five MCP servers consuming ~55K tokens
    before any conversation starts, and internally saw 134K tokens of tool
    definitions before optimization. The Tool Search Tool inverts this: only a
    tiny search tool loads upfront (~500 tokens), and Claude fetches 3-5
    relevant definitions on-demand (~3K tokens), an 85% reduction.


    The accuracy gains are as important as the token savings. On MCP
    evaluations, Opus 4 jumped from 49% to 74% and Opus 4.5 from 79.5% to 88.1%
    with Tool Search enabled. The mechanism is simple: fewer tools in context
    means less confusion between similarly named options like
    notification-send-user vs notification-send-channel.


    The design principle generalizes beyond this specific API. Any agent
    architecture that assumes 'all capabilities live in the prompt' will hit a
    wall as tool libraries grow. Treat tool discovery as a first-class retrieval
    problem, not a static manifest.
stance: >-
  Agents scale to thousands of tools only when tool definitions are discovered
  dynamically rather than preloaded.
related:
  - INS-260320-A4BF
  - INS-260327-F625
  - INS-260410-D250
  - INS-260410-095B
  - INS-260405-C1E4
---
Anthropic measured 58 tools across five MCP servers consuming ~55K tokens before any conversation starts, and internally saw 134K tokens of tool definitions before optimization. The Tool Search Tool inverts this: only a tiny search tool loads upfront (~500 tokens), and Claude fetches 3-5 relevant definitions on-demand (~3K tokens), an 85% reduction.

The accuracy gains are as important as the token savings. On MCP evaluations, Opus 4 jumped from 49% to 74% and Opus 4.5 from 79.5% to 88.1% with Tool Search enabled. The mechanism is simple: fewer tools in context means less confusion between similarly named options like notification-send-user vs notification-send-channel.

The design principle generalizes beyond this specific API. Any agent architecture that assumes 'all capabilities live in the prompt' will hit a wall as tool libraries grow. Treat tool discovery as a first-class retrieval problem, not a static manifest.
