---
id: INS-260409-0EEE
domain: ai-development
topic: system-building
title: >-
  A basic LLM-wiki can be bootstrapped in about an hour with Claude Code and a
  schema file
actionability: immediate
confidence: medium
shelf_life: time-sensitive
status: active
tags:
  - bootstrap
  - claude-code
  - prototyping
  - schema
  - obsidian
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
    Prototyping a basic LLM-wiki in Claude Code takes about an hour — the scarce
    resource is knowing what to build it for.
  standard: >-
    The video builds a working LLM-wiki in Claude Code with Opus 4.6 in roughly
    an hour. The steps: feed Claude the Karpathy tweets and the schema plan,
    enter plan mode, create directory structure, copy transcript files into
    raw/, write the CLAUDE.md schema file describing Obsidian-style wiki links
    and conventions, seed concept pages for the domain's major axes (in the
    demo: market structure, strategy execution, psychology), create the wiki
    index, run two sub-agents in parallel to ingest the eight raw sources and
    generate summaries plus concept updates, and open in Obsidian for
    visualization. Because the pattern is so cheap to spin up, the scarce
    resource is no longer engineering effort — it is deciding what domain
    deserves a persistent compounding knowledge base, and committing to feed it
    sources for months.
stance: >-
  The LLM-wiki pattern is cheap enough to prototype in a single hour-long Claude
  Code session, which means the bottleneck is deciding what to build a wiki for,
  not building it.
related:
  - INS-260409-5C6B
  - INS-260409-654B
  - INS-260409-212F
  - INS-260329-9A42
  - INS-260330-2B45
---
The video builds a working LLM-wiki in Claude Code with Opus 4.6 in roughly an hour. The steps: feed Claude the Karpathy tweets and the schema plan, enter plan mode, create directory structure, copy transcript files into raw/, write the CLAUDE.md schema file describing Obsidian-style wiki links and conventions, seed concept pages for the domain's major axes (in the demo: market structure, strategy execution, psychology), create the wiki index, run two sub-agents in parallel to ingest the eight raw sources and generate summaries plus concept updates, and open in Obsidian for visualization. Because the pattern is so cheap to spin up, the scarce resource is no longer engineering effort — it is deciding what domain deserves a persistent compounding knowledge base, and committing to feed it sources for months.
