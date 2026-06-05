---
id: INS-260605-7843
domain: ai-development
topic: agent-patterns
title: Bootstrap automated scorers from expert annotations and justifications
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - human-annotation
  - llm-as-judge
  - scoring
  - failure-modes
  - evals
sources:
  - type: youtube
    title: 'How agent o11y differs from traditional o11y — Phil Hetzel, Braintrust'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=XBaznoTRDFI'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Have experts grade agent traces AND write why; then run an LLM over the
    justifications to mine failure modes and generate scalable automated
    scorers.
  standard: >-
    Human annotation is a key engine for building agent quality, but its value
    comes from capturing the reasoning, not just the verdict. The pattern: an
    expert (e.g., a product manager) grades whether the agent did a good or bad
    job on a trace and justifies the grade. Those written justifications become
    training signal — you run an LLM over them to surface the recurring failure
    modes, then encode those modes as automated scoring functions that run at
    scale. This turns a handful of expert judgments into broad, cheap coverage.
    Hetzel also notes a complementary 'unknown unknowns' move: lightweight LLM
    embedding plus clustering over incoming traces to do topic modeling —
    revealing how people actually use the agent, their intent, sentiment, and
    what issues they hit — surfacing problems no predefined score would have
    caught.
stance: >-
  You should have experts grade traces and justify their grades so an LLM can
  convert those justifications into scalable automated scoring functions.
related:
  - INS-260327-9D50
  - INS-260410-AF66
  - INS-260410-A27C
  - INS-260421-E9FC
  - INS-260605-667B
  - INS-260605-36E9
  - INS-260605-780C
  - INS-260605-93B8
  - INS-260605-80D0
  - PRI-260406-3EF8
---
Human annotation is a key engine for building agent quality, but its value comes from capturing the reasoning, not just the verdict. The pattern: an expert (e.g., a product manager) grades whether the agent did a good or bad job on a trace and justifies the grade. Those written justifications become training signal — you run an LLM over them to surface the recurring failure modes, then encode those modes as automated scoring functions that run at scale. This turns a handful of expert judgments into broad, cheap coverage. Hetzel also notes a complementary 'unknown unknowns' move: lightweight LLM embedding plus clustering over incoming traces to do topic modeling — revealing how people actually use the agent, their intent, sentiment, and what issues they hit — surfacing problems no predefined score would have caught.
