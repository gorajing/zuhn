---
id: INS-260410-9DB0
domain: ai-development
topic: system-building
title: Every harness component encodes an assumption that may go stale
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - harness-design
  - system-building
  - model-upgrades
  - complexity
  - agentic-systems
sources:
  - type: blog
    title: Harness design for long-running application development
    url: 'https://www.anthropic.com/engineering/harness-design-long-running-apps'
date_extracted: '2026-04-10'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Every piece of a harness encodes an assumption about what the model can't
    do; those assumptions are worth re-stress-testing each model release.
  standard: >-
    The 'find the simplest solution possible, only increase complexity when
    needed' principle from Anthropic's Building Effective Agents post applies
    repeatedly across the lifetime of a harness. Each scaffold component —
    sprint decomposition, planner, evaluator, context resets — exists because
    the model couldn't handle something on its own at the time of design. Models
    improve, those assumptions go stale, and complexity that was load-bearing
    becomes pure overhead.


    The methodical approach is to remove one component at a time and observe the
    impact, rather than trying creative redesigns from scratch (which makes it
    hard to identify which pieces were actually load-bearing). When Opus 4.6
    shipped, the sprint construct could be removed entirely, and the evaluator
    moved from per-sprint to a single end-of-run pass. The evaluator itself
    remained valuable but only for tasks beyond what the generator could handle
    solo — its load-bearing-ness is task-relative, not absolute.


    The deeper lesson: the space of useful harness combinations doesn't shrink
    as models improve, it moves outward. Capability headroom unlocked by better
    base models lets harnesses tackle harder problems, but the old scaffolding
    for old problems should be retired.
stance: >-
  Harness scaffolding should be stress-tested and stripped down with each new
  model release because each component encodes an assumption about model
  limitations that may no longer hold.
related:
  - INS-260403-EAFC
  - INS-260403-A27F
  - INS-260403-BB23
  - INS-260403-0701
  - INS-260403-0803
---
The 'find the simplest solution possible, only increase complexity when needed' principle from Anthropic's Building Effective Agents post applies repeatedly across the lifetime of a harness. Each scaffold component — sprint decomposition, planner, evaluator, context resets — exists because the model couldn't handle something on its own at the time of design. Models improve, those assumptions go stale, and complexity that was load-bearing becomes pure overhead.

The methodical approach is to remove one component at a time and observe the impact, rather than trying creative redesigns from scratch (which makes it hard to identify which pieces were actually load-bearing). When Opus 4.6 shipped, the sprint construct could be removed entirely, and the evaluator moved from per-sprint to a single end-of-run pass. The evaluator itself remained valuable but only for tasks beyond what the generator could handle solo — its load-bearing-ness is task-relative, not absolute.

The deeper lesson: the space of useful harness combinations doesn't shrink as models improve, it moves outward. Capability headroom unlocked by better base models lets harnesses tackle harder problems, but the old scaffolding for old problems should be retired.
