---
id: INS-260625-B5A8
domain: ai-development
topic: training-dynamics
title: >-
  Training on the simplest task variant can generalize better than curriculum
  learning
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - curriculum-learning
  - generalization
  - training-data
  - rl
  - data-strategy
sources:
  - type: youtube
    title: 'Stop Making Models Bigger, Make Them Behave — Kobie Crawford, Snorkel'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=TNwJ1LMiENk'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Across single-table-only, mixed, and curriculum (single-then-multi) training
    regimes, single-table-only gave the greatest uplift — and still produced a
    similar ~2x jump (13.9% to 26.6%) on the harder multi-table benchmark it
    never trained on.
  standard: >-
    The Snorkel/Berkeley team compared three RL training regimes for FinQA:
    train on single-table questions only, train on the full mix of single- and
    multi-table, or run curriculum learning that starts simple and progressively
    adds multi-table difficulty. The intuitive bet is on the mix or the
    curriculum. The surprise was that single-table-only training yielded the
    greatest uplift.


    More striking, the simplest regime generalized: performance on the harder
    FinQA-reasoning benchmark — which requires multi-table queries the model
    never trained on — jumped 13.9% to 26.6%, a similar doubling. The mechanism
    the talk proposes is that the core failing behavior was tool discipline
    (discover tables, inspect schema, correct on error), and that behavior is
    shared across single- and multi-table tasks. Fix the core failure mode on
    the simplest cases and the fix transfers to harder ones, because the
    bottleneck was never task complexity — it was a transferable behavior.


    The reusable lesson: when a single behavioral deficit underlies failures
    across difficulty levels, training narrowly on the cleanest examples of that
    behavior can beat elaborate difficulty-scheduling, and the gains generalize
    upward. Marked reference/medium because it's one compelling result, not yet
    a generalized law — but it's a strong prior to test before defaulting to
    curriculum learning. Pairs with the diagnose-the-behavior framing in
    [[give-agents-verification-criteria-and-self-verification-tools-so-they-return-a-c]].
stance: >-
  Training only on the simplest version of a task can yield a larger uplift —
  and generalize to harder variants — than mixing difficulties or staging a
  curriculum.
related:
  - INS-260625-8C41
  - INS-260625-9B0C
  - INS-260410-CB70
  - INS-260403-B73D
  - INS-260323-4E12
---
The Snorkel/Berkeley team compared three RL training regimes for FinQA: train on single-table questions only, train on the full mix of single- and multi-table, or run curriculum learning that starts simple and progressively adds multi-table difficulty. The intuitive bet is on the mix or the curriculum. The surprise was that single-table-only training yielded the greatest uplift.

More striking, the simplest regime generalized: performance on the harder FinQA-reasoning benchmark — which requires multi-table queries the model never trained on — jumped 13.9% to 26.6%, a similar doubling. The mechanism the talk proposes is that the core failing behavior was tool discipline (discover tables, inspect schema, correct on error), and that behavior is shared across single- and multi-table tasks. Fix the core failure mode on the simplest cases and the fix transfers to harder ones, because the bottleneck was never task complexity — it was a transferable behavior.

The reusable lesson: when a single behavioral deficit underlies failures across difficulty levels, training narrowly on the cleanest examples of that behavior can beat elaborate difficulty-scheduling, and the gains generalize upward. Marked reference/medium because it's one compelling result, not yet a generalized law — but it's a strong prior to test before defaulting to curriculum learning. Pairs with the diagnose-the-behavior framing in [[give-agents-verification-criteria-and-self-verification-tools-so-they-return-a-c]].
