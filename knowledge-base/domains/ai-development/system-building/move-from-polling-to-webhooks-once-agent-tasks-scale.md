---
id: INS-260627-D61C
domain: ai-development
topic: system-building
title: Move from polling to webhooks once agent tasks scale
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - webhooks
  - polling
  - async
  - scaling
  - agent-infrastructure
  - cost
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
    Prototype agent tasks with polling, but switch to webhooks before you scale
    — holding workers open to poll dozens of multi-minute tasks is the part that
    breaks.
  standard: >-
    A typical Manus task runs three to five minutes, which makes the async
    lifecycle the central engineering concern. The workshop's explicit
    progression: when prototyping, poll the task status (running / pending /
    completed / error) every ~20 seconds because it's the simplest thing that
    works. But once you have a hundred tasks running at once, sitting in a loop
    polling each one is not viable — you burn workers holding connections open,
    and it stops being best practice.


    The scalable replacement is webhooks: register an endpoint, and the platform
    pushes you a notification when a task is created and when it stops, so you
    only do work on real state transitions. The cost argument is the operative
    one — webhooks let you build 'whatever sort of agent you're building at a
    much cheaper cost' because you're not paying for idle polling workers.


    Application: design the happy-path prototype with polling so you can move
    fast, but treat the polling loop as scaffolding, not architecture. Before
    scaling, stand up a webhook receiver (the demo used a Modal FastAPI
    endpoint) and make the agent's task IDs the join key so each incoming
    webhook can be matched back to the originating request and conversation
    thread.
stance: >-
  Polling is the right way to prototype long-running agent tasks, but webhooks
  become mandatory to run them affordably at scale.
related:
  - INS-260605-9976
  - INS-260605-46A8
  - INS-260605-A803
  - INS-260625-C69F
  - INS-260405-6A6F
---
A typical Manus task runs three to five minutes, which makes the async lifecycle the central engineering concern. The workshop's explicit progression: when prototyping, poll the task status (running / pending / completed / error) every ~20 seconds because it's the simplest thing that works. But once you have a hundred tasks running at once, sitting in a loop polling each one is not viable — you burn workers holding connections open, and it stops being best practice.

The scalable replacement is webhooks: register an endpoint, and the platform pushes you a notification when a task is created and when it stops, so you only do work on real state transitions. The cost argument is the operative one — webhooks let you build 'whatever sort of agent you're building at a much cheaper cost' because you're not paying for idle polling workers.

Application: design the happy-path prototype with polling so you can move fast, but treat the polling loop as scaffolding, not architecture. Before scaling, stand up a webhook receiver (the demo used a Modal FastAPI endpoint) and make the agent's task IDs the join key so each incoming webhook can be matched back to the originating request and conversation thread.
