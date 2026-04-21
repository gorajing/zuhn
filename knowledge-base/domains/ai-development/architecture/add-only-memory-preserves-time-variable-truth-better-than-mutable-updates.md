---
id: INS-260421-43EC
domain: ai-development
topic: architecture
title: Add-only memory preserves time-variable truth better than mutable updates
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - memory-design
  - temporal-reasoning
  - data-modeling
sources:
  - type: audio
    title: ai agents 12 ai memory meetup 2026 04 20
date_extracted: '2026-04-21'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    mem0's new algorithm replaced add/delete/update operations with single-pass
    add-only extraction; recency-weighted scoring surfaces current truth without
    losing history.
  standard: >-
    Ellen (mem0) framed the principle around her own biography: 'I used to live
    in Riyadh and now I live in San Francisco. Both of these memories are
    equally important. I cannot just delete the memory that I used to live in
    Riyadh — that fact is true. However, there are memories that have more
    weight when it comes to time.'


    In the new mem0 architecture, all facts are appended; retrieval scoring
    weights recent facts higher. This preserves historical truth (for 'how long
    have you been in SF?' type questions) while surfacing current state (for
    'where should I suggest lunch?' type questions). Contrast with the naive
    design that deletes stale facts: the system loses the ability to reason
    about change over time, and accidentally overwrites correct-but-superseded
    facts.


    For anyone designing systems that track stateful information about humans or
    agents (profiles, preferences, commitments), add-only with recency-weighting
    is now the recommended pattern. Immutability preserves auditability; weights
    handle the freshness question.
stance: >-
  For facts that change over time, add-only memory with recency-weighted
  retrieval preserves truth better than mutable update and delete operations
related:
  - INS-260421-E9FC
  - INS-260421-665D
  - INS-260325-FD14
  - INS-260409-FE00
  - INS-260409-ADD0
---
Ellen (mem0) framed the principle around her own biography: 'I used to live in Riyadh and now I live in San Francisco. Both of these memories are equally important. I cannot just delete the memory that I used to live in Riyadh — that fact is true. However, there are memories that have more weight when it comes to time.'

In the new mem0 architecture, all facts are appended; retrieval scoring weights recent facts higher. This preserves historical truth (for 'how long have you been in SF?' type questions) while surfacing current state (for 'where should I suggest lunch?' type questions). Contrast with the naive design that deletes stale facts: the system loses the ability to reason about change over time, and accidentally overwrites correct-but-superseded facts.

For anyone designing systems that track stateful information about humans or agents (profiles, preferences, commitments), add-only with recency-weighting is now the recommended pattern. Immutability preserves auditability; weights handle the freshness question.
