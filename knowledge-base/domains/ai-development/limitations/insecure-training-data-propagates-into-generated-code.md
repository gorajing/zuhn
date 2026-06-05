---
id: INS-260605-3088
domain: ai-development
topic: limitations
title: Insecure training data propagates into generated code
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - training-data
  - security
  - data-quality
  - root-cause
sources:
  - type: youtube
    title: 'Can LLMs generate Enterprise Quality Code? — Prasenjit Sarkar, Sonar'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=NuePCNMpWGc'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Models trained on open-source code inherit its built-in security flaws and
    subtle logic errors.
  standard: >-
    Sonar attributes much of the code-quality problem to the training corpus
    itself: open-source and scraped code carries built-in security flaws and
    subtle logic errors that slip into the training pool. The model picks up
    insecure examples alongside good ones and reproduces both, so the defects
    are upstream of any single prompt.


    Combined with the inherent properties of LLMs — probabilistic output (the
    same prompt yields different code tomorrow), limited context (no
    understanding of your architecture or codebase), and low explainability
    (hard to diagnose why it failed) — this means code-quality problems are
    structural, not incidental. The remedy Sonar proposes is to 'treat the data'
    before training and to push the full codebase context into the model, but
    the broader lesson is that you cannot prompt your way out of a defect that
    was learned, only catch it downstream with verification.
stance: >-
  LLMs reproduce the security flaws and hidden bugs embedded in their
  mixed-quality training corpus.
related:
  - INS-260405-1CAA
  - INS-260605-19B4
  - INS-260328-9B8A
  - INS-260323-23B9
  - INS-260403-27F5
  - INS-260514-6576
---
Sonar attributes much of the code-quality problem to the training corpus itself: open-source and scraped code carries built-in security flaws and subtle logic errors that slip into the training pool. The model picks up insecure examples alongside good ones and reproduces both, so the defects are upstream of any single prompt.

Combined with the inherent properties of LLMs — probabilistic output (the same prompt yields different code tomorrow), limited context (no understanding of your architecture or codebase), and low explainability (hard to diagnose why it failed) — this means code-quality problems are structural, not incidental. The remedy Sonar proposes is to 'treat the data' before training and to push the full codebase context into the model, but the broader lesson is that you cannot prompt your way out of a defect that was learned, only catch it downstream with verification.
