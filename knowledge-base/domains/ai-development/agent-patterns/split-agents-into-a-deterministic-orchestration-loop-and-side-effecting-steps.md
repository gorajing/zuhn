---
id: INS-260627-2524
domain: ai-development
topic: agent-patterns
title: Split agents into a deterministic orchestration loop and side-effecting steps
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - durable-execution
  - orchestration
  - determinism
  - workflow-pattern
  - agent-architecture
sources:
  - type: youtube
    title: >-
      Building durable Agents with Workflow DevKit & AI SDK - Peter Wielander,
      Vercel
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=kmV-qg4uoNI'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Keep the orchestration layer deterministic so it can be replayed, and
    confine all side effects to retryable steps.
  standard: >-
    The workflow pattern separates an agent into two distinct kinds of code: an
    orchestration layer (the LLM-call/tool-call loop) and steps (the actual LLM
    calls and tool executions). The orchestration layer must be deterministic —
    it gets replayed every time the workflow resumes, so any non-determinism or
    side effect there would corrupt state. Steps, by contrast, are *meant* to
    have side effects; their inputs and outputs are cached so they run exactly
    once and can be retried in isolation on failure.


    This boundary is the load-bearing idea. Because the orchestration is
    deterministic, the runtime can re-enter the workflow at any line, rehydrate
    state from cached step outputs, and continue without re-consuming resources.
    Vercel enforces the boundary at the compiler level: the `use workflow`
    directive bundles the orchestration code separately and refuses to compile
    if it imports anything with side effects. That moves a class of subtle
    distributed-systems bugs from runtime to compile time — an instance of
    making invalid states unrepresentable.


    The corollary is that responsibility for correctness shifts to the developer
    at the step level: since steps can fail halfway and be retried, each must be
    idempotent and transactional. The framework guarantees the orchestration has
    no side effects, but it cannot guarantee your step won't double-charge a
    card if it isn't written to be re-runnable.
stance: >-
  The agent loop should be deterministic and side-effect-free while all real I/O
  is pushed into isolated, individually-retryable steps.
related:
  - INS-260625-9C3B
  - INS-260627-0A69
  - INS-260625-FA31
  - INS-260625-36DF
  - INS-260522-2CE8
---
The workflow pattern separates an agent into two distinct kinds of code: an orchestration layer (the LLM-call/tool-call loop) and steps (the actual LLM calls and tool executions). The orchestration layer must be deterministic — it gets replayed every time the workflow resumes, so any non-determinism or side effect there would corrupt state. Steps, by contrast, are *meant* to have side effects; their inputs and outputs are cached so they run exactly once and can be retried in isolation on failure.

This boundary is the load-bearing idea. Because the orchestration is deterministic, the runtime can re-enter the workflow at any line, rehydrate state from cached step outputs, and continue without re-consuming resources. Vercel enforces the boundary at the compiler level: the `use workflow` directive bundles the orchestration code separately and refuses to compile if it imports anything with side effects. That moves a class of subtle distributed-systems bugs from runtime to compile time — an instance of making invalid states unrepresentable.

The corollary is that responsibility for correctness shifts to the developer at the step level: since steps can fail halfway and be retried, each must be idempotent and transactional. The framework guarantees the orchestration has no side effects, but it cannot guarantee your step won't double-charge a card if it isn't written to be re-runnable.
