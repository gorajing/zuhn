---
id: INS-260409-B80C
domain: ai-development
topic: system-building
title: 'The bus pattern: shared infrastructure beats point-to-point wiring at scale'
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - bus
  - architecture
  - coupling
  - scaling
  - design-patterns
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
    A shared bus with arbitration is how you escape N-squared point-to-point
    wiring — the same idea powers hardware buses, message queues, and event
    buses.
  standard: >-
    When the video introduces the bus, the presenter frames it explicitly as
    'the power of the bus — we can just decide to connect things, versus having
    to connect everything to everything else.' This isn't just a hardware trick.
    Point-to-point wiring scales as O(N^2) in connections, and it becomes
    intractable with more than a handful of components. A shared bus with
    arbitration control (only one component writes at a time, many can read)
    reduces this to O(N). The same pattern recurs all the way up the stack:
    message brokers, event buses, pub-sub, Redux stores, the DOM event model.
    Every time you're tempted to wire a new component directly to every existing
    component, ask whether a shared channel with arbitration would scale better.
    Usually the answer is yes.
stance: >-
  Connecting every component to every other component scales as N-squared wires
  and becomes unmanageable — using a single shared bus that all components read
  from and write to (with control lines deciding who talks when) reduces wiring
  to linear and is the same architectural insight that reappears as message
  buses, event streams, and shared state stores in software.
related:
  - INS-260421-7ADE
  - INS-260410-9246
  - INS-260327-C294
  - INS-260330-3D0D
  - INS-260329-CD02
---
When the video introduces the bus, the presenter frames it explicitly as 'the power of the bus — we can just decide to connect things, versus having to connect everything to everything else.' This isn't just a hardware trick. Point-to-point wiring scales as O(N^2) in connections, and it becomes intractable with more than a handful of components. A shared bus with arbitration control (only one component writes at a time, many can read) reduces this to O(N). The same pattern recurs all the way up the stack: message brokers, event buses, pub-sub, Redux stores, the DOM event model. Every time you're tempted to wire a new component directly to every existing component, ask whether a shared channel with arbitration would scale better. Usually the answer is yes.
