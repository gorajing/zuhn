---
id: INS-260627-0818
domain: ai-development
topic: agent-evals
title: Evaluate ambiguous instructions by measuring disambiguation quality separately
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - evals
  - ambiguity
  - instruction-following
  - disambiguation
  - metrics
sources:
  - type: blog
    title: >-
      Masked IRL: LLM-Guided Reward Disambiguation from Demonstrations and
      Language
    url: 'https://arxiv.org/html/2511.14565'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Masked IRL reports instruction accuracy and mask precision/recall/F1 before
    tying disambiguation to robot reward performance.
  standard: >-
    The paper does not only report that trajectories improved. It separately
    evaluates whether the LLM's clarified command matches the ground-truth
    referent/relation and whether the resulting state mask improves precision,
    recall, and F1. That matters because downstream success can hide why a
    system worked or failed. The general eval pattern is to decompose
    ambiguous-intent handling into at least two gates: did the model infer the
    right interpretation, and did the planner or learner exploit that
    interpretation?
  deep: >-
    Agent builders should borrow this structure for vague requests. Before
    scoring task completion, score whether the agent identified the right
    objective, constraints, exclusions, and relevant artifacts. Otherwise an
    agent can succeed accidentally or fail in a way that looks like execution
    failure when the real defect was intent parsing.
subtopic: ambiguous-instructions
stance: >-
  Systems that handle vague user intent need an eval for the clarification step
  itself, not only downstream task success.
related:
  - INS-260627-6A8B
  - INS-260413-A950
  - INS-260627-9068
  - INS-260603-11DB
  - INS-260524-5173
---
The paper does not only report that trajectories improved. It separately evaluates whether the LLM's clarified command matches the ground-truth referent/relation and whether the resulting state mask improves precision, recall, and F1. That matters because downstream success can hide why a system worked or failed. The general eval pattern is to decompose ambiguous-intent handling into at least two gates: did the model infer the right interpretation, and did the planner or learner exploit that interpretation?
