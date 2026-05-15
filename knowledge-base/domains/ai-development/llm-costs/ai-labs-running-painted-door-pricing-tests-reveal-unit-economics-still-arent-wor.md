---
id: INS-260514-4E58
domain: ai-development
topic: llm-costs
title: >-
  AI labs running painted-door pricing tests reveal unit economics still aren't
  working
actionability: reference
confidence: medium
shelf_life: time-sensitive
status: active
tags:
  - pricing
  - unit-economics
  - anthropic
  - painted-door-test
sources:
  - type: youtube
    title: The AI Economy is about to change
    author: The PrimeTime
    url: 'https://youtu.be/_Q-e_nczWqM'
date_extracted: '2026-05-14'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Anthropic gating Claude Code behind the $100/mo tier was a painted-door test
    — the test was necessary because $20/mo doesn't pay for the inference and
    training.
  standard: >-
    PrimeTime's read on Anthropic's pricing change: by removing Claude Code from
    the $20 plan, they trick a subset of users into paying $100/mo instead of
    churning. This is a classic painted-door test for pricing — see who would
    actually pay more. The argument that 'they're making money on inference'
    misses training cost amortization: if Opus 4.5 cost was never recouped
    before everyone migrated to 4.6, then 4.5 cost money. OpenAI's $120B
    investment buys 18-24 months at $5-7B/mo burn rate — that's why the pricing
    tests are happening.


    Application: when modeling AI costs in a product, don't assume current
    inference prices reflect long-term sustainable economics. The frontier labs
    are still discovering what they can charge. Build pricing flex into product
    economics. Memric application: don't lock in audit pricing at levels that
    assume AI inference costs stay flat — they may rise substantially as labs
    find prices that work.
stance: >-
  Anthropic's removal of Claude Code from the $20 plan (May 2026) was
  effectively a painted-door test to discover how many customers would upgrade
  to $100/mo rather than churn — the fact that this test was necessary signals
  AI inference + training economics still aren't covering frontier-model costs.
related:
  - INS-260330-56AA
  - INS-260403-27A5
  - INS-260405-A22F
  - INS-260329-E86C
  - INS-260329-8986
---
PrimeTime's read on Anthropic's pricing change: by removing Claude Code from the $20 plan, they trick a subset of users into paying $100/mo instead of churning. This is a classic painted-door test for pricing — see who would actually pay more. The argument that 'they're making money on inference' misses training cost amortization: if Opus 4.5 cost was never recouped before everyone migrated to 4.6, then 4.5 cost money. OpenAI's $120B investment buys 18-24 months at $5-7B/mo burn rate — that's why the pricing tests are happening.

Application: when modeling AI costs in a product, don't assume current inference prices reflect long-term sustainable economics. The frontier labs are still discovering what they can charge. Build pricing flex into product economics. Memric application: don't lock in audit pricing at levels that assume AI inference costs stay flat — they may rise substantially as labs find prices that work.
