---
id: INS-260624-F048
domain: ai-development
topic: agent-patterns
title: Long context windows still need structured context managers
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - context-management
  - long-context
  - agent-harness
  - indexing
sources:
  - type: audio
    title: Stanford Hospital at 300 Pasteur Drive
date_extracted: '2026-06-24'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: A million-token window is not a substitute for a context manager.
  standard: >-
    In Q&A, the speaker emphasized that longer context is useful but bounded by
    cost and training difficulty. The stronger approach is to index structure
    and retrieve context through the harness: file systems, code structure, call
    graphs, task history, and dependency relationships.


    The implication for coding and enterprise agents is that context management
    should preserve useful structure rather than dump raw logs. Long context
    increases capacity; the harness still decides what is relevant, current, and
    worth injecting.
stance: >-
  Large context windows reduce immediate truncation pressure but do not solve
  relevance, cost, structure, or invalidation, so harnesses still need explicit
  context managers.
related:
  - INS-260320-CE36
  - INS-260625-05FF
  - INS-260627-0691
  - INS-260605-91A9
  - INS-260625-5045
---
In Q&A, the speaker emphasized that longer context is useful but bounded by cost and training difficulty. The stronger approach is to index structure and retrieve context through the harness: file systems, code structure, call graphs, task history, and dependency relationships.

The implication for coding and enterprise agents is that context management should preserve useful structure rather than dump raw logs. Long context increases capacity; the harness still decides what is relevant, current, and worth injecting.
