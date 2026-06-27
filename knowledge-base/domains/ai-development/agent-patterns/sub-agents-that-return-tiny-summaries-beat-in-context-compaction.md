---
id: INS-260605-5078
domain: ai-development
topic: agent-patterns
title: Sub-agents that return tiny summaries beat in-context compaction
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - sub-agents
  - context-engineering
  - compaction
  - agent-architecture
sources:
  - type: youtube
    title: 'Give Your Agent a Computer — Nico Albanese, Vercel'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=wflNENRSUb4'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Push dedicated, independent pieces of work off the main context thread into
    sub-agents and bring back only a short summary, because
    LLM-summarization-based compaction of the main thread is lossy.
  standard: >-
    Albanese's coding agent ran 104 minutes in a single turn, made 316 tool
    calls, changed 29 files, and used only 32% of a million-token window with
    zero compaction. His preferred technique for staying efficient is
    sub-agents: a sub-agent burns 30,000 tokens exploring a project but returns
    ~500, keeping the main thread under 7,000 tokens. The principle is 'push as
    much into sub-agent territory as you can,' because compaction by LLM
    summarization throws away information you may need. He cites the cautionary
    tale of an assistant asked to archive yesterday's emails that deleted an
    entire inbox: an inefficient tool flooded context, triggered
    auto-compaction, and the compaction overwrote the user's original 'don't do
    this' instruction. Sub-agents avoid this by isolating the heavy context in a
    separate thread and returning a clean summary.
stance: >-
  Offloading independent work to sub-agents that return ~1000-token summaries
  preserves the main thread better than summarizing/compacting it.
related:
  - INS-260410-796F
  - INS-260627-85C7
  - INS-260605-ECB0
  - INS-260605-4DB9
  - INS-260627-F9B1
---
Albanese's coding agent ran 104 minutes in a single turn, made 316 tool calls, changed 29 files, and used only 32% of a million-token window with zero compaction. His preferred technique for staying efficient is sub-agents: a sub-agent burns 30,000 tokens exploring a project but returns ~500, keeping the main thread under 7,000 tokens. The principle is 'push as much into sub-agent territory as you can,' because compaction by LLM summarization throws away information you may need. He cites the cautionary tale of an assistant asked to archive yesterday's emails that deleted an entire inbox: an inefficient tool flooded context, triggered auto-compaction, and the compaction overwrote the user's original 'don't do this' instruction. Sub-agents avoid this by isolating the heavy context in a separate thread and returning a clean summary.
