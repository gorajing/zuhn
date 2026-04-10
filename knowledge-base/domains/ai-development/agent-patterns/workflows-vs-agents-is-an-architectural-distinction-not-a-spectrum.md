---
id: INS-260410-1030
domain: ai-development
topic: agent-patterns
title: 'Workflows vs. agents is an architectural distinction, not a spectrum'
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - agents
  - workflows
  - architecture
  - system-design
sources:
  - type: blog
    title: Building Effective AI Agents
    url: 'https://www.anthropic.com/engineering/building-effective-agents'
date_extracted: '2026-04-10'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Workflows orchestrate LLMs through predefined code paths; agents let LLMs
    dynamically direct their own process and tool use — pick deliberately based
    on whether you need predictability or flexibility.
  standard: >-
    Anthropic groups all LLM+tool systems under 'agentic systems' but draws a
    hard architectural line: workflows are systems where the code path is fixed
    and the LLM fills in slots, while agents maintain control over how they
    accomplish the task and decide their own next step. The distinction matters
    because workflows give you predictability, cheaper debugging, and tighter
    cost/latency control, while agents give you flexibility at the cost of
    compounding errors and unpredictable trajectories.


    The practical implication is that you should resist calling everything an
    'agent' and instead locate your design on this axis before building. If the
    task decomposes cleanly into known steps, a workflow wins. If you genuinely
    cannot predict how many steps or which tools will be needed — like a coding
    task spanning an unknown number of files — then an agent earns its keep.
    Misclassifying a workflow problem as an agent problem is one of the most
    expensive mistakes teams make.
stance: >-
  Builders should explicitly choose between predefined-code-path workflows and
  dynamically-self-directing agents based on whether flexibility or
  predictability matters more, not treat 'agent' as a fuzzy synonym for 'LLM
  app'.
related:
  - INS-260321-D3BE
  - INS-260323-4B4D
  - INS-260323-8555
  - PRI-260320-D5B7
  - INS-260327-7299
  - INS-260327-13B3
  - INS-260327-4CB3
  - INS-260327-D020
  - INS-260403-08D7
  - INS-260410-D250
---
Anthropic groups all LLM+tool systems under 'agentic systems' but draws a hard architectural line: workflows are systems where the code path is fixed and the LLM fills in slots, while agents maintain control over how they accomplish the task and decide their own next step. The distinction matters because workflows give you predictability, cheaper debugging, and tighter cost/latency control, while agents give you flexibility at the cost of compounding errors and unpredictable trajectories.

The practical implication is that you should resist calling everything an 'agent' and instead locate your design on this axis before building. If the task decomposes cleanly into known steps, a workflow wins. If you genuinely cannot predict how many steps or which tools will be needed — like a coding task spanning an unknown number of files — then an agent earns its keep. Misclassifying a workflow problem as an agent problem is one of the most expensive mistakes teams make.
