---
id: INS-260627-3481
domain: ai-development
topic: agent-patterns
title: 'Agent handoffs switch context within one loop, not into a new agentic loop'
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - agent-handoffs
  - agentic-loop
  - context-engineering
  - orchestration
  - openai-agents-sdk
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
    In the OpenAI Agents SDK, a handoff doesn't spin up a fresh agentic loop —
    it swaps the active context/persona of the one running loop.
  standard: >-
    There are two distinct ways to orchestrate multiple agents, and conflating
    them causes confusion about cost and control flow. The first is 'just code':
    run agent A, take its result, pass it to agent B — each is its own
    independent agentic loop (its own runner.run), and you orchestrate them with
    ordinary code (sequential, parallel, looping). The second is 'handoffs,'
    where one agent declares other agents as handoff targets.


    The non-obvious point is that a handoff does NOT start a separate agentic
    loop. There is a single agentic loop, and a handoff simply changes the
    context — the loop 'takes on a different persona.' A triage agent deciding
    between a weather agent and a local-info agent isn't dispatching to two new
    loops; it's reconfiguring what context and instructions the same loop
    operates under. This works precisely because LLMs are 'forgetful' — you can
    fully control the context fed into them, so switching persona is just
    swapping the context window.


    This matters for reasoning about token cost, state, and tracing: handoffs
    keep you in one continuous loop with shared conversation history, whereas
    the 'just code' pattern creates discrete loops you must explicitly thread
    results between. Choose handoffs when the agents are facets of one
    conversation; choose orchestration code when you need genuinely independent
    sub-agents, parallelism, or an agent-as-a-tool relationship.
stance: >-
  A handoff between agents is a context-and-persona switch inside a single
  agentic loop, not the invocation of a separate independent loop.
related:
  - INS-260403-2F4D
  - INS-260410-37D5
  - INS-260423-3AC1
  - INS-260501-4903
  - INS-260605-0C5C
  - INS-260626-8A80
  - INS-260627-CC45
  - INS-260627-F3B6
---
There are two distinct ways to orchestrate multiple agents, and conflating them causes confusion about cost and control flow. The first is 'just code': run agent A, take its result, pass it to agent B — each is its own independent agentic loop (its own runner.run), and you orchestrate them with ordinary code (sequential, parallel, looping). The second is 'handoffs,' where one agent declares other agents as handoff targets.

The non-obvious point is that a handoff does NOT start a separate agentic loop. There is a single agentic loop, and a handoff simply changes the context — the loop 'takes on a different persona.' A triage agent deciding between a weather agent and a local-info agent isn't dispatching to two new loops; it's reconfiguring what context and instructions the same loop operates under. This works precisely because LLMs are 'forgetful' — you can fully control the context fed into them, so switching persona is just swapping the context window.

This matters for reasoning about token cost, state, and tracing: handoffs keep you in one continuous loop with shared conversation history, whereas the 'just code' pattern creates discrete loops you must explicitly thread results between. Choose handoffs when the agents are facets of one conversation; choose orchestration code when you need genuinely independent sub-agents, parallelism, or an agent-as-a-tool relationship.
