---
id: INS-260405-3CC7
domain: startups
topic: scaling
title: Scaling Creates Problems That Architecture Alone Cannot Solve
actionability: inspiration
confidence: high
shelf_life: evergreen
status: active
tags:
  - scale
  - complexity
  - architecture
  - engineering
  - second-order-effects
sources:
  - type: blog
    title: "The 49-Year Unicorn Backlog\U0001F984, AI has a gross margin problem\U0001F916, The Path to CFO\U0001F4DA"
    author: Ruben Dominguez
    url: 'https://www.thevccorner.com/p/the-49-year-unicorn-backlog-ai-has'
date_extracted: '2026-04-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Rare edge cases become common failures at scale, creating novel downstream
    problems no amount of upfront architecture prevents.
  standard: >-
    Jason Cohen's observation — 'rare things become common at scale' — captures
    a non-obvious truth about software growth. The edge cases you ignored at
    1,000 users become your primary failure modes at 10 million. A bug that
    fires 0.001% of the time becomes your most common support ticket. A database
    query that's slow once-in-a-million executions becomes a constant
    performance emergency.


    The deeper implication is that you cannot fully design for scale in advance.
    Architectural decisions help, but they cannot anticipate the specific
    failure modes that emerge at 100x your current size. This argues for
    building strong observability, incident response culture, and fast iteration
    loops rather than trying to engineer all problems away upfront. Scale
    requires organizational scaling alongside technical scaling.
stance: >-
  Software scale doesn't just amplify existing complexity — it generates
  entirely new categories of problems that didn't exist at smaller sizes,
  requiring organizational and operational solutions beyond technical ones.
related:
  - INS-260330-5A13
  - INS-260404-7C1F
  - INS-260410-FD24
  - PRI-260411-78CD
  - INS-260403-294D
  - PRI-260323-BA94
---
Jason Cohen's observation — 'rare things become common at scale' — captures a non-obvious truth about software growth. The edge cases you ignored at 1,000 users become your primary failure modes at 10 million. A bug that fires 0.001% of the time becomes your most common support ticket. A database query that's slow once-in-a-million executions becomes a constant performance emergency.

The deeper implication is that you cannot fully design for scale in advance. Architectural decisions help, but they cannot anticipate the specific failure modes that emerge at 100x your current size. This argues for building strong observability, incident response culture, and fast iteration loops rather than trying to engineer all problems away upfront. Scale requires organizational scaling alongside technical scaling.
