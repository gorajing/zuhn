---
id: INS-260409-51B2
domain: ai-development
topic: system-building
title: Wiki-link format creates a navigable graph without graph infrastructure
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - wiki-links
  - knowledge-graph
  - cross-references
  - obsidian
  - graph-rag
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
    Wiki-link syntax in markdown is already a graph; the agent traverses it by
    reading files.
  standard: >-
    When notes link to each other via the [[note-name]] syntax and Claude Code
    knows the format via CLAUDE.md, following a link is just another file read.
    This recovers much of what graph RAG systems give you — the ability to walk
    from one concept to related concepts — without any graph database, triple
    store, or community detection layer. The tradeoff is that the graph is local
    and depth-limited rather than globally queryable, but for most
    question-answering workloads the relevant subgraph is small and the agent
    can assemble it on the fly.
stance: >-
  Using Obsidian's wiki-link syntax to cross-reference notes produces a real
  knowledge graph that Claude Code can traverse via file reads, providing
  graph-RAG capabilities with zero graph database.
related:
  - INS-260409-0D87
  - INS-260410-19DE
  - INS-260402-2342
  - INS-260409-430B
  - INS-260323-E0B5
---
When notes link to each other via the [[note-name]] syntax and Claude Code knows the format via CLAUDE.md, following a link is just another file read. This recovers much of what graph RAG systems give you — the ability to walk from one concept to related concepts — without any graph database, triple store, or community detection layer. The tradeoff is that the graph is local and depth-limited rather than globally queryable, but for most question-answering workloads the relevant subgraph is small and the agent can assemble it on the fly.
