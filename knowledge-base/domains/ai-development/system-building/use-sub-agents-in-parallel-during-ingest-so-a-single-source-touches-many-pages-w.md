---
id: INS-260409-086A
domain: ai-development
topic: system-building
title: >-
  Use sub-agents in parallel during ingest so a single source touches many pages
  without context pollution
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - subagents
  - parallel-ingest
  - context-isolation
  - pipeline
sources:
  - type: youtube
    title: 'Karpathy''s LLM Wiki: What It Means & How to Build One'
    author: Onchain AI Garage
    url: 'https://youtu.be/zVEb19AwkqM'
date_extracted: '2026-04-09'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Spawn a subagent per source during ingest so context pollution doesn't
    degrade later items in the queue.
  standard: >-
    In the Claude Code build, two agents run in parallel to ingest the eight raw
    transcript files, generate per-source summaries, and update the concept
    pages. Running ingest in a single long context window is a trap: by source
    five or six, the main agent is carrying so much residue from earlier sources
    that it starts cross-linking poorly, missing contradictions, and
    over-generalizing. A per-source subagent gets a clean context window, does
    its one job (read, summarize, cross-link, flag contradictions), and reports
    back. This is the same pattern Zuhn uses with autoknowledge — spawning one
    agent per source during channel ingestion — and it exists for the same
    reason: isolation prevents context pollution from degrading later items in
    the queue.
stance: >-
  Ingest pipelines should spawn parallel sub-agents per source so each one gets
  a clean context window for reading and cross-referencing, otherwise a long
  ingest queue degrades the quality of later sources.
related:
  - INS-260409-D5BD
  - INS-260410-796F
  - PRI-260409-0156
  - PRI-260406-F8E5
  - INS-260330-19C3
---
In the Claude Code build, two agents run in parallel to ingest the eight raw transcript files, generate per-source summaries, and update the concept pages. Running ingest in a single long context window is a trap: by source five or six, the main agent is carrying so much residue from earlier sources that it starts cross-linking poorly, missing contradictions, and over-generalizing. A per-source subagent gets a clean context window, does its one job (read, summarize, cross-link, flag contradictions), and reports back. This is the same pattern Zuhn uses with autoknowledge — spawning one agent per source during channel ingestion — and it exists for the same reason: isolation prevents context pollution from degrading later items in the queue.
