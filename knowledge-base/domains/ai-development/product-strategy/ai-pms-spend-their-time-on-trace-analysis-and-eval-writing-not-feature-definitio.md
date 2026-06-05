---
id: INS-260530-C385
domain: ai-development
topic: product-strategy
title: >-
  AI PMs spend their time on trace analysis and eval-writing, not feature
  definition
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - ai-pm-role
  - eval-writing
  - trace-analysis
  - role-redefinition
  - llm-as-judge
sources:
  - type: audio
    title: PM Google
date_extracted: '2026-05-30'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >+
    Abhije: 'As a PM, your roadmap would be to improve a product. As an AI PM,
    your goal is to write better AI evals.' The day-to-day is analyzing traces
    (input → output for each query) at scale, identifying where the AI did well
    vs poorly, and improving accuracy via eval-driven iteration.

  standard: >-
    Pre-AI PM work centers on user behavior and feature design: study
    clickstream, identify drop-offs, propose flow changes, A/B test. AI PM work
    centers on system behavior: study traces (per-query input/output logs),
    identify accuracy/quality failures, propose eval improvements, A/B test
    prompt or model changes.


    The daily work shifts visibly: traces become the primary artifact (the way
    clickstream was), eval suites become the primary roadmap (the way feature
    roadmaps were), and LLM-as-judge becomes the scaling mechanism (manual eval
    first, automated eval second). The classic PM skills (analytics, design,
    leadership) are necessary but not sufficient — without eval/trace fluency,
    the AI PM cannot debug what's actually happening in the product.


    This is reflected in hiring: AI PM interviews now require eval-writing
    skills, not just product design and analytics. Candidates without prior eval
    experience cannot pass even with strong classic-PM backgrounds, because the
    day-to-day they'd be doing requires it.


    For PM career planning: the leverage move is to build a portfolio of evals
    you've designed, not just features you've shipped. The portfolio artifact is
    shifting from 'PRD → feature' to 'eval suite → measurable quality
    improvement.'
stance: >-
  The AI PM role's center of gravity has moved from 'what should we build'
  (feature definition) to 'how do we measure if it's working' (trace analysis +
  eval-writing); classic PM skills (analytics, design, leadership) are necessary
  but no longer sufficient
related:
  - INS-260322-D6D7
  - INS-260322-D1AB
  - INS-260328-A46F
  - INS-260329-3739
  - INS-260402-2632
  - INS-260404-4434
  - INS-260405-0CE7
  - INS-260403-7EB2
  - INS-260403-E09E
  - INS-260410-F5EC
---
Pre-AI PM work centers on user behavior and feature design: study clickstream, identify drop-offs, propose flow changes, A/B test. AI PM work centers on system behavior: study traces (per-query input/output logs), identify accuracy/quality failures, propose eval improvements, A/B test prompt or model changes.

The daily work shifts visibly: traces become the primary artifact (the way clickstream was), eval suites become the primary roadmap (the way feature roadmaps were), and LLM-as-judge becomes the scaling mechanism (manual eval first, automated eval second). The classic PM skills (analytics, design, leadership) are necessary but not sufficient — without eval/trace fluency, the AI PM cannot debug what's actually happening in the product.

This is reflected in hiring: AI PM interviews now require eval-writing skills, not just product design and analytics. Candidates without prior eval experience cannot pass even with strong classic-PM backgrounds, because the day-to-day they'd be doing requires it.

For PM career planning: the leverage move is to build a portfolio of evals you've designed, not just features you've shipped. The portfolio artifact is shifting from 'PRD → feature' to 'eval suite → measurable quality improvement.'
