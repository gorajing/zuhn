---
id: INS-260627-79FC
domain: ai-development
topic: architecture
title: Make browser-agent modules reflect trust boundaries
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - architecture
  - browser-agents
  - security
  - modularity
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
    Trust-sensitive agent systems should make dependency direction match
    authority boundaries.
  standard: >-
    peerd's module map separates provider adapters, egress/security, execution
    sandboxes, runtime orchestration, and distributed features, with lower
    capability layers not depending upward on the orchestrator. That makes
    security review less ambiguous: provider code receives fetch/secret access
    by injection, the runtime composes capabilities, and distributed features
    sit above rather than inside the single-agent loop.


    The tradeoff is more boilerplate and public API surface than a
    feature-folder layout. But for agent systems that mix secrets, browser
    state, sandboxed code, and peer communication, the auditability is worth it.
    For Zuhn, the analogous lesson is to keep ingest/extract/learn/AgentRun
    boundaries visible as modules and resist convenience imports that let
    high-authority layers reach raw source or credentialed services directly.
stance: >-
  A browser-agent architecture is easier to audit when provider, egress, engine,
  runtime, and distributed layers are separated by dependency direction rather
  than grouped by UI feature.
related:
  - INS-260403-16A7
  - INS-260410-761E
  - INS-260605-C775
  - INS-260627-41C1
  - INS-260627-B7F7
  - INS-260605-2D9B
---
peerd's module map separates provider adapters, egress/security, execution sandboxes, runtime orchestration, and distributed features, with lower capability layers not depending upward on the orchestrator. That makes security review less ambiguous: provider code receives fetch/secret access by injection, the runtime composes capabilities, and distributed features sit above rather than inside the single-agent loop.

The tradeoff is more boilerplate and public API surface than a feature-folder layout. But for agent systems that mix secrets, browser state, sandboxed code, and peer communication, the auditability is worth it. For Zuhn, the analogous lesson is to keep ingest/extract/learn/AgentRun boundaries visible as modules and resist convenience imports that let high-authority layers reach raw source or credentialed services directly.
