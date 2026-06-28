---
id: INS-260626-8747
domain: ai-development
topic: agent-evals
title: Spreadsheet evals document the past; they don't let you iterate
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - evals
  - maturity-model
  - experimentation
  - tooling
  - team-process
sources:
  - type: youtube
    title: 'Why building eval platforms is hard — Phil Hetzel, Braintrust'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=_fQ7Z_Wfouk'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Starting evals in a spreadsheet is the right first move, but it's
    documenting, not experimenting — it can't compare experiments over time, run
    analytics, or bring non-technical SMEs into the loop.
  standard: >-
    Hetzel lays out a maturity ladder — spreadsheet, then a bespoke vibe-coded
    UI on a real database, then a playground for tweaking agent configs, then
    the production-fed flywheel — and the recurring failure at the early rungs
    is the same: you're still documenting rather than iterating. A spreadsheet
    has zero barrier to entry and is the correct place to start, but it becomes
    cumbersome to manage, makes it hard to directly compare experiments over
    time, supports little cross-experiment analytics, leans on hard-to-scale
    human scoring, and is slow to append to each cycle.


    The deeper point is that evals are a team sport requiring multiple personas
    — product/AI engineers, systems engineers, and especially non-technical SMEs
    with domain expertise and proximity to users — and those domain experts will
    never come into your spreadsheet. Graduating to bespoke UIs and a shared
    playground isn't polish; it's the mechanism that converts a personal
    documentation habit into a multi-persona iteration engine. Until the tooling
    enables experimentation and comparison, more inputs in the sheet just means
    more reporting, not more improvement.
stance: >-
  Spreadsheet-based evals plateau because they document outputs rather than
  enable the systematic experimentation, comparison, and cross-experiment
  analytics that drive agent improvement.
related:
  - INS-260605-2186
  - INS-260626-B149
  - INS-260627-4072
  - INS-260605-09E0
  - INS-260605-EF23
  - INS-260625-8A55
  - INS-260628-F942
  - INS-260628-0AC7
---
Hetzel lays out a maturity ladder — spreadsheet, then a bespoke vibe-coded UI on a real database, then a playground for tweaking agent configs, then the production-fed flywheel — and the recurring failure at the early rungs is the same: you're still documenting rather than iterating. A spreadsheet has zero barrier to entry and is the correct place to start, but it becomes cumbersome to manage, makes it hard to directly compare experiments over time, supports little cross-experiment analytics, leans on hard-to-scale human scoring, and is slow to append to each cycle.

The deeper point is that evals are a team sport requiring multiple personas — product/AI engineers, systems engineers, and especially non-technical SMEs with domain expertise and proximity to users — and those domain experts will never come into your spreadsheet. Graduating to bespoke UIs and a shared playground isn't polish; it's the mechanism that converts a personal documentation habit into a multi-persona iteration engine. Until the tooling enables experimentation and comparison, more inputs in the sheet just means more reporting, not more improvement.
