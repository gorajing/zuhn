---
id: INS-260627-8BD6
domain: ai-development
topic: architecture
title: >-
  Model agents as logical processes so they can suspend for days and resume on
  demand
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - human-in-the-loop
  - long-running-agents
  - entity-workflows
  - state-management
  - durable-execution
sources:
  - type: youtube
    title: >-
      OpenAI + @Temporalio : Building Durable, Production Ready Agents -
      Cornelia Davis, Temporal
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=k8cnVCMYmNc'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Write agents against a logical process that the runtime maps onto physical
    processes — so a human-in-the-loop wait of days costs nothing and resumes
    intact.
  standard: >-
    A core mental shift the talk advocates: stop reasoning about the physical
    process your agent runs in. Traditionally a developer worries 'what happens
    to this process if it crashes, scales, or has to wait?' With durable
    execution, you write the program against a logical process and let the
    runtime map it onto whatever physical processes exist. The hardest case this
    solves elegantly is human-in-the-loop: an agent that must wait hours or days
    for human input. Naively, you must decide what to do with a blocked process.
    Under this model the worker keeps the agent in memory briefly, then evicts
    it to cache, then drops it entirely — and when the human responds days
    later, it reconstitutes the in-memory state from event history and continues
    as if it had never stopped.


    This enables a powerful pattern the talk calls 'entity workflows' or
    'digital twins': a long-lived workflow that corresponds to some real-world
    entity (e.g. a loyalty customer) and runs for months or years while
    consuming no resources when idle. It wakes only when signaled — a QR scan at
    checkout sends a signal, the workflow processes it and goes dormant again.


    The design lesson generalizes beyond any one vendor: agents that involve
    waiting (human approval, long external jobs, scheduled steps) should be
    built on a substrate that can suspend and resume state cheaply, so 'waiting
    for hours/days' is a first-class, free state rather than an operational
    problem the developer must engineer around.
stance: >-
  Treating an agent's execution as a logical process decoupled from any physical
  process lets it pause for hours or days without holding resources and resume
  exactly where it left off.
related:
  - INS-260605-0C5C
  - INS-260625-B6E9
  - INS-260627-AA19
  - INS-260626-9732
  - INS-260625-6127
---
A core mental shift the talk advocates: stop reasoning about the physical process your agent runs in. Traditionally a developer worries 'what happens to this process if it crashes, scales, or has to wait?' With durable execution, you write the program against a logical process and let the runtime map it onto whatever physical processes exist. The hardest case this solves elegantly is human-in-the-loop: an agent that must wait hours or days for human input. Naively, you must decide what to do with a blocked process. Under this model the worker keeps the agent in memory briefly, then evicts it to cache, then drops it entirely — and when the human responds days later, it reconstitutes the in-memory state from event history and continues as if it had never stopped.

This enables a powerful pattern the talk calls 'entity workflows' or 'digital twins': a long-lived workflow that corresponds to some real-world entity (e.g. a loyalty customer) and runs for months or years while consuming no resources when idle. It wakes only when signaled — a QR scan at checkout sends a signal, the workflow processes it and goes dormant again.

The design lesson generalizes beyond any one vendor: agents that involve waiting (human approval, long external jobs, scheduled steps) should be built on a substrate that can suspend and resume state cheaply, so 'waiting for hours/days' is a first-class, free state rather than an operational problem the developer must engineer around.
