---
id: INS-260409-2D5C
domain: ai-development
topic: system-building
title: >-
  Raw sources must stay immutable while the wiki layer is owned entirely by the
  LLM
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - architecture
  - three-layer
  - immutability
  - provenance
  - schema
sources:
  - type: youtube
    title: 'Karpathy''s LLM Wiki: What It Means & How to Build One'
    author: Onchain AI Garage
    url: 'https://youtu.be/zVEb19AwkqM'
date_extracted: '2026-04-09'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Raw sources are read-only truth; the wiki is LLM-writable derivative; the
    schema is human-LLM co-evolved style guide.
  standard: >-
    The architecture has three layers with different ownership: (1) raw sources
    — articles, papers, tweets, transcripts — immutable, the source of truth,
    the LLM reads but never touches them; (2) the wiki itself — a directory of
    markdown files that the LLM owns entirely, including summaries, entity
    pages, concept pages, and comparisons, which the LLM creates, updates on
    ingest, and keeps cross-referenced; (3) the schema — a CLAUDE.md-style
    config file that tells the LLM how the wiki is organized, what conventions
    to follow, and what workflows to run, co-evolved by human and LLM over time.
    The useful metaphor: the wiki is the codebase, Obsidian is the IDE, the LLM
    is the programmer, the schema is the style guide. Mixing these layers —
    letting the LLM rewrite raw sources, or burying the schema inside wiki pages
    — breaks both provenance and the LLM's ability to freely regenerate the
    middle layer.
stance: >-
  A working LLM-wiki requires a strict three-layer separation — immutable raw
  sources, LLM-owned wiki, and a human-maintained schema — because blurring
  these layers breaks either provenance or the LLM's ability to rewrite freely.
related:
  - INS-260320-0F7C
  - INS-260409-5C6B
  - INS-260409-654B
  - INS-260410-4F43
  - INS-260409-BA55
  - INS-260409-EA5A
---
The architecture has three layers with different ownership: (1) raw sources — articles, papers, tweets, transcripts — immutable, the source of truth, the LLM reads but never touches them; (2) the wiki itself — a directory of markdown files that the LLM owns entirely, including summaries, entity pages, concept pages, and comparisons, which the LLM creates, updates on ingest, and keeps cross-referenced; (3) the schema — a CLAUDE.md-style config file that tells the LLM how the wiki is organized, what conventions to follow, and what workflows to run, co-evolved by human and LLM over time. The useful metaphor: the wiki is the codebase, Obsidian is the IDE, the LLM is the programmer, the schema is the style guide. Mixing these layers — letting the LLM rewrite raw sources, or burying the schema inside wiki pages — breaks both provenance and the LLM's ability to freely regenerate the middle layer.
