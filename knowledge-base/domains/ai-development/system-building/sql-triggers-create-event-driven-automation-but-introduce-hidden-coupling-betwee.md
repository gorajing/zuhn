---
id: INS-260329-9745
domain: ai-development
topic: system-building
title: >-
  SQL triggers create event-driven automation but introduce hidden coupling
  between tables
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - database-design
  - automation
  - error-handling
  - system-reliability
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
    SQL triggers automatically execute code in response to INSERT/UPDATE/DELETE
    events, enabling powerful automation but creating implicit behavior that
    doesn't appear in application code.
  standard: >-
    The tutorial demonstrates triggers that fire BEFORE INSERT on the employee
    table, automatically inserting audit records into a trigger_test table.
    Triggers can reference the NEW row being inserted, use conditional logic
    (IF/ELSEIF), and fire on INSERT, UPDATE, or DELETE events. This is
    remarkably powerful for audit logging, data validation, and maintaining
    derived data. However, triggers introduce a critical architectural
    trade-off: the behavior is invisible to anyone reading the application code.
    When a developer writes INSERT INTO employee, they see no indication that
    other tables are being modified simultaneously. This is the database
    equivalent of action-at-a-distance — the same class of problem that makes
    global state and implicit side effects dangerous in application code. The
    practical guidance is: use triggers for cross-cutting concerns (audit logs,
    updated_at timestamps) but never for business logic that developers need to
    reason about.
stance: >-
  Database triggers are powerful for maintaining data consistency but create
  invisible side effects that make systems harder to reason about and debug
related:
  - INS-260329-CF16
  - INS-260325-0FED
  - INS-260320-69CD
  - INS-260322-68FE
  - INS-260329-C7BF
  - INS-260329-E4F6
  - INS-260330-202A
evidence:
  - id: INS-260325-0FED
    type: TRANSFERS_TO
    classified_at: '2026-04-02'
  - id: INS-260330-202A
    type: TRANSFERS_TO
    classified_at: '2026-04-05'
---
The tutorial demonstrates triggers that fire BEFORE INSERT on the employee table, automatically inserting audit records into a trigger_test table. Triggers can reference the NEW row being inserted, use conditional logic (IF/ELSEIF), and fire on INSERT, UPDATE, or DELETE events. This is remarkably powerful for audit logging, data validation, and maintaining derived data. However, triggers introduce a critical architectural trade-off: the behavior is invisible to anyone reading the application code. When a developer writes INSERT INTO employee, they see no indication that other tables are being modified simultaneously. This is the database equivalent of action-at-a-distance — the same class of problem that makes global state and implicit side effects dangerous in application code. The practical guidance is: use triggers for cross-cutting concerns (audit logs, updated_at timestamps) but never for business logic that developers need to reason about.
