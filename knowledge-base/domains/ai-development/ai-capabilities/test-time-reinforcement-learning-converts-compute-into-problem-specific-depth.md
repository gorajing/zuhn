---
id: INS-260325-9C89
domain: ai-development
topic: ai-capabilities
title: Test-time reinforcement learning converts compute into problem-specific depth
actionability: reference
confidence: very_high
shelf_life: evergreen
status: active
tags:
  - test-time-rl
  - inference-compute
  - scaling
  - compute-depth-tradeoff
  - problem-adaptation
sources:
  - type: blog
    title: >-
      Olympiad-level formal mathematical reasoning with reinforcement learning -
      Nature
    url: 'https://www.nature.com/articles/s41586-025-09833-y'
date_extracted: '2026-03-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    AlphaProof's TTRL adds 15 percentage points to solve rates beyond tree
    search scaling, enabling solutions to problems that exhaustive search at any
    budget cannot crack.
  standard: >-
    AlphaProof introduces a fundamental insight about compute scaling: there are
    two orthogonal axes. Tree search (hours of TPU compute) explores more proof
    paths — analogous to breadth. TTRL (days of TPU compute) generates variants
    of the target problem, trains the model on them, then attempts the original
    — analogous to building depth through practice. TTRL boosted solve rates by
    15 percentage points beyond tree search alone on both formal-imo and
    PutnamBench-test. This mirrors how human mathematicians learn: you do not
    just think harder about a problem (search), you study related problems to
    build intuition (adaptation). The distinction between thinking longer and
    learning more is emerging as a core axis of AI capability scaling.
stance: >-
  Focused RL training at inference time on generated problem variants unlocks
  solutions that extensive tree search alone cannot find, creating a new axis of
  compute scaling.
related:
  - INS-260322-888D
  - INS-260321-BFA3
  - INS-260325-8065
  - INS-260329-8D70
  - INS-260329-CBF6
  - INS-260330-77E2
  - INS-260329-4986
  - INS-260329-A171
  - INS-260329-01F2
  - INS-260329-A86F
evidence:
  - id: INS-260329-8D70
    type: CHALLENGES
    classified_at: '2026-04-02'
  - id: INS-260329-CBF6
    type: TRANSFERS_TO
    classified_at: '2026-04-02'
  - id: INS-260329-4986
    type: TRANSFERS_TO
    classified_at: '2026-04-02'
  - id: INS-260329-A86F
    type: TRANSFERS_TO
    classified_at: '2026-04-02'
---
AlphaProof introduces a fundamental insight about compute scaling: there are two orthogonal axes. Tree search (hours of TPU compute) explores more proof paths — analogous to breadth. TTRL (days of TPU compute) generates variants of the target problem, trains the model on them, then attempts the original — analogous to building depth through practice. TTRL boosted solve rates by 15 percentage points beyond tree search alone on both formal-imo and PutnamBench-test. This mirrors how human mathematicians learn: you do not just think harder about a problem (search), you study related problems to build intuition (adaptation). The distinction between thinking longer and learning more is emerging as a core axis of AI capability scaling.
