---
id: INS-260421-3E99
domain: ai-development
topic: llm-behavior
title: Scaling context window does not scale intelligence
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - context-window
  - llm-limits
  - memory-systems
sources:
  - type: audio
    title: ai agents 12 ai memory meetup 2026 04 20
date_extracted: '2026-04-21'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Context windows grew 2500x since GPT-3 (4K to 10M tokens) but models degrade
    well before the advertised limit — Gemini 1M stops reliably using context
    past ~300-500K.
  standard: >-
    Livia Ellen of mem0, on the main stage of AI Agents SF #12, stated: 'scaling
    context doesn't actually mean scaling intelligence.' This is a notable
    concession from a retrieval-centric vendor. Despite the dramatic growth in
    context windows (GPT-3: 4K, Claude 2: 100K, Gemini: 1M, Llama 4: 10M
    tokens), real-world performance degrades well before the advertised limit.
    Gemini 1M shows reliability collapse around 300-500K tokens in production
    use.


    The implication: dedicated memory systems (selective retrieval, compression,
    principle extraction) remain necessary even as context windows expand.
    Architects who assume 'we can just use a bigger window' as an alternative to
    memory infrastructure are misjudging the capability frontier. Memory as a
    discipline persists despite model scale, because attention is a scarce
    resource independent of window size.
stance: >-
  Expanding LLM context windows does not reliably improve decision quality
  beyond the practical degradation point
related:
  - INS-260410-699C
  - INS-260410-761B
  - INS-260321-B7CB
  - INS-260410-3E37
  - INS-260410-4696
  - INS-260423-6CC0
---
Livia Ellen of mem0, on the main stage of AI Agents SF #12, stated: 'scaling context doesn't actually mean scaling intelligence.' This is a notable concession from a retrieval-centric vendor. Despite the dramatic growth in context windows (GPT-3: 4K, Claude 2: 100K, Gemini: 1M, Llama 4: 10M tokens), real-world performance degrades well before the advertised limit. Gemini 1M shows reliability collapse around 300-500K tokens in production use.

The implication: dedicated memory systems (selective retrieval, compression, principle extraction) remain necessary even as context windows expand. Architects who assume 'we can just use a bigger window' as an alternative to memory infrastructure are misjudging the capability frontier. Memory as a discipline persists despite model scale, because attention is a scarce resource independent of window size.
