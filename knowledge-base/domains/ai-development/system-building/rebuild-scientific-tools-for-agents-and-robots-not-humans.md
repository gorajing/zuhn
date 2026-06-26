---
id: INS-260626-3C9A
domain: ai-development
topic: system-building
title: 'Rebuild scientific tools for agents and robots, not humans'
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - agent-interfaces
  - tooling
  - mcp
  - api-design
  - autonomy
sources:
  - type: youtube
    title: "\U0001F52C The Limits of AI in Science - Why We Need Self-Driving Labs — Joseph Krause, Radical AI"
    author: Latent Space
    url: 'https://www.youtube.com/watch?v=4-sWFytOfRw'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Krause's non-fundamental wish: tool vendors should restart their stack and
    build instruments for agents and robots, the way software moved to CLIs and
    MCP, so you train people to run the system rather than the instrument.
  standard: >-
    Asked what non-fundamental bottleneck he'd remove, Krause says he'd have
    tool providers restart their stack: instruments today are built for human
    operators, and they should be built for agents and robots instead. He
    explicitly draws the analogy to software, where the move to CLIs and MCP
    made tools agent-operable, and the interviewer confirms 'you're seeing this
    already happen.' Two years ago, major instrument vendors wouldn't even sell
    API access to their raw data, because their business model was selling the
    analysis software; that tone is now shifting as they add software teams and
    interface support.


    The leverage is a change in what you train people to do: instead of training
    a PhD to run an XRD or SEM, you train someone to run the system that
    operates the instrument and does the analysis, which scales far better. This
    is a general principle for any domain pursuing autonomy: the rate limiter is
    often not intelligence but machine-accessible interfaces to the physical or
    legacy tools the workflow depends on. Builders should treat 'is this tool
    agent-operable?' as a first-class infrastructure question, push vendors for
    API/SDK access, and where necessary build custom control layers (Radical
    reverse-engineered tool software and built custom actuators and grippers).
    Re-architecting the interface layer, not just bolting a robotic arm onto a
    human tool, is what actually unlocks autonomous operation.
stance: >-
  Lab instruments and tools should be re-architected with machine-first
  interfaces (APIs over human GUIs) to unlock autonomous science, mirroring the
  CLI/MCP shift in software.
related:
  - INS-260605-52E4
  - INS-260524-2C7C
  - INS-260327-9C56
  - INS-260323-05B5
  - INS-260327-3A71
  - PRI-260320-BC72
---
Asked what non-fundamental bottleneck he'd remove, Krause says he'd have tool providers restart their stack: instruments today are built for human operators, and they should be built for agents and robots instead. He explicitly draws the analogy to software, where the move to CLIs and MCP made tools agent-operable, and the interviewer confirms 'you're seeing this already happen.' Two years ago, major instrument vendors wouldn't even sell API access to their raw data, because their business model was selling the analysis software; that tone is now shifting as they add software teams and interface support.

The leverage is a change in what you train people to do: instead of training a PhD to run an XRD or SEM, you train someone to run the system that operates the instrument and does the analysis, which scales far better. This is a general principle for any domain pursuing autonomy: the rate limiter is often not intelligence but machine-accessible interfaces to the physical or legacy tools the workflow depends on. Builders should treat 'is this tool agent-operable?' as a first-class infrastructure question, push vendors for API/SDK access, and where necessary build custom control layers (Radical reverse-engineered tool software and built custom actuators and grippers). Re-architecting the interface layer, not just bolting a robotic arm onto a human tool, is what actually unlocks autonomous operation.
