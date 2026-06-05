---
id: INS-260605-8BEA
domain: automation
topic: self-improving-systems
title: Agents self-extend by writing reusable scripts into persistent memory
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - self-improving
  - agent-memory
  - feedback-loop
  - code-execution
  - repl
sources:
  - type: youtube
    title: 'Give Your Agent a Computer — Nico Albanese, Vercel'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=wflNENRSUb4'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Instruct the agent: for any repeatable task, write a script, append its
    description to memories.md, and reuse that script next time instead of
    redoing the work.
  standard: >-
    Asked to get the weather, the agent wrote a Python script in one assistant
    turn, ran it via bash, and appended the script's description to its
    memories.md. The next weather request reused the existing script. This is
    'an agent that learns, that builds on itself.' Albanese argues the exciting
    part of self-modifying agents is less about rewriting their own code and
    more about the feedback loop: a sandbox environment where the agent can
    build, run code, evaluate output, and iterate. That is why coding was the
    first domain to take off for agents — compilers and type checkers provide
    the perfect REPL-style feedback environment. The combination of code
    execution plus persistent memory means the agent accumulates a personalized,
    dedicated workspace that gets more capable the more you use it.
stance: >-
  An agent that converts repeatable tasks into scripts and registers them in its
  memory file builds an ever-growing toolkit of its own.
related:
  - INS-260501-EA32
  - INS-260524-D5DB
  - INS-260605-E642
  - INS-260405-2BB0
  - INS-260605-B5A2
---
Asked to get the weather, the agent wrote a Python script in one assistant turn, ran it via bash, and appended the script's description to its memories.md. The next weather request reused the existing script. This is 'an agent that learns, that builds on itself.' Albanese argues the exciting part of self-modifying agents is less about rewriting their own code and more about the feedback loop: a sandbox environment where the agent can build, run code, evaluate output, and iterate. That is why coding was the first domain to take off for agents — compilers and type checkers provide the perfect REPL-style feedback environment. The combination of code execution plus persistent memory means the agent accumulates a personalized, dedicated workspace that gets more capable the more you use it.
