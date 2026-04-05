---
id: INS-260326-CAAB
domain: ai-development
topic: ai-capabilities
title: >-
  Data-oblivious algorithms that work on worst-case inputs can be orders of
  magnitude faster than data-dependent methods that optimize for average-case
actionability: immediate
confidence: very_high
shelf_life: evergreen
status: active
tags:
  - data-oblivious
  - online-algorithms
  - preprocessing
  - indexing
  - vector-search
sources:
  - type: pdf
    title: 2504.19874v1
date_extracted: '2026-03-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    TurboQuant indexes 100K vectors in 0.002s vs 494s for Product Quantization
    (d=3072) -- and gets better recall -- because its guarantees are
    mathematical, not statistical.
  standard: >-
    Product Quantization (PQ) builds data-dependent codebooks via k-means
    clustering, requiring expensive preprocessing that scales with dataset size
    and dimensionality. RabitQ similarly requires learning data statistics.
    TurboQuant uses data-oblivious quantization: the random rotation matrix and
    codebook centroids are fixed regardless of the input data. Result: 0.002
    seconds to quantize 100K vectors at d=3072, vs 494s for PQ and 3,957s for
    RabitQ. That's a 200,000x speedup -- and TurboQuant achieves higher recall.
    The key: TurboQuant's performance guarantees come from information theory
    and high-dimensional geometry (concentration of measure, near-independence
    of rotated coordinates), not from fitting the data. This makes it
    online-capable -- new vectors can be quantized instantly without rebuilding
    anything. For streaming data, dynamic databases, and KV caches that grow
    with each token, this is transformative.
stance: >-
  TurboQuant's zero-preprocessing approach indexes vectors 200,000x faster than
  Product Quantization while achieving higher recall, because the algorithm's
  guarantees come from mathematical structure rather than learning data
  statistics
related:
  - INS-260325-E652
  - INS-260325-EB9E
  - INS-260329-9927
  - INS-260329-7A6A
  - INS-260329-4109
  - INS-260329-A171
  - INS-260330-798D
evidence:
  - id: INS-260330-184C
    relationship: RELATED
  - id: INS-260329-9927
    relationship: RELATED
  - id: INS-260329-7A6A
    relationship: RELATED
  - id: INS-260329-4109
    relationship: RELATED
---
Product Quantization (PQ) builds data-dependent codebooks via k-means clustering, requiring expensive preprocessing that scales with dataset size and dimensionality. RabitQ similarly requires learning data statistics. TurboQuant uses data-oblivious quantization: the random rotation matrix and codebook centroids are fixed regardless of the input data. Result: 0.002 seconds to quantize 100K vectors at d=3072, vs 494s for PQ and 3,957s for RabitQ. That's a 200,000x speedup -- and TurboQuant achieves higher recall. The key: TurboQuant's performance guarantees come from information theory and high-dimensional geometry (concentration of measure, near-independence of rotated coordinates), not from fitting the data. This makes it online-capable -- new vectors can be quantized instantly without rebuilding anything. For streaming data, dynamic databases, and KV caches that grow with each token, this is transformative.
