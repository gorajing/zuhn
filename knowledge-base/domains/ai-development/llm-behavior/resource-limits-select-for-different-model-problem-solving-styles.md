---
id: INS-260410-36E3
domain: ai-development
topic: llm-behavior
title: Resource limits select for different model problem-solving styles
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - model-behavior
  - evals
  - problem-solving
  - resource-constraints
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
    Above ~3x the baseline, extra memory stops fixing infra errors and starts
    enabling new solution strategies — letting agents that default to 'install
    the whole Python data science stack' succeed where leaner agents already win
    at tight limits.
  standard: >-
    Anthropic observed a regime change in their resource sweep. From 1x to 3x,
    increased resources mostly fix transient OOM kills on tasks the agent was
    going to fail anyway — making the eval more stable without making it easier.
    Above 3x, success rates climb faster than infra errors decline: the extra
    headroom enables approaches that only work with generous allocations, like
    pulling in heavyweight dependencies or running memory-intensive test suites.


    Concretely, on the bn-fit-modify task, some models' first move is to install
    pandas, networkx, scikit-learn, and their full toolchain — which works under
    generous limits but OOMs during install under tight ones. A leaner strategy
    (implementing the math with only the standard library) exists and some
    models default to it. Different models have different default approaches,
    and the resource configuration silently picks which style is being rewarded.
    Both lean efficiency and heavy-tool exploitation are legitimate capabilities
    to test, but collapsing them into a single unlabeled score makes real-world
    generalizability impossible to interpret.
stance: >-
  Tight resource budgets reward lean, efficient strategies while generous
  budgets reward brute-force approaches, so the same eval measures different
  capabilities at different scales.
related:
  - PRI-260328-D5EB
  - PRI-260328-5CDE
  - PRI-260328-EE02
  - PRI-260328-A82C
  - PRI-260323-BA94
---
Anthropic observed a regime change in their resource sweep. From 1x to 3x, increased resources mostly fix transient OOM kills on tasks the agent was going to fail anyway — making the eval more stable without making it easier. Above 3x, success rates climb faster than infra errors decline: the extra headroom enables approaches that only work with generous allocations, like pulling in heavyweight dependencies or running memory-intensive test suites.

Concretely, on the bn-fit-modify task, some models' first move is to install pandas, networkx, scikit-learn, and their full toolchain — which works under generous limits but OOMs during install under tight ones. A leaner strategy (implementing the math with only the standard library) exists and some models default to it. Different models have different default approaches, and the resource configuration silently picks which style is being rewarded. Both lean efficiency and heavy-tool exploitation are legitimate capabilities to test, but collapsing them into a single unlabeled score makes real-world generalizability impossible to interpret.
