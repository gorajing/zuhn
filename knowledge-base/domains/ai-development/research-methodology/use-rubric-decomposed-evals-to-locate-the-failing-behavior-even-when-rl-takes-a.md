---
id: INS-260625-0A08
domain: ai-development
topic: research-methodology
title: >-
  Use rubric-decomposed evals to locate the failing behavior, even when RL takes
  a single reward
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - evaluation
  - rubrics
  - failure-analysis
  - rl
  - data-generation
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
    Break a model response's rightness into many individually-answerable rubric
    questions to pinpoint where it actually fails, then generate targeted data
    to fix that behavior — while GRPO still consumes only the single pass/fail
    reward.
  standard: >-
    A binary correct/incorrect signal is what RL consumes (GRPO works with a
    single value), but it's a terrible diagnostic: a wrong final answer tells
    you nothing about which of the many possible behaviors broke. Snorkel's
    practice is to build rubrics into evaluation — decomposing the rightness or
    wrongness of a response into a full list of sub-questions, each answerable
    on its own.


    Looking at each sub-question turns a black-box failure into a map. Among all
    the arenas where a response could go wrong, the rubric localizes the actual
    problem — in FinQA, it surfaced that the failure lived in tool discipline
    rather than reasoning or arithmetic. That localization then drives data
    strategy: you generate datasets aimed at the specific behavior the rubric
    flags, rather than blindly adding more of everything.


    The key architectural separation: the rubric's rich, multi-dimensional
    feedback is for human analysis and data-generation decisions; the RL loop
    still reduces to a single scalar reward. You don't need to cram the rubric
    into the reward function — you use it upstream to decide what to train on.
    This is a reusable two-layer eval pattern: a behavioral/diagnostic layer for
    steering, and a scalar layer for optimization. Connects to
    [[production-ai-evaluation-needs-a-behavioral-layer-not-just-format-and-semantic-c]].
stance: >-
  Decomposing eval correctness into a rubric of sub-questions reveals which
  specific behavior is failing and what data to generate, even though the RL
  signal itself is only a single scalar.
related:
  - INS-260605-780C
  - INS-260625-0961
  - INS-260403-0803
  - INS-260625-13F0
  - INS-260627-8A88
  - INS-260627-8392
---
A binary correct/incorrect signal is what RL consumes (GRPO works with a single value), but it's a terrible diagnostic: a wrong final answer tells you nothing about which of the many possible behaviors broke. Snorkel's practice is to build rubrics into evaluation — decomposing the rightness or wrongness of a response into a full list of sub-questions, each answerable on its own.

Looking at each sub-question turns a black-box failure into a map. Among all the arenas where a response could go wrong, the rubric localizes the actual problem — in FinQA, it surfaced that the failure lived in tool discipline rather than reasoning or arithmetic. That localization then drives data strategy: you generate datasets aimed at the specific behavior the rubric flags, rather than blindly adding more of everything.

The key architectural separation: the rubric's rich, multi-dimensional feedback is for human analysis and data-generation decisions; the RL loop still reduces to a single scalar reward. You don't need to cram the rubric into the reward function — you use it upstream to decide what to train on. This is a reusable two-layer eval pattern: a behavioral/diagnostic layer for steering, and a scalar layer for optimization. Connects to [[production-ai-evaluation-needs-a-behavioral-layer-not-just-format-and-semantic-c]].
