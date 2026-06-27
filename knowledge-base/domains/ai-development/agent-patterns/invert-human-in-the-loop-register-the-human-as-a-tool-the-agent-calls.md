---
id: INS-260627-E831
domain: ai-development
topic: agent-patterns
title: 'Invert human-in-the-loop: register the human as a tool the agent calls'
actionability: inspiration
confidence: medium
shelf_life: evergreen
status: active
tags:
  - human-in-the-loop
  - agent-architecture
  - tool-calling
  - agentic-workflows
sources:
  - type: youtube
    title: 'Shipping AI That Works: An Evaluation Framework for PMs – Aman Khan, Arize'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=2HNSG990Ew8'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Flip the usual framing so the agent does everything it can and, for the
    parts it can't, calls a human as a tool — e.g. the CFO is listed as a tool
    and the agent Slacks them for data not in the accounting system, then
    continues.
  standard: >-
    An audience member describes a workflow where, rather than a human approving
    an agent's actions, the human is modeled as one of the agent's tools. When
    the agent needs something unavailable in the accounting system, it 'calls'
    the CFO — who is registered as a tool — by sending a Slack message, receives
    the answer, and continues its run. This inverts the conventional
    human-in-the-loop pattern (human supervises agent) into
    agent-orchestrates-human-as-resource.


    The pattern maps onto a 'skill stack' view of organizations: define the
    capabilities and resources available, including the things only specific
    humans possess (institutional knowledge, sign-off authority, data outside
    any system), and let the agent route to them as needed. It's mathematically
    still a checkpoint where a human supplies or approves information, but
    architecturally it lets you start from 'the agent could do everything' and
    surgically delegate only the irreducibly human parts — a useful framing as
    agents take on more end-to-end workflows.
stance: >-
  Instead of treating the agent as a tool for humans, expose humans as tools the
  agent invokes for capabilities only they have.
related:
  - INS-260329-206D
  - INS-260403-1325
  - INS-260405-E8A1
  - INS-260605-D404
  - INS-260605-C122
  - INS-260605-1CC3
  - INS-260627-FEB4
  - INS-260524-2C7C
  - INS-260410-9F17
  - INS-260627-1224
---
An audience member describes a workflow where, rather than a human approving an agent's actions, the human is modeled as one of the agent's tools. When the agent needs something unavailable in the accounting system, it 'calls' the CFO — who is registered as a tool — by sending a Slack message, receives the answer, and continues its run. This inverts the conventional human-in-the-loop pattern (human supervises agent) into agent-orchestrates-human-as-resource.

The pattern maps onto a 'skill stack' view of organizations: define the capabilities and resources available, including the things only specific humans possess (institutional knowledge, sign-off authority, data outside any system), and let the agent route to them as needed. It's mathematically still a checkpoint where a human supplies or approves information, but architecturally it lets you start from 'the agent could do everything' and surgically delegate only the irreducibly human parts — a useful framing as agents take on more end-to-end workflows.
