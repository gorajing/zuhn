---
id: INS-260627-6E3C
domain: ai-development
topic: architecture
title: 'Implement reasoning as an on-demand sub-agent, not via model selection'
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - reasoning
  - sub-agents
  - agent-architecture
  - latency
  - oracle
sources:
  - type: youtube
    title: 'Amp Code: Next Generation AI Coding – Beyang Liu, Amp Code'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=gvIAkmZUEZY'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    A dedicated 'oracle' reasoning sub-agent keeps the main agent fast and
    tool-capable, dropping into deep reasoning only when a tricky problem
    demands it.
  standard: >-
    Most agents implement reasoning at the model-selection layer — you pick a
    reasoning model and the whole experience slows down. Amp instead implements
    reasoning as a sub-agent it calls the 'oracle.' This preserves the main
    agent's snappiness and its ability to fluidly use a wide variety of tools,
    while reserving deep reasoning for the moments that actually need it:
    debugging a tricky bug or planning something nuanced. The workflow becomes:
    when the main agent gets stuck, invoke the oracle, let it think deeply for a
    few minutes while you do something else, and roughly four out of five times
    it surfaces the underlying issue. The general principle is that capability
    modes with very different latency/cost profiles (fast tool use vs. slow deep
    reasoning) are better separated into distinct callable agents than fused
    into one model the user must select up front.
stance: >-
  Agents should expose deep reasoning through a dedicated sub-agent invoked on
  demand rather than baking a reasoning model into the main loop.
related:
  - INS-260625-1826
  - INS-260627-85C7
  - INS-260405-F26B
  - INS-260625-3866
  - INS-260625-C700
  - INS-260627-6031
  - INS-260627-DB17
---
Most agents implement reasoning at the model-selection layer — you pick a reasoning model and the whole experience slows down. Amp instead implements reasoning as a sub-agent it calls the 'oracle.' This preserves the main agent's snappiness and its ability to fluidly use a wide variety of tools, while reserving deep reasoning for the moments that actually need it: debugging a tricky bug or planning something nuanced. The workflow becomes: when the main agent gets stuck, invoke the oracle, let it think deeply for a few minutes while you do something else, and roughly four out of five times it surfaces the underlying issue. The general principle is that capability modes with very different latency/cost profiles (fast tool use vs. slow deep reasoning) are better separated into distinct callable agents than fused into one model the user must select up front.
