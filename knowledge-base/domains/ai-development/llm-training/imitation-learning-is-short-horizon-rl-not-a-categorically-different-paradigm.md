---
id: INS-260410-E1D9
domain: ai-development
topic: llm-training
title: 'Imitation learning is short-horizon RL, not a categorically different paradigm'
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - imitation-learning
  - reinforcement-learning
  - pretraining
  - paradigm-debate
sources:
  - type: youtube
    title: Some thoughts on the Sutton interview
    author: Dwarkesh Patel
    url: 'https://www.youtube.com/watch?v=u3HBJVjpXuw'
date_extracted: '2026-04-10'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Imitation learning is RL where the episode is one token long and reward is
    how well the next token was predicted.
  standard: >-
    The standard critique of LLMs frames imitation learning and reinforcement
    learning as fundamentally different paradigms — one learns from humans, the
    other from ground truth. Patel argues this dichotomy dissolves under
    inspection: when an LLM predicts the next token, it is making a conjecture
    about the world and receiving reward proportional to accuracy. That is
    structurally RL with a one-token horizon.


    The practical consequence is that debates over whether LLMs have a 'true'
    world model or just a 'model of humans' become semantic. What matters
    empirically is whether the prior built from imitation enables faster
    learning from ground-truth signals downstream. Since post-training RL on
    pretrained LLMs has produced IMO gold medals and working application code
    from scratch — tasks with unambiguous ground truth — the prior is clearly
    doing real work.


    This reframing matters for roadmapping: if imitation and RL are
    complementary rather than competing, then current LLM training is not a
    dead-end detour but a compute-efficient way to bootstrap the prior needed
    for later experiential learning.
stance: >-
  Supervised pretraining and RL are points on a continuum — imitation learning
  is just RL with single-token episodes where reward equals prediction accuracy,
  so framing them as dichotomous is a semantic mistake.
related:
  - INS-260403-141E
  - INS-260404-023C
  - INS-260410-8E1C
  - INS-260330-0102
  - INS-260323-F0A2
  - PRI-260407-9DDF
---
The standard critique of LLMs frames imitation learning and reinforcement learning as fundamentally different paradigms — one learns from humans, the other from ground truth. Patel argues this dichotomy dissolves under inspection: when an LLM predicts the next token, it is making a conjecture about the world and receiving reward proportional to accuracy. That is structurally RL with a one-token horizon.

The practical consequence is that debates over whether LLMs have a 'true' world model or just a 'model of humans' become semantic. What matters empirically is whether the prior built from imitation enables faster learning from ground-truth signals downstream. Since post-training RL on pretrained LLMs has produced IMO gold medals and working application code from scratch — tasks with unambiguous ground truth — the prior is clearly doing real work.

This reframing matters for roadmapping: if imitation and RL are complementary rather than competing, then current LLM training is not a dead-end detour but a compute-efficient way to bootstrap the prior needed for later experiential learning.
