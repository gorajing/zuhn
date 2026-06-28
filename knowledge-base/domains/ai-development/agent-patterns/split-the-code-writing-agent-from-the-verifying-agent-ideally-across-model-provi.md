---
id: INS-260627-D043
domain: ai-development
topic: agent-patterns
title: >-
  Split the code-writing agent from the verifying agent, ideally across model
  providers
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - independent-verification
  - n-version-programming
  - multi-model
  - adversarial-testing
  - agentic-coding
sources:
  - type: youtube
    title: 'Vision: Zero Bugs — Johann Schleier-Smith, Temporal'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=qLqttdO33UM'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    High-assurance systems use separate teams to write and verify code; the
    agentic analog is separate prompts for writing vs testing, and using a
    different foundation model for each to break correlated failures.
  standard: >-
    The Airbus A320 used N-version programming (different processors, different
    operating systems, separate teams) and fully independent verification teams
    — the people writing code and the people checking it were completely
    separate. The redundancy guards against the correlated mistakes a single
    author cannot catch in their own work.


    The direct agentic translation: use one prompt to write the code and a
    separate prompt to test and verify it, rather than asking a single agent to
    both produce and bless its own output. Taking it further, use multiple model
    providers — one foundation model to write the code and a different one to
    write the tests — so that a blind spot shared by one model is caught by
    another with different training and failure modes.


    This is a per-problem tactic, not a blanket policy — reach for it when
    you're struggling to get an agent to produce correct code on a specific
    critical piece. Pair it with asking the LLM to do explicit risk analysis and
    write 'safety cases' (statements of what could go wrong and how the code
    mitigates it), which is qualitative reasoning LLMs do well even outside
    formal methods.
stance: >-
  Agent-generated code should be verified by a separate agent — and ideally a
  different foundation model — than the one that wrote it.
related:
  - INS-260330-D5CD
  - INS-260403-EC1D
  - INS-260411-F590
  - INS-260625-ACBC
  - PRI-260406-3EF8
  - INS-260627-AC65
  - INS-260501-3CAA
  - INS-260603-6B3D
---
The Airbus A320 used N-version programming (different processors, different operating systems, separate teams) and fully independent verification teams — the people writing code and the people checking it were completely separate. The redundancy guards against the correlated mistakes a single author cannot catch in their own work.

The direct agentic translation: use one prompt to write the code and a separate prompt to test and verify it, rather than asking a single agent to both produce and bless its own output. Taking it further, use multiple model providers — one foundation model to write the code and a different one to write the tests — so that a blind spot shared by one model is caught by another with different training and failure modes.

This is a per-problem tactic, not a blanket policy — reach for it when you're struggling to get an agent to produce correct code on a specific critical piece. Pair it with asking the LLM to do explicit risk analysis and write 'safety cases' (statements of what could go wrong and how the code mitigates it), which is qualitative reasoning LLMs do well even outside formal methods.
