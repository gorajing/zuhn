---
id: INS-260625-FE3E
domain: ai-development
topic: agent-patterns
title: >-
  At scale, have the agent write a scraper once, not parse every page with the
  LLM
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - code-mode
  - agents
  - scraping
  - token-efficiency
  - pipelines
sources:
  - type: youtube
    title: >-
      From MCP to Scale: Pipelines That Build Themselves — Rafael Levi, Bright
      Data
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=zTZ0qunQXnM'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Don't run the LLM over 10,000 pages — have the agent inspect the structure
    once and generate a deterministic parser to run instead.
  standard: >-
    The naive way to extract structured data with an LLM is to feed every page
    through the model and ask it to parse — which for 10,000 products burns
    millions of tokens. The pattern that scales is the inverse: the agent uses
    its web tools to fetch one representative page, discovers the selectors and
    schema, and writes a deterministic scraper/parser as code. That code then
    runs over the full set with no model calls per item, and the LLM is invoked
    only to ask questions about the already-extracted JSON. The speaker measured
    roughly a million tokens saved (62%+) on a single three-page build versus
    full-HTML parsing.


    This is the scraping-specific instance of 'code-mode': the LLM's job is to
    generate the tool, not to be the tool on every invocation. The economic
    logic generalizes to any high-volume extraction or transformation task —
    classification, normalization, enrichment. Reserve model inference for the
    one-time act of authoring logic and for reasoning over compact results, and
    push the repetitive per-item work onto generated code. The model becomes a
    compiler of pipelines rather than a runtime for them.
stance: >-
  Letting an LLM parse each item at scale is the wrong design; the agent should
  explore once and emit a deterministic scraper that does the parsing.
related:
  - INS-260410-264E
  - INS-260323-2E51
  - INS-260410-A27C
  - INS-260605-25B2
  - INS-260330-3AF7
---
The naive way to extract structured data with an LLM is to feed every page through the model and ask it to parse — which for 10,000 products burns millions of tokens. The pattern that scales is the inverse: the agent uses its web tools to fetch one representative page, discovers the selectors and schema, and writes a deterministic scraper/parser as code. That code then runs over the full set with no model calls per item, and the LLM is invoked only to ask questions about the already-extracted JSON. The speaker measured roughly a million tokens saved (62%+) on a single three-page build versus full-HTML parsing.

This is the scraping-specific instance of 'code-mode': the LLM's job is to generate the tool, not to be the tool on every invocation. The economic logic generalizes to any high-volume extraction or transformation task — classification, normalization, enrichment. Reserve model inference for the one-time act of authoring logic and for reasoning over compact results, and push the repetitive per-item work onto generated code. The model becomes a compiler of pipelines rather than a runtime for them.
