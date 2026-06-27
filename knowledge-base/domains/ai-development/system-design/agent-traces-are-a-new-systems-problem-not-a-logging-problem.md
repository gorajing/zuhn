---
id: INS-260605-C0BF
domain: ai-development
topic: system-design
title: 'Agent traces are a new systems problem, not a logging problem'
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - traces
  - database
  - full-text-index
  - tantivy
  - infrastructure
  - real-time
sources:
  - type: youtube
    title: 'How agent o11y differs from traditional o11y — Phil Hetzel, Braintrust'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=XBaznoTRDFI'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Agent traces are semi-structured, full of unstructured text, and huge — a
    single span can hit 20MB and a full trace can exceed a gigabyte — demanding
    full-text indexing and a custom store rather than off-the-shelf OLAP.
  standard: >-
    Agent traces are 'nasty': highly semi-structured with large volumes of
    unstructured text embedded inside, and enormous — Braintrust reports
    individual spans of 20MB and full traces over 1GB. On top of size, users
    demand true real-time ingest (see the interaction instantly via a
    write-ahead log) AND heavy analytical read patterns (SQL queries, CLI
    access, filtering across traces). Critically, people want to full-text
    search traces ('show me every trace containing the word Amazon'), which
    conventional metric stores can't do well. Braintrust moved off ClickHouse
    and built a database from scratch incorporating a forked Tantivy index (a
    Rust analog to Apache Lucene) for text search, because OLAP engines couldn't
    serve the text-indexing workload. The lesson for builders: agent telemetry
    is a genuinely new infrastructure problem; treating it as ordinary metrics
    ingestion will fail at scale.
stance: >-
  Storing and querying agent traces requires a purpose-built data system because
  their size and shape break conventional observability backends.
related:
  - INS-260403-410A
  - INS-260514-23D6
  - INS-260605-1A50
  - INS-260605-58DA
  - INS-260605-7711
  - INS-260626-BE0D
  - INS-260605-2ECD
  - INS-260625-06B3
  - INS-260626-6F8E
---
Agent traces are 'nasty': highly semi-structured with large volumes of unstructured text embedded inside, and enormous — Braintrust reports individual spans of 20MB and full traces over 1GB. On top of size, users demand true real-time ingest (see the interaction instantly via a write-ahead log) AND heavy analytical read patterns (SQL queries, CLI access, filtering across traces). Critically, people want to full-text search traces ('show me every trace containing the word Amazon'), which conventional metric stores can't do well. Braintrust moved off ClickHouse and built a database from scratch incorporating a forked Tantivy index (a Rust analog to Apache Lucene) for text search, because OLAP engines couldn't serve the text-indexing workload. The lesson for builders: agent telemetry is a genuinely new infrastructure problem; treating it as ordinary metrics ingestion will fail at scale.
