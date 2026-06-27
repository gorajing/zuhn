---
id: INS-260605-83DA
domain: ai-development
topic: architecture
title: Split a durable agent into a context log and a snapshottable execution machine
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - durable-agents
  - state-management
  - architecture
  - context
  - snapshot
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
    Treat an agent's context (append-only log of messages/tool calls) and its
    execution environment (files, memory, subprocesses) as two
    independently-durable halves.
  standard: >-
    Allam argues that from first principles a durable agent has two halves that
    should be persisted by different mechanisms. The first is the context:
    system messages, user messages, tool calls, tool results, and assistant
    responses—everything that went in and out of the LLM. Because it is an
    append-only log, it can be made durable cheaply with any existing primitive
    (database, object storage, distributed filesystem) and scales well. The
    second is the execution layer: the machine the agent acts on—cloned repos,
    installed packages, in-memory datasets, dev servers, sandboxed subprocesses.
    This state cannot be reconstructed from a log and instead needs
    snapshot-and-restore.


    The practical payoff of separating them is that each gets the durability
    guarantee it actually needs. Persisting the context log independently buys
    durability across code versions: you can upgrade the agent's harness and
    still resume on the same context, and if the machine crashes you can rebuild
    from the log. Persisting the machine via snapshot buys durability across
    turns without paying to keep compute running. Designers building agent
    platforms should resist the temptation to force both into one persistence
    model—the log-friendly half and the machine-friendly half have fundamentally
    different storage economics.
stance: >-
  An agent's durable state should be modeled as two separable layers—an
  append-only context log and a snapshottable compute machine—not as one unified
  state.
related:
  - INS-260325-252D
  - PRI-260320-07A4
  - INS-260327-F625
  - INS-260327-FDC1
  - INS-260410-37D5
  - INS-260605-E303
  - INS-260605-0374
  - INS-260605-A2AD
  - INS-260605-C00C
  - INS-260627-85C7
---
Allam argues that from first principles a durable agent has two halves that should be persisted by different mechanisms. The first is the context: system messages, user messages, tool calls, tool results, and assistant responses—everything that went in and out of the LLM. Because it is an append-only log, it can be made durable cheaply with any existing primitive (database, object storage, distributed filesystem) and scales well. The second is the execution layer: the machine the agent acts on—cloned repos, installed packages, in-memory datasets, dev servers, sandboxed subprocesses. This state cannot be reconstructed from a log and instead needs snapshot-and-restore.

The practical payoff of separating them is that each gets the durability guarantee it actually needs. Persisting the context log independently buys durability across code versions: you can upgrade the agent's harness and still resume on the same context, and if the machine crashes you can rebuild from the log. Persisting the machine via snapshot buys durability across turns without paying to keep compute running. Designers building agent platforms should resist the temptation to force both into one persistence model—the log-friendly half and the machine-friendly half have fundamentally different storage economics.
