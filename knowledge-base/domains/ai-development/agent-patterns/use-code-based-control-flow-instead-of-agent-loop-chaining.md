---
id: INS-260410-E658
domain: ai-development
topic: agent-patterns
title: Use code-based control flow instead of agent-loop chaining
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - mcp
  - control-flow
  - latency
  - agent-architecture
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
    Let agents write while-loops and if-statements as code rather than rerunning
    the model to evaluate each branch.
  standard: >-
    An agent waiting for a Slack deployment notification could alternate between
    getChannelHistory tool calls and sleep instructions, but each round trip
    pays model latency and token cost. Writing the polling loop as actual code —
    `while(!found) { ... await sleep(5000); }` — lets the sandbox handle the
    waiting and condition evaluation directly.


    Beyond efficiency, this improves 'time to first token' latency: the model
    doesn't have to think through an if-statement for every decision, because
    the code environment already resolves the branch. Error handling, retries,
    and batching also become familiar imperative code rather than brittle
    tool-call chains.


    The mental model shift is treating the model as a code author that emits one
    program per turn, not as an interpreter stepping through every control flow
    decision one tool call at a time.
stance: >-
  Loops, conditionals, and waits should run inside the code execution
  environment rather than being simulated by alternating tool calls through the
  agent loop.
related:
  - INS-260321-D3BE
  - INS-260327-9D50
  - INS-260410-A27C
  - INS-260409-0DB0
  - INS-260327-A9D5
  - INS-260410-1030
  - INS-260325-D540
---
An agent waiting for a Slack deployment notification could alternate between getChannelHistory tool calls and sleep instructions, but each round trip pays model latency and token cost. Writing the polling loop as actual code — `while(!found) { ... await sleep(5000); }` — lets the sandbox handle the waiting and condition evaluation directly.

Beyond efficiency, this improves 'time to first token' latency: the model doesn't have to think through an if-statement for every decision, because the code environment already resolves the branch. Error handling, retries, and batching also become familiar imperative code rather than brittle tool-call chains.

The mental model shift is treating the model as a code author that emits one program per turn, not as an interpreter stepping through every control flow decision one tool call at a time.
