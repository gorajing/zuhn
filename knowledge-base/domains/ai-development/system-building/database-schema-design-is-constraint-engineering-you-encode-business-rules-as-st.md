---
id: INS-260329-F556
domain: ai-development
topic: system-building
title: >-
  Database schema design is constraint engineering — you encode business rules
  as structural guarantees
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - schema-design
  - constraints
  - data-integrity
  - business-rules
  - normalization
  - defensive-design
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
    The best database schemas encode business rules structurally through keys,
    types, and constraints rather than trusting application code to enforce
    them.
  standard: >-
    The tutorial's company database demonstrates a key principle: business rules
    like 'every employee belongs to exactly one branch' and 'every branch has
    exactly one manager' are encoded structurally through foreign key
    constraints, not enforced by application code. If the database schema
    requires a branch_id foreign key on every employee, it's impossible to
    create an orphan employee — the database itself prevents it.


    This is constraint engineering: pushing invariant enforcement as close to
    the data as possible. The same principle applies beyond SQL — Zod schemas
    validate JSON structure, TypeScript types prevent invalid states, and even
    Zuhn's ID system (timestamp + hash, no counters) makes ID collision
    structurally impossible rather than relying on careful counter management.
    The general rule is: if a business rule can be expressed as a structural
    constraint, it should be, because application code is fallible but
    structural guarantees are enforced by the system itself.
stance: >-
  Well-designed database schemas encode business rules as structural constraints
  rather than relying on application code to enforce invariants
related:
  - INS-260329-2FB8
  - INS-260329-7673
  - INS-260329-67CB
  - PRI-260403-9E80
  - PRI-260405-2A95
  - INS-260329-D297
evidence:
  - id: INS-260329-0F06
    type: EXTENDS
    classified_at: '2026-04-02'
---
The tutorial's company database demonstrates a key principle: business rules like 'every employee belongs to exactly one branch' and 'every branch has exactly one manager' are encoded structurally through foreign key constraints, not enforced by application code. If the database schema requires a branch_id foreign key on every employee, it's impossible to create an orphan employee — the database itself prevents it.

This is constraint engineering: pushing invariant enforcement as close to the data as possible. The same principle applies beyond SQL — Zod schemas validate JSON structure, TypeScript types prevent invalid states, and even Zuhn's ID system (timestamp + hash, no counters) makes ID collision structurally impossible rather than relying on careful counter management. The general rule is: if a business rule can be expressed as a structural constraint, it should be, because application code is fallible but structural guarantees are enforced by the system itself.
