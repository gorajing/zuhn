---
id: INS-260625-8A55
domain: ai-development
topic: system-building
title: 'Run the minimal set of evals that yields signal, not an exhaustive battery'
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - evals
  - cost
  - signal
  - prioritization
  - measurement
sources:
  - type: youtube
    title: 'LLM Observability, Evaluation, Experimentation Platform — Dat Ngo, Arize'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=JsCCrBF7F1g'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Just because you can eval something doesn't mean you should — find the
    minimum set of evals that yields decision-grade signal, because each eval
    costs money to run.
  standard: >-
    Ngo explicitly pushes back on the instinct to evaluate everything: 'just
    because you can eval something doesn't mean you always should. It's not this
    exhaustive thing.' Every eval — especially LLM-as-judge evals — has a
    recurring compute cost that scales with traffic, so an exhaustive eval suite
    becomes a meaningful line item and a latency tax.


    The discipline he advocates is to ask 'what are the minimal set of evals I
    can get away with to understand whether my application is working as
    intended?' This reframes evaluation from coverage-maximization (test every
    span) to signal-maximization (run only the evals that change a decision). It
    pairs with his point about eval scope: you can evaluate a single span,
    multiple spans, a full trajectory, or an entire session — and you should
    pick the scope that answers your actual question rather than defaulting to
    the deepest, most expensive level.


    For practitioners, this is a YAGNI principle for evaluation: start from the
    business question ('is the user satisfied,' 'did we complete the process'),
    choose the cheapest eval at the right scope that answers it, and resist the
    urge to instrument every component just because the platform lets you.
    Exhaustive evaluation is a cost trap that buys little marginal signal.
stance: >-
  Teams should run the smallest set of evals that reveals whether the
  application works, because comprehensive evaluation carries real recurring
  cost.
related:
  - INS-260322-D6D7
  - INS-260322-D1AB
  - INS-260403-A7D0
  - INS-260403-A7FD
  - INS-260402-D534
  - INS-260404-4541
  - INS-260410-F40F
  - INS-260410-4EB9
  - INS-260605-4D1D
  - INS-260605-EF23
---
Ngo explicitly pushes back on the instinct to evaluate everything: 'just because you can eval something doesn't mean you always should. It's not this exhaustive thing.' Every eval — especially LLM-as-judge evals — has a recurring compute cost that scales with traffic, so an exhaustive eval suite becomes a meaningful line item and a latency tax.

The discipline he advocates is to ask 'what are the minimal set of evals I can get away with to understand whether my application is working as intended?' This reframes evaluation from coverage-maximization (test every span) to signal-maximization (run only the evals that change a decision). It pairs with his point about eval scope: you can evaluate a single span, multiple spans, a full trajectory, or an entire session — and you should pick the scope that answers your actual question rather than defaulting to the deepest, most expensive level.

For practitioners, this is a YAGNI principle for evaluation: start from the business question ('is the user satisfied,' 'did we complete the process'), choose the cheapest eval at the right scope that answers it, and resist the urge to instrument every component just because the platform lets you. Exhaustive evaluation is a cost trap that buys little marginal signal.
