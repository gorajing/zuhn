---
id: INS-260323-6C6F
domain: ai-development
topic: llm-training
title: >-
  Pre-training scaling is alive but economically displaced by inference scaling
  for now
actionability: reference
confidence: high
shelf_life: time-sensitive
status: active
tags:
  - scaling-laws
  - pre-training
  - inference
  - economics
  - compute
sources:
  - type: youtube
    title: >-
      State of AI in 2026: LLMs, Coding, Scaling Laws, China, Agents, GPUs, AGI
      | Lex Fridman Podcast #490
    author: Lex Fridman
    url: 'https://youtu.be/EV7WhVT270Q'
date_extracted: '2026-03-23'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Scaling laws hold across 13 orders of magnitude and won't stop, but
    inference-time scaling currently offers better ROI than making models
    bigger.
  standard: >-
    Sebastian Raschka frames the scaling tradeoff as a financial decision, not a
    technical wall. Pre-training is a fixed cost that gives permanent
    capabilities; inference scaling is a per-query recurring cost. With model
    lifespans of ~6 months before replacement, spending $100M more on
    pre-training may not be worth it when inference scaling (letting models
    think longer) can extract more capability from the same base model. Claude
    Opus 4.5 proved this: a smaller model with better post-training and
    inference scaling outperformed simply scaling up pre-training. Nathan
    Lambert adds that gigawatt-scale Blackwell clusters coming online in 2026
    will enable testing larger scales, but serving costs (billions/year for
    hundreds of millions of users) dwarf training costs ($2-5M). The prediction:
    we'll see $2,000/month AI subscriptions this year as companies offer
    cutting-edge inference to fewer, higher-paying users.
related:
  - INS-260323-4D8D
  - INS-260323-8AEC
  - INS-260323-3F11
  - PRI-260323-8E89
  - PRI-260328-D893
  - INS-260327-6177
  - INS-260330-7FAC
  - INS-260403-EEDF
stance: >-
  Scaling laws hold across 13 orders of magnitude and won't stop, but
  inference-time scaling currently offers better ROI than making models bigger.
evidence:
  - id: INS-260330-7FAC
    type: TRANSFERS_TO
    classified_at: '2026-04-02'
  - id: INS-260403-EEDF
    type: TRANSFERS_TO
    classified_at: '2026-04-03'
---
Sebastian Raschka frames the scaling tradeoff as a financial decision, not a technical wall. Pre-training is a fixed cost that gives permanent capabilities; inference scaling is a per-query recurring cost. With model lifespans of ~6 months before replacement, spending $100M more on pre-training may not be worth it when inference scaling (letting models think longer) can extract more capability from the same base model. Claude Opus 4.5 proved this: a smaller model with better post-training and inference scaling outperformed simply scaling up pre-training. Nathan Lambert adds that gigawatt-scale Blackwell clusters coming online in 2026 will enable testing larger scales, but serving costs (billions/year for hundreds of millions of users) dwarf training costs ($2-5M). The prediction: we'll see $2,000/month AI subscriptions this year as companies offer cutting-edge inference to fewer, higher-paying users.
