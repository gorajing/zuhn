---
id: INS-260410-C022
domain: ai-development
topic: economics
title: >-
  Inference compute is 100x cheaper than reading a paperback, leaving massive
  headroom to 'buy' intelligence
actionability: reference
confidence: high
shelf_life: time-sensitive
status: active
tags:
  - inference-scaling
  - economics
  - compute
  - unit-economics
sources:
  - type: youtube
    title: 'Jeff Dean & Noam Shazeer — 25 years at Google: from PageRank to AGI'
    author: Dwarkesh Patel
    url: 'https://www.youtube.com/watch?v=v0gjI__RyCY'
date_extracted: '2026-04-10'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >
    At ~$10⁻¹⁸ per operation and a trillion ops per token, LLMs deliver roughly
    a million tokens per dollar — 100x cheaper than a paperback, 10,000x cheaper
    than customer support, and a million-plus times cheaper than a lawyer — so
    you can afford to make inference far more expensive to make it far smarter.
  standard: >-
    Noam Shazeer does the Fermi estimate: even a trillion-op-per-token model
    comes out to about a million tokens per dollar. A paperback costs roughly
    10,000 tokens per dollar; talking to a human support agent is ~100 tokens
    per dollar; a lawyer or software engineer is 1-10 tokens per dollar. The gap
    between LLM inference cost and the value of the cognitive labor it can
    substitute for is 4-6 orders of magnitude.


    This is the economic engine behind the inference-compute era: you can 100x
    or 1000x the flops per query and still be dramatically cheaper than the
    human alternatives the model is competing with. Jeff Dean frames inference
    scaling as the near-term 'explosion' replacing the
    pre-training-and-post-training exploitation of the past few years. They
    expect specialized hardware optimized for inference (not training) to become
    a larger share of the data-center stack because the compute shape is
    different — no sequence-length batching, single-token decode bottlenecks,
    asynchronous background tasks.


    Application: when pricing an AI product or planning capacity, anchor to the
    value of the substituted human labor, not the marginal token cost. The
    headroom suggests pricing models should migrate from 'per token' to 'per
    outcome' — users will happily pay 10x for a smarter answer on a hard
    problem.
stance: >-
  Inference-time compute scaling is the dominant near-term axis of AI progress
  because current per-token costs are orders of magnitude below the value of
  thinking harder.
related:
  - INS-260323-7625
  - INS-260320-9FD5
  - INS-260325-4FF3
  - INS-260405-6A94
  - INS-260403-E78C
  - INS-260405-A22F
  - INS-260409-B15B
  - INS-260410-2FEE
  - INS-260410-B8EB
  - INS-260325-BEAC
---
Noam Shazeer does the Fermi estimate: even a trillion-op-per-token model comes out to about a million tokens per dollar. A paperback costs roughly 10,000 tokens per dollar; talking to a human support agent is ~100 tokens per dollar; a lawyer or software engineer is 1-10 tokens per dollar. The gap between LLM inference cost and the value of the cognitive labor it can substitute for is 4-6 orders of magnitude.

This is the economic engine behind the inference-compute era: you can 100x or 1000x the flops per query and still be dramatically cheaper than the human alternatives the model is competing with. Jeff Dean frames inference scaling as the near-term 'explosion' replacing the pre-training-and-post-training exploitation of the past few years. They expect specialized hardware optimized for inference (not training) to become a larger share of the data-center stack because the compute shape is different — no sequence-length batching, single-token decode bottlenecks, asynchronous background tasks.

Application: when pricing an AI product or planning capacity, anchor to the value of the substituted human labor, not the marginal token cost. The headroom suggests pricing models should migrate from 'per token' to 'per outcome' — users will happily pay 10x for a smarter answer on a hard problem.
