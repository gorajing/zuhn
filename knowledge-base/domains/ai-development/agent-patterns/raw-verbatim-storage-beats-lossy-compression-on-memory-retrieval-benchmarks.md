---
id: INS-260409-6560
domain: ai-development
topic: agent-patterns
title: Raw verbatim storage beats lossy compression on memory retrieval benchmarks
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - compression
  - memory
  - benchmarks
  - longmemeval
  - verbatim-storage
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
    MemPalace's 96.6% LongMemEval R@5 comes from raw verbatim ChromaDB storage;
    their own AAAK lossy compression scores only 84.2% — a 12.4 point regression
    that inverts the expected efficiency-quality trade-off at small scales.
  standard: >-
    MemPalace ran LongMemEval on 500 questions in both raw verbatim mode and
    AAAK lossy compression mode. Raw verbatim scored 96.6% R@5 (the highest
    published result requiring no API calls); AAAK scored 84.2% — a 12.4 point
    regression. This inverts the naive assumption that smart compression + smart
    retrieval beats dumb storage + smart retrieval. The explanation: at small
    scales, compression overhead (entity codes, structural markers, decoded
    lookups) costs more signal than it saves, and lossy schemes permanently
    discard information that retrieval might have surfaced. The maintainers were
    honest enough to publish the regression and fold the result into their April
    2026 retraction. Useful warning for any KB tempted to summarize at write
    time.
stance: >-
  Lossy compression of AI memory traces regresses retrieval quality on standard
  benchmarks even when the compression is designed specifically for memory
  workloads.
related:
  - INS-260326-8201
  - INS-260409-1078
  - INS-260410-4E62
  - INS-260409-ADD0
  - INS-260409-3FDE
  - INS-260421-BD7F
---
MemPalace ran LongMemEval on 500 questions in both raw verbatim mode and AAAK lossy compression mode. Raw verbatim scored 96.6% R@5 (the highest published result requiring no API calls); AAAK scored 84.2% — a 12.4 point regression. This inverts the naive assumption that smart compression + smart retrieval beats dumb storage + smart retrieval. The explanation: at small scales, compression overhead (entity codes, structural markers, decoded lookups) costs more signal than it saves, and lossy schemes permanently discard information that retrieval might have surfaced. The maintainers were honest enough to publish the regression and fold the result into their April 2026 retraction. Useful warning for any KB tempted to summarize at write time.
