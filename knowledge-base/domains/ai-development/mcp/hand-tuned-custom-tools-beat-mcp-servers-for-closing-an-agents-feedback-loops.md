---
id: INS-260627-46EB
domain: ai-development
topic: mcp
title: Hand-tuned custom tools beat MCP servers for closing an agent's feedback loops
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - mcp
  - tool-design
  - agent-architecture
  - context-window
  - feedback-loops
sources:
  - type: youtube
    title: 'Amp Code: Next Generation AI Coding – Beyang Liu, Amp Code'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=gvIAkmZUEZY'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    MCP server authors can't tune tool descriptions to your agent's task, and
    surplus tools cause context confusion, so a focused custom tool set wins.
  standard: >-
    Amp made an early, deliberate bet against leaning heavily into MCP. The
    reasoning is twofold. First, building a good agent is mostly about
    identifying the feedback loops the agent needs to close and giving it a tool
    set geared toward closing them — but the author of an external MCP server
    has no idea what your agent is trying to accomplish, so they can't tune the
    tool descriptions for your task. Second, tools impose a 'context confusion'
    tax: every tool added to the context window is one more thing the agent must
    choose from, and irrelevant tools actively degrade decision quality. The
    practical implication is that for a focused agent, ownership and tuning of a
    small core tool set beats the breadth of a plug-in protocol. MCP's value is
    in interoperability and reach, not in producing a tightly optimized agent
    for a specific workflow.
stance: >-
  Coding-agent builders should invest in a refined custom tool set rather than
  generic MCP integrations.
related:
  - INS-260410-60C8
  - INS-260410-8ECF
  - INS-260627-B416
  - INS-260605-6591
  - INS-260626-BC79
  - INS-260627-917D
---
Amp made an early, deliberate bet against leaning heavily into MCP. The reasoning is twofold. First, building a good agent is mostly about identifying the feedback loops the agent needs to close and giving it a tool set geared toward closing them — but the author of an external MCP server has no idea what your agent is trying to accomplish, so they can't tune the tool descriptions for your task. Second, tools impose a 'context confusion' tax: every tool added to the context window is one more thing the agent must choose from, and irrelevant tools actively degrade decision quality. The practical implication is that for a focused agent, ownership and tuning of a small core tool set beats the breadth of a plug-in protocol. MCP's value is in interoperability and reach, not in producing a tightly optimized agent for a specific workflow.
