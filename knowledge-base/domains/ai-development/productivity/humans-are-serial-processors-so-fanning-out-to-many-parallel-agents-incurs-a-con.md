---
id: INS-260627-66E3
domain: ai-development
topic: productivity
title: >-
  Humans are serial processors, so fanning out to many parallel agents incurs a
  context-switching tax
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - context-switching
  - parallel-agents
  - operating-model
  - attention
  - developer-experience
sources:
  - type: youtube
    title: 'Proactive Agents – Kath Korevec, Google Labs'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=v3u8xc0zLec'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Because humans are serial executors, the '16 agents in 16 terminals' model
    multiplies switching cost rather than throughput.
  standard: >-
    Korevec invokes the cognitive-science finding that humans are not true
    parallel processors — we juggle multiple goals but execute them in sequence,
    switching rapidly between tasks. That switching is expensive: she cites up
    to 40% of productive time lost to context switches and reloading, roughly
    half a day. The gap in attention when you kick off a task and wait is
    precisely where momentum is lost.


    She uses this to critique the viral image of a developer managing 16 Claude
    Code tasks across 16 terminals and three monitors as 'God forbid, the DevEx
    of the future.' If each parallel agent still requires the human to monitor
    and re-engage, parallelism doesn't multiply output — it multiplies the
    switching tax. The design conclusion is that the right operating model isn't
    maximizing agent count but minimizing the human's required context switches:
    agents that are trustworthy and proactive enough that the developer can stay
    focused on one creative thread while the boring work happens in the
    background.
stance: >-
  Running many agents in parallel that each demand human attention degrades
  productivity because humans execute tasks serially and pay up to a 40%
  switching cost, so the operating model must minimize human context switches.
related:
  - INS-260519-20E0
  - INS-260327-C1A4
  - INS-260605-0C5C
  - INS-260626-2D64
  - INS-260625-23CF
---
Korevec invokes the cognitive-science finding that humans are not true parallel processors — we juggle multiple goals but execute them in sequence, switching rapidly between tasks. That switching is expensive: she cites up to 40% of productive time lost to context switches and reloading, roughly half a day. The gap in attention when you kick off a task and wait is precisely where momentum is lost.

She uses this to critique the viral image of a developer managing 16 Claude Code tasks across 16 terminals and three monitors as 'God forbid, the DevEx of the future.' If each parallel agent still requires the human to monitor and re-engage, parallelism doesn't multiply output — it multiplies the switching tax. The design conclusion is that the right operating model isn't maximizing agent count but minimizing the human's required context switches: agents that are trustworthy and proactive enough that the developer can stay focused on one creative thread while the boring work happens in the background.
