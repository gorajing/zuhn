---
id: INS-260329-47DD
domain: ai-development
topic: system-building
title: >-
  Database constraints push validation to the lowest possible layer where it
  cannot be circumvented
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - databases
  - constraints
  - validation
  - defense-in-depth
  - data-quality
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
    Schema-level constraints enforce data quality rules that no application bug,
    API misuse, or direct SQL query can bypass.
  standard: >-
    SQL constraints (NOT NULL, UNIQUE, DEFAULT, AUTO_INCREMENT, CHECK) represent
    validation rules encoded directly in the database schema. When you declare a
    column as NOT NULL, every INSERT from every source — application code, admin
    scripts, migration tools, direct SQL — must provide a value. This is
    categorically different from checking for null in your application's
    validation layer, which only protects one access path.


    This principle extends beyond databases into a general system design
    heuristic: push invariant enforcement to the lowest layer possible.
    Application-level validation is necessary for user-facing error messages and
    business logic, but schema-level constraints are the last line of defense.
    The tutorial demonstrates this beautifully — when a duplicate primary key
    insertion fails, it's the database rejecting it, not the application. This
    defense-in-depth approach means data integrity survives application bugs,
    API changes, and direct database access.
stance: >-
  NOT NULL, UNIQUE, DEFAULT, and CHECK constraints should be defined at the
  database schema level rather than relying on application-level validation
  because schema constraints are enforced universally across all access paths.
related:
  - INS-260329-F688
  - INS-260329-67CB
  - INS-260329-3423
  - INS-260329-9BEF
  - INS-260330-C31B
  - INS-260329-2FB8
  - INS-260329-ACEB
  - INS-260329-CF16
---
SQL constraints (NOT NULL, UNIQUE, DEFAULT, AUTO_INCREMENT, CHECK) represent validation rules encoded directly in the database schema. When you declare a column as NOT NULL, every INSERT from every source — application code, admin scripts, migration tools, direct SQL — must provide a value. This is categorically different from checking for null in your application's validation layer, which only protects one access path.

This principle extends beyond databases into a general system design heuristic: push invariant enforcement to the lowest layer possible. Application-level validation is necessary for user-facing error messages and business logic, but schema-level constraints are the last line of defense. The tutorial demonstrates this beautifully — when a duplicate primary key insertion fails, it's the database rejecting it, not the application. This defense-in-depth approach means data integrity survives application bugs, API changes, and direct database access.
