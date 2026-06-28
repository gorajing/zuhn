---
id: INS-260627-8DF1
domain: ai-development
topic: mcp
title: >-
  Flatten tool arguments to top-level primitives with enums, never nested dicts
  or coupled fields
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - mcp
  - tool-design
  - api-design
  - enums
  - agent-design
sources:
  - type: youtube
    title: 'Your MCP Server is Bad (and you should feel bad) - Jeremiah Lowin, Prefect'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=96G7FLab8xc'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Don't ask an LLM to invent a complex config dict — give it named primitives
    like email: str and a status: Literal['open','closed'] enum it can't get
    wrong.
  standard: >-
    A frequent failure is exposing a tool whose input is a configuration
    dictionary, documented somewhere far from the call site — in a docstring,
    system prompt, or sub-agent definition. This creates a doubly-documented
    tool: when the schema and the prose drift, one is wrong and only error
    messages save you. Even a fully-annotated Pydantic model is hard for the
    agent; better to flatten to top-level primitives the model names directly
    (email: str, include_cancelled: bool, limit: int) so there's nothing to
    assemble and little to get wrong.


    Two refinements. First, use literals or enums whenever the choice is
    constrained — most LLMs don't know this syntax is available and will default
    to format: str = 'basic', which works but throws away the guardrail; the
    enum makes invalid inputs unrepresentable. Second, avoid tightly-coupled
    arguments, where the valid values of one field depend on another (e.g., a
    file_type that restricts which process_mode values are legal). Coupled
    arguments force the agent to track cross-field constraints it can't see, and
    confuse it. Where unavoidable, elicitation (a structured mid-execution
    request) is a better home for coupled inputs than a flat signature. Notably,
    all of this applies equally to plain function tools inside an agent
    framework, not just MCP servers — the agent is the user either way.
stance: >-
  Agent-facing tool arguments should be flat top-level primitives with
  literals/enums for constrained choices, never configuration dictionaries or
  tightly-coupled fields.
related:
  - INS-260410-0C77
  - INS-260605-F512
  - INS-260626-9AEB
  - INS-260626-15F3
  - INS-260514-4436
  - INS-260627-805E
---
A frequent failure is exposing a tool whose input is a configuration dictionary, documented somewhere far from the call site — in a docstring, system prompt, or sub-agent definition. This creates a doubly-documented tool: when the schema and the prose drift, one is wrong and only error messages save you. Even a fully-annotated Pydantic model is hard for the agent; better to flatten to top-level primitives the model names directly (email: str, include_cancelled: bool, limit: int) so there's nothing to assemble and little to get wrong.

Two refinements. First, use literals or enums whenever the choice is constrained — most LLMs don't know this syntax is available and will default to format: str = 'basic', which works but throws away the guardrail; the enum makes invalid inputs unrepresentable. Second, avoid tightly-coupled arguments, where the valid values of one field depend on another (e.g., a file_type that restricts which process_mode values are legal). Coupled arguments force the agent to track cross-field constraints it can't see, and confuse it. Where unavoidable, elicitation (a structured mid-execution request) is a better home for coupled inputs than a flat signature. Notably, all of this applies equally to plain function tools inside an agent framework, not just MCP servers — the agent is the user either way.
