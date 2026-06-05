---
id: INS-260514-CEEA
domain: ai-development
topic: llm-costs
title: >-
  Token consumption asymmetry: senior engineers compound 10-100x, 'web dev' tier
  trashes tokens for marginal value
actionability: reference
confidence: medium
shelf_life: time-sensitive
status: active
tags:
  - token-asymmetry
  - engineer-tiers
  - ai-spend-discipline
  - 10x-engineers
  - web-dev-token-trashing
sources:
  - type: youtube
    title: >-
      Anthropic Buys Compute From Elon & Commits $200BN to Google | Cerebras IPO
      | Ramp Raises at $40BN
    author: 20VC with Harry Stebbings
    url: 'https://youtu.be/LsqnQqhbSrU'
date_extracted: '2026-05-14'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Token spend is bimodal: S-tier engineers compound 10-100x; web-dev tier
    trashes tokens (100k lines where 1k would do). Companies will eventually
    clamp down on the mediocre tier while expanding access for top engineers.
  standard: >-
    Jason Lemkin's articulation of the bimodal token consumption pattern: 'I
    think they really are becoming 100x engineers, right? Let them use whatever
    they want, give them all the tools in the world. The concern is the kind of
    snarky term web devs — others one or two steps above me, the mediocre folks
    on your team that just aren't that good. They're consuming massive amount of
    tokens for relatively low amount of productivity gains. It's not all
    performative like the Amazon thing — some of it is attempting to keep up,
    but they need so many tokens to contribute so little value. It's the 100,000
    lines of code where some folks are made up on Twitter. Do you really need
    100,000 lines of code to run a blog?' The structural problem: token costs
    scale with output volume, not with output value. A mediocre engineer who
    generates 100K lines of code via Claude consumes 50x the tokens of a senior
    engineer who generates 2K lines of well-architected code accomplishing more.
    If you measure productivity by lines or PRs, mediocre engineers look
    productive AND consume the cheapest cost line. If you measure productivity
    by value-shipped, the senior tier compounds enormously and the mediocre tier
    produces clutter. Rory's counter (steel-manning the opposite view): 'I've
    heard the very best engineers can in fact manage you because they have the
    conceptual vision — they can be more productive with these tools. And the
    less productive you are, the more you're getting yield loss in the sense of
    using tokens that aren't turning into effective code.' Both views are right
    — the spending asymmetry compounds in both directions. Token consumption per
    unit of business value: best engineers ~1x cost baseline; worst engineers
    ~50-100x cost baseline. The corollary for engineering leadership: measure
    shipped business value, not token usage or PR count. The metric that matters
    is 'features that shipped, customer problems solved, technical debt reduced'
    — not 'lines of code generated' or 'how active is this engineer in Cursor'.
    Implement allocations or chargebacks per engineer to surface token-trashing.
    The corollary for cost forecasting: a company's AI bill isn't proportional
    to engineering headcount — it's proportional to (number of mediocre
    engineers) × (their token waste rate). Companies that hire predominantly
    senior engineers (Shopify-style) will have ~10x lower AI spend per engineer
    than companies that hired bottom-quartile engineers during the 2020-2022
    hiring boom. The bills will surface this asymmetry within 1-2 years. The
    corollary for individuals: do not measure your own productivity by tokens
    consumed or AI features used. Measure by problems solved and shipped value.
    The 10x compounding accrues to those who steer effectively, not those who
    delegate eagerly.
stance: >-
  AI tokens are not consumed uniformly across an engineering org — senior
  engineers compound 10-100x productivity from AI assistance because they can
  steer it effectively, while the mediocre 'web dev tier' consumes massive token
  volumes for marginal value (100,000 lines of code where 1,000 would do), which
  creates a structural cost problem because the highest-value engineers
  represent a small fraction of token spend and the lowest-value engineers
  represent the majority; companies will eventually clamp down on token spend
  from mediocre engineers while expanding access for top engineers.
related:
  - INS-260321-0CCD
  - INS-260403-EFAF
  - INS-260410-0EFE
  - INS-260519-D007
  - INS-260514-8413
  - INS-260603-50B1
  - INS-260403-39CF
  - INS-260514-44A4
  - INS-260605-26AB
---
Jason Lemkin's articulation of the bimodal token consumption pattern: 'I think they really are becoming 100x engineers, right? Let them use whatever they want, give them all the tools in the world. The concern is the kind of snarky term web devs — others one or two steps above me, the mediocre folks on your team that just aren't that good. They're consuming massive amount of tokens for relatively low amount of productivity gains. It's not all performative like the Amazon thing — some of it is attempting to keep up, but they need so many tokens to contribute so little value. It's the 100,000 lines of code where some folks are made up on Twitter. Do you really need 100,000 lines of code to run a blog?' The structural problem: token costs scale with output volume, not with output value. A mediocre engineer who generates 100K lines of code via Claude consumes 50x the tokens of a senior engineer who generates 2K lines of well-architected code accomplishing more. If you measure productivity by lines or PRs, mediocre engineers look productive AND consume the cheapest cost line. If you measure productivity by value-shipped, the senior tier compounds enormously and the mediocre tier produces clutter. Rory's counter (steel-manning the opposite view): 'I've heard the very best engineers can in fact manage you because they have the conceptual vision — they can be more productive with these tools. And the less productive you are, the more you're getting yield loss in the sense of using tokens that aren't turning into effective code.' Both views are right — the spending asymmetry compounds in both directions. Token consumption per unit of business value: best engineers ~1x cost baseline; worst engineers ~50-100x cost baseline. The corollary for engineering leadership: measure shipped business value, not token usage or PR count. The metric that matters is 'features that shipped, customer problems solved, technical debt reduced' — not 'lines of code generated' or 'how active is this engineer in Cursor'. Implement allocations or chargebacks per engineer to surface token-trashing. The corollary for cost forecasting: a company's AI bill isn't proportional to engineering headcount — it's proportional to (number of mediocre engineers) × (their token waste rate). Companies that hire predominantly senior engineers (Shopify-style) will have ~10x lower AI spend per engineer than companies that hired bottom-quartile engineers during the 2020-2022 hiring boom. The bills will surface this asymmetry within 1-2 years. The corollary for individuals: do not measure your own productivity by tokens consumed or AI features used. Measure by problems solved and shipped value. The 10x compounding accrues to those who steer effectively, not those who delegate eagerly.
