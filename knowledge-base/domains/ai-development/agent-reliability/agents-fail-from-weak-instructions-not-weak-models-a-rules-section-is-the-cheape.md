---
id: INS-260627-1319
domain: ai-development
topic: agent-reliability
title: >-
  Agents fail from weak instructions, not weak models — a rules section is the
  cheapest fix
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - agent-reliability
  - system-prompt
  - context-engineering
  - coding-agents
  - cost-optimization
sources:
  - type: youtube
    title: 'Build a Prompt Learning Loop - SallyAnn DeLucia & Fuad Ali, Arize'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=SbcQYbrvAfI'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Most agent unreliability traces to missing instructions and context, so
    writing the rules a good practitioner would follow is the highest-ROI
    improvement before reaching for fine-tuning.
  standard: >-
    The presenters frame agent failure as an environment-and-instructions
    problem, not a model-capability problem: no system instructions learned from
    the environment, no or only static planning, missing tools, missing
    tool-selection guidance, and weak context engineering. The reflex when an
    agent underperforms is to reach for fine-tuning, new tools, or architectural
    changes — but those are the expensive moves.


    Their case study took a coding agent whose system prompt had no rules
    section ('you are a coding agent built on this model') and added the rules a
    competent engineer follows — handle errors and exceptions a specific way,
    keep changes aligned with system design, accompany changes with tests. On
    SWE-bench-light this produced a ~15% improvement from rules alone, and let
    GPT-4.1 reach near-GPT-4.5 coding performance at roughly two-thirds the
    cost. (Treat the exact numbers as vendor-reported; the directional claim is
    well-supported.)


    The takeaway is an ordering of interventions: before fine-tuning or
    re-architecting, audit whether the system prompt actually encodes the domain
    rules, context, and tool guidance the agent needs. It is the lowest-lift
    lever and often delivers the largest single jump — and it also lets a
    cheaper model substitute for a frontier one.
stance: >-
  Adding an explicit rules section to a system prompt yields large reliability
  gains without fine-tuning, new tools, or architecture changes.
related:
  - INS-260321-2482
  - INS-260605-B610
  - INS-260605-610E
  - INS-260605-3A60
  - INS-260605-2A69
  - INS-260605-6DE5
  - INS-260625-679B
  - INS-260626-0CFF
  - INS-260626-8308
  - INS-260626-F5AE
---
The presenters frame agent failure as an environment-and-instructions problem, not a model-capability problem: no system instructions learned from the environment, no or only static planning, missing tools, missing tool-selection guidance, and weak context engineering. The reflex when an agent underperforms is to reach for fine-tuning, new tools, or architectural changes — but those are the expensive moves.

Their case study took a coding agent whose system prompt had no rules section ('you are a coding agent built on this model') and added the rules a competent engineer follows — handle errors and exceptions a specific way, keep changes aligned with system design, accompany changes with tests. On SWE-bench-light this produced a ~15% improvement from rules alone, and let GPT-4.1 reach near-GPT-4.5 coding performance at roughly two-thirds the cost. (Treat the exact numbers as vendor-reported; the directional claim is well-supported.)

The takeaway is an ordering of interventions: before fine-tuning or re-architecting, audit whether the system prompt actually encodes the domain rules, context, and tool guidance the agent needs. It is the lowest-lift lever and often delivers the largest single jump — and it also lets a cheaper model substitute for a frontier one.
