---
id: INS-260327-BF89
domain: ai-development
topic: product-strategy
title: >-
  Flow engineering offloads planning to humans and is the current key to
  reliable agents
actionability: immediate
confidence: high
shelf_life: time-sensitive
status: active
tags:
  - flow-engineering
  - agent-reliability
  - planning
  - cognitive-architecture
sources:
  - type: youtube
    title: What's next for AI agents ft. LangChain's Harrison Chase
    author: Sequoia Capital
    url: 'https://www.youtube.com/watch?v=pBBe1pk8hf4'
date_extracted: '2026-03-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Flow engineering -- explicitly designing the agent's state machine rather
    than relying on LLM implicit planning -- is the current best practice for
    reliable agent deployment, though it may become unnecessary as models
    improve.
  standard: >-
    Chase identifies a tension in agent design: running an LLM in a loop (ask
    what to do, execute, repeat) requires implicit planning ability that current
    models don't reliably have. The practical solution is 'flow engineering'
    (from the AlphaCodium paper): explicitly designing the graph or state
    machine of agent actions, effectively offloading planning from the model to
    human engineers.


    This is explicitly a crutch -- the open question is whether these planning
    patterns are 'short-term hacks or long-term necessary components.' Chase
    also highlights the UX innovation from Devin: rewind-and-edit ability, where
    users can go back to any point in an agent's execution and modify the state.
    Combined with procedural memory (remembering the correct way to do
    something) and personalized memory (remembering facts about the user), these
    form the three pillars of production-ready agents.
stance: >-
  Explicitly designing the graph of agent actions (flow engineering) produces
  more reliable results than relying on LLMs to implicitly plan their own next
  steps in a loop.
related:
  - INS-260326-9402
  - INS-260405-CC9D
  - PRI-260328-F723
  - INS-260405-9285
  - PRI-260328-B4BD
  - INS-260327-A9D5
  - INS-260327-D65E
  - INS-260329-075C
  - INS-260403-F2A2
---
Chase identifies a tension in agent design: running an LLM in a loop (ask what to do, execute, repeat) requires implicit planning ability that current models don't reliably have. The practical solution is 'flow engineering' (from the AlphaCodium paper): explicitly designing the graph or state machine of agent actions, effectively offloading planning from the model to human engineers.

This is explicitly a crutch -- the open question is whether these planning patterns are 'short-term hacks or long-term necessary components.' Chase also highlights the UX innovation from Devin: rewind-and-edit ability, where users can go back to any point in an agent's execution and modify the state. Combined with procedural memory (remembering the correct way to do something) and personalized memory (remembering facts about the user), these form the three pillars of production-ready agents.
