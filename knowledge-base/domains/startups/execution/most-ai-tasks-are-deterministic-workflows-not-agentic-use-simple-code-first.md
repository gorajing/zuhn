---
id: INS-260327-2101
domain: startups
topic: execution
title: 'Most AI tasks are deterministic workflows, not agentic — use simple code first'
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - ai-architecture
  - workflow-design
  - simplicity
  - over-engineering
sources:
  - type: youtube
    title: 'From Idea to $650M Exit: Lessons in Building AI Startups'
    author: Y Combinator
    url: 'https://youtu.be/l0h3nAW13ao'
date_extracted: '2026-03-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Default to deterministic prompt-chain workflows over agentic systems — most
    professional tasks follow the same steps every time.
  standard: >-
    When building AI products, the founder observed that most professional tasks
    are surprisingly deterministic — every time you do this task, you follow the
    same 5-7 steps. For these cases, you don't need LangChain or complex agent
    frameworks. Simple Python functions chained together (output of function A
    feeds function B feeds function C) work perfectly. Only reach for agentic
    architectures when how an expert approaches the problem genuinely varies
    based on circumstances. Additionally, use traditional deterministic code
    (math calculations, data transformations) wherever possible since prompts
    are slow and expensive. This 'boring architecture' approach ships faster and
    is easier to debug and eval.
stance: >-
  The majority of professional tasks that AI can automate follow predictable
  step sequences that should be implemented as simple Python functions chained
  together, not complex agentic systems.
related:
  - INS-260325-5F3B
  - PRI-260320-D5B7
  - PRI-260403-7585
  - INS-260329-FEBA
  - INS-260326-7F79
evidence:
  - id: INS-260325-5F3B
    type: CHALLENGES
    classified_at: '2026-04-02'
  - id: INS-260326-7F79
    type: CHALLENGES
    classified_at: '2026-04-02'
  - id: INS-260329-FEBA
    type: CONTRADICTS
    classified_at: '2026-04-02'
---
When building AI products, the founder observed that most professional tasks are surprisingly deterministic — every time you do this task, you follow the same 5-7 steps. For these cases, you don't need LangChain or complex agent frameworks. Simple Python functions chained together (output of function A feeds function B feeds function C) work perfectly. Only reach for agentic architectures when how an expert approaches the problem genuinely varies based on circumstances. Additionally, use traditional deterministic code (math calculations, data transformations) wherever possible since prompts are slow and expensive. This 'boring architecture' approach ships faster and is easier to debug and eval.
