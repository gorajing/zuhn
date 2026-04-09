---
id: INS-260409-430B
domain: ai-development
topic: system-building
title: >-
  Hand-curated directory structure encodes retrieval paths the LLM does not have
  to infer
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - information-architecture
  - directory-structure
  - retrieval
  - agent-patterns
  - index-files
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
    Explicit folder hierarchies pre-encode retrieval paths so the agent follows,
    rather than searches.
  standard: >-
    In the Karpathy setup, a question about AI agents flows: bolt/vault ->
    wiki/master-index.md -> wiki/ai-agents/index.md -> specific article. The
    agent does not wander, does not grep broadly, and does not need many tool
    calls because the directory itself is the retrieval algorithm. This is the
    inverse of vector RAG, which reconstructs structure at query time from
    embeddings. When the human pre-encodes structure via folders and index.md
    files, the agent pays a one-time navigation cost of O(depth) rather than an
    O(corpus) similarity search, and the path is transparent and debuggable by
    the human.
stance: >-
  A deliberate folder hierarchy with explicit index files outperforms implicit
  embedding-based retrieval because the traversal path is pre-computed by the
  human and the agent only has to follow it, eliminating wasted tool calls.
related:
  - INS-260320-EA19
  - INS-260329-61E5
  - INS-260402-28BA
  - INS-260409-7C62
  - INS-260405-214D
  - INS-260409-51B2
---
In the Karpathy setup, a question about AI agents flows: bolt/vault -> wiki/master-index.md -> wiki/ai-agents/index.md -> specific article. The agent does not wander, does not grep broadly, and does not need many tool calls because the directory itself is the retrieval algorithm. This is the inverse of vector RAG, which reconstructs structure at query time from embeddings. When the human pre-encodes structure via folders and index.md files, the agent pays a one-time navigation cost of O(depth) rather than an O(corpus) similarity search, and the path is transparent and debuggable by the human.
