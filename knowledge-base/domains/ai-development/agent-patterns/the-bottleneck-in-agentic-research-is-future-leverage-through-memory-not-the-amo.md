---
id: INS-260626-DA0A
domain: ai-development
topic: agent-patterns
title: >-
  The bottleneck in agentic research is future leverage through memory, not the
  amount of context you feed the model
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - context-management
  - agent-memory
  - context-window
  - research-workflow
  - persistence
sources:
  - type: youtube
    title: >-
      Turn 10,994 Notes Into Memory - Paul Iusztin, Decoding AI & Louis-François
      Bouchard, Towards AI
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=ZRM_TfEZcIo'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Feeding an agent more context isn't the bottleneck — the bottleneck is being
    able to leverage what you gave it in future sessions.
  standard: >-
    With a bare coding agent, 'the context window becomes everything — the
    database, the file system, the memory, the reasoning space. It has to do it
    all, and when you stop the conversation, it loses everything.' Each new
    Codex/ChatGPT session forces you to re-paste links, PDFs, and prior work,
    and any structure the agent built on the fly is discarded. The presenters'
    key reframe: 'all this information you give to the model is not the
    bottleneck. The bottleneck is how can you leverage it in the future.'


    The takeaway is that more context is not the path to better research;
    durable memory plus context management is. Instead of maximizing what you
    stuff into a single window, build a persistent external substrate (here,
    files and a wiki) that survives across sessions and that agents can
    repeatedly draw from — so prior research compounds rather than evaporating
    when the conversation ends.
stance: >-
  Better agentic research comes from durable memory and context management, not
  from providing the model more and more context.
related:
  - INS-260321-18D0
  - INS-260327-DECA
  - INS-260403-7F89
  - INS-260405-9285
  - INS-260409-F9D5
  - INS-260410-1A22
  - INS-260412-9657
  - INS-260605-9527
  - INS-260605-BAB5
  - INS-260625-81E1
---
With a bare coding agent, 'the context window becomes everything — the database, the file system, the memory, the reasoning space. It has to do it all, and when you stop the conversation, it loses everything.' Each new Codex/ChatGPT session forces you to re-paste links, PDFs, and prior work, and any structure the agent built on the fly is discarded. The presenters' key reframe: 'all this information you give to the model is not the bottleneck. The bottleneck is how can you leverage it in the future.'

The takeaway is that more context is not the path to better research; durable memory plus context management is. Instead of maximizing what you stuff into a single window, build a persistent external substrate (here, files and a wiki) that survives across sessions and that agents can repeatedly draw from — so prior research compounds rather than evaporating when the conversation ends.
