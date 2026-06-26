---
id: INS-260626-1B29
domain: ai-development
topic: future-of-work
title: >-
  Scaling agentic development forces a worker-to-manager shift built on async
  and frontloaded context
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - worker-to-manager
  - async-workflows
  - context-frontloading
  - parallelization
  - delegation
sources:
  - type: youtube
    title: 'Building your own software factory — Eric Zakariasson, Cursor'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=rnDm57Py54A'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    As agents do more work you become a manager of an async fleet — which means
    scoping work to avoid merge conflicts, frontloading context into
    specs/plans, and trusting agents to run long.
  standard: >-
    The most important shift once a factory is in place is mental: you go from
    worker to manager, doing way less of the work yourself and overseeing many
    agents instead. This forces sync-to-async, because most work happens in the
    background. Zakariasson maps it directly onto human org dynamics — small
    team, then managers, then managers of managers, then nested agents managing
    other agents up the abstraction ladder. The manager's new job is to scope
    and parallelize: one unit of work equals one agent, but two agents on the
    same part of the codebase produce merge conflicts, so planning still
    matters. Going async also demands trust, which you buy by frontloading
    context up front via a plan or long spec, then letting the agent go. He
    stresses preserving 'tribal knowledge' — how data flows, which parts are
    critical, what users want — rather than outsourcing understanding wholesale.
    There is no shortcut: you spawn a large number of agents, watch what
    happens, and develop intuition for the models' strengths and weaknesses,
    while never pushing straight to prod without safety guardrails.
stance: >-
  Productively running many agents requires shifting from synchronous coding to
  asynchronous management with context frontloaded into specs and plans.
related:
  - INS-260605-2795
  - INS-260605-51AE
  - INS-260605-B4B9
  - INS-260605-0E19
  - INS-260626-F14C
  - INS-260322-EAB6
  - PRI-260328-8317
  - INS-260501-4C5E
  - INS-260423-FF53
---
The most important shift once a factory is in place is mental: you go from worker to manager, doing way less of the work yourself and overseeing many agents instead. This forces sync-to-async, because most work happens in the background. Zakariasson maps it directly onto human org dynamics — small team, then managers, then managers of managers, then nested agents managing other agents up the abstraction ladder. The manager's new job is to scope and parallelize: one unit of work equals one agent, but two agents on the same part of the codebase produce merge conflicts, so planning still matters. Going async also demands trust, which you buy by frontloading context up front via a plan or long spec, then letting the agent go. He stresses preserving 'tribal knowledge' — how data flows, which parts are critical, what users want — rather than outsourcing understanding wholesale. There is no shortcut: you spawn a large number of agents, watch what happens, and develop intuition for the models' strengths and weaknesses, while never pushing straight to prod without safety guardrails.
