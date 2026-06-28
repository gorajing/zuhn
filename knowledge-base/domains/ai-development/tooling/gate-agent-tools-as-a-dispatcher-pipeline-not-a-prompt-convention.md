---
id: INS-260627-9F3F
domain: ai-development
topic: tooling
title: 'Gate agent tools as a dispatcher pipeline, not a prompt convention'
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - tools
  - agent-harness
  - permissions
  - audit
  - mcp
sources:
  - type: blog
    title: >-
      GitHub - NotASithLord/peerd: The first AI agent harness native to the
      browser. A Chrome/Firefox extension that runs the agent loop in your
      browser — drives your tabs, spins up sandboxed compute (JS notebooks, WASM
      Linux VMs, client-side apps), and shares what it builds peer-to-peer. BYOK
      · no backend · no telemetry.
    url: 'https://github.com/NotASithLord/peerd'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Model-facing tool descriptors should be backed by enforced gates for
    persona, exposure, origin, confirmation, egress, and audit.
  standard: >-
    peerd describes a six-gate dispatcher for tool calls: persona or mode
    policy, exposure filtering, origin/denylist checks, confirmation policy,
    egress control, and audit logging. This is a reusable harness design because
    each gate has a specific failure mode and can be tested independently; the
    model does not get to self-certify that an action is safe.


    The cost is some duplication between prompt/tool metadata and runtime
    policy, plus more surface for false denials when a gate is too coarse. The
    payoff is debuggability: when an agent cannot act, the denial has a named
    layer and lineage instead of becoming an opaque refusal or silent no-op.


    AgentRun should steal the shape for high-risk automations: declare the
    authority boundary as data, log which gate allowed or blocked each mutation,
    and fail closed when the configured gate set is missing.
stance: >-
  Tool safety is more reliable when every call passes through explicit
  dispatcher gates than when the model is merely instructed to use tools
  carefully.
related:
  - INS-260625-A5E7
  - INS-260628-278D
  - INS-260628-2CF1
  - INS-260627-A0EE
  - INS-260605-98BD
---
peerd describes a six-gate dispatcher for tool calls: persona or mode policy, exposure filtering, origin/denylist checks, confirmation policy, egress control, and audit logging. This is a reusable harness design because each gate has a specific failure mode and can be tested independently; the model does not get to self-certify that an action is safe.

The cost is some duplication between prompt/tool metadata and runtime policy, plus more surface for false denials when a gate is too coarse. The payoff is debuggability: when an agent cannot act, the denial has a named layer and lineage instead of becoming an opaque refusal or silent no-op.

AgentRun should steal the shape for high-risk automations: declare the authority boundary as data, log which gate allowed or blocked each mutation, and fail closed when the configured gate set is missing.
