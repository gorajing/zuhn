---
id: INS-260605-320E
domain: ai-development
topic: agent-patterns
title: 'Treat quota exhaustion as graceful fallback, never a workflow interrupt'
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - agent-patterns
  - reliability
  - model-routing
  - ux
sources:
  - type: youtube
    title: >-
      How Google DeepMind Runs Agents at Scale — KP Sawhney & Ian Ballantyne,
      Google DeepMind
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=7gujZrJ9L5I'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    The worst notification is 'we ran out of quota' — the harness should reroute
    to flash/local models and keep working.
  standard: >-
    Ian describes the failure mode vividly: you send an agent off on a job, go
    do something else, and come back an hour later to find it did nothing
    because it hit a token limit. The notification you get should be task
    completion, not 'oh, we've run out of quota, sorry.' The fix is a harness
    that lets you express model *preference* and then degrades automatically —
    pro model limit hit, drop to flash; subscription exhausted, drop to a local
    model — without interrupting the in-flight workflow.


    The design principle is that capacity limits are an operational reality to
    be absorbed by the orchestration layer, not surfaced as a hard stop to the
    human. This is the reliability analog of the heterogeneous-routing cost
    argument: the same model-tier flexibility that saves money also buys
    graceful degradation. Build the fallback ladder (premium → cheap → local) as
    a first-class harness feature, with the user setting preferences rather than
    babysitting limits.
stance: >-
  An agent harness should seamlessly fall back to another model when quota runs
  out rather than halting and notifying the user.
related:
  - INS-260410-B0D6
  - INS-260327-8997
  - INS-260321-D370
  - INS-260625-1B69
  - INS-260423-44B4
---
Ian describes the failure mode vividly: you send an agent off on a job, go do something else, and come back an hour later to find it did nothing because it hit a token limit. The notification you get should be task completion, not 'oh, we've run out of quota, sorry.' The fix is a harness that lets you express model *preference* and then degrades automatically — pro model limit hit, drop to flash; subscription exhausted, drop to a local model — without interrupting the in-flight workflow.

The design principle is that capacity limits are an operational reality to be absorbed by the orchestration layer, not surfaced as a hard stop to the human. This is the reliability analog of the heterogeneous-routing cost argument: the same model-tier flexibility that saves money also buys graceful degradation. Build the fallback ladder (premium → cheap → local) as a first-class harness feature, with the user setting preferences rather than babysitting limits.
