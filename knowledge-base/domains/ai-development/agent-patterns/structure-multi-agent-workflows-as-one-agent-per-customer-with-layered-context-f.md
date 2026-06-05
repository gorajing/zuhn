---
id: INS-260605-0374
domain: ai-development
topic: agent-patterns
title: >-
  Structure multi-agent workflows as one agent per customer with layered context
  files
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - multi-agent
  - context-engineering
  - b2b
  - agent-orchestration
sources:
  - type: youtube
    title: >-
      A Piece of Pi: Embedding The OpenClaw Coding Agent In Your Product —
      Matthias Luebken, Tavon
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=vAIDdLKB6-w'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Give each customer its own agent built from a shared role harness (AGENT.md)
    plus a customer-specific context file (CUSTOMER.md), with persistent
    sessions per case.
  standard: >-
    Seven AI's RFP/sales pipeline monitors an inbox, uses a gateway to route
    inbound emails to multiple agents, and runs one agent per customer. Each
    agent shares a general harness file (e.g. AGENT.md) defining its role and
    how to handle inputs and outputs, layered with a customer-specific file
    (CUSTOMER.md) capturing that customer's quirks, access rights, and
    discounts.


    State is managed by reusing per-case sessions, so the agent retains prior
    conversation context across an ongoing deal. This decomposition — generic
    role plus per-entity context plus per-case session — keeps each agent's
    instructions focused while scaling across many customers, and leans on the
    underlying agent framework's session support rather than reinventing memory.
stance: >-
  Per-customer agents with a shared harness plus customer-specific context files
  outperform a single general agent for B2B workflows.
related:
  - INS-260409-B122
  - INS-260410-F3D8
  - INS-260514-283E
  - INS-260322-C33D
  - PRI-260321-D74F
---
Seven AI's RFP/sales pipeline monitors an inbox, uses a gateway to route inbound emails to multiple agents, and runs one agent per customer. Each agent shares a general harness file (e.g. AGENT.md) defining its role and how to handle inputs and outputs, layered with a customer-specific file (CUSTOMER.md) capturing that customer's quirks, access rights, and discounts.

State is managed by reusing per-case sessions, so the agent retains prior conversation context across an ongoing deal. This decomposition — generic role plus per-entity context plus per-case session — keeps each agent's instructions focused while scaling across many customers, and leans on the underlying agent framework's session support rather than reinventing memory.
