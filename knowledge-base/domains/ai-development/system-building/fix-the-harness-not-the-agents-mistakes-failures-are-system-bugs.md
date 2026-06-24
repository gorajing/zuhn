---
id: INS-260605-C33F
domain: ai-development
topic: system-building
title: 'Fix the harness, not the agent''s mistakes — failures are system bugs'
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - harness-engineering
  - self-improvement
  - retrospective
  - memory
sources:
  - type: youtube
    title: >-
      How I deleted 95% of my agent skills and got better results — Nick Nisi,
      WorkOS
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=vy7o1g2iHY8'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Treat every agent failure as a harness bug and feed it into a retrospective
    + memory system, so the next run avoids the same roadblock.
  standard: >-
    Borrowing from Ryan Carson/'harness engineering' — never work on the code
    the agent produces, only on the harness that produces the code. Case
    implements this with a retrospective agent that parses the Claude/Codex
    JSONL transcripts after each run, detecting failure signatures: repeated
    identical tool calls, doom loops, redundant parallel tool runs. It writes
    lessons into scoped markdown memory files (general, Next.js, TanStack Start,
    etc.) so a one-time mistake like breaking start.ts's implicit TanStack
    contract never recurs. Combined with human feedback channels and (planned)
    automatic memory pruning, every failure becomes data that compounds the
    agent's reliability over time.
stance: >-
  When an agent errs, you should only ever edit the harness so it self-corrects,
  never patch the output directly.
related:
  - INS-260514-4FDC
  - INS-260605-5D66
  - INS-260410-B0D6
  - PRI-260426-890F
  - INS-260619-B1A8
  - INS-260605-0312
---
Borrowing from Ryan Carson/'harness engineering' — never work on the code the agent produces, only on the harness that produces the code. Case implements this with a retrospective agent that parses the Claude/Codex JSONL transcripts after each run, detecting failure signatures: repeated identical tool calls, doom loops, redundant parallel tool runs. It writes lessons into scoped markdown memory files (general, Next.js, TanStack Start, etc.) so a one-time mistake like breaking start.ts's implicit TanStack contract never recurs. Combined with human feedback channels and (planned) automatic memory pruning, every failure becomes data that compounds the agent's reliability over time.
