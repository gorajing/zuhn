---
id: INS-260605-4A94
domain: ai-development
topic: research-methodology
title: 'Report distributional metrics, not just mean resolved rate'
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - evaluation
  - metrics
  - pass-at-k
  - cost-efficiency
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
    Report tokens-per-problem, tries-per-problem, and multiple runs to expose
    pass@5 (potential) and pass-all-5 (reliability) alongside the mean.
  standard: >-
    To deliver real practical value, SWE-rebench reports far more than a single
    mean resolved metric: tokens per problem and price per problem for
    economics, tries per problem, and five runs per task to compute confidence
    intervals. Running each task five times yields two distinct and useful
    readings — pass@5, where solving a task in at least one run signals the
    model's potential ceiling, and pass-all-5, where success requires solving it
    in every run and thus measures reliability. These metrics answer different
    practitioner questions: a model with high pass@5 but low pass-all-5 is
    capable but inconsistent, which matters enormously for production where
    flakiness translates to incidents. A leaderboard that collapses everything
    to one number forces buyers to conflate capability, reliability, and cost.
stance: >-
  A single mean resolve rate hides the cost, reliability, and ceiling
  information that practitioners actually need to choose a model.
related:
  - INS-260402-8A7A
  - INS-260410-B3C2
  - INS-260501-6A56
  - INS-260514-3B3C
  - INS-260625-2906
  - INS-260410-988F
  - INS-260625-0961
  - INS-260605-D1F0
  - INS-260625-78EC
  - INS-260626-33BE
---
To deliver real practical value, SWE-rebench reports far more than a single mean resolved metric: tokens per problem and price per problem for economics, tries per problem, and five runs per task to compute confidence intervals. Running each task five times yields two distinct and useful readings — pass@5, where solving a task in at least one run signals the model's potential ceiling, and pass-all-5, where success requires solving it in every run and thus measures reliability. These metrics answer different practitioner questions: a model with high pass@5 but low pass-all-5 is capable but inconsistent, which matters enormously for production where flakiness translates to incidents. A leaderboard that collapses everything to one number forces buyers to conflate capability, reliability, and cost.
