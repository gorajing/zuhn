---
id: INS-260628-72F5
domain: ai-development
topic: system-design
title: Keep the agentic-reasoning layer separate from the distributed-scaling layer
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - system-design
  - separation-of-concerns
  - agentic-architecture
  - scalability
  - team-structure
sources:
  - type: youtube
    title: 'Building an Agentic Platform — Ben Kus, CTO Box'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=12v5S1n1eOY'
date_extracted: '2026-06-28'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Let one person reason about the intelligent agentic workflow and another
    reason about scaling to 100M docs/day — keep the two concerns distinct.
  standard: >-
    Kus stresses that the agentic framework (an intelligent directed graph where
    models power each step toward a task) is independent of high-scale
    distributed-system design — and that both matter. At one moment you process
    a single document with maximum care; at another you process 100 million
    documents in a day. He found it 'very helpful' to keep these distinct:
    someone who thinks about the agentic framework, and someone who thinks about
    how to scale a generic process.


    This is a separation-of-concerns claim with an organizational corollary.
    Conflating reasoning quality with throughput engineering produces systems
    where neither is clean — scaling logic leaks into the agent graph and vice
    versa. By decoupling them, each layer can evolve on its own cadence (the
    agent graph by editing nodes; the scaling layer by standard
    distributed-systems techniques), and teams can specialize. The medium
    confidence reflects that this is Box's experience at exabyte scale; smaller
    systems may not yet feel the pressure to split the concerns, but the
    principle scales down cleanly.
stance: >-
  Agentic orchestration and high-scale distributed processing should be designed
  and owned as two distinct systems, not entangled.
related:
  - INS-260605-9976
  - INS-260626-05D4
  - INS-260326-7F79
  - PRI-260407-D1AD
  - INS-260326-2410
  - INS-260626-2170
---
Kus stresses that the agentic framework (an intelligent directed graph where models power each step toward a task) is independent of high-scale distributed-system design — and that both matter. At one moment you process a single document with maximum care; at another you process 100 million documents in a day. He found it 'very helpful' to keep these distinct: someone who thinks about the agentic framework, and someone who thinks about how to scale a generic process.

This is a separation-of-concerns claim with an organizational corollary. Conflating reasoning quality with throughput engineering produces systems where neither is clean — scaling logic leaks into the agent graph and vice versa. By decoupling them, each layer can evolve on its own cadence (the agent graph by editing nodes; the scaling layer by standard distributed-systems techniques), and teams can specialize. The medium confidence reflects that this is Box's experience at exabyte scale; smaller systems may not yet feel the pressure to split the concerns, but the principle scales down cleanly.
