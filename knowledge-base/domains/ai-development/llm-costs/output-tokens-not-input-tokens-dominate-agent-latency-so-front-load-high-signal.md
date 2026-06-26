---
id: INS-260626-411D
domain: ai-development
topic: llm-costs
title: >-
  Output tokens, not input tokens, dominate agent latency — so front-load
  high-signal context
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - token-efficiency
  - latency
  - context-engineering
  - agent-performance
  - cost-optimization
sources:
  - type: youtube
    title: >-
      Mergeable by default: Building the context engine to save time and tokens
      — Peter Werry, Unblocked
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=5ID22ACI7IM'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Everyone optimizes input tokens, but experiments show output tokens drag
    down performance — so it pays to spend extra time supplying tight, correct
    context that shortens the agent's output loop.
  standard: >-
    Werry reports that the common assumption — input tokens are the bottleneck —
    is wrong. Time-to-first-output-token is now highly optimized, and you can
    push input size up substantially without much penalty; what actually drags
    performance is the volume of output tokens the agent generates. The
    implication inverts the usual instinct: rather than aggressively pruning
    context to save input, you should invest input and retrieval time up front
    to get the agent's output loop tight and correct on the first pass.


    The mechanism is a 'waterfall': the time a context engine spends collecting
    and distilling information is a microcosm of the full task, and high-signal
    context cuts implementation effort by 60-80%. Their benchmark (implementing
    Anthropic's adaptive thinking mode) ran 25 minutes with the context engine
    versus 2.5 hours without — and the gap was almost entirely the four
    correction loops the under-contextualized agent needed, each regenerating
    output. Spending a bit more time retrieving the right context to avoid even
    one doom-loop iteration is a dramatic latency and cost win. A corollary: as
    agents become autonomous, raw MCP-server response time matters less and
    answer correctness matters more, because being 'bang on' is what avoids the
    costly re-loops.
stance: >-
  Latency is driven by output tokens, not input size, so spending more time and
  input gathering correct context up front is a net win because it collapses the
  expensive output loop.
related:
  - INS-260321-18D0
  - INS-260327-1563
  - INS-260410-699C
  - INS-260410-B282
  - INS-260410-761B
  - INS-260605-9925
  - INS-260605-2531
  - INS-260605-DA2B
  - INS-260605-E831
  - INS-260605-2AAF
---
Werry reports that the common assumption — input tokens are the bottleneck — is wrong. Time-to-first-output-token is now highly optimized, and you can push input size up substantially without much penalty; what actually drags performance is the volume of output tokens the agent generates. The implication inverts the usual instinct: rather than aggressively pruning context to save input, you should invest input and retrieval time up front to get the agent's output loop tight and correct on the first pass.

The mechanism is a 'waterfall': the time a context engine spends collecting and distilling information is a microcosm of the full task, and high-signal context cuts implementation effort by 60-80%. Their benchmark (implementing Anthropic's adaptive thinking mode) ran 25 minutes with the context engine versus 2.5 hours without — and the gap was almost entirely the four correction loops the under-contextualized agent needed, each regenerating output. Spending a bit more time retrieving the right context to avoid even one doom-loop iteration is a dramatic latency and cost win. A corollary: as agents become autonomous, raw MCP-server response time matters less and answer correctness matters more, because being 'bang on' is what avoids the costly re-loops.
