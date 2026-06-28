---
id: INS-260626-3105
domain: ai-development
topic: agent-evals
title: 'Score non-deterministic evals with error budgets, not binary CI pass/fail'
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - evals
  - ci-cd
  - non-determinism
  - error-budgets
  - reliability
  - context-engineering
sources:
  - type: youtube
    title: 'Context Is the New Code — Patrick Debois, Tessl'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=bSG9wUYaHWU'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Run each eval ~5 times, track its pass rate, and give the tests you care
    about a small failure budget — a single green run proves nothing.
  standard: >-
    Debois warns that the obvious instinct — drop evals into CI/CD and gate on
    pass/fail — breaks against non-determinism. Run the same eval twice and it
    can give different results, so a single run that happens to pass tells you
    nothing reliable and leaves you unable to debug intermittent failures. The
    fix is statistical: run each test N times (he uses five) and measure how
    many succeed. Some tests hit 100% every run; others are flaky by nature, and
    which ones pass shifts as you edit context.


    He imports the SRE concept of error budgets directly: assign the tests you
    truly care about a tight budget (allowed to fail only minimally) and accept
    higher tolerance elsewhere. This reframes context CI from binary gating to
    budget management — you decide per-test how much non-determinism you'll
    tolerate, rather than pretending exact testing applies. For anyone wiring
    evals into a release gate, this is the difference between a usable signal
    and a flaky pipeline that erodes trust.
stance: >-
  Because evals are non-deterministic, you must run each test N times and assign
  per-test error budgets rather than gating CI on a single pass/fail run.
related:
  - INS-260410-E3BB
  - INS-260605-3AFB
  - INS-260625-8A55
  - INS-260627-4072
  - INS-260322-D1AB
  - INS-260628-BDB0
---
Debois warns that the obvious instinct — drop evals into CI/CD and gate on pass/fail — breaks against non-determinism. Run the same eval twice and it can give different results, so a single run that happens to pass tells you nothing reliable and leaves you unable to debug intermittent failures. The fix is statistical: run each test N times (he uses five) and measure how many succeed. Some tests hit 100% every run; others are flaky by nature, and which ones pass shifts as you edit context.

He imports the SRE concept of error budgets directly: assign the tests you truly care about a tight budget (allowed to fail only minimally) and accept higher tolerance elsewhere. This reframes context CI from binary gating to budget management — you decide per-test how much non-determinism you'll tolerate, rather than pretending exact testing applies. For anyone wiring evals into a release gate, this is the difference between a usable signal and a flaky pipeline that erodes trust.
