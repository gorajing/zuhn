---
id: PRI-260411-14DC
domain: ai-development
title: >-
  The quality of an agent's verifier sets the ceiling on its useful autonomy —
  separate generation from evaluation and make the evaluator independently
  tunable
summary: >-
  An unsupervised agent can only be as good as its ability to check its own
  work. A separate evaluator agent is far more tractable to tune toward
  skepticism than convincing a generator to self-criticize. Generator-critic
  loops should use condition-based exit rather than fixed iteration counts.
  Traces are to agents what source code is to software — the actual source of
  truth for debugging. Subjective quality becomes gradable when you write down
  the evaluation principles explicitly.
confidence: high
supporting_insights:
  - INS-260410-3601
  - INS-260410-AA6E
  - INS-260410-85AD
  - INS-260405-6A0C
  - INS-260327-9D50
  - INS-260410-E4C4
  - INS-260411-8034
  - INS-260320-1B10
supporting_count: 8
tags:
  - verification
  - generator-critic
  - evaluator-agents
  - autonomy-ceiling
  - traces
date_created: '2026-04-11'
last_reviewed: '2026-04-11'
resolutions:
  one_line: >-
    The quality of an agent's verifier sets the ceiling on its useful autonomy —
    separate generation from evaluation and make the evaluator independently
    tunable
  standard: >-
    An unsupervised agent can only be as good as its ability to check its own
    work. A separate evaluator agent is far more tractable to tune toward
    skepticism than convincing a generator to self-criticize. Generator-critic
    loops should use condition-based exit rather than fixed iteration counts.
    Traces are to agents what source code is to software — the actual source of
    truth for debugging. Subjective quality becomes gradable when you write down
    the evaluation principles explicitly.
lineage:
  compressed_at: '2026-04-11'
  source_insights:
    - id: INS-260410-3601
      relation: SUPPORTS
    - id: INS-260410-AA6E
      relation: SUPPORTS
    - id: INS-260410-85AD
      relation: EXTENDS
    - id: INS-260405-6A0C
      relation: SUPPORTS
    - id: INS-260327-9D50
      relation: EXTENDS
    - id: INS-260410-E4C4
      relation: REFINES
    - id: INS-260411-8034
      relation: SUPPORTS
    - id: INS-260320-1B10
      relation: SUPPORTS
  compression_trigger: 'COMPRESS flag — 109 insights, 1 principle'
embedded: true
embedding_model: "nomic-embed-text"
---
An unsupervised agent can only be as good as its ability to check its own work. A separate evaluator agent is far more tractable to tune toward skepticism than convincing a generator to self-criticize. Generator-critic loops should use condition-based exit rather than fixed iteration counts. Traces are to agents what source code is to software — the actual source of truth for debugging. Subjective quality becomes gradable when you write down the evaluation principles explicitly.
