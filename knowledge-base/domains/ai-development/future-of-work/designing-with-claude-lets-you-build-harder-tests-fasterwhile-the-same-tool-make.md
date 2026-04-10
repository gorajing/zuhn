---
id: INS-260410-DD0E
domain: ai-development
topic: future-of-work
title: >-
  Designing with Claude lets you build harder tests faster—while the same tool
  makes them obsolete
actionability: immediate
confidence: medium
shelf_life: time-sensitive
status: active
tags:
  - evaluation
  - meta
  - ai-tooling
  - iteration-speed
sources:
  - type: blog
    title: Designing AI resistant technical evaluations
    url: 'https://www.anthropic.com/engineering/AI-resistant-technical-evaluations'
date_extracted: '2026-04-10'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Hume implemented an entirely new take-home design in under a day by having
    Claude write it, then used Claude's solving attempts as the design's
    difficulty oracle.
  standard: >-
    A subtle but important pattern: Hume explicitly credits Claude with making
    the redesign feasible at all. 'I realized Claude could help me implement
    whatever I designed quickly, which motivated me to try developing a harder
    take-home.' He then used Claude as the adversary—iterating on problem design
    until Claude (including 'ultrathink' modes with longer thinking budgets)
    couldn't solve it, while his colleagues still could.


    This creates a meta-dynamic where the evaluation designer and the model are
    in an arms race—and the same model is both the tool that builds the new test
    and the adversary the test must defeat. It's a useful blueprint: when
    building AI-resistant anything (evaluations, proofs-of-work, captchas,
    governance mechanisms), use the frontier model itself as both the
    implementation accelerator and the difficulty validator. If you can't make
    it with the model, you can't keep it ahead of the model.


    The inverse is also implied: without model-assisted iteration speed, manual
    designers will fall behind the capability curve. Hume got three test
    versions out in roughly two years of model progress—each built fast enough
    to be worth it even knowing the next model would break it again.
stance: >-
  Using Claude to rapidly prototype evaluation problems is a necessary
  accelerant, because manual design cannot keep pace with model capability
  gains.
related:
  - INS-260329-4DBC
  - INS-260330-2B45
  - INS-260404-A6D4
  - PRI-260405-0AC6
  - INS-260330-1E5E
---
A subtle but important pattern: Hume explicitly credits Claude with making the redesign feasible at all. 'I realized Claude could help me implement whatever I designed quickly, which motivated me to try developing a harder take-home.' He then used Claude as the adversary—iterating on problem design until Claude (including 'ultrathink' modes with longer thinking budgets) couldn't solve it, while his colleagues still could.

This creates a meta-dynamic where the evaluation designer and the model are in an arms race—and the same model is both the tool that builds the new test and the adversary the test must defeat. It's a useful blueprint: when building AI-resistant anything (evaluations, proofs-of-work, captchas, governance mechanisms), use the frontier model itself as both the implementation accelerator and the difficulty validator. If you can't make it with the model, you can't keep it ahead of the model.

The inverse is also implied: without model-assisted iteration speed, manual designers will fall behind the capability curve. Hume got three test versions out in roughly two years of model progress—each built fast enough to be worth it even knowing the next model would break it again.
