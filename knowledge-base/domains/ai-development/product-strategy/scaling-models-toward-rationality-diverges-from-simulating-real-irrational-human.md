---
id: INS-260625-0686
domain: ai-development
topic: product-strategy
title: >-
  Scaling models toward rationality diverges from simulating real, irrational
  humans
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - scaling-laws
  - human-simulation
  - model-divergence
  - cpu-vs-gpu-of-intelligence
  - frontier-limits
sources:
  - type: youtube
    title: 'Simulating Humans at Scale: Simile''s Joon Sung Park'
    author: Sequoia Capital
    url: 'https://www.youtube.com/watch?v=lfhFmwcESRw'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Frontier labs optimize for rational, objectively-correct 'CPU of
    intelligence' models, but simulating irrational humans needs a different
    'GPU of intelligence' frontier, and the two diverge as scale increases.
  standard: >-
    Park observes that OpenAI, Anthropic, and the new labs share a North Star:
    super-intelligent machines that are rational and excel at problems with
    objective answers. But humans are irrational and full of subjective values,
    preferences, and taste. The result is a counterintuitive divergence — 'you
    actually start to see model size going up and the performance in its ability
    to predict and simulate human behavior' plateau. Capability gains aimed at
    rationality do not transfer to, and can even degrade, human-behavior
    fidelity.


    His framing is that today's frontier models are the 'CPU of intelligence' —
    a single model trained on rational data, superhuman at complex objective
    questions — whereas simulating people requires something closer to a 'GPU of
    intelligence': many sub-units that each faithfully represent the viewpoints
    of different sub-populations. Crucially, you do not want a model that is
    superhuman at this task; you want one that is 'as human as possible,'
    including the messiness and randomness real people exhibit.


    For anyone choosing whether to ride the frontier or build their own model,
    this is the key heuristic: identify whether your use case is aligned with
    the frontier's objective function (rational, objective, convergent) or
    orthogonal to it (subjective, diverse, human). Where it is orthogonal, scale
    will not rescue you, and a purpose-built model targeting human diversity
    becomes both necessary and defensible.
stance: >-
  As frontier models scale toward superintelligent rationality, their ability to
  predict diverse, irrational human behavior plateaus or declines, so
  human-fidelity is a separate model frontier rather than a byproduct of
  capability.
related:
  - INS-260323-D934
  - INS-260327-EE5B
  - INS-260403-34C0
  - INS-260405-670E
  - INS-260409-D922
  - INS-260409-4CBB
  - INS-260410-F5C5
  - INS-260412-F3B0
  - INS-260505-56BD
  - INS-260514-13B6
---
Park observes that OpenAI, Anthropic, and the new labs share a North Star: super-intelligent machines that are rational and excel at problems with objective answers. But humans are irrational and full of subjective values, preferences, and taste. The result is a counterintuitive divergence — 'you actually start to see model size going up and the performance in its ability to predict and simulate human behavior' plateau. Capability gains aimed at rationality do not transfer to, and can even degrade, human-behavior fidelity.

His framing is that today's frontier models are the 'CPU of intelligence' — a single model trained on rational data, superhuman at complex objective questions — whereas simulating people requires something closer to a 'GPU of intelligence': many sub-units that each faithfully represent the viewpoints of different sub-populations. Crucially, you do not want a model that is superhuman at this task; you want one that is 'as human as possible,' including the messiness and randomness real people exhibit.

For anyone choosing whether to ride the frontier or build their own model, this is the key heuristic: identify whether your use case is aligned with the frontier's objective function (rational, objective, convergent) or orthogonal to it (subjective, diverse, human). Where it is orthogonal, scale will not rescue you, and a purpose-built model targeting human diversity becomes both necessary and defensible.
