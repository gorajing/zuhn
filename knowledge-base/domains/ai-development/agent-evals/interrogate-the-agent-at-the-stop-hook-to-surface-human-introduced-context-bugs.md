---
id: INS-260626-CF64
domain: ai-development
topic: agent-evals
title: >-
  Interrogate the agent at the stop hook to surface human-introduced context
  bugs
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - agent-observability
  - stop-hook
  - inference-time-interrogation
  - self-report
  - debugging
sources:
  - type: youtube
    title: 'LLM codegen fails and how to stop ''em — Danilo Campos, PostHog'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=juoNbJiZUi0'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Run a little user research where the user is the robot: at the stop hook ask
    'what could we have done better to set you up for success?' and let it tell
    you what you broke.
  standard: >-
    The biggest threat to agent outcomes is the human operators: our own context
    is limited and fragmentary, so as we edit MCP tool instructions and the
    surrounding code we drop things that matter. PostHog had a tool instruction
    that contradicted another tool, and an instruction telling the agent to use
    a named tool that the MCP didn't actually expose — for hundreds of runs the
    agent kept reaching for a tool that wasn't there. They also kept feeding
    JavaScript instructions into a Python project. None of this surfaced until
    they asked.


    The cheap, high-leverage mechanism is inference-time interrogation: at the
    stop hook of every run, pose a simple question to the agent about what could
    have been done better, treating the robot as a research subject. Its answers
    ('you never gave me permission to access that tool,' 'these directives
    contradict each other') become the bug reports. The principle is blunt — you
    have to ask to find out — and it turns an opaque agent into a continuous
    source of feedback about defects you introduced.
stance: >-
  Asking the agent at the end of each run what would have set it up for success
  cheaply exposes contradictory instructions, missing tools, and wrong-language
  docs that humans silently introduced.
related:
  - INS-260410-56F7
  - INS-260327-7157
  - INS-260605-726C
  - INS-260524-78D0
  - PRI-260403-53D6
---
The biggest threat to agent outcomes is the human operators: our own context is limited and fragmentary, so as we edit MCP tool instructions and the surrounding code we drop things that matter. PostHog had a tool instruction that contradicted another tool, and an instruction telling the agent to use a named tool that the MCP didn't actually expose — for hundreds of runs the agent kept reaching for a tool that wasn't there. They also kept feeding JavaScript instructions into a Python project. None of this surfaced until they asked.

The cheap, high-leverage mechanism is inference-time interrogation: at the stop hook of every run, pose a simple question to the agent about what could have been done better, treating the robot as a research subject. Its answers ('you never gave me permission to access that tool,' 'these directives contradict each other') become the bug reports. The principle is blunt — you have to ask to find out — and it turns an opaque agent into a continuous source of feedback about defects you introduced.
