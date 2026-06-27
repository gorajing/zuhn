---
id: INS-260626-4639
domain: ai-development
topic: architecture
title: Separate where the agent harness runs from where the code it generates runs
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - agent-architecture
  - sandboxing
  - security
  - code-execution
  - isolation
sources:
  - type: youtube
    title: 'The New Application Layer - Malte Ubl, CTO Vercel'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=XKup1pj-34M'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Most popular agent harnesses dangerously combine the harness environment
    with the environment that runs the code the agent generates, and the correct
    architecture separates the two.
  standard: >-
    Ubl argues that the AI ecosystem is 'marching head on into a security
    nightmare' reminiscent of 1999, where essentially everything is hackable.
    His concrete example: almost all currently popular agent harnesses have the
    wrong architecture because they conflate where the harness runs with where
    the agent-generated code executes. The fix is to isolate code execution —
    give the agent a computer (a sandbox) without giving it your computer —
    which is why sandboxes have become a near-meme in the space and why he built
    'just bash,' a TypeScript bash interpreter with near-instant startup.


    He notes Anthropic validated this thesis by shipping a new agent product
    with that harness/execution separation built in. The broader message is that
    these are solvable problems but we are in the very early innings, so
    engineers should architect for isolation now and stay open-minded about
    further paradigm shifts in how agents are given compute.
stance: >-
  Agent harnesses are architecturally wrong when they execute generated code in
  the same environment the harness runs in; the two must be isolated.
related:
  - INS-260514-4FDC
  - INS-260605-5D66
  - INS-260605-C33F
  - INS-260619-B1A8
  - INS-260625-AF2A
  - INS-260626-09E1
  - INS-260626-5B28
  - PRI-260426-890F
  - INS-260626-CC4A
---
Ubl argues that the AI ecosystem is 'marching head on into a security nightmare' reminiscent of 1999, where essentially everything is hackable. His concrete example: almost all currently popular agent harnesses have the wrong architecture because they conflate where the harness runs with where the agent-generated code executes. The fix is to isolate code execution — give the agent a computer (a sandbox) without giving it your computer — which is why sandboxes have become a near-meme in the space and why he built 'just bash,' a TypeScript bash interpreter with near-instant startup.

He notes Anthropic validated this thesis by shipping a new agent product with that harness/execution separation built in. The broader message is that these are solvable problems but we are in the very early innings, so engineers should architect for isolation now and stay open-minded about further paradigm shifts in how agents are given compute.
