---
id: INS-260327-9D50
domain: ai-development
topic: agent-patterns
title: Traces replace code as the source of truth for understanding agent behavior
actionability: immediate
confidence: high
shelf_life: time-sensitive
status: active
tags:
  - agent-traces
  - observability
  - debugging
  - source-of-truth
sources:
  - type: youtube
    title: >-
      Context Engineering Our Way to Long-Horizon Agents: LangChain’s Harrison
      Chase
    author: Sequoia Capital
    url: 'https://www.youtube.com/watch?v=vtugjs2chdA'
date_extracted: '2026-03-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Chase argues that traces are to agents what source code is to software: the
    actual source of truth for understanding what the system does, because you
    literally cannot predict agent behavior by reading the code.
  standard: >-
    Chase identifies the fundamental difference between building software and
    building agents: in software, all logic is in the code and you can read it
    to understand behavior. In agents, a large part of the logic comes from the
    model — a non-deterministic black box. This means you can't look at code and
    tell what the agent would do in a specific scenario; you have to run it and
    observe. Traces become far more important than in traditional software
    (where you'd just set a breakpoint locally). People use traces from the very
    start of development, not just in production debugging. The implications
    cascade: testing must be online (behavior doesn't emerge until real-world
    inputs), collaboration happens around traces (not GitHub code review), and
    debugging starts with 'send us the LangSmith trace' instead of 'show me the
    code.' This represents a paradigm shift in how engineering teams work: the
    trace becomes the shared artifact around which the team collaborates, not
    the codebase.
stance: >-
  In agent development, you cannot understand what your system does by reading
  the code — you must look at traces, because the model's behavior is
  non-deterministic and context at step 14 depends on 13 prior steps that could
  pull in arbitrary information.
related:
  - INS-260327-5F10
  - INS-260325-031F
  - INS-260327-A9D5
  - INS-260329-500E
  - INS-260402-3095
  - INS-260405-1CAA
evidence:
  - id: INS-260405-1CAA
    type: TRANSFERS_TO
    classified_at: '2026-04-05'
---
Chase identifies the fundamental difference between building software and building agents: in software, all logic is in the code and you can read it to understand behavior. In agents, a large part of the logic comes from the model — a non-deterministic black box. This means you can't look at code and tell what the agent would do in a specific scenario; you have to run it and observe. Traces become far more important than in traditional software (where you'd just set a breakpoint locally). People use traces from the very start of development, not just in production debugging. The implications cascade: testing must be online (behavior doesn't emerge until real-world inputs), collaboration happens around traces (not GitHub code review), and debugging starts with 'send us the LangSmith trace' instead of 'show me the code.' This represents a paradigm shift in how engineering teams work: the trace becomes the shared artifact around which the team collaborates, not the codebase.
