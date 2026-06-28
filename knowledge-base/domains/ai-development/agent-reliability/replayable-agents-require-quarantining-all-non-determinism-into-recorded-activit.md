---
id: INS-260627-44FD
domain: ai-development
topic: agent-reliability
title: >-
  Replayable agents require quarantining all non-determinism into recorded
  activities
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - durable-execution
  - determinism
  - checkpointing
  - temporal
  - tool-calls
sources:
  - type: youtube
    title: 'From Stateless Nightmares to Durable Agents — Samuel Colvin, Pydantic'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=flf_IKnFYnE'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Durable execution works by splitting code into a deterministic workflow and
    non-deterministic activities, recording each activity's inputs and outputs
    so a re-run can replay instantly up to the failure point.
  standard: >-
    The mechanism behind crash-resumable agents is a strict separation: the
    workflow must be entirely deterministic (no IO, no random), and everything
    non-deterministic — every LLM call, every tool call, every network request —
    is wrapped as an 'activity' whose inputs and outputs the runtime records. On
    replay, the framework re-runs the deterministic workflow but plugs in the
    previously recorded results for each activity, so the first hundred LLM
    calls return in milliseconds (they were never re-sent) and execution 'zooms
    forward' to exactly where it died. It is functionally equivalent to having
    set up caching at every IO boundary by hand.


    The critical and easily-missed corollary: tool calls must themselves be
    recorded as activities. Colvin calls a durable-execution integration that
    records LLM calls but not tool calls a 'chocolate teapot' — nearly
    pointless, since an agent's real work happens through tools. When evaluating
    any durable-agent framework, the first question is whether tool invocations
    are checkpointed activities, not just the top-level model call. Get the
    determinism boundary right and resumption needs zero explicit checkpoint or
    resume code in your agent logic.
stance: >-
  An agent becomes resumable only if every IO and random call is isolated into
  recorded activities while the orchestration logic stays purely deterministic.
related:
  - INS-260329-9745
  - INS-260330-3EFC
  - INS-260405-0271
  - INS-260605-59AE
  - INS-260624-5ACA
  - INS-260626-715B
  - INS-260626-B5A6
  - INS-260627-AA19
  - INS-260627-2524
  - INS-260627-718B
---
The mechanism behind crash-resumable agents is a strict separation: the workflow must be entirely deterministic (no IO, no random), and everything non-deterministic — every LLM call, every tool call, every network request — is wrapped as an 'activity' whose inputs and outputs the runtime records. On replay, the framework re-runs the deterministic workflow but plugs in the previously recorded results for each activity, so the first hundred LLM calls return in milliseconds (they were never re-sent) and execution 'zooms forward' to exactly where it died. It is functionally equivalent to having set up caching at every IO boundary by hand.

The critical and easily-missed corollary: tool calls must themselves be recorded as activities. Colvin calls a durable-execution integration that records LLM calls but not tool calls a 'chocolate teapot' — nearly pointless, since an agent's real work happens through tools. When evaluating any durable-agent framework, the first question is whether tool invocations are checkpointed activities, not just the top-level model call. Get the determinism boundary right and resumption needs zero explicit checkpoint or resume code in your agent logic.
