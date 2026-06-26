---
id: INS-260625-C697
domain: ai-development
topic: agent-patterns
title: >-
  Separate non-deterministic discovery from deterministic transaction in agent
  systems
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - agents
  - architecture
  - determinism
  - system-design
  - payments
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
    Let LLMs explore and recommend non-deterministically, but bind credentials,
    amounts, and checkout to deterministic, constrained, verifiable flows.
  standard: >-
    The core argument is that LLMs are extraordinary at discovery and
    exploration precisely because they are non-deterministic — they can surface
    relevant code, products, or businesses from the world's information. But
    that same property is a liability the moment money moves: credentials,
    payments, and checkout do not merely benefit from determinism, they require
    it. The design move is to isolate 'how do I find things / what should I do'
    from 'how am I going to transact.'


    This maps to a general agent architecture: a non-deterministic planner that
    proposes actions, wrapped in deterministic constraints (scoped mandates,
    verifiable counterparties, structured negotiation) that bound the blast
    radius if the planner is wrong or manipulated. The talk's TLDR —
    'non-deterministic planner and constraints with verifiable parties and
    structured negotiation results in a small radius of risk' — generalizes well
    beyond payments to any agent action with irreversible side effects.


    The failure mode it guards against is letting an agent 'operate the browser
    like a human' for high-stakes actions: slow, hard to observe, and exposed to
    four distinct errors (wrong place, wrong thing, wrong amount, wrong
    credential). Treating the transaction boundary as a place to collapse
    non-determinism, rather than propagate it, is the durable principle.
stance: >-
  Agent systems should keep discovery non-deterministic but force every
  transaction step — credentials, payment, checkout — to be strictly
  deterministic.
related:
  - INS-260514-0101
  - INS-260605-8C71
  - INS-260625-9C3B
  - INS-260626-DB00
  - INS-260625-76F5
  - INS-260605-63AE
---
The core argument is that LLMs are extraordinary at discovery and exploration precisely because they are non-deterministic — they can surface relevant code, products, or businesses from the world's information. But that same property is a liability the moment money moves: credentials, payments, and checkout do not merely benefit from determinism, they require it. The design move is to isolate 'how do I find things / what should I do' from 'how am I going to transact.'

This maps to a general agent architecture: a non-deterministic planner that proposes actions, wrapped in deterministic constraints (scoped mandates, verifiable counterparties, structured negotiation) that bound the blast radius if the planner is wrong or manipulated. The talk's TLDR — 'non-deterministic planner and constraints with verifiable parties and structured negotiation results in a small radius of risk' — generalizes well beyond payments to any agent action with irreversible side effects.

The failure mode it guards against is letting an agent 'operate the browser like a human' for high-stakes actions: slow, hard to observe, and exposed to four distinct errors (wrong place, wrong thing, wrong amount, wrong credential). Treating the transaction boundary as a place to collapse non-determinism, rather than propagate it, is the durable principle.
