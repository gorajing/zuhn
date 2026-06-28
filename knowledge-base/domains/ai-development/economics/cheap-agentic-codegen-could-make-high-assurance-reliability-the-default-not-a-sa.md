---
id: INS-260627-AC65
domain: ai-development
topic: economics
title: >-
  Cheap agentic codegen could make high-assurance reliability the default, not a
  safety-critical luxury
actionability: inspiration
confidence: medium
shelf_life: evergreen
status: active
tags:
  - formal-methods
  - high-assurance-software
  - agentic-coding
  - cost-economics
  - software-reliability
sources:
  - type: youtube
    title: 'Vision: Zero Bugs — Johann Schleier-Smith, Temporal'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=qLqttdO33UM'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    High-assurance code costs ~100x typical software, but agentic generation is
    ~1,000-10,000x cheaper per line, so agents could produce
    formally-verified-grade reliability ~100x cheaper than typical software is
    built today.
  standard: >-
    Software reliability is a solved problem in aerospace (the Airbus A320, the
    space shuttle's ~1 bug per 420,000-line version, the Curiosity rover) — it
    has just been too expensive for general use. High-assurance code has run
    $1,000-$3,000 per line, versus $10-$100 for typical production software:
    roughly a 100x premium that confined formal methods and rigorous process to
    domains where failure kills people.


    The arbitrage is that agentic code generation costs a factor of at least
    1,000 (probably ~10,000) less than typical hand-written software per line,
    setting aside human time. Extrapolating, agents geared toward high assurance
    — using formal methods, extensive process, or adversarial testing — could
    produce that grade of code roughly 100x more cheaply than typical software
    is produced today. The cost objection to verification collapses.


    The payoff loop is self-reinforcing: the main reason developers reject
    agentic tools is that fixing the bugs takes longer than writing it right by
    hand. The moment agents routinely ship fewer defects than humans, adoption
    takes off. Treat reliability techniques not as overhead but as the lever
    that makes agentic coding trustworthy enough to win.
stance: >-
  Agentic coding will make formal-methods-grade software reliability
  economically default rather than a luxury reserved for aerospace and medical
  systems.
related:
  - INS-260403-83C7
  - INS-260514-9145
  - INS-260627-D043
  - PRI-260406-3EF8
  - INS-260330-D5CD
  - INS-260627-9F46
  - INS-260625-2D05
---
Software reliability is a solved problem in aerospace (the Airbus A320, the space shuttle's ~1 bug per 420,000-line version, the Curiosity rover) — it has just been too expensive for general use. High-assurance code has run $1,000-$3,000 per line, versus $10-$100 for typical production software: roughly a 100x premium that confined formal methods and rigorous process to domains where failure kills people.

The arbitrage is that agentic code generation costs a factor of at least 1,000 (probably ~10,000) less than typical hand-written software per line, setting aside human time. Extrapolating, agents geared toward high assurance — using formal methods, extensive process, or adversarial testing — could produce that grade of code roughly 100x more cheaply than typical software is produced today. The cost objection to verification collapses.

The payoff loop is self-reinforcing: the main reason developers reject agentic tools is that fixing the bugs takes longer than writing it right by hand. The moment agents routinely ship fewer defects than humans, adoption takes off. Treat reliability techniques not as overhead but as the lever that makes agentic coding trustworthy enough to win.
