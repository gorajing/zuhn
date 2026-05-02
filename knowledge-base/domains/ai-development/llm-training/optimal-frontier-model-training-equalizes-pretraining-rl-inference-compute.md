---
id: INS-260501-31E1
domain: ai-development
topic: llm-training
title: Optimal frontier-model training equalizes pretraining + RL + inference compute
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - scaling-laws
  - compute-allocation
  - rl-training
  - chinchilla
sources:
  - type: youtube
    title: >-
      How GPT-5, Claude, and Gemini are actually trained and served – Reiner
      Pope
    author: Dwarkesh Patel
    url: 'https://youtu.be/xmkSf5IS-zw'
date_extracted: '2026-05-01'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Cost minimization heuristic: when summed costs follow power laws, the
    optimum is where each term is equal — apply this to
    pretraining/RL/inference.
  standard: >-
    Pope's heuristic claim: for cost functions that are sums of power-law terms
    (which describes pretraining, RL, and inference scaling), the minimum total
    cost tends to occur where each term is equal. Applied to frontier training:
    the optimal split is approximately 1/3 pretraining cost, 1/3 RL cost, 1/3
    inference cost over the model's deployed lifetime.


    Why this matters: it changes how to read lab announcements. A lab that
    publishes a model with disproportionate pretraining spend is leaving
    efficiency on the table — they should have either (a) trained a smaller
    model longer, (b) invested more in RL, or (c) accepted shorter deployment
    lifetime to amortize. The 33/33/33 split is also why MoE models with ~100B
    active parameters dominate: this is the active-parameter range where the
    three costs balance for a model deployed for ~2 months serving 50M+
    tokens/sec. Builders should not assume this ratio is permanent — as
    inference demand scales (10x, 100x), the equilibrium shifts toward smaller
    models trained much longer than today's Chinchilla curves suggest.
stance: >-
  The minimization point of total cost (training + inference) is approximately
  where each cost component is equal — meaning labs should split compute roughly
  evenly across pretraining, RL, and inference rather than maximizing any single
  one.
related:
  - PRI-260320-A2C7
  - PRI-260405-9504
  - INS-260329-B2BE
  - INS-260329-ADCD
  - PRI-260406-6574
---
Pope's heuristic claim: for cost functions that are sums of power-law terms (which describes pretraining, RL, and inference scaling), the minimum total cost tends to occur where each term is equal. Applied to frontier training: the optimal split is approximately 1/3 pretraining cost, 1/3 RL cost, 1/3 inference cost over the model's deployed lifetime.

Why this matters: it changes how to read lab announcements. A lab that publishes a model with disproportionate pretraining spend is leaving efficiency on the table — they should have either (a) trained a smaller model longer, (b) invested more in RL, or (c) accepted shorter deployment lifetime to amortize. The 33/33/33 split is also why MoE models with ~100B active parameters dominate: this is the active-parameter range where the three costs balance for a model deployed for ~2 months serving 50M+ tokens/sec. Builders should not assume this ratio is permanent — as inference demand scales (10x, 100x), the equilibrium shifts toward smaller models trained much longer than today's Chinchilla curves suggest.
