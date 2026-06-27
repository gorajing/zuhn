---
id: INS-260625-DD6D
domain: ai-development
topic: infrastructure
title: 'Give agents capability-scoped mandates, not raw credentials'
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - security
  - least-privilege
  - credentials
  - agents
  - payments
sources:
  - type: youtube
    title: >-
      Building safe Payment Infrastructure for the autonomous economy — Steve
      Kaliski, Stripe
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=KLSuFPj2ld0'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Hand agents a token scoped to a specific seller, amount, currency, and time
    window — enforced by the platform — instead of a card number with no
    controls.
  standard: >-
    Handing a raw card number to an intermediary provides zero enforcement: you
    are simply trusting that they charge what you parsed off the page. Stripe's
    shared payment tokens instead let the agent collect a credential and
    re-share it as a mandate — a smart-contract-like object encoding usage
    limits scoped to a particular seller, amount, currency, and expiry. In the
    demo, a Visa card with a high real limit was scoped to $25, 30 days, and one
    seller; a $50 charge attempt was rejected by Stripe before settlement.


    This is the principle of least privilege applied to autonomous spend, and it
    is robust to the failure modes upstream: even if the agent was fooled by a
    spoofed domain or mis-parsed the price, the mandate caps the damage to what
    the human actually authorized. The enforcement lives on the platform, not in
    the agent's reasoning, which is exactly where you want it given the planner
    is non-deterministic.


    The pattern is cross-domain: any time you delegate a powerful capability
    (spend, API access, data mutation) to an autonomous or semi-trusted actor,
    issue a narrowly-scoped, revocable, server-enforced grant rather than the
    underlying secret. An audience question about recurring budgets surfaced the
    OAuth-style extension — access/refresh semantics let you re-request
    subsequent usage without ever exposing the raw credential.
stance: >-
  Agents should receive server-enforced, capability-scoped payment mandates
  rather than raw credentials, so a duped or compromised agent has a bounded
  blast radius.
related:
  - INS-260327-A22D
  - INS-260405-FE94
  - INS-260410-992A
  - INS-260605-91A9
  - INS-260605-D041
  - INS-260625-02A3
  - INS-260626-35A9
  - INS-260423-74BF
  - INS-260625-03A6
---
Handing a raw card number to an intermediary provides zero enforcement: you are simply trusting that they charge what you parsed off the page. Stripe's shared payment tokens instead let the agent collect a credential and re-share it as a mandate — a smart-contract-like object encoding usage limits scoped to a particular seller, amount, currency, and expiry. In the demo, a Visa card with a high real limit was scoped to $25, 30 days, and one seller; a $50 charge attempt was rejected by Stripe before settlement.

This is the principle of least privilege applied to autonomous spend, and it is robust to the failure modes upstream: even if the agent was fooled by a spoofed domain or mis-parsed the price, the mandate caps the damage to what the human actually authorized. The enforcement lives on the platform, not in the agent's reasoning, which is exactly where you want it given the planner is non-deterministic.

The pattern is cross-domain: any time you delegate a powerful capability (spend, API access, data mutation) to an autonomous or semi-trusted actor, issue a narrowly-scoped, revocable, server-enforced grant rather than the underlying secret. An audience question about recurring budgets surfaced the OAuth-style extension — access/refresh semantics let you re-request subsequent usage without ever exposing the raw credential.
