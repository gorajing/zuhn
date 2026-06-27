---
id: INS-260605-EF23
domain: ai-development
topic: agent-patterns
title: >-
  Define the desired end-state as the eval, then let the machine optimize toward
  it
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - evals
  - intent-engineering
  - reward-signal
  - self-optimization
  - rubrics
sources:
  - type: youtube
    title: >-
      Malleable Evals: Why Are We Evaluating Adaptive Systems with Static Tests?
      — Vincent Koc, OpenClaw
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=4VhbYlfC7Gs'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Make the eval the end-state you want to reach, not the starting dataset of
    correct answers.
  standard: >-
    As models become genuinely capable of self-optimization, evaluation can
    shift from 'user asks X, correct answer is Y, compare against it' to
    defining ambiguous, intent-level outcomes — personality, behavior,
    organizational fit — often expressed as rubrics, the way art or essays are
    graded in schools. Borrowing from Karpathy-style auto-research, you set a
    goal and a reward signal and let the system tune itself toward it.


    The inversion is profound: 'our evals don't become the dataset or the
    starting point, our evals become what is the end state we want to get to,
    and then we let the machines do the work.' This reframes evaluation around
    intent and target outcomes rather than exhaustive enumeration of correct
    cases — a structure that survives the system changing underneath it.
stance: >-
  Evals should specify the intended end-state as a reward signal and let the
  agent self-optimize toward it, rather than enumerating expected input-output
  pairs upfront.
related:
  - INS-260605-2186
  - INS-260625-0E60
  - INS-260625-8A55
  - INS-260627-D21B
  - INS-260626-60C2
  - INS-260626-8747
  - INS-260627-FEBB
---
As models become genuinely capable of self-optimization, evaluation can shift from 'user asks X, correct answer is Y, compare against it' to defining ambiguous, intent-level outcomes — personality, behavior, organizational fit — often expressed as rubrics, the way art or essays are graded in schools. Borrowing from Karpathy-style auto-research, you set a goal and a reward signal and let the system tune itself toward it.

The inversion is profound: 'our evals don't become the dataset or the starting point, our evals become what is the end state we want to get to, and then we let the machines do the work.' This reframes evaluation around intent and target outcomes rather than exhaustive enumeration of correct cases — a structure that survives the system changing underneath it.
