---
id: INS-260626-78D1
domain: ai-development
topic: agent-patterns
title: >-
  Bottle the expert: use the social graph as a retrieval pivot, not just an org
  chart
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - social-graph
  - agent-memory
  - context-engineering
  - expertise-modeling
  - seed-context
sources:
  - type: youtube
    title: >-
      Mergeable by default: Building the context engine to save time and tokens
      — Peter Werry, Unblocked
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=5ID22ACI7IM'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    A social/expert graph isn't just an answer to 'who knows this?' — it's a
    jump-off point that seeds the agent with a distilled expert's learnings,
    which then drives where retrieval goes next.
  standard: >-
    Unblocked builds a social graph of who reviews and contributes to which
    code, but its real purpose inside the context engine is as a retrieval
    pivot. They 'bottle the expert' — distilling what an individual has worked
    on, where they sit in the org, and the decisions they've made from PR
    comments and Slack — and unbottle it as seed context when a new engineer
    works in that expert's area. This layered approach stacks semantic vector
    search, pre-built memories, and the unbottled expert; the expert layer is
    the powerful one because it gives the agent directional guidance on where to
    look next in the agentic loop.


    A key design consequence is that memory hydration can't be left to the
    agent. Seed context must be pre-loaded to point the agent in the right
    direction before it starts exploring — the expert's context is the jump-off
    the agent needs. The graph itself is built in layers: a procedural
    PageRank-style pass over PR/review relationships, an ML layer clustering
    experts by the code they touch in vector space, and an LLM layer distilling
    Slack and PR history. Naive contribution-counting alone produced inaccurate
    team clusters, and signal must be weighted by impact (do an engineer's
    messages spawn PRs that get merged?) rather than volume — so the loud junior
    doesn't outrank the quiet high-signal contributor.
stance: >-
  Identifying code-area experts is valuable mainly as a pivot point for seeding
  distilled expert context into the agent, which steers the rest of agentic
  retrieval directionally.
related:
  - INS-260325-E23D
  - INS-260423-FB36
  - INS-260605-B176
  - INS-260605-C028
  - INS-260625-0141
  - INS-260628-ECEB
  - INS-260628-DD24
  - INS-260605-014F
  - INS-260628-5BC9
  - INS-260628-0DCE
---
Unblocked builds a social graph of who reviews and contributes to which code, but its real purpose inside the context engine is as a retrieval pivot. They 'bottle the expert' — distilling what an individual has worked on, where they sit in the org, and the decisions they've made from PR comments and Slack — and unbottle it as seed context when a new engineer works in that expert's area. This layered approach stacks semantic vector search, pre-built memories, and the unbottled expert; the expert layer is the powerful one because it gives the agent directional guidance on where to look next in the agentic loop.

A key design consequence is that memory hydration can't be left to the agent. Seed context must be pre-loaded to point the agent in the right direction before it starts exploring — the expert's context is the jump-off the agent needs. The graph itself is built in layers: a procedural PageRank-style pass over PR/review relationships, an ML layer clustering experts by the code they touch in vector space, and an LLM layer distilling Slack and PR history. Naive contribution-counting alone produced inaccurate team clusters, and signal must be weighted by impact (do an engineer's messages spawn PRs that get merged?) rather than volume — so the loud junior doesn't outrank the quiet high-signal contributor.
