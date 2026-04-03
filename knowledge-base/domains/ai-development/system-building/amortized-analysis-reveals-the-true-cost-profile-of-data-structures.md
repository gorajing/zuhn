---
id: INS-260329-8181
domain: ai-development
topic: system-building
title: Amortized analysis reveals the true cost profile of data structures
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - big-o
  - amortized-analysis
  - performance
  - algorithms
sources:
  - type: youtube
    title: >-
      Data Structures Easy to Advanced Course - Full Tutorial from a Google
      Engineer
    author: freeCodeCamp.org
    url: 'https://www.youtube.com/watch?v=RBSGKlAvoiM'
date_extracted: '2026-03-29'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Evaluate data structures by amortized cost across operation sequences, not
    just worst-case single operations.
  standard: >-
    Dynamic arrays have O(n) worst-case for insertion (when resizing), but O(1)
    amortized because resizes are exponentially rare. Hash tables with open
    addressing show similar patterns — individual operations can be expensive
    during rehashing, but the cost spreads across all operations. This
    distinction matters enormously in practice: choosing a data structure based
    solely on worst-case complexity can lead to over-engineering (e.g., avoiding
    dynamic arrays in favor of linked lists for O(1) insertion, when amortized
    performance is identical and cache locality makes arrays faster in
    practice). The lesson extends beyond data structures — evaluating any system
    component by its worst-case behavior without considering frequency leads to
    suboptimal decisions.
stance: >-
  Worst-case Big-O analysis alone is misleading — amortized analysis over
  sequences of operations gives a more accurate picture of real-world
  performance
related:
  - INS-260329-EF14
  - INS-260329-36D9
  - INS-260329-8F86
  - INS-260329-91DD
  - INS-260329-0B55
  - INS-260329-FAE2
evidence:
  - id: INS-260329-36D9
    type: REFINES
    classified_at: '2026-04-02'
  - id: INS-260329-8F86
    type: SUPPORTS
    classified_at: '2026-04-02'
  - id: INS-260329-91DD
    type: SUPPORTS
    classified_at: '2026-04-02'
---
Dynamic arrays have O(n) worst-case for insertion (when resizing), but O(1) amortized because resizes are exponentially rare. Hash tables with open addressing show similar patterns — individual operations can be expensive during rehashing, but the cost spreads across all operations. This distinction matters enormously in practice: choosing a data structure based solely on worst-case complexity can lead to over-engineering (e.g., avoiding dynamic arrays in favor of linked lists for O(1) insertion, when amortized performance is identical and cache locality makes arrays faster in practice). The lesson extends beyond data structures — evaluating any system component by its worst-case behavior without considering frequency leads to suboptimal decisions.
