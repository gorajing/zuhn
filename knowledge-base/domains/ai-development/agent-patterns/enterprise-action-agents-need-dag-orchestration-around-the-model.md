---
id: INS-260624-223D
domain: ai-development
topic: agent-patterns
title: Enterprise action agents need DAG orchestration around the model
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - agents
  - orchestration
  - dag
  - tool-use
sources:
  - type: paste
    title: Stanford AI Agent Seminar Slide Notes And User Field Notes
date_extracted: '2026-06-24'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    The model is one component; the enterprise action layer is a DAG runtime for
    task decomposition, planning, parallel execution, and recovery.
  standard: >-
    The Narada slide frames the action model as natural-language,
    browser-extension, and API/SDK inputs flowing into an orchestration engine
    powered by LLCompiler. That engine performs task decomposition, planning as
    a DAG/workflow graph, parallel execution, and error handling/self-healing
    before dispatching to API integrations or browser/UI agents.


    This is a more concrete architecture than a chat loop with tools. The agent
    runtime needs to know which steps are independent, which results are
    dependencies, which tools are cheap or expensive, and where to retry or
    repair. In enterprise settings, the orchestration layer becomes the product
    surface as much as the model does.
stance: >-
  Enterprise action agents should use an orchestration layer that decomposes
  tasks into dependency graphs, parallelizes independent calls, and routes
  execution across APIs and browser/UI surfaces.
related:
  - INS-260405-CA27
  - INS-260403-82E0
  - INS-260626-E5DE
  - INS-260605-48D1
  - PRI-260406-1F5E
---
The Narada slide frames the action model as natural-language, browser-extension, and API/SDK inputs flowing into an orchestration engine powered by LLCompiler. That engine performs task decomposition, planning as a DAG/workflow graph, parallel execution, and error handling/self-healing before dispatching to API integrations or browser/UI agents.

This is a more concrete architecture than a chat loop with tools. The agent runtime needs to know which steps are independent, which results are dependencies, which tools are cheap or expensive, and where to retry or repair. In enterprise settings, the orchestration layer becomes the product surface as much as the model does.
