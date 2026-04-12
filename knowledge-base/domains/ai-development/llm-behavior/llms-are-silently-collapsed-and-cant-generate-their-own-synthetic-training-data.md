---
id: INS-260410-66C6
domain: ai-development
topic: llm-behavior
title: >-
  LLMs are silently collapsed and can't generate their own synthetic training
  data
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - karpathy
  - model-collapse
  - synthetic-data
  - entropy
  - diversity
sources:
  - type: youtube
    title: 'Andrej Karpathy — “We’re summoning ghosts, not building animals”'
    author: Dwarkesh Patel
    url: 'https://www.youtube.com/watch?v=lXUZvyajciY'
date_extracted: '2026-04-10'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Ask ChatGPT for ten jokes and you'll notice it only knows three — models are
    silently collapsed into a narrow output manifold, which poisons any attempt
    to train on their own generations.
  standard: >-
    Individual samples from modern LLMs look great, but their distribution is
    collapsed — the model will give you essentially the same answer ten
    different ways. Training on your own model's outputs therefore drives the
    distribution even narrower, and collapse compounds. This blocks the most
    obvious path to synthetic data: having a model reflect on a book chapter or
    generate its own problems to train on.


    Frontier labs have under-invested in diversity because the business value of
    LLMs is currently in being reliable and useful, not creative. RL actively
    penalizes exploration. So labs have been shooting themselves in the foot —
    losing the entropy they'll eventually need for self-improvement loops. Naive
    fixes like entropy regularization drift too far from the training
    distribution (models start inventing words).


    Humans face the same collapse over a lifetime — children are less collapsed,
    which is why they say shocking things. Seeking entropy (talking to different
    people, dreams) is how biological minds stay generative. LLMs lack any
    equivalent, and cracking this is a prerequisite for self-improvement at
    scale.
stance: >-
  Model outputs occupy a narrow manifold that looks diverse per-sample but
  collapses distributionally, making naive synthetic data generation a dead end.
related:
  - INS-260330-2294
  - INS-260323-4574
  - PRI-260412-7664
  - INS-260404-CE26
  - PRI-260323-7BFA
  - INS-260322-54F3
---
Individual samples from modern LLMs look great, but their distribution is collapsed — the model will give you essentially the same answer ten different ways. Training on your own model's outputs therefore drives the distribution even narrower, and collapse compounds. This blocks the most obvious path to synthetic data: having a model reflect on a book chapter or generate its own problems to train on.

Frontier labs have under-invested in diversity because the business value of LLMs is currently in being reliable and useful, not creative. RL actively penalizes exploration. So labs have been shooting themselves in the foot — losing the entropy they'll eventually need for self-improvement loops. Naive fixes like entropy regularization drift too far from the training distribution (models start inventing words).

Humans face the same collapse over a lifetime — children are less collapsed, which is why they say shocking things. Seeking entropy (talking to different people, dreams) is how biological minds stay generative. LLMs lack any equivalent, and cracking this is a prerequisite for self-improvement at scale.
