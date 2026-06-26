---
id: INS-260605-20DD
domain: ai-development
topic: system-building
title: Agent engineering techniques stay valuable even as models improve
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - agent-engineering
  - durable-techniques
  - model-improvement
  - reliability
sources:
  - type: blog
    title: >-
      GitHub - humanlayer/12-factor-agents: What are the principles we can use
      to build LLM-powered software that is actually good enough to put in the
      hands of production customers?
    url: 'https://github.com/humanlayer/12-factor-agents'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Better models reduce friction but do not remove the need for good agent
    architecture.
  standard: >-
    The 12-factor framing says that even exponentially improving LLMs leave room
    for core techniques that make LLM-powered software more reliable, scalable,
    and maintainable. The durable work is owning prompts, context, execution
    state, control flow, and recovery surfaces.
  deep: >-
    This is a useful stance against waiting for model progress to solve
    architecture. Better models may tolerate worse context or more ambiguous
    tools, but production systems still need debuggability, repeatability,
    permissioning, and graceful failure. The model gets smarter; the harness
    still decides whether the system is safe and maintainable.
stance: >-
  Core engineering practices for prompts, context, state, control flow, and
  recovery remain valuable even if LLM capability keeps improving.
related:
  - INS-260403-0350
  - INS-260501-E377
  - INS-260605-2284
  - INS-260605-0A68
  - INS-260605-A28F
  - INS-260624-A121
  - INS-260330-8F07
  - INS-260625-017C
---
The 12-factor framing says that even exponentially improving LLMs leave room for core techniques that make LLM-powered software more reliable, scalable, and maintainable. The durable work is owning prompts, context, execution state, control flow, and recovery surfaces.
