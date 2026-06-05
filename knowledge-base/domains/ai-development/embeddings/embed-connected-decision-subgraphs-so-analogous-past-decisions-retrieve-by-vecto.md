---
id: INS-260605-DB79
domain: ai-development
topic: embeddings
title: >-
  Embed connected decision subgraphs so analogous past decisions retrieve by
  vector similarity
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - graph-embeddings
  - vector-search
  - hybrid-retrieval
  - precedent-matching
  - structural-similarity
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
    Graph embeddings turn a connected decision trace into a vector, so 'find
    similar past decisions' becomes a vector lookup combining semantic and
    structural similarity.
  standard: >-
    Text embeddings capture the words of a document. A graph embedding instead
    encodes a node together with its connections — the surrounding subgraph of
    entities, events, and causal links. Applied to decision traces, this means
    two decisions that *unfolded similarly* (same shape of precedent, similar
    causal chain) land near each other in vector space, even if their surface
    text differs.


    Neo4j's demo runs hybrid search: a text vector index finds candidates by
    semantics (e.g., 'fraud rejection'), and graph embeddings rank them by
    structural similarity to how prior decisions were actually made. The
    combination surfaces precedents that pure text search, operating on isolated
    documents, would fail to connect.


    The takeaway for retrieval design: when the unit of knowledge is relational
    (a decision, a workflow, an incident chain), embedding the structure — not
    just flattening it to text — preserves the very signal that makes one case a
    precedent for another.
stance: >-
  Embedding the linked structure of a decision (a subgraph), not just its text,
  lets agents retrieve structurally analogous precedents that flat text
  embeddings would miss.
related:
  - INS-260325-E652
  - INS-260330-4B84
  - INS-260402-5ACE
  - INS-260405-214D
  - INS-260410-2067
  - INS-260412-9414
  - INS-260605-A557
---
Text embeddings capture the words of a document. A graph embedding instead encodes a node together with its connections — the surrounding subgraph of entities, events, and causal links. Applied to decision traces, this means two decisions that *unfolded similarly* (same shape of precedent, similar causal chain) land near each other in vector space, even if their surface text differs.

Neo4j's demo runs hybrid search: a text vector index finds candidates by semantics (e.g., 'fraud rejection'), and graph embeddings rank them by structural similarity to how prior decisions were actually made. The combination surfaces precedents that pure text search, operating on isolated documents, would fail to connect.

The takeaway for retrieval design: when the unit of knowledge is relational (a decision, a workflow, an incident chain), embedding the structure — not just flattening it to text — preserves the very signal that makes one case a precedent for another.
