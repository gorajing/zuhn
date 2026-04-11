---
id: INS-260410-4F43
domain: ai-development
topic: platform-dynamics
title: >-
  Open-sourcing a packaging format is a bid for cross-application
  standardization
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - open-source
  - standards
  - ecosystem
  - mcp
  - platform-strategy
sources:
  - type: blog
    title: >-
      Claude Desktop Extensions: One-click MCP server installation for Claude
      Desktop
    url: 'https://www.anthropic.com/engineering/desktop-extensions'
date_extracted: '2026-04-10'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Anthropic open-sourced the full MCPB specification, toolchain, and schemas
    so that the format can become a cross-application standard rather than a
    Claude-only feature.
  standard: >-
    Anthropic could have kept .mcpb as a proprietary Claude Desktop feature.
    Instead they published the spec, packaging CLI, validation tools, reference
    implementation, and TypeScript schemas under an open license — explicitly
    inviting other AI desktop apps to adopt it.


    The strategic logic: if .mcpb becomes the de facto format, every MCP server
    author packages for it, every competing app implements it, and Anthropic
    gets standardization benefits without lock-in costs. This mirrors how Docker
    won containers and how VS Code won the editor extension ecosystem — the one
    who defines the format and ships the best reference tooling captures the
    gravity.


    The versioning as 0.1 is also deliberate: it signals the spec is open to
    community evolution rather than frozen as a fait accompli. A company that
    already controls the dominant implementation can afford to share governance
    because the network effects accrue to whoever has the most extensions
    regardless of who owns the spec.
stance: >-
  Open-sourcing a packaging spec while shipping the reference implementation is
  the dominant strategy for establishing cross-app standards.
related:
  - INS-260320-2DDE
  - INS-260320-0063
  - PRI-260320-467A
  - INS-260329-693E
  - INS-260405-B76E
  - INS-260409-2D5C
  - INS-260410-49D7
  - INS-260410-ED4D
---
Anthropic could have kept .mcpb as a proprietary Claude Desktop feature. Instead they published the spec, packaging CLI, validation tools, reference implementation, and TypeScript schemas under an open license — explicitly inviting other AI desktop apps to adopt it.

The strategic logic: if .mcpb becomes the de facto format, every MCP server author packages for it, every competing app implements it, and Anthropic gets standardization benefits without lock-in costs. This mirrors how Docker won containers and how VS Code won the editor extension ecosystem — the one who defines the format and ships the best reference tooling captures the gravity.

The versioning as 0.1 is also deliberate: it signals the spec is open to community evolution rather than frozen as a fait accompli. A company that already controls the dominant implementation can afford to share governance because the network effects accrue to whoever has the most extensions regardless of who owns the spec.
