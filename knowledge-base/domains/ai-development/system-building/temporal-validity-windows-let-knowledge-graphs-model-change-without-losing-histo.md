---
id: INS-260409-1E5E
domain: ai-development
topic: system-building
title: >-
  Temporal validity windows let knowledge graphs model change without losing
  history
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - knowledge-graph
  - temporal
  - sqlite
  - triples
  - validity-windows
sources:
  - type: blog
    title: >-
      GitHub - milla-jovovich/mempalace: The highest-scoring AI memory system
      ever benchmarked. And it's free.
    url: 'https://github.com/milla-jovovich/mempalace'
date_extracted: '2026-04-09'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    MemPalace's SQLite knowledge graph adds a valid_from or valid_to window to
    every entity triple so 'Kai works on Orion' can be invalidated as of
    2026-03-01 while historical queries still return the original assignment.
  standard: >-
    MemPalace's KnowledgeGraph class (modeled on Zep's Graphiti but in SQLite
    instead of Neo4j) attaches temporal validity windows to every entity triple.
    kg.add_triple('Kai', 'works_on', 'Orion', valid_from='2025-06-01');
    kg.invalidate('Kai', 'works_on', 'Orion', ended='2026-03-01'). Now 'what is
    Kai working on?' returns nothing, but kg.query_entity('Maya',
    as_of='2026-01-20') still returns the auth-migration assignment that was
    true at that time. This is the essential design pattern for any long-lived
    agent KB that represents people, projects, or decisions: delete-on-change
    destroys history, but validity windows let truth and time coexist. Any Zuhn
    principle about a market or a person who changes over time would benefit
    from this pattern.
stance: >-
  Knowledge graphs for agents should use temporal triples with valid_from and
  valid_to fields so facts can be invalidated without being deleted.
related:
  - INS-260327-73BE
  - INS-260323-8D12
  - INS-260320-E6DD
  - INS-260402-5ACE
  - INS-260329-BE72
---
MemPalace's KnowledgeGraph class (modeled on Zep's Graphiti but in SQLite instead of Neo4j) attaches temporal validity windows to every entity triple. kg.add_triple('Kai', 'works_on', 'Orion', valid_from='2025-06-01'); kg.invalidate('Kai', 'works_on', 'Orion', ended='2026-03-01'). Now 'what is Kai working on?' returns nothing, but kg.query_entity('Maya', as_of='2026-01-20') still returns the auth-migration assignment that was true at that time. This is the essential design pattern for any long-lived agent KB that represents people, projects, or decisions: delete-on-change destroys history, but validity windows let truth and time coexist. Any Zuhn principle about a market or a person who changes over time would benefit from this pattern.
