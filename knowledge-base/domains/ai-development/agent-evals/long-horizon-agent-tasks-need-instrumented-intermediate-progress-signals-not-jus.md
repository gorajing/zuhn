---
id: INS-260627-329D
domain: ai-development
topic: agent-evals
title: >-
  Long-horizon agent tasks need instrumented intermediate-progress signals, not
  just end-to-end pass/fail
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - long-horizon-tasks
  - intermediate-signal
  - progress-measurement
  - agent-evals
  - feedback-density
sources:
  - type: youtube
    title: 'Coding Evals: From Code Snippets to Codebases – Naman Jain, Cursor'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=tHN44yJoeS8'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    When a task takes hours, end-to-end pass/fail yields one bit of feedback;
    decompose it into measurable intermediate-progress signals (fraction
    translated, fraction refactored) so you can see and scale progress.
  standard: >-
    As eval tasks stretch from seconds (completions) to hours (translating a
    4,000-line C compression library like Google's Zopfli into safe Rust,
    validated against a million compression inputs), end-to-end correctness
    becomes a starvation diet of feedback. A binary pass/fail on a 12-hour task
    tells you almost nothing about whether the system is on track or where it
    broke — you cannot hill-climb on one bit.


    The fix is to instrument intermediate correctness: for codebase translation,
    measure fraction of code translated and fraction refactored, so progress is
    observable mid-run and systems can be scaled and steered against a denser
    signal. This generalizes a core eval principle into the long-horizon regime
    — score the path, not only the final answer — and becomes more important the
    longer the horizon, since the gap between 'started' and 'done' grows with
    task length while the terminal signal stays a single bit.
stance: >-
  For multi-hour agentic tasks, a single end-to-end correctness bit is too
  sparse to drive progress, so you must instrument intermediate-progress
  metrics.
related:
  - INS-260409-171C
  - INS-260501-646A
  - INS-260627-D9CE
  - INS-260329-FEBA
  - INS-260327-1787
  - INS-260329-9C20
---
As eval tasks stretch from seconds (completions) to hours (translating a 4,000-line C compression library like Google's Zopfli into safe Rust, validated against a million compression inputs), end-to-end correctness becomes a starvation diet of feedback. A binary pass/fail on a 12-hour task tells you almost nothing about whether the system is on track or where it broke — you cannot hill-climb on one bit.

The fix is to instrument intermediate correctness: for codebase translation, measure fraction of code translated and fraction refactored, so progress is observable mid-run and systems can be scaled and steered against a denser signal. This generalizes a core eval principle into the long-horizon regime — score the path, not only the final answer — and becomes more important the longer the horizon, since the gap between 'started' and 'done' grows with task length while the terminal signal stays a single bit.
