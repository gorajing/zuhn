---
id: INS-260626-4393
domain: ai-development
topic: human-ai-relationship
title: >-
  Coordinate humans and agents through ambient shared state, not just explicit
  handoffs
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - collaboration
  - coordination
  - shared-workspace
  - human-agent
  - soft-coordination
sources:
  - type: youtube
    title: 'AgentCraft: Putting the Orc in Orchestration — Ido Salomon'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=kR64LOqBBCU'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    A shared workspace where humans and agents announce 'I'm working on this
    file' lets the next actor avoid conflicts without anyone issuing an explicit
    handoff.
  standard: >-
    Because agents aren't smart enough to do everything alone, Salomon offloads
    to other humans — but the interesting mechanism is how they coordinate.
    Beyond explicit handoffs (taking over another person's agent, prompting
    their agent directly), there's a 'softer' channel: a chat shared between
    humans and agents where an agent posts 'I'm starting to work on something'
    and a human can reply 'I'm also working on it,' so the agent's next action
    accounts for the overlap. Agents likewise surface which files each is
    changing. The principle is that coordination in mixed human-agent teams
    should rely on ambient, readable shared state — a broadcast of intent and
    activity that any participant can consume — rather than only point-to-point
    handoffs. This is the same insight as the collision heat map applied to
    social coordination: make activity visible and let participants
    self-deconflict.
stance: >-
  Multi-agent and multi-human work coordinates best when agents broadcast what
  they are touching into a shared channel both humans and agents read.
related:
  - INS-260410-62E8
  - INS-260605-9A92
  - INS-260605-4877
  - INS-260627-7076
  - INS-260605-1CC3
  - INS-260627-718B
---
Because agents aren't smart enough to do everything alone, Salomon offloads to other humans — but the interesting mechanism is how they coordinate. Beyond explicit handoffs (taking over another person's agent, prompting their agent directly), there's a 'softer' channel: a chat shared between humans and agents where an agent posts 'I'm starting to work on something' and a human can reply 'I'm also working on it,' so the agent's next action accounts for the overlap. Agents likewise surface which files each is changing. The principle is that coordination in mixed human-agent teams should rely on ambient, readable shared state — a broadcast of intent and activity that any participant can consume — rather than only point-to-point handoffs. This is the same insight as the collision heat map applied to social coordination: make activity visible and let participants self-deconflict.
