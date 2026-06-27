---
id: INS-260626-73D4
domain: ai-development
topic: system-building
title: 'Agents need agent-readable specs, not just human docs'
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - api-specs
  - documentation
  - tool-use
  - hallucination
  - agent-readiness
sources:
  - type: youtube
    title: 'Build connected AI: Orchestrate tools and agents with registries and ADK'
    author: Google Cloud Tech
    url: 'https://www.youtube.com/watch?v=C5zYVlBsHLQ'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Sparse or outdated API specs cause agents to hallucinate or fail calls, so
    spec quality becomes a hard prerequisite for agentic systems.
  standard: >-
    Most enterprise APIs are not 'agent ready' — they lack the rich, accurate
    specifications an LLM needs to understand how to interact with them, because
    documentation has always been a P2 afterthought for engineers. When an agent
    tries to call such an API, it starts hallucinating parameters or the call
    simply fails. You cannot run a governed, enterprise-scale AI product if
    humans must constantly hand-update docs to keep agents working.


    The response is to generate specs from observed reality (API logs, gateway
    traffic, shadow-API discovery) and optimize existing specs to be both human-
    and agent-readable, then diff and merge against live production behavior so
    docs reflect what the API actually does. The end-state vision is
    documentation that live-updates on every API publish, with human sign-off
    before anything goes live. The transferable lesson: in an agentic world,
    your API spec is no longer documentation — it is part of the runtime
    contract, and its accuracy directly bounds what agents can do.
stance: >-
  Enterprise APIs must be rewritten into rich, accurate specs for agents before
  agents can call them reliably.
related:
  - INS-260323-7424
  - INS-260603-6FE3
  - INS-260605-E706
  - INS-260627-214C
  - INS-260625-B985
  - PRI-260405-3080
---
Most enterprise APIs are not 'agent ready' — they lack the rich, accurate specifications an LLM needs to understand how to interact with them, because documentation has always been a P2 afterthought for engineers. When an agent tries to call such an API, it starts hallucinating parameters or the call simply fails. You cannot run a governed, enterprise-scale AI product if humans must constantly hand-update docs to keep agents working.

The response is to generate specs from observed reality (API logs, gateway traffic, shadow-API discovery) and optimize existing specs to be both human- and agent-readable, then diff and merge against live production behavior so docs reflect what the API actually does. The end-state vision is documentation that live-updates on every API publish, with human sign-off before anything goes live. The transferable lesson: in an agentic world, your API spec is no longer documentation — it is part of the runtime contract, and its accuracy directly bounds what agents can do.
