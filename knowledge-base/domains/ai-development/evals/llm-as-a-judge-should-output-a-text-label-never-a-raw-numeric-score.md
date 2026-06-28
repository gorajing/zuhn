---
id: INS-260627-D28C
domain: ai-development
topic: evals
title: 'LLM-as-a-judge should output a text label, never a raw numeric score'
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - llm-as-judge
  - evaluation-design
  - tokenization
  - scoring
sources:
  - type: youtube
    title: 'Shipping AI That Works: An Evaluation Framework for PMs – Aman Khan, Arize'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=2HNSG990Ew8'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Have the judge classify into a text label (e.g. friendly/robotic) and map
    that label to a score afterward, because LLMs are unreliable at producing
    numbers directly.
  standard: >-
    A recurring request is to ask an LLM judge to 'just give me a 1–5 score.'
    Khan argues this produces unreliable results because of how tokens are
    represented — even PhD-level models are bad at numbers. The fix is to ground
    the judge in a categorical decision: give it a role, context, a goal, and a
    label set (e.g. toxic/not-toxic, friendly/robotic), and have it select a
    label. If your system needs a numeric score, map the label to a number after
    the fact, which is exactly what Arize does internally.


    The practical implication for anyone building evals or LLM-as-judge
    pipelines is to design the judge's output space as a small set of
    well-defined labels with examples, not a continuous or ordinal scale. This
    makes the judgment more repeatable and the failure modes more legible. It
    also pairs with reducing temperature and re-running the judge to profile
    variance when label flakiness appears.
stance: >-
  LLM judges should emit a discrete text label that you map to a score, not
  produce a number directly.
related:
  - INS-260410-4067
  - INS-260605-8789
  - INS-260605-0DB3
  - INS-260605-BEA5
  - INS-260605-33B4
  - INS-260605-EC51
  - INS-260627-7541
  - INS-260627-9981
  - INS-260628-337C
  - INS-260628-516E
---
A recurring request is to ask an LLM judge to 'just give me a 1–5 score.' Khan argues this produces unreliable results because of how tokens are represented — even PhD-level models are bad at numbers. The fix is to ground the judge in a categorical decision: give it a role, context, a goal, and a label set (e.g. toxic/not-toxic, friendly/robotic), and have it select a label. If your system needs a numeric score, map the label to a number after the fact, which is exactly what Arize does internally.

The practical implication for anyone building evals or LLM-as-judge pipelines is to design the judge's output space as a small set of well-defined labels with examples, not a continuous or ordinal scale. This makes the judgment more repeatable and the failure modes more legible. It also pairs with reducing temperature and re-running the judge to profile variance when label flakiness appears.
