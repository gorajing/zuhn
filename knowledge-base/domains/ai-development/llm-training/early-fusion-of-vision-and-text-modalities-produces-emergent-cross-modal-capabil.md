---
id: INS-260327-1B9A
domain: ai-development
topic: llm-training
title: >-
  Early fusion of vision and text modalities produces emergent cross-modal
  capabilities
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - multimodal
  - early-fusion
  - vision-language
  - emergent-capabilities
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
    Kimi K2.5's early fusion of vision and text from pre-training day one
    produced emergent vision-to-code capabilities and mutual enhancement between
    modalities.
  standard: >-
    Previous open models added vision capabilities as a post-training step on
    top of a text-only base (late fusion). Kimi K2.5 instead merged vision and
    text tokens from the start of pre-training. The surprising finding was
    bidirectional enhancement: vision RL (using only visual tasks) improved text
    reasoning benchmarks, and strong text training eliminated the need for
    vision SFT data entirely (zero vision SFT).


    This challenges the assumption that adding modalities creates a capability
    tax. When properly aligned in a shared representation space from
    pre-training, modalities amplify each other. The practical implication is
    that future model architectures should lean toward early multimodal fusion
    rather than bolting on modalities after the fact.
stance: >-
  Training vision and text jointly from day one (early fusion) produces emergent
  capabilities like vision-to-code that late fusion approaches cannot achieve,
  and the modalities actually enhance each other rather than competing.
related:
  - INS-260323-042C
  - INS-260323-D400
  - INS-260322-B09B
  - INS-260329-58E7
  - INS-260330-72D9
evidence:
  - id: INS-260329-70D5
    type: TRANSFERS_TO
    classified_at: '2026-04-02'
  - id: INS-260323-D400
    type: SUPPORTS
    classified_at: '2026-04-02'
  - id: INS-260329-979B
    type: TRANSFERS_TO
    classified_at: '2026-04-02'
---
Previous open models added vision capabilities as a post-training step on top of a text-only base (late fusion). Kimi K2.5 instead merged vision and text tokens from the start of pre-training. The surprising finding was bidirectional enhancement: vision RL (using only visual tasks) improved text reasoning benchmarks, and strong text training eliminated the need for vision SFT data entirely (zero vision SFT).

This challenges the assumption that adding modalities creates a capability tax. When properly aligned in a shared representation space from pre-training, modalities amplify each other. The practical implication is that future model architectures should lean toward early multimodal fusion rather than bolting on modalities after the fact.
