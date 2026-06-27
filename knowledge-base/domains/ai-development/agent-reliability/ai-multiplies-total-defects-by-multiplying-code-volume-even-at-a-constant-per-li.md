---
id: INS-260627-1EF5
domain: ai-development
topic: agent-reliability
title: >-
  AI multiplies total defects by multiplying code volume, even at a constant
  per-line bug rate
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - code-quality
  - security-incidents
  - review-bottleneck
  - ai-coding
  - defect-rate
  - scale
sources:
  - type: youtube
    title: 'The State of AI Code Quality: Hype vs Reality — Itamar Friedman, Qodo'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=rgjF5o2Qjsc'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Even if AI generates code with no more bugs per line, 3x more code means
    roughly 3x more bugs and 3x more security incidents in absolute terms — and
    the review bottleneck makes them harder to catch.
  standard: >-
    A widely repeated reassurance is that AI doesn't produce more bugs per line
    than humans. Friedman's point is that this misses the volume term entirely.
    The reports show ~3x productivity in writing code and a correlated ~3x
    increase in security incidents — the same defect density applied to triple
    the output yields triple the absolute problems.


    The second-order effect is the review bottleneck. AI opens ~97% more PRs and
    review time per PR rises ~90% (a 5-minute Claude Code call now produces
    1,000 lines where 10 careful lines once took hours). So defects arrive
    faster than humans can vet them, and reviewers — not writers — become the
    constraint. Reported downstream: 42% more dev time on fixing bugs and ~35%
    project delays.


    The lesson for anyone reasoning about AI code risk: don't argue about
    per-line quality. Reason about total throughput of unreviewed code. Defect
    *count* scales with volume, and your detection capacity does not scale
    automatically with it.
stance: >-
  AI generated code does not need a higher defect rate per line to cause more
  incidents — the 3x volume increase alone produces proportionally more bugs and
  security incidents.
related:
  - INS-260329-F84E
  - INS-260329-0154
  - INS-260329-1ACD
  - INS-260404-E8B2
  - INS-260329-D2CA
  - INS-260501-5582
  - INS-260626-EAC7
  - INS-260627-1970
  - INS-260627-36AB
  - INS-260627-765B
---
A widely repeated reassurance is that AI doesn't produce more bugs per line than humans. Friedman's point is that this misses the volume term entirely. The reports show ~3x productivity in writing code and a correlated ~3x increase in security incidents — the same defect density applied to triple the output yields triple the absolute problems.

The second-order effect is the review bottleneck. AI opens ~97% more PRs and review time per PR rises ~90% (a 5-minute Claude Code call now produces 1,000 lines where 10 careful lines once took hours). So defects arrive faster than humans can vet them, and reviewers — not writers — become the constraint. Reported downstream: 42% more dev time on fixing bugs and ~35% project delays.

The lesson for anyone reasoning about AI code risk: don't argue about per-line quality. Reason about total throughput of unreviewed code. Defect *count* scales with volume, and your detection capacity does not scale automatically with it.
