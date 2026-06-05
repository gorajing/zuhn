---
id: INS-260605-E193
domain: ai-development
topic: agent-patterns
title: >-
  Reading agent traces by hand is the primary debugging loop, not running more
  experiments
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - debugging
  - observability
  - traces
  - evaluation
  - empathy
sources:
  - type: youtube
    title: >-
      Anthropic Workshop: Build Agents That Run for Hours — Ash Prabaker &
      Andrew Wilson
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=mR-WAvEPRwE'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    The real art of tuning a harness is reading full traces by hand to find
    where the agent's judgment diverged from yours, then tuning the prompt for
    exactly that gap.
  standard: >-
    There's no secret to making these systems good — the work is reading traces.
    The primary debugging loop is reading what the agent actually did, finding
    where its judgment diverged from a human's, and tuning the prompt for that
    divergence; it's the same muscle as reading a stack trace. Claude out of the
    box is a bad QA agent (early runs would 'find a bug, say
    fix-it-later-might-take-2-weeks, and move on' — the same sycophancy/leniency
    bias of LLM-as-judge systems), and the only fix was exorbitant manual
    trace-reading. Tooling helps as a first pass (pipe transcripts to files,
    grep them, point another agent at them to flag where the loop veered off),
    but the team is emphatic that you must read the whole trace, not a filtered
    summary. The deeper skill is empathizing with the model: for
    Claude-for-Chrome they simulated navigating web pages 'with eyes closed,'
    opening them every 10 seconds, to feel what the model experiences. Learnings
    then get baked into prompt templates, CLAUDE.md, or skills.
stance: >-
  Improving an agent harness comes mainly from reading raw traces line-by-line,
  not from running more automated experiments.
related:
  - INS-260410-9DB0
  - INS-260605-36E9
  - PRI-260426-890F
  - INS-260514-4FDC
  - INS-260322-3616
---
There's no secret to making these systems good — the work is reading traces. The primary debugging loop is reading what the agent actually did, finding where its judgment diverged from a human's, and tuning the prompt for that divergence; it's the same muscle as reading a stack trace. Claude out of the box is a bad QA agent (early runs would 'find a bug, say fix-it-later-might-take-2-weeks, and move on' — the same sycophancy/leniency bias of LLM-as-judge systems), and the only fix was exorbitant manual trace-reading. Tooling helps as a first pass (pipe transcripts to files, grep them, point another agent at them to flag where the loop veered off), but the team is emphatic that you must read the whole trace, not a filtered summary. The deeper skill is empathizing with the model: for Claude-for-Chrome they simulated navigating web pages 'with eyes closed,' opening them every 10 seconds, to feel what the model experiences. Learnings then get baked into prompt templates, CLAUDE.md, or skills.
