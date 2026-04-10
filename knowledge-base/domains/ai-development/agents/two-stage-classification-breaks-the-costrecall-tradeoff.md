---
id: INS-260410-376A
domain: ai-development
topic: agents
title: Two-stage classification breaks the cost/recall tradeoff
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - classifier-design
  - cost-optimization
  - latency
  - prompt-caching
sources:
  - type: blog
    title: 'Claude Code auto mode: a safer way to skip permissions'
    url: 'https://www.anthropic.com/engineering/claude-code-auto-mode'
date_extracted: '2026-04-10'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Gate expensive chain-of-thought reasoning behind a cheap single-token filter
    tuned for high recall.
  standard: >-
    Auto Mode runs a single-token yes/no filter first, tuned to err toward
    blocking (8.5% FPR, 6.6% FNR on real traffic). Only flagged actions escalate
    to a second pass with chain-of-thought reasoning, which drops FPR to 0.4% at
    a small recall cost. Because stage 2 uses the same prompt with only the
    final instruction changed, it's almost entirely cache-hit from stage 1.


    The broader lesson is that classification systems should be tiered by cost.
    A single classifier tuned to balance FPR and FNR pays the expensive
    reasoning cost on every input. A cascade pays it only where stage 1 is
    uncertain, which exploits the fact that most real traffic is obviously
    benign. Design the cheap stage to be conservative (over-flag), design the
    expensive stage to clean up false positives, and share prompt prefixes so
    caching amortizes the second call.
stance: >-
  Splitting a classifier into a fast filter plus a conditional reasoning stage
  is strictly better than single-stage classification because most inputs clear
  stage 1 and reasoning tokens are spent only where they matter.
related:
  - INS-260405-5BD3
  - INS-260410-C022
  - PRI-260328-D893
  - INS-260323-7625
  - INS-260410-6ABA
---
Auto Mode runs a single-token yes/no filter first, tuned to err toward blocking (8.5% FPR, 6.6% FNR on real traffic). Only flagged actions escalate to a second pass with chain-of-thought reasoning, which drops FPR to 0.4% at a small recall cost. Because stage 2 uses the same prompt with only the final instruction changed, it's almost entirely cache-hit from stage 1.

The broader lesson is that classification systems should be tiered by cost. A single classifier tuned to balance FPR and FNR pays the expensive reasoning cost on every input. A cascade pays it only where stage 1 is uncertain, which exploits the fact that most real traffic is obviously benign. Design the cheap stage to be conservative (over-flag), design the expensive stage to clean up false positives, and share prompt prefixes so caching amortizes the second call.
