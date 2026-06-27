---
id: INS-260605-9900
domain: ai-development
topic: agent-patterns
title: 'Harness engineering: encode where agents get lost back into the repo'
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - harness-engineering
  - context-engineering
  - agents-md
  - skills
  - feedback-loops
sources:
  - type: youtube
    title: 'The Missing Primitive for Agent Swarms — Lou Bichard, Ona'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=5Sui_OnSRlY'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Harness engineering is an extension of context engineering: let agents run,
    watch where they get lost, and encode that learning back into agents.md,
    skills, and tests so the agent flows through the workflow more autonomously
    next time.
  standard: >-
    Bichard frames 'harness engineering' (crediting OpenAI/Ryan's
    harness-engineering blog) as encoding as much of your development process as
    possible into the repository — context files, agents.md, skills, unit tests,
    anything that gives feedback to the agent. He treats it as an extension of
    context engineering, but with a distinctive feedback loop: do the work, let
    the agent run, figure out exactly where it gets lost, then encode that
    knowledge back into the repo so the agent gets unstuck on future runs.


    This makes the repository itself the durable asset that compounds agent
    capability over time, rather than relying on ever-better prompts or models.
    The actionable practice is to treat every place an agent stumbles as a
    signal to write a new skill, context file, or test — converting one-off
    debugging into permanent harness improvements.
stance: >-
  The durable way to improve autonomous coding agents is harness engineering —
  observing where agents get lost and encoding that knowledge back into
  repository context files, skills, and tests.
related:
  - INS-260323-649B
  - INS-260320-F78E
  - INS-260327-F625
  - INS-260405-CC9D
  - INS-260405-880C
  - INS-260410-9F17
  - INS-260514-DFAE
  - INS-260514-999B
  - INS-260514-C1B3
  - INS-260603-DFA6
---
Bichard frames 'harness engineering' (crediting OpenAI/Ryan's harness-engineering blog) as encoding as much of your development process as possible into the repository — context files, agents.md, skills, unit tests, anything that gives feedback to the agent. He treats it as an extension of context engineering, but with a distinctive feedback loop: do the work, let the agent run, figure out exactly where it gets lost, then encode that knowledge back into the repo so the agent gets unstuck on future runs.

This makes the repository itself the durable asset that compounds agent capability over time, rather than relying on ever-better prompts or models. The actionable practice is to treat every place an agent stumbles as a signal to write a new skill, context file, or test — converting one-off debugging into permanent harness improvements.
