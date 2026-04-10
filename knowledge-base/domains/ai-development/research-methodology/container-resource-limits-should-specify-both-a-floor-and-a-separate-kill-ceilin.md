---
id: INS-260410-303B
domain: ai-development
topic: research-methodology
title: >-
  Container resource limits should specify both a floor and a separate kill
  ceiling
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - benchmarks
  - containers
  - kubernetes
  - eval-design
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
    Setting container guarantee and hard limit to the same value creates zero
    headroom for transient memory spikes, silently OOM-killing tasks that would
    otherwise succeed — so evals should specify both parameters separately.
  standard: >-
    Container runtimes enforce resources via two parameters: a guaranteed
    allocation reserved up front, and a hard limit at which the container is
    killed. When a benchmark publishes a single spec, naive implementations set
    both to that number, meaning a momentary memory fluctuation kills the
    container. Anthropic saw 5.8% of Terminal-Bench tasks failing from infra
    errors under strict 1x enforcement. Terminal-Bench's own leaderboard uses a
    sandboxing provider that allows temporary overallocation, hiding this issue
    for maintainers but not for external reproducers.


    The recommendation is to publish both numbers and calibrate the band so that
    scores at the floor and ceiling fall within statistical noise of each other.
    A 3x ceiling over the per-task spec in Terminal-Bench cut infra errors from
    5.8% to 2.1% (p<0.001) while keeping the score lift within noise (p=0.40) —
    neutralizing the infrastructure confounder without changing what the eval
    measures. The exact multiplier varies by benchmark but the empirical
    calibration principle generalizes.
stance: >-
  Eval benchmarks should publish two numbers per task — guaranteed allocation
  and hard kill limit — rather than a single pinned spec.
related:
  - INS-260329-818A
  - INS-260329-3423
  - INS-260403-2174
  - INS-260410-0B73
  - PRI-260405-2A95
  - PRI-260403-9E80
  - INS-260330-3B0B
---
Container runtimes enforce resources via two parameters: a guaranteed allocation reserved up front, and a hard limit at which the container is killed. When a benchmark publishes a single spec, naive implementations set both to that number, meaning a momentary memory fluctuation kills the container. Anthropic saw 5.8% of Terminal-Bench tasks failing from infra errors under strict 1x enforcement. Terminal-Bench's own leaderboard uses a sandboxing provider that allows temporary overallocation, hiding this issue for maintainers but not for external reproducers.

The recommendation is to publish both numbers and calibrate the band so that scores at the floor and ceiling fall within statistical noise of each other. A 3x ceiling over the per-task spec in Terminal-Bench cut infra errors from 5.8% to 2.1% (p<0.001) while keeping the score lift within noise (p=0.40) — neutralizing the infrastructure confounder without changing what the eval measures. The exact multiplier varies by benchmark but the empirical calibration principle generalizes.
