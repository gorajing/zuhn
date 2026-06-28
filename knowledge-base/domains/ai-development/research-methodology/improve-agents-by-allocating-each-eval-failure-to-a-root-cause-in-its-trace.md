---
id: INS-260625-FC2D
domain: ai-development
topic: research-methodology
title: Improve agents by allocating each eval failure to a root cause in its trace
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - evals
  - ai-agents
  - debugging
  - trace-analysis
  - hill-climbing
sources:
  - type: youtube
    title: 'Evals Are Broken, Use Them Anyway — Ara Khan, Cline'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=QuuIywMG4s8'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Run the suite, then have an agent read every failure trace and attribute
    each failure to a specific cause to surface the few levers that move the
    score most.
  standard: >-
    The aggregate score is only the start. After a run—say 50 failures out of 89
    tasks—the work is to 'allocate' the failures: dispatch an agent to read each
    failure trace (the full file of every LLM call the agent made) and label why
    it failed—'didn't run tests,' 'the retry tool was broken,' 'crashed the
    harness.' Properly attributing failures reveals a small number of levers
    that, when pulled, yield outsized improvements. This is the mechanical heart
    of hill-climbing an agent: you don't stare at the number, you read the
    trajectories and fix the specific, diagnosable breakages. The transferable
    lesson is that a scalar metric is a pointer into the underlying traces, and
    the leverage is always in the per-failure root-cause attribution, not the
    average.
stance: >-
  Agent improvement comes from attributing each eval failure to a specific cause
  via trace analysis to find high-leverage fixes, not from chasing the aggregate
  score.
related:
  - INS-260605-667B
  - INS-260605-726C
  - INS-260605-7843
  - INS-260626-67E8
  - INS-260627-E7AE
  - INS-260605-C33F
  - INS-260627-068D
---
The aggregate score is only the start. After a run—say 50 failures out of 89 tasks—the work is to 'allocate' the failures: dispatch an agent to read each failure trace (the full file of every LLM call the agent made) and label why it failed—'didn't run tests,' 'the retry tool was broken,' 'crashed the harness.' Properly attributing failures reveals a small number of levers that, when pulled, yield outsized improvements. This is the mechanical heart of hill-climbing an agent: you don't stare at the number, you read the trajectories and fix the specific, diagnosable breakages. The transferable lesson is that a scalar metric is a pointer into the underlying traces, and the leverage is always in the per-failure root-cause attribution, not the average.
