---
id: INS-260605-0C88
domain: ai-development
topic: agent-patterns
title: Shrinking an agent's tool surface improves its performance
actionability: inspiration
confidence: medium
shelf_life: evergreen
status: active
tags:
  - tool-design
  - agent-architecture
  - less-is-more
  - code-execution
  - constraint-design
sources:
  - type: youtube
    title: 'Vibe Engineering Effect Apps — Michael Arnaldi, Effectful'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=Wmp2Tku2PrI'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    An agent given one 'execute' tool that runs arbitrary TypeScript (including
    shell calls and AST-based file edits) outperforms one with many narrow
    tools, because constraining what the model can do makes it do better.
  standard: >-
    Arnaldi reports active experimentation showing 'very good margins of
    improvement by reducing the number of tools that the model has access to.'
    Their extreme case: a coding agent with a single tool call, 'execute', that
    runs arbitrary TypeScript including shelling out to Bash. In that setup the
    model has no patch/edit tool at all — to change a file it must write a
    TypeScript program that performs an AST-based transformation. 'It's
    fantastic how you reduce the things that the model can do and it does
    better.' This connects to his broader observation that a 1-million-token
    context window is not necessarily good: everything pushed into the context
    goes to the neural network's next-token prediction, so more information
    raises the chance of confusing the model, especially when doing multiple
    things in one context. The principle: constraints channel the model rather
    than handicapping it.
stance: >-
  Reducing the number of tools an agent has — even down to a single
  execute-TypeScript tool — measurably improves its output.
related:
  - INS-260326-2410
  - INS-260514-1D60
  - INS-260605-F5FB
  - INS-260605-5C58
  - INS-260605-2C70
  - INS-260627-A41A
  - INS-260627-FEB4
  - INS-260626-2F2E
  - INS-260605-AE67
  - INS-260605-8AFF
---
Arnaldi reports active experimentation showing 'very good margins of improvement by reducing the number of tools that the model has access to.' Their extreme case: a coding agent with a single tool call, 'execute', that runs arbitrary TypeScript including shelling out to Bash. In that setup the model has no patch/edit tool at all — to change a file it must write a TypeScript program that performs an AST-based transformation. 'It's fantastic how you reduce the things that the model can do and it does better.' This connects to his broader observation that a 1-million-token context window is not necessarily good: everything pushed into the context goes to the neural network's next-token prediction, so more information raises the chance of confusing the model, especially when doing multiple things in one context. The principle: constraints channel the model rather than handicapping it.
