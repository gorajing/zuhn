---
id: INS-260410-18CF
domain: ai-development
topic: prompting
title: 'Treat the context window as precious working memory, not a free scratchpad'
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - context-window
  - prompting
  - llm-performance
  - working-memory
sources:
  - type: youtube
    title: How I use LLMs
    author: Andrej Karpathy
    url: 'https://www.youtube.com/watch?v=EWvNQjAaOHw'
date_extracted: '2026-04-10'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Start a new chat whenever you switch topics — leftover tokens distract the
    model and slow sampling without improving answers.
  standard: >-
    The context window is the model's working memory — everything in it gets
    attended to during next-token prediction. Karpathy points out two costs to
    letting conversations grow: (1) irrelevant tokens from earlier topics can
    distract the model and measurably degrade accuracy on the current task, and
    (2) every additional token makes sampling the next token slightly more
    expensive and slower. Users default to treating chats like Slack threads,
    but the correct mental model is closer to RAM: load only what the current
    task needs.


    The practical rule is to hit 'new chat' every time you switch subject, and
    only keep long conversations going when the accumulated context is genuinely
    relevant to what comes next. This also argues against the common pattern of
    keeping one giant 'working' conversation open across an entire day — you're
    effectively poisoning every query with unrelated prior tokens. Treat
    conversations as disposable workspaces and the model gets sharper, not
    dumber, as you use it.
stance: >-
  Starting a new chat on topic-switch produces faster, more accurate LLM
  responses than continuing in a long-running conversation.
related:
  - INS-260403-E5D4
  - INS-260410-699C
  - INS-260323-7625
  - INS-260325-175B
  - INS-260409-78E1
---
The context window is the model's working memory — everything in it gets attended to during next-token prediction. Karpathy points out two costs to letting conversations grow: (1) irrelevant tokens from earlier topics can distract the model and measurably degrade accuracy on the current task, and (2) every additional token makes sampling the next token slightly more expensive and slower. Users default to treating chats like Slack threads, but the correct mental model is closer to RAM: load only what the current task needs.

The practical rule is to hit 'new chat' every time you switch subject, and only keep long conversations going when the accumulated context is genuinely relevant to what comes next. This also argues against the common pattern of keeping one giant 'working' conversation open across an entire day — you're effectively poisoning every query with unrelated prior tokens. Treat conversations as disposable workspaces and the model gets sharper, not dumber, as you use it.
