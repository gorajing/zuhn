---
id: INS-260605-9CE2
domain: ai-development
topic: research-methodology
title: 'Decontaminate benchmarks with time-splits, not secrecy'
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - evaluation
  - benchmarks
  - data-contamination
  - coding-agents
sources:
  - type: youtube
    title: >-
      SWE-rebench: Lessons from Evaluating Coding Agents — Ibragim Badertdinov,
      Nebius
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=wcUJWP6WpGM'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Use freshly collected post-training-cutoff problems each evaluation cycle,
    because any released benchmark eventually leaks into the next model's
    pre-training set.
  standard: >-
    Most benchmarks publish their questions and reference solutions at release,
    which means that data implicitly or explicitly becomes part of the next
    generation of models' pre-training corpus, inflating future scores.
    SWE-rebench addresses this by collecting only fresh problems from the
    previous month before assessing model capabilities, treating decontamination
    as a continuous time-split discipline rather than a one-time cleaning step.
    The practical implication for anyone building an open, trustworthy eval is
    that the benchmark must be a living pipeline that ingests new tasks on a
    rolling basis. A static public leaderboard's headline numbers should be read
    with suspicion once enough time has passed for its contents to be scraped
    and trained on.
stance: >-
  The only reliable way to keep a public coding benchmark uncontaminated is to
  evaluate exclusively on problems created after the models were trained.
related:
  - INS-260410-47AE
  - INS-260605-B60D
  - PRI-260323-8E89
  - INS-260505-4426
  - INS-260327-5D5F
  - INS-260404-CE26
---
Most benchmarks publish their questions and reference solutions at release, which means that data implicitly or explicitly becomes part of the next generation of models' pre-training corpus, inflating future scores. SWE-rebench addresses this by collecting only fresh problems from the previous month before assessing model capabilities, treating decontamination as a continuous time-split discipline rather than a one-time cleaning step. The practical implication for anyone building an open, trustworthy eval is that the benchmark must be a living pipeline that ingests new tasks on a rolling basis. A static public leaderboard's headline numbers should be read with suspicion once enough time has passed for its contents to be scraped and trained on.
