---
id: INS-260605-E9E2
domain: ai-development
topic: agent-patterns
title: >-
  Treat the harness as scaffolding that co-evolves with the model, and strip it
  as models improve
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - harness-design
  - model-evolution
  - scaffolding
  - co-evolution
  - spiky-behaviors
sources:
  - type: youtube
    title: >-
      Anthropic Workshop: Build Agents That Run for Hours — Ash Prabaker &
      Andrew Wilson
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=mR-WAvEPRwE'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Get a feel for each model's spiky weak spots, fill those gaps with harness
    scaffolding, then delete that scaffolding once a later model internalizes
    the capability.
  standard: >-
    Harness and model co-evolve: Anthropic ships harness changes alongside every
    model, fills a model's gaps with scaffolding, trains the next model on that
    pattern, then removes the scaffolding entirely. Concretely, scaffolding that
    was critical for Opus 4.5 became unnecessary for 4.6 — they dropped
    fresh-context-window resets entirely (4.5 had bad 'context anxiety,' 4.6
    doesn't, so one continuous session plus compaction suffices), and they
    relaxed forced one-feature-at-a-time sprint decomposition because 4.6 can
    hold a coherent 2-hour continuous build. The lesson framed precisely: 'our
    harness wasn't wrong — it was right for 4.5; the frontier moved.' The
    discipline is to know a model's spiky behaviors, adapt the harness to fill
    those specific gaps, and be ready to strip components out on the next model
    release — the simplified 4.6 harness ran at roughly half the cost of the
    previous version while still running for hours. The frontier doesn't shrink,
    it moves, so the harness evolves rather than disappears.
stance: >-
  Harness design is not dead but should be continuously simplified, removing
  scaffolding the model has internalized rather than keeping it for its own
  sake.
related:
  - INS-260410-09B4
  - INS-260410-9DB0
  - INS-260410-B0D6
  - PRI-260426-890F
  - INS-260501-17BB
  - INS-260514-AC43
---
Harness and model co-evolve: Anthropic ships harness changes alongside every model, fills a model's gaps with scaffolding, trains the next model on that pattern, then removes the scaffolding entirely. Concretely, scaffolding that was critical for Opus 4.5 became unnecessary for 4.6 — they dropped fresh-context-window resets entirely (4.5 had bad 'context anxiety,' 4.6 doesn't, so one continuous session plus compaction suffices), and they relaxed forced one-feature-at-a-time sprint decomposition because 4.6 can hold a coherent 2-hour continuous build. The lesson framed precisely: 'our harness wasn't wrong — it was right for 4.5; the frontier moved.' The discipline is to know a model's spiky behaviors, adapt the harness to fill those specific gaps, and be ready to strip components out on the next model release — the simplified 4.6 harness ran at roughly half the cost of the previous version while still running for hours. The frontier doesn't shrink, it moves, so the harness evolves rather than disappears.
