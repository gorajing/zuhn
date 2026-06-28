---
id: INS-260628-BDB0
domain: ai-development
topic: agent-evals
title: >-
  Eval maturity is measurable by three operational signals, not by having evals
  at all
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - evals
  - eval-maturity
  - ai-product
  - model-migration
  - user-feedback
sources:
  - type: youtube
    title: "Five hard earned lessons about Evals —\_Ankur Goyal, Braintrust"
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=a4BV0gGmXgA'
date_extracted: '2026-06-28'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Judge your eval program by three concrete capabilities — 24-hour model
    adoption, complaint-to-eval pipeline, and pre-ship offense — not by whether
    evals exist.
  standard: >-
    Most teams treat 'we have evals' as a binary milestone. Goyal reframes eval
    maturity as three observable behaviors. First, when a new frontier model
    drops, a mature team launches a product update incorporating it within 24
    hours (he cites Notion doing this every release); inability to do so means
    the eval harness isn't actually decoupled from the model. Second, when a
    user complains, there is a clear, low-friction path to fold that complaint
    into the eval set — otherwise valuable signal leaks 'into the ether.' Third,
    and most distinctively, evals are played on offense: unlike unit tests that
    only catch regressions, good evals tell you which use cases you can solve,
    and how well, before you ship anything.


    The practical value is diagnostic. These signals convert a vague 'do our
    evals work?' into a checklist you can fail honestly. If you can't hot-swap
    models, your code is coupled to a provider; fix the abstraction layer. If
    complaints don't become evals, you're flying blind on real-world
    distribution shift. If you only run evals to gate regressions, you're using
    a strategic instrument as a safety net. A team that's honest about which of
    the three it lacks knows exactly what to build next.
stance: >-
  An organization has competent evals only if it can swap in a new model within
  24 hours, convert any user complaint into an eval, and use evals offensively
  to scope what it can ship before shipping it.
related:
  - INS-260327-E07C
  - INS-260410-4EB9
  - INS-260605-A3F4
  - INS-260626-3105
  - INS-260626-B04D
  - INS-260627-D21B
  - INS-260625-8A55
  - INS-260625-D1F9
  - INS-260627-4072
  - INS-260628-A747
---
Most teams treat 'we have evals' as a binary milestone. Goyal reframes eval maturity as three observable behaviors. First, when a new frontier model drops, a mature team launches a product update incorporating it within 24 hours (he cites Notion doing this every release); inability to do so means the eval harness isn't actually decoupled from the model. Second, when a user complains, there is a clear, low-friction path to fold that complaint into the eval set — otherwise valuable signal leaks 'into the ether.' Third, and most distinctively, evals are played on offense: unlike unit tests that only catch regressions, good evals tell you which use cases you can solve, and how well, before you ship anything.

The practical value is diagnostic. These signals convert a vague 'do our evals work?' into a checklist you can fail honestly. If you can't hot-swap models, your code is coupled to a provider; fix the abstraction layer. If complaints don't become evals, you're flying blind on real-world distribution shift. If you only run evals to gate regressions, you're using a strategic instrument as a safety net. A team that's honest about which of the three it lacks knows exactly what to build next.
