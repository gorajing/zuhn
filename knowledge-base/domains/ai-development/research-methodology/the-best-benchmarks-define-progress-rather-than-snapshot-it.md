---
id: INS-260605-3E7F
domain: ai-development
topic: research-methodology
title: The best benchmarks define progress rather than snapshot it
actionability: inspiration
confidence: high
shelf_life: evergreen
status: active
tags:
  - benchmarking
  - evaluation
  - field-shaping
  - research-strategy
sources:
  - type: youtube
    title: 'The Art & Science of Benchmarking Agents — Vincent Chen, Snorkel AI'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=iNkFlCiij0U'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Field-shaping benchmarks carry a thesis about where capabilities need to go
    and set a goalpost labs hill-climb toward, rather than merely recording past
    results.
  standard: >-
    Chen draws a sharp line between benchmarks that take a snapshot of progress
    looking backwards and those that define progress by setting a goalpost about
    where capabilities need to go. The differentiating 'art' of a great
    benchmark is that it embeds a thesis — a research question about a subspace
    of capabilities or a bet about where the world is heading. Terminal Bench
    was a bet that the CLI would be a core interface for general-purpose
    computer use, not just coding; that bet turned out largely correct and
    consequential, and by measuring those capabilities the benchmark arguably
    accelerated the field's movement in that direction.


    The second-order effect is roadmap generation: SWE-Bench started from a
    simple idea (leverage existing coding capability via PRs) and spawned an
    entire family — Lite, Verified, Pro, Multilingual, Multimodal — and inspired
    new research attacks. For builders, the lesson is that the most valuable
    evaluation artifacts are statements about the future that inspire new
    roadmaps, so choosing a benchmark's thesis is a strategic act, not just a
    measurement-engineering one.
stance: >-
  A great benchmark is a forward-looking goalpost that shapes where the field
  goes, not a backward-looking snapshot of current progress.
related:
  - INS-260605-3490
  - INS-260625-1187
  - INS-260605-6066
  - INS-260605-B60D
  - INS-260327-40DA
  - INS-260627-34A1
---
Chen draws a sharp line between benchmarks that take a snapshot of progress looking backwards and those that define progress by setting a goalpost about where capabilities need to go. The differentiating 'art' of a great benchmark is that it embeds a thesis — a research question about a subspace of capabilities or a bet about where the world is heading. Terminal Bench was a bet that the CLI would be a core interface for general-purpose computer use, not just coding; that bet turned out largely correct and consequential, and by measuring those capabilities the benchmark arguably accelerated the field's movement in that direction.

The second-order effect is roadmap generation: SWE-Bench started from a simple idea (leverage existing coding capability via PRs) and spawned an entire family — Lite, Verified, Pro, Multilingual, Multimodal — and inspired new research attacks. For builders, the lesson is that the most valuable evaluation artifacts are statements about the future that inspire new roadmaps, so choosing a benchmark's thesis is a strategic act, not just a measurement-engineering one.
