---
id: INS-260628-F01C
domain: ai-development
topic: evals
title: >-
  Run recurring evals on frontier models to time when a capability-dependent
  product becomes viable
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - evals
  - product-timing
  - capability-tracking
  - frontier-models
  - build-decisions
sources:
  - type: youtube
    title: 'The Future of Evals - Ankur Goyal, Braintrust'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=MC55hdWLq4o'
date_extracted: '2026-06-28'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Braintrust ran evals every quarter for two years on frontier models' ability
    to improve prompts/datasets/scorers, and only built Loop once the eval said
    the models had crossed the threshold.
  standard: >-
    The non-obvious move here is using evals as a timing instrument for the
    build decision itself. For two years, every quarter, Braintrust evaluated
    whether frontier models were good enough at the meta-task of optimizing
    prompts, datasets, and scorers. The answer was 'no' for most of that period
    — and crucially, they did not ship the product until their own eval told
    them the capability had arrived (which they pin to Claude 4, a ~6x jump).
    The eval told them when to build, not just how well the product worked after
    building.


    The lesson for anyone building a capability-dependent AI feature: don't rely
    on vibes, demos, or a single model release announcement to decide the
    capability is 'there.' Stand up a recurring, task-specific eval that
    measures exactly the capability your product depends on, and track it across
    model generations. When the curve crosses your viability threshold, that's
    your signal to build — and until then, you have a quantified reason to wait.
    This turns 'is the model good enough yet?' from a debate into a measurement.
stance: >-
  You should measure model readiness with your own recurring evals before
  building a product on a capability, rather than guessing when the models are
  good enough.
related:
  - INS-260323-3F39
  - INS-260405-82F3
  - INS-260409-E776
  - INS-260410-5951
  - INS-260605-B405
  - INS-260628-F942
  - INS-260628-A39E
  - INS-260625-D1F9
---
The non-obvious move here is using evals as a timing instrument for the build decision itself. For two years, every quarter, Braintrust evaluated whether frontier models were good enough at the meta-task of optimizing prompts, datasets, and scorers. The answer was 'no' for most of that period — and crucially, they did not ship the product until their own eval told them the capability had arrived (which they pin to Claude 4, a ~6x jump). The eval told them when to build, not just how well the product worked after building.

The lesson for anyone building a capability-dependent AI feature: don't rely on vibes, demos, or a single model release announcement to decide the capability is 'there.' Stand up a recurring, task-specific eval that measures exactly the capability your product depends on, and track it across model generations. When the curve crosses your viability threshold, that's your signal to build — and until then, you have a quantified reason to wait. This turns 'is the model good enough yet?' from a debate into a measurement.
