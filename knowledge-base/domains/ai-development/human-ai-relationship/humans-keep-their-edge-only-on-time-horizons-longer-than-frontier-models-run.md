---
id: INS-260410-E042
domain: ai-development
topic: human-ai-relationship
title: Humans keep their edge only on time horizons longer than frontier models run
actionability: reference
confidence: high
shelf_life: time-sensitive
status: active
tags:
  - human-ai-gap
  - time-horizons
  - capabilities
  - benchmarks
sources:
  - type: blog
    title: Designing AI resistant technical evaluations
    url: 'https://www.anthropic.com/engineering/AI-resistant-technical-evaluations'
date_extracted: '2026-04-10'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    On Anthropic's accelerator take-home, humans beat Claude only with unlimited
    time; inside a 2-hour window, Opus 4.5 matched the best humans.
  standard: >-
    The published cycle counts tell a clear story: Opus 4.5 in a casual session
    matched the best 2-hour human performance; in a harness it dropped further;
    with 11.5 hours of compute it hit 1487 cycles, beating all prior human
    2-hour attempts. The fastest ever human solution still wins—but only with
    unlimited time. Hume frames this explicitly: 'Human experts retain an
    advantage over current models at sufficiently long time horizons.'


    This matters for how to think about AI-versus-human capability claims
    generally. The relevant question isn't 'can the model do the task?' but 'at
    what time budget does the model beat the median expert? The strongest
    expert? Ever?' For hiring, economic impact, and capability forecasting,
    these three thresholds can differ by orders of magnitude and each moves
    independently as models improve.


    It also suggests a concrete evaluation design pattern: deliberately
    constrain candidates and models to different time budgets. Hume's open
    challenge takes this approach—release the old test for unlimited-time human
    attempts while using a different (harder) test for the 2-hour interview.
stance: >-
  Humans reliably beat frontier models on technical problems only when given
  substantially longer time budgets than the models are allowed.
related:
  - INS-260325-9C2F
  - INS-260403-841F
  - INS-260412-EED1
  - INS-260412-4499
  - INS-260403-7CD3
---
The published cycle counts tell a clear story: Opus 4.5 in a casual session matched the best 2-hour human performance; in a harness it dropped further; with 11.5 hours of compute it hit 1487 cycles, beating all prior human 2-hour attempts. The fastest ever human solution still wins—but only with unlimited time. Hume frames this explicitly: 'Human experts retain an advantage over current models at sufficiently long time horizons.'

This matters for how to think about AI-versus-human capability claims generally. The relevant question isn't 'can the model do the task?' but 'at what time budget does the model beat the median expert? The strongest expert? Ever?' For hiring, economic impact, and capability forecasting, these three thresholds can differ by orders of magnitude and each moves independently as models improve.

It also suggests a concrete evaluation design pattern: deliberately constrain candidates and models to different time budgets. Hume's open challenge takes this approach—release the old test for unlimited-time human attempts while using a different (harder) test for the 2-hour interview.
