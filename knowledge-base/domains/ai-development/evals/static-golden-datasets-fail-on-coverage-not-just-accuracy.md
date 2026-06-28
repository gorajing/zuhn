---
id: INS-260628-7A77
domain: ai-development
topic: evals
title: 'Static golden datasets fail on coverage, not just accuracy'
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - evaluation
  - coverage
  - golden-dataset
  - fuzzing
  - test-coverage
sources:
  - type: youtube
    title: 'Fuzzing in the GenAI Era — Leonard Tang, Haize Labs'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=OMGPvW8TBHc'
date_extracted: '2026-06-28'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Scoring 100% on a finite golden set tells you nothing about the inputs
    'around the corner' that you never tested.
  standard: >-
    The inherited eval paradigm — a human expert collects a finite, static set
    of inputs with ground-truth outputs, then you compare your app's outputs
    against them — predates deep learning and breaks down in the GenAI era for
    two reasons. The first is coverage: a static dataset only certifies behavior
    on exactly those points. Because GenAI apps are brittle, pushing 'just
    around the corner' to nearby inputs can tell a completely different story
    about real-world reliability, even when every unit test passes.


    The remedy is to treat evaluation as search rather than lookup: simulate
    large-scale stimuli, score the responses, and use that signal to guide the
    next round of probing, iterating until you surface bugs or exhaust a search
    budget (at which point you have earned some confidence to ship). The static
    dataset becomes a seed for exploration, not the certificate of correctness.
    This reframes 'do we pass our evals?' into 'how hard did we search before we
    stopped finding failures?'
stance: >-
  A static golden-dataset eval gives a false sense of robustness because it
  cannot cover the input space densely enough to expose brittle failures.
related:
  - INS-260627-6846
  - INS-260330-184C
  - INS-260329-4109
  - INS-260605-278E
  - INS-260605-9F5C
---
The inherited eval paradigm — a human expert collects a finite, static set of inputs with ground-truth outputs, then you compare your app's outputs against them — predates deep learning and breaks down in the GenAI era for two reasons. The first is coverage: a static dataset only certifies behavior on exactly those points. Because GenAI apps are brittle, pushing 'just around the corner' to nearby inputs can tell a completely different story about real-world reliability, even when every unit test passes.

The remedy is to treat evaluation as search rather than lookup: simulate large-scale stimuli, score the responses, and use that signal to guide the next round of probing, iterating until you surface bugs or exhaust a search budget (at which point you have earned some confidence to ship). The static dataset becomes a seed for exploration, not the certificate of correctness. This reframes 'do we pass our evals?' into 'how hard did we search before we stopped finding failures?'
