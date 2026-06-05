---
id: INS-260605-C775
domain: ai-development
topic: agent-patterns
title: Expose open primitives to agents rather than abstracting behind APIs
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - agent-design
  - primitives
  - abstraction
  - tooling
  - open-source
sources:
  - type: youtube
    title: >-
      Your Coding Agent Should Do AI System Engineering — Ben Burtenshaw,
      Hugging Face
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=JomVvNDjGb8'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Build agent-facing systems by exposing open, controllable primitives instead
    of clean abstracted APIs, because any layer the agent can't get behind
    becomes a hard ceiling.
  standard: >-
    Burtenshaw's central design takeaway is that agents work best with open
    primitives — tools whose underlying data and behavior the agent can fully
    reach into and control in its own way. His example is Trackio, a dashboard
    that is 'basically just a data store' backed by open Parquet: if the agent
    doesn't want the dashboard, it can read the Parquet directly and build a
    Gantt chart or any other view it needs.


    The key argument is that abstracted APIs, while convenient for humans,
    impose a ceiling: 'if we have a layer that we can't necessarily get behind,
    that is a ceiling.' An agent confronted with a closed abstraction can only
    do what the API authors anticipated. An agent given the raw data layer can
    improvise solutions the designers never imagined.


    The practical heuristic he offers — 'we don't always need to abstract, it's
    more about exposing well' — inverts conventional API design wisdom for the
    agent era. When building tooling meant for autonomous agents, prioritize
    transparent, inspectable, manipulable substrate over ergonomic
    encapsulation.
stance: >-
  Agents perform better when given fully open primitives they can manipulate
  directly than when handed polished abstracted APIs.
related:
  - PRI-260328-DD90
  - INS-260403-65D2
  - INS-260410-E977
  - PRI-260403-ABDE
  - INS-260605-4AB0
  - PRI-260328-1ED1
---
Burtenshaw's central design takeaway is that agents work best with open primitives — tools whose underlying data and behavior the agent can fully reach into and control in its own way. His example is Trackio, a dashboard that is 'basically just a data store' backed by open Parquet: if the agent doesn't want the dashboard, it can read the Parquet directly and build a Gantt chart or any other view it needs.

The key argument is that abstracted APIs, while convenient for humans, impose a ceiling: 'if we have a layer that we can't necessarily get behind, that is a ceiling.' An agent confronted with a closed abstraction can only do what the API authors anticipated. An agent given the raw data layer can improvise solutions the designers never imagined.

The practical heuristic he offers — 'we don't always need to abstract, it's more about exposing well' — inverts conventional API design wisdom for the agent era. When building tooling meant for autonomous agents, prioritize transparent, inspectable, manipulable substrate over ergonomic encapsulation.
