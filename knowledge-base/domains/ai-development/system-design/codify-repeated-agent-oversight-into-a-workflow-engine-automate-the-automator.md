---
id: INS-260605-A8A9
domain: ai-development
topic: system-design
title: >-
  Codify repeated agent oversight into a workflow engine — automate the
  automator
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - workflow-engines
  - standard-operating-procedures
  - pr-triage
  - structured-output
  - orchestration
sources:
  - type: youtube
    title: 'Scaling Agents on Kubernetes with acpx and ACP — Onur Solmaz, OpenClaw'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=VaS2h-dY1-4'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Turn the repeated 'find intent, judge implementation, check conflicts, make
    CI pass' supervision loop into a programmatic workflow that emits structured
    JSON, so only genuine decisions reach you.
  standard: >-
    Faced with 300-500 open PRs per day on OpenClaw, Solmaz noticed his review
    process was mechanical and repetitive: read the PR, find the intent, judge
    whether it's the best fix, check for conflicts, resolve review issues, make
    CI pass. The insight is that the moment a human oversight process becomes
    this mechanical, it is a candidate for programming — 'you're automating the
    automator.' He calls the result a standard operating procedure for agents,
    which is just a fancy word for a workflow.


    The key implementation detail is forcing the agent to emit structured JSON
    at each stage rather than freeform prose, which lets the steps compose into
    a real workflow engine (he likens ACP-X to an n8n-style engine driving a
    Codex session). By the time a PR reaches a human, all the mechanical work —
    reproduction, superficial refactors, conflict resolution, CI — should
    already be resolved, leaving only the genuine judgment calls. This is a
    general pattern: any high-volume human-in-the-loop process where you feel
    like you're repeating yourself is signaling that the loop should be lifted
    into code.
stance: >-
  Once you notice yourself mechanically repeating the same agent-supervision
  steps, that loop should become a programmed workflow engine, not continued
  manual labor.
related:
  - INS-260501-247C
  - INS-260605-EC51
  - PRI-260403-67FC
  - INS-260626-E00F
  - INS-260627-47A6
---
Faced with 300-500 open PRs per day on OpenClaw, Solmaz noticed his review process was mechanical and repetitive: read the PR, find the intent, judge whether it's the best fix, check for conflicts, resolve review issues, make CI pass. The insight is that the moment a human oversight process becomes this mechanical, it is a candidate for programming — 'you're automating the automator.' He calls the result a standard operating procedure for agents, which is just a fancy word for a workflow.

The key implementation detail is forcing the agent to emit structured JSON at each stage rather than freeform prose, which lets the steps compose into a real workflow engine (he likens ACP-X to an n8n-style engine driving a Codex session). By the time a PR reaches a human, all the mechanical work — reproduction, superficial refactors, conflict resolution, CI — should already be resolved, leaving only the genuine judgment calls. This is a general pattern: any high-volume human-in-the-loop process where you feel like you're repeating yourself is signaling that the loop should be lifted into code.
