---
id: INS-260625-4AB6
domain: automation
topic: self-improving-systems
title: >-
  Separate fast local edits from slow epoch-level reflection in a self-improving
  loop
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - self-improving-systems
  - meta-learning
  - two-timescale
  - reflection
  - agent-skills
sources:
  - type: youtube
    title: Microsoft Found Gradient Descent for AI Agent Skills
    author: AI Papers Academy
    url: 'https://www.youtube.com/watch?v=iSPwNmsa7kA'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    SkillOpt pairs a continuous fast-update path of small skill edits with a
    slow per-epoch reflection step plus a meta-skill memory of what has and
    hasn't worked.
  standard: >-
    SkillOpt runs two distinct update pathways. The fast path runs every
    iteration, making small, validation-gated local edits. The slow path runs
    once per epoch: it re-runs the agent on the same samples with the
    start-of-epoch and end-of-epoch skills, sorts results into Improvements,
    Regressions, Persistent Failures, and Stable Successes, and feeds those
    buckets to an 'epoch-wise reflection' step. Reflection does not make another
    tiny edit — it looks for higher-level patterns about what kinds of changes
    help versus hurt and which failure modes remain, and it edits a dedicated
    region of the skill that the fast path is forbidden to touch. A separate
    meta-skill stores a running memory of which edits worked, which failed, and
    which challenges are unresolved, guiding the next epoch.


    The transferable design principle is that greedy local optimization alone
    gets stuck — it can fix individual cases while missing systemic failure
    modes and can thrash by re-trying things that already failed. Layering a
    slower reflective loop that operates on aggregated evidence, writes to
    protected state, and maintains an explicit memory of past attempts gives the
    system a way to capture structural lessons. This two-timescale,
    memory-backed structure is a reusable blueprint for any system meant to
    improve itself over many iterations.
stance: >-
  A self-improving agent system should run two timescales — frequent small local
  edits plus periodic higher-level reflection that protects a separate region of
  state — rather than only making greedy local changes.
related:
  - INS-260403-FF4E
  - INS-260421-43EC
  - INS-260625-78C1
  - INS-260323-AF7B
  - INS-260403-D4EA
  - PRI-260328-39FA
  - INS-260626-F01D
---
SkillOpt runs two distinct update pathways. The fast path runs every iteration, making small, validation-gated local edits. The slow path runs once per epoch: it re-runs the agent on the same samples with the start-of-epoch and end-of-epoch skills, sorts results into Improvements, Regressions, Persistent Failures, and Stable Successes, and feeds those buckets to an 'epoch-wise reflection' step. Reflection does not make another tiny edit — it looks for higher-level patterns about what kinds of changes help versus hurt and which failure modes remain, and it edits a dedicated region of the skill that the fast path is forbidden to touch. A separate meta-skill stores a running memory of which edits worked, which failed, and which challenges are unresolved, guiding the next epoch.

The transferable design principle is that greedy local optimization alone gets stuck — it can fix individual cases while missing systemic failure modes and can thrash by re-trying things that already failed. Layering a slower reflective loop that operates on aggregated evidence, writes to protected state, and maintains an explicit memory of past attempts gives the system a way to capture structural lessons. This two-timescale, memory-backed structure is a reusable blueprint for any system meant to improve itself over many iterations.
