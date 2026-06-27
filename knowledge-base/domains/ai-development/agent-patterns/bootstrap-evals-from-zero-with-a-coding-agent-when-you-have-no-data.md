---
id: INS-260605-6444
domain: ai-development
topic: agent-patterns
title: Bootstrap evals from zero with a coding agent when you have no data
actionability: immediate
confidence: medium
shelf_life: time-sensitive
status: active
tags:
  - evaluation
  - coding-agents
  - cold-start
  - skills
  - human-in-the-loop
sources:
  - type: youtube
    title: >-
      Mind the Gap (In your Agent Observability) — Amy Boyd & Nitya Narasimhan,
      Microsoft
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=iOXM3zE-2dk'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Point a coding agent (with an 'observe' skill) at a bare agent endpoint and
    it generates an eval dataset, runs a baseline batch eval, optimizes the
    prompt, and versions/rolls back automatically.
  standard: >-
    The classic cold-start objection to evals is 'I have no data — this app
    never existed.' The demo shows a coding agent solving this: given only an
    agent with instructions, a model, and an endpoint, it infers intent from the
    instructions, generates a synthetic eval dataset, runs a baseline batch
    eval, surfaces failures with reasoning, then on request optimizes the
    prompt, pushes a new version, re-evaluates, and rolls back if it regresses.
    Crucially this stays human-in-the-loop — automated prompt optimization
    plateaus and even regresses (improving to 7, dropping to 5), so a human
    decides when to stop and which version to keep. The speaker's framing of the
    real value: the reasoning output 'exposes me to what I don't know' — it's
    not about offloading SDK calls, it's about surfacing failure modes you
    wouldn't have thought to test. Marked time-sensitive because the specific
    tooling (Foundry observe skill) was days old at recording.
stance: >-
  You can start evaluating a brand-new agent without any existing dataset by
  letting a coding agent generate the eval set and run the loop.
related:
  - INS-260410-F40F
  - INS-260410-83EC
  - INS-260410-53C2
  - INS-260410-E658
  - INS-260626-B149
  - INS-260605-BDFF
  - INS-260626-2F2E
  - INS-260625-814D
  - INS-260605-C627
  - INS-260605-1E04
---
The classic cold-start objection to evals is 'I have no data — this app never existed.' The demo shows a coding agent solving this: given only an agent with instructions, a model, and an endpoint, it infers intent from the instructions, generates a synthetic eval dataset, runs a baseline batch eval, surfaces failures with reasoning, then on request optimizes the prompt, pushes a new version, re-evaluates, and rolls back if it regresses. Crucially this stays human-in-the-loop — automated prompt optimization plateaus and even regresses (improving to 7, dropping to 5), so a human decides when to stop and which version to keep. The speaker's framing of the real value: the reasoning output 'exposes me to what I don't know' — it's not about offloading SDK calls, it's about surfacing failure modes you wouldn't have thought to test. Marked time-sensitive because the specific tooling (Foundry observe skill) was days old at recording.
