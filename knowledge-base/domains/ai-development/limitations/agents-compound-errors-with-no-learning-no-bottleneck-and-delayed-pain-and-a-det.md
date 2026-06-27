---
id: INS-260627-11E7
domain: ai-development
topic: limitations
title: >-
  Agents compound errors with no learning, no bottleneck, and delayed pain — and
  a detailed spec is just a program
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - technical-debt
  - code-review
  - specifications
  - agent-limitations
  - slop
sources:
  - type: youtube
    title: Building pi in a World of Slop — Mario Zechner
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=RjfbvDXpFls'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Agents compound 'booboos' with zero learning, no bottleneck, and pain that's
    delayed onto you — and since a sufficiently detailed spec is just a program,
    every blank you leave gets filled with the garbage code that dominates the
    internet.
  standard: >-
    Zechner's act-three argument is that agents are structurally worse than
    humans at one specific thing: not adding errors. Humans are fallible but
    they learn, they are a hard bottleneck on how many errors they can introduce
    per day, and crucially they feel pain — and once pain accumulates they quit,
    escalate, or band together to refactor the garbage away. Agents do none of
    this; they happily keep compounding errors, and the pain is simply delayed
    and transferred to you. Two humans plus ten agents produce 'enterprise-grade
    complexity' — gratuitous abstraction, duplication, backwards-compatibility
    cruft, defense-in-depth — within two weeks. A review agent doesn't save you
    (the 'ouroboros' catches some issues but not most), because the models
    learned their notion of complexity from the internet, and roughly 90% of
    code on the internet is mediocre garbage.


    The sharpest formulation is about specs: 'You know what we call a
    sufficiently detailed spec? It's a program.' This means the spec-driven
    workflow has no free lunch — any blank you leave in the spec is filled by
    the model, and it fills it with priors learned from that same garbage
    corpus. The agent's every decision is local, especially when the codebase no
    longer fits in context, so it 'patches locally and breaks globally.' Long
    context windows are a hack and agentic search also fails at scale.


    The actionable consequence is a trust collapse: once you stop reading the
    code, you can't fix the inevitable breakage yourself, your agents are too
    context-starved on a humongous codebase to fix it either, and you can't even
    trust your tests because the agent wrote them. The defense is to keep humans
    as the bottleneck on critical code rather than removing the bottleneck and
    celebrating the throughput.
stance: >-
  Letting many agents run unsupervised produces enterprise-grade complexity fast
  because they compound errors the way humans never could and fill spec gaps
  with internet-learned garbage.
related:
  - INS-260514-1470
  - PRI-260406-26FB
  - PRI-260405-3080
  - INS-260603-A09F
  - INS-260410-1A22
---
Zechner's act-three argument is that agents are structurally worse than humans at one specific thing: not adding errors. Humans are fallible but they learn, they are a hard bottleneck on how many errors they can introduce per day, and crucially they feel pain — and once pain accumulates they quit, escalate, or band together to refactor the garbage away. Agents do none of this; they happily keep compounding errors, and the pain is simply delayed and transferred to you. Two humans plus ten agents produce 'enterprise-grade complexity' — gratuitous abstraction, duplication, backwards-compatibility cruft, defense-in-depth — within two weeks. A review agent doesn't save you (the 'ouroboros' catches some issues but not most), because the models learned their notion of complexity from the internet, and roughly 90% of code on the internet is mediocre garbage.

The sharpest formulation is about specs: 'You know what we call a sufficiently detailed spec? It's a program.' This means the spec-driven workflow has no free lunch — any blank you leave in the spec is filled by the model, and it fills it with priors learned from that same garbage corpus. The agent's every decision is local, especially when the codebase no longer fits in context, so it 'patches locally and breaks globally.' Long context windows are a hack and agentic search also fails at scale.

The actionable consequence is a trust collapse: once you stop reading the code, you can't fix the inevitable breakage yourself, your agents are too context-starved on a humongous codebase to fix it either, and you can't even trust your tests because the agent wrote them. The defense is to keep humans as the bottleneck on critical code rather than removing the bottleneck and celebrating the throughput.
