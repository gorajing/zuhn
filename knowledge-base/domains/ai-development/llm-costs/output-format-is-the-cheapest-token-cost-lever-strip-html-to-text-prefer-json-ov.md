---
id: INS-260625-7935
domain: ai-development
topic: llm-costs
title: >-
  Output format is the cheapest token-cost lever: strip HTML to text, prefer
  JSON over markdown
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - token-efficiency
  - llm-costs
  - data-formats
  - context-engineering
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
    Feed the model the leanest representation that still answers the question —
    text not HTML, structured JSON not markdown.
  standard: >-
    When an agent only needs the content of a page, sending it the full HTML —
    tags, attributes, scripts — is pure token waste. The speaker's 'scrape as
    markdown' strips to visible text; better still, a pre-built API returns the
    product as JSON, which he notes runs ~1,000 tokens versus ~10,000 for the
    equivalent markdown, and the agent can answer follow-up questions against
    the JSON for ~60 tokens by executing its own script rather than re-reading
    the page.


    The lever here costs nothing and is often overlooked: before optimizing
    prompts or model choice, optimize the shape of the data you put in context.
    Each step up the structure ladder — raw HTML → cleaned text → markdown →
    typed JSON — removes noise the model would otherwise pay to read and reason
    past. Pre-structured sources (typed APIs, schema'd extracts) beat asking the
    model to impose structure on raw documents, both in cost and in reliability.
    Treat format selection as a first-class part of context engineering, not an
    afterthought.
stance: >-
  Most agentic web-token spend is wasted on structural noise; returning text
  instead of HTML and JSON instead of markdown cuts cost by an order of
  magnitude.
related:
  - INS-260514-AC1D
  - INS-260605-9FCF
  - INS-260408-C572
  - INS-260403-BB23
  - INS-260327-30E4
---
When an agent only needs the content of a page, sending it the full HTML — tags, attributes, scripts — is pure token waste. The speaker's 'scrape as markdown' strips to visible text; better still, a pre-built API returns the product as JSON, which he notes runs ~1,000 tokens versus ~10,000 for the equivalent markdown, and the agent can answer follow-up questions against the JSON for ~60 tokens by executing its own script rather than re-reading the page.

The lever here costs nothing and is often overlooked: before optimizing prompts or model choice, optimize the shape of the data you put in context. Each step up the structure ladder — raw HTML → cleaned text → markdown → typed JSON — removes noise the model would otherwise pay to read and reason past. Pre-structured sources (typed APIs, schema'd extracts) beat asking the model to impose structure on raw documents, both in cost and in reliability. Treat format selection as a first-class part of context engineering, not an afterthought.
