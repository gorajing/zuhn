---
id: INS-260327-1563
domain: ai-development
topic: ai-capabilities
title: >-
  Attention Residue generalizes skip connections by applying attention across
  depth dimension
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - architecture
  - attention-residue
  - residual-connections
  - transformer
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
    Attention Residue applies attention across the depth dimension rather than
    just temporal context, achieving 24% token efficiency improvement over
    standard residual connections.
  standard: >-
    Ilya Sutskever's observation that residual connections are LSTMs rotated 90
    degrees inspired a natural follow-up: if attention replaced LSTMs in the
    temporal dimension, why not replace residual connections with attention in
    the depth dimension? Attention Residue does exactly this -- instead of fixed
    addition from the previous layer, it attends to all previous hidden states
    to compute the current layer's output.


    The block variant (grouping layers and applying attention residue only
    between blocks) reduces overhead while preserving most of the benefit. A 24%
    token efficiency improvement on scaling laws means effectively gaining
    trillions of tokens worth of training data for free. This signals that even
    'solved' components like residual connections can still be fundamentally
    improved.
stance: >-
  Replacing residual connections with cross-layer attention (Attention Residue)
  yields 24% token efficiency gains, suggesting that the standard transformer
  architecture still has fundamental room for improvement in its depth
  dimension.
related:
  - INS-260320-B210
  - INS-260325-5B28
  - INS-260327-1631
  - INS-260330-AE16
  - INS-260329-33D4
  - INS-260327-C99D
  - INS-260330-1F41
  - INS-260327-9816
evidence:
  - id: INS-260329-33D4
    type: TRANSFERS_TO
    classified_at: '2026-04-02'
  - id: INS-260327-C99D
    type: EXTENDS
    classified_at: '2026-04-02'
  - id: INS-260330-1F41
    type: TRANSFERS_TO
    classified_at: '2026-04-02'
---
Ilya Sutskever's observation that residual connections are LSTMs rotated 90 degrees inspired a natural follow-up: if attention replaced LSTMs in the temporal dimension, why not replace residual connections with attention in the depth dimension? Attention Residue does exactly this -- instead of fixed addition from the previous layer, it attends to all previous hidden states to compute the current layer's output.

The block variant (grouping layers and applying attention residue only between blocks) reduces overhead while preserving most of the benefit. A 24% token efficiency improvement on scaling laws means effectively gaining trillions of tokens worth of training data for free. This signals that even 'solved' components like residual connections can still be fundamentally improved.
