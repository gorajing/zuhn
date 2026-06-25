---
id: INS-260625-6AC1
domain: startups
topic: startups/founder-mindset
title: 'Build top-down from a strong base, not bottom-up from pre-training'
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - sequencing
  - speed-to-value
  - build-vs-buy
  - model-training
  - pragmatism
sources:
  - type: youtube
    title: >-
      How Cursor Trained Composer on Fireworks: Distributed Infrastructure for
      High-Performance RL
    author: Sequoia Capital
    url: 'https://www.youtube.com/watch?v=UDTr9yUnLUI'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Cursor reasons top-down—how do we get a useful model to users in the least
    time?—so it built on an open base (Kimi 2.5) plus mid-training and RL
    instead of mastering pre-training first.
  standard: >-
    Despite sitting on a uniquely rich stream of coding tokens that could
    support near-pre-training-scale data, Cursor deliberately did not pre-train
    its own model from scratch. The reasoning is explicitly top-down: building
    bottom-up would mean first figuring out pre-training, then scaling to
    mid-training, then RL—a sequence that delays a useful model reaching users
    for a very long time. By starting from a strong open base and pushing on
    mid-training and large-scale RL instead, they shipped a competitive model
    quickly, with the plan to internalize earlier stages in later versions.


    This is a general anti-perfectionism principle for technically ambitious
    startups: optimize for time-to-useful-output, and sequence your capability
    build so the user-facing value comes first and the foundational layers get
    owned later. The instinct to 'do it properly from the ground up' inverts the
    priority and costs you the market window. Lean on the best available base
    (open-source weights, third-party infra) for the layers that aren't yet your
    differentiator, and reserve your scarce engineering for the layer where
    specialization actually moves your product.
stance: >-
  Starting from a strong open base and adding mid-training plus RL ships useful
  value to users far faster than building pre-training capability from the
  bottom up.
related:
  - INS-260320-922A
  - INS-260410-F985
  - INS-260404-CE26
  - INS-260327-5D5F
  - INS-260327-30E4
  - PRI-260328-C581
---
Despite sitting on a uniquely rich stream of coding tokens that could support near-pre-training-scale data, Cursor deliberately did not pre-train its own model from scratch. The reasoning is explicitly top-down: building bottom-up would mean first figuring out pre-training, then scaling to mid-training, then RL—a sequence that delays a useful model reaching users for a very long time. By starting from a strong open base and pushing on mid-training and large-scale RL instead, they shipped a competitive model quickly, with the plan to internalize earlier stages in later versions.

This is a general anti-perfectionism principle for technically ambitious startups: optimize for time-to-useful-output, and sequence your capability build so the user-facing value comes first and the foundational layers get owned later. The instinct to 'do it properly from the ground up' inverts the priority and costs you the market window. Lean on the best available base (open-source weights, third-party infra) for the layers that aren't yet your differentiator, and reserve your scarce engineering for the layer where specialization actually moves your product.
