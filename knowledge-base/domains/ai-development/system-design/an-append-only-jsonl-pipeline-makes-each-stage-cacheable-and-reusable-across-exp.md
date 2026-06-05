---
id: INS-260605-8F3D
domain: ai-development
topic: system-design
title: >-
  An append-only JSONL pipeline makes each stage cacheable and reusable across
  experiments
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - data-pipeline
  - jsonl
  - caching
  - experiment-design
  - ml-infrastructure
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
    Structure ML data pipelines as JSONL where each stage only appends fields,
    so expensive upstream stages can be cached and reused across experiments.
  standard: >-
    Zed's whole pipeline is JSONL — each line is one giant JSON object, and each
    stage simply adds or rearranges fields rather than rewriting the record. The
    payoff is that the expensive upstream work (distilling and repairing teacher
    predictions) is identical across experiments and can be cached once, then
    many student-training experiments run on top of it. The experiment-specific
    divergence happens late, at a 'prompt formatting' stage that decides whether
    to include diagnostics, how much edit history to include, and so on. The
    design lesson generalizes beyond ML: when you have a costly deterministic
    prefix and many cheap variant tails, push the variation as late as possible
    and make the shared prefix a cached artifact.
stance: >-
  Designing every pipeline stage to only add or move fields on a single JSON
  line makes upstream work cacheable and shareable across many experiments.
related:
  - INS-260329-E4F6
  - INS-260404-3ABF
  - INS-260605-9A92
  - INS-260605-EF9D
  - PRI-260411-D39C
  - PRI-260328-DF2D
  - INS-260409-A0B4
---
Zed's whole pipeline is JSONL — each line is one giant JSON object, and each stage simply adds or rearranges fields rather than rewriting the record. The payoff is that the expensive upstream work (distilling and repairing teacher predictions) is identical across experiments and can be cached once, then many student-training experiments run on top of it. The experiment-specific divergence happens late, at a 'prompt formatting' stage that decides whether to include diagnostics, how much edit history to include, and so on. The design lesson generalizes beyond ML: when you have a costly deterministic prefix and many cheap variant tails, push the variation as late as possible and make the shared prefix a cached artifact.
