---
id: INS-260627-CD65
domain: ai-development
topic: architecture
title: Curating the context window beats enlarging it
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - context-engineering
  - memory
  - agent-performance
  - evals
sources:
  - type: youtube
    title: 'Katelyn Lesse – Evolving Claude APIs for Agents, Anthropic'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=aqW68Is_Kj4'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Anthropic saw a 39% benchmark gain on internal evals by combining a memory
    tool with context editing that clears stale tool results out of the window.
  standard: >-
    The talk's most concrete claim is that combining a memory tool (which keeps
    context outside the window and pulls it back only when relevant) with
    context editing (which strips out old, large tool results that are no longer
    useful) produced a 39% improvement on Anthropic's internal evals. The lesson
    is that what is in the window at any given moment matters more than how big
    the window is. Past tool results in particular consume space without
    improving later responses, so clearing them is nearly free performance.


    For agent builders, this reframes the optimization target: don't reach first
    for a bigger model or a larger window, reach for mechanisms that keep the
    active window dense with currently-relevant context. Larger windows (up to
    1M tokens for some models) and editing tools are complementary — the window
    gives you room to run, and editing keeps that room from filling with noise.
    A system like a personal knowledge base that already practices aggressive
    compression and selective recall is implicitly betting on this same
    principle.
stance: >-
  Actively pruning and recalling context is a higher-leverage performance lever
  than simply growing the context window.
related:
  - INS-260530-C385
  - INS-260625-D1F9
  - INS-260626-2727
  - PRI-260321-14D8
  - INS-260627-84F1
---
The talk's most concrete claim is that combining a memory tool (which keeps context outside the window and pulls it back only when relevant) with context editing (which strips out old, large tool results that are no longer useful) produced a 39% improvement on Anthropic's internal evals. The lesson is that what is in the window at any given moment matters more than how big the window is. Past tool results in particular consume space without improving later responses, so clearing them is nearly free performance.

For agent builders, this reframes the optimization target: don't reach first for a bigger model or a larger window, reach for mechanisms that keep the active window dense with currently-relevant context. Larger windows (up to 1M tokens for some models) and editing tools are complementary — the window gives you room to run, and editing keeps that room from filling with noise. A system like a personal knowledge base that already practices aggressive compression and selective recall is implicitly betting on this same principle.
