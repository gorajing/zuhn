---
id: INS-260627-CC45
domain: ai-development
topic: agent-patterns
title: Decouple tool implementations from the agentic loop with dynamic dispatch
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - tools
  - agentic-loop
  - decoupling
  - dynamic-dispatch
  - agent-architecture
sources:
  - type: youtube
    title: >-
      OpenAI + @Temporalio : Building Durable, Production Ready Agents -
      Cornelia Davis, Temporal
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=k8cnVCMYmNc'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Build one agentic loop that dispatches tool calls by name through a
    registry, so changing tools never means rewriting orchestration.
  standard: >-
    A practical architecture principle: the agentic loop is a standardized,
    largely fixed control structure, and the variability lives in the tools and
    context inserted into it — which is exactly what agent frameworks do. So you
    should never rebuild the loop when you change tools. The talk demonstrates
    this with Temporal's 'dynamic activity,' a handler registered to pick up any
    tool call off the queue by name rather than being statically bound to
    specific tool names. The loop calls a generic dispatcher; the dispatcher
    looks up the concrete function from a registry (metaphorically a dictionary)
    keyed by tool name.


    The result is a clean separation: the agentic code contains no tool names at
    all, and the toolset lives in a swappable module. You can replace
    'get_weather / get_ip / get_location' with an entirely different set, and
    the orchestration code is untouched. Combined with auto-generated tool
    descriptions (the SDK turns docstring-annotated functions into the JSON
    schemas the LLM sees), adding or removing a tool becomes a localized change.


    The broader lesson: design agents so the loop, the toolset, and the context
    engineering are independent axes of change. This is the agent analogue of
    dependency injection — bind tools at the edges, keep the core loop generic,
    and you avoid the trap of writing a bespoke loop per tool collection.
stance: >-
  Routing tool calls through a dynamic registry or dispatcher lets you swap an
  agent's entire toolset without modifying the agentic loop.
related:
  - INS-260410-CD01
  - INS-260625-224F
  - INS-260627-3481
  - INS-260524-2C7C
  - INS-260627-8425
  - INS-260626-2F2E
---
A practical architecture principle: the agentic loop is a standardized, largely fixed control structure, and the variability lives in the tools and context inserted into it — which is exactly what agent frameworks do. So you should never rebuild the loop when you change tools. The talk demonstrates this with Temporal's 'dynamic activity,' a handler registered to pick up any tool call off the queue by name rather than being statically bound to specific tool names. The loop calls a generic dispatcher; the dispatcher looks up the concrete function from a registry (metaphorically a dictionary) keyed by tool name.

The result is a clean separation: the agentic code contains no tool names at all, and the toolset lives in a swappable module. You can replace 'get_weather / get_ip / get_location' with an entirely different set, and the orchestration code is untouched. Combined with auto-generated tool descriptions (the SDK turns docstring-annotated functions into the JSON schemas the LLM sees), adding or removing a tool becomes a localized change.

The broader lesson: design agents so the loop, the toolset, and the context engineering are independent axes of change. This is the agent analogue of dependency injection — bind tools at the edges, keep the core loop generic, and you avoid the trap of writing a bespoke loop per tool collection.
