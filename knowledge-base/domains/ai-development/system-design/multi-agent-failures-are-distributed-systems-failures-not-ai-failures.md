---
id: INS-260627-0F4E
domain: ai-development
topic: system-design
title: 'Multi-agent failures are distributed-systems failures, not AI failures'
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - multi-agent
  - distributed-systems
  - race-conditions
  - production
  - architecture
sources:
  - type: youtube
    title: >-
      From Chaos to Choreography: Multi-Agent Orchestration Patterns That
      Actually Work — Sandipan Bhaumik
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=2czYyrTzILg'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Going from one agent to N agents converts an AI problem into a
    distributed-systems problem whose coordination complexity grows
    quadratically, so the failures are architectural — stale caches, race
    conditions, lost updates — not model errors.
  standard: >-
    A single agent — LLM, prompts, RAG, a few tool calls — demos beautifully and
    runs clean. The moment product asks for five more agents, you inherit
    coordination: Agent A produces what B needs, C waits on both, D mutates
    shared state B is reading, E crashes and takes the workflow down. The number
    of potential connections grows like N(N-1)/2, so five agents is not 5x
    harder than one, it's roughly 25x — each connection is a failure point, a
    race condition, a state-sync problem.


    The author's credit-decisioning system illustrates this: the credit-score
    agent wrote 750 to PostgreSQL, but a caching layer wasn't invalidated, so
    the risk agent read a stale 680 from cache 500ms later and made the wrong
    decision. 20% of decisions had incorrect risk ratings; it took two days to
    find. The bug wasn't in the database, the model, or the prompts — it was an
    architecture with multiple agents, a shared cache, and no coordination on
    invalidation.


    The operational lesson is diagnostic: when a multi-agent system misbehaves,
    stop debugging the model and prompts first. Look for the classic
    distributed-systems failure modes — stale reads, lost updates, partial
    failures, cascading crashes. 'Bad AI doesn't kill multi-agent projects, bad
    architecture does.' Treat the move past one agent as a deliberate crossing
    into distributed-systems territory and bring that discipline before
    deploying.
stance: >-
  When a multi-agent system breaks in production, the root cause is almost
  always missing distributed-systems engineering, not a bad model or prompt.
related:
  - INS-260410-77E5
  - INS-260410-7ED2
  - INS-260410-1ED3
  - INS-260411-BCB0
  - PRI-260411-78CD
  - INS-260605-5404
  - PRI-260328-1ED1
  - INS-260605-A803
  - INS-260625-0021
  - INS-260327-C1A4
---
A single agent — LLM, prompts, RAG, a few tool calls — demos beautifully and runs clean. The moment product asks for five more agents, you inherit coordination: Agent A produces what B needs, C waits on both, D mutates shared state B is reading, E crashes and takes the workflow down. The number of potential connections grows like N(N-1)/2, so five agents is not 5x harder than one, it's roughly 25x — each connection is a failure point, a race condition, a state-sync problem.

The author's credit-decisioning system illustrates this: the credit-score agent wrote 750 to PostgreSQL, but a caching layer wasn't invalidated, so the risk agent read a stale 680 from cache 500ms later and made the wrong decision. 20% of decisions had incorrect risk ratings; it took two days to find. The bug wasn't in the database, the model, or the prompts — it was an architecture with multiple agents, a shared cache, and no coordination on invalidation.

The operational lesson is diagnostic: when a multi-agent system misbehaves, stop debugging the model and prompts first. Look for the classic distributed-systems failure modes — stale reads, lost updates, partial failures, cascading crashes. 'Bad AI doesn't kill multi-agent projects, bad architecture does.' Treat the move past one agent as a deliberate crossing into distributed-systems territory and bring that discipline before deploying.
