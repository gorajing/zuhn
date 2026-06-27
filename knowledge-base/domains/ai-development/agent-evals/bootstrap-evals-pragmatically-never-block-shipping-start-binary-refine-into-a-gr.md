---
id: INS-260627-6FE0
domain: ai-development
topic: agent-evals
title: >-
  Bootstrap evals pragmatically: never block shipping, start binary, refine into
  a gradient
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - agent-evals
  - eval-design
  - subjective-tasks
  - iterative-development
  - binary-gating
sources:
  - type: youtube
    title: 'Build a Prompt Learning Loop - SallyAnn DeLucia & Fuad Ali, Arize'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=SbcQYbrvAfI'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Don't let eval-building block you — ship something scrappy, start with a
    binary good/bad gate, then decompose into granular continuous criteria as
    you learn what 'good' means.
  standard: >-
    Two complementary heuristics for getting evals off the ground. First, evals
    should never block you from building: pull an out-of-the-box evaluator (QA
    correctness, task adherence) to avoid the pain of manually combing through
    early data, but treat it as a starting point you refine as you discover
    where the agent actually fails — not a prerequisite gate before any code
    exists.


    Second, for subjective or hard-to-quantify tasks (their example: Booking.com
    judging whether a property photo is a 'good' listing image), it is often
    sufficient to start with a coarse binary good/bad gate. The objection is
    that a binary label gives no gradient to improve along — and the resolution
    is to use the binary verdict to surface the underlying dimensions ('this was
    dimly lit, the room layout was off') and then promote those dimensions into
    a more granular, increasingly continuous evaluator. The recommended
    framework: get all stakeholders (subject-matter experts, security,
    leadership) in a room to define what success looks like, then convert each
    success criterion into a specific eval, including task-level checks like
    'did it retrieve the right data' and 'did it call tools in the correct
    order.'


    The net pattern is iterative eval maturity: binary gate → identified failure
    dimensions → granular continuous evaluator, advancing only as fast as real
    signal accumulates. This avoids both paralysis (over-specifying evals before
    shipping) and false precision (a continuous metric you cannot yet justify).
stance: >-
  Evals should start scrappy and binary and be refined as signal accumulates,
  rather than being fully specified up front before any product is built.
related:
  - INS-260322-D6D7
  - INS-260625-F62D
  - INS-260625-8A55
  - INS-260627-4072
  - INS-260626-60C2
  - INS-260530-C385
---
Two complementary heuristics for getting evals off the ground. First, evals should never block you from building: pull an out-of-the-box evaluator (QA correctness, task adherence) to avoid the pain of manually combing through early data, but treat it as a starting point you refine as you discover where the agent actually fails — not a prerequisite gate before any code exists.

Second, for subjective or hard-to-quantify tasks (their example: Booking.com judging whether a property photo is a 'good' listing image), it is often sufficient to start with a coarse binary good/bad gate. The objection is that a binary label gives no gradient to improve along — and the resolution is to use the binary verdict to surface the underlying dimensions ('this was dimly lit, the room layout was off') and then promote those dimensions into a more granular, increasingly continuous evaluator. The recommended framework: get all stakeholders (subject-matter experts, security, leadership) in a room to define what success looks like, then convert each success criterion into a specific eval, including task-level checks like 'did it retrieve the right data' and 'did it call tools in the correct order.'

The net pattern is iterative eval maturity: binary gate → identified failure dimensions → granular continuous evaluator, advancing only as fast as real signal accumulates. This avoids both paralysis (over-specifying evals before shipping) and false precision (a continuous metric you cannot yet justify).
