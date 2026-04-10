---
id: INS-260410-EE37
domain: ai-development
topic: agent-patterns
title: >-
  Store session context as an interrogatable event log, not as the context
  window
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - context-engineering
  - session-state
  - compaction
  - long-horizon-agents
sources:
  - type: blog
    title: 'Scaling Managed Agents: Decoupling the brain from the hands'
    url: 'https://www.anthropic.com/engineering/managed-agents'
date_extracted: '2026-04-10'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Keep the full session durable outside the context window and let the harness
    re-hydrate slices via getEvents(), instead of compacting or trimming in
    place and losing tokens you can't recover.
  standard: >-
    Long-horizon tasks routinely exceed Claude's context window, and the
    standard mitigations — compaction, memory files, context trimming — all
    involve irreversible decisions about what to keep. You can't know in advance
    which tokens a future turn will need. If compaction removes messages from
    the context window, those messages are only recoverable if they were
    separately stored.


    Managed Agents resolve this by making the session itself a context object
    that lives outside the context window, durably stored in the session log. A
    getEvents() interface lets the brain interrogate context by selecting
    positional slices — picking up from wherever it last stopped reading,
    rewinding a few events before a specific moment to see the lead-up, or
    rereading context before a specific action. Any fetched events can be
    transformed in the harness before reaching Claude's context window, allowing
    arbitrary context engineering (cache-hit optimization, summarization,
    filtering) without committing to any of those transformations durably.


    The separation of concerns matters: the session guarantees durability and
    interrogability; the harness owns whatever context engineering turns out to
    be the right move for a given model. This way, future context-engineering
    strategies don't require schema changes — only new harness logic — and
    Claude never loses the ability to reach back and reread raw history.
stance: >-
  Long-horizon agents should store the session as a durable event log the
  harness can slice into on demand, rather than making irreversible compaction
  or trimming decisions against Claude's context window.
related:
  - INS-260323-8D12
  - PRI-260320-07A4
  - INS-260403-DDEB
  - INS-260410-346B
  - INS-260410-699C
---
Long-horizon tasks routinely exceed Claude's context window, and the standard mitigations — compaction, memory files, context trimming — all involve irreversible decisions about what to keep. You can't know in advance which tokens a future turn will need. If compaction removes messages from the context window, those messages are only recoverable if they were separately stored.

Managed Agents resolve this by making the session itself a context object that lives outside the context window, durably stored in the session log. A getEvents() interface lets the brain interrogate context by selecting positional slices — picking up from wherever it last stopped reading, rewinding a few events before a specific moment to see the lead-up, or rereading context before a specific action. Any fetched events can be transformed in the harness before reaching Claude's context window, allowing arbitrary context engineering (cache-hit optimization, summarization, filtering) without committing to any of those transformations durably.

The separation of concerns matters: the session guarantees durability and interrogability; the harness owns whatever context engineering turns out to be the right move for a given model. This way, future context-engineering strategies don't require schema changes — only new harness logic — and Claude never loses the ability to reach back and reread raw history.
