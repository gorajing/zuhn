---
id: INS-260625-E4F0
domain: ai-development
topic: architecture
title: >-
  Co-locate search indexes with the system of record instead of running a
  separate search platform
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - search
  - architecture
  - etl
  - data-consistency
  - infrastructure
sources:
  - type: youtube
    title: Boost AI context with hybrid search in Spanner
    author: Google Cloud Tech
    url: 'https://www.youtube.com/watch?v=fAf4Zh-CC08'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Running a separate search platform forces ETL pipelines, duplicate copies,
    and stale results — co-locating search inside the operational database
    eliminates that entire tax.
  standard: >-
    The traditional pattern is a primary database replicating into a dedicated
    search service (Algolia, Elasticsearch). This introduces ETL pipelines, data
    duplication, and materialization lag — Attio's largest customers hit
    significant indexing delays as the push-based pipeline buffered in hot
    spots, meaning searches returned stale data. Folding full-text and vector
    indexes into the same store that serves the transactional workload removes
    the copy step entirely: indexes are transactionally consistent with writes,
    inheriting the primary's availability and uptime rather than requiring their
    own.


    The deeper lesson is architectural, not vendor-specific: every separate
    index you maintain off the system of record is a consistency boundary you
    now have to reason about. The cost shows up as operational toil, stale
    reads, and pipeline hot spots long before it shows up on the infrastructure
    bill. When a single store can serve OLTP, keyword, and vector workloads from
    one copy of the data, the integration complexity that consumed 'a big part
    of your system' disappears — and as a bonus, Attio found the consolidated
    solution an order of magnitude cheaper than the standalone search service it
    replaced.
stance: >-
  Maintaining a dedicated search engine fed by ETL from the primary database is
  a net liability that should be collapsed into the operational store.
related:
  - INS-260625-A741
  - INS-260625-E98C
  - INS-260409-2A51
  - INS-260320-71C1
  - INS-260404-573C
---
The traditional pattern is a primary database replicating into a dedicated search service (Algolia, Elasticsearch). This introduces ETL pipelines, data duplication, and materialization lag — Attio's largest customers hit significant indexing delays as the push-based pipeline buffered in hot spots, meaning searches returned stale data. Folding full-text and vector indexes into the same store that serves the transactional workload removes the copy step entirely: indexes are transactionally consistent with writes, inheriting the primary's availability and uptime rather than requiring their own.

The deeper lesson is architectural, not vendor-specific: every separate index you maintain off the system of record is a consistency boundary you now have to reason about. The cost shows up as operational toil, stale reads, and pipeline hot spots long before it shows up on the infrastructure bill. When a single store can serve OLTP, keyword, and vector workloads from one copy of the data, the integration complexity that consumed 'a big part of your system' disappears — and as a bonus, Attio found the consolidated solution an order of magnitude cheaper than the standalone search service it replaced.
