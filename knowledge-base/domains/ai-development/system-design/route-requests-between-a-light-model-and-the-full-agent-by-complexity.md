---
id: INS-260627-FDB3
domain: ai-development
topic: system-design
title: Route requests between a light model and the full agent by complexity
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - routing
  - model-tiers
  - cost-optimization
  - latency
  - agent-design
sources:
  - type: youtube
    title: >-
      Building Intelligent Research Agents with Manus - Ivan Leo, Manus AI (now
      Meta Superintelligence)
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=xz0-brt56L8'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Default to an automatic router that picks simple-chat vs full-agent by query
    complexity, while still exposing the tier as an override for callers who
    want fine-grained control.
  standard: >-
    When a caller doesn't specify a mode, Manus runs a backend router that
    decides whether a request needs basic simple chat or the full-fledged agent
    — so 'what is 2+2' doesn't pay the latency and cost of a full agent loop,
    while a website-build does. On top of that sits an explicit two-tier model
    choice: Manus 1.5 for complex tasks (e.g. coding whole websites) and 1.5
    'light' for simple, latency-sensitive queries. The workshop used the light
    tier specifically because the demo tasks weren't complex and a faster
    response mattered.


    The design principle is to make the default automatic but keep the tier as
    an exposed parameter for callers who want fine-grained control. This avoids
    the worst outcome — forcing every user to reason about which model or mode
    to use on every call — while still letting power users pin the tier when
    they know the workload. It's the routing analogue of 'meet users where they
    are.'


    Application: for any agent serving mixed-complexity traffic, put a cheap
    classifier in front that triages to a light vs heavy path, and treat the
    heavy agent loop as something you opt into, not the default for trivial
    requests. Reserve the expensive tier for tasks that genuinely need tool use
    and long context; route the rest to a fast model.
stance: >-
  A backend router that sends simple queries to a light model and complex ones
  to the full agent buys speed and cost control without making users choose.
related:
  - INS-260605-B6BC
  - INS-260605-90E5
  - INS-260327-7F56
  - INS-260626-7F5B
  - INS-260605-0E19
  - INS-260626-091B
---
When a caller doesn't specify a mode, Manus runs a backend router that decides whether a request needs basic simple chat or the full-fledged agent — so 'what is 2+2' doesn't pay the latency and cost of a full agent loop, while a website-build does. On top of that sits an explicit two-tier model choice: Manus 1.5 for complex tasks (e.g. coding whole websites) and 1.5 'light' for simple, latency-sensitive queries. The workshop used the light tier specifically because the demo tasks weren't complex and a faster response mattered.

The design principle is to make the default automatic but keep the tier as an exposed parameter for callers who want fine-grained control. This avoids the worst outcome — forcing every user to reason about which model or mode to use on every call — while still letting power users pin the tier when they know the workload. It's the routing analogue of 'meet users where they are.'

Application: for any agent serving mixed-complexity traffic, put a cheap classifier in front that triages to a light vs heavy path, and treat the heavy agent loop as something you opt into, not the default for trivial requests. Reserve the expensive tier for tasks that genuinely need tool use and long context; route the rest to a fast model.
