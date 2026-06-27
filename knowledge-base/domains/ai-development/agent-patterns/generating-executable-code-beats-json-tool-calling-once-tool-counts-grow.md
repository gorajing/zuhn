---
id: INS-260626-AC8E
domain: ai-development
topic: agent-patterns
title: Generating executable code beats JSON tool-calling once tool counts grow
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - tool-calling
  - code-generation
  - agent-architecture
  - latency
  - context-window
sources:
  - type: youtube
    title: 'Code Mode: Let the Code do the Talking - Sunil Pai, Cloudflare'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=8txf05vVVl4'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Replace JSON tool-call round-trips with model-generated code executed in one
    run to get typed APIs, type-checking, looping, state, and parallelism for
    free.
  standard: >-
    Traditional tool calling is fine for a handful of tools on short runs, but
    breaks at scale: stuffing hundreds of tools (Google services, Jira, wiki)
    fills the context, composition gets weird, and each call requires a slow
    back-and-forth with the model. Code Mode flips this — the model generates a
    string of code (typically JavaScript) that the harness runs against the
    environment in a single execution.


    The advantages compound. Code gives you a typed API, type checking, and
    syntax errors the model can react to. Models are trained on terabytes of
    code, so this is in-distribution for them. Crucially, code supplies the
    fundamental capabilities an engineer would use anyway — looping, holding
    state, sequencing, parallelization — so a task that would take eight
    tool-call round trips collapses into one code run executed right next to the
    API surface.


    The practical heuristic: if your agent needs to orchestrate many calls with
    control flow between them, stop serializing JSON exchanges and let the model
    emit code instead. The round-trip tax is the real bottleneck, not the
    per-call cost.
stance: >-
  Having an agent write and run code in one execution outperforms JSON tool-call
  round-trips as soon as you exceed a few dozen tools.
related:
  - INS-260410-CD01
  - INS-260410-01BC
  - INS-260605-D0A0
  - INS-260625-2906
  - INS-260626-5671
  - INS-260626-8116
  - INS-260626-2F2E
  - INS-260626-9AEB
  - INS-260626-5D7C
  - INS-260627-6ACC
---
Traditional tool calling is fine for a handful of tools on short runs, but breaks at scale: stuffing hundreds of tools (Google services, Jira, wiki) fills the context, composition gets weird, and each call requires a slow back-and-forth with the model. Code Mode flips this — the model generates a string of code (typically JavaScript) that the harness runs against the environment in a single execution.

The advantages compound. Code gives you a typed API, type checking, and syntax errors the model can react to. Models are trained on terabytes of code, so this is in-distribution for them. Crucially, code supplies the fundamental capabilities an engineer would use anyway — looping, holding state, sequencing, parallelization — so a task that would take eight tool-call round trips collapses into one code run executed right next to the API surface.

The practical heuristic: if your agent needs to orchestrate many calls with control flow between them, stop serializing JSON exchanges and let the model emit code instead. The round-trip tax is the real bottleneck, not the per-call cost.
