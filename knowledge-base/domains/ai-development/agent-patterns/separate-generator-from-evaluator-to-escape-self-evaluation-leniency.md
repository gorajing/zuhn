---
id: INS-260410-AA6E
domain: ai-development
topic: agent-patterns
title: Separate generator from evaluator to escape self-evaluation leniency
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - agents
  - evaluation
  - multi-agent
  - GAN
  - harness-design
sources:
  - type: blog
    title: Harness design for long-running application development
    url: 'https://www.anthropic.com/engineering/harness-design-long-running-apps'
date_extracted: '2026-04-10'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    A separate evaluator agent is far more tractable to tune toward skepticism
    than convincing a generator to be critical of its own output.
  standard: >-
    When asked to judge their own work, agents reliably skew positive — they
    identify legitimate issues then talk themselves into approving the work
    anyway. This persists even on tasks with verifiable outcomes, not just
    subjective ones like design. Splitting the work-doer from the work-judger
    doesn't automatically solve this (the evaluator is still an LLM inclined to
    be generous toward LLM outputs), but tuning a standalone evaluator to be
    skeptical is much easier than making a generator self-critical.


    The practical move is structural separation first, then iteratively tune the
    evaluator's prompt by reading its logs, finding cases where its judgment
    diverged from yours, and patching the prompt. Once external feedback exists
    in any form, the generator has something concrete to iterate against — that
    feedback loop is the actual unlock, not the evaluator's calibration in
    isolation.


    This flips the usual instinct to add 'self-critique' steps to a single
    agent. Self-critique within one context window doesn't break the leniency
    bias; only an externalized judge does.
stance: >-
  LLM agents reliably grade their own work too generously, so quality
  improvements come from a separate skeptical evaluator agent rather than asking
  the generator to self-critique.
related:
  - PRI-260411-14DC
  - INS-260403-4363
  - INS-260410-F40F
  - PRI-260405-4B06
  - INS-260409-E080
---
When asked to judge their own work, agents reliably skew positive — they identify legitimate issues then talk themselves into approving the work anyway. This persists even on tasks with verifiable outcomes, not just subjective ones like design. Splitting the work-doer from the work-judger doesn't automatically solve this (the evaluator is still an LLM inclined to be generous toward LLM outputs), but tuning a standalone evaluator to be skeptical is much easier than making a generator self-critical.

The practical move is structural separation first, then iteratively tune the evaluator's prompt by reading its logs, finding cases where its judgment diverged from yours, and patching the prompt. Once external feedback exists in any form, the generator has something concrete to iterate against — that feedback loop is the actual unlock, not the evaluator's calibration in isolation.

This flips the usual instinct to add 'self-critique' steps to a single agent. Self-critique within one context window doesn't break the leniency bias; only an externalized judge does.
