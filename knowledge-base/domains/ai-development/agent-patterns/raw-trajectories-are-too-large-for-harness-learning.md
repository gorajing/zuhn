---
id: INS-260605-2ECD
domain: ai-development
topic: agent-patterns
title: Raw trajectories are too large for harness learning
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - agent-traces
  - experience-observability
  - compression
  - self-improvement
  - memory
sources:
  - type: blog
    title: >-
      Agentic Harness Engineering: Observability-Driven Automatic Evolution of
      Coding-Agent Harnesses
    url: 'https://arxiv.org/abs/2604.25850'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: Don't store traces as memory; distill traces into navigable evidence.
  standard: >-
    AHE's second pillar, experience observability, addresses the problem that
    millions of trajectory tokens bury the signal needed to improve a harness.
    The paper proposes a layered, drill-down evidence corpus rather than feeding
    raw logs back to the evolving agent.


    This maps directly onto Zuhn. Session transcripts should not become
    unfiltered memory sludge. The harness should convert runs into tiers:
    outcome summary, failure taxonomy, decisive excerpts, changed files,
    verification results, and reusable patterns. The agent can then drill down
    when needed without flooding the context window.
stance: >-
  Harness learning should compress raw agent traces into layered, drill-down
  evidence because full trajectories bury the actionable signal the next agent
  needs.
related:
  - INS-260405-6C88
  - INS-260410-78F4
  - INS-260605-C0BF
  - INS-260605-BB4B
  - INS-260605-A557
---
AHE's second pillar, experience observability, addresses the problem that millions of trajectory tokens bury the signal needed to improve a harness. The paper proposes a layered, drill-down evidence corpus rather than feeding raw logs back to the evolving agent.

This maps directly onto Zuhn. Session transcripts should not become unfiltered memory sludge. The harness should convert runs into tiers: outcome summary, failure taxonomy, decisive excerpts, changed files, verification results, and reusable patterns. The agent can then drill down when needed without flooding the context window.
