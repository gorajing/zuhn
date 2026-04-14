---
id: INS-260402-B36F
domain: startups
topic: product-strategy
title: >-
  Distribution-first PRDs require every feature to answer how it
  self-distributes and at what unit cost
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - product-management
  - prd
  - distribution
  - feature-design
  - ai-products
sources:
  - type: blog
    title: OpenAI’s Product Lead on Winning AI Through Distribution
    author: Miqdad Jaffer
    url: 'https://www.thevccorner.com/p/openai-ai-distribution-strategy'
date_extracted: '2026-04-02'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Every AI feature PRD should specify how the feature distributes itself,
    where it inserts into existing workflows, and whether its economics improve
    at 10x scale.
  standard: >-
    Traditional PRDs cover feature description, user stories, and success
    metrics. For AI products, this is insufficient because features commoditize
    in weeks and every usage has real compute cost. A Distribution-First PRD
    adds three non-negotiable sections: the distribution mechanism (how does
    this feature spread itself?), the workflow insertion point (where in the
    user's daily routine does this live?), and the economic impact (what does it
    cost to distribute this at 10x scale?).


    Runway's Generative Fill created outputs artists shared on TikTok —
    distribution was built into using the feature. Clay's enrichment suggestions
    appear inside email and calendar with no behavior change required.
    Perplexity added retrieval to cut token costs so distribution wouldn't
    bankrupt them. The litmus test is: does this feature create its own
    distribution loop, insert into an existing workflow, generate viral
    artifacts or data flywheels, and improve economics with scale? If it can't
    pass at least three of four, it should be killed before launch.
stance: >-
  Product requirement documents that omit distribution mechanism, workflow
  insertion point, and unit economics at 10x scale are designing liabilities,
  not features.
related:
  - INS-260325-8A61
  - INS-260402-0E46
  - INS-260404-E4C3
  - INS-260402-C301
  - INS-260403-FB82
  - PRI-260413-8B2F
  - PRI-260406-C4C5
---
Traditional PRDs cover feature description, user stories, and success metrics. For AI products, this is insufficient because features commoditize in weeks and every usage has real compute cost. A Distribution-First PRD adds three non-negotiable sections: the distribution mechanism (how does this feature spread itself?), the workflow insertion point (where in the user's daily routine does this live?), and the economic impact (what does it cost to distribute this at 10x scale?).

Runway's Generative Fill created outputs artists shared on TikTok — distribution was built into using the feature. Clay's enrichment suggestions appear inside email and calendar with no behavior change required. Perplexity added retrieval to cut token costs so distribution wouldn't bankrupt them. The litmus test is: does this feature create its own distribution loop, insert into an existing workflow, generate viral artifacts or data flywheels, and improve economics with scale? If it can't pass at least three of four, it should be killed before launch.
