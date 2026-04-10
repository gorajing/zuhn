---
id: INS-260410-AF66
domain: ai-development
topic: agents
title: 'Start evals with 20-50 tasks from real failures, not hundreds from scratch'
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - evals
  - agents
  - bootstrapping
  - testing
sources:
  - type: blog
    title: Demystifying evals for AI agents
    url: 'https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents'
date_extracted: '2026-04-10'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Bootstrap agent evals from 20-50 real failure cases; effect sizes are large
    early so small samples suffice.
  standard: >-
    The main reason teams delay building evals is the belief that they need
    hundreds of tasks to produce trustworthy signal. Anthropic argues the
    opposite: in early agent development, each system change has such a large
    effect size that 20-50 tasks sourced from real failures are enough to detect
    regressions and guide iteration. Evals get harder to build the longer you
    wait because you're reverse-engineering success criteria from a live system
    instead of translating fresh product requirements into test cases.


    The practical move is to convert whatever you already check manually (the
    behaviors you verify before each release) plus entries from the bug tracker
    and support queue into the initial suite. Prioritizing by user impact
    ensures effort compounds where it actually matters. More mature agents
    eventually need larger, harder suites to detect smaller effects — but taking
    the 80/20 approach at the start prevents the 'we have no evals because we're
    still planning the eval strategy' trap.
stance: >-
  Teams should start building agent evals with 20-50 tasks sourced from real
  user failures rather than waiting until they have a 'complete' test suite.
related:
  - INS-260322-D1AB
  - INS-260410-D03C
  - INS-260410-F40F
  - INS-260410-A27C
  - INS-260410-566F
---
The main reason teams delay building evals is the belief that they need hundreds of tasks to produce trustworthy signal. Anthropic argues the opposite: in early agent development, each system change has such a large effect size that 20-50 tasks sourced from real failures are enough to detect regressions and guide iteration. Evals get harder to build the longer you wait because you're reverse-engineering success criteria from a live system instead of translating fresh product requirements into test cases.

The practical move is to convert whatever you already check manually (the behaviors you verify before each release) plus entries from the bug tracker and support queue into the initial suite. Prioritizing by user impact ensures effort compounds where it actually matters. More mature agents eventually need larger, harder suites to detect smaller effects — but taking the 80/20 approach at the start prevents the 'we have no evals because we're still planning the eval strategy' trap.
