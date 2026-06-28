---
id: INS-260627-F5F2
domain: ai-development
topic: system-building
title: Block by default when the verifier cannot reach a deterministic verdict
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - fail-closed
  - verification
  - human-in-the-loop
  - agent-safety
  - operations
sources:
  - type: blog
    title: >-
      A hardware-safety-gated system for LLM-written native ARTIQ control code
      on a trapped-ion platform
    url: 'https://arxiv.org/html/2606.27231'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    If the simulator sees an unmapped device, unsupported method, or unreachable
    review host, the filter blocks and escalates rather than allowing the
    action.
  standard: >-
    The safety-filter approves only when the AST screen and simulation trace
    produce a deterministic within-bounds result. Unknown devices, unmapped
    operations, simulation failures, and sensitive operations are routed to
    manual review or denied.


    This is a practical rule for production agents: uncertainty in the verifier
    is not a green light. Any harness that defaults to empty, ignores failed
    policy checks, or lets unmodeled effects through will eventually turn
    observability gaps into authority expansion.
stance: >-
  Agent control systems should escalate uncertain side effects to human review
  instead of treating verifier uncertainty as permission.
related:
  - INS-260626-A645
  - INS-260627-B5F2
  - INS-260627-8392
  - INS-260605-4D1D
  - INS-260603-6B3D
---
The safety-filter approves only when the AST screen and simulation trace produce a deterministic within-bounds result. Unknown devices, unmapped operations, simulation failures, and sensitive operations are routed to manual review or denied.

This is a practical rule for production agents: uncertainty in the verifier is not a green light. Any harness that defaults to empty, ignores failed policy checks, or lets unmodeled effects through will eventually turn observability gaps into authority expansion.
