---
id: INS-260409-5C28
domain: psychology
topic: physics-intuition
title: 'Binary is forced by physics, not chosen for elegance'
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - physics
  - binary
  - engineering-tradeoffs
  - constraints
  - encoding
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
    Binary exists because noisy electricity cannot reliably represent ten
    distinct voltage levels — it is a noise-tolerance hack, not a mathematical
    preference.
  standard: >-
    A naive listener might wonder why computers don't just use ten voltage
    levels to encode decimal directly. The answer is that electricity 'flickers'
    and is inconsistent, so reliably distinguishing ten levels on a wire is an
    engineering nightmare, while distinguishing two (above threshold vs below)
    is trivial and robust. This is a general principle: many of the design
    choices that seem like pure abstractions in computing are actually
    downstream of analog physical constraints. The digital stack sits on top of
    carefully-shaped analog behavior, and forgetting that leads people to reify
    binary as a mathematical truth rather than a noise-tolerance compromise.
    Whenever you see a 'clean' abstraction in a real system, ask what messy
    reality it is hiding.
stance: >-
  Computers use binary not because base-2 is mathematically special but because
  electricity is noisy and flickers, so the only reliable way to distinguish
  states on a wire is a threshold — anything above it is a one, anything below
  is a zero, which makes all other design choices downstream of an engineering
  tolerance for noise.
related:
  - INS-260321-B014
  - INS-260330-798D
  - INS-260405-00DE
  - INS-260403-708E
  - INS-260409-E080
  - PRI-260406-CC90
  - PRI-260406-F95C
  - INS-260329-4109
  - INS-260330-3879
  - INS-260409-4290
---
A naive listener might wonder why computers don't just use ten voltage levels to encode decimal directly. The answer is that electricity 'flickers' and is inconsistent, so reliably distinguishing ten levels on a wire is an engineering nightmare, while distinguishing two (above threshold vs below) is trivial and robust. This is a general principle: many of the design choices that seem like pure abstractions in computing are actually downstream of analog physical constraints. The digital stack sits on top of carefully-shaped analog behavior, and forgetting that leads people to reify binary as a mathematical truth rather than a noise-tolerance compromise. Whenever you see a 'clean' abstraction in a real system, ask what messy reality it is hiding.
