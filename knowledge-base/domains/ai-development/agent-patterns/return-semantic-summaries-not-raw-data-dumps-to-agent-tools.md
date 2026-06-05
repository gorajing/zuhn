---
id: INS-260605-DC50
domain: ai-development
topic: agent-patterns
title: 'Return semantic summaries, not raw data dumps, to agent tools'
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - context-engineering
  - tool-design
  - mcp
  - token-efficiency
sources:
  - type: youtube
    title: >-
      Building Agent Interfaces: Lessons from Chrome DevTools (MCP) for Agents —
      Michael Hablich, Google
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=_B4Pv9ttFgY'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Point the agent at the right sentence instead of forcing it to read the
    entire book.
  standard: >-
    Chrome DevTools initially threw 50,000-line, multi-megabyte JSON trace files
    at agents and watched them blow through the context window into the 'dump
    zone' where reasoning collapses. The fix was to make the performance-tracing
    endpoint return markdown semantic summaries — surfacing the metrics that
    matter (LCP, INP, CLS) instead of the raw trace. The agent still has an
    option to fetch the raw data for post-processing, but the default response
    is the distilled signal.


    The governing analogy: don't force the agent to read the entire book, point
    it at the right sentence. Raw data assumes the model will reason its way to
    the signal; in practice the volume destroys the reasoning. This inverts a
    tempting engineering instinct ('models are machines, just give them
    everything') that Hablich explicitly calls out as wrong.


    The broader pattern is that the interface, not the model, owns the
    compression. Any tool that returns large structured artifacts — logs,
    traces, ASTs, query results — should default to a summarized view and make
    the raw payload opt-in. This applies far beyond browser debugging to any MCP
    server or agent tool returning machine-generated bulk data.
stance: >-
  Agent tool endpoints should pre-process raw data into compact semantic
  summaries rather than handing the model the full source artifact.
related:
  - INS-260530-E697
  - INS-260605-6591
  - INS-260501-C59A
  - INS-260524-D5DB
  - INS-260519-08E0
---
Chrome DevTools initially threw 50,000-line, multi-megabyte JSON trace files at agents and watched them blow through the context window into the 'dump zone' where reasoning collapses. The fix was to make the performance-tracing endpoint return markdown semantic summaries — surfacing the metrics that matter (LCP, INP, CLS) instead of the raw trace. The agent still has an option to fetch the raw data for post-processing, but the default response is the distilled signal.

The governing analogy: don't force the agent to read the entire book, point it at the right sentence. Raw data assumes the model will reason its way to the signal; in practice the volume destroys the reasoning. This inverts a tempting engineering instinct ('models are machines, just give them everything') that Hablich explicitly calls out as wrong.

The broader pattern is that the interface, not the model, owns the compression. Any tool that returns large structured artifacts — logs, traces, ASTs, query results — should default to a summarized view and make the raw payload opt-in. This applies far beyond browser debugging to any MCP server or agent tool returning machine-generated bulk data.
