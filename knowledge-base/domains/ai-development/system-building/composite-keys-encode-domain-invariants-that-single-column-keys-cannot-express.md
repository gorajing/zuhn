---
id: INS-260329-2FB8
domain: ai-development
topic: system-building
title: Composite keys encode domain invariants that single-column keys cannot express
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - database-design
  - data-modeling
  - domain-modeling
  - schema-validation
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
    Composite primary keys (like employee_id + client_id in a Works_With table)
    enforce domain constraints at the database level that surrogate keys
    silently abandon.
  standard: >-
    The tutorial demonstrates how a Works_With junction table uses a composite
    key of (emp_id, client_id) where both components are themselves foreign
    keys. This design enforces at the database level that one employee-client
    pair can only have one sales record — a domain invariant. If you replaced
    this with a surrogate auto-increment ID, the database would happily accept
    duplicate employee-client pairs, pushing constraint enforcement up to
    application code where it's more fragile. Similarly, the Branch_Supplier
    table uses (branch_id, supplier_name) as a composite key because neither
    column alone uniquely identifies a row. The choice between surrogate keys,
    natural keys, and composite keys is fundamentally a decision about where
    domain constraints live — in the schema (enforced automatically) or in the
    application (enforced by developer discipline). This parallels the
    strong-typing-as-guardrail principle: push constraints as close to the data
    layer as possible.
stance: >-
  Using surrogate auto-increment IDs everywhere is an anti-pattern that loses
  domain semantics which composite and natural keys preserve
related:
  - INS-260329-BE35
  - INS-260329-34EE
  - INS-260329-67CB
  - INS-260329-D297
  - INS-260329-1277
  - INS-260329-F556
  - INS-260329-6286
  - INS-260329-BE72
  - INS-260329-B22B
  - INS-260403-3517
evidence:
  - id: INS-260329-BE35
    type: SUPPORTS
    classified_at: '2026-04-02'
  - id: INS-260329-B22B
    type: CONTRADICTS
    classified_at: '2026-04-03'
  - id: INS-260403-3517
    type: CHALLENGES
    classified_at: '2026-04-06'
---
The tutorial demonstrates how a Works_With junction table uses a composite key of (emp_id, client_id) where both components are themselves foreign keys. This design enforces at the database level that one employee-client pair can only have one sales record — a domain invariant. If you replaced this with a surrogate auto-increment ID, the database would happily accept duplicate employee-client pairs, pushing constraint enforcement up to application code where it's more fragile. Similarly, the Branch_Supplier table uses (branch_id, supplier_name) as a composite key because neither column alone uniquely identifies a row. The choice between surrogate keys, natural keys, and composite keys is fundamentally a decision about where domain constraints live — in the schema (enforced automatically) or in the application (enforced by developer discipline). This parallels the strong-typing-as-guardrail principle: push constraints as close to the data layer as possible.
