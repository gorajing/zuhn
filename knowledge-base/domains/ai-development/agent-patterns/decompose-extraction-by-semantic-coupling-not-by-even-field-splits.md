---
id: INS-260628-E265
domain: ai-development
topic: agent-patterns
title: 'Decompose extraction by semantic coupling, not by even field splits'
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - task-decomposition
  - data-extraction
  - prompt-design
  - consistency
  - agent-patterns
sources:
  - type: youtube
    title: 'Building an Agentic Platform — Ben Kus, CTO Box'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=12v5S1n1eOY'
date_extracted: '2026-06-28'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Extract 'parties' and their 'addresses' in the same grouped query — split
    them naively and you get three parties with two mismatched addresses.
  standard: >-
    When Box broke field extraction into multiple sub-queries to overcome
    attention limits, they learned quickly that naive splitting breaks
    relational consistency. If 'parties' to a contract are extracted in one
    query and their 'addresses' in another, you can end up with three parties
    and two sets of addresses that don't line up. The fix was to intelligently
    group coupled fields so the AI handles them together.


    The generalizable pattern: decomposition is necessary to keep each model
    call within its reliable attention budget, but the cut points should follow
    the data's semantic structure, not arbitrary or even-sized partitions.
    Fields that must stay mutually consistent (entities and their attributes,
    line items and their totals, parties and their roles) belong in the same
    context window. This is a concrete antidote to the failure mode of
    long-context extraction — instead of asking one model to track 100 fields
    across 100 pages, you group by coupling and run multiple targeted queries,
    then cross-check with tools, OCR, image passes, and multi-model voting.
stance: >-
  When breaking a large extraction into sub-queries, group semantically coupled
  fields together so the model preserves cross-field consistency.
related:
  - INS-260330-4ACF
  - INS-260329-8233
  - INS-260625-06B3
  - INS-260329-34EE
  - INS-260626-E803
---
When Box broke field extraction into multiple sub-queries to overcome attention limits, they learned quickly that naive splitting breaks relational consistency. If 'parties' to a contract are extracted in one query and their 'addresses' in another, you can end up with three parties and two sets of addresses that don't line up. The fix was to intelligently group coupled fields so the AI handles them together.

The generalizable pattern: decomposition is necessary to keep each model call within its reliable attention budget, but the cut points should follow the data's semantic structure, not arbitrary or even-sized partitions. Fields that must stay mutually consistent (entities and their attributes, line items and their totals, parties and their roles) belong in the same context window. This is a concrete antidote to the failure mode of long-context extraction — instead of asking one model to track 100 fields across 100 pages, you group by coupling and run multiple targeted queries, then cross-check with tools, OCR, image passes, and multi-model voting.
