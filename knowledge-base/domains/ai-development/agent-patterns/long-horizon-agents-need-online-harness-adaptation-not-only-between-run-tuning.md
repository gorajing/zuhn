---
id: INS-260605-E230
domain: ai-development
topic: agent-patterns
title: >-
  Long-horizon agents need online harness adaptation, not only between-run
  tuning
actionability: reference
confidence: medium
shelf_life: time-sensitive
status: active
tags:
  - continual-harness
  - online-adaptation
  - long-horizon-agents
  - self-improvement
  - memory
sources:
  - type: blog
    title: 'Continual Harness: Online Adaptation for Self-Improving Foundation Agents'
    url: 'https://arxiv.org/abs/2605.09998'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: Some harnesses must learn while the run is still alive.
  standard: >-
    Continual Harness targets a gap between coding harnesses and embodied,
    long-horizon tasks: prompt optimization typically assumes clean episode
    resets, but real persistent tasks often cannot restart without losing
    critical state. The proposed harness adapts online within a single run.


    The transfer to coding and knowledge work is subtle but important. Some work
    should not be optimized only after the task ends. A long research campaign,
    daemon, customer-support investigation, or codebase migration can improve
    its own prompt, skills, memory, and subagent routing while it is still
    running, as long as those changes are logged and reversible.
stance: >-
  For long-horizon partially observable tasks, harness adaptation must happen
  inside the live run because resetting episodes discards the very continuity
  the agent needs to improve.
related:
  - INS-260619-6E08
  - INS-260410-9DB0
  - INS-260605-E193
  - INS-260410-B0D6
  - INS-260605-B930
---
Continual Harness targets a gap between coding harnesses and embodied, long-horizon tasks: prompt optimization typically assumes clean episode resets, but real persistent tasks often cannot restart without losing critical state. The proposed harness adapts online within a single run.

The transfer to coding and knowledge work is subtle but important. Some work should not be optimized only after the task ends. A long research campaign, daemon, customer-support investigation, or codebase migration can improve its own prompt, skills, memory, and subagent routing while it is still running, as long as those changes are logged and reversible.
