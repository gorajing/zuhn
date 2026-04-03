---
id: INS-260328-D1B2
domain: ai-development
topic: ai-market-dynamics
title: 'LLM scaling is following a sigmoid curve, not exponential growth'
actionability: reference
confidence: medium
shelf_life: time-sensitive
status: active
tags:
  - scaling-laws
  - diminishing-returns
  - sigmoid-curve
  - llm-economics
sources:
  - type: youtube
    title: 'Fireside Chat #15: Making Large Language Models Uncool Again'
    author: Outerbounds
    url: 'https://www.youtube.com/watch?v=6LXw2beprGI'
date_extracted: '2026-03-28'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Jeremy Howard argues that LLM progress looks sigmoid rather than exponential
    — you need ridiculously large money for slightly better results.
  standard: >-
    Howard points out that while LLM progress looked exponential in early 2023
    (around GPT-4's release), by late 2023 all signs pointed to a sigmoid curve
    flattening out. The evidence: GPT-4 Turbo was worse than the original GPT-4,
    inference costs remained high, and each marginal improvement required
    disproportionately more compute investment.


    This has major strategic implications. A sigmoid trajectory means AI becomes
    a normal competitive technology where multiple players can compete, rather
    than a winner-take-all dynamic. It's more comfortable for society but
    disappointing for those expecting post-scarcity superintelligence. For
    builders, it means fine-tuning smaller open-source models becomes relatively
    more valuable compared to chasing frontier scale.
stance: >-
  LLM capability improvements are hitting diminishing returns where massive
  compute increases yield only marginal quality gains, making the technology
  more like a normal competitive market than a winner-take-all exponential race.
related:
  - INS-260403-1CB1
  - INS-260330-C499
  - INS-260330-FF5B
  - INS-260330-05C7
  - INS-260330-30AB
  - INS-260329-577E
  - INS-260329-9C20
  - INS-260330-08E1
evidence:
  - id: INS-260330-C499
    type: CONTRADICTS
    classified_at: '2026-04-02'
  - id: INS-260330-05C7
    type: CONTRADICTS
    classified_at: '2026-04-02'
  - id: INS-260330-30AB
    type: CHALLENGES
    classified_at: '2026-04-02'
  - id: INS-260329-577E
    type: TRANSFERS_TO
    classified_at: '2026-04-02'
  - id: INS-260329-9C20
    type: TRANSFERS_TO
    classified_at: '2026-04-02'
  - id: INS-260330-08E1
    type: TRANSFERS_TO
    classified_at: '2026-04-02'
---
Howard points out that while LLM progress looked exponential in early 2023 (around GPT-4's release), by late 2023 all signs pointed to a sigmoid curve flattening out. The evidence: GPT-4 Turbo was worse than the original GPT-4, inference costs remained high, and each marginal improvement required disproportionately more compute investment.

This has major strategic implications. A sigmoid trajectory means AI becomes a normal competitive technology where multiple players can compete, rather than a winner-take-all dynamic. It's more comfortable for society but disappointing for those expecting post-scarcity superintelligence. For builders, it means fine-tuning smaller open-source models becomes relatively more valuable compared to chasing frontier scale.
