---
id: INS-260625-0148
domain: ai-development
topic: agent-evals
title: 'Agentic software evals should measure the system harness, not only the model'
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - agent-harness
  - coding-agents
  - verification
  - eval-design
sources:
  - type: blog
    title: >-
      Position: Coding Benchmarks Are Misaligned with Agentic Software
      Engineering
    url: 'https://arxiv.org/html/2606.17799v1'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Treat model, tools, context, environment, and feedback as explicit
    evaluation variables.
  standard: >-
    The paper's central distinction maps directly to AgentRun: a run should not
    record only the model and final result. It should preserve the task
    decomposition, executor configuration, loaded context, tool surface,
    environment state, and gate stack so later reliability claims can
    distinguish model capability from harness design.
subtopic: system-harnesses
stance: >-
  For production coding agents, the system harness is the real artifact under
  test because prompts, tools, context, environment, and feedback loops can move
  outcomes as much as model choice.
related:
  - INS-260605-8AFF
  - INS-260625-3EE6
  - INS-260628-7862
  - INS-260628-009E
  - INS-260603-DFA6
---
The paper's central distinction maps directly to AgentRun: a run should not record only the model and final result. It should preserve the task decomposition, executor configuration, loaded context, tool surface, environment state, and gate stack so later reliability claims can distinguish model capability from harness design.
