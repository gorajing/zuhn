---
id: INS-260626-2727
domain: ai-development
topic: agent-patterns
title: >-
  The 'fewer tools' constraint is a temporary stopgap that tool-search will
  reverse
actionability: inspiration
confidence: medium
shelf_life: time-sensitive
status: active
tags:
  - tool-count
  - compositional-tools
  - tool-search
  - code-mode
  - future-direction
sources:
  - type: youtube
    title: 'Scaling GitHub for your Agents — Sam Morrow, GitHub'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=0n3MKk7r60w'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    GitHub cut from 100+ tools to ~40 to fight context bloat, but its MCP lead
    expects to reverse 'many of the fewer-tools decisions' as compositional tool
    use and tool-search APIs make thousands of tools normal.
  standard: >-
    The 2025 consensus that 'more tools make worse agents' (confirmed by
    LangChain's February research and GitHub's own experience past 100 tools) is
    treated by Morrow not as a permanent law but as a workaround for missing
    infrastructure. The real culprit was not tool count per se but tools and
    their context being 'shoved directly into the context.' As that constraint
    dissolves — via Anthropic's tool-search tool API (recently landed in Claude
    Code), OpenAI's similar API, and Cloudflare's code-mode — he 'fully expects
    thousands of tools will be normal very soon' and plans to reverse many of
    the fewer-tools decisions.


    The forward-looking pattern is compositional tool use: piping tools into
    other tools and streaming data through them, bash-style, rather than dumping
    every tool definition into the prompt. The strategic takeaway for builders
    is to avoid over-investing in permanently shrinking your tool surface;
    instead, treat tool reduction as a bridge and design for a near future where
    server discovery is automatic and tool selection is autonomous, so users
    never need to know what MCP is. This is marked time-sensitive because it is
    an explicit prediction about where the ecosystem is heading.
stance: >-
  Aggressively cutting tool count is a transitional workaround that tool-search
  and code-mode APIs will undo, making thousands of tools per agent normal.
related:
  - INS-260403-EE38
  - INS-260403-8EF3
  - INS-260405-5E6B
  - INS-260330-0CAD
  - INS-260409-665F
  - INS-260605-158D
  - INS-260626-181F
  - INS-260626-B983
  - INS-260626-A5CB
  - INS-260626-7F76
---
The 2025 consensus that 'more tools make worse agents' (confirmed by LangChain's February research and GitHub's own experience past 100 tools) is treated by Morrow not as a permanent law but as a workaround for missing infrastructure. The real culprit was not tool count per se but tools and their context being 'shoved directly into the context.' As that constraint dissolves — via Anthropic's tool-search tool API (recently landed in Claude Code), OpenAI's similar API, and Cloudflare's code-mode — he 'fully expects thousands of tools will be normal very soon' and plans to reverse many of the fewer-tools decisions.

The forward-looking pattern is compositional tool use: piping tools into other tools and streaming data through them, bash-style, rather than dumping every tool definition into the prompt. The strategic takeaway for builders is to avoid over-investing in permanently shrinking your tool surface; instead, treat tool reduction as a bridge and design for a near future where server discovery is automatic and tool selection is autonomous, so users never need to know what MCP is. This is marked time-sensitive because it is an explicit prediction about where the ecosystem is heading.
