---
id: INS-260626-BA05
domain: ai-development
topic: research-methodology
title: >-
  A scalar RL reward throws away the real signal — distill from
  privileged-information hints instead
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - reinforcement-learning
  - self-distillation
  - sdpo
  - post-training
  - continual-learning
sources:
  - type: youtube
    title: >-
      ⚡️Every product of the future will be a living system  — Ronak Malde,
      Trajectory.ai
    author: Latent Space
    url: 'https://www.youtube.com/watch?v=DcvgPEApHT8'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    RL crushes a whole trajectory of real-world correction into one reward
    scalar; SDPO instead gives a teacher privileged hints and matches the
    student to it, training on actual text guidance.
  standard: >-
    Reinforcement learning is the dominant post-training paradigm: an agent
    explores, gets a reward at the end, and the whole trajectory is labeled good
    or bad by that number. Malde argues this is 'really broken' for continual
    learning because it takes all the rich correction information from the real
    world and compresses it into a single scalar, discarding the directional,
    textual content of what the user actually wanted.


    Self-Distillation Policy Optimization (SDPO) addresses this. Normal
    distillation moves knowledge from a smarter teacher into a weaker student.
    The self-distillation twist is that you do not need a smarter teacher at all
    — you take the same model and make it temporarily smarter by injecting
    privileged information (a hint) into the teacher's context, then match the
    student's log-probabilities to that hint-augmented teacher. In their
    flight-price example, production holds the hidden correct answer; that hint
    is fed to the teacher, and the student learns toward it. The model is now
    guided by real text, not a binary reward.


    The broader methodological lesson: when designing a learning system, examine
    what your reward function is throwing away. If your signal is fundamentally
    richer than a number — corrections, edits, expert reasoning — a scalar
    objective discards most of it. Techniques that preserve the high-bandwidth
    signal (privileged-information distillation, process supervision) can
    outperform reward-only RL, and Malde reports faster convergence and
    robustness to off-policy production data when scaling SDPO on real-world
    agent benchmarks.
stance: >-
  Collapsing rich human corrections into a single RL reward number is lossy and
  breaks continual learning; self-distillation from a hint-augmented teacher
  preserves the textual guidance.
related:
  - INS-260323-F0A2
  - INS-260330-B784
  - INS-260330-27DD
  - INS-260403-D56B
  - INS-260410-8E1C
  - INS-260627-8A88
  - PRI-260407-9DDF
  - INS-260627-6A8B
  - PRI-260405-0676
---
Reinforcement learning is the dominant post-training paradigm: an agent explores, gets a reward at the end, and the whole trajectory is labeled good or bad by that number. Malde argues this is 'really broken' for continual learning because it takes all the rich correction information from the real world and compresses it into a single scalar, discarding the directional, textual content of what the user actually wanted.

Self-Distillation Policy Optimization (SDPO) addresses this. Normal distillation moves knowledge from a smarter teacher into a weaker student. The self-distillation twist is that you do not need a smarter teacher at all — you take the same model and make it temporarily smarter by injecting privileged information (a hint) into the teacher's context, then match the student's log-probabilities to that hint-augmented teacher. In their flight-price example, production holds the hidden correct answer; that hint is fed to the teacher, and the student learns toward it. The model is now guided by real text, not a binary reward.

The broader methodological lesson: when designing a learning system, examine what your reward function is throwing away. If your signal is fundamentally richer than a number — corrections, edits, expert reasoning — a scalar objective discards most of it. Techniques that preserve the high-bandwidth signal (privileged-information distillation, process supervision) can outperform reward-only RL, and Malde reports faster convergence and robustness to off-policy production data when scaling SDPO on real-world agent benchmarks.
