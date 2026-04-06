---
id: INS-260402-1D32
domain: ai-development
topic: embeddings
title: >-
  Cosine similarity thresholds for cached knowledge reuse require tiered
  acceptance logic
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - cosine-similarity
  - caching
  - threshold-design
  - human-in-the-loop
sources:
  - type: audio
    title: Code with claw
date_extracted: '2026-04-02'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Using tiered similarity thresholds (auto-accept above 0.8, offer with
    confirmation at 0.7-0.8, re-research below 0.7) balances cache hit rates
    against accuracy.
  standard: >-
    The demonstrated system used a two-tier heuristic for reusing cached
    research results: cosine similarity above 0.8 triggered automatic reuse
    (high confidence the existing result answers the new query), while scores
    between 0.7 and 0.8 presented the cached result for human confirmation
    (thumbs up/down). Below 0.7, the system initiated fresh research.


    This tiered approach acknowledges that similarity scores are probabilistic —
    a single binary threshold either wastes tokens re-researching known topics
    (threshold too high) or serves irrelevant cached results (threshold too
    low). The human-in-the-loop middle tier captures the ambiguous zone where
    semantic similarity is suggestive but not definitive. In the demo, a score
    of 0.79 for 'tech stocks in the S&P 500 namely good ones' versus an existing
    S&P 500 tech stocks report was close enough to offer but not close enough to
    auto-serve. This pattern generalizes to any system caching AI-generated
    knowledge for reuse.
stance: >-
  A single similarity threshold for knowledge reuse produces either too many
  false positives or too many cache misses — tiered thresholds with human
  confirmation solve this
related:
  - INS-260321-E8CB
  - INS-260402-5CF0
  - INS-260325-6150
  - INS-260405-7305
  - INS-260325-9C89
  - INS-260329-4842
  - INS-260329-C1A4
evidence:
  - id: INS-260329-4842
    type: TRANSFERS_TO
    classified_at: '2026-04-02'
  - id: INS-260405-7305
    type: TRANSFERS_TO
    classified_at: '2026-04-05'
---
The demonstrated system used a two-tier heuristic for reusing cached research results: cosine similarity above 0.8 triggered automatic reuse (high confidence the existing result answers the new query), while scores between 0.7 and 0.8 presented the cached result for human confirmation (thumbs up/down). Below 0.7, the system initiated fresh research.

This tiered approach acknowledges that similarity scores are probabilistic — a single binary threshold either wastes tokens re-researching known topics (threshold too high) or serves irrelevant cached results (threshold too low). The human-in-the-loop middle tier captures the ambiguous zone where semantic similarity is suggestive but not definitive. In the demo, a score of 0.79 for 'tech stocks in the S&P 500 namely good ones' versus an existing S&P 500 tech stocks report was close enough to offer but not close enough to auto-serve. This pattern generalizes to any system caching AI-generated knowledge for reuse.
