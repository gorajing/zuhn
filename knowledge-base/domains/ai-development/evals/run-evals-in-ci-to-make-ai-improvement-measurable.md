---
id: INS-260628-8649
domain: ai-development
topic: evals
title: Run evals in CI to make AI improvement measurable
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - evals
  - ci-cd
  - regression-testing
  - measurement
  - pull-requests
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
    Run the full eval suite on every PR (and on a daily schedule) so you can see
    whether a change flips tiles from red to blue without breaking others.
  standard: >-
    Pesok recommends adding evals to CI so each pull request produces a report
    of improvements and regressions across the whole court. This catches the
    classic AI failure mode where a prompt tweak fixes one region of queries
    while silently breaking another — invisible without measurement across the
    full distribution. Running evals on a schedule (he runs them at least daily)
    also surfaces drift and regressions that creep in over time, and lets you
    evaluate a model swap by seeing how the 'new player' performs in the same
    practice.


    The underlying principle: 'improvement without measurement is limited and
    imprecise.' Evals give the clarity to tell a colleague, with evidence, that
    a change actually helped. The downstream payoff he cites is concrete —
    better reliability and quality, higher conversion and retention, and less
    time spent on support and ops, because the eval environment absorbs the
    failure-finding that would otherwise become customer tickets.
stance: >-
  Wiring evals into CI on every change is what converts AI app development from
  guesswork into systematic, measurable improvement.
related:
  - INS-260605-E2D9
  - INS-260605-CE25
  - INS-260627-D21B
  - INS-260626-1673
  - INS-260322-D1AB
  - INS-260625-0E60
---
Pesok recommends adding evals to CI so each pull request produces a report of improvements and regressions across the whole court. This catches the classic AI failure mode where a prompt tweak fixes one region of queries while silently breaking another — invisible without measurement across the full distribution. Running evals on a schedule (he runs them at least daily) also surfaces drift and regressions that creep in over time, and lets you evaluate a model swap by seeing how the 'new player' performs in the same practice.

The underlying principle: 'improvement without measurement is limited and imprecise.' Evals give the clarity to tell a colleague, with evidence, that a change actually helped. The downstream payoff he cites is concrete — better reliability and quality, higher conversion and retention, and less time spent on support and ops, because the eval environment absorbs the failure-finding that would otherwise become customer tickets.
