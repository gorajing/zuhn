---
id: INS-260605-DA2B
domain: ai-development
topic: llm-costs
title: >-
  The LLM latency budget forces voice-agent models into an 8–30B parameter sweet
  spot
actionability: immediate
confidence: high
shelf_life: time-sensitive
status: active
tags:
  - voice-agents
  - latency
  - model-size
  - ttft
  - tool-calling
sources:
  - type: youtube
    title: >-
      Engineering voice agents: Latency, quality, and scale — Rishabh Bhargava,
      Together AI
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=N7b1PJc7SFc'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Target ~200–300ms time-to-first-token for the LLM, which constrains model
    size to roughly 8–30B parameters — bigger burns the latency budget, smaller
    sacrifices the intelligence and tool calling the agent needs.
  standard: >-
    In the pipeline, the LLM is the brain and its key metric is streaming
    latency — time to first token (TTFT) — because you want to start feeding
    tokens into the TTS model as fast as possible. A good target is ~200–300ms
    TTFT. That budget has a direct architectural implication: a good-sized model
    lands in the 8–30 billion parameter range. Go bigger and you burn through
    the latency budget; go smaller and you lose the intelligence and
    tool-calling reliability needed to do meaningful work.


    The LLM also consumes the majority of both the latency and cost budget
    across the pipeline (followed by TTS, then STT). To improve tool calling
    without growing the model, teams fine-tune smaller LLMs on use-case-specific
    data — raising tool-call quality while staying inside the size and latency
    envelope.
stance: >-
  Voice-agent LLMs should be in the 8–30 billion parameter range because larger
  models blow the TTFT budget and smaller ones lose tool-calling quality.
related:
  - INS-260330-C06E
  - INS-260605-8F95
  - INS-260410-699C
  - INS-260321-18D0
  - INS-260605-DA98
  - INS-260605-6A32
---
In the pipeline, the LLM is the brain and its key metric is streaming latency — time to first token (TTFT) — because you want to start feeding tokens into the TTS model as fast as possible. A good target is ~200–300ms TTFT. That budget has a direct architectural implication: a good-sized model lands in the 8–30 billion parameter range. Go bigger and you burn through the latency budget; go smaller and you lose the intelligence and tool-calling reliability needed to do meaningful work.

The LLM also consumes the majority of both the latency and cost budget across the pipeline (followed by TTS, then STT). To improve tool calling without growing the model, teams fine-tune smaller LLMs on use-case-specific data — raising tool-call quality while staying inside the size and latency envelope.
