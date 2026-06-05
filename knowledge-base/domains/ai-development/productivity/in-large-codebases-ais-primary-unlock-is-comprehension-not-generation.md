---
id: INS-260605-BEFB
domain: ai-development
topic: productivity
title: 'In large codebases, AI''s primary unlock is comprehension, not generation'
actionability: inspiration
confidence: medium
shelf_life: evergreen
status: active
tags:
  - comprehension
  - legacy-code
  - developer-productivity
  - ai-usage-patterns
sources:
  - type: youtube
    title: 'The AI Skill I Rely On Daily — Priscila Andre de Oliveira, Sentry'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=li0SaBt9RDM'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    When Priscila had Claude classify 116 of her AI sessions, 67% were
    comprehension and only 2% were code generation.
  standard: >-
    The popular narrative frames AI coding assistants as generation engines, but
    in a 15-plus-year-old codebase with 100 PRs merged daily and constant
    deprecations, the real bottleneck is understanding what already exists and
    why. Priscila measured this empirically: Claude classified her 116 sessions
    into six categories, and comprehension dominated at 67% while generation was
    a rounding error at 2%. The speedup she experienced was not from typing code
    faster but from collapsing tasks like 'git blame to find where a regression
    happened' or 'wait a day for a colleague in another timezone to explain a
    product decision' into a few-second prompt. The actionable inversion:
    optimize your AI workflow for asking-and-understanding, not for autocomplete
    throughput.
stance: >-
  The dominant value of AI in mature codebases is understanding existing code,
  not writing new code.
related:
  - INS-260327-62AB
  - INS-260605-5A6A
  - INS-260605-2C96
  - INS-260403-13AF
  - INS-260514-3100
  - INS-260603-73D5
---
The popular narrative frames AI coding assistants as generation engines, but in a 15-plus-year-old codebase with 100 PRs merged daily and constant deprecations, the real bottleneck is understanding what already exists and why. Priscila measured this empirically: Claude classified her 116 sessions into six categories, and comprehension dominated at 67% while generation was a rounding error at 2%. The speedup she experienced was not from typing code faster but from collapsing tasks like 'git blame to find where a regression happened' or 'wait a day for a colleague in another timezone to explain a product decision' into a few-second prompt. The actionable inversion: optimize your AI workflow for asking-and-understanding, not for autocomplete throughput.
