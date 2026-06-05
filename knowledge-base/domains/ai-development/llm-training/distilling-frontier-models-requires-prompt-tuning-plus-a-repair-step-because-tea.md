---
id: INS-260605-B405
domain: ai-development
topic: llm-training
title: >-
  Distilling frontier models requires prompt tuning plus a repair step because
  teachers are non-deterministic
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - distillation
  - teacher-student
  - data-quality
  - prompt-engineering
  - training-data
sources:
  - type: youtube
    title: >-
      How We Built Zeta2: Training an Edit Prediction Model in Production — Ben
      Kunkle, Zed
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=phchDt63qAA'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Treat frontier-model labels as noisy: run heuristic checks and send failures
    back to a second model to repair before training.
  standard: >-
    Zed distills training data by giving a frontier model the full
    edit-prediction input and asking what it would predict. But as Kunkle puts
    it, ask a frontier model 100,000 times and you get 100,001 answers — they
    are smart but inconsistent, so the distillation prompt must be heavily
    tuned. They then run offline static evaluations with heuristics (is the
    prediction just undoing what you typed? is it ignoring the editable-region
    boundary?), and any prediction that fails gets sent to another frontier
    model with a 'it failed this way, can you fix it?' prompt — the repair step.
    Only after repair does the teacher's output become the student's expected
    output. The principle: never trust raw teacher labels; build a
    filter-and-repair stage into the distillation pipeline.
stance: >-
  Frontier-model teachers produce inconsistent labels, so distillation needs
  heuristic filtering and a second-pass repair step to yield clean training
  data.
related:
  - INS-260323-3F39
  - INS-260505-ABCC
  - INS-260605-1523
  - INS-260605-EBEB
  - INS-260605-B82E
---
Zed distills training data by giving a frontier model the full edit-prediction input and asking what it would predict. But as Kunkle puts it, ask a frontier model 100,000 times and you get 100,001 answers — they are smart but inconsistent, so the distillation prompt must be heavily tuned. They then run offline static evaluations with heuristics (is the prediction just undoing what you typed? is it ignoring the editable-region boundary?), and any prediction that fails gets sent to another frontier model with a 'it failed this way, can you fix it?' prompt — the repair step. Only after repair does the teacher's output become the student's expected output. The principle: never trust raw teacher labels; build a filter-and-repair stage into the distillation pipeline.
