---
id: INS-260605-2E27
domain: ai-development
topic: agent-patterns
title: >-
  Proxy tool calls to the wrapped agent so voice inherits existing integrations
  for free
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - tool-calling
  - agent-architecture
  - voice-agents
  - integration
  - developer-experience
sources:
  - type: youtube
    title: 'Give Your Chat Agent a Voice — Luke Harries, Head of Growth, ElevenLabs'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=DCZZ3AJKzuc'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Because the wrapped chat agent already handles the majority of tool calling
    on the backend, the voice layer can proxy to it and inherit every
    integration without touching tool-calling complexity.
  standard: >-
    Asked how the voice wrapper handles tool calling, Harries gives the cleanest
    expression of the wrap-don't-rebuild philosophy: the underlying chat agent
    already does the majority of tool calling on the backend, so the voice
    wrapper inherits all of it 'without needing to deal with any of the issues
    of tool calling.' Tool calling — one of the hardest, most error-prone parts
    of agent engineering — is simply not the voice layer's problem when you wrap
    rather than replace.


    ElevenLabs layers on an additional refinement: a distinction between
    client-side and server-side tools. Client-side tools can run on the frontend
    to do things like manipulate the DOM directly, while server-side tools and
    proxied calls route to the wrapped agent. The design principle worth
    extracting: when adding a new modality to an existing agent, push the new
    modality's concerns (audio, turn-taking, DOM manipulation) into the wrapper
    and delegate everything the existing agent already does well (business
    logic, tool execution, RAG) straight through. The hard, already-solved work
    stays where it lives.
stance: >-
  A voice wrapper should delegate tool calling to the underlying agent so
  existing integrations work without re-implementation.
related:
  - INS-260409-171B
  - INS-260605-C132
  - INS-260605-3553
  - INS-260605-50FB
  - INS-260605-98BD
  - INS-260605-2DD5
---
Asked how the voice wrapper handles tool calling, Harries gives the cleanest expression of the wrap-don't-rebuild philosophy: the underlying chat agent already does the majority of tool calling on the backend, so the voice wrapper inherits all of it 'without needing to deal with any of the issues of tool calling.' Tool calling — one of the hardest, most error-prone parts of agent engineering — is simply not the voice layer's problem when you wrap rather than replace.

ElevenLabs layers on an additional refinement: a distinction between client-side and server-side tools. Client-side tools can run on the frontend to do things like manipulate the DOM directly, while server-side tools and proxied calls route to the wrapped agent. The design principle worth extracting: when adding a new modality to an existing agent, push the new modality's concerns (audio, turn-taking, DOM manipulation) into the wrapper and delegate everything the existing agent already does well (business logic, tool execution, RAG) straight through. The hard, already-solved work stays where it lives.
