---
id: INS-260627-82CC
domain: ai-development
topic: agent-reliability
title: Coding agents ship 'painted doors' that only autonomous testing catches
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - verification
  - testing
  - reliability
  - compounding-errors
  - trust
sources:
  - type: youtube
    title: 'The 3 Pillars of Autonomy – Michele Catasta, Replit'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=MLhAA9yguwM'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Replit found >30% of agent-built features are broken on first generation
    ('painted doors'), so autonomous testing — not human QA — must close the
    feedback loop.
  standard: >-
    Replit's internal evaluations found that more than 30% of individual
    features an agent builds are broken on the first attempt — buttons with no
    handler, UI backed by mock data instead of a real database. They call these
    'painted doors': they look real but don't work, and they're hard to find
    because users won't test every button and field. The result is that almost
    every generated app contains at least one broken feature, which is a primary
    reason non-technical users still distrust coding agents. 


    The failed fix is asking users for feedback: non-technical users can't
    provide technical feedback, and even basic click-through QA is tedious
    enough that they refuse. The orthogonal solution is autonomous testing in
    the build loop, which (1) breaks the human-feedback bottleneck by eliciting
    information from the app directly, (2) prevents the accumulation of
    compounding errors before they topple the 'castle,' and (3) overcomes
    frontier-model 'laziness' — verifying that a model's claim of completion is
    true rather than hallucinated. Verification at every step is how you buy
    'nines of reliability' against errors that compound silently.
stance: >-
  Without autonomous testing in the build loop, an AI coding agent will ship at
  least one broken feature in nearly every application it produces.
related:
  - INS-260514-4E58
  - INS-260605-7CEB
  - INS-260626-287B
  - INS-260321-2482
  - INS-260410-85AD
  - INS-260619-F1E3
  - INS-260605-2A69
---
Replit's internal evaluations found that more than 30% of individual features an agent builds are broken on the first attempt — buttons with no handler, UI backed by mock data instead of a real database. They call these 'painted doors': they look real but don't work, and they're hard to find because users won't test every button and field. The result is that almost every generated app contains at least one broken feature, which is a primary reason non-technical users still distrust coding agents. 

The failed fix is asking users for feedback: non-technical users can't provide technical feedback, and even basic click-through QA is tedious enough that they refuse. The orthogonal solution is autonomous testing in the build loop, which (1) breaks the human-feedback bottleneck by eliciting information from the app directly, (2) prevents the accumulation of compounding errors before they topple the 'castle,' and (3) overcomes frontier-model 'laziness' — verifying that a model's claim of completion is true rather than hallucinated. Verification at every step is how you buy 'nines of reliability' against errors that compound silently.
