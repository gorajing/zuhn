---
id: INS-260625-3EE6
domain: ai-development
topic: agent-patterns
title: Models can edit their own tools but cannot design them from scratch
actionability: immediate
confidence: medium
shelf_life: time-sensitive
status: active
tags:
  - self-improving-systems
  - agent-design
  - tool-use
  - harness-design
sources:
  - type: youtube
    title: >-
      When AI Agents Run Businesses — Lukas Petersson and Axel Backlund of Andon
      Labs
    author: Latent Space
    url: 'https://www.youtube.com/watch?v=T8u7wOXhDb0'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Give a model a baseline set of tools and it will sensibly add or drop ones
    it under-uses; ask it to build its toolset from scratch and it
    over-engineers and fails to iterate.
  standard: >-
    Andon Labs has tested self-modifying harnesses (letting a model read its own
    transcripts and rewrite its system prompt and tools) and found a consistent
    asymmetry: models are weak at understanding what tools they need to succeed
    at a task when starting from nothing, but reasonably good at modifying a
    provided baseline — noticing an unused tool or a missing one and adjusting.
    Asked to build, say, an inventory system from scratch, models default to
    elaborate schemas and unnecessary complexity rather than the continuous,
    minimal iteration a human would do. The practical guidance for agent and
    harness builders: seed agents with a deliberately minimal, self-descriptive
    baseline toolset and let them adapt it, rather than expecting zero-to-one
    tool design. The team marks this as 'very likely to change,' so it is a
    snapshot of current capability rather than a permanent limit — hence
    time-sensitive.
stance: >-
  Current models are good at iterating on an existing toolset for themselves but
  bad at knowing which tools they need from zero, so they over-engineer.
related:
  - INS-260322-A367
  - INS-260327-FDF4
  - INS-260328-3446
  - INS-260410-1B17
  - INS-260410-E4C4
  - INS-260501-17BB
  - INS-260501-35E3
  - INS-260505-1684
  - INS-260514-AE82
  - INS-260605-E9E2
---
Andon Labs has tested self-modifying harnesses (letting a model read its own transcripts and rewrite its system prompt and tools) and found a consistent asymmetry: models are weak at understanding what tools they need to succeed at a task when starting from nothing, but reasonably good at modifying a provided baseline — noticing an unused tool or a missing one and adjusting. Asked to build, say, an inventory system from scratch, models default to elaborate schemas and unnecessary complexity rather than the continuous, minimal iteration a human would do. The practical guidance for agent and harness builders: seed agents with a deliberately minimal, self-descriptive baseline toolset and let them adapt it, rather than expecting zero-to-one tool design. The team marks this as 'very likely to change,' so it is a snapshot of current capability rather than a permanent limit — hence time-sensitive.
