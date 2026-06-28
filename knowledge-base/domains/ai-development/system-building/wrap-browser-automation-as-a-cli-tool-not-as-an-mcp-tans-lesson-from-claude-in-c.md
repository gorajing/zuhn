---
id: INS-260501-4646
domain: ai-development
topic: system-building
title: >-
  Wrap browser automation as a CLI tool, not as an MCP — Tan's lesson from
  Claude-in-Chrome's failure
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - mcp-vs-cli
  - browser-automation
  - playwright
  - performance
  - tool-design
sources:
  - type: youtube
    title: How to Make Claude Code Your AI Engineering Team
    author: Y Combinator
    url: 'https://youtu.be/wkv2ifxPpF8'
date_extracted: '2026-05-01'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Claude-in-Chrome MCP took 2-3 seconds per action with crazy context bloat.
    Tan wrapped Playwright at the CLI and made it trivially fast.
  standard: >-
    Tan's structural lesson from building GStack: Claude-in-Chrome MCP was 'one
    of the worst pieces of software I've ever used' — every action required
    thinking and thinking, took 2-3 seconds even when working, often did
    nothing, and produced massive context bloat. The fix wasn't fixing the MCP;
    it was bypassing the MCP entirely by wrapping Playwright + Chromium at the
    CLI level. Result: agents can take screenshots, click, fill forms, download
    media, run regression tests, all at native CLI speed.


    The broader principle: MCP servers are useful for genuinely stateful,
    complex protocols. For straightforward tool invocations (browser, file
    system, simple APIs), a CLI wrapper is dramatically better because (1)
    predictable latency, (2) no context bloat from MCP protocol overhead, (3)
    easier to debug and version, (4) composable with shell scripts and pipes.
    The MCP-as-default reflex is wrong; CLI-first should be the default with MCP
    reserved for cases where statefulness matters.


    For builders: when adding a new agent capability, ask 'is there a CLI
    version of this?' before reaching for MCP. For Zuhn specifically: the
    existing CLI scripts (extract.ts, post-ingest.ts, search.ts, brief.ts) are
    exactly this pattern — CLI-first, with the MCP server (mcp-server.ts)
    wrapping the same scripts where stateful protocols matter. Tan's experience
    confirms the architecture choice.
stance: >-
  MCP servers add latency and context-bloat overhead that makes simple browser
  interactions painful; wrapping Playwright at the CLI level gives agents the
  same capability with dramatically better performance and predictability —
  making 'CLI-first, MCP-second' the right architectural default for tooling.
related:
  - INS-260327-2386
  - INS-260627-A842
  - INS-260605-90FB
  - INS-260410-761B
  - INS-260403-F4F6
---
Tan's structural lesson from building GStack: Claude-in-Chrome MCP was 'one of the worst pieces of software I've ever used' — every action required thinking and thinking, took 2-3 seconds even when working, often did nothing, and produced massive context bloat. The fix wasn't fixing the MCP; it was bypassing the MCP entirely by wrapping Playwright + Chromium at the CLI level. Result: agents can take screenshots, click, fill forms, download media, run regression tests, all at native CLI speed.

The broader principle: MCP servers are useful for genuinely stateful, complex protocols. For straightforward tool invocations (browser, file system, simple APIs), a CLI wrapper is dramatically better because (1) predictable latency, (2) no context bloat from MCP protocol overhead, (3) easier to debug and version, (4) composable with shell scripts and pipes. The MCP-as-default reflex is wrong; CLI-first should be the default with MCP reserved for cases where statefulness matters.

For builders: when adding a new agent capability, ask 'is there a CLI version of this?' before reaching for MCP. For Zuhn specifically: the existing CLI scripts (extract.ts, post-ingest.ts, search.ts, brief.ts) are exactly this pattern — CLI-first, with the MCP server (mcp-server.ts) wrapping the same scripts where stateful protocols matter. Tan's experience confirms the architecture choice.
