---
id: INS-260605-04E7
domain: ai-development
topic: system-building
title: Build the simple version first because models default to verbose complexity
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - simplicity
  - yagni
  - feedback-loop
  - model-bias
  - over-engineering
sources:
  - type: youtube
    title: >-
      Bounded Autonomy: Between Free Will and Determinism — Angus J. McLean,
      Oliver
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=t4359sKBu4w'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Don't use the 'power of the gods' just because you have it — models tend
    toward complexity, so the simplest working version usually wins by 10-100x.
  standard: >-
    McLean recounts building an elaborate CV-generation application that worked
    but was beaten — by his own estimate a 100x improvement — by 'four simple
    letters: HTML.' His generalization: models are naturally verbose and 'tend
    towards complexity,' reliably suggesting the most complicated solution, so
    following their lead wastes tokens and engineering effort. The discipline is
    to build a simple version that works first and let 'your ideas collide with
    reality fast.' He extends the agent community's 'shorten the feedback loop'
    mantra to product-building itself: shorten your feedback loop with reality,
    not just with the model. The practical rule is to treat the model's first
    elaborate suggestion as a smell and actively search for the dumbest thing
    that could work.
stance: >-
  A trivially simple solution usually beats the elaborate one the model
  proposes, because models are biased toward verbose, complex answers.
related:
  - INS-260330-798D
  - INS-260403-BB23
  - INS-260412-3C64
  - INS-260330-4AD5
  - INS-260410-7292
  - INS-260327-C962
---
McLean recounts building an elaborate CV-generation application that worked but was beaten — by his own estimate a 100x improvement — by 'four simple letters: HTML.' His generalization: models are naturally verbose and 'tend towards complexity,' reliably suggesting the most complicated solution, so following their lead wastes tokens and engineering effort. The discipline is to build a simple version that works first and let 'your ideas collide with reality fast.' He extends the agent community's 'shorten the feedback loop' mantra to product-building itself: shorten your feedback loop with reality, not just with the model. The practical rule is to treat the model's first elaborate suggestion as a smell and actively search for the dumbest thing that could work.
