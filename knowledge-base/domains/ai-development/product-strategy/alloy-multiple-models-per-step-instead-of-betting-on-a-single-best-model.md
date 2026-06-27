---
id: INS-260625-C3B0
domain: ai-development
topic: product-strategy
title: Alloy multiple models per step instead of betting on a single best model
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - ensembles
  - agents
  - model-routing
  - reliability
  - ai-products
sources:
  - type: youtube
    title: 'Inside the Rise of Autonomous AI Hackers: XBOW''s Oege de Moor'
    author: Sequoia Capital
    url: 'https://www.youtube.com/watch?v=eHsr1Fl2jNA'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Flip a coin at each step to pick which model to call; the models cover each
    other's mistakes like pair programmers.
  standard: >-
    De Moor describes XBOW's 'alloy' technique: model an attack as a sequence of
    actions, and at every step randomly decide whether to ask Gemini or Sonnet.
    This stochastic mix performs measurably better than either model used alone
    because the two compensate for each other's distinct failure modes —
    analogous to pair programming where a second perspective catches the first's
    errors. The practical takeaway for any agent builder is to stop searching
    for the one optimal model and instead diversify per-step model choice as an
    error-correction mechanism. It exploits the fact that different frontier
    models fail on different inputs, so uncorrelated errors cancel across a long
    action chain. This is cheap to implement (a routing coin-flip) and turns the
    existence of multiple comparable models from a procurement headache into a
    reliability asset.
stance: >-
  Randomly routing each agent step across an ensemble of frontier models
  outperforms committing every step to the single best model.
related:
  - INS-260410-B3C4
  - INS-260605-5CC7
  - INS-260605-77E5
  - INS-260624-4205
  - INS-260410-939B
  - INS-260501-17BB
  - INS-260605-D37A
---
De Moor describes XBOW's 'alloy' technique: model an attack as a sequence of actions, and at every step randomly decide whether to ask Gemini or Sonnet. This stochastic mix performs measurably better than either model used alone because the two compensate for each other's distinct failure modes — analogous to pair programming where a second perspective catches the first's errors. The practical takeaway for any agent builder is to stop searching for the one optimal model and instead diversify per-step model choice as an error-correction mechanism. It exploits the fact that different frontier models fail on different inputs, so uncorrelated errors cancel across a long action chain. This is cheap to implement (a routing coin-flip) and turns the existence of multiple comparable models from a procurement headache into a reliability asset.
