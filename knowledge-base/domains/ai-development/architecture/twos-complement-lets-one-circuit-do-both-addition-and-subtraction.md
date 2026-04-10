---
id: INS-260409-AB32
domain: ai-development
topic: architecture
title: Two's complement lets one circuit do both addition and subtraction
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - representation
  - design
  - hardware
  - twos-complement
  - leverage
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
    Two's complement turns subtraction into addition-of-a-negative, collapsing
    two circuits into one and revealing that smart representations beat smart
    algorithms.
  standard: >-
    Before the video shows the trick, the listener expects that a computer needs
    a subtraction circuit. After, they see that choosing two's complement as the
    integer representation means subtraction is just addition with every bit of
    the subtrahend inverted and a one added — which means the same 8-bit adder
    handles both, with a single control line flipping between modes. This is a
    profound pattern: in any system, the right representation can turn a hard
    operation into a cheap one. Before building a new mechanism, ask whether a
    change of representation eliminates the need for it. Software engineers
    rediscover this every generation — pick the data structure, and the code
    writes itself.
stance: >-
  A well-chosen representation can eliminate entire categories of hardware —
  two's complement means you never need a subtractor, because negation plus
  addition is subtraction, so the same adder circuit handles both operations
  with only an inverter and a carry-in flag.
related:
  - PRI-260406-FA5B
  - PRI-260406-6CA8
  - INS-260321-53E2
  - INS-260329-21C0
  - INS-260410-AA40
---
Before the video shows the trick, the listener expects that a computer needs a subtraction circuit. After, they see that choosing two's complement as the integer representation means subtraction is just addition with every bit of the subtrahend inverted and a one added — which means the same 8-bit adder handles both, with a single control line flipping between modes. This is a profound pattern: in any system, the right representation can turn a hard operation into a cheap one. Before building a new mechanism, ask whether a change of representation eliminates the need for it. Software engineers rediscover this every generation — pick the data structure, and the code writes itself.
