---
id: INS-260605-26EC
domain: ai-development
topic: architecture
title: >-
  Split reduce-state from enact-side-effects so wake-from-sleep doesn't replay
  every action
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - idempotency
  - replay
  - agent-harness
  - side-effects
  - resilience
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
    Keep reduction pure and defer side effects to a post-catch-up hook so that
    replaying 100 buffered events rebuilds state once instead of triggering 100
    LLM requests.
  standard: >-
    The core reason Templestein separates the reducer from the after-append hook
    is the sleep/wake problem. Imagine your laptop closes, 100 new events
    accumulate in the stream, and you reopen and restart the processor. If side
    effects lived inside the reduce step, catching up would fire 100 LLM
    requests for events that are already in the past. Instead, the pure reducer
    folds all 100 events into current state cheaply and synchronously, and only
    then does the side-effect hook look at the final state and decide what — if
    anything — to actually do.


    This is a concrete, generalizable rule for any agent that can be paused,
    crash, or fall behind: derivation of state from history must be free of
    irreversible actions, and irreversible actions must be gated on 'caught-up'
    state, not on individual event arrival. It is the same property that makes
    event-sourced systems safe to replay, applied to the specific failure mode
    of agents that incur cost and external effects per step.
stance: >-
  Separating pure reduction from side-effect enactment is what lets an agent
  catch up on a backlog of events without re-firing every historical LLM call.
related:
  - INS-260530-AA02
  - INS-260605-90CF
  - INS-260329-818A
  - INS-260329-66BD
  - INS-260330-3EFC
  - INS-260605-5159
---
The core reason Templestein separates the reducer from the after-append hook is the sleep/wake problem. Imagine your laptop closes, 100 new events accumulate in the stream, and you reopen and restart the processor. If side effects lived inside the reduce step, catching up would fire 100 LLM requests for events that are already in the past. Instead, the pure reducer folds all 100 events into current state cheaply and synchronously, and only then does the side-effect hook look at the final state and decide what — if anything — to actually do.

This is a concrete, generalizable rule for any agent that can be paused, crash, or fall behind: derivation of state from history must be free of irreversible actions, and irreversible actions must be gated on 'caught-up' state, not on individual event arrival. It is the same property that makes event-sourced systems safe to replay, applied to the specific failure mode of agents that incur cost and external effects per step.
