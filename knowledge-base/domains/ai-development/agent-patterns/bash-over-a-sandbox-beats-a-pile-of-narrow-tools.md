---
id: INS-260605-5C58
domain: ai-development
topic: agent-patterns
title: Bash over a sandbox beats a pile of narrow tools
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - bash
  - tool-design
  - sandbox
  - minimalism
  - agent-tools
sources:
  - type: youtube
    title: 'Give Your Agent a Computer — Nico Albanese, Vercel'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=wflNENRSUb4'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    'Bash is all you need' — one bash tool let the agent ls, grep, find, glob,
    store files, and run code, covering an entire workshop's worth of
    capability.
  standard: >-
    Vercel feels 'very strongly that bash is all you need in a lot of cases'
    because these models are exceptionally good at writing bash, having been
    post-trained heavily on shell usage (Anthropic's bash tool got better partly
    from subsidized Claude Code usage). The whole workshop ran on a single bash
    tool against a persistent sandbox: the agent reads its memory file, searches
    with find/grep/glob, writes and executes scripts, and manages its own
    file-system memory — all through one tool surface rather than many bespoke,
    narrowly-typed tools. This connects to the broader 'give your agent a
    computer' thesis: rather than enumerating capabilities as separate tools,
    hand the agent a general-purpose environment and let it compose primitives.
    The minimal tool surface also keeps the agent definition small and the tool
    descriptions (which the model relies on heavily to decide usage) easy to get
    right.
stance: >-
  A single bash tool against a real file system can replace most purpose-built
  tools because models are heavily trained on shell.
related:
  - INS-260514-1D60
  - INS-260605-98BD
  - INS-260605-0C88
  - INS-260327-63B5
  - INS-260410-8ECF
  - INS-260605-3553
---
Vercel feels 'very strongly that bash is all you need in a lot of cases' because these models are exceptionally good at writing bash, having been post-trained heavily on shell usage (Anthropic's bash tool got better partly from subsidized Claude Code usage). The whole workshop ran on a single bash tool against a persistent sandbox: the agent reads its memory file, searches with find/grep/glob, writes and executes scripts, and manages its own file-system memory — all through one tool surface rather than many bespoke, narrowly-typed tools. This connects to the broader 'give your agent a computer' thesis: rather than enumerating capabilities as separate tools, hand the agent a general-purpose environment and let it compose primitives. The minimal tool surface also keeps the agent definition small and the tool descriptions (which the model relies on heavily to decide usage) easy to get right.
