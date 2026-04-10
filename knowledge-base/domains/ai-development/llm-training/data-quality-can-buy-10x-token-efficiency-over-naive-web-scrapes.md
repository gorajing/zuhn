---
id: INS-260410-AA93
domain: ai-development
topic: llm-training
title: Data quality can buy 10x token efficiency over naive web scrapes
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - data-curation
  - fineweb
  - pretraining
  - token-efficiency
  - scaling-laws
sources:
  - type: youtube
    title: Let's reproduce GPT-2 (124M)
    author: Andrej Karpathy
    url: 'https://www.youtube.com/watch?v=l8pRSuU81PU'
date_extracted: '2026-04-10'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Karpathy matches GPT-2 124M HellaSwag on 10B tokens of FineWeb-Edu and
    nearly matches GPT-3 124M on 40B — versus 100B and 300B for the originals
    respectively.
  standard: >-
    The original GPT-2 was trained on ~100B tokens of WebText (Reddit outbound
    links) and GPT-3 124M on 300B tokens of a broader mixture. Karpathy's
    reproduction crosses GPT-2's validation performance on just 10B tokens of
    FineWeb-Edu, and nearly crosses GPT-3's HellaSwag on 40B — a roughly 10x
    improvement in sample efficiency with essentially the same architecture.


    He names several plausible contributors: FineWeb-Edu is filtered by
    Llama-3-70B judging for educational content; it's English-only (no
    multilingual/code capacity dilution); the 2024-era data pipeline has much
    more care around dedup and quality filtering than 2019 WebText; and
    HellaSwag contamination in the training set can't be fully ruled out. The
    first three of these are real and controllable; the fourth is a caveat, not
    a refutation.


    The broader point: as of 2024, the marginal return on 'more tokens' is lower
    than the marginal return on 'better tokens.' If you're training or
    fine-tuning anything, the data pipeline is where the leverage is, not the
    optimizer. This also means published scaling laws derived from older
    datasets systematically underestimate what's achievable per token on modern
    curated data.
stance: >-
  Training on aggressively filtered educational content reaches GPT-2-quality
  with an order of magnitude fewer tokens than the original WebText corpus
  required.
related:
  - INS-260402-5034
  - INS-260405-33CD
  - INS-260410-4696
  - INS-260410-CDE6
  - INS-260410-B8EB
---
The original GPT-2 was trained on ~100B tokens of WebText (Reddit outbound links) and GPT-3 124M on 300B tokens of a broader mixture. Karpathy's reproduction crosses GPT-2's validation performance on just 10B tokens of FineWeb-Edu, and nearly crosses GPT-3's HellaSwag on 40B — a roughly 10x improvement in sample efficiency with essentially the same architecture.

He names several plausible contributors: FineWeb-Edu is filtered by Llama-3-70B judging for educational content; it's English-only (no multilingual/code capacity dilution); the 2024-era data pipeline has much more care around dedup and quality filtering than 2019 WebText; and HellaSwag contamination in the training set can't be fully ruled out. The first three of these are real and controllable; the fourth is a caveat, not a refutation.

The broader point: as of 2024, the marginal return on 'more tokens' is lower than the marginal return on 'better tokens.' If you're training or fine-tuning anything, the data pipeline is where the leverage is, not the optimizer. This also means published scaling laws derived from older datasets systematically underestimate what's achievable per token on modern curated data.
