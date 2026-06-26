---
id: INS-260605-365A
domain: ai-development
topic: research-methodology
title: Evals are mandatory to detect when added context is hurting
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - evals
  - measurement
  - non-determinism
  - feedback-loop
sources:
  - type: youtube
    title: >-
      How I deleted 95% of my agent skills and got better results — Nick Nisi,
      WorkOS
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=vy7o1g2iHY8'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Measure agent accuracy with evals because non-deterministic systems hide
    regressions — Nisi only discovered a skill was lowering accuracy 97%→77% by
    measuring.
  standard: >-
    Nisi's central epistemic point: 'measure, don't pursue.' With
    non-deterministic code, intuition is unreliable — he was convinced 10,000
    lines of skills helped, and only evals revealed they hurt. Trust should be a
    pass rate, a hash, or a delta score, not a feeling. He recommends Claude's
    eval skill that produces side-by-side HTML comparisons (with skill vs.
    without). For agent-facing products specifically, evals locate exactly where
    the model fails for your product so you can target gotchas there rather than
    adding noise. The discipline mirrors test-driven development applied to
    probabilistic systems.
stance: >-
  Without evals you cannot tell that your 'improvements' to an agent are
  silently degrading its accuracy.
related:
  - INS-260330-3ADD
  - INS-260410-AF66
  - INS-260410-A27C
  - INS-260413-AD37
  - INS-260605-72C4
  - INS-260605-36E9
  - INS-260605-FCDA
  - INS-260625-BB42
  - INS-260605-AABE
  - INS-260625-26F5
---
Nisi's central epistemic point: 'measure, don't pursue.' With non-deterministic code, intuition is unreliable — he was convinced 10,000 lines of skills helped, and only evals revealed they hurt. Trust should be a pass rate, a hash, or a delta score, not a feeling. He recommends Claude's eval skill that produces side-by-side HTML comparisons (with skill vs. without). For agent-facing products specifically, evals locate exactly where the model fails for your product so you can target gotchas there rather than adding noise. The discipline mirrors test-driven development applied to probabilistic systems.
