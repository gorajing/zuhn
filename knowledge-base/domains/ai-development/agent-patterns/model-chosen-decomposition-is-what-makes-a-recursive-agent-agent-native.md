---
id: INS-260625-AF2A
domain: ai-development
topic: agent-patterns
title: Model-chosen decomposition is what makes a recursive agent agent-native
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - decomposition
  - agent-native
  - map-reduce
  - sub-agents
  - recursion
sources:
  - type: youtube
    title: 'Recursive Coding Agents - Raymond Weitekamp, OpenProse'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=3hXJI2q0Jz8'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    If the harness hardcodes the decomposition, it's a map-reduce with LLM
    calls; if the model picks the decomposition, it's a genuine recursive agent.
  standard: >-
    Weitekamp's rubric for an RLM requires an executable environment, an
    externalized prompt, code that calls the model, state that stays symbolic,
    and — critically — that the model itself chooses how to decompose the
    problem into sub-calls or sub-agents. Hardcoded map-reduces (e.g.
    lambda-RLM, which uses lambda calculus to pre-decompose into a fixed
    map-reduce) fail this test: the LLM executes pieces but never decides the
    decomposition. That dynamic, model-owned decomposition is 'the key element
    that makes it very agent-native.'


    The practical guidance for builders: a workflow where you wrote the fan-out
    structure by hand is a deterministic pipeline that happens to call models —
    useful, but it caps adaptivity at your design-time imagination. A genuinely
    recursive agent lets the model size and shape each sub-problem at runtime,
    including spawning sub-agents that recurse further (pi calls pi calls pi,
    depth configurable). When deciding which to build, ask whether the value
    comes from a fixed known structure (use the cheaper hardcoded pipeline) or
    from problems whose shape you can't predict in advance (pay for model-chosen
    decomposition).
stance: >-
  Letting the model decide how to decompose a problem — rather than hardcoding a
  map-reduce — is the dividing line between a true recursive agent and a
  glorified pipeline.
related:
  - PRI-260426-890F
  - INS-260514-4FDC
  - INS-260605-E693
  - INS-260524-2C7C
  - INS-260626-5B28
---
Weitekamp's rubric for an RLM requires an executable environment, an externalized prompt, code that calls the model, state that stays symbolic, and — critically — that the model itself chooses how to decompose the problem into sub-calls or sub-agents. Hardcoded map-reduces (e.g. lambda-RLM, which uses lambda calculus to pre-decompose into a fixed map-reduce) fail this test: the LLM executes pieces but never decides the decomposition. That dynamic, model-owned decomposition is 'the key element that makes it very agent-native.'

The practical guidance for builders: a workflow where you wrote the fan-out structure by hand is a deterministic pipeline that happens to call models — useful, but it caps adaptivity at your design-time imagination. A genuinely recursive agent lets the model size and shape each sub-problem at runtime, including spawning sub-agents that recurse further (pi calls pi calls pi, depth configurable). When deciding which to build, ask whether the value comes from a fixed known structure (use the cheaper hardcoded pipeline) or from problems whose shape you can't predict in advance (pay for model-chosen decomposition).
