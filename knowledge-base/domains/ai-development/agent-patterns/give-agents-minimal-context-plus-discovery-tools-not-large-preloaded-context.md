---
id: INS-260627-CECD
domain: ai-development
topic: agent-patterns
title: 'Give agents minimal context plus discovery tools, not large preloaded context'
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - context-engineering
  - incremental-disclosure
  - indexing
  - retrieval
  - context-window
sources:
  - type: youtube
    title: >-
      Spec-Driven Development: Agentic Coding at FAANG Scale and Quality — Al
      Harris, Amazon Kiro
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=HY_JyxAZsiE'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Keep the agent's context as small as possible and let it self-discover the
    right context via search/tools — Kiro uses its codebase index for secondary
    UI features (code search) rather than dumping it into the agent, because
    benchmarks show the agent does better with less context plus good navigation
    tools.
  standard: >-
    Asked about codebase indexing, Harris distinguishes between stuffing context
    and enabling discovery. Kiro deliberately does not feed the index to the
    agent; the index powers secondary UI effects like code search, while the
    agent is kept on a small context budget and given tools to figure out where
    to go find things. This is framed as anecdotal-but-benchmark-backed: 'the
    agent does better when given less context but given the tools to understand
    where to go find things.'


    This aligns with the broader 'incremental disclosure' theme — don't load too
    much at the beginning of a conversation; let the agent pull what the task
    actually needs. It's a direct counter to the intuition that more context
    (whole-repo embeddings, max retrieval) yields better results. For
    practitioners, the design move is to invest in navigation and retrieval
    tooling the agent can call on demand, and treat the context window as a
    scarce resource to be filled by the agent's own discovery rather than
    preemptively by the harness.
stance: >-
  Agents produce better results when given minimal context and tools to
  self-discover what they need than when given large preloaded context.
related:
  - INS-260605-CEB5
  - INS-260605-4DB9
  - INS-260605-295D
  - INS-260605-9F7A
  - INS-260624-E89C
  - INS-260625-14F9
  - INS-260625-E10F
  - INS-260626-F5AE
  - INS-260626-FFE2
  - INS-260626-78E6
---
Asked about codebase indexing, Harris distinguishes between stuffing context and enabling discovery. Kiro deliberately does not feed the index to the agent; the index powers secondary UI effects like code search, while the agent is kept on a small context budget and given tools to figure out where to go find things. This is framed as anecdotal-but-benchmark-backed: 'the agent does better when given less context but given the tools to understand where to go find things.'

This aligns with the broader 'incremental disclosure' theme — don't load too much at the beginning of a conversation; let the agent pull what the task actually needs. It's a direct counter to the intuition that more context (whole-repo embeddings, max retrieval) yields better results. For practitioners, the design move is to invest in navigation and retrieval tooling the agent can call on demand, and treat the context window as a scarce resource to be filled by the agent's own discovery rather than preemptively by the harness.
