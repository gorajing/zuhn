---
id: INS-260626-F694
domain: ai-development
topic: agent-evals
title: >-
  An un-exhaustible open-prompt benchmark with a 'both bad' option measures real
  capability best
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - eval-design
  - human-preference
  - benchmark-longevity
  - expectation-shift
  - abstention-signal
sources:
  - type: youtube
    title: 'What Do Models Still Suck At? - Peter Gostev, Arena.ai, BullshitBench'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=R7A8rX-09Zw'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Open user prompts give breadth no condensed benchmark can match, a 'both
    bad' vote captures absolute (not just relative) quality, and the benchmark
    never saturates because there's always a better possible answer.
  standard: >-
    Gostev makes the design case for Arena's mechanic: users submit any prompt
    and pick the better of two anonymous responses — or mark both bad. Three
    properties make this a stronger measure than typical benchmarks. First,
    breadth: real prompts span the fuzzy whole of what users want, where any
    static benchmark necessarily condenses to a narrow, well-specified slice.
    Second, an absolute-quality signal: the 'both bad' option captures
    dissatisfaction, not just which model won, so you learn when the frontier
    itself is failing. Third, non-exhaustion: there's always a response better
    than the current best, so the benchmark can't be saturated or gamed the way
    percentage benchmarks are.


    A crucial caveat is that such a benchmark is not static — user expectations
    shift as models improve. A flat or rising dissatisfaction line can reflect
    harder questions over time rather than worse models, so the metric measures
    the moving battle between expectations and capability, not capability alone.


    For anyone building evals, the actionable design pattern is: collect open
    real-world prompts rather than curated test sets, include an explicit
    'unsatisfactory' option to surface absolute-quality and abstention failures,
    and treat expectation drift as signal about user demand rather than noise to
    be normalized away.
stance: >-
  A long-running open-prompt preference benchmark that lets users reject both
  responses measures real-world model capability better than any narrow static
  benchmark.
related:
  - INS-260605-355C
  - INS-260605-3ABF
  - INS-260410-0DA5
  - INS-260625-C69F
  - PRI-260321-AD44
  - INS-260625-1187
---
Gostev makes the design case for Arena's mechanic: users submit any prompt and pick the better of two anonymous responses — or mark both bad. Three properties make this a stronger measure than typical benchmarks. First, breadth: real prompts span the fuzzy whole of what users want, where any static benchmark necessarily condenses to a narrow, well-specified slice. Second, an absolute-quality signal: the 'both bad' option captures dissatisfaction, not just which model won, so you learn when the frontier itself is failing. Third, non-exhaustion: there's always a response better than the current best, so the benchmark can't be saturated or gamed the way percentage benchmarks are.

A crucial caveat is that such a benchmark is not static — user expectations shift as models improve. A flat or rising dissatisfaction line can reflect harder questions over time rather than worse models, so the metric measures the moving battle between expectations and capability, not capability alone.

For anyone building evals, the actionable design pattern is: collect open real-world prompts rather than curated test sets, include an explicit 'unsatisfactory' option to surface absolute-quality and abstention failures, and treat expectation drift as signal about user demand rather than noise to be normalized away.
