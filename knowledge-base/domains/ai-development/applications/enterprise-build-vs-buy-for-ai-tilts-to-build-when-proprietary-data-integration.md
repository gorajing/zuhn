---
id: INS-260530-B694
domain: ai-development
topic: applications
title: >-
  Enterprise build-vs-buy for AI tilts to build when proprietary data
  integration dominates the total cost
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - build-vs-buy
  - enterprise-ai
  - data-integration
  - vendor-evaluation
  - agent-platforms
sources:
  - type: audio
    title: paypal
date_extracted: '2026-05-30'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    PayPal chose to build their incident-agent platform rather than buy an
    SRE-AI vendor, explicitly because their proprietary data lakes, MCP servers,
    and Cortex Engine integration make vendor integration the dominant cost —
    not the agent loop itself.
  standard: >-
    The standard build-vs-buy intuition (buy for speed-to-value, build for
    differentiation) breaks down when the proprietary integration surface is
    large. PayPal's argument: they have years of internal MCP tools, SIE data
    lake, and Cortex Engine; any vendor would have to be plumbed into all of
    them anyway, and the vendor relationship adds friction for every future
    data-source addition. So the build cost is bounded; the buy-then-integrate
    cost compounds with every new source.


    This reframes the buyer-side question. The right diagnostic isn't 'is this
    our core differentiation' but 'what % of the system's value is in agent
    logic vs. in data/tool plumbing?' For a fintech with mature internal data,
    that ratio is often >80% plumbing — and plumbing is where vendor lock-in is
    painful. The agent logic itself (especially on top of a framework like ADK)
    is the cheap part.


    This is also the implicit Zuhn argument for staying local-first and
    own-the-data — once external integrations dominate, the lock-in cost
    compounds.
stance: >-
  When the bottleneck of an AI system is connecting to proprietary internal data
  and tools, building is cheaper than buying — the vendor-integration tax
  exceeds the build cost
related:
  - INS-260327-FA43
  - INS-260403-504D
  - PRI-260328-D5EB
  - INS-260603-23B1
  - INS-260605-8409
---
The standard build-vs-buy intuition (buy for speed-to-value, build for differentiation) breaks down when the proprietary integration surface is large. PayPal's argument: they have years of internal MCP tools, SIE data lake, and Cortex Engine; any vendor would have to be plumbed into all of them anyway, and the vendor relationship adds friction for every future data-source addition. So the build cost is bounded; the buy-then-integrate cost compounds with every new source.

This reframes the buyer-side question. The right diagnostic isn't 'is this our core differentiation' but 'what % of the system's value is in agent logic vs. in data/tool plumbing?' For a fintech with mature internal data, that ratio is often >80% plumbing — and plumbing is where vendor lock-in is painful. The agent logic itself (especially on top of a framework like ADK) is the cheap part.

This is also the implicit Zuhn argument for staying local-first and own-the-data — once external integrations dominate, the lock-in cost compounds.
