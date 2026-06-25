---
id: INS-260625-B6E8
domain: ai-development
topic: agent-evals
title: >-
  Generate held-out cases from private seeds instead of shipping static hidden
  sets
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - agent-evals
  - contamination
  - benchmark-design
  - generators
sources:
  - type: blog
    title: >-
      Power Systems Agent Benchmark: Executable Evaluation of AI Agents in
      Electric Power Engineering
    url: 'https://arxiv.org/abs/2606.20950'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: Make held-out tests auditable in mechanism but private in instance.
  standard: >-
    The paper does not distribute held-out cases as files. It generates them on
    demand with per-family deterministic, physics-aware perturbations from
    private seeds, accepts only solvable variants, and publishes aggregate
    summaries rather than per-case logs because submissions and evaluator
    outputs disclose the answers.


    This is a durable pattern for agent evals: publish the generator logic and
    validation criteria, keep the round seed private, and regenerate fresh draws
    for leaderboard rounds. It preserves inspectability without letting the
    held-out set leak through public artifacts, training data, or run logs.
stance: >-
  Seed-generated held-out cases are a stronger contamination defense than static
  hidden datasets because the mechanism can be inspected while concrete
  instances remain private.
related:
  - INS-260403-5C1D
  - INS-260605-824F
  - INS-260410-3601
  - INS-260323-01F9
  - INS-260410-DABE
---
The paper does not distribute held-out cases as files. It generates them on demand with per-family deterministic, physics-aware perturbations from private seeds, accepts only solvable variants, and publishes aggregate summaries rather than per-case logs because submissions and evaluator outputs disclose the answers.

This is a durable pattern for agent evals: publish the generator logic and validation criteria, keep the round seed private, and regenerate fresh draws for leaderboard rounds. It preserves inspectability without letting the held-out set leak through public artifacts, training data, or run logs.
