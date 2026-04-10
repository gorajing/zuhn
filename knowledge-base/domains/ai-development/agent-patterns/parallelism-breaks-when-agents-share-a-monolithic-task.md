---
id: INS-260410-7ED2
domain: ai-development
topic: agent-patterns
title: Parallelism breaks when agents share a monolithic task
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - parallelism
  - task-decomposition
  - multi-agent
  - oracle
sources:
  - type: blog
    title: Building a C compiler with a team of parallel Claudes
    url: 'https://www.anthropic.com/engineering/building-c-compiler'
date_extracted: '2026-04-10'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    When 16 agents all hit the same bug compiling one giant artifact, decompose
    by using a known-good oracle to narrow the failing subset per agent.
  standard: >-
    While compiling the Linux kernel, parallelism collapsed: every agent hit the
    same bug and overwrote each other's attempts. The fix was clever — use GCC
    as an online 'known-good' oracle. Compile most of the kernel with GCC and
    only a random subset with Claude's compiler. If the build worked, Claude's
    subset was clean; if it broke, bisect by recompiling more files with GCC.
    This gave each parallel agent a different failing subset to debug. The
    generalizable pattern: when parallelism collapses onto a monolithic task,
    find an oracle that can verify subcomponents, and use it to create
    independent work streams. Without this, adding more agents is net-negative —
    they just thrash on the same merge-conflicted hotspot.
stance: >-
  Parallel agent teams stall whenever the remaining work collapses into a single
  serial blocker, and the fix is to synthetically decompose the work using an
  external oracle.
related:
  - INS-260321-2482
  - INS-260410-1ED3
  - INS-260327-C1A4
  - PRI-260328-1ED1
  - INS-260410-9D86
---
While compiling the Linux kernel, parallelism collapsed: every agent hit the same bug and overwrote each other's attempts. The fix was clever — use GCC as an online 'known-good' oracle. Compile most of the kernel with GCC and only a random subset with Claude's compiler. If the build worked, Claude's subset was clean; if it broke, bisect by recompiling more files with GCC. This gave each parallel agent a different failing subset to debug. The generalizable pattern: when parallelism collapses onto a monolithic task, find an oracle that can verify subcomponents, and use it to create independent work streams. Without this, adding more agents is net-negative — they just thrash on the same merge-conflicted hotspot.
