---
id: INS-260625-9C3B
domain: ai-development
topic: system-building
title: A perceived fix in a non-deterministic system silently spawns regressions
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - evals
  - regression
  - non-determinism
  - iteration
  - quality
sources:
  - type: youtube
    title: 'LLM Observability, Evaluation, Experimentation Platform — Dat Ngo, Arize'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=JsCCrBF7F1g'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Because outputs are non-deterministic, a change you think fixed one thing
    can quietly break two or three others — eval coverage is the prerequisite
    for safe iteration.
  standard: >-
    Ngo's sharpest warning: 'when you fix the thing that you thought you fixed,
    you might have actually produced like two or three regressions that you
    didn't really know about.' In deterministic software, a fix has a bounded
    blast radius you can usually reason about. In an AI system, a prompt tweak
    or model swap shifts the distribution of behavior everywhere at once, so a
    local fix can cause distant, invisible regressions.


    This is the core justification for investing in evaluation infrastructure
    rather than treating it as optional polish. You cannot iterate safely on a
    non-deterministic system by eyeballing the change you intended — you need a
    measurement layer that detects whether the change degraded behavior
    elsewhere. This mirrors the role of a regression test suite in traditional
    software, except the failures are statistical and semantic rather than
    binary.


    The actionable rule: never ship a change to an AI system on the strength of
    'it fixed the case I was looking at.' Establish evals broad enough to catch
    collateral damage, and re-run them on every change to prompts, models,
    orchestration, or configuration. Absent that, you are flying blind and
    accumulating silent quality debt with every 'fix.'
stance: >-
  Without systematic evals across the whole system, fixing one thing in a
  non-deterministic AI system routinely introduces two or three regressions you
  cannot see.
related:
  - INS-260625-36DF
  - INS-260625-C08B
  - INS-260627-A81B
  - INS-260605-2186
  - INS-260605-09E0
  - INS-260627-2524
  - INS-260625-C697
  - INS-260626-8DAD
  - INS-260626-FDFC
---
Ngo's sharpest warning: 'when you fix the thing that you thought you fixed, you might have actually produced like two or three regressions that you didn't really know about.' In deterministic software, a fix has a bounded blast radius you can usually reason about. In an AI system, a prompt tweak or model swap shifts the distribution of behavior everywhere at once, so a local fix can cause distant, invisible regressions.

This is the core justification for investing in evaluation infrastructure rather than treating it as optional polish. You cannot iterate safely on a non-deterministic system by eyeballing the change you intended — you need a measurement layer that detects whether the change degraded behavior elsewhere. This mirrors the role of a regression test suite in traditional software, except the failures are statistical and semantic rather than binary.

The actionable rule: never ship a change to an AI system on the strength of 'it fixed the case I was looking at.' Establish evals broad enough to catch collateral damage, and re-run them on every change to prompts, models, orchestration, or configuration. Absent that, you are flying blind and accumulating silent quality debt with every 'fix.'
