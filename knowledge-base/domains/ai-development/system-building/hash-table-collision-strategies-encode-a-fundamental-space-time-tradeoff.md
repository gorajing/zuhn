---
id: INS-260329-F886
domain: ai-development
topic: system-building
title: Hash table collision strategies encode a fundamental space-time tradeoff
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - hash-tables
  - space-time-tradeoff
  - cache-locality
  - system-design
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
    Open addressing trades deletion complexity for cache-friendly memory layout;
    separate chaining trades memory locality for operational simplicity.
  standard: >-
    Open addressing stores everything in a contiguous array, giving excellent
    cache performance for lookups but making deletions complex (requiring
    tombstones or Robin Hood hashing). Separate chaining uses linked lists per
    bucket, making insertion and deletion trivial but sacrificing cache
    locality. This tradeoff — contiguous memory with complex state management
    vs. pointer-based flexibility with cache misses — recurs throughout systems
    design: arrays vs. linked structures, column stores vs. row stores, embedded
    vs. referenced documents. Understanding this as a fundamental axis of design
    (not just a hash table implementation detail) helps make faster
    architectural decisions. In modern hardware where cache misses dominate, the
    bias should generally favor contiguous layouts unless deletion/modification
    frequency is very high.
stance: >-
  The choice between open addressing and separate chaining in hash tables
  reflects a universal engineering tradeoff between memory locality and
  operational flexibility
related:
  - INS-260329-818A
  - PRI-260403-9E80
  - INS-260325-6150
  - INS-260329-7255
  - INS-260329-422F
evidence:
  - id: INS-260329-818A
    type: TRANSFERS_TO
    classified_at: '2026-04-02'
  - id: INS-260329-CC79
    type: TRANSFERS_TO
    classified_at: '2026-04-02'
---
Open addressing stores everything in a contiguous array, giving excellent cache performance for lookups but making deletions complex (requiring tombstones or Robin Hood hashing). Separate chaining uses linked lists per bucket, making insertion and deletion trivial but sacrificing cache locality. This tradeoff — contiguous memory with complex state management vs. pointer-based flexibility with cache misses — recurs throughout systems design: arrays vs. linked structures, column stores vs. row stores, embedded vs. referenced documents. Understanding this as a fundamental axis of design (not just a hash table implementation detail) helps make faster architectural decisions. In modern hardware where cache misses dominate, the bias should generally favor contiguous layouts unless deletion/modification frequency is very high.
