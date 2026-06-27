---
id: INS-260627-E858
domain: ai-development
topic: model-architecture
title: 'Train models on execution traces, not just code syntax'
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - execution-traces
  - code-models
  - representation-learning
  - transition-function
  - training-data
sources:
  - type: youtube
    title: >-
      Code World Model: Building World Models for Computation – Jacob Kahn, FAIR
      Meta
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=sYgE4ppDFOQ'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    A token-based code model only ever sees syntax; explicitly representing
    execution as line-by-line state transitions gives the model a structured
    signal about what the program actually does.
  standard: >-
    Standard code LLMs begin and end their analysis of a program at the syntax
    level: text is tokenized in, more text is predicted out. CWM's bet is that
    this throws away the most important information — what happens when the code
    runs. So the team feeds the model explicit execution traces: frame
    separators delineate each line of execution, and local variables (and even
    memory) are surfaced at every step, with each trace line mapping back to a
    line in the source. The model learns to autoregressively emit this trace,
    implicitly predicting the transition function of program states.


    The ambition scales beyond single functions to repository-level,
    distributed-system-level, and contest-solution traces, and can be expressed
    in natural-language form. To source this data, the team mines GitHub events,
    mutates PRs, runs CI/tests on repos known to be passing, and generates
    traces from that verified execution. The takeaway for anyone building code
    models: the highest-leverage training signal may not be more code, but a
    structured record of code executing — exactly the signal a tokenizer
    discards by default.
stance: >-
  Modeling explicit program execution traces — line-by-line state transitions
  with local variables and memory — yields better code reasoning than training
  only on the syntax a tokenizer sees.
related:
  - INS-260605-FC00
  - INS-260626-6767
  - INS-260626-6CAE
  - INS-260627-4514
  - INS-260627-37CC
  - INS-260627-6418
  - INS-260605-D1F0
---
Standard code LLMs begin and end their analysis of a program at the syntax level: text is tokenized in, more text is predicted out. CWM's bet is that this throws away the most important information — what happens when the code runs. So the team feeds the model explicit execution traces: frame separators delineate each line of execution, and local variables (and even memory) are surfaced at every step, with each trace line mapping back to a line in the source. The model learns to autoregressively emit this trace, implicitly predicting the transition function of program states.

The ambition scales beyond single functions to repository-level, distributed-system-level, and contest-solution traces, and can be expressed in natural-language form. To source this data, the team mines GitHub events, mutates PRs, runs CI/tests on repos known to be passing, and generates traces from that verified execution. The takeaway for anyone building code models: the highest-leverage training signal may not be more code, but a structured record of code executing — exactly the signal a tokenizer discards by default.
