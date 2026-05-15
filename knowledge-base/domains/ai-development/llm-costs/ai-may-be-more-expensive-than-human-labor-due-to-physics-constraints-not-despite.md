---
id: INS-260514-60D5
domain: ai-development
topic: llm-costs
title: >-
  AI may be more expensive than human labor due to physics constraints, not
  despite software economics
actionability: reference
confidence: low
shelf_life: time-sensitive
status: active
tags:
  - ai-economics
  - inference-costs
  - physics
  - scaling-limits
sources:
  - type: youtube
    title: they're all out of data.
    author: Mo Bitar
    url: 'https://youtu.be/7tnwGolP9xE'
date_extracted: '2026-05-14'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Imagine humanity reaching the precipice of AI revolution but it fizzles
    because the models couldn't survive in our atmosphere of money.
  standard: >-
    Mo Bitar's contrarian point: the software economics intuition ('we can spin
    up a billion of these for every human') doesn't hold for AI. Inference
    compute, electricity, and chip supply are physically constrained in ways
    traditional software wasn't. The actual deployed population of AI is super
    constrained relative to expectations. AI may turn out to be more expensive
    than humans for many tasks despite being marketed as cheaper. The economics
    may force AI into a much narrower deployment footprint than the hype
    suggests.


    Application: when modeling AI deployment economics for a product (Memric
    audit, BioRender, etc.), don't anchor on 'AI is essentially free at scale.'
    Anchor on 'AI has compute costs that compound with usage and don't asymptote
    to zero like traditional software.' This changes pricing, capacity planning,
    and competitive positioning materially.
stance: >-
  The presumed 'AI is cheap because it's software' economics may be wrong — AI
  inference economics scale with compute, electricity, and chip supply, all of
  which are constrained by physical limits that don't apply to traditional
  software, potentially making AI more expensive than the human labor it claims
  to replace.
related:
  - INS-260325-02F2
  - PRI-260328-E1CE
  - PRI-260328-BF67
  - PRI-260406-4EBD
  - INS-260403-EC8A
---
Mo Bitar's contrarian point: the software economics intuition ('we can spin up a billion of these for every human') doesn't hold for AI. Inference compute, electricity, and chip supply are physically constrained in ways traditional software wasn't. The actual deployed population of AI is super constrained relative to expectations. AI may turn out to be more expensive than humans for many tasks despite being marketed as cheaper. The economics may force AI into a much narrower deployment footprint than the hype suggests.

Application: when modeling AI deployment economics for a product (Memric audit, BioRender, etc.), don't anchor on 'AI is essentially free at scale.' Anchor on 'AI has compute costs that compound with usage and don't asymptote to zero like traditional software.' This changes pricing, capacity planning, and competitive positioning materially.
