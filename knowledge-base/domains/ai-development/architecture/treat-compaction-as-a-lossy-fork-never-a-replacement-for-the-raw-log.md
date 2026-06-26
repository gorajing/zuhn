---
id: INS-260625-CC0F
domain: ai-development
topic: architecture
title: 'Treat compaction as a lossy fork, never a replacement for the raw log'
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - context-window
  - compaction
  - agents
  - state-management
sources:
  - type: youtube
    title: 'The Log Is The Agent - Ishaan Sehgal, Omnara'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=UPwGaM2MKHY'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    A model's finite context forces you to compact the log, but compaction
    throws information away — so keep the raw log and treat each compaction as a
    disposable fork you can resume as a new branch.
  standard: >-
    The obvious objection to 'the log is the agent' is that a log grows
    indefinitely while a model's context window is finite, so eventually you
    must compact the log into something the model can reason about. This is
    real, but it doesn't break the claim. Compaction is lossy by nature: a
    compacted summary cannot perfectly reproduce the agent's state in smaller
    form — it actively throws information away. It is one projection of the full
    log, just as a materialized view is not the database and a summary of a
    conversation is not the conversation.


    The discipline that follows: keep the raw log as the durable record and
    treat each compaction as a best-effort lossy fork — one you can resume as a
    new log. If you keep the raw log you can always generate fresh projections,
    including better compactions later. But if you discard the raw log and
    retain only the compaction, you've permanently lost part of the agent. A
    related boundary: the log stores the agent's view of the world, not the
    whole world. Like a Skyrim save file that holds player-specific state but
    not the entire game engine, the log records what the agent did, saw,
    changed, and needs to continue — it cannot make the external world
    deterministic (forking back won't unsend an email or revert a file changed
    underneath it).


    The practical rule for agent builders is to never let a context-management
    optimization (compaction, summarization, memory) become the system of
    record. Optimizations are projections; the raw append-only log is the source
    of truth, and everything lossy must be reconstructable from it.
stance: >-
  Compaction should be treated as a lossy, best-effort projection of the raw
  log, never as a substitute that justifies discarding the original.
related:
  - INS-260410-EE37
  - INS-260625-DD6B
  - INS-260409-384A
  - INS-260605-D0A0
  - INS-260605-1523
---
The obvious objection to 'the log is the agent' is that a log grows indefinitely while a model's context window is finite, so eventually you must compact the log into something the model can reason about. This is real, but it doesn't break the claim. Compaction is lossy by nature: a compacted summary cannot perfectly reproduce the agent's state in smaller form — it actively throws information away. It is one projection of the full log, just as a materialized view is not the database and a summary of a conversation is not the conversation.

The discipline that follows: keep the raw log as the durable record and treat each compaction as a best-effort lossy fork — one you can resume as a new log. If you keep the raw log you can always generate fresh projections, including better compactions later. But if you discard the raw log and retain only the compaction, you've permanently lost part of the agent. A related boundary: the log stores the agent's view of the world, not the whole world. Like a Skyrim save file that holds player-specific state but not the entire game engine, the log records what the agent did, saw, changed, and needs to continue — it cannot make the external world deterministic (forking back won't unsend an email or revert a file changed underneath it).

The practical rule for agent builders is to never let a context-management optimization (compaction, summarization, memory) become the system of record. Optimizations are projections; the raw append-only log is the source of truth, and everything lossy must be reconstructable from it.
