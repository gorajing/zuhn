---
id: INS-260330-B153
domain: ai-development
topic: system-building
title: >-
  Reference-free quality estimation models enable translation quality
  measurement at scale without human translators
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - quality-estimation
  - translation-quality
  - evaluation
  - roblox
sources:
  - type: pdf
    title: >-
      @u.northwestern.edu Mail - How Roblox Uses AI to Translate 16 Languages in
      100 Milliseconds
date_extracted: '2026-03-30'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Score translation quality without reference translations by training a
    separate quality estimation model on human error judgments
  standard: >-
    Standard translation metrics require a 'correct' human reference translation
    to compare against. For 256 language directions at Roblox's volume,
    producing reference translations is impossible. Roblox built a separate
    quality estimation model trained on human-labeled error types and severity
    scores (critical, major, minor). It evaluates accuracy (additions,
    omissions, mistranslations), fluency (grammar, spelling), and reference
    consistency (contextual coherence) — all without needing a ground-truth
    translation. The inherent limitation: the quality model could have
    systematic biases that overlap with the translation model's own weaknesses.
    Pragmatic, not perfect.
stance: >-
  Building a separate ML model that scores translation quality using only the
  source text and machine output — without reference translations — is the only
  viable approach to quality measurement at scale across hundreds of language
  directions
related:
  - INS-260330-206C
  - PRI-260320-8205
  - INS-260323-584D
  - INS-260330-1282
  - INS-260403-9DE0
evidence:
  - id: INS-260330-1282
    type: TRANSFERS_TO
    classified_at: '2026-04-02'
  - id: INS-260403-9DE0
    type: SUPPORTS
    classified_at: '2026-04-05'
---
Standard translation metrics require a 'correct' human reference translation to compare against. For 256 language directions at Roblox's volume, producing reference translations is impossible. Roblox built a separate quality estimation model trained on human-labeled error types and severity scores (critical, major, minor). It evaluates accuracy (additions, omissions, mistranslations), fluency (grammar, spelling), and reference consistency (contextual coherence) — all without needing a ground-truth translation. The inherent limitation: the quality model could have systematic biases that overlap with the translation model's own weaknesses. Pragmatic, not perfect.
