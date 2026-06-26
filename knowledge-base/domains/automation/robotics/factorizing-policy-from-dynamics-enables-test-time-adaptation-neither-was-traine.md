---
id: INS-260625-017C
domain: automation
topic: robotics
title: >-
  Factorizing policy from dynamics enables test-time adaptation neither was
  trained on
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - robotics
  - model-predictive-control
  - modularity
  - test-time-adaptation
  - diffusion-models
  - factorization
sources:
  - type: youtube
    title: 'Inference, Diffusion, World Models, and More | YC Paper Club'
    author: Y Combinator
    url: 'https://www.youtube.com/watch?v=wE1ZgJdt4uM'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Because DMPC keeps the action proposal and the dynamics model separate, you
    can re-adapt only the dynamics on a broken-ankle robot and recover
    performance the monolithic policy can't.
  standard: >-
    Stannis Zhou's Diffusion-MPC (DMPC) demonstrates a modularity payoff that is
    easy to underrate. It learns two separate diffusion models from offline
    data: a multi-step action proposal (what to do) and a multi-step dynamics
    model (what happens if you do it), then uses a simple sampling-based planner
    to score and pick actions. The factorization is the point. Because the
    reward function lives in the planner rather than the learned weights, you
    can change the reward at test time and induce novel behaviors (e.g.,
    jumping) without retraining.


    The sharper demonstration is adaptation to novel dynamics. When a walker's
    left ankle 'breaks,' the consequences of its actions change. A
    jointly-modeled (state-and-action) approach struggles, but DMPC keeps the
    action proposal fixed and adapts only the dynamics model on a small amount
    of play data collected in the new environment — recovering much of the lost
    performance. Separation of concerns is what makes targeted, cheap adaptation
    possible.


    A secondary lesson: stronger generative modeling can simplify the rest of
    the stack. Because diffusion models capture multimodal action and dynamics
    distributions well, the planner can be trivially simple (sampling-based) and
    still outperform more elaborate prior approaches. The general design
    principle — useful well beyond robotics — is that factoring a system into
    independently-swappable models conditioned at inference time buys you
    adaptability that a monolithic end-to-end policy cannot, and a better world
    model often lets you simplify the controller on top of it.
stance: >-
  Separating the action-proposal model from the dynamics model lets a robot
  adapt to novel rewards and novel physics at test time by swapping only the
  affected component.
related:
  - INS-260501-E377
  - INS-260605-20DD
  - PRI-260426-890F
  - INS-260410-B0D6
  - INS-260605-3AE6
---
Stannis Zhou's Diffusion-MPC (DMPC) demonstrates a modularity payoff that is easy to underrate. It learns two separate diffusion models from offline data: a multi-step action proposal (what to do) and a multi-step dynamics model (what happens if you do it), then uses a simple sampling-based planner to score and pick actions. The factorization is the point. Because the reward function lives in the planner rather than the learned weights, you can change the reward at test time and induce novel behaviors (e.g., jumping) without retraining.

The sharper demonstration is adaptation to novel dynamics. When a walker's left ankle 'breaks,' the consequences of its actions change. A jointly-modeled (state-and-action) approach struggles, but DMPC keeps the action proposal fixed and adapts only the dynamics model on a small amount of play data collected in the new environment — recovering much of the lost performance. Separation of concerns is what makes targeted, cheap adaptation possible.

A secondary lesson: stronger generative modeling can simplify the rest of the stack. Because diffusion models capture multimodal action and dynamics distributions well, the planner can be trivially simple (sampling-based) and still outperform more elaborate prior approaches. The general design principle — useful well beyond robotics — is that factoring a system into independently-swappable models conditioned at inference time buys you adaptability that a monolithic end-to-end policy cannot, and a better world model often lets you simplify the controller on top of it.
