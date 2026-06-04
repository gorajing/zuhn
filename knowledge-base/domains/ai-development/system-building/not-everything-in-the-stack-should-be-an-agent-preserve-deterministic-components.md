---
id: INS-260603-1BC0
domain: ai-development
topic: system-building
title: >-
  Not everything in the stack should be an agent — preserve deterministic
  components
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - determinism
  - agent-architecture
  - over-agentification
  - system-design
  - ai-development-environment
sources:
  - type: audio
    title: Google io
date_extracted: '2026-06-03'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Joe (RocketRide): the industry is very agent-focused (ADEs — agentic
    development environments), but 'there's a lot more going on in a software
    stack than just agents' — there are deterministic parts you want exact every
    time, so they pitch an 'AI development environment' that's a superset of
    agent frameworks rather than agent-only.
  standard: >-
    The framing pushes back on agent-maximalism. The vendor ecosystem is
    converging on agentic development environments (ADEs) — tooling built around
    autonomous agents, with observability, cost-optimization, and performance
    management layered on. The counter-position: a real software stack has
    substantial deterministic components — parts you want to behave exactly the
    same way every time — and forcing those through non-deterministic agents is
    a category error.


    The proposed architecture is a superset: an environment that contains agent
    frameworks but also handles the deterministic, non-agentic parts of the
    stack natively, so you can compose agentic and deterministic components
    together. The point isn't anti-agent (the speaker is 'addicted to autonomous
    agents') — it's that 'agent-first' under-serves systems where exactness
    matters, and the right default is agents-around-a-deterministic-core, not
    agents-everywhere.


    This converges with the safety-critical insight from the physical-AI panel
    (don't let agents write safety-critical code; keep deterministic guardrails)
    and with Zuhn's own architecture boundary (TypeScript handles deterministic
    I/O/validation/math; the model handles only semantic reasoning). The
    transferable principle: identify which parts of your system must be exact
    and keep them deterministic; reserve agents/LLMs for the genuinely
    judgment-requiring parts. Non-determinism is a cost you pay only where it
    buys you something. The confidence is medium because it's partly a vendor
    positioning claim, but the underlying design principle is sound and echoed
    across multiple independent sources.
stance: >-
  Over-agentifying the software stack is a mistake — there are deterministic
  parts you want exact every time, and the right architecture wraps agents
  around a deterministic core rather than replacing it, so 'agent-first' framing
  under-serves real systems
related:
  - INS-260325-D540
  - INS-260325-2DCD
  - INS-260321-C5AA
  - INS-260322-D8C3
  - INS-260327-A9D5
  - INS-260327-BB71
  - INS-260403-4D80
  - INS-260405-F26B
  - INS-260405-E8A1
  - INS-260410-E977
---
The framing pushes back on agent-maximalism. The vendor ecosystem is converging on agentic development environments (ADEs) — tooling built around autonomous agents, with observability, cost-optimization, and performance management layered on. The counter-position: a real software stack has substantial deterministic components — parts you want to behave exactly the same way every time — and forcing those through non-deterministic agents is a category error.

The proposed architecture is a superset: an environment that contains agent frameworks but also handles the deterministic, non-agentic parts of the stack natively, so you can compose agentic and deterministic components together. The point isn't anti-agent (the speaker is 'addicted to autonomous agents') — it's that 'agent-first' under-serves systems where exactness matters, and the right default is agents-around-a-deterministic-core, not agents-everywhere.

This converges with the safety-critical insight from the physical-AI panel (don't let agents write safety-critical code; keep deterministic guardrails) and with Zuhn's own architecture boundary (TypeScript handles deterministic I/O/validation/math; the model handles only semantic reasoning). The transferable principle: identify which parts of your system must be exact and keep them deterministic; reserve agents/LLMs for the genuinely judgment-requiring parts. Non-determinism is a cost you pay only where it buys you something. The confidence is medium because it's partly a vendor positioning claim, but the underlying design principle is sound and echoed across multiple independent sources.
