---
id: INS-260402-5ACE
domain: ai-development
topic: agent-patterns
title: >-
  Context graphs capture organizational tacit knowledge that vector databases
  miss
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - knowledge-graphs
  - context-graphs
  - organizational-memory
  - tacit-knowledge
  - vector-databases
sources:
  - type: audio
    title: Code with claw
date_extracted: '2026-04-02'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Context graphs store not just facts but the precedent and reasoning behind
    decisions, answering 'why' questions that vector similarity search alone
    cannot.
  standard: >-
    Vector databases excel at semantic similarity — finding content that points
    in the same direction in embedding space. But organizational decision-making
    depends on precedent: why a credit line was approved, why an M&A move was
    made, why a policy exists. This 'why' knowledge is often tacit — living only
    in employees' heads as institutional memory.


    Context graphs address this by structuring memory into three types:
    short-term (conversation storage), long-term (extracted meaningful facts
    with ontological structure like POLE), and reasoning memory (agent traces
    showing how conclusions were reached). The graph structure itself carries
    meaning — relationships between nodes encode the causal and temporal chains
    that explain decisions. This is analogous to case law explaining why
    statutes exist: you need both the rule (vector-retrievable fact) and the
    precedent chain (graph-traversable reasoning) for effective organizational
    AI.
stance: >-
  Graph-structured memory that captures precedent and reasoning chains provides
  the critical 'why' context that flat vector stores cannot represent
related:
  - INS-260325-E23D
  - INS-260325-E652
  - INS-260327-73BE
  - INS-260329-61E5
  - INS-260402-28BA
  - INS-260330-4B30
---
Vector databases excel at semantic similarity — finding content that points in the same direction in embedding space. But organizational decision-making depends on precedent: why a credit line was approved, why an M&A move was made, why a policy exists. This 'why' knowledge is often tacit — living only in employees' heads as institutional memory.

Context graphs address this by structuring memory into three types: short-term (conversation storage), long-term (extracted meaningful facts with ontological structure like POLE), and reasoning memory (agent traces showing how conclusions were reached). The graph structure itself carries meaning — relationships between nodes encode the causal and temporal chains that explain decisions. This is analogous to case law explaining why statutes exist: you need both the rule (vector-retrievable fact) and the precedent chain (graph-traversable reasoning) for effective organizational AI.
