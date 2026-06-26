---
id: INS-260605-6DE5
domain: ai-development
topic: adoption
title: Adopt agent concepts modularly before rewriting products around agents
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - agent-adoption
  - modularity
  - existing-products
  - incrementalism
sources:
  - type: blog
    title: >-
      GitHub - humanlayer/12-factor-agents: What are the principles we can use
      to build LLM-powered software that is actually good enough to put in the
      hands of production customers?
    url: 'https://github.com/humanlayer/12-factor-agents'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Introduce agent patterns where they improve the product; do not start with a
    rewrite.
  standard: >-
    HumanLayer argues that skilled engineers can apply modular concepts from
    agent building without going all-in on a greenfield framework rewrite. This
    matters because production teams already have data models, UX expectations,
    permissions, and workflows that agents must fit into.
  deep: >-
    The adoption pattern is especially relevant to local-first systems like
    Zuhn. It suggests upgrading workflows by adding skills, validated scripts,
    context files, and tool loops around the existing knowledge base instead of
    replacing the file-backed architecture with a generic agent platform.
stance: >-
  The fastest route to useful AI software is often adding modular agent concepts
  into an existing product rather than rebuilding the product around a new agent
  framework.
related:
  - INS-260320-7914
  - INS-260605-3872
  - INS-260605-8BEA
  - INS-260605-2A69
  - INS-260530-D34F
  - INS-260626-48F7
---
HumanLayer argues that skilled engineers can apply modular concepts from agent building without going all-in on a greenfield framework rewrite. This matters because production teams already have data models, UX expectations, permissions, and workflows that agents must fit into.
