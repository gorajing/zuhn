---
id: INS-260627-FEBB
domain: ai-development
topic: agent-evals
title: Phase diagrams separate policy failure from physically impossible task regimes
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - agent-evals
  - physical-limits
  - rl
  - robotics
  - evaluation-design
sources:
  - type: blog
    title: >-
      Reinforcement Learning Enables Autonomous Microrobot Navigation and
      Intervention in Simulated Blood Capillaries
    url: 'https://arxiv.org/html/2606.26154'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: The strongest eval result is sometimes a map of where success is impossible.
  standard: >-
    The authors vary robot radius and swim speed, train 30 agents per parameter
    setting, and find a forbidden regime where Brownian motion and opposing flow
    overpower propulsion. They then transfer a single successful model across
    the parameter space; the forbidden region persists, indicating a physical
    boundary rather than a learning failure. This is a better evaluation pattern
    than one-number performance: it decomposes 'model cannot solve it' from 'the
    world does not allow it.' Agent evals for software and robotics should
    similarly include capability-frontier maps that expose environmental
    impossibility, not just average task scores.
stance: >-
  A useful AI-for-science evaluation should identify regions where no controller
  can win, not merely rank models on aggregate success.
related:
  - INS-260322-D1AB
  - INS-260403-7E95
  - INS-260410-AF66
  - INS-260605-FCDA
  - INS-260625-0E60
  - INS-260626-67E8
  - INS-260626-484B
  - INS-260628-A747
  - INS-260625-8A55
  - INS-260605-EF23
---
The authors vary robot radius and swim speed, train 30 agents per parameter setting, and find a forbidden regime where Brownian motion and opposing flow overpower propulsion. They then transfer a single successful model across the parameter space; the forbidden region persists, indicating a physical boundary rather than a learning failure. This is a better evaluation pattern than one-number performance: it decomposes 'model cannot solve it' from 'the world does not allow it.' Agent evals for software and robotics should similarly include capability-frontier maps that expose environmental impossibility, not just average task scores.
