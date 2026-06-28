---
id: INS-260628-6714
domain: automation
topic: robotics
title: Logging I/O must never run on the real-time control loop
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - robotics
  - real-time
  - logging
  - observability
  - io
sources:
  - type: youtube
    title: "Rishabh Garg, Tesla Optimus —\_Challenges in High Performance Robotics Systems"
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=bCGbuyv8PMk'
date_extracted: '2026-06-28'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    A log flush to disk froze the robot for 30 ms on a Raspberry Pi SD card, and
    log-on-drop can cascade into a total bus blackout — isolate logging onto its
    own CPU.
  standard: >-
    Logging feels free — you just record the inputs and outputs — but at some
    point the buffer flushes to disk, and that flush is expensive. The speaker
    measured a 30 ms freeze on a Raspberry Pi writing to an SD card; for a robot
    running a 2 ms loop, that is a catastrophic miss. The fix is structural, not
    clever: dedicate a separate CPU to logging so the control loop never blocks
    on storage I/O.


    A nastier variant appears on microcontrollers, where logging goes out a slow
    peripheral (e.g., UART) on the order of a millisecond per log. If you log
    every dropped packet, the log statement itself takes long enough to cause
    the next drop, which triggers another log, which causes another drop — a
    self-reinforcing blackout where you see endless 'packet dropped' messages
    and no actual data, and can't tell why.


    The general principle for any latency-sensitive system: observability must
    be asynchronous to the hot path. The act of measuring or recording cannot be
    allowed to perturb the thing being measured. This is why the failure is so
    insidious — logging is exactly the tool you reach for to debug, and it can
    be the cause.
stance: >-
  Innocuous-looking logging will violate real-time deadlines unless its I/O is
  offloaded off the control loop onto a separate CPU or thread.
related:
  - INS-260514-5001
  - INS-260627-BEEB
  - INS-260605-ACC9
  - INS-260321-D370
  - INS-260625-6127
  - INS-260605-7E75
---
Logging feels free — you just record the inputs and outputs — but at some point the buffer flushes to disk, and that flush is expensive. The speaker measured a 30 ms freeze on a Raspberry Pi writing to an SD card; for a robot running a 2 ms loop, that is a catastrophic miss. The fix is structural, not clever: dedicate a separate CPU to logging so the control loop never blocks on storage I/O.

A nastier variant appears on microcontrollers, where logging goes out a slow peripheral (e.g., UART) on the order of a millisecond per log. If you log every dropped packet, the log statement itself takes long enough to cause the next drop, which triggers another log, which causes another drop — a self-reinforcing blackout where you see endless 'packet dropped' messages and no actual data, and can't tell why.

The general principle for any latency-sensitive system: observability must be asynchronous to the hot path. The act of measuring or recording cannot be allowed to perturb the thing being measured. This is why the failure is so insidious — logging is exactly the tool you reach for to debug, and it can be the cause.
