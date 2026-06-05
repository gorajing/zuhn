---
id: INS-260605-1A50
domain: ai-development
topic: agent-patterns
title: Download debugging UIs as file systems instead of building MCP servers
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - file-systems
  - mcp
  - claude-code
  - agent-context
  - debugging
sources:
  - type: youtube
    title: 'Fighting AI with AI — Lawrence Jones, Incident'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=L2r6vLlLgs8'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Export your AI system's traces, prompts, and UI state as a self-documenting
    file system and drop it into a sandboxed Claude Code, rather than putting an
    MCP layer on top.
  standard: >-
    incident.io's biggest unlock was converting the UIs they built to debug
    their AI (traces, prompt inputs, interaction hierarchies) into downloadable
    file systems. They dump a single bad interaction into a sandboxed Claude
    Code session, point the agent at it, and ask what went wrong and where in
    the code base to fix it — the agent can grep through everything because the
    export is self-documenting and the code base is loaded in the same session.
    Even rich visual traces translate cleanly to ASCII/text files that an LLM
    consumes well.


    Jones is explicit that they could have built an MCP server or human-style
    agent-uses-UI tooling on top of this data, but it 'wouldn't have been half
    as effective.' Coding agents are exceptionally good at navigating file
    systems with standard tools (the insight Anthropic surfaced with Claude
    Code). The ability to bulk-download all relevant information so the agent
    can grep for details beats interactive, query-at-a-time access. Default to
    file-system exports for agent debugging context before reaching for MCP.
stance: >-
  Translating debugging UIs into bulk-downloadable file systems is a more
  effective agent context than wrapping those UIs in an MCP server.
related:
  - INS-260409-156A
  - INS-260410-D04D
  - INS-260605-9FCF
  - INS-260605-726C
  - INS-260605-C0BF
  - INS-260605-1C30
  - INS-260605-2ECD
  - INS-260605-4B12
---
incident.io's biggest unlock was converting the UIs they built to debug their AI (traces, prompt inputs, interaction hierarchies) into downloadable file systems. They dump a single bad interaction into a sandboxed Claude Code session, point the agent at it, and ask what went wrong and where in the code base to fix it — the agent can grep through everything because the export is self-documenting and the code base is loaded in the same session. Even rich visual traces translate cleanly to ASCII/text files that an LLM consumes well.

Jones is explicit that they could have built an MCP server or human-style agent-uses-UI tooling on top of this data, but it 'wouldn't have been half as effective.' Coding agents are exceptionally good at navigating file systems with standard tools (the insight Anthropic surfaced with Claude Code). The ability to bulk-download all relevant information so the agent can grep for details beats interactive, query-at-a-time access. Default to file-system exports for agent debugging context before reaching for MCP.
