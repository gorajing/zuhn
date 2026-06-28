---
id: INS-260626-E926
domain: ai-development
topic: limitations
title: >-
  Context rot degrades performance around 200k tokens, far before the model's
  window limit
actionability: immediate
confidence: high
shelf_life: time-sensitive
status: active
tags:
  - context-window
  - long-context
  - lost-in-the-middle
  - context-engineering
  - model-limitations
sources:
  - type: youtube
    title: >-
      Full Workshop: Build Your Own Deep Research Agents - Louis-François
      Bouchard, Paul Iusztin, Samridhi
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=mYSRn6PC1mc'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Treat the context window as a budget that rots long before its nominal
    limit, and keep it lean and relevant via trimming, summarization, selective
    retrieval, compaction, and delegation to tools or sub-agents.
  standard: >-
    As an agent's context accumulates — system prompt, tool definitions and
    schemas, few-shot examples, retrieved data, conversation history —
    performance degrades in a way the speakers call 'context rot.' Critically,
    this happens much earlier than the headline limit: not at 1M tokens but
    worsening fast after roughly 200k. The cause is rooted in how long-context
    models are trained: they're taught to retrieve a single random fact inserted
    into a large corpus (the needle-in-a-haystack setup), which optimizes for
    pinpoint retrieval but never teaches the model to leverage the whole context
    to answer a question — the 'lost in the middle' problem. Building a training
    set that does teach whole-context reasoning would be prohibitively
    expensive, so the limitation persists.


    The practical consequence is that managing a context budget is a first-class
    engineering job, motivated both by cost (fewer tokens) and by quality
    (better metrics). Their toolkit: trim content, summarize it, retrieve by
    criteria, and study compaction methods (they specifically point to the
    techniques visible in the Claude Code leak). The technique they're most
    interested in is delegation — handing work to tools or sub-agents that each
    carry their own context — which is what most agent harnesses actually do.


    This is marked time-sensitive because the ~200k inflection point is a moving
    target tied to current model training; the underlying principle (effective
    context is smaller than nominal context, so budget it) is the durable lesson
    even as the specific number shifts.
stance: >-
  LLM output quality degrades well before the advertised context-window limit —
  roughly around 200k tokens — so engineers must actively manage a lean context
  budget rather than trusting the million-token window.
related:
  - INS-260410-761B
  - PRI-260411-9CB1
  - INS-260605-7B4C
  - INS-260625-1CB8
  - INS-260626-59D9
  - INS-260627-266C
  - INS-260628-0EB2
---
As an agent's context accumulates — system prompt, tool definitions and schemas, few-shot examples, retrieved data, conversation history — performance degrades in a way the speakers call 'context rot.' Critically, this happens much earlier than the headline limit: not at 1M tokens but worsening fast after roughly 200k. The cause is rooted in how long-context models are trained: they're taught to retrieve a single random fact inserted into a large corpus (the needle-in-a-haystack setup), which optimizes for pinpoint retrieval but never teaches the model to leverage the whole context to answer a question — the 'lost in the middle' problem. Building a training set that does teach whole-context reasoning would be prohibitively expensive, so the limitation persists.

The practical consequence is that managing a context budget is a first-class engineering job, motivated both by cost (fewer tokens) and by quality (better metrics). Their toolkit: trim content, summarize it, retrieve by criteria, and study compaction methods (they specifically point to the techniques visible in the Claude Code leak). The technique they're most interested in is delegation — handing work to tools or sub-agents that each carry their own context — which is what most agent harnesses actually do.

This is marked time-sensitive because the ~200k inflection point is a moving target tied to current model training; the underlying principle (effective context is smaller than nominal context, so budget it) is the durable lesson even as the specific number shifts.
