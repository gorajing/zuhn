---
id: INS-260628-0DE5
domain: ai-development
topic: system-building
title: >-
  Convert continuous-world outcomes into structured memory before giving them
  back to agents
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - memory
  - diagnostics
  - agent-architecture
  - structured-feedback
sources:
  - type: blog
    title: >-
      AdsMind: A Physics-Grounded Multi-Agent System for Self-Correcting
      Discovery of Adsorption Configurations on Heterogeneous Catalyst Surfaces
    url: 'https://arxiv.org/html/2606.19152'
date_extracted: '2026-06-28'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    AdsMind's Analyzer turns relaxed trajectories into site types, slip events,
    dissociation flags, adsorption energies, and bond-integrity diagnostics.
  standard: >-
    The LLM planner cannot directly reason over raw atomic trajectories as a
    reliable control signal. AdsMind inserts an Analyzer that converts physical
    simulation output into chemically meaningful diagnostics, then writes those
    diagnostics into the running history that conditions the next planner
    proposal.


    The general architecture pattern is to put a semantic adapter between the
    world and the agent. Raw logs, trajectories, screenshots, or traces should
    be transformed into compact typed records that preserve the
    decision-relevant facts and make invalid states easier to detect.
stance: >-
  Agents become more dependable when messy environment outcomes are translated
  into typed diagnostic records rather than passed back as raw traces.
related:
  - INS-260405-0AE7
  - INS-260628-252F
  - INS-260411-59F7
  - INS-260628-9010
  - INS-260627-8056
  - INS-260412-EE18
---
The LLM planner cannot directly reason over raw atomic trajectories as a reliable control signal. AdsMind inserts an Analyzer that converts physical simulation output into chemically meaningful diagnostics, then writes those diagnostics into the running history that conditions the next planner proposal.

The general architecture pattern is to put a semantic adapter between the world and the agent. Raw logs, trajectories, screenshots, or traces should be transformed into compact typed records that preserve the decision-relevant facts and make invalid states easier to detect.
