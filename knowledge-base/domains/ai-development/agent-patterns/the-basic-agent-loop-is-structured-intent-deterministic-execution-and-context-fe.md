---
id: INS-260605-FC00
domain: ai-development
topic: agent-patterns
title: >-
  The basic agent loop is structured intent, deterministic execution, and
  context feedback
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - agent-loop
  - tool-calling
  - structured-outputs
  - deterministic-execution
  - context-feedback
sources:
  - type: blog
    title: >-
      GitHub - humanlayer/12-factor-agents: What are the principles we can use
      to build LLM-powered software that is actually good enough to put in the
      hands of production customers?
    url: 'https://github.com/humanlayer/12-factor-agents'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: Let the model choose the next action; let code execute it.
  standard: >-
    HumanLayer reduces the agent loop to a repeating sequence: the LLM emits
    structured JSON describing the next step, deterministic code executes that
    step, and the result is appended to context until the model decides the
    workflow is done. This separation keeps semantic judgment and mechanical
    execution in different layers.
  deep: >-
    The operational invariant is useful for Codex-like work: never ask the model
    to simulate a tool result that code can observe. The model should decide
    among actions, while scripts, tests, and APIs produce the evidence that
    returns to the context window.
stance: >-
  A reliable agent loop should separate LLM selection of the next structured
  action from deterministic tool execution and then feed compact results back
  into context.
related:
  - INS-260605-5CC7
  - INS-260410-E658
  - INS-260505-D440
  - INS-260605-0C88
  - INS-260625-3768
---
HumanLayer reduces the agent loop to a repeating sequence: the LLM emits structured JSON describing the next step, deterministic code executes that step, and the result is appended to context until the model decides the workflow is done. This separation keeps semantic judgment and mechanical execution in different layers.
