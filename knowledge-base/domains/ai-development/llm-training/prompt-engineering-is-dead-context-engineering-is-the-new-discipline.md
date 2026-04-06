---
id: INS-260322-17B3
domain: ai-development
topic: llm-training
title: 'Prompt engineering is dead, context engineering is the new discipline'
actionability: immediate
confidence: high
shelf_life: time-sensitive
status: active
tags:
  - context-engineering
  - prompt-engineering
  - rag
  - tool-use
sources:
  - type: youtube
    title: >-
      How OpenAI Builds for 800 Million Weekly Users: Model Specialization and
      Fine-Tuning
    author: a16z
    url: 'https://youtu.be/3x0jhpEj_6o'
date_extracted: '2026-03-22'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    The game has shifted from crafting clever prompts to context engineering —
    what tools you give the model, what data it pulls in, and when it pulls the
    right data.
  standard: >-
    In 2022, the prevailing belief was that prompt engineering wouldn't even be
    necessary — scaling laws would make models smart enough to mind-meld with
    users. That was wrong. But the field has evolved beyond basic prompt
    engineering into context engineering.


    The key shift: models are now excellent at instruction following, so the
    bottleneck isn't the prompt — it's what you feed into the context window.
    Classic RAG (using cosine similarity to choose what to feed a
    super-intelligence) is crude. With reasoning models like o3 that can do
    multiple tool calls and write code to execute, the intelligence itself
    should decide what data to retrieve. The paradigm moved from 'how do I write
    a good prompt' to 'what tools, data, and retrieval strategies do I architect
    around the model?' This is a more technical discipline that favors engineers
    over prompt crafters.
related:
  - INS-260325-E1FA
  - INS-260327-F625
  - INS-260321-82FE
  - INS-260326-2410
  - INS-260320-DCA0
  - INS-260328-3446
stance: The game has shifted from crafting clever prompts to context engineering
evidence:
  - id: INS-260328-3446
    type: CHALLENGES
    classified_at: '2026-04-02'
---
In 2022, the prevailing belief was that prompt engineering wouldn't even be necessary — scaling laws would make models smart enough to mind-meld with users. That was wrong. But the field has evolved beyond basic prompt engineering into context engineering.

The key shift: models are now excellent at instruction following, so the bottleneck isn't the prompt — it's what you feed into the context window. Classic RAG (using cosine similarity to choose what to feed a super-intelligence) is crude. With reasoning models like o3 that can do multiple tool calls and write code to execute, the intelligence itself should decide what data to retrieve. The paradigm moved from 'how do I write a good prompt' to 'what tools, data, and retrieval strategies do I architect around the model?' This is a more technical discipline that favors engineers over prompt crafters.
