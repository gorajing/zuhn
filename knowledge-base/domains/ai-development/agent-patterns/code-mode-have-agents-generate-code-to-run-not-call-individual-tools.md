---
id: INS-260625-2D05
domain: ai-development
topic: agent-patterns
title: 'Code mode: have agents generate code to run, not call individual tools'
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - code-mode
  - mcp
  - tool-calling
  - token-efficiency
  - agent-capability
sources:
  - type: youtube
    title: >-
      Why Eval++ Is the Next Great Compute Primitive — Sunil Pai & Matt Carey,
      Cloudflare
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=SKDJo2CopRs'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Exposing 2,600 API endpoints to an agent as generated-and-executed code
    costs ~1,000 tokens; exposing them as individual MCP tool definitions would
    be vastly more.
  standard: >-
    The dominant pattern for agent capability is the tool call: each API becomes
    a named function with a schema the model must read and select. This scales
    badly — Cloudflare's full surface is ~2,600 endpoints, and stuffing those
    into a tool list bloats context and degrades selection. 'Code mode' inverts
    it: instead of N tool definitions, give the model a code-execution primitive
    and let it write a short program that calls whatever endpoints it needs. The
    claim is that all 2,600 endpoints become reachable in roughly 1,000 tokens.


    The reason code is a better interface than a tool list is that code natively
    expresses composition, control flow, and chaining — things a flat list of
    tool calls forces the orchestrator to handle turn by turn. The model already
    'writes code at this point,' so the language (JavaScript, Python, anything
    via WASM) matters less than the fact that you let it express intent as a
    program rather than a sequence of discrete calls.


    This is only viable if you can run the generated code safely and instantly
    (see the capability-sandbox insight). Where it applies: any agent that needs
    broad, composable access to a large API surface, or anywhere you currently
    maintain a sprawling tool registry that is expensive to keep in context.
stance: >-
  Giving an agent broad capability is cheaper and more powerful by letting it
  generate code that you execute than by exposing each API as a discrete tool
  call.
related:
  - INS-260320-9FD5
  - INS-260325-4FF3
  - INS-260410-C022
  - PRI-260328-8317
  - INS-260625-2906
---
The dominant pattern for agent capability is the tool call: each API becomes a named function with a schema the model must read and select. This scales badly — Cloudflare's full surface is ~2,600 endpoints, and stuffing those into a tool list bloats context and degrades selection. 'Code mode' inverts it: instead of N tool definitions, give the model a code-execution primitive and let it write a short program that calls whatever endpoints it needs. The claim is that all 2,600 endpoints become reachable in roughly 1,000 tokens.

The reason code is a better interface than a tool list is that code natively expresses composition, control flow, and chaining — things a flat list of tool calls forces the orchestrator to handle turn by turn. The model already 'writes code at this point,' so the language (JavaScript, Python, anything via WASM) matters less than the fact that you let it express intent as a program rather than a sequence of discrete calls.

This is only viable if you can run the generated code safely and instantly (see the capability-sandbox insight). Where it applies: any agent that needs broad, composable access to a large API surface, or anywhere you currently maintain a sprawling tool registry that is expensive to keep in context.
