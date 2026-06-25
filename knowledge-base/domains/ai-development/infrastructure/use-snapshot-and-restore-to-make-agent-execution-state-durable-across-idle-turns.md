---
id: INS-260605-ACC9
domain: ai-development
topic: infrastructure
title: >-
  Use snapshot-and-restore to make agent execution state durable across idle
  turns
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - snapshot-restore
  - firecracker
  - microvm
  - criu
  - compute
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
    Snapshot the agent's machine, shut it down, and restore it when the next
    user message arrives—giving durability across turns without paying to keep
    compute live.
  standard: >-
    Execution state—open files, in-memory datasets, running dev servers,
    subprocesses—can't be reconstructed from an append-only log, and keeping the
    machine running while the user is at lunch is too expensive. The answer is
    snapshot-and-restore: capture the machine to disk, shut it down, and restore
    it when the next message comes in. This also enables targeted error
    recovery: if the LLM provider tells you to retry in 15 minutes, you snapshot
    rather than wait in memory; if the machine itself crashes or you shipped a
    bug, you fall back to rebuilding from the context log.


    The technique isn't new—1966 IBM mainframes used checkpoint/restore for
    expensive multi-hour jobs, and CRIU (2011) suspended and restored Linux
    processes from user space by injecting a 'parasite' to dump process memory.
    CRIU shipped in production at Trigger.dev in 2024 (millions of restores,
    transparent to the process, container-compatible) but is limited to single
    processes: it breaks with FFmpeg or a Chrome instance, only captures files
    open at snapshot time, and gets slow once you must push/pull container
    registries. Moving to Firecracker micro-VMs lets you snapshot the entire
    machine regardless of what's running inside. The lesson for agent-platform
    builders: durability across turns is a compute-suspension problem, and
    snapshot-and-restore at the VM level is the most general primitive for it.
stance: >-
  Agent compute should be snapshotted to disk and shut down between turns, then
  restored on the next message—rather than kept running or rebuilt from a log.
related:
  - INS-260403-3587
  - INS-260423-8504
  - INS-260605-4B95
  - INS-260424-7A03
  - INS-260519-20E0
  - INS-260522-EB3C
  - INS-260410-85AD
  - INS-260625-E7CD
  - INS-260625-5351
---
Execution state—open files, in-memory datasets, running dev servers, subprocesses—can't be reconstructed from an append-only log, and keeping the machine running while the user is at lunch is too expensive. The answer is snapshot-and-restore: capture the machine to disk, shut it down, and restore it when the next message comes in. This also enables targeted error recovery: if the LLM provider tells you to retry in 15 minutes, you snapshot rather than wait in memory; if the machine itself crashes or you shipped a bug, you fall back to rebuilding from the context log.

The technique isn't new—1966 IBM mainframes used checkpoint/restore for expensive multi-hour jobs, and CRIU (2011) suspended and restored Linux processes from user space by injecting a 'parasite' to dump process memory. CRIU shipped in production at Trigger.dev in 2024 (millions of restores, transparent to the process, container-compatible) but is limited to single processes: it breaks with FFmpeg or a Chrome instance, only captures files open at snapshot time, and gets slow once you must push/pull container registries. Moving to Firecracker micro-VMs lets you snapshot the entire machine regardless of what's running inside. The lesson for agent-platform builders: durability across turns is a compute-suspension problem, and snapshot-and-restore at the VM level is the most general primitive for it.
