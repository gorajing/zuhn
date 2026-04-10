---
id: INS-260410-346B
domain: ai-development
topic: architecture
title: 'Treat agent containers as cattle, not pets'
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - reliability
  - pets-vs-cattle
  - failure-recovery
  - debugging
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
    If losing a single container loses the session, you have adopted a pet —
    externalize state so any component can die and be replaced without human
    nursing.
  standard: >-
    Anthropic initially placed the session, harness, and sandbox in one
    container. The benefits were real: file edits became direct syscalls, and
    there were no service boundaries to design. But a single container holding
    everything means that a container failure destroys the session, a stuck
    container requires hand-nursing, and debugging requires opening a shell
    inside a container that also holds user data — which in practice means
    debugging is impossible.


    The fix was to move state out of the container. The session log lives in
    durable storage, so the harness can crash and be rebooted with
    wake(sessionId), retrieve the event log via getSession(id), and resume from
    the last event. The sandbox becomes a tool called via execute(name, input) →
    string; if it dies, the harness catches a tool-call error, passes it to
    Claude, and Claude can retry with a fresh container provisioned from a
    standard recipe.


    The general rule for long-running agent infrastructure: any component that
    holds irreplaceable state is a pet, and pets don't scale. Push state into
    durable external stores (event logs, vaults, object storage) so every moving
    part becomes stateless and disposable.
stance: >-
  Coupling a long-running agent's harness, session state, and sandbox into a
  single container makes the container a pet you cannot afford to lose and turns
  routine failures into unrecoverable ones.
related:
  - INS-260410-EE37
  - INS-260410-0B73
  - PRI-260324-DE71
  - INS-260325-C59D
  - PRI-260320-07A4
---
Anthropic initially placed the session, harness, and sandbox in one container. The benefits were real: file edits became direct syscalls, and there were no service boundaries to design. But a single container holding everything means that a container failure destroys the session, a stuck container requires hand-nursing, and debugging requires opening a shell inside a container that also holds user data — which in practice means debugging is impossible.

The fix was to move state out of the container. The session log lives in durable storage, so the harness can crash and be rebooted with wake(sessionId), retrieve the event log via getSession(id), and resume from the last event. The sandbox becomes a tool called via execute(name, input) → string; if it dies, the harness catches a tool-call error, passes it to Claude, and Claude can retry with a fresh container provisioned from a standard recipe.

The general rule for long-running agent infrastructure: any component that holds irreplaceable state is a pet, and pets don't scale. Push state into durable external stores (event logs, vaults, object storage) so every moving part becomes stateless and disposable.
