---
id: INS-260327-BE4E
domain: ai-development
topic: llm-training
title: >-
  Token efficiency improvements raise the upper bound of intelligence, not just
  reduce cost
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - scaling-laws
  - token-efficiency
  - muon-optimizer
  - training-data
sources:
  - type: youtube
    title: How We Scaled Kimi K2.5 | Zhilin Yang's full GTC 2026 Keynote
    author: Kimi AI
    url: 'https://youtu.be/CwePo4847ho'
date_extracted: '2026-03-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Token efficiency gains like the Muon optimizer effectively multiply finite
    high-quality data, pushing intelligence ceilings higher rather than merely
    reducing infrastructure cost.
  standard: >-
    The conventional view treats optimizer improvements as cost savings -- train
    the same model cheaper. But Zhilin Yang reframes this: with roughly 50
    trillion high-quality tokens available, a 2x token efficiency gain from the
    Muon optimizer is equivalent to having 100 trillion tokens. Since we're
    hitting data walls, this directly raises the upper bound of achievable
    intelligence.


    This reframing matters for resource allocation. Investment in better
    optimizers and architectures that improve token efficiency has compounding
    returns -- it's not just infrastructure efficiency, it's capability
    expansion. The Muon optimizer achieved this by ensuring each gradient update
    produces orthogonal entries, fundamentally different from AdamW, and
    required novel techniques (decay and RMS adjustment) to scale to 1 trillion
    parameters.
stance: >-
  Improving token efficiency is fundamentally about expanding the intelligence
  frontier, not just saving compute, because high-quality training data is
  finite and a 2x efficiency gain effectively doubles available data.
related:
  - INS-260323-4E12
  - INS-260325-FD14
  - INS-260322-1A20
  - INS-260330-A660
  - INS-260322-474A
  - INS-260330-697F
  - INS-260330-30AB
  - INS-260330-5F36
  - INS-260330-3879
evidence:
  - id: INS-260325-FD14
    type: SUPPORTS
    classified_at: '2026-04-02'
  - id: INS-260322-1A20
    type: CHALLENGES
    classified_at: '2026-04-02'
  - id: INS-260330-A660
    type: TRANSFERS_TO
    classified_at: '2026-04-02'
  - id: INS-260330-697F
    type: TRANSFERS_TO
    classified_at: '2026-04-02'
  - id: INS-260330-30AB
    type: SUPPORTS
    classified_at: '2026-04-02'
  - id: INS-260330-3879
    type: TRANSFERS_TO
    classified_at: '2026-04-02'
  - id: INS-260330-70F5
    type: TRANSFERS_TO
    classified_at: '2026-04-02'
---
The conventional view treats optimizer improvements as cost savings -- train the same model cheaper. But Zhilin Yang reframes this: with roughly 50 trillion high-quality tokens available, a 2x token efficiency gain from the Muon optimizer is equivalent to having 100 trillion tokens. Since we're hitting data walls, this directly raises the upper bound of achievable intelligence.

This reframing matters for resource allocation. Investment in better optimizers and architectures that improve token efficiency has compounding returns -- it's not just infrastructure efficiency, it's capability expansion. The Muon optimizer achieved this by ensuring each gradient update produces orthogonal entries, fundamentally different from AdamW, and required novel techniques (decay and RMS adjustment) to scale to 1 trillion parameters.
