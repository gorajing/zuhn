---
id: INS-260627-9228
domain: ai-development
topic: agent-reliability
title: Review an agent's restated intent and plan before it writes code
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - review-checkpoints
  - agent-drift
  - verification
  - agentic-coding
sources:
  - type: youtube
    title: >-
      Backlog.md: Terminal Kanban Board for Managing Tasks with AI Agents — Alex
      Gavrilescu, Funstage
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=zMXKhhwiCIc'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Insert review checkpoints after task creation and after the implementation
    plan — not just after the code — to catch a drifting agent early.
  standard: >-
    Backlog.md's workflow has three explicit review checkpoints, and the order
    matters. The first is right after the agent creates the task: you read the
    description and acceptance criteria it wrote to confirm it actually
    understood your intent. The second is after the agent produces an
    implementation plan (architecture overview, files to touch, how) — the
    moment a senior engineer can tell whether the agent is heading the right
    direction. Only the third checkpoint is the code review everyone already
    does.


    The insight is that most teams review only at the end, where a wrong
    direction is most expensive to unwind. By forcing the agent to externalize
    its understanding (restated intent) and its plan as inspectable artifacts
    before it touches code, you create two early, cheap gates where misalignment
    surfaces. This is the agent equivalent of catching a requirements
    misunderstanding at the spec stage rather than after a sprint of
    implementation. The cost of correction rises sharply at each later
    checkpoint, so the highest-leverage reviews are the earliest ones.
stance: >-
  Verifying an agent's restated intent and implementation plan before any code
  is written catches misdirection far more cheaply than reviewing the final
  diff.
related:
  - INS-260320-6CCE
  - INS-260403-F7A9
  - INS-260320-63D3
  - INS-260403-2174
  - INS-260402-CC68
  - INS-260412-B252
  - INS-260625-6E19
  - INS-260626-1D80
  - INS-260626-18A3
  - INS-260320-1B10
---
Backlog.md's workflow has three explicit review checkpoints, and the order matters. The first is right after the agent creates the task: you read the description and acceptance criteria it wrote to confirm it actually understood your intent. The second is after the agent produces an implementation plan (architecture overview, files to touch, how) — the moment a senior engineer can tell whether the agent is heading the right direction. Only the third checkpoint is the code review everyone already does.

The insight is that most teams review only at the end, where a wrong direction is most expensive to unwind. By forcing the agent to externalize its understanding (restated intent) and its plan as inspectable artifacts before it touches code, you create two early, cheap gates where misalignment surfaces. This is the agent equivalent of catching a requirements misunderstanding at the spec stage rather than after a sprint of implementation. The cost of correction rises sharply at each later checkpoint, so the highest-leverage reviews are the earliest ones.
