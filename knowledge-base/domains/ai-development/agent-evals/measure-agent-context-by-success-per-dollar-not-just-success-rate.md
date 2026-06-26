---
id: INS-260626-6AF4
domain: ai-development
topic: agent-evals
title: 'Measure agent context by success per dollar, not just success rate'
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - agent-evals
  - cost
  - reasoning-tokens
  - tool-use
sources:
  - type: paste
    title: >-
      Evaluating AGENTS.md: Are Repository-Level Context Files Helpful for
      Coding Agents?
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Context files increase steps, inference cost, and reasoning tokens, so a
    flat success rate is already a regression in efficiency.
  standard: >-
    The paper reports average step and cost increases for both LLM-generated and
    developer-provided context files. It also measures reasoning-token changes
    for GPT-5.2 and GPT-5.1 Mini, finding increases under context-file
    conditions. That means a context file can look neutral on task completion
    while degrading throughput and budget.


    For production agent systems, eval dashboards should include success per
    dollar, steps to first useful edit, repeated-read rate, and tool-call mix.
    Otherwise teams may ship context that makes agents appear more diligent
    while silently reducing operational efficiency.
stance: >-
  Agent context interventions should be judged on outcome quality per unit cost
  because context can increase reasoning tokens and tool calls while leaving
  accuracy flat.
related:
  - INS-260320-B210
  - INS-260323-7625
  - INS-260330-77E2
  - INS-260625-869B
  - INS-260625-5358
  - INS-260626-983E
  - INS-260405-567D
  - INS-260409-17E9
  - INS-260625-1955
  - INS-260626-43C9
---
The paper reports average step and cost increases for both LLM-generated and developer-provided context files. It also measures reasoning-token changes for GPT-5.2 and GPT-5.1 Mini, finding increases under context-file conditions. That means a context file can look neutral on task completion while degrading throughput and budget.

For production agent systems, eval dashboards should include success per dollar, steps to first useful edit, repeated-read rate, and tool-call mix. Otherwise teams may ship context that makes agents appear more diligent while silently reducing operational efficiency.
