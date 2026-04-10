---
id: INS-260410-095B
domain: ai-development
topic: agent-patterns
title: Give agents a mid-response scratchpad when tool chains get long
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - agents
  - tool-use
  - reasoning
  - claude
  - reliability
sources:
  - type: blog
    title: 'The "think" tool: Enabling Claude to stop and think'
    url: 'https://www.anthropic.com/engineering/claude-think-tool'
date_extracted: '2026-04-10'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Add a think tool (a no-op that just logs a thought) so the agent can stop
    and reason about tool outputs before acting again.
  standard: >-
    Most agentic failures in long chains come not from reasoning ability but
    from the model barreling past important information in tool call results. A
    'think' tool — literally a no-op that accepts a thought string and appends
    it to the log — gives the model a structured place to pause, restate
    constraints, and verify its plan before acting. Anthropic's tau-bench
    results showed this improved consistency (pass^k) across k=1 through k=5 in
    both airline and retail customer service domains.


    The mechanism is subtle: it isn't that the tool does anything, it's that its
    presence gives the model permission and a slot to reason without prematurely
    committing to an action. This is distinct from extended thinking, which
    happens *before* the response starts. Think-tool reasoning happens *after*
    tool results come back, which is exactly when new information needs to be
    integrated.


    The pattern generalizes beyond Claude: any agent that chains many tool calls
    in stateful, rule-governed environments should have a cheap scratchpad
    action available. Implementation cost is trivial — a few lines for the tool
    schema — and the downside is minimal because the model only uses it when
    helpful.
stance: >-
  A no-op 'think' tool that lets the model pause mid-response to reason about
  tool outputs materially improves agentic reliability in long, policy-heavy
  tool chains.
related:
  - INS-260323-64A4
  - INS-260403-BA81
  - INS-260409-DC8C
  - INS-260409-04C8
  - INS-260410-0FC1
  - INS-260410-60C8
  - INS-260410-4067
  - INS-260410-87B5
  - INS-260410-6ABA
---
Most agentic failures in long chains come not from reasoning ability but from the model barreling past important information in tool call results. A 'think' tool — literally a no-op that accepts a thought string and appends it to the log — gives the model a structured place to pause, restate constraints, and verify its plan before acting. Anthropic's tau-bench results showed this improved consistency (pass^k) across k=1 through k=5 in both airline and retail customer service domains.

The mechanism is subtle: it isn't that the tool does anything, it's that its presence gives the model permission and a slot to reason without prematurely committing to an action. This is distinct from extended thinking, which happens *before* the response starts. Think-tool reasoning happens *after* tool results come back, which is exactly when new information needs to be integrated.

The pattern generalizes beyond Claude: any agent that chains many tool calls in stateful, rule-governed environments should have a cheap scratchpad action available. Implementation cost is trivial — a few lines for the tool schema — and the downside is minimal because the model only uses it when helpful.
