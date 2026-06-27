---
id: INS-260627-59CB
domain: ai-development
topic: agent-patterns
title: 'Measure agent autonomy by reducible runtime, not total runtime'
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - autonomy
  - agent-design
  - metrics
  - scoping
  - vanity-metrics
sources:
  - type: youtube
    title: 'The 3 Pillars of Autonomy – Michele Catasta, Replit'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=MLhAA9yguwM'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Optimize for 'reducible runtime' — the time a user makes zero technical
    decisions — rather than treating long runtime as a badge of honor.
  standard: >-
    Catasta argues the field conflates autonomy with long, hands-off run times
    and has turned 'runs for hours' into a vanity metric. The real target is the
    agent's 'reducible runtime': the contiguous span during which the user makes
    no technical decisions and the agent owns planning, implementation, and
    testing. Crucially, runtime is a function of task scope, not autonomy — a
    fully autonomous agent given a narrow scope can still be fast, while a broad
    scope produces long gaps between interactions. 


    The practical reframe is that builders should decouple two things they
    usually bundle: how much technical decision-making is offloaded (autonomy)
    and how long the agent runs (a consequence of scope). Designing for
    reducible runtime keeps users in control of what they're building (the
    'what') while the agent absorbs the 'how', preserving creative flow instead
    of forcing the user to babysit technical choices. This matters most for
    non-technical users who cannot make — or even evaluate — the technical
    decisions a long-running agent encounters.
stance: >-
  Agent autonomy should be measured by the span of decision-free work the agent
  does, not by how many hours it runs.
related:
  - INS-260424-4111
  - INS-260329-EA2B
  - INS-260626-FC7A
  - INS-260405-5E18
  - INS-260627-E257
---
Catasta argues the field conflates autonomy with long, hands-off run times and has turned 'runs for hours' into a vanity metric. The real target is the agent's 'reducible runtime': the contiguous span during which the user makes no technical decisions and the agent owns planning, implementation, and testing. Crucially, runtime is a function of task scope, not autonomy — a fully autonomous agent given a narrow scope can still be fast, while a broad scope produces long gaps between interactions. 

The practical reframe is that builders should decouple two things they usually bundle: how much technical decision-making is offloaded (autonomy) and how long the agent runs (a consequence of scope). Designing for reducible runtime keeps users in control of what they're building (the 'what') while the agent absorbs the 'how', preserving creative flow instead of forcing the user to babysit technical choices. This matters most for non-technical users who cannot make — or even evaluate — the technical decisions a long-running agent encounters.
