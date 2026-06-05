---
id: INS-260605-4375
domain: ai-development
topic: product-strategy
title: >-
  Attribute AI compute cost to the app and let users decide if the feature is
  worth the battery
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - battery
  - on-device-ai
  - product-strategy
  - user-trust
  - resource-attribution
sources:
  - type: youtube
    title: 'Gemini Nano on device — Florina Muntenescu & Oli Gaymond, Google DeepMind'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=owH1f0N-keY'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Like GPS and Wi-Fi before it, on-device inference has real battery cost — so
    the platform attributes it to the responsible app and lets users choose,
    rather than blocking the capability.
  standard: >-
    On-device inference has a genuine battery cost, and running it non-stop
    drains a phone quickly. Rather than gatekeeping the capability, the
    platform's strategy mirrors how Android already handles GPS and Wi-Fi: make
    the capability freely available, attribute its consumption to the specific
    app, and trust that users will happily spend battery on features they find
    valuable while abandoning apps that waste it. Real-world usage (10-20
    inferences a day in interactive flows) turns out not to be a battery
    concern; heavy batch workloads are pushed to background/overnight-charging
    windows and queued by the system.


    The transferable principle is a resource-governance stance: don't
    paternalistically block a costly capability, instead make its cost legible
    and let the value exchange play out. This shifts the platform's job from
    rationing to accounting — provide system-level scheduling, queuing, and
    prioritization (foreground apps get top priority), expose attribution, and
    let the market of user attention discipline wasteful features. It's a
    deliberately liberal default that bets on transparency over restriction.
stance: >-
  On-device AI battery cost should be surfaced and attributed per-app, trusting
  users to spend battery on features they value.
related:
  - INS-260605-D430
  - INS-260605-4AF8
  - INS-260605-0748
  - INS-260605-F064
  - INS-260325-BEAC
---
On-device inference has a genuine battery cost, and running it non-stop drains a phone quickly. Rather than gatekeeping the capability, the platform's strategy mirrors how Android already handles GPS and Wi-Fi: make the capability freely available, attribute its consumption to the specific app, and trust that users will happily spend battery on features they find valuable while abandoning apps that waste it. Real-world usage (10-20 inferences a day in interactive flows) turns out not to be a battery concern; heavy batch workloads are pushed to background/overnight-charging windows and queued by the system.

The transferable principle is a resource-governance stance: don't paternalistically block a costly capability, instead make its cost legible and let the value exchange play out. This shifts the platform's job from rationing to accounting — provide system-level scheduling, queuing, and prioritization (foreground apps get top priority), expose attribution, and let the market of user attention discipline wasteful features. It's a deliberately liberal default that bets on transparency over restriction.
