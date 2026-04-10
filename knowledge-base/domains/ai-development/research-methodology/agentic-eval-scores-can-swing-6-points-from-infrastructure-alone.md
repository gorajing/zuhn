---
id: INS-260410-5951
domain: ai-development
topic: research-methodology
title: Agentic eval scores can swing 6 points from infrastructure alone
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - benchmarks
  - evals
  - infrastructure
  - measurement
sources:
  - type: blog
    title: Quantifying infrastructure noise in agentic coding evals
    url: 'https://www.anthropic.com/engineering/infrastructure-noise'
date_extracted: '2026-04-10'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    On Terminal-Bench 2.0, the same Claude model scored 6 points higher with
    uncapped resources than with strictly enforced per-task specs (p<0.01),
    exceeding the margins that typically separate frontier models on
    leaderboards.
  standard: >-
    Anthropic ran Terminal-Bench 2.0 across six resource configurations — from
    strict 1x enforcement to completely uncapped — holding model, harness, and
    task set constant. The total lift from tight to uncapped was 6 percentage
    points. Naive binomial confidence intervals on these benchmarks already span
    1-2 points; infrastructure confounders stack on top of that, not within it.


    The implication is that a 2-point leaderboard lead between models could
    reflect a real capability gap, or it could reflect one eval ran on beefier
    hardware, at a luckier time of day, or with a more lenient sandboxing
    provider. Until resource methodology is standardized and published, small
    differences should not drive deployment decisions. Treat any benchmark
    comparison without documented resource configs, enforcement methodology, and
    run-to-run variance as untrustworthy at the margins.
stance: >-
  Leaderboard differences under 3 percentage points on agentic coding benchmarks
  are mostly infrastructure noise, not model capability.
related:
  - INS-260323-3F39
  - INS-260403-8A65
  - INS-260403-1EFF
  - INS-260404-8EFB
  - INS-260403-9DEC
  - INS-260409-E776
  - INS-260410-56B4
  - PRI-260328-A82C
---
Anthropic ran Terminal-Bench 2.0 across six resource configurations — from strict 1x enforcement to completely uncapped — holding model, harness, and task set constant. The total lift from tight to uncapped was 6 percentage points. Naive binomial confidence intervals on these benchmarks already span 1-2 points; infrastructure confounders stack on top of that, not within it.

The implication is that a 2-point leaderboard lead between models could reflect a real capability gap, or it could reflect one eval ran on beefier hardware, at a luckier time of day, or with a more lenient sandboxing provider. Until resource methodology is standardized and published, small differences should not drive deployment decisions. Treat any benchmark comparison without documented resource configs, enforcement methodology, and run-to-run variance as untrustworthy at the margins.
