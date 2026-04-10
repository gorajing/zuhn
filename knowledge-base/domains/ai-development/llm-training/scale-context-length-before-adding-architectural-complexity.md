---
id: INS-260410-656B
domain: ai-development
topic: llm-training
title: Scale context length before adding architectural complexity
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - baselines
  - context-length
  - hyperparameters
  - scaling
  - free-lunch
sources:
  - type: youtube
    title: 'Building makemore Part 5: Building a WaveNet'
    author: Andrej Karpathy
    url: 'https://www.youtube.com/watch?v=t3YJ5hKiMQ0'
date_extracted: '2026-04-10'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Going from 3 to 8 characters of context in the same flat MLP moved
    validation loss from 2.10 to 2.02 — a bigger gain than the later
    hierarchical WaveNet rewrite produced at matched parameter count.
  standard: >-
    Before implementing WaveNet, Karpathy runs a control: he keeps the original
    flat MLP architecture but bumps the context window from 3 to 8 characters.
    With no other changes, validation loss drops from 2.10 to 2.02 — a
    meaningful improvement from a one-line edit. Then, after implementing the
    full hierarchical WaveNet-style model with the same parameter budget, he
    gets 2.027, essentially matching the flat baseline. The architectural
    sophistication contributed ~zero until he also scaled up embedding size and
    hidden width, eventually reaching 1.993.


    This is a recurring pattern in deep learning: the 'boring' knobs (context
    length, model width, data size, training steps) frequently outperform the
    clever architectural tricks people get excited about. It's the same lesson
    the scaling-laws literature taught at a much larger scale — bigger, longer,
    more data beats cleverer.


    Practical implication: when you're tempted to implement a sophisticated new
    architecture, first check whether scaling up the simplest possible baseline
    along its cheapest axis captures most of the gain. If a one-line change to
    block size closes 80% of the gap, the fancy architecture needs to justify
    itself against that baseline, not against the original. Many published
    improvements would evaporate under this test.
stance: >-
  Simply extending the input context window is often a bigger performance win
  than architectural sophistication, and should be tried first.
related:
  - INS-260320-CE36
  - INS-260410-34F5
  - INS-260409-3230
  - INS-260410-699C
  - INS-260409-ADD0
---
Before implementing WaveNet, Karpathy runs a control: he keeps the original flat MLP architecture but bumps the context window from 3 to 8 characters. With no other changes, validation loss drops from 2.10 to 2.02 — a meaningful improvement from a one-line edit. Then, after implementing the full hierarchical WaveNet-style model with the same parameter budget, he gets 2.027, essentially matching the flat baseline. The architectural sophistication contributed ~zero until he also scaled up embedding size and hidden width, eventually reaching 1.993.

This is a recurring pattern in deep learning: the 'boring' knobs (context length, model width, data size, training steps) frequently outperform the clever architectural tricks people get excited about. It's the same lesson the scaling-laws literature taught at a much larger scale — bigger, longer, more data beats cleverer.

Practical implication: when you're tempted to implement a sophisticated new architecture, first check whether scaling up the simplest possible baseline along its cheapest axis captures most of the gain. If a one-line change to block size closes 80% of the gap, the fancy architecture needs to justify itself against that baseline, not against the original. Many published improvements would evaporate under this test.
