---
id: INS-260626-B449
domain: ai-development
topic: system-building
title: Generated repo overviews are a weak default for coding-agent onboarding
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - system-building
  - repo-context
  - agents-md
  - coding-agents
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
    Despite many generated and developer context files including overview
    sections, agents did not interact with relevant patch files sooner.
  standard: >-
    The paper measures time-to-first-interaction with files touched by the gold
    patch as a proxy for useful navigation. Context files, including those with
    overview sections, do not meaningfully reduce this metric across SWE-BENCH
    and CTX BENCH. In GPT-5.1 Mini traces, context files sometimes caused extra
    commands to find and reread files already present in context.


    For agent systems, the better default is executable orientation: commands
    that verify the task, targeted search handles, and constraints that change
    the agent's action policy. A static repo map is only worth keeping if a
    local eval shows it improves file discovery or success per dollar.
stance: >-
  Automatically generated repository overviews should not be assumed to help
  coding agents navigate a codebase.
related:
  - INS-260625-14F9
  - INS-260626-F5AE
  - INS-260626-057E
  - INS-260320-0127
  - PRI-260407-D1AD
---
The paper measures time-to-first-interaction with files touched by the gold patch as a proxy for useful navigation. Context files, including those with overview sections, do not meaningfully reduce this metric across SWE-BENCH and CTX BENCH. In GPT-5.1 Mini traces, context files sometimes caused extra commands to find and reread files already present in context.

For agent systems, the better default is executable orientation: commands that verify the task, targeted search handles, and constraints that change the agent's action policy. A static repo map is only worth keeping if a local eval shows it improves file discovery or success per dollar.
