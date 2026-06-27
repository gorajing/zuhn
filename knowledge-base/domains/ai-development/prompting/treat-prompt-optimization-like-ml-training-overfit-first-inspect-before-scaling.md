---
id: INS-260627-54A4
domain: ai-development
topic: prompting
title: >-
  Treat prompt optimization like ML training: overfit first, inspect before
  scaling sampling
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - prompt-optimization
  - gepa
  - dspy
  - ml-workflow
  - debugging
  - cost
sources:
  - type: youtube
    title: "Judge the Judge: Building LLM Evaluators That Actually Work with GEPA —\_Mahmoud Mabrouk, Agenta AI"
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=X4dEHRzBLmc'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    These optimizers don't work out of the box on real problems; you debug them
    like ML — run small iterations, read the generated candidates and reflection
    traces, hand-tune the reflection template, and aim to overfit the training
    data before scaling up.
  standard: >-
    The biggest practical learning: GEPA-style optimization 'is not an algorithm
    you just take and it works from day one' except on toy examples — reaching a
    usable judge took many iterations and parameter tuning (batch size, calls
    per iteration, ~200-300 iterations per experiment). The disciplined workflow
    mirrors machine learning: (1) start with small iterations, instrument and
    visually inspect the reflection-LLM reasoning and the candidate prompts it
    generates before committing to large sampling runs; (2) customize the
    reflection/refinement template to inject useful priors (here: telling it
    it's judging an airline support agent and should derive real policy rules
    from the verdict-vs-ground-truth gap) — the default template underperformed;
    (3) deliberately overfit the training data first, treating success as 'make
    it work,' not 'run it purely.' The Pareto-frontier reaching 100% training
    accuracy meant a per-task solver existed for every case; the unsolved hard
    part was merging candidates into one prompt that handles everything.


    Two cost/model caveats: smaller/cheaper models (GPT-4o-mini, nano, etc.)
    failed as both judge and refiner on complex policy logic, so use a stronger
    model for refinement and a cheaper one for the high-volume judge; and beware
    token cost — even small experiments ran $200-300 because trajectories are
    long, making the optimization investment worthwhile mainly when it lowers
    recurring online-eval cost.
stance: >-
  Prompt-optimization algorithms like GEPA should be driven like ML training —
  deliberately overfit the training set first and inspect reasoning on small
  runs before scaling sampling — rather than launched as a turnkey black box.
related:
  - INS-260325-5B28
  - INS-260329-D062
  - INS-260330-B4F1
  - INS-260323-AF96
  - INS-260402-3C79
  - PRI-260406-8FDF
  - INS-260605-B1FC
  - INS-260625-2F7C
  - INS-260625-DF0F
  - INS-260627-2863
---
The biggest practical learning: GEPA-style optimization 'is not an algorithm you just take and it works from day one' except on toy examples — reaching a usable judge took many iterations and parameter tuning (batch size, calls per iteration, ~200-300 iterations per experiment). The disciplined workflow mirrors machine learning: (1) start with small iterations, instrument and visually inspect the reflection-LLM reasoning and the candidate prompts it generates before committing to large sampling runs; (2) customize the reflection/refinement template to inject useful priors (here: telling it it's judging an airline support agent and should derive real policy rules from the verdict-vs-ground-truth gap) — the default template underperformed; (3) deliberately overfit the training data first, treating success as 'make it work,' not 'run it purely.' The Pareto-frontier reaching 100% training accuracy meant a per-task solver existed for every case; the unsolved hard part was merging candidates into one prompt that handles everything.

Two cost/model caveats: smaller/cheaper models (GPT-4o-mini, nano, etc.) failed as both judge and refiner on complex policy logic, so use a stronger model for refinement and a cheaper one for the high-volume judge; and beware token cost — even small experiments ran $200-300 because trajectories are long, making the optimization investment worthwhile mainly when it lowers recurring online-eval cost.
