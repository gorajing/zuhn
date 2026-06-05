---
id: INS-260605-15E9
domain: ai-development
topic: model-architecture
title: >-
  The simple architecture that scales beats the clever one optimized for
  hardware
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - flash-attention
  - scaling
  - premature-optimization
  - transformers
sources:
  - type: youtube
    title: 'How Transformers Finally Ate Vision – Isaac Robinson, Roboflow'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=VhfAVA3BG2I'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Every architecture (Swin, ConvNeXt, Hera) that beat the plain VIT on
    efficiency lost its edge once flash attention was applied to the VIT.
  standard: >-
    The field repeatedly tried to fix the VIT's absurd n^4 compute: Swin added
    windowed local attention to get back to n-squared, ConvNeXt ported
    transformer learnings back into a convolutional net and beat both, and Hera
    showed real speedups for equal accuracy. But Hera's paper measured its
    speedup without flash attention; add flash attention back to the plain VIT
    and the advantage evaporates. This is a recurring pattern in ML: bespoke
    efficiency tricks get overrun by general infrastructure investment flowing
    in from the broader ecosystem (here, the LLM world's obsession with
    attention). The takeaway for builders is to be wary of optimizing
    architecture for current hardware constraints — the simple thing that scales
    well tends to win because the whole industry is pouring money into making
    the simple primitive (attention) fast. Bet on the primitive that attracts
    ecosystem investment, not the clever workaround.
stance: >-
  Architectural cleverness aimed at efficiency loses once general-purpose
  infrastructure speedups arrive.
related:
  - INS-260403-B16E
  - INS-260501-033B
  - INS-260605-FC5B
  - INS-260605-DD2A
  - INS-260327-5CB0
  - PRI-260323-BA94
---
The field repeatedly tried to fix the VIT's absurd n^4 compute: Swin added windowed local attention to get back to n-squared, ConvNeXt ported transformer learnings back into a convolutional net and beat both, and Hera showed real speedups for equal accuracy. But Hera's paper measured its speedup without flash attention; add flash attention back to the plain VIT and the advantage evaporates. This is a recurring pattern in ML: bespoke efficiency tricks get overrun by general infrastructure investment flowing in from the broader ecosystem (here, the LLM world's obsession with attention). The takeaway for builders is to be wary of optimizing architecture for current hardware constraints — the simple thing that scales well tends to win because the whole industry is pouring money into making the simple primitive (attention) fast. Bet on the primitive that attracts ecosystem investment, not the clever workaround.
