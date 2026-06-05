---
id: INS-260605-E9A7
domain: ai-development
topic: agent-patterns
title: HTTP 402 turns resource acquisition into a tool loop
actionability: reference
confidence: medium
shelf_life: time-sensitive
status: active
tags:
  - x402
  - agentic-payments
  - tool-use
  - api-access
  - machine-economy
sources:
  - type: blog
    title: x402 - Payment Required
    url: 'https://www.x402.org/'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: 'A paid API call can become observe-pay-retry, not a human onboarding flow.'
  standard: >-
    x402 revives HTTP 402 as a programmatic payment flow: the agent requests a
    resource, receives payment instructions, sends a signed payment payload, and
    gets the resource if verification succeeds. The source explicitly frames
    this as useful for AI agents paying for API access.


    For harness design, this means resource acquisition can become another loop
    primitive. A research agent could hit a paid source, evaluate the price and
    policy, request budget approval if needed, pay, and continue. The hard part
    shifts from payment mechanics to budget policy, provenance, and deciding
    when a paid resource is worth buying.
stance: >-
  Agent harnesses should treat paywalled API/data access as a first-class tool
  loop because HTTP 402 lets an agent request, pay, retry, and receive the
  resource without human account setup.
related:
  - INS-260327-1599
  - INS-260605-2627
  - INS-260403-1ECB
  - INS-260327-9483
  - INS-260330-36B4
---
x402 revives HTTP 402 as a programmatic payment flow: the agent requests a resource, receives payment instructions, sends a signed payment payload, and gets the resource if verification succeeds. The source explicitly frames this as useful for AI agents paying for API access.

For harness design, this means resource acquisition can become another loop primitive. A research agent could hit a paid source, evaluate the price and policy, request budget approval if needed, pay, and continue. The hard part shifts from payment mechanics to budget policy, provenance, and deciding when a paid resource is worth buying.
