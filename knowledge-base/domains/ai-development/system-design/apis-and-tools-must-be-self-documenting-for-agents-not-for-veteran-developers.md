---
id: INS-260605-82BC
domain: ai-development
topic: system-design
title: 'APIs and tools must be self-documenting for agents, not for veteran developers'
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - tool-design
  - api-design
  - function-calling
  - docstrings
  - agent-readiness
sources:
  - type: youtube
    title: >-
      Why (Senior) Engineers Struggle to Build AI Agents — Philipp Schmid,
      Google DeepMind
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=3_gYbhABcAE'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    A 'delete item' endpoint is self-evident to the developer who built it, but
    an agent sees only the function schema and docstring — so tools must be
    written to be legible to a context-free reader.
  standard: >-
    Backend APIs accumulate implicit meaning: a 'delete item by ID' endpoint
    feels self-explanatory to the engineer who spent years on the product API
    and needs no docstring. But an agent never sees the code, the history, or
    the conventions — it sees only function schemas, docstrings, and tool
    definitions. What is obvious to a veteran is opaque to the agent.


    The fix is to build 'agent-ready' tools: self-documenting interfaces with
    explicit semantic descriptions of what each method does, what arguments
    mean, and what happens on failure. Schmid pairs this with 'agents evolve and
    APIs don't' and the closing 'build to delete' / bitter-lesson point:
    software is increasingly disposable, and the same tools and agents will be
    rebuilt many times as models improve. Writing tools for an agent reader —
    and being willing to throw them away — is now part of good interface design
    rather than an afterthought.
stance: >-
  Tools exposed to agents need semantic, self-explaining interfaces with rich
  descriptions because the agent only sees the schema, never the years of
  developer context.
related:
  - INS-260410-60C8
  - PRI-260411-9CB1
  - INS-260605-E06C
  - INS-260410-85AD
  - INS-260625-7A1A
---
Backend APIs accumulate implicit meaning: a 'delete item by ID' endpoint feels self-explanatory to the engineer who spent years on the product API and needs no docstring. But an agent never sees the code, the history, or the conventions — it sees only function schemas, docstrings, and tool definitions. What is obvious to a veteran is opaque to the agent.

The fix is to build 'agent-ready' tools: self-documenting interfaces with explicit semantic descriptions of what each method does, what arguments mean, and what happens on failure. Schmid pairs this with 'agents evolve and APIs don't' and the closing 'build to delete' / bitter-lesson point: software is increasingly disposable, and the same tools and agents will be rebuilt many times as models improve. Writing tools for an agent reader — and being willing to throw them away — is now part of good interface design rather than an afterthought.
