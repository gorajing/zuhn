---
id: INS-260627-F9B1
domain: ai-development
topic: agent-patterns
title: Isolate verification in sub-agents so observations don't pollute the main loop
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - sub-agents
  - context-management
  - separation-of-concerns
  - orchestration
  - verification
sources:
  - type: youtube
    title: 'The 3 Pillars of Autonomy – Michele Catasta, Replit'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=MLhAA9yguwM'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Run verification in a sub-agent with a scoped fresh context, scratch that
    context, and inject only the last observation back — this is separation of
    concerns applied to context windows.
  standard: >-
    Catasta's strongest sub-agent argument comes from testing: when the main
    loop both writes code AND performs browser actions, feeding raw browser
    observations back into the main loop confuses it — there's too much noise
    relative to the coding actions it should attend to. Replit's fix was to move
    the entire testing architecture into sub-agents. A sub-agent is invoked from
    the core loop starting from a blank slate; the builder decides the minimal
    subset of context to inject, lets it run to completion, scratches its
    context window, and returns only the final observation to the main loop.
    This is the classic separation-of-concerns principle applied to context
    windows. 


    The payoff is measurable: when Replit enabled its new sub-agent orchestrator
    in production, memories-per-compression rose from ~35 to ~45–50, meaning the
    main context could go far longer before needing recompression because
    pollution was offloaded. This connects to the broader context-management
    thesis: long-context models (10M–100M tokens) are not needed — most tasks,
    even ambitious ones, fit within ~200K tokens if you manage state by
    offloading it to the codebase (documentation, plans, task lists) and the
    file system rather than cramming everything into the window.
stance: >-
  Verification and other noisy work should run inside fresh-context sub-agents
  that return only their final result, protecting the main loop's coherence and
  compression efficiency.
related:
  - INS-260320-63D3
  - INS-260410-37D5
  - INS-260605-AD25
  - INS-260605-CF2E
  - INS-260605-295D
  - INS-260626-59D9
  - INS-260627-85C7
  - INS-260628-0EB2
  - INS-260628-C374
  - INS-260627-8B75
---
Catasta's strongest sub-agent argument comes from testing: when the main loop both writes code AND performs browser actions, feeding raw browser observations back into the main loop confuses it — there's too much noise relative to the coding actions it should attend to. Replit's fix was to move the entire testing architecture into sub-agents. A sub-agent is invoked from the core loop starting from a blank slate; the builder decides the minimal subset of context to inject, lets it run to completion, scratches its context window, and returns only the final observation to the main loop. This is the classic separation-of-concerns principle applied to context windows. 

The payoff is measurable: when Replit enabled its new sub-agent orchestrator in production, memories-per-compression rose from ~35 to ~45–50, meaning the main context could go far longer before needing recompression because pollution was offloaded. This connects to the broader context-management thesis: long-context models (10M–100M tokens) are not needed — most tasks, even ambitious ones, fit within ~200K tokens if you manage state by offloading it to the codebase (documentation, plans, task lists) and the file system rather than cramming everything into the window.
