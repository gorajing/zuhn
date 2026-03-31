---
id: INS-260329-EF14
domain: ai-development
topic: system-building
title: >-
  Amortized analysis reveals that worst-case thinking hides the true cost of
  operations
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - complexity-analysis
  - performance
  - counter-intuitive
  - amortized-analysis
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
    Dynamic array append appears O(n) in worst case due to resizing, but
    amortized analysis shows it's O(1) because the expensive resizing happens so
    rarely that its cost spreads across all previous cheap appends.
  standard: >-
    Big-O notation focuses on worst-case scenarios, which is valuable for
    guarantees but can be misleading about practical performance. The course
    highlights a striking example: appending to a dynamic array occasionally
    requires copying all n elements into a new, doubled array — an O(n)
    operation. Yet append is listed as O(1). The resolution is amortized
    analysis: because the array doubles in size each time it resizes, each
    element is copied at most O(log n) times total, and the cost of each resize
    is 'paid for' by the many cheap O(1) appends that preceded it. This pattern
    — rare expensive operations amortized over many cheap ones — appears
    throughout computing. Union-find with path compression achieves amortized
    near-constant time through a similar principle: occasional expensive path
    traversals permanently flatten the tree structure, making all future
    operations cheaper. The insight generalizes beyond data structures: systems
    that invest in occasional expensive reorganizations (database vacuuming,
    index rebuilding, cache warming) to make the common case fast are applying
    the same amortized thinking. Worst-case analysis alone would reject these
    designs as too expensive.
stance: >-
  Amortized analysis — averaging cost over a sequence of operations rather than
  examining worst cases individually — reveals that some seemingly expensive
  operations like dynamic array resizing are actually constant-time in practice.
related:
  - INS-260329-A171
  - INS-260329-425B
  - INS-260329-8181
  - INS-260329-0B55
  - INS-260330-F5A1
---
Big-O notation focuses on worst-case scenarios, which is valuable for guarantees but can be misleading about practical performance. The course highlights a striking example: appending to a dynamic array occasionally requires copying all n elements into a new, doubled array — an O(n) operation. Yet append is listed as O(1). The resolution is amortized analysis: because the array doubles in size each time it resizes, each element is copied at most O(log n) times total, and the cost of each resize is 'paid for' by the many cheap O(1) appends that preceded it. This pattern — rare expensive operations amortized over many cheap ones — appears throughout computing. Union-find with path compression achieves amortized near-constant time through a similar principle: occasional expensive path traversals permanently flatten the tree structure, making all future operations cheaper. The insight generalizes beyond data structures: systems that invest in occasional expensive reorganizations (database vacuuming, index rebuilding, cache warming) to make the common case fast are applying the same amortized thinking. Worst-case analysis alone would reject these designs as too expensive.
