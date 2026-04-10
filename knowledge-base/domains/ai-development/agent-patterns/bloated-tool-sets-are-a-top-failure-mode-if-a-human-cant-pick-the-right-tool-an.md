---
id: INS-260410-9F17
domain: ai-development
topic: agent-patterns
title: >-
  Bloated tool sets are a top failure mode — if a human can't pick the right
  tool, an agent can't either
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - tool-design
  - agent-tools
  - context-engineering
sources:
  - type: blog
    title: Effective context engineering for AI agents
    url: >-
      https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents
date_extracted: '2026-04-10'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    If a human engineer can't definitively say which tool to use in a given
    situation, the agent can't be expected to do better.
  standard: >-
    One of the most common failure modes Anthropic sees is bloated tool sets
    that cover too much functionality or create ambiguous decision points about
    which tool to invoke. The litmus test is human disambiguation: if a
    competent engineer can't decisively pick the right tool, the agent will
    hallucinate or thrash. The fix isn't better prompting — it's curating a
    minimal viable set of tools that are self-contained, robust to error, with
    descriptive unambiguous parameters and minimal functional overlap. This also
    pays dividends for context maintenance, since fewer tools means cleaner
    traces and easier pruning over long interactions.
stance: >-
  When tool functionality overlaps or decision points are ambiguous, agents fail
  predictably — and the fix is curating a minimal viable tool set, not better
  prompting.
related:
  - INS-260321-4178
  - INS-260327-005D
  - INS-260330-6D43
  - INS-260405-CC9D
  - INS-260327-1FA1
  - PRI-260406-4B8E
  - INS-260329-F51D
  - INS-260403-7FFA
---
One of the most common failure modes Anthropic sees is bloated tool sets that cover too much functionality or create ambiguous decision points about which tool to invoke. The litmus test is human disambiguation: if a competent engineer can't decisively pick the right tool, the agent will hallucinate or thrash. The fix isn't better prompting — it's curating a minimal viable set of tools that are self-contained, robust to error, with descriptive unambiguous parameters and minimal functional overlap. This also pays dividends for context maintenance, since fewer tools means cleaner traces and easier pruning over long interactions.
