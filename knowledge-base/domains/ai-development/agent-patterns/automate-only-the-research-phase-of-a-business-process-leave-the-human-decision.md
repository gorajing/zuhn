---
id: INS-260626-83D7
domain: ai-development
topic: agent-patterns
title: >-
  Automate only the research phase of a business process, leave the human
  decision intact
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - compressed-research
  - agent-archetypes
  - human-in-the-loop
  - low-hanging-fruit
  - process-automation
sources:
  - type: youtube
    title: 'The New Application Layer - Malte Ubl, CTO Vercel'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=XKup1pj-34M'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Many business processes have the shape event -> research -> human decision;
    shipping an agent that only does the research phase saves enormous time
    without changing the process or raising the risk profile.
  standard: >-
    Ubl calls this archetype 'compressed research' and argues it is the easiest
    high-value agent to ship because it preserves the existing process. A
    business event triggers research, which then informs a human decision. By
    automating only the research — cutting a task from 30 minutes to 5 — you
    capture large savings when the process runs 100,000 times a year, while the
    human still owns the decision, so you neither increase risk nor force
    organizational change.


    Vercel runs at least two agents of this shape: a 'contact sales' agent that
    researches the inbound (LinkedIn, company size, routing) before a human
    reviews it, and an abuse-report agent that gathers context before a
    professional decides. The strategic lesson is to resist the temptation —
    born from how well coding agents work — to automate the entire decision. The
    bigger near-term payoff is in narrow, process-preserving research automation
    that companies can adopt today without re-engineering workflows that always
    take long and fail often.
stance: >-
  The highest-ROI agents today automate the research step between a business
  event and a human decision rather than automating the decision itself.
related:
  - INS-260625-F9CD
  - INS-260323-0B5E
  - INS-260404-BD46
  - PRI-260328-81F5
  - PRI-260328-F723
---
Ubl calls this archetype 'compressed research' and argues it is the easiest high-value agent to ship because it preserves the existing process. A business event triggers research, which then informs a human decision. By automating only the research — cutting a task from 30 minutes to 5 — you capture large savings when the process runs 100,000 times a year, while the human still owns the decision, so you neither increase risk nor force organizational change.

Vercel runs at least two agents of this shape: a 'contact sales' agent that researches the inbound (LinkedIn, company size, routing) before a human reviews it, and an abuse-report agent that gathers context before a professional decides. The strategic lesson is to resist the temptation — born from how well coding agents work — to automate the entire decision. The bigger near-term payoff is in narrow, process-preserving research automation that companies can adopt today without re-engineering workflows that always take long and fail often.
