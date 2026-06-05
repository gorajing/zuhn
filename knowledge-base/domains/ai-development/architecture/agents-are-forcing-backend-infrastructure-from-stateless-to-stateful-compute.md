---
id: INS-260605-61D9
domain: ai-development
topic: architecture
title: Agents are forcing backend infrastructure from stateless to stateful compute
actionability: inspiration
confidence: medium
shelf_life: evergreen
status: active
tags:
  - stateful-compute
  - shared-nothing
  - paradigm-shift
  - backend
  - infrastructure
sources:
  - type: youtube
    title: >-
      Two Roads to Durable Agents: Replay vs. Snapshot — Eric Allam, CEO,
      Trigger.dev
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=svCnShDvgQg'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    The shared-nothing 'request + DB = response' paradigm that ran backends for
    30 years is giving way to stateful compute, because agents carry meaningful
    state in the compute layer itself.
  standard: >-
    Since PHP and the LAMP stack, the dominant backend paradigm has been
    shared-nothing: the compute layer is stateless and all meaningful state
    lives in the database, so any request can be served by recomputing from
    request data plus DB state. Everything that followed—Rails, Node.js,
    serverless—inherited this. It worked because web requests were short and
    side effects could be pushed into async tasks and, later, replay-based
    durable workflows.


    Allam's thesis is that agents break this assumption: a long-running agent
    accumulates valuable, irreproducible state in the compute layer (a cloned
    repo, a warmed dev server, datasets in memory) that can't be flattened into
    a database row or replayed from a log. Making that durable requires treating
    compute as stateful—which in practice means snapshot-and-restore as the core
    primitive, the same way checkpoint/restore served expensive mainframe jobs.
    The strategic read for infrastructure builders and founders: if this is
    right, the next layer of backend platforms will be organized around
    suspendable, restorable, stateful machines rather than ephemeral stateless
    functions, and tooling that makes VM snapshotting cheap and Docker-simple is
    a wedge into that shift.
stance: >-
  The 30-year dominance of stateless shared-nothing compute is ending because
  agents need stateful compute that persists across turns, versions, and
  failures.
related:
  - INS-260329-0EAC
  - INS-260330-82B2
  - INS-260410-1ED3
  - INS-260330-AB62
  - INS-260411-52C8
  - INS-260327-BF89
  - INS-260411-D060
---
Since PHP and the LAMP stack, the dominant backend paradigm has been shared-nothing: the compute layer is stateless and all meaningful state lives in the database, so any request can be served by recomputing from request data plus DB state. Everything that followed—Rails, Node.js, serverless—inherited this. It worked because web requests were short and side effects could be pushed into async tasks and, later, replay-based durable workflows.

Allam's thesis is that agents break this assumption: a long-running agent accumulates valuable, irreproducible state in the compute layer (a cloned repo, a warmed dev server, datasets in memory) that can't be flattened into a database row or replayed from a log. Making that durable requires treating compute as stateful—which in practice means snapshot-and-restore as the core primitive, the same way checkpoint/restore served expensive mainframe jobs. The strategic read for infrastructure builders and founders: if this is right, the next layer of backend platforms will be organized around suspendable, restorable, stateful machines rather than ephemeral stateless functions, and tooling that makes VM snapshotting cheap and Docker-simple is a wedge into that shift.
