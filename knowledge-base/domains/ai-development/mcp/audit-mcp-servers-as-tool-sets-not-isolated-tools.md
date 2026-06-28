---
id: INS-260628-2CF1
domain: ai-development
topic: mcp
title: 'Audit MCP servers as tool sets, not isolated tools'
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - mcp
  - tool-poisoning
  - security-review
  - multi-tool
sources:
  - type: blog
    title: A Stealthy Multi-Tool Threshold Poisoning Attack Against MCP
    url: 'https://arxiv.org/html/2606.27027'
date_extracted: '2026-06-28'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    MCP security review must evaluate the joint behavior of the tool set, not
    only whether each individual tool description looks benign.
  standard: >-
    ShareLock's central move is to distribute the malicious instruction across
    multiple tool descriptions so that no single descriptor contains the full
    attack. Under the paper's threshold construction, an auditor who sees fewer
    than the required number of shares cannot reconstruct the hidden prompt,
    while the agent can later aggregate enough context to do so.


    This makes isolated tool review a weak security boundary. A server with many
    seemingly harmless tools can still encode a coordinated payload in their
    metadata, then activate it only when the workflow brings enough tools
    together. For MCP system builders, the implication is concrete: review tools
    as a correlated bundle, including cross-tool metadata patterns, shared
    fields, update history, and the server-level workflow that might combine
    them.
stance: >-
  MCP security review fails when it inspects each tool independently because
  multi-tool attacks can hide intent across the whole server surface.
related:
  - INS-260514-8424
  - INS-260625-BEFE
  - INS-260627-5A21
  - INS-260627-9F3F
  - INS-260410-A1E9
  - INS-260320-1B10
  - INS-260626-475E
---
ShareLock's central move is to distribute the malicious instruction across multiple tool descriptions so that no single descriptor contains the full attack. Under the paper's threshold construction, an auditor who sees fewer than the required number of shares cannot reconstruct the hidden prompt, while the agent can later aggregate enough context to do so.

This makes isolated tool review a weak security boundary. A server with many seemingly harmless tools can still encode a coordinated payload in their metadata, then activate it only when the workflow brings enough tools together. For MCP system builders, the implication is concrete: review tools as a correlated bundle, including cross-tool metadata patterns, shared fields, update history, and the server-level workflow that might combine them.
