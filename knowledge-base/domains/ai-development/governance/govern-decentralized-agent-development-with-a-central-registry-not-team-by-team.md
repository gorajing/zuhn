---
id: INS-260627-94E6
domain: ai-development
topic: governance
title: >-
  Govern decentralized agent development with a central registry, not
  team-by-team improvisation
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - agent-governance
  - enterprise-ai
  - registry
  - ai-at-scale
  - mcp
  - a2a
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
    When dozens of teams each wire up their own connections, security, and
    infrastructure for AI agents, the fix is a central registry that catalogs
    every tool and agent — not stricter team-level discipline.
  standard: >-
    Amplifon's framing is that decentralized agent development is not a
    discipline problem you can train away — it is a structural one. With teams
    across three continents each reinventing connections, security models, and
    deployments, the failure mode is chaos: no one knows what AI exists, where
    it runs, or what depends on what. Their answer is a central catalog (split
    into MCP-tool, A2A-agent, and use-case registries) that makes the full
    inventory of AI tooling discoverable and auditable from one place.


    The key move is recognizing that the value of central governance is realized
    at the catalog layer, not the policy layer. You don't stop teams from
    building; you require that whatever they build registers itself. This
    preserves team autonomy on implementation while centralizing the one thing
    that must be global: visibility. The lesson generalizes to any organization
    moving from AI experimentation to AI-at-scale — the binding constraint
    shifts from 'can we build agents' to 'can we see and control the agents
    we've built.'
stance: >-
  Once many teams build AI agents independently, a central registry of agents
  and tools becomes necessary to govern them; decentralized self-service alone
  produces ungovernable sprawl.
related:
  - INS-260412-2754
  - INS-260605-98BD
  - INS-260626-7E5F
  - INS-260320-9D89
  - INS-260626-13FB
  - INS-260625-D938
---
Amplifon's framing is that decentralized agent development is not a discipline problem you can train away — it is a structural one. With teams across three continents each reinventing connections, security models, and deployments, the failure mode is chaos: no one knows what AI exists, where it runs, or what depends on what. Their answer is a central catalog (split into MCP-tool, A2A-agent, and use-case registries) that makes the full inventory of AI tooling discoverable and auditable from one place.

The key move is recognizing that the value of central governance is realized at the catalog layer, not the policy layer. You don't stop teams from building; you require that whatever they build registers itself. This preserves team autonomy on implementation while centralizing the one thing that must be global: visibility. The lesson generalizes to any organization moving from AI experimentation to AI-at-scale — the binding constraint shifts from 'can we build agents' to 'can we see and control the agents we've built.'
