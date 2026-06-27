---
id: INS-260626-04E5
domain: ai-development
topic: agent-patterns
title: Gate mutating agent actions behind deterministic human-approval interrupts
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - human-in-the-loop
  - safety
  - tool-approval
  - mutations
  - trust
sources:
  - type: youtube
    title: >-
      Agents in Production: How OpenGov Built and Scaled OG Assist - Gabe De
      Mesa, OpenGov
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=4uFVSLgD2Q4'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    OpenGov deterministically interrupts the agent loop to require explicit
    human accept/reject before any tool call that needs approval, especially
    mutating operations.
  standard: >-
    OpenGov built a feature that 'deterministically interrupts the agent loop'
    whenever a tool call requires human approval. The agent surfaces a UI where
    a person explicitly accepts or rejects the action before it executes. They
    emphasized this matters most for mutating operations and is about 'always
    making sure humans are in the driver's seat' — both for safety and for
    building user trust.


    The key word is deterministically: the interrupt is a hard-coded
    control-flow gate in the harness, not a behavior the model is prompted to
    exhibit. This is the correct design because models are probabilistic and can
    be jailbroken or simply err; safety-critical gates must live in
    deterministic code that the model cannot route around. The pattern is a
    clean separation of concerns — let the model decide what to attempt, but let
    deterministic infrastructure decide what is allowed to actually mutate
    state. Pair this with sandboxing (OpenGov runs agent code execution and file
    creation in ephemeral, torn-down sandboxes) so non-mutating exploration
    stays cheap while irreversible actions stay gated.
stance: >-
  Mutating agent actions should be gated by deterministic human-in-the-loop
  approval, not left to the model's judgment.
related:
  - INS-260627-08E7
  - INS-260602-EA48
  - INS-260625-A668
  - INS-260603-6B3D
  - INS-260626-A499
---
OpenGov built a feature that 'deterministically interrupts the agent loop' whenever a tool call requires human approval. The agent surfaces a UI where a person explicitly accepts or rejects the action before it executes. They emphasized this matters most for mutating operations and is about 'always making sure humans are in the driver's seat' — both for safety and for building user trust.

The key word is deterministically: the interrupt is a hard-coded control-flow gate in the harness, not a behavior the model is prompted to exhibit. This is the correct design because models are probabilistic and can be jailbroken or simply err; safety-critical gates must live in deterministic code that the model cannot route around. The pattern is a clean separation of concerns — let the model decide what to attempt, but let deterministic infrastructure decide what is allowed to actually mutate state. Pair this with sandboxing (OpenGov runs agent code execution and file creation in ephemeral, torn-down sandboxes) so non-mutating exploration stays cheap while irreversible actions stay gated.
