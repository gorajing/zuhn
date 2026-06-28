---
id: INS-260628-0167
domain: ai-development
topic: architecture
title: SPADE pipeline for AI-intensive applications
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - architecture
  - pipeline
  - ai-intensive
  - spade
  - structured-output
sources:
  - type: youtube
    title: Designing AI-Intensive Applications - swyx
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=IHkyFhU6JEY'
date_extracted: '2026-06-28'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Sync the data, Plan and parallel-process, Analyze (reduce many to one),
    Deliver to the user, then Evaluate — a repeatable shape for apps making
    thousands of AI calls.
  standard: >-
    swyx generalizes the architecture of his own AI News product — which he
    rewrote three times for Discord, Reddit, and Twitter scrapes before noticing
    it was always the same process — into the SPADE model for 'AI-intensive
    applications' that make thousands of AI calls to serve a single purpose. The
    stages: Sync (pull in the source data), Plan and parallel-process, Analyze
    (recursively reduce many items down to one synthesized result), Deliver the
    contents to the user, and Evaluate. The recurring
    scrape→plan→summarize→format→evaluate loop he kept rewriting is the concrete
    instance.


    Two AI-engineering refinements fit naturally into the pipeline. The Analyze
    stage can emit a knowledge graph or structured outputs rather than loose
    text, making downstream processing reliable. The Deliver stage can ship
    results as a code artifact — ChatGPT Canvas or Claude Artifacts — instead of
    plain text, which is often a more useful and actionable delivery form than
    prose.


    This is offered explicitly as swyx's 'current hypothesis,' one candidate
    among several (LLM OS, LLM SDLC, building effective agents) for the
    still-undiscovered 'standard model' of AI engineering. Its value is as a
    reusable skeleton: when you notice you're rebuilding the same
    scrape-summarize-deliver loop for a new source, the shape is already known
    and worth factoring out rather than rewriting.
stance: >-
  Applications that make thousands of LLM calls to serve one purpose converge on
  a Sync-Plan-Analyze-Deliver-Evaluate pipeline.
related:
  - INS-260328-A46F
  - INS-260330-A260
  - INS-260501-EC31
  - INS-260323-2E51
  - INS-260327-956D
  - INS-260605-2D70
  - INS-260605-33C0
---
swyx generalizes the architecture of his own AI News product — which he rewrote three times for Discord, Reddit, and Twitter scrapes before noticing it was always the same process — into the SPADE model for 'AI-intensive applications' that make thousands of AI calls to serve a single purpose. The stages: Sync (pull in the source data), Plan and parallel-process, Analyze (recursively reduce many items down to one synthesized result), Deliver the contents to the user, and Evaluate. The recurring scrape→plan→summarize→format→evaluate loop he kept rewriting is the concrete instance.

Two AI-engineering refinements fit naturally into the pipeline. The Analyze stage can emit a knowledge graph or structured outputs rather than loose text, making downstream processing reliable. The Deliver stage can ship results as a code artifact — ChatGPT Canvas or Claude Artifacts — instead of plain text, which is often a more useful and actionable delivery form than prose.

This is offered explicitly as swyx's 'current hypothesis,' one candidate among several (LLM OS, LLM SDLC, building effective agents) for the still-undiscovered 'standard model' of AI engineering. Its value is as a reusable skeleton: when you notice you're rebuilding the same scrape-summarize-deliver loop for a new source, the shape is already known and worth factoring out rather than rewriting.
