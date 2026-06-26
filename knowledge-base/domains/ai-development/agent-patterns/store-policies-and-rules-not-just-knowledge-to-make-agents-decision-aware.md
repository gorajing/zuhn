---
id: INS-260605-C028
domain: ai-development
topic: agent-patterns
title: 'Store policies and rules, not just knowledge, to make agents decision-aware'
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - context-engineering
  - knowledge-graphs
  - agent-decisions
  - policies
  - memory
sources:
  - type: youtube
    title: >-
      Context Graphs for Explainable, Decision-Aware AI Agents — Andreas
      Kollegger & Zaid Zaim, Neo4j
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=abvQEhvRI_c'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    A 'context graph' adds the why — the rules and policies governing decisions
    — on top of the what an agent already knows.
  standard: >-
    Most agent context engineering focuses on supplying knowledge: facts,
    documents, and tool access that answer 'what can the agent do.' Neo4j's
    framing is that decision-aware agents need a second layer capturing 'why an
    agent should do something' — the hard and soft rules, policies, and
    constraints of the operating environment. Their canonical example is a
    financial-services agent deciding loan eligibility: the knowledge tells it
    the applicant's history, but the policies tell it whether approval is
    permitted.


    The practical implication is that when an autonomous agent hits a
    circumstance its instructions never anticipated (the 'keep my fridge stocked
    with Red Bull' agent that orders even when rent is due), the fix is not more
    prompt engineering patches but a durable, queryable store of the rules that
    should govern the class of decision. Encoding policies as first-class data —
    whether in a graph, a rules document, or skills — lets agents reason about
    constraints rather than rediscovering them ad hoc.
stance: >-
  Agents make sound autonomous decisions only when their context includes
  explicit rules and policies, not merely factual knowledge.
related:
  - INS-260605-C00C
  - INS-260605-44E2
  - INS-260605-014F
  - INS-260605-0436
  - INS-260626-78D1
---
Most agent context engineering focuses on supplying knowledge: facts, documents, and tool access that answer 'what can the agent do.' Neo4j's framing is that decision-aware agents need a second layer capturing 'why an agent should do something' — the hard and soft rules, policies, and constraints of the operating environment. Their canonical example is a financial-services agent deciding loan eligibility: the knowledge tells it the applicant's history, but the policies tell it whether approval is permitted.

The practical implication is that when an autonomous agent hits a circumstance its instructions never anticipated (the 'keep my fridge stocked with Red Bull' agent that orders even when rent is due), the fix is not more prompt engineering patches but a durable, queryable store of the rules that should govern the class of decision. Encoding policies as first-class data — whether in a graph, a rules document, or skills — lets agents reason about constraints rather than rediscovering them ad hoc.
