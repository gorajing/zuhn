---
id: INS-260627-DF4B
domain: ai-development
topic: agent-patterns
title: Pull mandatory judgment-free steps out of the agentic loop entirely
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - agent-patterns
  - system-design
  - context-management
  - determinism
  - tool-as-function
sources:
  - type: youtube
    title: "Bending a Public MCP Server Without Breaking It —\_Nimrod Hauser, Baz"
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=U00AOI1eJUE'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Treat third-party tools as ordinary callable functions and run the
    predictable, always-on parts of a workflow (e.g. login) outside the agent,
    only handing control to the agent once the deterministic setup is done.
  standard: >-
    The fifth and most overlooked practice is to stop thinking of MCP-provided
    tools as exclusively agent-facing. They are just integration code, and you
    can call that code directly, ignoring its description, whenever a step is
    better handled deterministically. The canonical case is login: every
    spec-reviewer run begins with a login, logins are fiddly (per-client
    mechanisms, secrets, JWT injection into browser local storage), and the
    agent gave subpar results when left to do it itself. So the workflow logs in
    deterministically first — using the MCP's own tools as plain functions — and
    only then creates the agent and invokes it with 'you're logged in, off to
    the races.'


    The benefit is twofold: reliability (a mandatory, error-prone step is
    removed from the realm of non-deterministic decision-making) and context
    economy (the agent's context window is never burdened with the clunky login
    mechanics). The general principle: for steps that are both unavoidable and
    require no agentic judgment, take them off the agent's hands. Reserve the
    agent's reasoning — and its limited context — for the parts of the task that
    actually need intelligence.
stance: >-
  Steps that are always required and need no judgment, like login, should be
  executed as plain deterministic function calls rather than handed to the
  agent.
related:
  - INS-260627-F522
  - INS-260410-1030
  - INS-260627-6217
  - INS-260410-F910
  - INS-260327-2101
---
The fifth and most overlooked practice is to stop thinking of MCP-provided tools as exclusively agent-facing. They are just integration code, and you can call that code directly, ignoring its description, whenever a step is better handled deterministically. The canonical case is login: every spec-reviewer run begins with a login, logins are fiddly (per-client mechanisms, secrets, JWT injection into browser local storage), and the agent gave subpar results when left to do it itself. So the workflow logs in deterministically first — using the MCP's own tools as plain functions — and only then creates the agent and invokes it with 'you're logged in, off to the races.'

The benefit is twofold: reliability (a mandatory, error-prone step is removed from the realm of non-deterministic decision-making) and context economy (the agent's context window is never burdened with the clunky login mechanics). The general principle: for steps that are both unavoidable and require no agentic judgment, take them off the agent's hands. Reserve the agent's reasoning — and its limited context — for the parts of the task that actually need intelligence.
