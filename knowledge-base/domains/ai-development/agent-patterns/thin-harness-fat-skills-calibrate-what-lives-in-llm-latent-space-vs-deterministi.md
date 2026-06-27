---
id: INS-260626-158E
domain: ai-development
topic: agent-patterns
title: >-
  Thin harness, fat skills: calibrate what lives in LLM latent space vs
  deterministic code
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - harness
  - skills
  - markdown-as-code
  - agent-architecture
  - determinism
sources:
  - type: youtube
    title: 'Tokenmaxxing: How Top Builders Use AI To Do The Work Of 400 Engineers'
    author: Y Combinator
    url: 'https://www.youtube.com/watch?v=57lDpTwiW6g'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Don't rebuild the core LLM loop — reuse a strong harness and spend your time
    deciding which work belongs in markdown (LLM judgment) versus brittle
    deterministic code.
  standard: >-
    The harness is the core loop that takes user input, hands it to the LLM, and
    runs tool calls; Tan argues it's wasteful to keep rewriting it when great
    ones already exist — just use them. The real engineering work is authoring
    the markdown skills and, crucially, calibrating the boundary between two
    domains. 'Latent space' (LLM) handles generic cases, special cases, and
    understanding what the user actually wants — things code literally cannot
    know. 'Deterministic space' (code/tools) handles real actions that must be
    exact, like calling an API. His wedding-planner analogy: the plain-English
    checklist of how to throw the wedding belongs in markdown; calling 20 venues
    belongs in a Twilio call, not markdown. Most failures in agentic engineering
    come from forcing into brittle code what should have been markdown, because
    code doesn't understand intent or special cases. 'Markdown is code, just
    compiled differently.' This reframes the build surface — relates to never
    betting against the model and to the principle that bolt-on infrastructure
    is a constantly-deleted compensation layer.
stance: >-
  Builders should stop rewriting the agent harness and instead invest their
  effort in markdown skills, carefully assigning each task to either LLM latent
  space or deterministic code.
related:
  - INS-260605-9FCF
  - INS-260626-F25E
  - INS-260626-715B
  - INS-260625-36DF
  - INS-260524-63C9
  - PRI-260405-F9BD
---
The harness is the core loop that takes user input, hands it to the LLM, and runs tool calls; Tan argues it's wasteful to keep rewriting it when great ones already exist — just use them. The real engineering work is authoring the markdown skills and, crucially, calibrating the boundary between two domains. 'Latent space' (LLM) handles generic cases, special cases, and understanding what the user actually wants — things code literally cannot know. 'Deterministic space' (code/tools) handles real actions that must be exact, like calling an API. His wedding-planner analogy: the plain-English checklist of how to throw the wedding belongs in markdown; calling 20 venues belongs in a Twilio call, not markdown. Most failures in agentic engineering come from forcing into brittle code what should have been markdown, because code doesn't understand intent or special cases. 'Markdown is code, just compiled differently.' This reframes the build surface — relates to never betting against the model and to the principle that bolt-on infrastructure is a constantly-deleted compensation layer.
