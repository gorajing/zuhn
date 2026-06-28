---
id: INS-260626-EDB3
domain: ai-development
topic: agent-evals
title: 'The hard part of an eval platform is the trace data layer, not the UI'
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - evals
  - systems-design
  - traces
  - data-infrastructure
  - observability
sources:
  - type: youtube
    title: 'Why building eval platforms is hard — Phil Hetzel, Braintrust'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=_fQ7Z_Wfouk'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Anyone can vibe-code the eval UI; the real engineering moat is a data layer
    that handles huge, unstructured, high-velocity agent traces under two
    conflicting query patterns.
  standard: >-
    Hetzel's central reframe: measuring agent quality is a systems problem, not
    a UI/UX problem. The UI of evals — a for-loop, some scores, a table — is
    easy to generate. What breaks teams is the data layer. Agent traces are
    unlike normal application traces: they are semi-structured to unstructured,
    dominated by raw text, and enormous (individual spans of 10–20MB versus the
    usual few kilobytes), arriving at high velocity because production usage is
    heavy. Cramming a 1GB trace into a Postgres row creates severe performance
    problems.


    Worse, you must serve two conflicting query patterns at once: very
    low-latency ingest so users can instantly see their traces, and a separate
    persistence layer for aggregate analytics across millions of traces,
    including full-text search over all that text. Braintrust's earlier stack
    stitched an open-source warehouse to in-browser DuckDB via a hated
    domain-specific language (BTQL), and it failed for text-heavy customers like
    Notion. None of these constraints is individually novel, but together they
    make a genuinely unique systems problem — which is exactly why 'just
    vibe-code Braintrust' underestimates the work by an order of magnitude.
stance: >-
  The defensible difficulty in building an eval platform is the systems problem
  of ingesting and querying agent traces, not the UI, which is now trivial to
  vibe-code.
related:
  - INS-260625-FDA1
  - INS-260627-115C
  - PRI-260406-28E1
  - INS-260628-8FE6
  - INS-260626-E253
---
Hetzel's central reframe: measuring agent quality is a systems problem, not a UI/UX problem. The UI of evals — a for-loop, some scores, a table — is easy to generate. What breaks teams is the data layer. Agent traces are unlike normal application traces: they are semi-structured to unstructured, dominated by raw text, and enormous (individual spans of 10–20MB versus the usual few kilobytes), arriving at high velocity because production usage is heavy. Cramming a 1GB trace into a Postgres row creates severe performance problems.

Worse, you must serve two conflicting query patterns at once: very low-latency ingest so users can instantly see their traces, and a separate persistence layer for aggregate analytics across millions of traces, including full-text search over all that text. Braintrust's earlier stack stitched an open-source warehouse to in-browser DuckDB via a hated domain-specific language (BTQL), and it failed for text-heavy customers like Notion. None of these constraints is individually novel, but together they make a genuinely unique systems problem — which is exactly why 'just vibe-code Braintrust' underestimates the work by an order of magnitude.
