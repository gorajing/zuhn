---
id: INS-260605-CA2B
domain: ai-development
topic: architecture
title: >-
  The replay/durable-execution model breaks down for agents because agents are
  sessions, not transactions
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - durable-execution
  - replay
  - agent-loop
  - workflows
  - limitations
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
    Replay-based durable execution suits bounded start-to-end workflows, but an
    agent is a long-lived session whose ever-growing replay journal eventually
    exceeds the system's entry-count or entry-size limits.
  standard: >-
    For 10-15 years, durable-execution engines solved the multi-step-side-effect
    problem by wrapping each side effect in a cached 'step': on re-execution you
    skip completed steps so you never, say, charge a credit card twice. Allam
    calls this the replay model—it builds durability on top of stateless compute
    and yields a useful audit trail and the ability to pause and wait (e.g., for
    a human) before resuming. When LLMs arrived in 2023 they fit neatly as just
    another step in a workflow.


    Tool calling inverted the relationship: instead of code orchestrating the
    LLM, the LLM orchestrates the code via the agent loop. You can still make
    each LLM call and tool call a replay step, but every resume re-executes from
    the top and replays the whole journal, which grows and grows as the user
    keeps interacting—eventually hitting a hard limit on total entries or entry
    size, and the system falls over. The deeper mismatch is conceptual: replay
    gave us durable transactions, but an agent isn't a transaction, it's a
    session that lasts as long as the user wants. Workflows start and end;
    sessions keep going. This matters more as the horizon of meaningful agent
    work doubles roughly every 4-7 months—from hours today toward multi-day
    sessions—so any durability scheme that scales with replay-journal length is
    on a collision course with that growth.
stance: >-
  The replay-journal durable-execution model that worked for multi-step
  workflows fails for agents because an agent is an open-ended session whose
  replay log grows without bound.
related:
  - INS-260627-E496
  - INS-260627-1443
  - INS-260619-90F6
  - INS-260625-DF35
  - INS-260605-83DA
  - INS-260605-DF08
  - INS-260625-2088
---
For 10-15 years, durable-execution engines solved the multi-step-side-effect problem by wrapping each side effect in a cached 'step': on re-execution you skip completed steps so you never, say, charge a credit card twice. Allam calls this the replay model—it builds durability on top of stateless compute and yields a useful audit trail and the ability to pause and wait (e.g., for a human) before resuming. When LLMs arrived in 2023 they fit neatly as just another step in a workflow.

Tool calling inverted the relationship: instead of code orchestrating the LLM, the LLM orchestrates the code via the agent loop. You can still make each LLM call and tool call a replay step, but every resume re-executes from the top and replays the whole journal, which grows and grows as the user keeps interacting—eventually hitting a hard limit on total entries or entry size, and the system falls over. The deeper mismatch is conceptual: replay gave us durable transactions, but an agent isn't a transaction, it's a session that lasts as long as the user wants. Workflows start and end; sessions keep going. This matters more as the horizon of meaningful agent work doubles roughly every 4-7 months—from hours today toward multi-day sessions—so any durability scheme that scales with replay-journal length is on a collision course with that growth.
