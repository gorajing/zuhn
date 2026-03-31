---
id: INS-260330-EE25
domain: ai-development
topic: limitations
title: >-
  Context windows are the hard ceiling on transformer reasoning and their most
  underappreciated constraint
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - ai
  - constraints
  - bottlenecks
  - systems-thinking
  - architecture
  - engineering
sources:
  - type: youtube
    title: 'Transformers, the tech behind LLMs | Deep Learning Chapter 5'
    author: 3Blue1Brown
    url: 'https://www.youtube.com/watch?v=wjZofJX0v4M'
date_extracted: '2026-03-30'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Context window size, not model capability, is the binding constraint on
    transformer coherence in long interactions.
  standard: >-
    Transformers process a fixed-size array of vectors — GPT-3's context was
    2,048 tokens. Everything the model 'knows' about the current conversation
    must fit in this window. When early ChatGPT seemed to 'forget' earlier parts
    of a conversation, the issue wasn't a lack of intelligence but a hard
    architectural constraint: the relevant context had simply fallen outside the
    window. This reframes AI engineering priorities. Rather than focusing solely
    on model capability, practical AI applications must solve context management
    — what to include, what to summarize, what to discard. This constraint also
    creates a useful mental model for human cognition: we too have limited
    working memory, and the quality of our thinking depends heavily on which
    information we keep 'in context' versus what we let fall away. The most
    effective thinkers, like the most effective AI systems, are often those who
    manage context best, not those with the most raw processing power.
stance: >-
  A transformer can only incorporate information from a fixed number of tokens
  at a time, and this context size limitation — not model intelligence — is the
  primary reason early chatbots lost conversational coherence in long
  interactions, making context management the critical engineering challenge for
  practical AI applications.
related:
  - INS-260325-5B28
  - INS-260327-DECA
  - INS-260321-B014
  - PRI-260323-8E89
  - INS-260321-8C35
---
Transformers process a fixed-size array of vectors — GPT-3's context was 2,048 tokens. Everything the model 'knows' about the current conversation must fit in this window. When early ChatGPT seemed to 'forget' earlier parts of a conversation, the issue wasn't a lack of intelligence but a hard architectural constraint: the relevant context had simply fallen outside the window. This reframes AI engineering priorities. Rather than focusing solely on model capability, practical AI applications must solve context management — what to include, what to summarize, what to discard. This constraint also creates a useful mental model for human cognition: we too have limited working memory, and the quality of our thinking depends heavily on which information we keep 'in context' versus what we let fall away. The most effective thinkers, like the most effective AI systems, are often those who manage context best, not those with the most raw processing power.
