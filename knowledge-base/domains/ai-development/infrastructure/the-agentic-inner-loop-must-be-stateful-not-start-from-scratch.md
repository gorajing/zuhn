---
id: INS-260605-5159
domain: ai-development
topic: infrastructure
title: 'The agentic inner loop must be stateful, not start-from-scratch'
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - statefulness
  - caching
  - compute-infrastructure
  - incremental-builds
  - performance
sources:
  - type: youtube
    title: >-
      CI/CD Is Dead, Agents Need Continuous Compute and Computers — Hugo Santos
      and Madison Faulkner
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=VktrqzQgytY'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Persistent state and warm caches across iterations are mandatory because
    restarting work from scratch each loop multiplies latency in a
    high-frequency cycle.
  standard: >-
    Humans developing on their own workstations benefited from warm local caches
    and incremental builds — they never recompiled the world on every change.
    Agentic loops lose this by default: a fresh container per iteration
    cold-starts builds, tests, and dependency resolution, and at high iteration
    frequency that overhead dominates wall-clock time. Namespace's core thesis
    is that the cache becomes the orchestration layer, achieved through
    hardware/software co-design, and that the inner loop needs a stateful
    environment where memory and state persist across iterations. The principle
    'don't do work that isn't necessary, don't start from scratch' is the same
    incrementality engineers always practiced locally, now lifted into the agent
    infrastructure. This is why the authors frame the category as 'continuous
    compute' rather than continuous integration — the bottleneck shifts from
    pipeline orchestration to keeping a fast, warm, stateful machine available.
stance: >-
  Agentic build/validation loops must run in stateful environments with
  persistent memory because cold-starting every iteration fatally delays the
  loop.
related:
  - INS-260329-4842
  - INS-260329-C1A4
  - INS-260330-A260
  - PRI-260406-8B75
  - INS-260403-D4EA
  - PRI-260403-9E80
---
Humans developing on their own workstations benefited from warm local caches and incremental builds — they never recompiled the world on every change. Agentic loops lose this by default: a fresh container per iteration cold-starts builds, tests, and dependency resolution, and at high iteration frequency that overhead dominates wall-clock time. Namespace's core thesis is that the cache becomes the orchestration layer, achieved through hardware/software co-design, and that the inner loop needs a stateful environment where memory and state persist across iterations. The principle 'don't do work that isn't necessary, don't start from scratch' is the same incrementality engineers always practiced locally, now lifted into the agent infrastructure. This is why the authors frame the category as 'continuous compute' rather than continuous integration — the bottleneck shifts from pipeline orchestration to keeping a fast, warm, stateful machine available.
