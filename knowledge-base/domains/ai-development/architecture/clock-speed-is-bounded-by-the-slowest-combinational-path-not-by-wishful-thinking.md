---
id: INS-260409-E366
domain: ai-development
topic: architecture
title: >-
  Clock speed is bounded by the slowest combinational path, not by wishful
  thinking
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - clock
  - performance
  - propagation-delay
  - physics
  - critical-path
sources:
  - type: youtube
    title: >-
      But How Does a Computer Actually Work? (from scratch, no prior knowledge
      needed)
    author: Milen Patel
    url: 'https://youtu.be/rl0jkP9kOMw'
date_extracted: '2026-04-09'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    The clock cannot tick faster than the slowest signal path settles —
    performance is gated by physics, not by design ambition.
  standard: >-
    Naive intuition says 'to go faster, speed up the clock.' The video punctures
    this: each logic gate has a tiny propagation delay, and if your ALU has 50
    gates on its slowest route, the clock period must be at least 50 gate-delays
    long or the output will not have stabilized when it's latched. This is why
    modern CPUs don't just run at 100 GHz — the physics of electrons moving
    through silicon sets a floor. The engineering response is to shorten
    critical paths, parallelize (more transistors, same clock), and pipeline
    (decompose a single instruction into stages that overlap). Any performance
    conversation that ignores the critical path is missing the actual
    constraint.
stance: >-
  You cannot make a computer arbitrarily fast by just cranking the clock — the
  clock period must be longer than the worst-case propagation delay through any
  combinational path (like the ALU), because signals take real time to move
  through gates, which is why 'just run the clock faster' has physical limits
  and why pipelining and shorter critical paths matter more than raw frequency.
related:
  - INS-260325-8E0D
  - INS-260330-DBA4
  - INS-260330-6A9E
  - INS-260403-8114
  - INS-260403-4502
  - INS-260413-A950
  - INS-260405-5649
  - INS-260325-2B76
  - INS-260409-7055
  - INS-260409-34EA
---
Naive intuition says 'to go faster, speed up the clock.' The video punctures this: each logic gate has a tiny propagation delay, and if your ALU has 50 gates on its slowest route, the clock period must be at least 50 gate-delays long or the output will not have stabilized when it's latched. This is why modern CPUs don't just run at 100 GHz — the physics of electrons moving through silicon sets a floor. The engineering response is to shorten critical paths, parallelize (more transistors, same clock), and pipeline (decompose a single instruction into stages that overlap). Any performance conversation that ignores the critical path is missing the actual constraint.
