---
id: INS-260605-37DA
domain: ai-development
topic: agent-patterns
title: 'Smart truncation plus a memory store: keep head and tail, offload the middle'
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - smart-truncation
  - memory-store
  - context-management
  - retrieval
sources:
  - type: youtube
    title: How we solved Context Management in Agents — Sally-Ann Delucia
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=esY99nYXxR4'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Keep the first 100 and last 100 characters plus the system prompt and latest
    tool result, store the truncated middle in memory, and let the agent
    retrieve it on demand.
  standard: >-
    Alex's production strategy combines truncation with a retrievable memory
    store. They keep the head (first 100 chars), the tail (last 100 chars), the
    system prompt (never reset), and the latest tool-call result, while the
    truncated middle is pushed into a memory store the agent can query. Tool
    calls can be enormous and Alex makes many, so this prevents the window from
    bloating while preserving access.


    The key insight is the separation Delucia phrases as 'context decides what
    the model sees, memory decides what survives.' Rather than permanently
    discarding data, the agent retains control: at any point it can decide a
    past message or tool result is important and pull it back from memory. This
    combination has run untouched for months. Notably, when Anthropic's Claude
    Code source was released, the team was surprised to find a very similar
    truncation-plus-compression approach — independent convergence on the
    pattern.
stance: >-
  Truncating the middle while keeping head, tail, and latest tool result — with
  the removed middle retrievable from memory — is a reliable context strategy.
related:
  - INS-260514-1841
  - INS-260605-35B4
  - INS-260626-BC79
  - INS-260605-1A2D
  - INS-260410-264E
---
Alex's production strategy combines truncation with a retrievable memory store. They keep the head (first 100 chars), the tail (last 100 chars), the system prompt (never reset), and the latest tool-call result, while the truncated middle is pushed into a memory store the agent can query. Tool calls can be enormous and Alex makes many, so this prevents the window from bloating while preserving access.

The key insight is the separation Delucia phrases as 'context decides what the model sees, memory decides what survives.' Rather than permanently discarding data, the agent retains control: at any point it can decide a past message or tool result is important and pull it back from memory. This combination has run untouched for months. Notably, when Anthropic's Claude Code source was released, the team was surprised to find a very similar truncation-plus-compression approach — independent convergence on the pattern.
