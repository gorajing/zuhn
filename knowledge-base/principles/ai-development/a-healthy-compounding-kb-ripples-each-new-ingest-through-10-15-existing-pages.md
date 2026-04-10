---
id: PRI-260409-0156
domain: ai-development
title: A healthy compounding KB ripples each new ingest through 10-15 existing pages
summary: >-
  The diagnostic for whether an LLM-augmented knowledge base is actually
  compounding is the cross-link ripple of every new ingest: a single source
  should update or relate to 10-15 existing pages, not create one isolated
  entry. If a new source only spawns its own page without echoing through the
  rest of the graph, the system is accumulating disconnected notes, not building
  knowledge. Folder hierarchies pre-encode retrieval paths and the
  ingest/query/lint cycle (lint catching contradictions, orphans, and gaps) are
  the operational mechanisms that turn ripple from aspiration into a measurable
  health signal.
confidence: medium
supporting_insights:
  - INS-260409-D5BD
  - INS-260409-BA55
  - INS-260409-5065
  - INS-260409-430B
  - INS-260409-51B2
  - INS-260409-EA5A
supporting_count: 6
tags:
  - knowledge-management
  - compounding-knowledge
  - kb-health
  - evaluation-criteria
  - ripple-test
  - lint
  - wiki-graph
date_created: '2026-04-09'
last_reviewed: '2026-04-09'
resolutions:
  one_line: >-
    A healthy compounding KB ripples each new ingest through 10-15 existing
    pages
  standard: >-
    The diagnostic for whether an LLM-augmented knowledge base is actually
    compounding is the cross-link ripple of every new ingest: a single source
    should update or relate to 10-15 existing pages, not create one isolated
    entry. If a new source only spawns its own page without echoing through the
    rest of the graph, the system is accumulating disconnected notes, not
    building knowledge. Folder hierarchies pre-encode retrieval paths and the
    ingest/query/lint cycle (lint catching contradictions, orphans, and gaps)
    are the operational mechanisms that turn ripple from aspiration into a
    measurable health signal.
lineage:
  compressed_at: '2026-04-09'
  source_insights:
    - id: INS-260409-D5BD
      relation: SUPPORTS
    - id: INS-260409-BA55
      relation: SUPPORTS
    - id: INS-260409-5065
      relation: REFINES
    - id: INS-260409-430B
      relation: REFINES
    - id: INS-260409-51B2
      relation: EXTENDS
    - id: INS-260409-EA5A
      relation: REFINES
  compression_trigger: 'COMPRESS flag — 202 insights, 22 principles, surprise 1.02 (highest in KB)'
embedded: true
embedding_model: "nomic-embed-text"
---
The diagnostic for whether an LLM-augmented knowledge base is actually compounding is the cross-link ripple of every new ingest: a single source should update or relate to 10-15 existing pages, not create one isolated entry. If a new source only spawns its own page without echoing through the rest of the graph, the system is accumulating disconnected notes, not building knowledge. Folder hierarchies pre-encode retrieval paths and the ingest/query/lint cycle (lint catching contradictions, orphans, and gaps) are the operational mechanisms that turn ripple from aspiration into a measurable health signal.
