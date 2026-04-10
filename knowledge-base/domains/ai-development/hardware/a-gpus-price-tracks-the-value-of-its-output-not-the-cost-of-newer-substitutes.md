---
id: INS-260410-4696
domain: ai-development
topic: hardware
title: >-
  A GPU's price tracks the value of its output, not the cost of newer
  substitutes
actionability: reference
confidence: high
shelf_life: time-sensitive
status: active
tags:
  - gpu-economics
  - depreciation
  - compute-constraint
  - inference-economics
sources:
  - type: youtube
    title: Dylan Patel — The single biggest bottleneck to scaling AI compute
    author: Dwarkesh Patel
    url: 'https://www.youtube.com/watch?v=mDG_Hx3BSUE'
date_extracted: '2026-04-10'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    An H100 is worth more today than three years ago because the models it runs
    generate far more value per token than GPT-4 did, and you can't just buy a
    Rubin instead.
  standard: >-
    The bearish GPU-depreciation narrative assumes you can always substitute a
    newer chip (Blackwell, Rubin) at higher perf/$. That's only true if supply
    is elastic. It isn't. ASML, HBM, and CoWoS all cap how fast new chips
    arrive, so the pricing of an H100 is set not by what a Rubin would cost but
    by the marginal value of what the H100 can produce today.


    GPT-5-class models are smaller (sparser MoE), run more tokens per H100, and
    each token is worth dramatically more than a GPT-4 token — expanding the TAM
    from tens of billions to north of a hundred billion. That value flows back
    into the spot price of the chip, and Patel has seen two-to-three-year H100
    deals sign at $2.40/hour versus the $1.40 TCO build cost. Gross margins have
    inflected upward, not down.


    The practical implication: the 'five-year depreciation is aggressive' bear
    case (Michael Burry) has it backwards. In a compute-limited world with
    rising model value, depreciation cycles may actually run longer than
    reported, and early long-term compute contracts are locking in structural
    margin advantages that can't be competed away until supply catches up.
stance: >-
  When compute is severely supply-constrained, older GPUs appreciate instead of
  depreciating because their price is set by the value of tokens they can
  produce today, not by the marginal cost of newer chips.
related:
  - INS-260327-A22D
  - INS-260405-547E
  - INS-260409-8408
  - INS-260410-AA93
  - PRI-260405-B144
  - INS-260322-5790
  - PRI-260407-7AE9
---
The bearish GPU-depreciation narrative assumes you can always substitute a newer chip (Blackwell, Rubin) at higher perf/$. That's only true if supply is elastic. It isn't. ASML, HBM, and CoWoS all cap how fast new chips arrive, so the pricing of an H100 is set not by what a Rubin would cost but by the marginal value of what the H100 can produce today.

GPT-5-class models are smaller (sparser MoE), run more tokens per H100, and each token is worth dramatically more than a GPT-4 token — expanding the TAM from tens of billions to north of a hundred billion. That value flows back into the spot price of the chip, and Patel has seen two-to-three-year H100 deals sign at $2.40/hour versus the $1.40 TCO build cost. Gross margins have inflected upward, not down.

The practical implication: the 'five-year depreciation is aggressive' bear case (Michael Burry) has it backwards. In a compute-limited world with rising model value, depreciation cycles may actually run longer than reported, and early long-term compute contracts are locking in structural margin advantages that can't be competed away until supply catches up.
