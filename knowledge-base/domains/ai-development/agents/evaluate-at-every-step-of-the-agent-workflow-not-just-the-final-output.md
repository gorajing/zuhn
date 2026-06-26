---
id: INS-260605-B13C
domain: ai-development
topic: agents
title: 'Evaluate at every step of the agent workflow, not just the final output'
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - evaluation
  - agents
  - intent-resolution
  - tool-calling
  - workflow
sources:
  - type: youtube
    title: >-
      Mind the Gap (In your Agent Observability) — Amy Boyd & Nitya Narasimhan,
      Microsoft
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=iOXM3zE-2dk'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Run distinct evaluators at intent resolution, tool selection, and final
    response so you can pinpoint exactly where quality breaks down.
  standard: >-
    A single end-to-end score tells you the agent failed but not where. The talk
    decomposes evaluation across the workflow: first intent resolution (did it
    correctly understand what the user wanted?), then tool-call evaluation (did
    it call the expected tool, with correct parameters?), then the overall
    response (task completion and task adherence). Because agents are
    non-deterministic, these are measured as percentages over runs, not
    pass/fail. The payoff is localization — task adherence being low points you
    to a specific stage to fix, rather than forcing a guess. This mirrors the
    shift from evaluating the model (one LLM call) to evaluating the agent
    holistically across its multi-step trajectory.
stance: >-
  Agents should be evaluated at each decision point (intent, tool call,
  response), not only on overall task completion.
related:
  - INS-260410-F5EC
  - PRI-260411-14DC
  - INS-260625-EC9A
  - INS-260403-4363
  - INS-260530-C385
  - INS-260327-24A5
---
A single end-to-end score tells you the agent failed but not where. The talk decomposes evaluation across the workflow: first intent resolution (did it correctly understand what the user wanted?), then tool-call evaluation (did it call the expected tool, with correct parameters?), then the overall response (task completion and task adherence). Because agents are non-deterministic, these are measured as percentages over runs, not pass/fail. The payoff is localization — task adherence being low points you to a specific stage to fix, rather than forcing a guess. This mirrors the shift from evaluating the model (one LLM call) to evaluating the agent holistically across its multi-step trajectory.
