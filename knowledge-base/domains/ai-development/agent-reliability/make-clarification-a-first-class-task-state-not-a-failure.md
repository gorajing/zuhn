---
id: INS-260627-3963
domain: ai-development
topic: agent-reliability
title: 'Make clarification a first-class task state, not a failure'
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - task-lifecycle
  - human-in-the-loop
  - state-machine
  - multi-turn
  - clarification
sources:
  - type: youtube
    title: >-
      Building Intelligent Research Agents with Manus - Ivan Leo, Manus AI (now
      Meta Superintelligence)
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=xz0-brt56L8'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Model 'the agent needs more input' as a real task state and persist a task
    ID, so clarification and multi-turn follow-ups resume the same session
    rather than spawning a fresh one.
  standard: >-
    The Manus task lifecycle has four states — running, pending, completed,
    error — and 'pending' specifically means the agent needs more input from the
    caller. In the weather demo, the agent paused and asked the user to choose
    indoor vs outdoor before continuing. Crucially, the returned task ID is the
    handle that lets you push a follow-up answer back into the *same* session,
    preserving all accumulated context, rather than re-prompting from a blank
    slate.


    This turns clarification into a designed control-flow primitive instead of a
    dead end. An agent that can only succeed or fail will either hallucinate
    when underspecified or bail out; an agent that can transition to 'pending'
    and wait can ask one good question and continue. Keeping the task ID stable
    across turns is what makes the whole conversation's context cohere as
    workflows grow more complex — the demo reused the same ID to thread a Slack
    conversation, mapping thread timestamps to task IDs in a simple KV store so
    follow-up messages routed to the right live session.


    Application: design your agent's status enum to include an explicit
    awaiting-input state, return a durable task/session ID on creation, and
    build your caller (and any chat surface in front of it) to detect 'pending,'
    surface the question, and resume by pushing the answer to the same ID. This
    is the practical substrate for both human-in-the-loop checkpoints and
    multi-turn conversation.
stance: >-
  Long-running agents should expose an explicit 'pending' state for
  clarification and keep a stable task ID so callers can resume the same session
  instead of starting over.
related:
  - INS-260409-DBCF
  - INS-260410-2C51
  - INS-260411-D060
  - INS-260501-247C
  - INS-260605-0AD6
  - INS-260605-B5A2
  - INS-260605-2795
  - INS-260605-8BEA
  - INS-260605-75BB
  - INS-260605-46A8
---
The Manus task lifecycle has four states — running, pending, completed, error — and 'pending' specifically means the agent needs more input from the caller. In the weather demo, the agent paused and asked the user to choose indoor vs outdoor before continuing. Crucially, the returned task ID is the handle that lets you push a follow-up answer back into the *same* session, preserving all accumulated context, rather than re-prompting from a blank slate.

This turns clarification into a designed control-flow primitive instead of a dead end. An agent that can only succeed or fail will either hallucinate when underspecified or bail out; an agent that can transition to 'pending' and wait can ask one good question and continue. Keeping the task ID stable across turns is what makes the whole conversation's context cohere as workflows grow more complex — the demo reused the same ID to thread a Slack conversation, mapping thread timestamps to task IDs in a simple KV store so follow-up messages routed to the right live session.

Application: design your agent's status enum to include an explicit awaiting-input state, return a durable task/session ID on creation, and build your caller (and any chat surface in front of it) to detect 'pending,' surface the question, and resume by pushing the answer to the same ID. This is the practical substrate for both human-in-the-loop checkpoints and multi-turn conversation.
