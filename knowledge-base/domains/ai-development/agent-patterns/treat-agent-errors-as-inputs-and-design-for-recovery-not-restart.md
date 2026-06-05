---
id: INS-260605-2627
domain: ai-development
topic: agent-patterns
title: 'Treat agent errors as inputs and design for recovery, not restart'
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - error-handling
  - resilience
  - long-running-agents
  - compute-cost
  - recovery
sources:
  - type: youtube
    title: >-
      Why (Senior) Engineers Struggle to Build AI Agents — Philipp Schmid,
      Google DeepMind
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=3_gYbhABcAE'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    When HTTP calls were cheap you just retried the whole request; when an agent
    step costs 15 minutes of compute and context, you must treat the error as an
    input and recover forward.
  standard: >-
    Traditionally a failed HTTP/product-search request was cheap to retry — you
    redid all the work and moved on. With agents that run 5 to 15 minutes,
    restarting from a mid-flow failure wastes enormous compute redoing prior
    steps and, worse, can lose accumulated context. The model Schmid borrows is
    Go's error-as-value convention: a call returns either a value or an error
    and both are handled as normal flow.


    Applied to agents, a failure should be fed back to the model as just another
    input, alongside workarounds and additional checks, so the agent keeps
    moving forward rather than aborting. The design mandate is 'design for
    recovery' — assume that longer-running agents will do weird things and hit
    failures, and build the flow so it absorbs and routes around errors instead
    of treating any failure as a terminal restart condition.
stance: >-
  Long-running agents must feed failures back into the model as recoverable
  inputs rather than re-running the entire flow from scratch.
related:
  - INS-260320-9FD5
  - INS-260605-1A2D
  - INS-260605-E9A7
  - INS-260323-F68A
  - INS-260605-29BD
---
Traditionally a failed HTTP/product-search request was cheap to retry — you redid all the work and moved on. With agents that run 5 to 15 minutes, restarting from a mid-flow failure wastes enormous compute redoing prior steps and, worse, can lose accumulated context. The model Schmid borrows is Go's error-as-value convention: a call returns either a value or an error and both are handled as normal flow.

Applied to agents, a failure should be fed back to the model as just another input, alongside workarounds and additional checks, so the agent keeps moving forward rather than aborting. The design mandate is 'design for recovery' — assume that longer-running agents will do weird things and hit failures, and build the flow so it absorbs and routes around errors instead of treating any failure as a terminal restart condition.
