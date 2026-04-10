---
id: INS-260410-0FC1
domain: ai-development
topic: agent-patterns
title: 'Design agent environments for the agent, not for humans'
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - context-engineering
  - tooling
  - harness-design
  - developer-experience
sources:
  - type: blog
    title: Building a C compiler with a team of parallel Claudes
    url: 'https://www.anthropic.com/engineering/building-c-compiler'
date_extracted: '2026-04-10'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Redesign the test and log UX around the agent's cognitive constraints: short
    outputs, greppable ERROR lines, precomputed summaries, deterministic
    sampling.
  standard: >-
    Carlini explicitly had to 'put himself in Claude's shoes' and unlearn human
    assumptions. Concrete patterns: cap stdout to a few lines and log details to
    files; prefix errors with ERROR on a single line so grep finds them;
    precompute aggregate statistics so the agent doesn't burn context
    reconstructing them; include a --fast mode that runs a 1-10%
    deterministic-per-agent, random-across-VMs sample so each agent covers the
    space but doesn't waste hours on full runs. Maintain READMEs and progress
    files so a freshly-spawned agent in a cold container can orient itself
    without human context. The underlying principle: every byte of output
    competes for attention in a limited context window, and time-blindness means
    agents need the harness to pace them.
stance: >-
  Test harnesses, logs, and tooling should be rewritten with the agent's
  limitations (context window, time blindness, cold-start orientation) as
  first-class constraints, not treated as human UX.
related:
  - PRI-260406-1188
  - INS-260323-4D8D
  - INS-260405-2DCC
  - INS-260330-C31B
  - INS-260410-3601
---
Carlini explicitly had to 'put himself in Claude's shoes' and unlearn human assumptions. Concrete patterns: cap stdout to a few lines and log details to files; prefix errors with ERROR on a single line so grep finds them; precompute aggregate statistics so the agent doesn't burn context reconstructing them; include a --fast mode that runs a 1-10% deterministic-per-agent, random-across-VMs sample so each agent covers the space but doesn't waste hours on full runs. Maintain READMEs and progress files so a freshly-spawned agent in a cold container can orient itself without human context. The underlying principle: every byte of output competes for attention in a limited context window, and time-blindness means agents need the harness to pace them.
