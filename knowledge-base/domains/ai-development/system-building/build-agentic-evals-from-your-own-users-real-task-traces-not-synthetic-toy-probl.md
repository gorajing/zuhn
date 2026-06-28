---
id: INS-260625-C69F
domain: ai-development
topic: system-building
title: >-
  Build agentic evals from your own users' real task traces, not synthetic toy
  problems
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - evals
  - ai-agents
  - data-collection
  - coding-agents
  - benchmark-design
sources:
  - type: youtube
    title: 'Evals Are Broken, Use Them Anyway — Ara Khan, Cline'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=QuuIywMG4s8'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Pay users to share real usage, then hand-clean those traces into eval
    tasks—single-turn synthetic benchmarks miss the infinite search space of
    agents.
  standard: >-
    A single-turn LLM eval is easy because the answer space is tiny and binary
    ('how many toes does a cat have'). An agentic task is the opposite: given
    'this MCP server isn't working, make it work,' the agent reads files,
    searches docs, installs an environment, runs scripts, then tests—an
    effectively infinite search space where success also means not breaking
    other things. Because the search space can't be approximated cheaply, the
    eval problems themselves must approximate the real distribution of work.
    Cline solved this by paying users who opted in to share their actual coding
    sessions, parsing that dataset to find the problems people genuinely solve,
    then doing hard manual labor to clean it into runnable tasks. Stanford's
    Terminal-Bench did the analogous thing—89 tasks (race conditions, database
    issues, infra problems) that take a real agent 30–40 minutes, which is
    precisely the signal that they're legitimate. The principle: the validity of
    an agent eval lives in the provenance of its problems, so source them from
    reality and curate by hand rather than generating them.
stance: >-
  Production agent evals should be reconstructed from real user task traces
  because synthetic single-turn benchmarks cannot represent the multi-step,
  infinite search space of agentic work.
related:
  - INS-260327-B17E
  - INS-260402-BF2E
  - INS-260410-9D04
  - INS-260412-2B01
  - INS-260605-36E9
  - INS-260605-A3F4
  - INS-260626-B149
  - INS-260628-2043
  - INS-260628-C95B
  - INS-260625-BB42
---
A single-turn LLM eval is easy because the answer space is tiny and binary ('how many toes does a cat have'). An agentic task is the opposite: given 'this MCP server isn't working, make it work,' the agent reads files, searches docs, installs an environment, runs scripts, then tests—an effectively infinite search space where success also means not breaking other things. Because the search space can't be approximated cheaply, the eval problems themselves must approximate the real distribution of work. Cline solved this by paying users who opted in to share their actual coding sessions, parsing that dataset to find the problems people genuinely solve, then doing hard manual labor to clean it into runnable tasks. Stanford's Terminal-Bench did the analogous thing—89 tasks (race conditions, database issues, infra problems) that take a real agent 30–40 minutes, which is precisely the signal that they're legitimate. The principle: the validity of an agent eval lives in the provenance of its problems, so source them from reality and curate by hand rather than generating them.
