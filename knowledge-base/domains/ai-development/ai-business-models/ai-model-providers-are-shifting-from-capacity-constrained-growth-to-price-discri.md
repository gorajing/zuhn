---
id: INS-260423-B612
domain: ai-development
topic: ai-business-models
title: >-
  AI model providers are shifting from capacity-constrained growth to price
  discrimination as their first monetization lever
actionability: reference
confidence: high
shelf_life: time-sensitive
status: active
tags:
  - pricing-strategy
  - capacity-constraints
  - tokens
  - model-economics
sources:
  - type: youtube
    title: >-
      OpenAI Buys TBPN & Their Management Team Reboot | Mercor Hack & Why Now is
      the Time for Cyber
    author: 20VC with Harry Stebbings
    url: 'https://youtu.be/cUngseNueP8'
date_extracted: '2026-04-23'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Rory: what do you do when you can sell more if you had more, but you can't
    make more? You start allocating capacity based on money — exactly what
    anyone in economics would say to do.
  standard: >-
    The first phase of LLM pricing (2022-2025) was growth-optimized: flat-rate
    plans, aggressive usage allowances, unlimited-feel positioning. This worked
    because model providers were capacity-abundant relative to demand. By 2026,
    the inversion is complete: providers are capacity-constrained against
    exploding demand, and flat-rate pricing systematically misallocates scarce
    compute toward heavy users (coding-agent users consuming vast tokens on
    fixed price plans). The observable response: Anthropic restricting Claude
    Code access on base plans, OpenAI de-emphasizing video generation that
    consumes disproportionate compute per revenue dollar. The deeper pattern is
    the industry moving from bundle pricing to usage-proportional pricing, which
    is the classical economic response to supply constraint. For builders on top
    of these APIs, this has two immediate implications: (1) plan switching costs
    at the provider level are a real risk and should be diversified through
    multi-model architectures, (2) the window for cheap flat-rate usage of
    frontier models is closing, and applications whose unit economics depend on
    flat-rate model access should be re-priced against usage-proportional costs
    now rather than after surprise price changes.
stance: >-
  The pattern of capacity-constrained AI model providers restricting flat-rate
  plans (Claude Code on base plan) and degrading high-cost features (OpenAI's
  video emphasis changes) signals the industry's first coordinated shift toward
  pricing tokens closer to their marginal value rather than fixed-rate bundles
related:
  - INS-260330-A1A4
  - INS-260330-9751
  - INS-260409-526E
  - INS-260412-D883
  - PRI-260406-BE21
  - PRI-260412-52DA
  - INS-260321-52EF
---
The first phase of LLM pricing (2022-2025) was growth-optimized: flat-rate plans, aggressive usage allowances, unlimited-feel positioning. This worked because model providers were capacity-abundant relative to demand. By 2026, the inversion is complete: providers are capacity-constrained against exploding demand, and flat-rate pricing systematically misallocates scarce compute toward heavy users (coding-agent users consuming vast tokens on fixed price plans). The observable response: Anthropic restricting Claude Code access on base plans, OpenAI de-emphasizing video generation that consumes disproportionate compute per revenue dollar. The deeper pattern is the industry moving from bundle pricing to usage-proportional pricing, which is the classical economic response to supply constraint. For builders on top of these APIs, this has two immediate implications: (1) plan switching costs at the provider level are a real risk and should be diversified through multi-model architectures, (2) the window for cheap flat-rate usage of frontier models is closing, and applications whose unit economics depend on flat-rate model access should be re-priced against usage-proportional costs now rather than after surprise price changes.
