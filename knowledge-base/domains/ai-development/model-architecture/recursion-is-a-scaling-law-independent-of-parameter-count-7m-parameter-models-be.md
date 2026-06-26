---
id: INS-260501-FE35
domain: ai-development
topic: model-architecture
title: >-
  Recursion is a scaling law independent of parameter count — 7M parameter
  models beat o3 on ARC by recursing weights
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - recursion-scaling
  - trm
  - hrm
  - arc-prize
  - reasoning
sources:
  - type: youtube
    title: Recursion Is The Next Scaling Law In AI
    author: Y Combinator
    url: 'https://youtu.be/DGtUUMNYLcc'
date_extracted: '2026-05-01'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    A 7M-parameter TRM beats a frontier LLM on ARC-AGI by recursing the same
    weights at inference time — recursion is a scaling axis distinct from
    parameters.
  standard: >-
    From Chollet's analysis of the HRM and TRM papers: HRM (27M parameters)
    achieved state-of-the-art on ARC-Prize 1 and 2 with no pretraining, just
    ~1000 task examples — beating frontier LLMs like o3 (which scored 0% at the
    time on those exact tasks). TRM simplified the architecture further,
    dropping to 7M parameters while improving from 70% to 87% on ARC-Prize 1.
    The mechanism: instead of scaling parameter count, recurse the same weights
    at inference time across multiple latent reasoning steps.


    The deeper claim from Schmidhuber and Chollet: recursion is a scaling law in
    its own right, separate from parameter count. Sufficient (not necessary) to
    go bigger to get better performance; sufficient (not necessary) to add more
    recursion. The right move is to do both — combine the
    embedding-representation-space quality of trillion-parameter models with the
    recursive reasoning of TRM-style architectures inside that space. For
    builders: the inference-cost economics flip dramatically when reasoning
    lives in a 7M-parameter recursive module rather than a frontier LLM. This is
    a credible alternative architecture for any verifiable-domain task
    (Karpathy's framing: math, code, structured puzzles) where you can train a
    small reasoner and pay only for the embedding model at scale.
stance: >-
  Reasoning capability scales with recursion depth at inference time, not just
  with parameter count — and on tasks with bounded compressibility (Sudoku,
  mazes, ARC-AGI), tiny recursive models beat trillion-parameter LLMs by orders
  of magnitude.
related:
  - INS-260405-7305
  - INS-260330-BFD0
  - INS-260501-94AC
  - INS-260625-5184
  - INS-260625-50A0
  - PRI-260323-8E89
---
From Chollet's analysis of the HRM and TRM papers: HRM (27M parameters) achieved state-of-the-art on ARC-Prize 1 and 2 with no pretraining, just ~1000 task examples — beating frontier LLMs like o3 (which scored 0% at the time on those exact tasks). TRM simplified the architecture further, dropping to 7M parameters while improving from 70% to 87% on ARC-Prize 1. The mechanism: instead of scaling parameter count, recurse the same weights at inference time across multiple latent reasoning steps.

The deeper claim from Schmidhuber and Chollet: recursion is a scaling law in its own right, separate from parameter count. Sufficient (not necessary) to go bigger to get better performance; sufficient (not necessary) to add more recursion. The right move is to do both — combine the embedding-representation-space quality of trillion-parameter models with the recursive reasoning of TRM-style architectures inside that space. For builders: the inference-cost economics flip dramatically when reasoning lives in a 7M-parameter recursive module rather than a frontier LLM. This is a credible alternative architecture for any verifiable-domain task (Karpathy's framing: math, code, structured puzzles) where you can train a small reasoner and pay only for the embedding model at scale.
