---
id: INS-260409-1078
domain: ai-development
topic: system-building
title: Lossy text compression overhead exceeds savings on small payloads
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - compression
  - tokenization
  - scale
  - overhead
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
    MemPalace's AAAK uses 73 tokens to encode text that plain English encodes in
    66 — compression only amortizes at scale where the same entities appear
    hundreds of times, making it a net loss for small-scale personal memory.
  standard: >-
    The AAAK compression scheme adds entity codes (mapping 'driftwood' to a
    short symbol), structural markers, and sentence truncation. The maintainers
    discovered in their April 2026 correction that on their own README example,
    AAAK tokens (73) exceed plain English tokens (66) — they had used a naive
    len(text)//3 heuristic to estimate token counts instead of a real tokenizer.
    The underlying lesson: compression has constant overhead (the code tables,
    the markers, the scheme itself) that only pays off when the compressed
    entities repeat enough to amortize the cost. For a team mentioned once,
    compression loses; for a team mentioned 500 times across thousands of
    sessions, it wins. Applying this to Zuhn: any compression layer added to
    insights or principles should be measured against actual token counts, not
    heuristics, and should only fire at scales where entities genuinely repeat.
stance: >-
  Compression schemes with entity codes and structural markers cost more than
  they save until the underlying text has many repeated entities at substantial
  scale.
related:
  - INS-260320-B210
  - INS-260320-9FD5
  - INS-260325-6150
  - INS-260326-8201
  - INS-260330-2294
  - INS-260330-81A7
  - INS-260402-5034
  - INS-260403-410A
  - INS-260409-6560
  - INS-260409-ADD0
---
The AAAK compression scheme adds entity codes (mapping 'driftwood' to a short symbol), structural markers, and sentence truncation. The maintainers discovered in their April 2026 correction that on their own README example, AAAK tokens (73) exceed plain English tokens (66) — they had used a naive len(text)//3 heuristic to estimate token counts instead of a real tokenizer. The underlying lesson: compression has constant overhead (the code tables, the markers, the scheme itself) that only pays off when the compressed entities repeat enough to amortize the cost. For a team mentioned once, compression loses; for a team mentioned 500 times across thousands of sessions, it wins. Applying this to Zuhn: any compression layer added to insights or principles should be measured against actual token counts, not heuristics, and should only fire at scales where entities genuinely repeat.
