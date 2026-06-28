---
id: INS-260628-5BC9
domain: ai-development
topic: agent-patterns
title: >-
  Layer the knowledge graph so agents retrieve at the minimum altitude a task
  needs
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - knowledge-graph
  - retrieval
  - agents
  - graph-traversal
  - token-cost
  - context-management
sources:
  - type: youtube
    title: >-
      Multi Agent AI and Network Knowledge Graphs for Change — Ola Mabadeje,
      Cisco
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=m0dxZ-NDKHo'
date_extracted: '2026-06-28'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Cisco's network knowledge graph is layered (raw config → data plane →
    control plane) so an agent runs a config-drift test by hitting only the
    raw-config layer, while a reachability test pulls multiple layers.
  standard: >-
    A flat knowledge graph forces every query to reason over the whole
    structure, which is exactly what blew up Cisco's token budget in their first
    RAG attempt. They redesigned the graph in explicit layers mirroring the
    domain — raw configuration files at the bottom, then data-plane, then
    control-plane state. Each agent task maps to a known depth: a
    configuration-drift comparison goes straight to the raw-config layer and
    stops; a reachability test needs raw-config plus data-plane plus
    control-plane. The agent reads the request, infers the required altitude,
    and pulls only those layers.


    This is a structural answer to the latency-vs-completeness tradeoff in
    agentic traversal: instead of trusting the agent to know when to stop
    exploring, you encode stopping points into the graph's topology. The
    retrieval cost of a task becomes bounded by its semantic depth rather than
    the graph's total size. The design lesson generalizes beyond networks — any
    domain with a natural abstraction hierarchy (call stacks, org charts,
    dependency trees) can be layered so agents pay only for the resolution the
    question demands.
stance: >-
  Structuring a knowledge graph in layers lets agents descend only as deep as
  the task requires, cutting traversal cost.
related:
  - INS-260327-73BE
  - INS-260628-4BA2
  - INS-260626-78D1
  - INS-260628-ECEB
  - INS-260625-0141
  - INS-260330-AE16
---
A flat knowledge graph forces every query to reason over the whole structure, which is exactly what blew up Cisco's token budget in their first RAG attempt. They redesigned the graph in explicit layers mirroring the domain — raw configuration files at the bottom, then data-plane, then control-plane state. Each agent task maps to a known depth: a configuration-drift comparison goes straight to the raw-config layer and stops; a reachability test needs raw-config plus data-plane plus control-plane. The agent reads the request, infers the required altitude, and pulls only those layers.

This is a structural answer to the latency-vs-completeness tradeoff in agentic traversal: instead of trusting the agent to know when to stop exploring, you encode stopping points into the graph's topology. The retrieval cost of a task becomes bounded by its semantic depth rather than the graph's total size. The design lesson generalizes beyond networks — any domain with a natural abstraction hierarchy (call stacks, org charts, dependency trees) can be layered so agents pay only for the resolution the question demands.
