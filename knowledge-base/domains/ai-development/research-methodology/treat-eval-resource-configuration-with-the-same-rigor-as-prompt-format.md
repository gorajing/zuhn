---
id: INS-260410-D03C
domain: ai-development
topic: research-methodology
title: Treat eval resource configuration with the same rigor as prompt format
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - eval-design
  - rigor
  - reproducibility
  - methodology
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
    Benchmark scores increasingly drive deployment decisions, but the rigor
    applied to running and reporting them hasn't caught up — making resource
    configuration a first-class variable is the minimum bar for trustworthy
    agentic evals.
  standard: >-
    The cultural practice of publishing a prompt and a temperature but not the
    container CPU/RAM/timeout configuration reflects an assumption carried over
    from static evals: that the runtime doesn't matter. For agentic benchmarks
    this assumption is empirically false, and the gap between leaderboard
    positions is smaller than the gap created by infrastructure differences
    alone.


    For model providers, the fix is to treat resource config as an experimental
    knob — documented, held constant across comparisons, and reported alongside
    scores. For benchmark maintainers, publish recommended specs AND enforcement
    methodology (Terminal-Bench 2.0 does the former but not the latter, which is
    how the discrepancy emerged). For anyone consuming benchmark results, demand
    disclosure of the full setup and apply extra skepticism to sub-3-point
    differences. Running evals at multiple times on multiple days also helps
    average out latency-driven noise. The meta-principle: in any system where
    small margins drive big decisions, the measurement methodology deserves as
    much scrutiny as the thing being measured.
stance: >-
  Resource allocation should be a first-class experimental variable in eval
  design, documented and controlled like sampling temperature or prompt format.
related:
  - INS-260403-F7A9
  - INS-260325-DD43
  - INS-260402-CC68
  - INS-260410-AF66
  - INS-260410-F167
  - INS-260327-BF89
  - INS-260403-063E
  - INS-260325-BC2A
  - INS-260403-CD90
  - INS-260410-CDDD
---
The cultural practice of publishing a prompt and a temperature but not the container CPU/RAM/timeout configuration reflects an assumption carried over from static evals: that the runtime doesn't matter. For agentic benchmarks this assumption is empirically false, and the gap between leaderboard positions is smaller than the gap created by infrastructure differences alone.

For model providers, the fix is to treat resource config as an experimental knob — documented, held constant across comparisons, and reported alongside scores. For benchmark maintainers, publish recommended specs AND enforcement methodology (Terminal-Bench 2.0 does the former but not the latter, which is how the discrepancy emerged). For anyone consuming benchmark results, demand disclosure of the full setup and apply extra skepticism to sub-3-point differences. Running evals at multiple times on multiple days also helps average out latency-driven noise. The meta-principle: in any system where small margins drive big decisions, the measurement methodology deserves as much scrutiny as the thing being measured.
