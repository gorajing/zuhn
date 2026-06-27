---
id: INS-260627-95CF
domain: ai-development
topic: agent-patterns
title: >-
  Use immutable versioned state snapshots, not shared mutable state, between
  agents
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - multi-agent
  - state-management
  - immutability
  - versioning
  - race-conditions
  - append-only
sources:
  - type: youtube
    title: >-
      From Chaos to Choreography: Multi-Agent Orchestration Patterns That
      Actually Work — Sandipan Bhaumik
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=2czYyrTzILg'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Shared mutable state produces lost updates and stale reads when agents write
    concurrently; instead each agent seals an immutable, versioned state object
    and appends a new row (insert, never update), giving race-free handoffs,
    clear lineage, free rollback, and binary-searchable debugging through state
    evolution.
  standard: >-
    The instinctive first design — multiple agents reading and writing the same
    database records — is wrong. Two agents both read 680, one writes 750, the
    other writes 720; last write wins and an update silently vanishes. Modern
    databases offer row locks, serializable isolation, and SELECT FOR UPDATE,
    but teams default to weak isolation, skip explicit transactions and locks,
    and ship race conditions. You cannot assume the database handles concurrency
    for you; at real complexity you must handle it explicitly in code.


    The pattern that works is immutable state snapshots with versioning. Agent A
    produces sealed, immutable version 1 stored in the orchestrator DB as an
    append-only log (inserts, not updates). A hands version 1 to B; B validates
    the schema against its expected contract, processes, and inserts immutable
    version 2 — without touching version 1 — then hands to C, and so on. In code
    this is a frozen state class carrying a version number, data payload, and
    creator; a handoff function that validates the contract, increments to
    version N+1, and executes the next agent with state it cannot mutate (it can
    only produce new state).


    This eliminates an entire class of bugs: no concurrent modification, no
    stale reads. It yields clear lineage — every state has a version and a known
    author — so when version 7 produces bad output you inspect version 6, then
    5, binary-searching the history to find where things went wrong. Failure
    handling is trivial: if Agent C fails, roll back to version 2. On Databricks
    this maps to state versions as rows in an immutable, versioned Delta table
    tied to runs via MLflow Traces; snapshots can also be logged to any
    append-only store for audit and replay, but are never shared for concurrent
    read or write.
stance: >-
  Agents should hand off immutable, versioned, append-only state snapshots
  rather than concurrently reading and writing shared mutable records.
related:
  - INS-260410-1ED3
  - INS-260625-77F8
  - INS-260625-4DDB
  - INS-260625-679B
  - INS-260411-52C8
  - INS-260605-E693
---
The instinctive first design — multiple agents reading and writing the same database records — is wrong. Two agents both read 680, one writes 750, the other writes 720; last write wins and an update silently vanishes. Modern databases offer row locks, serializable isolation, and SELECT FOR UPDATE, but teams default to weak isolation, skip explicit transactions and locks, and ship race conditions. You cannot assume the database handles concurrency for you; at real complexity you must handle it explicitly in code.

The pattern that works is immutable state snapshots with versioning. Agent A produces sealed, immutable version 1 stored in the orchestrator DB as an append-only log (inserts, not updates). A hands version 1 to B; B validates the schema against its expected contract, processes, and inserts immutable version 2 — without touching version 1 — then hands to C, and so on. In code this is a frozen state class carrying a version number, data payload, and creator; a handoff function that validates the contract, increments to version N+1, and executes the next agent with state it cannot mutate (it can only produce new state).

This eliminates an entire class of bugs: no concurrent modification, no stale reads. It yields clear lineage — every state has a version and a known author — so when version 7 produces bad output you inspect version 6, then 5, binary-searching the history to find where things went wrong. Failure handling is trivial: if Agent C fails, roll back to version 2. On Databricks this maps to state versions as rows in an immutable, versioned Delta table tied to runs via MLflow Traces; snapshots can also be logged to any append-only store for audit and replay, but are never shared for concurrent read or write.
