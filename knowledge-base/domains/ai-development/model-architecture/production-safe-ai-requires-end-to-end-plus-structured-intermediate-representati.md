---
id: INS-260501-646A
domain: ai-development
topic: model-architecture
title: >-
  Production-safe AI requires end-to-end PLUS structured intermediate
  representations — vanilla end-to-end is insufficient for high-stakes domains
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - end-to-end
  - structured-intermediate
  - safety-critical
  - production-ai
  - waymo-architecture
sources:
  - type: youtube
    title: 'Waymo''s Dmitri Dolgov: 20 Million Rides and the Road to Full Autonomy'
    author: Sequoia Capital
    url: 'https://youtu.be/I_0Kuf6Aa2c'
date_extracted: '2026-05-01'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    End-to-end is right. End-to-end alone is not. You need structured
    intermediate representations for runtime validation, closed-loop training,
    and human feedback integration.
  standard: >-
    Dolgov's architectural distinction: Waymo's foundation model IS end-to-end
    (sensors to decisions in one model), and that's important — it learns rich
    representations that hand-engineered interfaces can't capture. But 'using
    end-to-end' is fundamentally different from 'purely relying on it.' For
    prototypes, demos, driver-assist, or small-scale deployment, vanilla
    end-to-end is enough. For fully-autonomous superhuman-safety production at
    scale (hundreds of millions of miles), you need structured materialized
    intermediate representations.


    What the structured representation enables: (1) runtime validation of the
    agent's decisions in the physical world, (2) richer training and evaluation
    recipes (closed-loop evaluation, closed-loop training, rich RL reward
    functions), (3) integration of human feedback from support staff and remote
    operators. None of these are practical with pure end-to-end.


    The principle generalizes to any safety-critical AI deployment (medical,
    financial, legal, infrastructure): pure end-to-end is the wrong production
    architecture; end-to-end-plus-structured-intermediate is the right one. For
    Zuhn editorially: this is the operational rebuttal to 'just train a bigger
    end-to-end model' arguments in any high-stakes AI deployment context. The
    structured intermediate is where safety, auditability, and human-in-the-loop
    integration live.
stance: >-
  Pure end-to-end neural architectures (sensors-to-actions, no engineered
  interfaces) lack the structured intermediate representations needed for
  runtime validation, closed-loop training, rich reward design, and human
  feedback integration — making them appropriate for prototypes but inadequate
  for fully-autonomous safety-critical deployment.
related:
  - INS-260411-8034
  - PRI-260403-67FC
  - PRI-260411-ACEF
  - INS-260625-35C5
  - INS-260626-46B9
---
Dolgov's architectural distinction: Waymo's foundation model IS end-to-end (sensors to decisions in one model), and that's important — it learns rich representations that hand-engineered interfaces can't capture. But 'using end-to-end' is fundamentally different from 'purely relying on it.' For prototypes, demos, driver-assist, or small-scale deployment, vanilla end-to-end is enough. For fully-autonomous superhuman-safety production at scale (hundreds of millions of miles), you need structured materialized intermediate representations.

What the structured representation enables: (1) runtime validation of the agent's decisions in the physical world, (2) richer training and evaluation recipes (closed-loop evaluation, closed-loop training, rich RL reward functions), (3) integration of human feedback from support staff and remote operators. None of these are practical with pure end-to-end.

The principle generalizes to any safety-critical AI deployment (medical, financial, legal, infrastructure): pure end-to-end is the wrong production architecture; end-to-end-plus-structured-intermediate is the right one. For Zuhn editorially: this is the operational rebuttal to 'just train a bigger end-to-end model' arguments in any high-stakes AI deployment context. The structured intermediate is where safety, auditability, and human-in-the-loop integration live.
