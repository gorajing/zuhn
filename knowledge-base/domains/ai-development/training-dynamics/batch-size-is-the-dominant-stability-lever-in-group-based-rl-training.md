---
id: INS-260627-FCAE
domain: ai-development
topic: training-dynamics
title: Batch size is the dominant stability lever in group-based RL training
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - grpo
  - batch-size
  - training-stability
  - model-collapse
  - stratified-sampling
sources:
  - type: youtube
    title: 'Let LLMs Wander: Engineering RL Environments — Stefano Fiorucci'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=71V3fTaUp2Q'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Small batch sizes let environment randomness and a narrow slice of opponents
    dominate each weight update, reinforcing suboptimal strategies and causing
    unstable training or collapse.
  standard: >-
    Fiorucci learned 'the hard way' that batch size was the key parameter: with
    values below 256 he observed unstable training and model collapse. The
    intuition is that batch size is the number of games used per weight update —
    update on too few matches and opponent types and the model learns from an
    unrepresentative sample, reinforcing suboptimal strategies. A large batch
    learns more slowly per step but stays stable.


    Two supporting techniques reduce variance so the batch signal is clean. (1)
    Seeding: an example-level seed plus a turn seed derived from the board state
    guarantees that two rollouts reaching the same position get the same
    opponent response, so reward differences reflect the model's play, not
    environment randomness — essential for GRPO, which compares rollouts from a
    shared starting point. (2) Stratified sampling: force every batch to contain
    a balanced mix of opponent difficulty across the chosen range, so the
    average reward doesn't swing wildly when a batch happens to draw many easy
    or many hard opponents. RL training is sensitive and unstable; these levers
    are what make it converge.
stance: >-
  In GRPO-style RL, a too-small batch causes model collapse because the model
  updates on too few games and opponent types at once, so larger batches trade
  speed for stability.
related:
  - INS-260410-CDE6
  - INS-260410-58D6
  - INS-260605-6B24
  - INS-260624-6B2C
  - PRI-260406-4A83
  - PRI-260403-EA13
  - INS-260326-0AB4
  - INS-260625-9B0C
  - INS-260627-D73F
---
Fiorucci learned 'the hard way' that batch size was the key parameter: with values below 256 he observed unstable training and model collapse. The intuition is that batch size is the number of games used per weight update — update on too few matches and opponent types and the model learns from an unrepresentative sample, reinforcing suboptimal strategies. A large batch learns more slowly per step but stays stable.

Two supporting techniques reduce variance so the batch signal is clean. (1) Seeding: an example-level seed plus a turn seed derived from the board state guarantees that two rollouts reaching the same position get the same opponent response, so reward differences reflect the model's play, not environment randomness — essential for GRPO, which compares rollouts from a shared starting point. (2) Stratified sampling: force every batch to contain a balanced mix of opponent difficulty across the chosen range, so the average reward doesn't swing wildly when a batch happens to draw many easy or many hard opponents. RL training is sensitive and unstable; these levers are what make it converge.
