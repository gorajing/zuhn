---
id: INS-260605-7B4C
domain: ai-development
topic: system-building
title: Deliberately under-use the context window as a self-imposed constraint
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - context-window
  - constraints
  - agent-design
  - creativity
  - scrappiness
sources:
  - type: youtube
    title: >-
      Bounded Autonomy: Between Free Will and Determinism — Angus J. McLean,
      Oliver
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=t4359sKBu4w'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Treat the context window as a budget to minimize, not a resource to fill,
    because abundance kills the scrappiness that produces good engineering.
  standard: >-
    McLean argues that the recent leap in agent capability came mostly from
    larger context windows, but that 'however big they get, it's not going to be
    enough' — world knowledge doubles roughly every 12 hours, so demand is
    unbounded. Rather than chase capacity, he advocates self-imposed
    constraints: everyone knows not to use the full context window, but the more
    interesting question is how *little* of it you can use and still complete
    the task. His justification is that constraints create creativity while
    abundance stops you being scrappy — the same dynamic that produced SpaceWar
    in 4,000 words or the Crash Bandicoot team's PS2 memory tricks. The
    actionable practice is to set an artificial context budget well below the
    model's limit and design retrieval, compaction, and tool use to live within
    it, which forces the architectural discipline that raw abundance lets you
    skip.
stance: >-
  Asking how little of the context window you can use to finish a task produces
  better agent design than maximizing available context.
related:
  - INS-260403-D16C
  - INS-260410-761B
  - INS-260605-59FE
  - PRI-260411-9CB1
  - INS-260327-E016
  - INS-260327-F625
  - INS-260410-60C8
---
McLean argues that the recent leap in agent capability came mostly from larger context windows, but that 'however big they get, it's not going to be enough' — world knowledge doubles roughly every 12 hours, so demand is unbounded. Rather than chase capacity, he advocates self-imposed constraints: everyone knows not to use the full context window, but the more interesting question is how *little* of it you can use and still complete the task. His justification is that constraints create creativity while abundance stops you being scrappy — the same dynamic that produced SpaceWar in 4,000 words or the Crash Bandicoot team's PS2 memory tricks. The actionable practice is to set an artificial context budget well below the model's limit and design retrieval, compaction, and tool use to live within it, which forces the architectural discipline that raw abundance lets you skip.
