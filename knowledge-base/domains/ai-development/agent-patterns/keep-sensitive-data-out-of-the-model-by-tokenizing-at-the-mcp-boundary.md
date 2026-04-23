---
id: INS-260410-358E
domain: ai-development
topic: agent-patterns
title: Keep sensitive data out of the model by tokenizing at the MCP boundary
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - privacy
  - mcp
  - security
  - agent-architecture
  - compliance
sources:
  - type: blog
    title: 'Code execution with MCP: building more efficient AI agents'
    url: 'https://www.anthropic.com/engineering/code-execution-with-mcp'
date_extracted: '2026-04-10'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Have the MCP client replace sensitive fields with opaque tokens before the
    agent sees them, then substitute real values on downstream tool calls.
  standard: >-
    When an agent moves customer records from Google Sheets to Salesforce, the
    model doesn't actually need to read anyone's email or phone number — it just
    needs to know which row maps to which record. Code execution with MCP
    enables the client to intercept those fields, replace them with tokens like
    [EMAIL_1] or [PHONE_1], and only expand them back to real values when they
    flow into the destination tool.


    This separates data flow from cognitive flow: the real values pass from one
    MCP server to another through the execution environment, but they never
    enter the model's context. That means the agent can't accidentally log PII,
    can't be prompt-injected into leaking it, and can operate under
    deterministic security rules about where data is allowed to flow.


    For regulated industries, this turns 'we can't let an LLM near this data'
    into 'the LLM orchestrates it without seeing it' — a meaningfully different
    compliance posture.
stance: >-
  Agents can operate over PII and other sensitive fields without those values
  ever entering the model's context if the MCP client tokenizes them on read and
  untokenizes on write.
related:
  - INS-260423-FF52
  - INS-260323-8D12
  - INS-260410-992A
  - INS-260409-45C3
  - INS-260320-9D89
---
When an agent moves customer records from Google Sheets to Salesforce, the model doesn't actually need to read anyone's email or phone number — it just needs to know which row maps to which record. Code execution with MCP enables the client to intercept those fields, replace them with tokens like [EMAIL_1] or [PHONE_1], and only expand them back to real values when they flow into the destination tool.

This separates data flow from cognitive flow: the real values pass from one MCP server to another through the execution environment, but they never enter the model's context. That means the agent can't accidentally log PII, can't be prompt-injected into leaking it, and can operate under deterministic security rules about where data is allowed to flow.

For regulated industries, this turns 'we can't let an LLM near this data' into 'the LLM orchestrates it without seeing it' — a meaningfully different compliance posture.
