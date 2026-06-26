---
id: INS-260625-D790
domain: ai-development
topic: training-dynamics
title: RL unlocks transferable reasoning where SFT mostly memorizes
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - reinforcement-learning
  - supervised-fine-tuning
  - generalization
  - out-of-domain
  - reasoning
sources:
  - type: youtube
    title: SWE-RL by Meta — Reinforcement Learning for Software Engineering LLMs
    author: AI Papers Academy
    url: 'https://www.youtube.com/watch?v=DimD-eX0DW8'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    The SWE-RL model beats both the base model and an SFT model trained on the
    same PR data, even on tasks never seen in training.
  standard: >-
    SWE-RL compares three models on multiple out-of-domain tasks: the base
    model, a model supervised-fine-tuned on the pull-request data, and the RL
    model trained on the same data. The RL model consistently outperforms both —
    including on tasks that were never part of the RL training set. The
    interpretation is that RL rewards good reasoning trajectories rather than
    specific input-output pairs, so it cultivates general problem-solving skills
    (the paper observes emergent divide-and-conquer and alternative-exploration
    behaviors), while SFT optimizes for reproducing seen examples and
    generalizes worse. The practical takeaway: if the goal is transferable
    capability rather than narrow task fit, RL on outcomes can beat SFT on
    demonstrations from the very same dataset.
stance: >-
  Reinforcement learning produces general reasoning skills that transfer to
  out-of-domain tasks, whereas supervised fine-tuning on the same data largely
  memorizes it.
related:
  - INS-260330-0A8D
  - INS-260404-CE26
  - INS-260327-79E8
  - INS-260404-8EFB
  - INS-260410-6B98
  - INS-260412-9777
  - INS-260413-C040
  - INS-260501-FDF0
  - INS-260505-584B
  - INS-260505-5510
---
SWE-RL compares three models on multiple out-of-domain tasks: the base model, a model supervised-fine-tuned on the pull-request data, and the RL model trained on the same data. The RL model consistently outperforms both — including on tasks that were never part of the RL training set. The interpretation is that RL rewards good reasoning trajectories rather than specific input-output pairs, so it cultivates general problem-solving skills (the paper observes emergent divide-and-conquer and alternative-exploration behaviors), while SFT optimizes for reproducing seen examples and generalizes worse. The practical takeaway: if the goal is transferable capability rather than narrow task fit, RL on outcomes can beat SFT on demonstrations from the very same dataset.
