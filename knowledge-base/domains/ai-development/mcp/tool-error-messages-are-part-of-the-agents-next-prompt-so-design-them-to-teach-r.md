---
id: INS-260627-F2AE
domain: ai-development
topic: mcp
title: >-
  Tool error messages are part of the agent's next prompt, so design them to
  teach recovery
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - mcp
  - error-handling
  - agent-design
  - progressive-disclosure
  - tool-design
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
    An LLM doesn't see a 400 or 500 — it sees text it must act on, so a cryptic
    error wastes a turn while a helpful one becomes free, just-in-time
    documentation.
  standard: >-
    Unlike a human developer who knows an HTTP 400 means 'malformed request,' an
    agent receives every tool response — success or failure — as information
    about whether it achieved its goal, and that text flows straight into its
    next prompt. If you let a bare ValueError or a cryptic MCP error code with
    an integer propagate, the agent may know only that something failed and
    blindly retry. But because the error is the next prompt, you have an
    opportunity to document your API through its failure modes: be deliberately
    overboard in helpfulness. Tell it what went wrong and how to fix it.


    This enables a counterintuitive progressive-disclosure strategy: instead of
    bloating a tool's docstring with every parameter possibility (which costs
    handshake tokens for every agent, even those who'd never hit that path), you
    can keep the docstring lean and document recovery from the most common
    failures inside the error messages themselves. You acknowledge the agent
    will likely get the first call wrong, then use the error to send exactly the
    information needed for the second call. The cost is paid only when the
    failure actually occurs, saving the token budget on handshake. Caveat:
    errors that are too aggressive or scary can cause an agent to abandon a tool
    as 'inoperable' permanently — so tune for helpful, not alarming.
stance: >-
  Error messages from a tool are the agent's next prompt and should be written
  to guide recovery, not merely report failure with a code.
related:
  - INS-260330-2294
  - INS-260605-77EB
  - INS-260625-CF6B
  - INS-260514-93C2
  - INS-260626-9AEB
  - INS-260605-2A69
---
Unlike a human developer who knows an HTTP 400 means 'malformed request,' an agent receives every tool response — success or failure — as information about whether it achieved its goal, and that text flows straight into its next prompt. If you let a bare ValueError or a cryptic MCP error code with an integer propagate, the agent may know only that something failed and blindly retry. But because the error is the next prompt, you have an opportunity to document your API through its failure modes: be deliberately overboard in helpfulness. Tell it what went wrong and how to fix it.

This enables a counterintuitive progressive-disclosure strategy: instead of bloating a tool's docstring with every parameter possibility (which costs handshake tokens for every agent, even those who'd never hit that path), you can keep the docstring lean and document recovery from the most common failures inside the error messages themselves. You acknowledge the agent will likely get the first call wrong, then use the error to send exactly the information needed for the second call. The cost is paid only when the failure actually occurs, saving the token budget on handshake. Caveat: errors that are too aggressive or scary can cause an agent to abandon a tool as 'inoperable' permanently — so tune for helpful, not alarming.
