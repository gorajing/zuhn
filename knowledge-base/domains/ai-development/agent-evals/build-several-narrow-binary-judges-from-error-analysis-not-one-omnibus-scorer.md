---
id: INS-260627-7541
domain: ai-development
topic: agent-evals
title: 'Build several narrow binary judges from error analysis, not one omnibus scorer'
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - llm-as-judge
  - metric-design
  - error-analysis
  - binary-classification
  - evaluation
sources:
  - type: youtube
    title: "Judge the Judge: Building LLM Evaluators That Actually Work with GEPA —\_Mahmoud Mabrouk, Agenta AI"
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=X4dEHRzBLmc'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Cluster failures into distinct error types via error analysis, build one
    binary (true/false) judge per type, and avoid 1-5 / percentage scores — even
    two humans rarely agree on a numeric score, and a single 'success' judge is
    too complex to calibrate.
  standard: >-
    The recommended workflow (crediting Hamel Husain's error-analysis approach)
    is to have subject-matter experts annotate traces, comment on what worked
    and didn't, then cluster those comments into a small set of distinct error
    types. In the airline-agent example this surfaced four: policy adherence,
    response style, information delivery, and tool-call correctness. Each
    becomes its own dedicated LLM-judge. One omnibus 'success' judge trying to
    capture all of these is too complex to learn or calibrate.


    Equally important: keep each judge binary (true/false with reasoning), not a
    1-5 score or percentage. Calibrating an LLM-judge to a binary classification
    is already hard; layering a numeric scale on top makes it much harder — even
    two human annotators struggle to agree on the same score. Narrow scope plus
    binary output is what makes the judge learnable and the calibration
    tractable.
stance: >-
  You should decompose evaluation into multiple narrow pass/fail judges (one per
  error type found via error analysis) rather than a single judge that scores
  overall 'success' on a 1-to-5 scale.
related:
  - INS-260328-2CFF
  - INS-260329-5BB0
  - INS-260402-7A1A
  - INS-260403-27AA
  - INS-260403-0803
  - INS-260404-6C8F
  - INS-260404-67C5
  - PRI-260426-9E23
  - INS-260605-8789
  - INS-260605-0DB3
---
The recommended workflow (crediting Hamel Husain's error-analysis approach) is to have subject-matter experts annotate traces, comment on what worked and didn't, then cluster those comments into a small set of distinct error types. In the airline-agent example this surfaced four: policy adherence, response style, information delivery, and tool-call correctness. Each becomes its own dedicated LLM-judge. One omnibus 'success' judge trying to capture all of these is too complex to learn or calibrate.

Equally important: keep each judge binary (true/false with reasoning), not a 1-5 score or percentage. Calibrating an LLM-judge to a binary classification is already hard; layering a numeric scale on top makes it much harder — even two human annotators struggle to agree on the same score. Narrow scope plus binary output is what makes the judge learnable and the calibration tractable.
