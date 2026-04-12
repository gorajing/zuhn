---
id: INS-260412-5092
domain: investing
topic: crypto
title: >-
  Algorithmic stablecoins contain reflexive death spirals that no reserve can
  absorb once confidence breaks
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - stablecoins
  - algorithmic
  - death-spiral
  - reflexivity
  - mechanism-design
sources:
  - type: youtube
    title: 'How This Man Just Caused a $45 BILLION Crash [Terra Luna]'
    author: ColdFusion
    url: 'https://www.youtube.com/watch?v=3KZY41SqaTI'
date_extracted: '2026-04-12'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    The two-token algorithmic stablecoin model contains an inherent death spiral
    that activates when selling pressure exceeds the system's ability to print
    its way back to equilibrium.
  standard: >-
    Terra's mechanism used Luna to absorb UST volatility — when UST depegged,
    the algorithm printed more Luna to restore the peg, which crashed Luna's
    price, which further undermined confidence in UST, triggering more selling.
    This reflexive loop is mathematically inevitable once selling pressure
    exceeds a threshold. Terra's $1.5 billion emergency reserve (including
    Bitcoin) proved wholly inadequate against $4 billion in withdrawals.


    The deeper insight is that algorithmic stablecoins attempt to create
    stability from unstable components — using a volatile token (Luna) to back a
    stable token (UST) is like using a rubber band as a foundation. Every
    previous algorithmic stablecoin (Iron/Titan, Basis) failed identically. The
    pattern suggests this is not an implementation problem but a category
    problem: stability cannot be algorithmically conjured from tokens that
    derive their value from the very system they're supposed to stabilize. This
    is financial circular logic, and markets eventually call the bluff.
stance: >-
  Algorithmic stablecoins that use a secondary token to absorb volatility create
  reflexive feedback loops where depegging triggers selling that causes further
  depegging, and no finite reserve can arrest this spiral once it passes a
  critical threshold
related:
  - INS-260403-EA6D
  - PRI-260406-311D
  - PRI-260407-68B9
  - INS-260403-3518
  - INS-260325-206C
---
Terra's mechanism used Luna to absorb UST volatility — when UST depegged, the algorithm printed more Luna to restore the peg, which crashed Luna's price, which further undermined confidence in UST, triggering more selling. This reflexive loop is mathematically inevitable once selling pressure exceeds a threshold. Terra's $1.5 billion emergency reserve (including Bitcoin) proved wholly inadequate against $4 billion in withdrawals.

The deeper insight is that algorithmic stablecoins attempt to create stability from unstable components — using a volatile token (Luna) to back a stable token (UST) is like using a rubber band as a foundation. Every previous algorithmic stablecoin (Iron/Titan, Basis) failed identically. The pattern suggests this is not an implementation problem but a category problem: stability cannot be algorithmically conjured from tokens that derive their value from the very system they're supposed to stabilize. This is financial circular logic, and markets eventually call the bluff.
