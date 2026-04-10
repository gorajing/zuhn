---
id: INS-260410-B9A6
domain: ai-development
topic: model-architecture
title: 'Cortex may do omnidirectional inference, not next-token prediction'
actionability: inspiration
confidence: low
shelf_life: evergreen
status: active
tags:
  - energy-based-models
  - inference
  - cortex
  - probabilistic-ai
  - yann-lecun
sources:
  - type: youtube
    title: Adam Marblestone – AI is missing something fundamental about the brain
    author: Dwarkesh Patel
    url: 'https://www.youtube.com/watch?v=_9V_Hbe-N1A'
date_extracted: '2026-04-10'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Any cortical area can clamp any subset of variables and sample from any
    other subset — a generality LLMs only emulate at the context-window level.
  standard: >-
    LLMs do a single, directional computation: given prior tokens, predict the
    next. They can emulate masked inference at inference time through prompting
    tricks, but it's not native — the forward pass only amortizes one direction.
    The cortex, by Marblestone's account (and close to Yann LeCun's
    energy-based-model view), may natively support clamping arbitrary subsets of
    variables and sampling from any other subset.


    This matters because much of cognition — cross-modal prediction (vision from
    sound), counterfactual reasoning, filling in missing context — naturally
    expresses as 'given these variables fixed, infer those.' An architecture
    that amortizes only one inference direction is paying a generality tax that
    becomes more visible as tasks get harder.


    Specific bets this implies: energy-based models, JEPA-style architectures,
    and training regimes that explicitly randomize which variables are
    masked/clamped (beyond standard MLM) may capture something current
    transformers miss. If true, it's an architectural gap, not just a data or
    scale gap.
stance: >-
  The cortex is natively built to predict any subset of variables from any other
  subset, which is a fundamentally more flexible inference primitive than the
  LLM conditional-on-context pattern.
related:
  - INS-260321-3967
  - INS-260325-D4F6
  - INS-260403-9D8A
  - INS-260330-B539
  - INS-260403-4672
---
LLMs do a single, directional computation: given prior tokens, predict the next. They can emulate masked inference at inference time through prompting tricks, but it's not native — the forward pass only amortizes one direction. The cortex, by Marblestone's account (and close to Yann LeCun's energy-based-model view), may natively support clamping arbitrary subsets of variables and sampling from any other subset.

This matters because much of cognition — cross-modal prediction (vision from sound), counterfactual reasoning, filling in missing context — naturally expresses as 'given these variables fixed, infer those.' An architecture that amortizes only one inference direction is paying a generality tax that becomes more visible as tasks get harder.

Specific bets this implies: energy-based models, JEPA-style architectures, and training regimes that explicitly randomize which variables are masked/clamped (beyond standard MLM) may capture something current transformers miss. If true, it's an architectural gap, not just a data or scale gap.
