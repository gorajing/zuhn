---
id: INS-260329-8233
domain: ai-development
topic: system-building
title: >-
  Composite keys solve the many-to-many relationship problem that single primary
  keys cannot
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - databases
  - composite-keys
  - many-to-many
  - data-modeling
  - normalization
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
    When two entities have a many-to-many relationship, a junction table with a
    composite key of both foreign keys is the only correct way to model it.
  standard: >-
    A single primary key can only model one-to-many relationships (one branch
    has many employees). But many real-world relationships are many-to-many: an
    employee sells to many clients, and a client buys from many employees. The
    solution is a junction table (like Works_With) where the primary key is a
    composite of both foreign keys.


    This pattern appears everywhere in system design — user-role assignments,
    tag-to-item mappings, feature-flag-to-segment associations. The key insight
    is recognizing when neither side of a relationship can uniquely identify a
    row. Only the combination does. Failing to use composite keys leads to
    either data duplication (embedding all client data in the employee table) or
    lost relationships (only tracking the most recent client per employee).
stance: >-
  Many-to-many relationships require composite keys made of two foreign keys,
  and failing to model this correctly leads to data duplication or lost
  relationships
related:
  - INS-260329-34EE
  - INS-260329-6286
  - INS-260329-BE72
  - PRI-260406-788D
  - INS-260329-1277
evidence:
  - id: INS-260329-C401
    type: SUPPORTS
    classified_at: '2026-04-02'
---
A single primary key can only model one-to-many relationships (one branch has many employees). But many real-world relationships are many-to-many: an employee sells to many clients, and a client buys from many employees. The solution is a junction table (like Works_With) where the primary key is a composite of both foreign keys.

This pattern appears everywhere in system design — user-role assignments, tag-to-item mappings, feature-flag-to-segment associations. The key insight is recognizing when neither side of a relationship can uniquely identify a row. Only the combination does. Failing to use composite keys leads to either data duplication (embedding all client data in the employee table) or lost relationships (only tracking the most recent client per employee).
