---
id: INS-260605-8109
domain: ai-development
topic: agent-patterns
title: >-
  Constrain agents into focus modes to lift output quality and align user
  expectations
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - agent-design
  - focus-modes
  - system-prompts
  - cursor
  - ux
sources:
  - type: youtube
    title: 'What the Best Agents Share — Mardu Swanepoel, Flinn AI'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=7CrPrHgoEYk'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Narrowing an agent's action and input space into explicit modes lets
    engineers optimize prompts and evals on a small surface while aligning user
    expectations.
  standard: >-
    Focus modes constrain the agent's action and input space — a planning mode,
    a research mode, a debug mode — rather than offering one omni-capable chat.
    The engineering payoff is that a smaller, constrained action space is far
    easier to optimize: you can drop irrelevant tools, refine the system prompt
    tightly, and tune evals to perform well on that narrow space before
    generalizing. The user payoff is expectation-setting: in open 'ask me
    anything' agents the user doesn't know how to prompt for good results and
    arrives with inflated expectations, whereas entering a named mode tailors
    their inputs and behavior and signals what the agent will and won't do.
    Cursor exemplifies this — a dropdown switches modes, planning mode writes no
    code and only asks questions and produces a plan, and debug mode runs a
    hypothesis-driven approach that spins up a dedicated debug server and pushes
    logs.
stance: >-
  Putting an agent into a constrained 'mode' (plan, research, debug) produces
  better output than a single do-anything interface.
related:
  - INS-260410-E27A
  - INS-260605-AABE
  - INS-260410-9F17
  - INS-260625-A668
  - INS-260605-6444
  - INS-260530-D34F
  - INS-260627-F575
---
Focus modes constrain the agent's action and input space — a planning mode, a research mode, a debug mode — rather than offering one omni-capable chat. The engineering payoff is that a smaller, constrained action space is far easier to optimize: you can drop irrelevant tools, refine the system prompt tightly, and tune evals to perform well on that narrow space before generalizing. The user payoff is expectation-setting: in open 'ask me anything' agents the user doesn't know how to prompt for good results and arrives with inflated expectations, whereas entering a named mode tailors their inputs and behavior and signals what the agent will and won't do. Cursor exemplifies this — a dropdown switches modes, planning mode writes no code and only asks questions and produces a plan, and debug mode runs a hypothesis-driven approach that spins up a dedicated debug server and pushes logs.
