---
id: INS-260627-C940
domain: ai-development
topic: agent-patterns
title: >-
  An agent harness that mutates your context behind your back degrades the model
  and breaks workflows
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - context-engineering
  - agent-harness
  - observability
  - claude-code
  - tool-design
sources:
  - type: youtube
    title: Building pi in a World of Slop — Mario Zechner
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=RjfbvDXpFls'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    The real failure of feature-rich harnesses is that 'your context isn't your
    context' — they silently change system prompts, tool definitions, and inject
    'may or may not be relevant' reminders that confuse the model.
  standard: >-
    Zechner's core grievance with Claude Code and similar harnesses is not their
    bugs but their opacity: the harness controls the context window and mutates
    it without the user's knowledge or consent. System prompts and tool
    definitions change on every release; tools get added, removed, or modified;
    system reminders are injected at inopportune positions telling the model
    'here's some information, it may or may not be relevant' — wording that
    actively confuses the model and breaks established workflows. On top of that
    there is near-zero observability into what the agent is actually doing.


    The design lesson is that context is the single most important surface in an
    agent harness, and a harness that treats it as the vendor's property rather
    than the user's will produce unpredictable, non-reproducible behavior. Two
    concrete anti-patterns he calls out: pruning tool outputs after a token
    threshold (which 'lobotomizes the model' by deleting information it reasoned
    over), and injecting LSP error feedback after every single edit — wrong
    because humans don't write-one-line-then-check-errors; they finish the work
    and then check, so per-edit error injection mid-task confuses the model.


    The takeaway for anyone building or choosing a harness: prize observability
    and user control of the context above features. The user should be able to
    see and modify everything the model sees, because silent mutation is what
    turns a predictable tool into one that 'breaks every day' like a hammer that
    fails on a construction site.
stance: >-
  Coding agent harnesses should give the user full ownership and observability
  of the context window rather than silently rewriting it.
related:
  - INS-260625-0DD6
  - INS-260605-2032
  - PRI-260426-890F
  - INS-260626-485E
  - INS-260410-B0D6
---
Zechner's core grievance with Claude Code and similar harnesses is not their bugs but their opacity: the harness controls the context window and mutates it without the user's knowledge or consent. System prompts and tool definitions change on every release; tools get added, removed, or modified; system reminders are injected at inopportune positions telling the model 'here's some information, it may or may not be relevant' — wording that actively confuses the model and breaks established workflows. On top of that there is near-zero observability into what the agent is actually doing.

The design lesson is that context is the single most important surface in an agent harness, and a harness that treats it as the vendor's property rather than the user's will produce unpredictable, non-reproducible behavior. Two concrete anti-patterns he calls out: pruning tool outputs after a token threshold (which 'lobotomizes the model' by deleting information it reasoned over), and injecting LSP error feedback after every single edit — wrong because humans don't write-one-line-then-check-errors; they finish the work and then check, so per-edit error injection mid-task confuses the model.

The takeaway for anyone building or choosing a harness: prize observability and user control of the context above features. The user should be able to see and modify everything the model sees, because silent mutation is what turns a predictable tool into one that 'breaks every day' like a hammer that fails on a construction site.
