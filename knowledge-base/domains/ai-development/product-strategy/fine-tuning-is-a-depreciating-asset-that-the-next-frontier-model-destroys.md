---
id: INS-260626-C412
domain: ai-development
topic: product-strategy
title: Fine-tuning is a depreciating asset that the next frontier model destroys
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - fine-tuning
  - bitter-lesson
  - model-agnostic
  - frontier-models
  - moat
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
    Fine-tuning locks you to a model that the next frontier release makes
    obsolete; a harness that sits on top inherits every future model's gains for
    free.
  standard: >-
    The 'fine-tuning trap' is that you spend millions (sometimes hundreds of
    millions) collecting data and training on top of today's best model, and the
    moment the next frontier model ships, your fine-tuned artifact is worse than
    the new base model out of the box. You either re-pay the full cost or go out
    of business — and you can never catch the labs. Fischer calls being
    protected from this 'vaccinated against the bitter lesson.'


    The alternative is to keep your differentiation in a harness — code,
    prompts, reasoning strategies, and data assembled around one or more LLMs —
    rather than in the weights. A harness is forward-compatible: when a stronger
    model arrives you swap it in and the same harness produces an even bigger
    performance bump, with no retraining. Fischer's metaphor is 'stilts':
    whatever model is tallest, you stand on it and end up taller still.


    The strategic lesson for any company building on LLMs: treat frontier labs
    as the foundation you stand on, not competitors you race. Invest engineering
    effort in the layer that survives model turnover (orchestration, reasoning
    structure, evaluation) and avoid sinking capital into anything — like
    fine-tuned weights — whose value resets to zero on the next release.
stance: >-
  Building a model-agnostic harness on top of frontier LLMs beats fine-tuning
  because fine-tuned weights are obsoleted by every new model release.
related:
  - PRI-260426-890F
  - INS-260501-BBB7
  - INS-260605-E193
  - INS-260605-8F42
  - INS-260625-84D0
  - INS-260625-93FC
  - INS-260625-2563
  - INS-260625-1B69
  - INS-260410-9DB0
  - INS-260627-AA29
---
The 'fine-tuning trap' is that you spend millions (sometimes hundreds of millions) collecting data and training on top of today's best model, and the moment the next frontier model ships, your fine-tuned artifact is worse than the new base model out of the box. You either re-pay the full cost or go out of business — and you can never catch the labs. Fischer calls being protected from this 'vaccinated against the bitter lesson.'

The alternative is to keep your differentiation in a harness — code, prompts, reasoning strategies, and data assembled around one or more LLMs — rather than in the weights. A harness is forward-compatible: when a stronger model arrives you swap it in and the same harness produces an even bigger performance bump, with no retraining. Fischer's metaphor is 'stilts': whatever model is tallest, you stand on it and end up taller still.

The strategic lesson for any company building on LLMs: treat frontier labs as the foundation you stand on, not competitors you race. Invest engineering effort in the layer that survives model turnover (orchestration, reasoning structure, evaluation) and avoid sinking capital into anything — like fine-tuned weights — whose value resets to zero on the next release.
