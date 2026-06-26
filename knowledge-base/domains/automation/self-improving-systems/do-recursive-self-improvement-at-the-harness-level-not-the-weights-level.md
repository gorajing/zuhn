---
id: INS-260626-E990
domain: automation
topic: self-improving-systems
title: 'Do recursive self-improvement at the harness level, not the weights level'
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - recursive-self-improvement
  - meta-system
  - automation
  - optimization
  - agi
  - harness
sources:
  - type: youtube
    title: The Powerful Alternative To Fine-Tuning
    author: Y Combinator
    url: 'https://www.youtube.com/watch?v=UPGB-hsAoVY'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Most RSI proposals require training a new model per improvement step
    (hundreds of millions, months); doing it at the harness level skips the
    weights entirely and runs in days for under six figures.
  standard: >-
    Fischer frames recursive self-improvement as AI's 'holy grail' but argues
    the expensive path is the one the big labs take: train a new model for every
    step of self-improvement, at hundreds of millions of dollars and months per
    cycle. Poetiq's bet is that you can run the same loop far faster and cheaper
    by improving the system that sits on top of fixed models — a 'meta-system'
    whose outputs are harnesses that solve hard problems.


    Because the loop is an automated optimization process over code/prompts/data
    rather than gradient descent over billions of weights, the cost structure
    collapses: he reports optimization runs under $100k against tasks where a
    single foundation-model training run is hundreds of millions. The
    meta-system itself improves over time, and as the underlying models improve,
    the effective S-curve keeps shifting higher — a second axis of improvement
    layered on top of the labs' own progress.


    The transferable idea is architectural: when you want a system to get better
    automatically, locate the improvement loop at the cheapest layer that still
    moves the metric. For LLM applications that layer is increasingly the
    orchestration/harness, not the model weights — which makes RSI accessible to
    small teams who could never afford to retrain a frontier model.
stance: >-
  Recursive self-improvement is orders of magnitude cheaper and faster when
  applied to the harness around a model than to the model's weights.
related:
  - INS-260404-CE26
  - INS-260410-B0D6
  - INS-260625-8C41
  - PRI-260426-890F
  - INS-260410-9DB0
---
Fischer frames recursive self-improvement as AI's 'holy grail' but argues the expensive path is the one the big labs take: train a new model for every step of self-improvement, at hundreds of millions of dollars and months per cycle. Poetiq's bet is that you can run the same loop far faster and cheaper by improving the system that sits on top of fixed models — a 'meta-system' whose outputs are harnesses that solve hard problems.

Because the loop is an automated optimization process over code/prompts/data rather than gradient descent over billions of weights, the cost structure collapses: he reports optimization runs under $100k against tasks where a single foundation-model training run is hundreds of millions. The meta-system itself improves over time, and as the underlying models improve, the effective S-curve keeps shifting higher — a second axis of improvement layered on top of the labs' own progress.

The transferable idea is architectural: when you want a system to get better automatically, locate the improvement loop at the cheapest layer that still moves the metric. For LLM applications that layer is increasingly the orchestration/harness, not the model weights — which makes RSI accessible to small teams who could never afford to retrain a frontier model.
