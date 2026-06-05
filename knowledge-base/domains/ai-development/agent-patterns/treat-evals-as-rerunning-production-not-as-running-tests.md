---
id: INS-260605-09E0
domain: ai-development
topic: agent-patterns
title: 'Treat evals as rerunning production, not as running tests'
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - evals
  - observability
  - production-traces
  - flywheel
sources:
  - type: youtube
    title: 'The maturity phases of running evals — Phil Hetzel, Braintrust'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=FB-MLPhL9Ms'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Capture production (or UAT) traces into your eval dataset and run evals as a
    replay of production, closing a flywheel from observation to improvement.
  standard: >-
    Braintrust treats evals and observability as the same problem: evals build
    confidence before production, observability maintains it after. The unifying
    mental model is to stop thinking of evals as 'running tests' and start
    thinking of them as 'rerunning production.' Concretely, the eval dataset
    should be populated with real production or UAT traces rather than
    hand-written cases.


    This creates a flywheel: capture agent traces in production, diagnose what
    went wrong (via humans or automated tooling), bring those examples back into
    an offline experimentation environment, rerun them as evals, and use the
    results to decide which direction to improve the agent. That last step is
    evals 'playing offense' — not just defending against regressions, but
    quantifying how much each tweak improves the application. The closer your
    eval inputs mirror real production usage, the more the confidence you gain
    offline transfers to confidence in production.
stance: >-
  Eval datasets should be built from captured production traces so that
  evaluation approximates rerunning real production rather than synthetic
  testing.
related:
  - INS-260322-D1AB
  - INS-260322-24FB
  - INS-260327-E07C
  - INS-260329-3489
  - INS-260403-7EB2
  - INS-260411-8034
  - INS-260501-3D33
  - INS-260530-C385
  - INS-260605-DCE5
  - INS-260605-EF23
---
Braintrust treats evals and observability as the same problem: evals build confidence before production, observability maintains it after. The unifying mental model is to stop thinking of evals as 'running tests' and start thinking of them as 'rerunning production.' Concretely, the eval dataset should be populated with real production or UAT traces rather than hand-written cases.

This creates a flywheel: capture agent traces in production, diagnose what went wrong (via humans or automated tooling), bring those examples back into an offline experimentation environment, rerun them as evals, and use the results to decide which direction to improve the agent. That last step is evals 'playing offense' — not just defending against regressions, but quantifying how much each tweak improves the application. The closer your eval inputs mirror real production usage, the more the confidence you gain offline transfers to confidence in production.
