---
id: INS-260605-7CEB
domain: ai-development
topic: limitations
title: >-
  Compounding per-step reliability is what killed early browser agents as
  products
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - browser-agents
  - reliability
  - compounding-error
  - tool-calling
  - product-viability
sources:
  - type: youtube
    title: 'Viktor: AI Coworker That Lives in Slack — Fryderyk Wiatrowski'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=ohKt066uFhg'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Viktor's 2023 browser agent was state-of-the-art on Web Arena yet unusable
    as a product because ~60% per-step reliability compounded over 3-5 steps
    into frequent failure.
  standard: >-
    Before tool calling and strong code-generation models, the plausible way to
    take actions was through the browser — a universal interface usable for
    almost any app. Viktor's JCAI took a lossless minified DOM snapshot plus the
    goal and decided the next step (type in the search bar, click login). It was
    genuinely state-of-the-art, topping the Web Arena benchmark.


    Yet it failed as a product. It worked reliably only for three to five steps,
    and 'reliably' meant about 60% per step — which compounds multiplicatively
    with every additional step. Combined with slow execution (you wait a minute
    only to watch it fail, versus a function call that returns immediately), the
    compounding error made it impractical to build into something useful.


    The durable lesson: benchmark leadership and product viability are different
    things, and the gap is often compounding reliability. For any multi-step
    autonomous system, end-to-end success is the product of per-step success
    rates, so high per-step accuracy can still yield low task completion. This
    is why the shift to reliable tool calling — not better browser snapshots —
    unlocked shippable agents.
stance: >-
  Per-step success rates compound multiplicatively, so even state-of-the-art
  browser agents were too unreliable to ship as products.
related:
  - INS-260410-85AD
  - INS-260413-AD37
  - INS-260321-2482
  - INS-260627-82CC
  - INS-260410-9D86
---
Before tool calling and strong code-generation models, the plausible way to take actions was through the browser — a universal interface usable for almost any app. Viktor's JCAI took a lossless minified DOM snapshot plus the goal and decided the next step (type in the search bar, click login). It was genuinely state-of-the-art, topping the Web Arena benchmark.

Yet it failed as a product. It worked reliably only for three to five steps, and 'reliably' meant about 60% per step — which compounds multiplicatively with every additional step. Combined with slow execution (you wait a minute only to watch it fail, versus a function call that returns immediately), the compounding error made it impractical to build into something useful.

The durable lesson: benchmark leadership and product viability are different things, and the gap is often compounding reliability. For any multi-step autonomous system, end-to-end success is the product of per-step success rates, so high per-step accuracy can still yield low task completion. This is why the shift to reliable tool calling — not better browser snapshots — unlocked shippable agents.
