---
id: INS-260328-C246
domain: ai-development
topic: ai-capabilities
title: 'AGI requires AlphaZero-style planning layered on top of LLMs, not just scaling'
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - agi-architecture
  - planning
  - reinforcement-learning
  - world-models
  - search
sources:
  - type: youtube
    title: 'Demis Hassabis — Scaling, superhuman AIs, AlphaZero atop LLMs, AlphaFold'
    author: Dwarkesh Patel
    url: 'https://www.youtube.com/watch?v=qTogNUV3CAI'
date_extracted: '2026-03-28'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Hassabis argues AGI will combine LLMs as world models with AlphaZero-like
    planning/search mechanisms on top.
  standard: >-
    Demis Hassabis frames the path to AGI as a two-layer system: large
    multimodal models that serve as increasingly accurate world models, with
    AlphaZero-style planning and search mechanisms operating on top. He draws
    the analogy to chess — brute-force systems like Deep Blue search millions of
    positions, AlphaZero searches tens of thousands, and human grandmasters
    search only hundreds, because better models enable more efficient search.
    The implication is that improving LLM quality directly reduces the compute
    needed for planning. This contradicts pure scaling hypotheses that suggest
    simply making models bigger will produce AGI. Hassabis bets that the final
    AGI system will use large multimodal models as a foundation but will require
    additional planning and search capabilities that current LLMs lack —
    specifically the ability to chain reasoning, explore possibility spaces, and
    achieve concrete goals in the world.
stance: >-
  LLMs as world models are necessary but insufficient for AGI — planning,
  search, and goal-directed reasoning layered on top are the missing components
  that pure scaling will not produce.
related:
  - INS-260322-83D4
  - INS-260321-C513
  - INS-260328-4717
  - INS-260323-4EE4
  - INS-260403-FFF0
  - INS-260327-30E4
evidence:
  - id: INS-260321-C513
    type: SUPPORTS
    classified_at: '2026-04-02'
  - id: INS-260327-30E4
    type: SUPPORTS
    classified_at: '2026-04-02'
  - id: INS-260329-E208
    type: TRANSFERS_TO
    classified_at: '2026-04-02'
---
Demis Hassabis frames the path to AGI as a two-layer system: large multimodal models that serve as increasingly accurate world models, with AlphaZero-style planning and search mechanisms operating on top. He draws the analogy to chess — brute-force systems like Deep Blue search millions of positions, AlphaZero searches tens of thousands, and human grandmasters search only hundreds, because better models enable more efficient search. The implication is that improving LLM quality directly reduces the compute needed for planning. This contradicts pure scaling hypotheses that suggest simply making models bigger will produce AGI. Hassabis bets that the final AGI system will use large multimodal models as a foundation but will require additional planning and search capabilities that current LLMs lack — specifically the ability to chain reasoning, explore possibility spaces, and achieve concrete goals in the world.
