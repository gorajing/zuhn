---
id: INS-260514-DC55
domain: ai-development
topic: model-architecture
title: >-
  Generative video prediction produces blurry outputs because models must
  average across uncertain futures
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - generative-models
  - video-prediction
  - ambiguity
  - architectural-limits
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
    If the ball can bounce left or right, a generative model predicts both
    blurry directions averaged. Architecturally forced, not a tuning problem.
  standard: >-
    Yan LeCun's structural critique of generative video: imagine a ball bouncing
    — a language model has separate output tokens for 'left' and 'right' and can
    independently update each probability. A pixel-prediction video model has
    one output frame; when futures are ambiguous, the model must produce a
    single image that minimizes loss across all possible futures, which is the
    pixel-wise average of those possible futures. The result is washed-out
    blurry video. This is not a tuning failure; it's an architectural one. Full
    HD video has 10^15 million possible next frames (dwarfing atoms in the
    observable universe), making discrete enumeration impossible.


    Application: when an AI product produces visually muddy or hedged outputs,
    check whether the architecture is forcing averaging across multi-modal
    possibilities. The fix isn't more data or compute — it's an architectural
    change to a representation space where the ambiguity can be expressed. For
    Memric: when audit deliverables include 'likely outcomes,' the deliverable
    should expose the modes (e.g., 'thesis A would resolve to outcome X; thesis
    B to outcome Y'), not the average.
stance: >-
  Generative architectures trained to predict pixel values for next video frames
  produce blurry outputs not because of compute or data limits but because the
  architecture forces the model to output one prediction when ambiguity is
  fundamental — the best response to multi-modal futures is the mean, which is
  visually blurry.
related:
  - INS-260330-D7CD
  - INS-260330-4711
  - INS-260410-85F5
  - INS-260505-23FB
  - INS-260405-D3B5
  - INS-260605-4D1D
  - PRI-260327-8D8C
---
Yan LeCun's structural critique of generative video: imagine a ball bouncing — a language model has separate output tokens for 'left' and 'right' and can independently update each probability. A pixel-prediction video model has one output frame; when futures are ambiguous, the model must produce a single image that minimizes loss across all possible futures, which is the pixel-wise average of those possible futures. The result is washed-out blurry video. This is not a tuning failure; it's an architectural one. Full HD video has 10^15 million possible next frames (dwarfing atoms in the observable universe), making discrete enumeration impossible.

Application: when an AI product produces visually muddy or hedged outputs, check whether the architecture is forcing averaging across multi-modal possibilities. The fix isn't more data or compute — it's an architectural change to a representation space where the ambiguity can be expressed. For Memric: when audit deliverables include 'likely outcomes,' the deliverable should expose the modes (e.g., 'thesis A would resolve to outcome X; thesis B to outcome Y'), not the average.
