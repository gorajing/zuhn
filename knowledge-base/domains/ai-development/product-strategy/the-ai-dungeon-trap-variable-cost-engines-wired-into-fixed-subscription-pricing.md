---
id: INS-260325-206C
domain: ai-development
topic: product-strategy
title: >-
  The AI Dungeon trap — variable cost engines wired into fixed subscription
  pricing erode margins as your best users scale
actionability: immediate
confidence: very_high
shelf_life: time-sensitive
status: active
tags:
  - unit-economics
  - pricing
  - variable-costs
  - ai-dungeon
  - margin-erosion
  - saas
sources:
  - type: blog
    title: 8 Cofounder Conflict Myths That Sabotage Startups
    url: >-
      https://www.psychologytoday.com/us/blog/scaling-connection/202504/8-cofounder-conflict-myths-that-sabotage-startups
date_extracted: '2026-03-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    AI Dungeon's near-death from token costs is the cautionary tale:
    variable-cost AI engines inside fixed-price subscriptions create margin
    erosion that grows with your best users.
  standard: >-
    The Latitude / AI Dungeon case study is the canonical warning for AI product
    economics. AI Dungeon used OpenAI APIs for text adventure generation — as
    stories got longer, token costs grew with engagement. Monthly AI costs
    climbed into hundreds of thousands. The most loyal users created the highest
    costs. This pattern is being replicated in B2B SaaS: a hypothetical
    'DashCorp' bundles 'chat with your data' into a $30/user/month plan, but
    power users pasting large CSVs cost $40/month in model and retrieval costs.
    The feature looks like a win on engagement metrics while quietly destroying
    margins. The fix requires usage caps, smart model routing (cheap models for
    simple tasks, expensive for complex), and treating the model layer as a
    utility with an orchestration layer for provider flexibility.
stance: >-
  Products that wire LLM costs into flat subscription pricing create a perverse
  dynamic where the most engaged users become the most expensive, quietly
  erasing margins that top-line growth masks.
related:
  - INS-260403-FF45
  - INS-260323-FEAB
  - INS-260405-6A94
  - INS-260402-24B0
  - INS-260323-7625
  - INS-260404-BEAA
  - INS-260409-B15B
  - INS-260410-1996
  - INS-260412-5092
evidence:
  - id: INS-260323-FEAB
    type: SUPPORTS
    classified_at: '2026-04-02'
  - id: INS-260330-0998
    type: CHALLENGES
    classified_at: '2026-04-02'
  - id: INS-260322-E20E
    type: SUPPORTS
    classified_at: '2026-04-02'
  - id: INS-260325-4FF3
    type: SUPPORTS
    classified_at: '2026-04-02'
  - id: INS-260404-B46E
    type: TRANSFERS_TO
    classified_at: '2026-04-05'
  - id: INS-260404-2D53
    type: TRANSFERS_TO
    classified_at: '2026-04-05'
  - id: INS-260403-3864
    type: CHALLENGES
    classified_at: '2026-04-05'
---
The Latitude / AI Dungeon case study is the canonical warning for AI product economics. AI Dungeon used OpenAI APIs for text adventure generation — as stories got longer, token costs grew with engagement. Monthly AI costs climbed into hundreds of thousands. The most loyal users created the highest costs. This pattern is being replicated in B2B SaaS: a hypothetical 'DashCorp' bundles 'chat with your data' into a $30/user/month plan, but power users pasting large CSVs cost $40/month in model and retrieval costs. The feature looks like a win on engagement metrics while quietly destroying margins. The fix requires usage caps, smart model routing (cheap models for simple tasks, expensive for complex), and treating the model layer as a utility with an orchestration layer for provider flexibility.
