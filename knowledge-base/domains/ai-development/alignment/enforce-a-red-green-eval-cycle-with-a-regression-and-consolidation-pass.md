---
id: INS-260605-DCE5
domain: ai-development
topic: alignment
title: Enforce a red-green eval cycle with a regression and consolidation pass
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - evals
  - regression-testing
  - prompt-engineering
  - tdd
  - runbooks
sources:
  - type: youtube
    title: 'Fighting AI with AI — Lawrence Jones, Incident'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=L2r6vLlLgs8'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Codify prompt changes as TDD: add an eval that proves the failure, fix the
    prompt to pass it, re-run all evals to catch regressions, then consolidate
    the prompt to fight bloat.
  standard: >-
    incident.io's runbook for prompt changes mirrors test-driven development.
    The coding agent creates an eval case that proves the current behavior is
    broken, modifies the prompt until that eval passes (verified across multiple
    repeats to handle stochasticity), then runs the most important stage:
    checking the change hasn't broken any other evals in the suite. This is how
    they prove a prompt does what they want before merging.


    A crucial final step is a consolidation pass: repeatedly patching a prompt
    produces a massive, unmaintainable prompt, so every adjustment is paired
    with an attempt to simplify. This treats prompts like code subject to
    entropy — without active consolidation, the accreted fixes degrade
    maintainability. The pattern combines the discipline of TDD (failing test
    first, guard against regressions) with continuous refactoring, applied to
    natural-language prompts.
stance: >-
  Every prompt change should be gated by writing a failing eval first, then
  re-running the full suite for regressions and consolidating the prompt.
related:
  - INS-260320-4993
  - INS-260321-E2FC
  - INS-260322-D1AB
  - INS-260402-476E
  - INS-260501-AE73
  - INS-260625-B4AC
  - INS-260605-F4AE
  - INS-260626-8F57
  - INS-260605-09E0
  - INS-260605-A3F4
---
incident.io's runbook for prompt changes mirrors test-driven development. The coding agent creates an eval case that proves the current behavior is broken, modifies the prompt until that eval passes (verified across multiple repeats to handle stochasticity), then runs the most important stage: checking the change hasn't broken any other evals in the suite. This is how they prove a prompt does what they want before merging.

A crucial final step is a consolidation pass: repeatedly patching a prompt produces a massive, unmaintainable prompt, so every adjustment is paired with an attempt to simplify. This treats prompts like code subject to entropy — without active consolidation, the accreted fixes degrade maintainability. The pattern combines the discipline of TDD (failing test first, guard against regressions) with continuous refactoring, applied to natural-language prompts.
