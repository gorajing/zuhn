---
id: INS-260625-A281
domain: ai-development
topic: system-design
title: 'Make the log primary and treat context, UI, and compaction as projections'
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - agents
  - databases
  - event-sourcing
  - system-design
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
    Like a database where the write-ahead log is durable and tables are views,
    an agent's context window, UI, debugging trace, and compaction should all be
    projections derived from one primary log.
  standard: >-
    Databases had to learn this inversion first. For years they looked like
    opaque systems of tables, indexes, and materialized views that were hard to
    reason about — but underneath every serious database is a log, the durable
    sequence of changes, and everything else is a view derived from it. Agents
    need the same inversion. Today agents are treated as complicated opaque
    systems full of models, prompts, and tool calls; instead, the log should be
    primary and the rest should be projections.


    Concretely: the context fed into the model is a projection of the log. The
    UI rendered on top is a projection. Debugging, traceability, and auditing
    are projections. Even compaction is a projection. The log itself is the only
    thing that is NOT a projection — it is the durable history that every
    projection is generated from. If you keep the raw log, you can always
    regenerate any projection (a new UI, a different context window, a fresh
    audit view); if you keep only a projection and discard the log, you've lost
    part of the agent.


    The design discipline this implies: when building agent infrastructure, ask
    of every component whether it is the durable record or merely a view of it.
    Anything that is a view should be cheap to throw away and reconstruct, and
    nothing irreplaceable should live only inside a projection. This is the
    event-sourcing pattern applied to agents.
stance: >-
  Agent systems should treat the durable log as the single source of truth and
  everything else — context, UI, auditing, compaction — as regenerable
  projections of it.
related:
  - INS-260410-0FC1
  - INS-260605-83DA
  - INS-260625-ADEA
  - INS-260625-1830
  - INS-260605-C00C
  - INS-260625-6127
---
Databases had to learn this inversion first. For years they looked like opaque systems of tables, indexes, and materialized views that were hard to reason about — but underneath every serious database is a log, the durable sequence of changes, and everything else is a view derived from it. Agents need the same inversion. Today agents are treated as complicated opaque systems full of models, prompts, and tool calls; instead, the log should be primary and the rest should be projections.

Concretely: the context fed into the model is a projection of the log. The UI rendered on top is a projection. Debugging, traceability, and auditing are projections. Even compaction is a projection. The log itself is the only thing that is NOT a projection — it is the durable history that every projection is generated from. If you keep the raw log, you can always regenerate any projection (a new UI, a different context window, a fresh audit view); if you keep only a projection and discard the log, you've lost part of the agent.

The design discipline this implies: when building agent infrastructure, ask of every component whether it is the durable record or merely a view of it. Anything that is a view should be cheap to throw away and reconstruct, and nothing irreplaceable should live only inside a projection. This is the event-sourcing pattern applied to agents.
