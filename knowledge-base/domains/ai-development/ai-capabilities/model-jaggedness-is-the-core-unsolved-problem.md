---
id: INS-260321-80A9
domain: ai-development
topic: ai-capabilities
title: Model jaggedness is the core unsolved problem
actionability: reference
confidence: high
shelf_life: time-sensitive
status: active
tags:
  - model-capabilities
  - jaggedness
  - reinforcement-learning
  - limitations
sources:
  - type: youtube
    title: 'Andrej Karpathy on Code Agents, AutoResearch, and the Loopy Era of AI'
    author: 'No Priors: AI, Machine Learning, Tech, & Startups'
    url: 'https://youtu.be/kwSVtQ7dziU'
date_extracted: '2026-03-21'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Models simultaneously feel like a brilliant PhD and a 10-year-old — they're
    superhuman in RL-trained domains and mediocre outside them. This jaggedness
    doesn't improve with scale.
  standard: >-
    Karpathy describes the jaggedness problem: models trained via RL excel at
    anything with objective metrics (code, math) but stagnate in unverifiable
    domains (jokes, nuance, knowing when to ask clarifying questions). The same
    model that moves mountains on agentic tasks still tells the same atom joke
    from 4 years ago. This isn't improving with scale because RL only optimizes
    what it can measure. You're either on-rails (speed of light) or off-rails
    (everything meanders).
related:
  - PRI-260405-FB37
  - PRI-260403-EA13
  - PRI-260323-8E89
  - INS-260402-FEA3
  - PRI-260407-F684
  - INS-260402-86C4
  - INS-260330-8907
stance: >-
  Models simultaneously feel like a brilliant PhD and a 10-year-old — they're
  superhuman in RL-trained domains and mediocre outside them
evidence:
  - id: INS-260330-CC7D
    type: TRANSFERS_TO
    classified_at: '2026-04-02'
  - id: INS-260325-E84D
    type: TRANSFERS_TO
    classified_at: '2026-04-02'
  - id: INS-260323-1930
    type: EXTENDS
    classified_at: '2026-04-02'
  - id: INS-260330-8907
    type: TRANSFERS_TO
    classified_at: '2026-04-02'
  - id: INS-260323-C0BD
    type: SUPPORTS
    classified_at: '2026-04-02'
  - id: INS-260402-FEA3
    type: CHALLENGES
    classified_at: '2026-04-02'
  - id: INS-260402-86C4
    type: TRANSFERS_TO
    classified_at: '2026-04-02'
---
Karpathy describes the jaggedness problem: models trained via RL excel at anything with objective metrics (code, math) but stagnate in unverifiable domains (jokes, nuance, knowing when to ask clarifying questions). The same model that moves mountains on agentic tasks still tells the same atom joke from 4 years ago. This isn't improving with scale because RL only optimizes what it can measure. You're either on-rails (speed of light) or off-rails (everything meanders).
