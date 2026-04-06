---
id: INS-260329-34EE
domain: ai-development
topic: system-building
title: >-
  Composite keys model many-to-many relationships by combining foreign keys into
  a single primary key
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - databases
  - composite-keys
  - many-to-many
  - junction-tables
  - data-modeling
sources:
  - type: youtube
    title: SQL Tutorial - Full Database Course for Beginners
    author: freeCodeCamp.org
    url: 'https://www.youtube.com/watch?v=HXV3zeQKqGY'
date_extracted: '2026-03-29'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Junction tables with composite keys naturally prevent duplicate
    relationships and encode the semantics of entity interactions.
  standard: >-
    When two entities have a many-to-many relationship (e.g., employees sell to
    clients), a junction table like Works_With uses a composite primary key made
    of both foreign keys (employee_id + client_id). This design simultaneously
    solves three problems: it prevents duplicate relationship entries, it allows
    additional attributes on the relationship itself (like total_sales), and it
    keeps both parent tables clean of relationship data.


    This pattern is one of the most powerful in relational modeling because the
    primary key constraint does double duty — it uniquely identifies each
    relationship instance while also guaranteeing that the same pair cannot be
    recorded twice. Understanding composite keys is essential because they
    appear everywhere: user-role assignments, order-product line items, course
    enrollments, and any scenario where two entities interact with tracked
    metadata.
stance: >-
  Many-to-many relationships between entities are best modeled through junction
  tables with composite primary keys, not through denormalized columns or
  application-level tracking.
related:
  - INS-260329-8233
  - INS-260329-BE72
  - INS-260329-1277
  - INS-260329-2FB8
  - INS-260329-67CB
  - INS-260329-6286
  - INS-260329-920D
evidence:
  - id: INS-260329-C401
    type: SUPPORTS
    classified_at: '2026-04-02'
---
When two entities have a many-to-many relationship (e.g., employees sell to clients), a junction table like Works_With uses a composite primary key made of both foreign keys (employee_id + client_id). This design simultaneously solves three problems: it prevents duplicate relationship entries, it allows additional attributes on the relationship itself (like total_sales), and it keeps both parent tables clean of relationship data.

This pattern is one of the most powerful in relational modeling because the primary key constraint does double duty — it uniquely identifies each relationship instance while also guaranteeing that the same pair cannot be recorded twice. Understanding composite keys is essential because they appear everywhere: user-role assignments, order-product line items, course enrollments, and any scenario where two entities interact with tracked metadata.
