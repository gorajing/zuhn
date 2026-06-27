---
id: INS-260605-D404
domain: ai-development
topic: system-design
title: Retrieval is only the first step of a four-step knowledge loop
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - rag
  - mcp
  - retrieval
  - evals
  - architecture
sources:
  - type: youtube
    title: >-
      Demand-Driven Context: A Methodology for Coherent Knowledge Bases Through
      Agent Failure
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=_QAVExf_1uw'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Fetching the document is step one; what the agent does when the document is
    missing or wrong is the part RAG/MCP architectures omit.
  standard: >-
    The $9B retrieval market optimizes the wrong boundary: it gets data out of
    the monolith and hands it to the agent, then stops. But a competent new
    employee who finds a doc unhelpful doesn't stop — they keep asking
    questions, solve the problem, and add knowledge back. The full loop is four
    steps: (1) retrieve from the monolith, (2) discover what's missing or
    untrustworthy, (3) demand and receive the gap-filling answers from a human,
    (4) curate the result back into reusable context. A compounding problem the
    speaker flags: engineering teams plug in MCP servers and check only whether
    output appears, never whether it's correct — 'nobody does evals' in
    engineering the way ML teams do. So undeterministic, unreliable, untested
    retrieval output gets trusted by default, and 70-90% of the time the human
    ends up doing data-entry to compensate. Treating retrieval as the whole
    solution rather than one-quarter of it is why high MCP-server counts
    (10-20+) don't move delivery metrics.
stance: >-
  RAG and MCP solve only retrieval and stop there, missing the discovery,
  gap-filling, and curation steps that actually create value.
related:
  - INS-260605-610E
  - INS-260627-E831
  - INS-260625-3866
  - INS-260625-BCD8
  - INS-260405-F26B
---
The $9B retrieval market optimizes the wrong boundary: it gets data out of the monolith and hands it to the agent, then stops. But a competent new employee who finds a doc unhelpful doesn't stop — they keep asking questions, solve the problem, and add knowledge back. The full loop is four steps: (1) retrieve from the monolith, (2) discover what's missing or untrustworthy, (3) demand and receive the gap-filling answers from a human, (4) curate the result back into reusable context. A compounding problem the speaker flags: engineering teams plug in MCP servers and check only whether output appears, never whether it's correct — 'nobody does evals' in engineering the way ML teams do. So undeterministic, unreliable, untested retrieval output gets trusted by default, and 70-90% of the time the human ends up doing data-entry to compensate. Treating retrieval as the whole solution rather than one-quarter of it is why high MCP-server counts (10-20+) don't move delivery metrics.
