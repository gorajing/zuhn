---
id: INS-260628-3746
domain: ai-development
topic: evals
title: Default to deterministic pass/fail scoring
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - evals
  - scoring
  - debugging
  - team-collaboration
  - prompt-engineering
sources:
  - type: youtube
    title: 'Evals Are Not Unit Tests — Ido Pesok, Vercel v0'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=L8OoYeDI_ls'
date_extracted: '2026-06-28'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Lean toward deterministic pass/fail scores so debugging stays tractable and
    teammates can actually understand and trust the results.
  standard: >-
    Scoring varies most by domain — checking a letter count is trivial, judging
    writing quality is hard — but Pesok's principle is to bias toward
    deterministic, binary scoring wherever feasible. The reason is operational:
    debugging an eval means wading through large volumes of inputs and logs, and
    a complex score nobody understands cannot be shared or distributed across
    teams. The guiding question is 'what am I looking for to decide this
    failed?' then write the simplest code that detects exactly that.


    Two practical moves follow. When deterministic scoring is genuinely
    impossible (e.g., linguistic quality), human review is acceptable —
    collecting correct signal manually beats automating the wrong signal. And
    you can make string-matching trivial by adding a small instruction to the
    eval-time prompt (e.g., 'output your final answer in answer tags') that you
    wouldn't ship to production — a low-cost tweak that buys clean,
    deterministic scoring.
stance: >-
  Eval scores should be as simple and deterministic as possible because
  over-engineered scoring becomes un-debuggable and impossible to share across a
  team.
related:
  - INS-260626-33BE
  - INS-260627-068D
  - INS-260628-5ACA
  - INS-260627-7541
  - PRI-260426-9E23
  - INS-260627-6846
---
Scoring varies most by domain — checking a letter count is trivial, judging writing quality is hard — but Pesok's principle is to bias toward deterministic, binary scoring wherever feasible. The reason is operational: debugging an eval means wading through large volumes of inputs and logs, and a complex score nobody understands cannot be shared or distributed across teams. The guiding question is 'what am I looking for to decide this failed?' then write the simplest code that detects exactly that.

Two practical moves follow. When deterministic scoring is genuinely impossible (e.g., linguistic quality), human review is acceptable — collecting correct signal manually beats automating the wrong signal. And you can make string-matching trivial by adding a small instruction to the eval-time prompt (e.g., 'output your final answer in answer tags') that you wouldn't ship to production — a low-cost tweak that buys clean, deterministic scoring.
