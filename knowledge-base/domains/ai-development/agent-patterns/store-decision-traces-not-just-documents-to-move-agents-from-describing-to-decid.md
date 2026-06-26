---
id: INS-260605-014F
domain: ai-development
topic: agent-patterns
title: >-
  Store decision traces, not just documents, to move agents from describing to
  deciding
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - decision-traces
  - context-graphs
  - agent-memory
  - rag
  - precedent
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
    A RAG knowledge base helps an agent answer correctly; a context graph
    storing past decisions and why they were made lets the agent decide and
    justify.
  standard: >-
    Standard retrieval augments an agent with facts, entities, and current state
    — enough to answer a question correctly. But answering correctly is not the
    same as deciding well. The gap is the reasoning that produced past outcomes:
    why a loan was rejected, which risk factors dominated, what precedent the
    decision followed.


    A context graph closes this gap by storing decision traces — the action, its
    rationale, and the causal chain to its outcome — alongside the raw facts. A
    financial-analyst agent retrieving Jessica's customer record and
    transactions can answer 'what is her risk score'; the same agent retrieving
    past rejection traces and precedents can answer 'should you reject, and
    why.'


    The practical move: when building agent memory, deliberately capture not
    just what is true (systems of record) but what was decided and the reasoning
    behind it. Facts let agents inform; decision traces let agents act with
    subject-matter expertise.
stance: >-
  Agents that retrieve past decision traces and their reasoning make better
  autonomous decisions than agents retrieving only facts and documents.
related:
  - INS-260409-1E5E
  - INS-260605-C00C
  - INS-260605-44E2
  - INS-260605-C028
  - INS-260605-0436
  - INS-260626-78D1
  - INS-260626-F01D
  - INS-260626-B94C
---
Standard retrieval augments an agent with facts, entities, and current state — enough to answer a question correctly. But answering correctly is not the same as deciding well. The gap is the reasoning that produced past outcomes: why a loan was rejected, which risk factors dominated, what precedent the decision followed.

A context graph closes this gap by storing decision traces — the action, its rationale, and the causal chain to its outcome — alongside the raw facts. A financial-analyst agent retrieving Jessica's customer record and transactions can answer 'what is her risk score'; the same agent retrieving past rejection traces and precedents can answer 'should you reject, and why.'

The practical move: when building agent memory, deliberately capture not just what is true (systems of record) but what was decided and the reasoning behind it. Facts let agents inform; decision traces let agents act with subject-matter expertise.
