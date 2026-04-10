---
id: INS-260410-76A3
domain: ai-development
topic: foundation-models
title: 'Scaling laws make capability a question of capital, not algorithms'
actionability: reference
confidence: high
shelf_life: time-sensitive
status: active
tags:
  - scaling-laws
  - capex
  - strategy
  - industry-dynamics
sources:
  - type: youtube
    title: '[1hr Talk] Intro to Large Language Models'
    author: Andrej Karpathy
    url: 'https://www.youtube.com/watch?v=zjkBMFhNj_g'
date_extracted: '2026-04-10'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Scaling laws convert LLM capability improvement into a predictable function
    of compute and data, turning AI progress into a capital-allocation problem.
  standard: >-
    Karpathy emphasizes that next-token prediction accuracy is a remarkably
    smooth function of only two variables — parameters N and training tokens D —
    with no observed plateau. Crucially, this accuracy correlates tightly with
    performance on downstream evals people actually care about. The strategic
    consequence is that algorithmic progress becomes a 'nice bonus' rather than
    the gating factor: if you can secure a bigger GPU cluster and more data, you
    are almost guaranteed a better model.


    This explains the compute gold rush as a rational response to a predictable
    curve rather than speculation. It also predicts market structure: any actor
    that can outspend others on training compute has a defensible capability
    advantage until the curve bends. Labs still invest heavily in algorithmic
    work, but as insurance against the curve bending and as efficiency
    multipliers, not as the primary source of capability gains.


    For operators, this creates a planning rule: model capability in N months is
    mostly a function of announced compute buildouts, not of research roadmaps.
    The caveat is time-sensitivity — if the scaling curve breaks or data runs
    out, the whole strategic logic inverts.
stance: >-
  Because LLM accuracy is a smooth predictable function of parameters and data,
  better models are guaranteed by spending more rather than by algorithmic
  breakthroughs.
related:
  - INS-260323-1643
  - INS-260329-644B
  - INS-260403-976C
  - INS-260405-DA33
  - INS-260403-3AE7
---
Karpathy emphasizes that next-token prediction accuracy is a remarkably smooth function of only two variables — parameters N and training tokens D — with no observed plateau. Crucially, this accuracy correlates tightly with performance on downstream evals people actually care about. The strategic consequence is that algorithmic progress becomes a 'nice bonus' rather than the gating factor: if you can secure a bigger GPU cluster and more data, you are almost guaranteed a better model.

This explains the compute gold rush as a rational response to a predictable curve rather than speculation. It also predicts market structure: any actor that can outspend others on training compute has a defensible capability advantage until the curve bends. Labs still invest heavily in algorithmic work, but as insurance against the curve bending and as efficiency multipliers, not as the primary source of capability gains.

For operators, this creates a planning rule: model capability in N months is mostly a function of announced compute buildouts, not of research roadmaps. The caveat is time-sensitivity — if the scaling curve breaks or data runs out, the whole strategic logic inverts.
