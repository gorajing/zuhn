---
id: INS-260605-80DC
domain: ai-development
topic: agents
title: Wrap sovereign agents in input/output guardrails and scope tools per agent
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - agents
  - guardrails
  - prompt-injection
  - tool-scoping
  - human-in-the-loop
sources:
  - type: youtube
    title: >-
      What Breaks When You Build AI Under Sovereignty Constraints - Bilge Yücel,
      deepset GmbH
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=x2bH0RKPgdc'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Bracket the agent with a prompt-injection/regulatory input guardrail and a
    compliance output guardrail, scope its tools, and require human approval on
    high-risk actions.
  standard: >-
    The reference sovereign-agent shape is a sandwich: an input guardrail
    classifies the user request (checking for prompt injection and
    domain-specific regulatory intent) and routes unsafe inputs out of the
    application immediately; the agent (an LLM with a system prompt and tools)
    does the work; an output guardrail runs compliance checks so sensitive
    information isn't leaked back to the user. Guardrails themselves can run on
    small local models, keeping that classification step inside your sovereignty
    boundary.


    Tool design carries two more sovereignty-relevant patterns. First, scope
    tools per agent rather than granting one agent access to an entire MCP
    server's tool catalog — pick the specific tools (e.g., knowledge-base search
    and PDF generation) that agent legitimately needs. Second, when tool counts
    grow into the hundreds, put them in a searchable tool set (BM25 dynamic tool
    search) so tool definitions don't flood the context window. Finally, attach
    confirmation strategies so high-risk tools (submitting a request, listing
    payment requests) demand human approval while low-risk tools run freely —
    operationalizing human-in-the-loop at the per-tool level.
stance: >-
  A sovereign agent architecture should gate every request with input and output
  guardrails and expose only a scoped, searchable subset of tools per agent.
related:
  - INS-260402-876A
  - INS-260403-4D80
  - INS-260411-27AA
  - INS-260605-310E
  - INS-260605-683B
  - INS-260603-6B3D
  - INS-260327-DCAF
  - INS-260605-A46E
---
The reference sovereign-agent shape is a sandwich: an input guardrail classifies the user request (checking for prompt injection and domain-specific regulatory intent) and routes unsafe inputs out of the application immediately; the agent (an LLM with a system prompt and tools) does the work; an output guardrail runs compliance checks so sensitive information isn't leaked back to the user. Guardrails themselves can run on small local models, keeping that classification step inside your sovereignty boundary.

Tool design carries two more sovereignty-relevant patterns. First, scope tools per agent rather than granting one agent access to an entire MCP server's tool catalog — pick the specific tools (e.g., knowledge-base search and PDF generation) that agent legitimately needs. Second, when tool counts grow into the hundreds, put them in a searchable tool set (BM25 dynamic tool search) so tool definitions don't flood the context window. Finally, attach confirmation strategies so high-risk tools (submitting a request, listing payment requests) demand human approval while low-risk tools run freely — operationalizing human-in-the-loop at the per-tool level.
