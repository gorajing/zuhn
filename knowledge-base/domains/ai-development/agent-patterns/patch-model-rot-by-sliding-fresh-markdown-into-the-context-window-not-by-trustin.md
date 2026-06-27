---
id: INS-260626-9A2A
domain: ai-development
topic: agent-patterns
title: >-
  Patch model rot by sliding fresh markdown into the context window, not by
  trusting the model's training snapshot
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - model-rot
  - context-engineering
  - documentation
  - coding-agents
  - retrieval
sources:
  - type: youtube
    title: 'LLM codegen fails and how to stop ''em — Danilo Campos, PostHog'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=juoNbJiZUi0'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    A trained model is a 6-18 month-old snapshot, so serve it current docs from
    your own site rather than letting it invent APIs and keys.
  standard: >-
    Models are expensive snapshots of the web as it was months ago, which is
    fine for slow-moving knowledge but disastrous for a fast-changing API or
    SDK: a primitive agent asked to 'integrate PostHog' would confidently
    fabricate keys, patterns, and APIs that never existed. PostHog's fix is to
    maintain documentation that is hot off the presses on their own site and let
    the agent select the relevant fresh markdown into its context before acting.


    The non-obvious move is preferring raw context-stuffing over RAG: with
    modern context windows you can often beat a retrieval pipeline by just
    shoving the right fresh markdown files in and 'patching the holes,' exposing
    a tool that lets the agent pick from a menu of current docs keyed to the
    framework and language it detected. The strategic lesson is ownership of the
    failure: even though the bad integration 'wasn't our fault,' it was
    PostHog's problem, so whoever owns the API must own supplying correct,
    up-to-date context to the agents consuming it.
stance: >-
  For fast-moving software projects, feeding the agent fresh hand-maintained
  docs at inference time beats relying on the model's stale internal knowledge
  or even RAG.
related:
  - INS-260625-F573
  - INS-260625-6AC1
  - INS-260627-C112
  - INS-260626-742C
  - INS-260404-CE26
---
Models are expensive snapshots of the web as it was months ago, which is fine for slow-moving knowledge but disastrous for a fast-changing API or SDK: a primitive agent asked to 'integrate PostHog' would confidently fabricate keys, patterns, and APIs that never existed. PostHog's fix is to maintain documentation that is hot off the presses on their own site and let the agent select the relevant fresh markdown into its context before acting.

The non-obvious move is preferring raw context-stuffing over RAG: with modern context windows you can often beat a retrieval pipeline by just shoving the right fresh markdown files in and 'patching the holes,' exposing a tool that lets the agent pick from a menu of current docs keyed to the framework and language it detected. The strategic lesson is ownership of the failure: even though the bad integration 'wasn't our fault,' it was PostHog's problem, so whoever owns the API must own supplying correct, up-to-date context to the agents consuming it.
