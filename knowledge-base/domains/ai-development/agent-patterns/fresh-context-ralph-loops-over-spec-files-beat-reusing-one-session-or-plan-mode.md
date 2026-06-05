---
id: INS-260605-03A6
domain: ai-development
topic: agent-patterns
title: >-
  Fresh-context Ralph loops over spec files beat reusing one session or plan
  mode
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - ralph-loop
  - spec-driven-development
  - context-management
  - context-pollution
  - workflow
sources:
  - type: youtube
    title: 'Vibe Engineering Effect Apps — Michael Arnaldi, Effectful'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=Wmp2Tku2PrI'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Persist the plan as a markdown spec, then run a dumb bash loop that picks
    one small task, implements it, and exits with fresh context each iteration —
    avoiding the de-optimization that comes from cramming multiple tasks into
    one context window.
  standard: >-
    Arnaldi avoids plan mode because it gives the model crippled tool access —
    it can't do the same exploration it does normally. Instead he does
    spec-driven development: the first task is discussing and persisting a spec
    as a markdown file (his real 'plan'), then implementing it in a Ralph loop.
    The loop is deliberately dumb — a simple bash script that tells the model to
    pick a small task, implement it, and exit, run repeatedly. The reason is
    context economics: reusing one session for multiple things pushes earlier
    information that confuses the model on later work, since the context window
    is a fixed-size array being appended to. He repeatedly restarted his coding
    agent during the live demo to clean context, noting 'I'm fooling myself in
    wanting to use the same session over and over again.' His recurring theme:
    with AI, less is more — 'the dumbest thing ever ends up working better' than
    complex context-management architectures.
stance: >-
  Running small tasks in a fresh-context bash loop against a persisted spec
  beats reusing a single chat session or relying on plan mode.
related:
  - INS-260321-0C99
  - INS-260410-761B
  - INS-260327-E016
  - PRI-260411-9CB1
  - INS-260323-E0B5
---
Arnaldi avoids plan mode because it gives the model crippled tool access — it can't do the same exploration it does normally. Instead he does spec-driven development: the first task is discussing and persisting a spec as a markdown file (his real 'plan'), then implementing it in a Ralph loop. The loop is deliberately dumb — a simple bash script that tells the model to pick a small task, implement it, and exit, run repeatedly. The reason is context economics: reusing one session for multiple things pushes earlier information that confuses the model on later work, since the context window is a fixed-size array being appended to. He repeatedly restarted his coding agent during the live demo to clean context, noting 'I'm fooling myself in wanting to use the same session over and over again.' His recurring theme: with AI, less is more — 'the dumbest thing ever ends up working better' than complex context-management architectures.
