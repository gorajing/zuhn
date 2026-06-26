---
id: INS-260626-1759
domain: ai-development
topic: llm-behavior
title: Agents quit searching at the first plausible match (satisfaction of search)
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - context-engineering
  - retrieval
  - agent-failure-modes
  - rag
  - search
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
    Agents exhibit 'satisfaction of search' — they latch onto the first thing
    that resembles the answer and stop, missing the real golden nuggets in
    places they wouldn't think to look.
  standard: >-
    Werry borrows 'satisfaction of search' from radiology, where doctors find
    one finding that explains the symptoms and stop scanning — and miss the
    cancer. Agents do the same: ripping through Notion, Confluence, and code,
    they stumble on something that resembles what they were told to find,
    declare victory, and proceed. The actual decisive context — why a decision
    was made, what was tried and rejected, what an incident taught the team —
    often lives in a past Slack thread or an incident report the agent would
    never think to query.


    This is why simply wiring up more MCP servers or doing naive vector search
    makes things worse, not better: it gives the agent more places to
    prematurely 'satisfy' its search while burning tokens, and in the worst case
    the agent searches until it hits context compaction without ever finding the
    endgame. The defense is not more access but a retrieval system that knows
    where the high-signal context lives and routes the agent there deliberately,
    plus protocols (as in radiology) that prevent stopping at the first hit. The
    practical tell is an agent that produces code that compiles but ignores the
    organizational intent sitting just below the surface.
stance: >-
  Coding agents stop retrieving as soon as they find something that looks like
  the answer, systematically missing the higher-value context buried in
  non-obvious sources.
related:
  - INS-260402-4451
  - INS-260403-FFF0
  - INS-260405-0810
  - INS-260409-9E95
  - INS-260410-DCE5
  - INS-260421-CE27
  - INS-260605-4C0A
  - INS-260524-8320
---
Werry borrows 'satisfaction of search' from radiology, where doctors find one finding that explains the symptoms and stop scanning — and miss the cancer. Agents do the same: ripping through Notion, Confluence, and code, they stumble on something that resembles what they were told to find, declare victory, and proceed. The actual decisive context — why a decision was made, what was tried and rejected, what an incident taught the team — often lives in a past Slack thread or an incident report the agent would never think to query.

This is why simply wiring up more MCP servers or doing naive vector search makes things worse, not better: it gives the agent more places to prematurely 'satisfy' its search while burning tokens, and in the worst case the agent searches until it hits context compaction without ever finding the endgame. The defense is not more access but a retrieval system that knows where the high-signal context lives and routes the agent there deliberately, plus protocols (as in radiology) that prevent stopping at the first hit. The practical tell is an agent that produces code that compiles but ignores the organizational intent sitting just below the surface.
