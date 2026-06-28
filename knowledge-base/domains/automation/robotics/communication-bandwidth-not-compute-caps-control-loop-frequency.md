---
id: INS-260628-265C
domain: automation
topic: robotics
title: 'Communication bandwidth, not compute, caps control-loop frequency'
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - robotics
  - real-time
  - can-bus
  - bandwidth
  - control-loops
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
    Bus transmission time is on the same order as compute time, so even a
    handful of messages can saturate the bus and dominate loop period.
  standard: >-
    The talk makes the bottleneck concrete: 10 messages of ~100 bits each on a 1
    Mbit/s CAN bus is ~0.1 ms per message, or ~1 ms for the full round of
    transmit-and-receive. With a 2 ms target loop and a 2 ms policy budget, that
    1 ms of pure transmission time is the same order of magnitude as the entire
    compute budget — and it shows up as a visible gap on every loop.


    The lesson is to budget bandwidth as a first-class resource alongside
    compute. You cannot out-optimize the policy to recover loop time that is
    being consumed by the wire; the data still has to physically traverse the
    bus at its fixed data rate. Counting messages × bits ÷ bus rate gives you
    the floor on achievable loop period before any compute happens.


    This reframes a class of 'why is my robot slow / laggy' questions away from
    the model and toward the physical link. The honest first solution the
    speaker offers is simply to accept the delay; the interesting one
    (pipelining) only buys headroom because it hides the transmission behind
    compute, not because it makes the bus faster.
stance: >-
  In real-time robotics, the communication bus — not policy compute time — is
  frequently the binding constraint on how fast the control loop can run.
related:
  - INS-260409-B80C
  - INS-260412-4773
  - INS-260514-4BD5
  - PRI-260406-2D38
  - INS-260628-DCE4
  - INS-260325-E7D4
---
The talk makes the bottleneck concrete: 10 messages of ~100 bits each on a 1 Mbit/s CAN bus is ~0.1 ms per message, or ~1 ms for the full round of transmit-and-receive. With a 2 ms target loop and a 2 ms policy budget, that 1 ms of pure transmission time is the same order of magnitude as the entire compute budget — and it shows up as a visible gap on every loop.

The lesson is to budget bandwidth as a first-class resource alongside compute. You cannot out-optimize the policy to recover loop time that is being consumed by the wire; the data still has to physically traverse the bus at its fixed data rate. Counting messages × bits ÷ bus rate gives you the floor on achievable loop period before any compute happens.

This reframes a class of 'why is my robot slow / laggy' questions away from the model and toward the physical link. The honest first solution the speaker offers is simply to accept the delay; the interesting one (pipelining) only buys headroom because it hides the transmission behind compute, not because it makes the bus faster.
