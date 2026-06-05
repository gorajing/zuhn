---
id: INS-260605-E303
domain: ai-development
topic: architecture
title: Model an agent harness as a reducer over an append-only event stream
actionability: inspiration
confidence: medium
shelf_life: evergreen
status: active
tags:
  - event-sourcing
  - agent-harness
  - stream-processing
  - reducers
  - state-management
sources:
  - type: youtube
    title: >-
      Make your own event-sourced agent harness using stream processors — Jonas
      Templestein, Iterate
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=vi-2nasppAg'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Make every agent action — input, LLM token fragments, errors, schedules — an
    event, and express all agent logic as a pure reduce(state, event) plus a
    separate side-effect hook.
  standard: >-
    Templestein argues most agent harnesses 'skirt around' being event-sourced:
    they have side effects you can only later reconstruct from OpenTelemetry
    traces, even though the agent already maintains an event log internally. His
    alternative collapses everything to one primitive — an event — and splits
    agent logic into two functions: a synchronous, side-effect-free reducer that
    folds new events into derived world state, and an 'after-append' hook that
    enacts side effects (LLM calls, appends to other streams). The reducer
    answers 'what is true now?' and the hook answers 'what should I do about
    it?'.


    The payoff is debuggability: if literally everything that could happen is in
    the log, replaying the stream reconstructs any state, and there is no hidden
    side effect to chase. It also makes the system trivially extensible — adding
    a capability (model switching, compaction-in-progress, tool-call tracking)
    is three or four lines: a new field in the state type and a one-line reducer
    case. The mental discipline is the standard event-sourcing one: reducers
    must stay pure so the same event log always yields the same state.
stance: >-
  An entire state-of-the-art coding agent can be built as a synchronous reducer
  over an event stream plus an occasional side-effect hook.
related:
  - INS-260410-1ED3
  - INS-260411-D060
  - INS-260605-9A01
  - INS-260327-13B3
  - INS-260405-F26B
  - INS-260421-7ADE
---
Templestein argues most agent harnesses 'skirt around' being event-sourced: they have side effects you can only later reconstruct from OpenTelemetry traces, even though the agent already maintains an event log internally. His alternative collapses everything to one primitive — an event — and splits agent logic into two functions: a synchronous, side-effect-free reducer that folds new events into derived world state, and an 'after-append' hook that enacts side effects (LLM calls, appends to other streams). The reducer answers 'what is true now?' and the hook answers 'what should I do about it?'.

The payoff is debuggability: if literally everything that could happen is in the log, replaying the stream reconstructs any state, and there is no hidden side effect to chase. It also makes the system trivially extensible — adding a capability (model switching, compaction-in-progress, tool-call tracking) is three or four lines: a new field in the state type and a one-line reducer case. The mental discipline is the standard event-sourcing one: reducers must stay pure so the same event log always yields the same state.
