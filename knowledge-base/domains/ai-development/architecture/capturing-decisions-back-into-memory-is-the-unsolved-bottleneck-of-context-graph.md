---
id: INS-260605-A557
domain: ai-development
topic: architecture
title: >-
  Capturing decisions back into memory is the unsolved bottleneck of context
  graphs
actionability: reference
confidence: medium
shelf_life: time-sensitive
status: active
tags:
  - write-path
  - agent-memory
  - decision-capture
  - memory-systems
  - open-problems
sources:
  - type: youtube
    title: >-
      Why your agents need decision traces, not just documents — Zach
      Blumenfeld, Neo4j
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=B9h9ovW5H9U'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Reading decision traces works well; writing them — deciding what to store,
    when, and how to score its quality — is still being figured out.
  standard: >-
    The retrieval side of context graphs is mature: vector indexes, graph
    embeddings, and Cypher queries reliably pull precedents and traces. The
    presenter is candid that the *write* side is not. In the demo, the agent
    only stores a decision when explicitly prompted to; it will not autonomously
    decide that an interaction is worth recording.


    This is the central open problem. A memory system that depends on a human
    saying 'remember this' degrades the moment volume scales. The gaps named are
    concrete: when should a trace be written, how do you attach a quality or
    sentiment score so bad decisions don't become bad precedents, and how do you
    keep the graph from accumulating noise.


    For anyone building agent memory now, this reframes effort allocation:
    retrieval is largely a solved, library-shaped problem; the durable
    engineering work — and the differentiator — is the capture pipeline that
    decides what becomes precedent and how trustworthy it is.
stance: >-
  The hard, still-unsolved problem in agent memory is the write path — reliably
  capturing new decisions and their quality — not the read path of retrieving
  existing ones.
related:
  - INS-260403-D0EE
  - INS-260409-5975
  - INS-260410-EFB8
  - INS-260530-C385
  - INS-260605-44E2
  - INS-260404-4D7F
  - PRI-260406-A4AA
  - INS-260605-EC51
  - INS-260605-7711
  - INS-260605-2ECD
---
The retrieval side of context graphs is mature: vector indexes, graph embeddings, and Cypher queries reliably pull precedents and traces. The presenter is candid that the *write* side is not. In the demo, the agent only stores a decision when explicitly prompted to; it will not autonomously decide that an interaction is worth recording.

This is the central open problem. A memory system that depends on a human saying 'remember this' degrades the moment volume scales. The gaps named are concrete: when should a trace be written, how do you attach a quality or sentiment score so bad decisions don't become bad precedents, and how do you keep the graph from accumulating noise.

For anyone building agent memory now, this reframes effort allocation: retrieval is largely a solved, library-shaped problem; the durable engineering work — and the differentiator — is the capture pipeline that decides what becomes precedent and how trustworthy it is.
