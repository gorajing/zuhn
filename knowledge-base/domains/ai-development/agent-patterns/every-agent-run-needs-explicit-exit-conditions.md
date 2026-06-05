---
id: INS-260605-BA4B
domain: ai-development
topic: agent-patterns
title: Every agent run needs explicit exit conditions
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - agent-loop
  - exit-conditions
  - control-flow
  - reliability
sources:
  - type: blog
    title: A practical guide to building agents
    url: >-
      https://openai.com/business/guides-and-resources/a-practical-guide-to-building-ai-agents/
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: Agent autonomy needs a stop rule.
  standard: >-
    The guide defines a run as a loop where the LLM continues until an exit
    condition is reached. Examples include a final-output tool, a response
    without tool calls, an error, or a maximum turn count. Without explicit exit
    conditions, autonomy turns into hidden control-flow risk.
  deep: >-
    This is a useful design invariant for long-running Codex and KB workflows:
    write down what ends the loop before starting it. The ending should be
    observable, not a feeling that progress looks good. That creates a natural
    bridge to verification gates and completion audits.
stance: >-
  An agent loop becomes reliable only when it has explicit exit conditions such
  as final structured output, no tool calls, a max-turn limit, errors, or human
  handoff.
related:
  - INS-260328-5431
  - INS-260410-761E
  - INS-260423-31A1
  - INS-260403-21AF
  - INS-260404-292E
---
The guide defines a run as a loop where the LLM continues until an exit condition is reached. Examples include a final-output tool, a response without tool calls, an error, or a maximum turn count. Without explicit exit conditions, autonomy turns into hidden control-flow risk.
