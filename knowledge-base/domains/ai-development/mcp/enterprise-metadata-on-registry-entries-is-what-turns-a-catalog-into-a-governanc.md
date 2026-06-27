---
id: INS-260627-FF5D
domain: ai-development
topic: mcp
title: >-
  Enterprise metadata on registry entries is what turns a catalog into a
  governance tool
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - mcp
  - metadata
  - lineage
  - impact-analysis
  - auditability
  - cost-attribution
sources:
  - type: youtube
    title: >-
      One Registry to Rule them All - Sonny Merla, Mauro Luchetti, & Mattia
      Redaelli, Quantyca
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=VXfRt_H-V08'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Tag each registered server/agent with owner, environment, auth model, cost
    attribution, and the use cases consuming it — this metadata is what enables
    impact analysis and lineage, not nice-to-have decoration.
  standard: >-
    Amplifon explicitly pushes back on treating registry metadata as 'nice to
    have.' Each MCP server in their private registry carries five enterprise
    fields: ownership (which team/use case is responsible), environment
    (dev/test/prod), authentication model (how a developer is meant to consume
    it), cost attribution (linked to the gateway's budgeting), and use-case
    linkage (which use cases actually call it). These fields are what make the
    registry an operational governance asset rather than a phone book.


    The payoff is impact analysis and lineage. Because LLM models have short
    lifecycles, when a model is deprecated or a server has an outage, you need
    to traverse from the affected asset back to every use case that depends on
    it and act promptly. The use-case registry stitches the MCP and A2A
    registries together precisely to expose this dependency graph. The
    principle: a registry's governance power is a direct function of the
    metadata you require at registration time. Capture ownership, cost, and
    dependency edges up front, or you cannot answer 'what breaks if this
    changes' later.
stance: >-
  Enriching every registered MCP server and agent with ownership, environment,
  auth model, cost attribution, and use-case linkage is what converts a passive
  catalog into impact analysis and auditability — bare metadata is not enough.
related:
  - INS-260626-7E5F
  - INS-260605-EF3C
  - INS-260627-DD09
  - PRI-260405-BFAC
  - INS-260605-3163
---
Amplifon explicitly pushes back on treating registry metadata as 'nice to have.' Each MCP server in their private registry carries five enterprise fields: ownership (which team/use case is responsible), environment (dev/test/prod), authentication model (how a developer is meant to consume it), cost attribution (linked to the gateway's budgeting), and use-case linkage (which use cases actually call it). These fields are what make the registry an operational governance asset rather than a phone book.

The payoff is impact analysis and lineage. Because LLM models have short lifecycles, when a model is deprecated or a server has an outage, you need to traverse from the affected asset back to every use case that depends on it and act promptly. The use-case registry stitches the MCP and A2A registries together precisely to expose this dependency graph. The principle: a registry's governance power is a direct function of the metadata you require at registration time. Capture ownership, cost, and dependency edges up front, or you cannot answer 'what breaks if this changes' later.
