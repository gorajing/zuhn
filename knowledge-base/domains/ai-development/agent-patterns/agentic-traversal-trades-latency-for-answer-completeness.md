---
id: INS-260628-1AF8
domain: ai-development
topic: agent-patterns
title: Agentic traversal trades latency for answer completeness
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - agentic-retrieval
  - mcp
  - graph-rag
  - retrieval
  - latency
sources:
  - type: youtube
    title: 'Context Engineering: Connecting the Dots with Graphs — Stephen Chin, Neo4j'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=LLuKshphGOE'
date_extracted: '2026-06-28'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Fixed two-pass retrieval is fast but shallow; letting an agent iteratively
    traverse the source is slow but far more complete.
  standard: >-
    The talk contrasts two retrieval strategies against the same knowledge
    graph. The first is a fixed two-pass pipeline: a vector lookup finds similar
    nodes, then their neighbors are pulled in as context. It is relatively fast
    but the detail it returns is limited. The second hands an agent (Claude Code
    via a Neo4j MCP cipher server) the ability to query the graph schema, fire
    off multiple queries, traverse, and keep pulling additional context until
    satisfied.


    The agentic approach returned a substantially more detailed and complete
    answer — CVE number, attack type, severity, affected versions, remediation
    guidance — because it could iterate: discover the schema, query, then
    traverse again based on what it found. The cost is latency and more model
    calls; the benefit is depth and completeness.


    This is a general frontier for retrieval design, not a graph-specific quirk.
    There is a spectrum from pre-canned explicit retrieval queries, to
    text-to-query generation, to fully agentic traversal with tools. The right
    point on that spectrum depends on whether the use case values
    fast-and-good-enough or thorough-and-complete — they are not the same
    setting, and you should choose deliberately.
stance: >-
  Giving an agent iterative retrieval tools yields more complete answers than a
  fixed retrieval pipeline, at the cost of speed.
related:
  - INS-260626-20B7
  - INS-260625-99AE
  - INS-260409-2A51
  - INS-260409-0DB0
  - INS-260628-930A
---
The talk contrasts two retrieval strategies against the same knowledge graph. The first is a fixed two-pass pipeline: a vector lookup finds similar nodes, then their neighbors are pulled in as context. It is relatively fast but the detail it returns is limited. The second hands an agent (Claude Code via a Neo4j MCP cipher server) the ability to query the graph schema, fire off multiple queries, traverse, and keep pulling additional context until satisfied.

The agentic approach returned a substantially more detailed and complete answer — CVE number, attack type, severity, affected versions, remediation guidance — because it could iterate: discover the schema, query, then traverse again based on what it found. The cost is latency and more model calls; the benefit is depth and completeness.

This is a general frontier for retrieval design, not a graph-specific quirk. There is a spectrum from pre-canned explicit retrieval queries, to text-to-query generation, to fully agentic traversal with tools. The right point on that spectrum depends on whether the use case values fast-and-good-enough or thorough-and-complete — they are not the same setting, and you should choose deliberately.
