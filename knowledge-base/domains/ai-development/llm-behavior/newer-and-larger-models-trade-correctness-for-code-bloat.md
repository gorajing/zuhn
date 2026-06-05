---
id: INS-260605-7F81
domain: ai-development
topic: llm-behavior
title: Newer and larger models trade correctness for code bloat
actionability: reference
confidence: high
shelf_life: time-sensitive
status: active
tags:
  - code-bloat
  - verbosity
  - complexity
  - model-evolution
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
    GPT 5.2 High wrote ~1M lines for the same 4,444 Java assignments that
    GPT-4.0 solved in under 250K lines.
  standard: >-
    Sonar's longitudinal view shows lines-of-code-per-task trending sharply
    upward across model generations. GPT-4.0 solved the 4,444-assignment set in
    under 250,000 lines; GPT 5.2 High produced roughly 1 million, and GPT 5.4
    Pro High over 1.2 million. More code is not free — verbosity correlates with
    higher cyclomatic and cognitive complexity and more total bugs per model.


    The takeaway is that 'smarter' on a leaderboard does not mean 'leaner' or
    'more maintainable.' A verbose model can pass tests while leaving a larger
    surface area of code for humans to review, debug, and maintain. When the
    per-LOC defect rate holds but the LOC count triples, absolute tech debt
    explodes. This argues for weighting conciseness alongside correctness when
    selecting a model, and for treating output length as a quality signal, not
    just a cost signal.
stance: >-
  Frontier coding models generate dramatically more code per task over time, and
  that verbosity compounds bugs and complexity.
related:
  - INS-260605-5A8E
  - INS-260410-CAA4
  - INS-260325-9C89
  - INS-260325-8065
  - INS-260323-1302
---
Sonar's longitudinal view shows lines-of-code-per-task trending sharply upward across model generations. GPT-4.0 solved the 4,444-assignment set in under 250,000 lines; GPT 5.2 High produced roughly 1 million, and GPT 5.4 Pro High over 1.2 million. More code is not free — verbosity correlates with higher cyclomatic and cognitive complexity and more total bugs per model.

The takeaway is that 'smarter' on a leaderboard does not mean 'leaner' or 'more maintainable.' A verbose model can pass tests while leaving a larger surface area of code for humans to review, debug, and maintain. When the per-LOC defect rate holds but the LOC count triples, absolute tech debt explodes. This argues for weighting conciseness alongside correctness when selecting a model, and for treating output length as a quality signal, not just a cost signal.
