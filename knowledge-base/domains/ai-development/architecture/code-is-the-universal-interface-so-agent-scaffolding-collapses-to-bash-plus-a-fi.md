---
id: INS-260627-1FAE
domain: ai-development
topic: architecture
title: >-
  Code is the universal interface, so agent scaffolding collapses to bash plus a
  filesystem
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - agent-architecture
  - code-execution
  - general-agents
  - scaffolding
sources:
  - type: youtube
    title: >-
      Don't Build Agents, Build Skills Instead – Barry Zhang & Mahesh Murag,
      Anthropic
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=CEvIs9y1uog'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Treat code as the universal interface to the digital world so one general
    agent with bash and a filesystem handles tasks you'd otherwise build
    separate agents for.
  standard: >-
    Anthropic initially assumed agents in different domains would each need
    their own tools and scaffolding, implying one bespoke agent per use case.
    Building Claude Code revealed that it was actually a general-purpose agent:
    a model that can call APIs to pull data, organize it in the file system,
    analyze it with Python, and synthesize output — all through code. Because
    code is not just one use case but the universal interface to the digital
    world, the core scaffolding can shrink to something as thin as bash and a
    filesystem, which is far more scalable than maintaining separate agent
    stacks. The practical move is to stop reaching for a new agent per domain
    and instead give one general agent a code runtime, then layer domain
    capability on top rather than rebuilding the substrate.
stance: >-
  A single general-purpose agent with a code runtime can replace domain-specific
  agent scaffolding instead of building a separate agent per use case.
related:
  - INS-260327-5F10
  - INS-260403-8793
  - INS-260410-0855
  - INS-260605-5C58
  - INS-260605-3553
  - INS-260605-4AB0
  - INS-260625-3866
  - INS-260625-0A7D
  - INS-260626-5375
  - INS-260626-4393
---
Anthropic initially assumed agents in different domains would each need their own tools and scaffolding, implying one bespoke agent per use case. Building Claude Code revealed that it was actually a general-purpose agent: a model that can call APIs to pull data, organize it in the file system, analyze it with Python, and synthesize output — all through code. Because code is not just one use case but the universal interface to the digital world, the core scaffolding can shrink to something as thin as bash and a filesystem, which is far more scalable than maintaining separate agent stacks. The practical move is to stop reaching for a new agent per domain and instead give one general agent a code runtime, then layer domain capability on top rather than rebuilding the substrate.
