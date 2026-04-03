---
id: PRI-260403-9E80
domain: ai-development
title: >-
  Encode safety rules as compile-time or schema-level constraints — the lowest
  shared layer prevents bugs regardless of who writes the application code
summary: >-
  Rust's borrow checker eliminates memory bugs at compile time more effectively
  than garbage collection or manual discipline. Database constraints (foreign
  keys, NOT NULL, ON DELETE CASCADE) enforce business rules at the storage layer
  before application code runs. The pattern: push invariants as low in the stack
  as possible. Human discipline fails at scale; mechanical enforcement does not.
confidence: very_high
supporting_insights:
  - INS-260330-3B0B
  - INS-260329-67CB
  - INS-260329-3423
  - INS-260329-7914
  - INS-260329-BE72
  - INS-260329-D297
supporting_count: 6
tags:
  - constraints
  - type-safety
  - database-design
  - compile-time
  - invariants
date_created: '2026-04-03'
last_reviewed: '2026-04-03'
resolutions:
  one_line: >-
    Encode safety rules as compile-time or schema-level constraints — the lowest
    shared layer prevents bugs regardless of who writes the application code
  standard: >-
    Rust's borrow checker eliminates memory bugs at compile time more
    effectively than garbage collection or manual discipline. Database
    constraints (foreign keys, NOT NULL, ON DELETE CASCADE) enforce business
    rules at the storage layer before application code runs. The pattern: push
    invariants as low in the stack as possible. Human discipline fails at scale;
    mechanical enforcement does not.
lineage:
  compressed_at: '2026-04-03'
  source_insights:
    - id: INS-260330-3B0B
      relation: SUPPORTS
    - id: INS-260329-67CB
      relation: SUPPORTS
    - id: INS-260329-3423
      relation: REFINES
    - id: INS-260329-7914
      relation: EXTENDS
    - id: INS-260329-BE72
      relation: EXTENDS
    - id: INS-260329-D297
      relation: SUPPORTS
  compression_trigger: 'COMPRESS flag — 207 insights, 7 principles (surprise: 0.91)'
  pagerank_seed: INS-260329-DEA1
embedded: true
embedding_model: "nomic-embed-text"
---
Rust's borrow checker eliminates memory bugs at compile time more effectively than garbage collection or manual discipline. Database constraints (foreign keys, NOT NULL, ON DELETE CASCADE) enforce business rules at the storage layer before application code runs. The pattern: push invariants as low in the stack as possible. Human discipline fails at scale; mechanical enforcement does not.
