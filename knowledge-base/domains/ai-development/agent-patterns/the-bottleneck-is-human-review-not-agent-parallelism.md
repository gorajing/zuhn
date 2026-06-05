---
id: INS-260605-A847
domain: ai-development
topic: agent-patterns
title: 'The bottleneck is human review, not agent parallelism'
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - ralph-loops
  - theory-of-constraints
  - parallelism
  - human-in-the-loop
  - agentic-workflows
sources:
  - type: youtube
    title: 'Ralph Loops: Build Dumb AI Loops That Ship — Chris Parsons, Cherrypick'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=2TLXsxkz0zI'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Start with a single sequential agent loop and forget parallelism — you will
    become the bottleneck on review long before agent throughput does.
  standard: >-
    Parsons repeatedly pushes back on multi-agent orchestration tooling (Gas
    Town, MCP agent mail) by applying theory of constraints: the bottleneck in
    his workflow is not tokens-per-second or agent count, it's his own ability
    to specify what he wants and review what the AI produced. He wakes up to 30
    things his agents did overnight and is 'always the bottleneck.' Adding more
    parallel agents to a system whose constraint is human review just deepens
    the backlog. The practical advice: begin with one continuously-running loop,
    see if you can even keep up with that, and only reach for parallelism once
    you've proven the human review step isn't your limiting factor. Introducing
    agents upstream of your true constraint is counterproductive, not just
    neutral.
stance: >-
  For most people running agent loops, the constraint is keeping up with review
  and specification, not the number of agents or tokens per second.
related:
  - INS-260321-18D0
  - INS-260323-2E51
  - INS-260330-A260
  - INS-260410-2307
  - INS-260410-566F
  - INS-260409-0DB0
  - INS-260411-BCB0
  - INS-260501-5582
  - INS-260605-A803
---
Parsons repeatedly pushes back on multi-agent orchestration tooling (Gas Town, MCP agent mail) by applying theory of constraints: the bottleneck in his workflow is not tokens-per-second or agent count, it's his own ability to specify what he wants and review what the AI produced. He wakes up to 30 things his agents did overnight and is 'always the bottleneck.' Adding more parallel agents to a system whose constraint is human review just deepens the backlog. The practical advice: begin with one continuously-running loop, see if you can even keep up with that, and only reach for parallelism once you've proven the human review step isn't your limiting factor. Introducing agents upstream of your true constraint is counterproductive, not just neutral.
