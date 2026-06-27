---
id: INS-260625-E810
domain: ai-development
topic: model-architecture
title: >-
  MOEs trade fine-tunability for inference speed; dense stays the safer
  adaptation default
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - mixture-of-experts
  - dense-models
  - fine-tuning
  - routing
  - architecture-tradeoffs
sources:
  - type: youtube
    title: "⚡️ Google's Open AI Strategy —\_Omar Sanseviero, Google DeepMind"
    author: Latent Space
    url: 'https://www.youtube.com/watch?v=Hxlayqs-IAs'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    MOEs are great for serving but standard fine-tuning hyperparameters often
    fail on them because the router interacts badly with distribution shift.
  standard: >-
    Google ships two similarly-sized large Gemma models — one dense (~31B, the
    'raw intelligence' option that quantizes to fit a consumer GPU) and one MOE
    (~27B with ~4B activated, optimized for fast inference). The choice between
    them is not purely about serving cost: MOEs are notably harder to fine-tune.
    The standard recipes and hyperparameters that work on dense models
    frequently don't transfer, and instruction-following fine-tunes struggle.


    The mechanism is unsettled even to practitioners — the working intuition is
    that the routing layer interacts with the shifted data distribution
    differently than a dense model, where you simply update every weight.
    Whether you freeze the router, how many experts you trigger, and similar
    knobs all become live variables that a dense fine-tune never forces you to
    think about.


    The practical takeaway: 'good for inference' and 'good to adapt' are
    different axes. If your plan is to take a base model and fine-tune it for a
    domain, a dense model of comparable size is the lower-risk choice even
    though the MOE may serve faster. Reserve MOE for cases where you'll deploy
    the base capabilities largely as-is.
stance: >-
  MOE architectures are excellent for inference but resist downstream
  fine-tuning because routing destabilizes standard recipes, so dense models
  remain the better default when adaptation matters.
related:
  - INS-260627-F805
  - INS-260627-6984
  - INS-260410-5088
  - PRI-260406-6F52
  - INS-260330-8F91
  - INS-260626-01AD
---
Google ships two similarly-sized large Gemma models — one dense (~31B, the 'raw intelligence' option that quantizes to fit a consumer GPU) and one MOE (~27B with ~4B activated, optimized for fast inference). The choice between them is not purely about serving cost: MOEs are notably harder to fine-tune. The standard recipes and hyperparameters that work on dense models frequently don't transfer, and instruction-following fine-tunes struggle.

The mechanism is unsettled even to practitioners — the working intuition is that the routing layer interacts with the shifted data distribution differently than a dense model, where you simply update every weight. Whether you freeze the router, how many experts you trigger, and similar knobs all become live variables that a dense fine-tune never forces you to think about.

The practical takeaway: 'good for inference' and 'good to adapt' are different axes. If your plan is to take a base model and fine-tune it for a domain, a dense model of comparable size is the lower-risk choice even though the MOE may serve faster. Reserve MOE for cases where you'll deploy the base capabilities largely as-is.
