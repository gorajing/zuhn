---
id: INS-260514-4133
domain: ai-development
topic: research-methodology
title: >-
  The cake metaphor: self-supervised learning is the bulk, supervised is icing,
  reinforcement is the cherry
actionability: reference
confidence: medium
shelf_life: time-sensitive
status: active
tags:
  - self-supervised-learning
  - training-paradigm
  - lecun
  - cake-metaphor
sources:
  - type: youtube
    title: Yann LeCun's $1B Bet Against LLMs
    author: Welch Labs
    url: 'https://youtu.be/kYkIdXwW2AE'
date_extracted: '2026-05-14'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Self-supervised is the cake, supervised is the icing, RL is the cherry —
    LeCun called this in 2015 when everyone was crazy about RL.
  standard: >-
    LeCun's 2015 talk slide: if intelligence is a cake, the bulk is
    self-supervised learning (cake), supervised learning is the icing, and
    reinforcement learning is the cherry. At the time the field was obsessed
    with RL (DeepMind's Atari and Go breakthroughs). LeCun argued RL was too
    sample-inefficient to scale to human or animal intelligence. The 2018-2025
    LLM training paradigm validated his prediction: massive self-supervised
    pretraining (trillions of tokens) → supervised fine-tuning on small
    high-quality datasets → RLHF as the final polish. The same paradigm is now
    propagating to vision (DINO v3, JEPA) and robotics (VJEPA-2). The
    architectural shift from RL-centric to self-supervised-centric was correct.


    Application: when assessing AI research investments, weight self-supervised
    learning approaches over reinforcement-learning approaches in domains where
    the field hasn't matured yet. The cake metaphor is a stable architectural
    prior. For Memric: same architectural intuition — extract structured
    patterns from the firm's existing corpus (self-supervised on their
    documents) before introducing supervised fine-tuning on auditor-validated
    examples, before any RL-style optimization on customer feedback.
stance: >-
  LeCun's 2015-2017 prediction — that self-supervised learning would dominate AI
  training, with supervised as a thin top layer and reinforcement learning as an
  even thinner cherry — has been empirically validated by the 2018-2025 LLM
  training regime (massive pretraining → supervised fine-tuning → RLHF), but
  with self-supervised winning in language faster than vision.
related:
  - INS-260514-AC1D
  - INS-260402-D2C9
  - INS-260514-8FC8
  - INS-260327-C4C8
  - PRI-260406-6AE6
---
LeCun's 2015 talk slide: if intelligence is a cake, the bulk is self-supervised learning (cake), supervised learning is the icing, and reinforcement learning is the cherry. At the time the field was obsessed with RL (DeepMind's Atari and Go breakthroughs). LeCun argued RL was too sample-inefficient to scale to human or animal intelligence. The 2018-2025 LLM training paradigm validated his prediction: massive self-supervised pretraining (trillions of tokens) → supervised fine-tuning on small high-quality datasets → RLHF as the final polish. The same paradigm is now propagating to vision (DINO v3, JEPA) and robotics (VJEPA-2). The architectural shift from RL-centric to self-supervised-centric was correct.

Application: when assessing AI research investments, weight self-supervised learning approaches over reinforcement-learning approaches in domains where the field hasn't matured yet. The cake metaphor is a stable architectural prior. For Memric: same architectural intuition — extract structured patterns from the firm's existing corpus (self-supervised on their documents) before introducing supervised fine-tuning on auditor-validated examples, before any RL-style optimization on customer feedback.
