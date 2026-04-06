---
id: INS-260405-451E
domain: ai-development
topic: agent-patterns
title: >-
  Context graphs capture organizational tacit knowledge that vector databases
  miss
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - context-graphs
  - knowledge-graphs
  - organizational-memory
  - tacit-knowledge
  - neo4j
sources:
  - type: audio
    title: Code with claw
date_extracted: '2026-04-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Context graphs store not just facts but the precedent and reasoning behind
    organizational decisions, enabling AI agents to answer 'why' questions that
    vector search alone cannot.
  standard: >-
    Vector databases excel at semantic similarity search but lose structural
    relationships and temporal context. Context graphs address this by encoding
    organizational memory as a graph where nodes represent decisions, events,
    people, and locations, connected by edges that preserve causal and temporal
    relationships. This means an AI agent can not only find relevant information
    but trace why a decision was made, what precedent existed, and how policies
    evolved over time — analogous to case law explaining why a law exists today.
    The speaker demonstrated this with a Neo4j-backed system where agents could
    answer questions like 'why was this credit line approved?' by traversing
    decision chains rather than just finding semantically similar documents.
stance: >-
  Structured knowledge graphs that encode precedent and reasoning history
  outperform flat vector stores for organizational decision-making because they
  preserve the 'why' behind decisions, not just the 'what'.
related:
  - INS-260327-73BE
  - INS-260402-5ACE
  - INS-260402-28BA
  - INS-260405-214D
  - INS-260327-4CB3
  - INS-260321-167A
evidence:
  - id: INS-260327-73BE
    type: SUPPORTS
    classified_at: '2026-04-05'
---
Vector databases excel at semantic similarity search but lose structural relationships and temporal context. Context graphs address this by encoding organizational memory as a graph where nodes represent decisions, events, people, and locations, connected by edges that preserve causal and temporal relationships. This means an AI agent can not only find relevant information but trace why a decision was made, what precedent existed, and how policies evolved over time — analogous to case law explaining why a law exists today. The speaker demonstrated this with a Neo4j-backed system where agents could answer questions like 'why was this credit line approved?' by traversing decision chains rather than just finding semantically similar documents.
