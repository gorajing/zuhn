---
id: INS-260625-019F
domain: ai-development
topic: system-building
title: 'Telemetry, not source code, is the audit record for AI agents'
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - observability
  - telemetry
  - agents
  - opentelemetry
  - tracing
sources:
  - type: youtube
    title: 'LLM Observability, Evaluation, Experimentation Platform — Dat Ngo, Arize'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=JsCCrBF7F1g'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Code no longer documents agent behavior at runtime — only telemetry
    (traces/spans) does, so observability must be instrumentation-first.
  standard: >-
    In deterministic software, you can often reason about what a program did by
    reading its code, because the same inputs reliably produce the same path.
    Agents break this: the LLM decides which branches, tool calls, and loops to
    take at runtime, so the code describes the space of possibilities but not
    the actual execution. Ngo's framing is that 'code doesn't audit agents or
    harnesses — it's the telemetry that does that.' A trace/span is the audit
    record of what the agent actually did on a given run.


    The practical consequence is that observability cannot be bolted on after
    the fact by reading logs or code; it must be designed in as structured
    instrumentation. Arize standardizes on OpenTelemetry (Otel) so that traces
    and spans are framework-agnostic — an auto-instrumenter adds 'one line of
    code' that captures what happens inside a given SDK or framework. Beyond raw
    traces, observability spans multiple layers: sessions (the back-and-forth
    conversational state), runs, and distributional views across all
    instantiations of an agent.


    For anyone building agents, the takeaway is to treat telemetry as the system
    of record from day one, not an afterthought. If you can't reconstruct what
    the agent did from your traces, you have no audit trail at all — reading the
    code won't tell you, because the code didn't decide.
stance: >-
  In non-deterministic AI systems, traces and spans — not the source code — are
  the only faithful record of what the system actually did.
related:
  - INS-260327-5EEA
  - INS-260423-FF52
  - INS-260605-E9A6
  - INS-260605-809A
  - INS-260605-8B25
  - INS-260605-159E
  - INS-260625-1830
  - INS-260605-A03E
  - INS-260626-6F8E
---
In deterministic software, you can often reason about what a program did by reading its code, because the same inputs reliably produce the same path. Agents break this: the LLM decides which branches, tool calls, and loops to take at runtime, so the code describes the space of possibilities but not the actual execution. Ngo's framing is that 'code doesn't audit agents or harnesses — it's the telemetry that does that.' A trace/span is the audit record of what the agent actually did on a given run.

The practical consequence is that observability cannot be bolted on after the fact by reading logs or code; it must be designed in as structured instrumentation. Arize standardizes on OpenTelemetry (Otel) so that traces and spans are framework-agnostic — an auto-instrumenter adds 'one line of code' that captures what happens inside a given SDK or framework. Beyond raw traces, observability spans multiple layers: sessions (the back-and-forth conversational state), runs, and distributional views across all instantiations of an agent.

For anyone building agents, the takeaway is to treat telemetry as the system of record from day one, not an afterthought. If you can't reconstruct what the agent did from your traces, you have no audit trail at all — reading the code won't tell you, because the code didn't decide.
