---
id: INS-260409-EA5A
domain: ai-development
topic: system-building
title: Staging folders separate human curation from machine compression
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - staging-area
  - compression
  - workflow
  - curation
  - kb-architecture
sources:
  - type: youtube
    title: 'Karpathy의 Obsidian RAG와 Claude Code 조합, 정말 치트키입니다'
    author: Tech Bridge
    url: 'https://youtu.be/k9r2pIYYV9k'
date_extracted: '2026-04-09'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    A RAW intake folder preserves the human's curation intent before Claude Code
    compresses it into wikis.
  standard: >-
    The RAW folder is literally a temporary staging area where articles, PDFs,
    and web clips accumulate until the human prompts Claude Code to turn a
    subset into a topical wiki. This enforces a two-stage pipeline: (1) humans
    decide what's worth remembering (ingestion), (2) Claude Code decides how to
    structure it (compression into wiki/topic/*). The separation matters because
    the human's curation act — picking this article, skipping that one — is the
    signal that guides what the KB should become. Letting the LLM ingest
    everything directly would erase that signal.
stance: >-
  Separating a RAW intake folder from compressed wiki/topic folders creates a
  necessary gap between raw material and synthesized knowledge, mirroring how
  humans actually learn from new material.
related:
  - INS-260409-2D5C
  - INS-260409-5C6B
  - INS-260409-654B
  - INS-260325-DE23
  - INS-260322-24FB
---
The RAW folder is literally a temporary staging area where articles, PDFs, and web clips accumulate until the human prompts Claude Code to turn a subset into a topical wiki. This enforces a two-stage pipeline: (1) humans decide what's worth remembering (ingestion), (2) Claude Code decides how to structure it (compression into wiki/topic/*). The separation matters because the human's curation act — picking this article, skipping that one — is the signal that guides what the KB should become. Letting the LLM ingest everything directly would erase that signal.
