---
id: INS-260625-73BD
domain: ai-development
topic: architecture
title: >-
  Skip RAG for internal structured data — inject curated context blocks at
  tool-invocation time
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - rag
  - context-engineering
  - agent-architecture
  - tool-use
  - context-window
sources:
  - type: youtube
    title: >-
      Why Can't Anyone Answer Questions About the Business? — Garrett Galow,
      WorkOS
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=iUWwcG-C8OU'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    WorkOS runs its internal data agent with zero RAG — just direct tool calls
    plus schema context injected at the moment each tool is called.
  standard: >-
    The default reflex for 'agent needs to know about my data' is to build a RAG
    database, but WorkOS deliberately built none: 'we're just invoking tools
    directly with just context on top.' For structured, queryable systems like
    Snowflake, the agent reads schemas itself (LLMs interpret self-descriptive
    table and column names well), and the only thing it can't infer — the org's
    idiosyncratic join paths and required status filters — is supplied as a
    finite, hand-written context block. Crucially, that block is injected
    just-in-time at tool-invocation, not preloaded, so the context window isn't
    blown out by stacking every tool's documentation up front. This collapses an
    entire retrieval-infrastructure project into a few maintained prompt
    fragments. The lesson generalizes: RAG is the answer when knowledge is
    large, unstructured, and unbounded; a curated context block is the answer
    when the missing knowledge is small, structured, and known. Reaching for RAG
    first is often over-engineering a problem that direct tool access plus a
    paragraph of join rules already solves.
stance: >-
  For querying an organization's own structured data, a hand-curated context
  block injected at the moment a tool is invoked beats building a RAG retrieval
  pipeline.
related:
  - INS-260627-FEB4
  - INS-260524-2C7C
  - INS-260626-2F2E
  - INS-260605-D710
  - INS-260605-6134
---
The default reflex for 'agent needs to know about my data' is to build a RAG database, but WorkOS deliberately built none: 'we're just invoking tools directly with just context on top.' For structured, queryable systems like Snowflake, the agent reads schemas itself (LLMs interpret self-descriptive table and column names well), and the only thing it can't infer — the org's idiosyncratic join paths and required status filters — is supplied as a finite, hand-written context block. Crucially, that block is injected just-in-time at tool-invocation, not preloaded, so the context window isn't blown out by stacking every tool's documentation up front. This collapses an entire retrieval-infrastructure project into a few maintained prompt fragments. The lesson generalizes: RAG is the answer when knowledge is large, unstructured, and unbounded; a curated context block is the answer when the missing knowledge is small, structured, and known. Reaching for RAG first is often over-engineering a problem that direct tool access plus a paragraph of join rules already solves.
