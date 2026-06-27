---
id: INS-260626-4BC2
domain: ai-development
topic: agent-patterns
title: >-
  A three-layer raw → summary → derivative → raw hierarchy makes agent retrieval
  token-efficient via progressive disclosure
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - progressive-disclosure
  - context-management
  - retrieval
  - token-efficiency
  - agent-memory
sources:
  - type: youtube
    title: >-
      Turn 10,994 Notes Into Memory - Paul Iusztin, Decoding AI & Louis-François
      Bouchard, Towards AI
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=ZRM_TfEZcIo'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Structure knowledge so the agent reads an index, then an executive summary,
    then derivatives, and only falls through to the full raw source when nothing
    above answers the query.
  standard: >-
    The system gives the agent an index.yaml entry point (a catalog of sources
    with summaries and metadata). For a query, the agent first reads the source
    'wiki page' — an expanded executive summary computed once at ingestion.
    'Sometimes the agent just looks into this, gets what it needs, and goes
    back, which is very token efficient.' If that fails, it follows links into
    wiki derivatives (concepts, entities, comparisons, notes). Only if those
    still don't satisfy the query does it read the whole raw source — the full
    article, paper, or video transcript.


    This is progressive disclosure applied to agent memory: cheap, pre-computed
    summaries sit in front of expensive raw content, so the common case costs
    few tokens and the expensive read is the rare fallback. Because executive
    summaries are generated once during ingestion rather than re-derived per
    query, the cost is amortized. Any agent-backed knowledge base benefits from
    this layering instead of dumping raw sources into context.
stance: >-
  Layering knowledge as index → executive summary → derivatives → raw source
  lets an agent answer questions while reading the minimum possible tokens.
related:
  - INS-260403-3705
  - INS-260514-23D6
  - INS-260605-DC50
  - INS-260524-D5DB
  - INS-260605-E642
  - INS-260320-E6DD
  - INS-260627-02E1
---
The system gives the agent an index.yaml entry point (a catalog of sources with summaries and metadata). For a query, the agent first reads the source 'wiki page' — an expanded executive summary computed once at ingestion. 'Sometimes the agent just looks into this, gets what it needs, and goes back, which is very token efficient.' If that fails, it follows links into wiki derivatives (concepts, entities, comparisons, notes). Only if those still don't satisfy the query does it read the whole raw source — the full article, paper, or video transcript.

This is progressive disclosure applied to agent memory: cheap, pre-computed summaries sit in front of expensive raw content, so the common case costs few tokens and the expensive read is the rare fallback. Because executive summaries are generated once during ingestion rather than re-derived per query, the cost is amortized. Any agent-backed knowledge base benefits from this layering instead of dumping raw sources into context.
