---
id: INS-260625-76F5
domain: ai-development
topic: product-strategy
title: 'Businesses should expose structured APIs to agents, not force UI scraping'
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - agent-native
  - api-design
  - platform-strategy
  - commerce
  - determinism
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
    Expose your product catalog and checkout as structured data (JSON, ACP) so
    agents transact deterministically instead of stumbling through forms.
  standard: >-
    If a business only offers web UIs, it forces agents to introduce
    non-determinism into the interaction — crawling links, parsing prices off
    pages, filling forms, clicking pay — which is slow, finicky, and
    error-prone. The argument is that exposing agent-friendly interfaces (a JSON
    product catalog with images, descriptions, and pricing; a structured
    checkout negotiation) maximizes deterministic flows and minimizes disputes
    and chargebacks. 'Robots prefer code'; the dashboard is for humans, the API
    is for agents.


    The Agentic Commerce Protocol (ACP), built with OpenAI, standardizes the
    objects and back-and-forth: the agent expresses buyer info and line items,
    the seller relays authoritative cart state (line items, base price,
    applicable tax, fulfillment options) like a tool-call response, and payment
    settles via a shared token. The key property is that the seller remains in
    control of the relationship and keeps receiving the risk signals it needs.


    Confidence is medium because this is a strategic bet on how agent commerce
    consolidates — the protocols (ACP, machine payments / 402) are early and
    competing. But the directional claim is well-grounded: the marginal cost of
    agent-readable surfaces is low, and businesses that wait will be transacted
    with through brittle scraping rather than reliable APIs.
stance: >-
  Businesses that expose structured, agent-native APIs will win agent-mediated
  commerce over those that force agents to scrape human web UIs.
related:
  - INS-260320-5B49
  - INS-260605-59AE
  - INS-260625-06B3
  - INS-260625-C697
  - INS-260603-BFEE
  - PRI-260501-168F
---
If a business only offers web UIs, it forces agents to introduce non-determinism into the interaction — crawling links, parsing prices off pages, filling forms, clicking pay — which is slow, finicky, and error-prone. The argument is that exposing agent-friendly interfaces (a JSON product catalog with images, descriptions, and pricing; a structured checkout negotiation) maximizes deterministic flows and minimizes disputes and chargebacks. 'Robots prefer code'; the dashboard is for humans, the API is for agents.

The Agentic Commerce Protocol (ACP), built with OpenAI, standardizes the objects and back-and-forth: the agent expresses buyer info and line items, the seller relays authoritative cart state (line items, base price, applicable tax, fulfillment options) like a tool-call response, and payment settles via a shared token. The key property is that the seller remains in control of the relationship and keeps receiving the risk signals it needs.

Confidence is medium because this is a strategic bet on how agent commerce consolidates — the protocols (ACP, machine payments / 402) are early and competing. But the directional claim is well-grounded: the marginal cost of agent-readable surfaces is low, and businesses that wait will be transacted with through brittle scraping rather than reliable APIs.
