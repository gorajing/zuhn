---
id: INS-260605-C1A5
domain: ai-development
topic: llm-training
title: >-
  Building a product already produces the data and harness needed to train your
  own model
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - fine-tuning
  - training-data
  - evals
  - reinforcement-learning
  - agent-harness
sources:
  - type: youtube
    title: 'What Lies Beneath the API — Benjamin Cowen, Modal'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=HvZXAOZ3iv8'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    An agent harness plus eval data you've already collected is most of what's
    needed to train a model via reinforcement learning.
  standard: >-
    Cowen's central takeaway is that training is far closer than teams assume.
    If you have built an agent harness, you already have the environment a model
    needs to learn your service through reinforcement learning. If you evaluate
    your product and log what's working and what isn't, that evaluation data is
    training data. The decades-old 'garbage in, garbage out' rule still holds —
    so if you lack mature evals and haven't collected data, it's not yet time to
    train; collecting that data is the prerequisite. But teams that have shipped
    and instrumented a real product have typically already 'touched' everything
    required, often without realizing it.
stance: >-
  If you have shipped an AI product with evals and an agent harness, you already
  possess the raw materials to fine-tune a model.
related:
  - INS-260325-2FC1
  - INS-260327-E07C
  - INS-260627-01CF
  - INS-260625-9096
  - PRI-260426-890F
  - INS-260627-0F8C
---
Cowen's central takeaway is that training is far closer than teams assume. If you have built an agent harness, you already have the environment a model needs to learn your service through reinforcement learning. If you evaluate your product and log what's working and what isn't, that evaluation data is training data. The decades-old 'garbage in, garbage out' rule still holds — so if you lack mature evals and haven't collected data, it's not yet time to train; collecting that data is the prerequisite. But teams that have shipped and instrumented a real product have typically already 'touched' everything required, often without realizing it.
