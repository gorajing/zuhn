---
id: INS-260627-35AC
domain: ai-development
topic: limitations
title: Agent effectiveness is gated by how much global structure fits in context
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - context-window
  - libraries-vs-products
  - agent-capabilities
  - scope
  - global-structure
sources:
  - type: youtube
    title: >-
      The Friction is Your Judgment — Armin Ronacher & Cristina Poncela Cubeiro,
      Earendil
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=_Zcw_sVF6hU'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Agents shine on libraries (tight constraints, clear API surface, simple
    core) and struggle on products because the product's many interacting
    components can't fit in the context window.
  standard: >-
    There's a correlation between what agents excel at and the structure of the
    codebase they're put to work on. Libraries are a good fit: a clearly defined
    problem, a feature set that maps cleanly to an API surface, tight
    constraints, and a simple core meant to be built upon. Products are the
    unlucky case for most of us — UI, API responses, permissions that vary by
    feature flag, billing, and heavy intertwining between components. The agent
    cannot fit all of this into its context window and has no way to grasp the
    entire global structure, so it stays locally reasonable but becomes
    'globally demented.' The practical implication is twofold: where you can,
    shape work to look library-like (simple core, complexity pushed to
    abstraction layers, clear interfaces), and recognize that for genuinely
    product-scale, cross-cutting concerns like system architecture and
    reliability, agents are not yet good and human pace is still required.
stance: >-
  Agents excel at libraries and degrade on products because library scope fits
  in a context window while a product's interacting concerns exceed it, making
  the agent locally reasonable but globally demented.
related:
  - INS-260330-C2C4
  - INS-260625-E10F
  - INS-260626-057E
  - INS-260329-A461
  - INS-260403-2D99
  - INS-260412-BB61
---
There's a correlation between what agents excel at and the structure of the codebase they're put to work on. Libraries are a good fit: a clearly defined problem, a feature set that maps cleanly to an API surface, tight constraints, and a simple core meant to be built upon. Products are the unlucky case for most of us — UI, API responses, permissions that vary by feature flag, billing, and heavy intertwining between components. The agent cannot fit all of this into its context window and has no way to grasp the entire global structure, so it stays locally reasonable but becomes 'globally demented.' The practical implication is twofold: where you can, shape work to look library-like (simple core, complexity pushed to abstraction layers, clear interfaces), and recognize that for genuinely product-scale, cross-cutting concerns like system architecture and reliability, agents are not yet good and human pace is still required.
