---
id: INS-260327-1631
domain: ai-development
topic: llm-training
title: >-
  Linear attention with fine-grained decay enables both long memory retention
  and information refresh
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - linear-attention
  - long-context
  - kimi-linear
  - architecture
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
    KimiLinear's fine-grained diagonal decay matrix enables different channels
    to independently retain long-range context or rapidly refresh, outperforming
    both full attention and prior linear attention variants.
  standard: >-
    Standard linear attention uses a single global decay factor, forcing a
    binary choice: either forget everything (no long-range memory) or retain
    everything (no ability to refresh with new information). KimiLinear
    introduces a diagonal matrix of per-channel decay rates, allowing some
    channels to decay slowly for long-context retention while others decay
    quickly to absorb new information.


    This is the first architecture to outperform full attention across short
    context, long input, and long output tasks simultaneously while being more
    efficient at scale. The parallel chunk-wise implementation using matrix
    inversion maintains exact mathematical equivalence with no approximation.
    For the agent era where tasks require days or weeks of context, this
    architectural advance is critical infrastructure.
stance: >-
  Per-channel decay rates in linear attention (KimiLinear) solve the binary
  memory problem of standard linear attention, enabling simultaneous long-range
  retention and rapid information refresh across different channels.
related:
  - INS-260327-1563
  - INS-260329-A45D
  - INS-260403-7342
  - INS-260322-E90F
  - INS-260330-5F6C
evidence:
  - id: INS-260329-A45D
    type: TRANSFERS_TO
    classified_at: '2026-04-02'
  - id: INS-260322-E90F
    type: CHALLENGES
    classified_at: '2026-04-02'
  - id: INS-260330-5F6C
    type: TRANSFERS_TO
    classified_at: '2026-04-02'
  - id: INS-260330-2304
    type: TRANSFERS_TO
    classified_at: '2026-04-02'
---
Standard linear attention uses a single global decay factor, forcing a binary choice: either forget everything (no long-range memory) or retain everything (no ability to refresh with new information). KimiLinear introduces a diagonal matrix of per-channel decay rates, allowing some channels to decay slowly for long-context retention while others decay quickly to absorb new information.

This is the first architecture to outperform full attention across short context, long input, and long output tasks simultaneously while being more efficient at scale. The parallel chunk-wise implementation using matrix inversion maintains exact mathematical equivalence with no approximation. For the agent era where tasks require days or weeks of context, this architectural advance is critical infrastructure.
