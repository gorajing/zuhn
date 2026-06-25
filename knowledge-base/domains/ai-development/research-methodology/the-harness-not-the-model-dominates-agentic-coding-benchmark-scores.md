---
id: INS-260605-4856
domain: ai-development
topic: research-methodology
title: 'The harness, not the model, dominates agentic coding benchmark scores'
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - evaluation
  - agents
  - benchmarks
  - coding
  - harness
sources:
  - type: youtube
    title: >-
      Agentic Evaluations at Scale, For Everybody — Nicholas Kang & Michael
      Aaron, Google DeepMind
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=Ubwb6NzegyA'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Frontier models cluster within a few points on SWE-bench Pro while the
    harness alone swings results ~22%, so you may be measuring the harness, not
    the model.
  standard: >-
    When the Kaggle team moved from evaluating bare models to evaluating agents,
    the central question became 'what are we actually testing?' They cite a
    Morph LLM analysis showing six frontier models landing within a couple
    percentage points of each other on SWE-bench Pro, while the choice of
    harness produces a ~22% difference in coding performance. The thing that
    supposedly varies (the model) barely moves the needle; the thing held
    implicit (the scaffolding, tool access, retry logic, context management)
    dominates.


    The practical consequence is that any agentic benchmark leaderboard is
    uninterpretable unless the harness is fixed and disclosed. If you are
    selecting a model for an agent product, benchmark your candidates inside
    YOUR harness rather than trusting public agent leaderboards — the public
    number conflates two variables you need separated. And if you author
    benchmarks, treat the harness as a first-class, version-pinned part of the
    test definition, not as plumbing.
stance: >-
  On agentic coding benchmarks the execution harness explains more score
  variance than the underlying model does, so most published model comparisons
  are actually harness comparisons.
related:
  - INS-260329-FC53
  - INS-260410-89D0
  - INS-260410-9DB0
  - INS-260605-E193
  - INS-260625-2563
  - INS-260605-1066
  - INS-260625-9096
---
When the Kaggle team moved from evaluating bare models to evaluating agents, the central question became 'what are we actually testing?' They cite a Morph LLM analysis showing six frontier models landing within a couple percentage points of each other on SWE-bench Pro, while the choice of harness produces a ~22% difference in coding performance. The thing that supposedly varies (the model) barely moves the needle; the thing held implicit (the scaffolding, tool access, retry logic, context management) dominates.

The practical consequence is that any agentic benchmark leaderboard is uninterpretable unless the harness is fixed and disclosed. If you are selecting a model for an agent product, benchmark your candidates inside YOUR harness rather than trusting public agent leaderboards — the public number conflates two variables you need separated. And if you author benchmarks, treat the harness as a first-class, version-pinned part of the test definition, not as plumbing.
