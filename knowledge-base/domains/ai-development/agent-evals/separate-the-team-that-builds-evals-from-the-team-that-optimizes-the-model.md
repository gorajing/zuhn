---
id: INS-260625-D1F9
domain: ai-development
topic: agent-evals
title: Separate the team that builds evals from the team that optimizes the model
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - evals
  - benchmaxing
  - incentive-design
  - org-structure
  - overfitting
sources:
  - type: youtube
    title: >-
      Cooking with OpenAI’s Research Chief: AGI, o1, Evals, and Scaling Laws —
      Mark Chen
    author: Latent Space
    url: 'https://www.youtube.com/watch?v=fpAthTtha8c'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Put eval creation and model optimization on different teams so the eval team
    is incentivized to build benchmarks that are hard for the model, not to
    flatter it.
  standard: >-
    Chen describes an 'evals crisis': the number of canonical gold-standard
    benchmarks is low and most of the famous ones (SAT-style tests) are
    saturated, while 'benchmaxing' — overfitting to a benchmark's distribution
    by training on near-duplicate instances — produces high scores that don't
    generalize. Because any eval released publicly is 'already not good,' the
    supply of trustworthy measurement is the binding constraint, not model
    capability.


    The structural fix is to decouple incentives: keep the team creating evals
    separate from the team optimizing the model, so the two are 'inherently
    adversarial.' The eval team's job is to build benchmarks the model fails;
    the model team's job is to pass them. When the same group does both, they
    co-incentivize and quietly cheat themselves. OpenAI extends this by
    partnering with external organizations to craft gold-standard hard
    math/science evals.


    This generalizes beyond ML: any metric owned by the people graded on it will
    be gamed. Whether the eval is a sales quota, a code-quality gate, or a model
    benchmark, separating the measurer from the measured is what keeps the
    number honest. The practical move when you stand up an eval is to ask who
    benefits from the score going up — and make sure that isn't the same person
    who defines the test.
stance: >-
  Trustworthy benchmarks require organizationally separating eval-creators from
  model-optimizers so their incentives stay adversarial.
related:
  - INS-260322-D6D7
  - INS-260322-D1AB
  - INS-260327-E07C
  - INS-260403-E6F0
  - INS-260327-66AC
  - INS-260410-ED12
  - INS-260410-F40F
  - INS-260410-4EB9
  - INS-260410-F167
  - INS-260530-C385
---
Chen describes an 'evals crisis': the number of canonical gold-standard benchmarks is low and most of the famous ones (SAT-style tests) are saturated, while 'benchmaxing' — overfitting to a benchmark's distribution by training on near-duplicate instances — produces high scores that don't generalize. Because any eval released publicly is 'already not good,' the supply of trustworthy measurement is the binding constraint, not model capability.

The structural fix is to decouple incentives: keep the team creating evals separate from the team optimizing the model, so the two are 'inherently adversarial.' The eval team's job is to build benchmarks the model fails; the model team's job is to pass them. When the same group does both, they co-incentivize and quietly cheat themselves. OpenAI extends this by partnering with external organizations to craft gold-standard hard math/science evals.

This generalizes beyond ML: any metric owned by the people graded on it will be gamed. Whether the eval is a sales quota, a code-quality gate, or a model benchmark, separating the measurer from the measured is what keeps the number honest. The practical move when you stand up an eval is to ask who benefits from the score going up — and make sure that isn't the same person who defines the test.
