---
id: INS-260628-7862
domain: ai-development
topic: agent-patterns
title: >-
  Design agent tools for what the LLM wants to see, not as a mirror of your
  existing API
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - context-engineering
  - tool-design
  - agents
  - prompt-engineering
  - token-efficiency
sources:
  - type: youtube
    title: "Five hard earned lessons about Evals —\_Ankur Goyal, Braintrust"
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=a4BV0gGmXgA'
date_extracted: '2026-06-28'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Treat each tool definition and its output as a prompt-writing surface
    engineered for the LLM — not a thin wrapper over your GraphQL/REST API —
    because tools, not the system prompt, dominate the context.
  standard: >-
    Context engineering is replacing prompt engineering: in real agent
    trajectories, the vast majority of tokens come not from the system prompt
    but from tool definitions and tool responses, which significantly dominate
    the LLM's token budget. The mistake is treating tools as a reflection of
    your APIs or product as they exist today — taking your GraphQL API and
    handing it over as tool calls. Instead, design tools around what the LLM
    wants to see, which Goyal notes is often very disruptive: good tools are not
    an API layer on top of existing infrastructure.


    The same care applies to outputs. He cites shifting one internal tool's
    output from JSON to YAML producing a significant improvement — to JavaScript
    the two are equivalent structured data, but to an LLM, YAML's lower token
    overhead and readability during analysis matter. The reframe that helps:
    write a tool the way you'd write a prompt. The tool's interface and output
    format are your opportunity to communicate with the model and set it up for
    success, and getting them right has a dramatic impact on agent performance —
    far more than polishing the system prompt alone.
stance: >-
  Because tool definitions and tool outputs dominate an agent's token budget,
  you must engineer them for the LLM's comprehension rather than exposing your
  existing APIs, even when that means a token-efficient format like YAML over
  JSON.
related:
  - INS-260409-171B
  - INS-260410-1B17
  - INS-260410-60C8
  - INS-260514-1D60
  - INS-260514-2C6C
  - INS-260605-59FE
  - INS-260605-52E4
  - INS-260625-0148
  - INS-260626-B983
  - INS-260627-A0EE
---
Context engineering is replacing prompt engineering: in real agent trajectories, the vast majority of tokens come not from the system prompt but from tool definitions and tool responses, which significantly dominate the LLM's token budget. The mistake is treating tools as a reflection of your APIs or product as they exist today — taking your GraphQL API and handing it over as tool calls. Instead, design tools around what the LLM wants to see, which Goyal notes is often very disruptive: good tools are not an API layer on top of existing infrastructure.

The same care applies to outputs. He cites shifting one internal tool's output from JSON to YAML producing a significant improvement — to JavaScript the two are equivalent structured data, but to an LLM, YAML's lower token overhead and readability during analysis matter. The reframe that helps: write a tool the way you'd write a prompt. The tool's interface and output format are your opportunity to communicate with the model and set it up for success, and getting them right has a dramatic impact on agent performance — far more than polishing the system prompt alone.
