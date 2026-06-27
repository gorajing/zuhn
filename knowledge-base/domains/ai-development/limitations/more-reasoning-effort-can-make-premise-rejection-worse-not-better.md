---
id: INS-260626-BC32
domain: ai-development
topic: limitations
title: 'More reasoning effort can make premise-rejection worse, not better'
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - reasoning-models
  - test-time-compute
  - training-incentives
  - premise-rejection
  - inverse-scaling
sources:
  - type: youtube
    title: 'What Do Models Still Suck At? - Peter Gostev, Arena.ai, BullshitBench'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=R7A8rX-09Zw'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    On nonsense questions, high-reasoning runs frequently perform worse than
    no-reasoning runs — the model flags the premise once, then spends 20
    paragraphs trying to solve the unsolvable anyway.
  standard: >-
    The folk remedy for a model failing a tricky task is 'just crank up the
    reasoning.' On BullshitBench this is reversed: high reasoning often makes
    pushback worse, not better. Reading GPT-5-class traces, Gostev found the
    model would note in one line that the question doesn't make sense, then
    spend twenty paragraphs trying to solve it anyway, sometimes circling back
    to acknowledge it's nonsense but still attempting an answer.


    The hypothesized cause is a training-incentive mismatch: models were heavily
    optimized to solve the task at any cost, with little training signal
    rewarding the choice to *not* solve. Extra reasoning tokens amplify the
    solve-at-any-cost drive rather than the judgment to abstain. Gostev links
    this to a familiar agent failure — handing an agent a task meant for a
    different project, and watching it dutifully go do something wrong rather
    than flag the mismatch.


    The lesson for builders: don't assume test-time compute is a universal
    quality dial. For tasks where correctly refusing or reframing is the right
    answer, more reasoning can actively hurt, and abstention behavior should be
    evaluated separately from problem-solving accuracy.
stance: >-
  Cranking up reasoning/thinking effort often degrades a model's ability to
  reject a bad premise because it was trained to solve the task at any cost.
related:
  - INS-260403-1448
  - INS-260605-CF15
  - INS-260625-35C5
  - INS-260625-5184
  - INS-260626-BCC3
  - INS-260625-25BF
  - INS-260410-939B
  - INS-260625-E9A9
  - INS-260505-A413
---
The folk remedy for a model failing a tricky task is 'just crank up the reasoning.' On BullshitBench this is reversed: high reasoning often makes pushback worse, not better. Reading GPT-5-class traces, Gostev found the model would note in one line that the question doesn't make sense, then spend twenty paragraphs trying to solve it anyway, sometimes circling back to acknowledge it's nonsense but still attempting an answer.

The hypothesized cause is a training-incentive mismatch: models were heavily optimized to solve the task at any cost, with little training signal rewarding the choice to *not* solve. Extra reasoning tokens amplify the solve-at-any-cost drive rather than the judgment to abstain. Gostev links this to a familiar agent failure — handing an agent a task meant for a different project, and watching it dutifully go do something wrong rather than flag the mismatch.

The lesson for builders: don't assume test-time compute is a universal quality dial. For tasks where correctly refusing or reframing is the right answer, more reasoning can actively hurt, and abstention behavior should be evaluated separately from problem-solving accuracy.
