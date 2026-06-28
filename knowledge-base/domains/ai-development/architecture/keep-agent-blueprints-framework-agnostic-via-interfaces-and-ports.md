---
id: INS-260627-F9F3
domain: ai-development
topic: architecture
title: Keep agent blueprints framework-agnostic via interfaces and ports
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - hexagonal-architecture
  - interfaces
  - framework-agnostic
  - ports-and-adapters
  - agent-design
  - interoperability
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
    Define the A2A blueprint as interfaces and ports rather than tying it to
    LangChain/Agno, so each team implements in its preferred framework but every
    agent exposes the same contract.
  standard: >-
    Amplifon's A2A server blueprint is deliberately framework-agnostic. Instead
    of standardizing on LangChain, Agno, or any single agent framework, the
    blueprint is composed of interfaces and ports — a ports-and-adapters
    (hexagonal) design — so each team can implement its agent in whatever
    framework fits, as long as it satisfies the same interface the blueprint
    defines. The platform standardizes the contract, not the implementation.


    This resolves the central tension of any internal platform: standardization
    versus team autonomy. Picking one framework would create lock-in and
    friction for teams whose needs don't fit it; letting everyone choose freely
    would destroy interoperability. Standardizing the interface while leaving
    the implementation free gets both — uniform discovery and interaction (via
    the shared agent-card contract and the same FastAPI exposure) without
    forcing a framework monoculture. The same principle underpins MCP and the
    agent-card standard themselves: agree on the boundary protocol, stay
    agnostic about what's behind it.
stance: >-
  Agent scaffolding should be defined by interfaces and ports rather than bound
  to a specific framework, so teams use their framework of choice while still
  exposing a uniform interface to the platform.
related:
  - INS-260626-39CE
  - INS-260410-71B9
  - INS-260625-25AC
  - INS-260605-0A68
  - INS-260603-1BC0
  - INS-260627-1FAE
  - INS-260627-3E8A
---
Amplifon's A2A server blueprint is deliberately framework-agnostic. Instead of standardizing on LangChain, Agno, or any single agent framework, the blueprint is composed of interfaces and ports — a ports-and-adapters (hexagonal) design — so each team can implement its agent in whatever framework fits, as long as it satisfies the same interface the blueprint defines. The platform standardizes the contract, not the implementation.

This resolves the central tension of any internal platform: standardization versus team autonomy. Picking one framework would create lock-in and friction for teams whose needs don't fit it; letting everyone choose freely would destroy interoperability. Standardizing the interface while leaving the implementation free gets both — uniform discovery and interaction (via the shared agent-card contract and the same FastAPI exposure) without forcing a framework monoculture. The same principle underpins MCP and the agent-card standard themselves: agree on the boundary protocol, stay agnostic about what's behind it.
