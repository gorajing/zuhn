---
id: INS-260605-0113
domain: ai-development
topic: llm-training
title: >-
  Once the student approaches teacher quality, replace the teacher to collapse
  data-generation cost
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - distillation
  - cost-optimization
  - self-improvement
  - teacher-student
  - sampling
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
    After the student approaches teacher quality, use the student checkpoint
    instead of the teacher for expensive repeated sampling — it costs almost
    nothing.
  standard: >-
    Filtering settled data by generating ~10 teacher predictions per example is
    prohibitively expensive: 100,000 examples means roughly a million
    frontier-model requests. But once the student model (Zed 2) approaches the
    teacher in prediction quality, Zed runs the cheap student checkpoint ~50
    times per example instead of the teacher, doing the same
    Levenshtein-to-settled-state filtering for basically nothing. This is a
    self-bootstrapping flywheel — the student, trained from the teacher, becomes
    good enough to take over the teacher's data-generation role, removing the
    frontier-model cost ceiling. The general pattern: a distillation pipeline
    can become economically self-sustaining the moment the student is good
    enough to label its own future training data.
stance: >-
  When a distilled student nears teacher quality, swapping the teacher out of
  the sampling loop turns a prohibitively expensive data step into a nearly free
  one.
related:
  - INS-260329-BC36
  - INS-260413-D96C
  - INS-260403-62AF
  - INS-260605-B66C
  - INS-260329-DE17
---
Filtering settled data by generating ~10 teacher predictions per example is prohibitively expensive: 100,000 examples means roughly a million frontier-model requests. But once the student model (Zed 2) approaches the teacher in prediction quality, Zed runs the cheap student checkpoint ~50 times per example instead of the teacher, doing the same Levenshtein-to-settled-state filtering for basically nothing. This is a self-bootstrapping flywheel — the student, trained from the teacher, becomes good enough to take over the teacher's data-generation role, removing the frontier-model cost ceiling. The general pattern: a distillation pipeline can become economically self-sustaining the moment the student is good enough to label its own future training data.
