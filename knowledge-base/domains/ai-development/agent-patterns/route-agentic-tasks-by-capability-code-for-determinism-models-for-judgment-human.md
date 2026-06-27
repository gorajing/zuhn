---
id: INS-260625-7592
domain: ai-development
topic: agent-patterns
title: >-
  Route Agentic Tasks by Capability: Code for Determinism, Models for Judgment,
  Humans for Authority
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - agent-design
  - task-routing
  - determinism
  - human-in-the-loop
  - reliability
sources:
  - type: youtube
    title: 'Build Systems, Not Code - Angie Jones, Agentic AI Foundation'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=ZD9-4fW2HhM'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    If a task has an exact answer reach for code, if it needs interpretation
    reach for the agent, and if it needs authority reach for a human.
  standard: >-
    Just because an agent *can* do something doesn't mean it *should*. The model
    is best at fuzzy work — judgment, ambiguity, reasoning over messy input —
    and worst at tasks with a single correct answer, like calculating a commute
    time or deduping listings already seen. Handing those deterministic tasks to
    a model makes the system more complex, more expensive, and produces output
    that 'differs every day,' which is exactly the frustration many agent
    builders mistake for an inherent property of agents. AI did not invent
    automation; plain code is still available and is cheaper and more reliable
    for anything with an exact answer.


    The rule of thumb is a three-way routing decision: use code for determinism,
    agents for judgment, and humans for authority. In the relocation-scout
    example, the agent decides which listings are worth a closer look
    (judgment), the code crunches the commute and filters already-seen listings
    (determinism), and the human approves booking a tour (authority). Treating
    this split as a deliberate architectural choice — rather than defaulting
    everything to the model — is what keeps agentic systems from drifting back
    into the unpredictability that made people distrust them in the first place.
stance: >-
  Handing every part of a task to the model instead of routing deterministic
  work to plain code is the primary reason agentic systems become more complex,
  more expensive, and less reliable than they need to be.
related:
  - INS-260327-A817
  - INS-260403-648C
  - INS-260410-D250
  - INS-260501-C59A
  - INS-260524-B783
  - INS-260605-B176
  - INS-260605-80D0
  - INS-260605-B182
  - INS-260605-27CC
  - INS-260625-9644
---
Just because an agent *can* do something doesn't mean it *should*. The model is best at fuzzy work — judgment, ambiguity, reasoning over messy input — and worst at tasks with a single correct answer, like calculating a commute time or deduping listings already seen. Handing those deterministic tasks to a model makes the system more complex, more expensive, and produces output that 'differs every day,' which is exactly the frustration many agent builders mistake for an inherent property of agents. AI did not invent automation; plain code is still available and is cheaper and more reliable for anything with an exact answer.

The rule of thumb is a three-way routing decision: use code for determinism, agents for judgment, and humans for authority. In the relocation-scout example, the agent decides which listings are worth a closer look (judgment), the code crunches the commute and filters already-seen listings (determinism), and the human approves booking a tour (authority). Treating this split as a deliberate architectural choice — rather than defaulting everything to the model — is what keeps agentic systems from drifting back into the unpredictability that made people distrust them in the first place.
