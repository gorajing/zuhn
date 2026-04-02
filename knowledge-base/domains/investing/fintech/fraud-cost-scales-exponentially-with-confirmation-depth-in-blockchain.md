---
id: INS-260330-4370
domain: investing
topic: fintech
title: Fraud cost scales exponentially with confirmation depth in blockchain
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - compounding
  - risk-management
  - game-theory
  - probability
  - security
sources:
  - type: youtube
    title: But how does bitcoin actually work?
    author: 3Blue1Brown
    url: 'https://www.youtube.com/watch?v=bBC-nXj3Ng4'
date_extracted: '2026-03-30'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Waiting for multiple block confirmations creates exponentially increasing
    security because a fraudster must outpace the entire honest network for each
    additional block.
  standard: >-
    Bitcoin's double-spend protection isn't binary — it's a probability curve.
    After one confirmation, an attacker with significant hash power might
    succeed. After six confirmations (the common standard), the probability of
    successful fraud drops to near zero unless the attacker controls >50% of
    network hash power. Each new block compounds the difficulty because the
    attacker must produce blocks faster than the combined honest network for an
    ever-growing chain. This creates a fascinating security model: rather than a
    hard boundary between safe and unsafe, there's an exponential decay of risk
    over time. The pattern generalizes to any reputation or trust system — the
    longer consistent behavior persists, the exponentially harder it becomes to
    sustain a deception.
stance: >-
  Each additional block confirmation makes double-spend attacks exponentially
  more expensive, creating a natural probabilistic security gradient rather than
  a binary safe/unsafe threshold.
related:
  - INS-260322-2D2F
  - INS-260330-90C3
  - INS-260323-92AD
  - INS-260330-7FFE
  - INS-260330-BA13
---
Bitcoin's double-spend protection isn't binary — it's a probability curve. After one confirmation, an attacker with significant hash power might succeed. After six confirmations (the common standard), the probability of successful fraud drops to near zero unless the attacker controls >50% of network hash power. Each new block compounds the difficulty because the attacker must produce blocks faster than the combined honest network for an ever-growing chain. This creates a fascinating security model: rather than a hard boundary between safe and unsafe, there's an exponential decay of risk over time. The pattern generalizes to any reputation or trust system — the longer consistent behavior persists, the exponentially harder it becomes to sustain a deception.
