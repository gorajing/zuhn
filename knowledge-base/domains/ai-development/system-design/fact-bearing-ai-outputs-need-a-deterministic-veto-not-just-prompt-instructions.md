---
id: INS-260626-FDFC
domain: ai-development
topic: system-design
title: >-
  Fact-bearing AI outputs need a deterministic veto, not just prompt
  instructions
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - guardrails
  - verification
  - hallucination
  - deterministic-checks
  - systems-engineering
sources:
  - type: youtube
    title: >-
      Stop Writing Tone Instructions. Layer Them. - Isadora Martin-Dye, Isadora
      & Co
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=ij-AU9dpJjc'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    The first three layers are probabilistic instructions ('asking nicely and
    hoping'); add a fourth deterministic layer that reads actual output and
    rejects facts that aren't real.
  standard: >-
    The core distinction of the talk: the first three layers are all
    instructions — requests to a system that usually follows them. 'Usually' is
    fine when being wrong costs a slightly off-brand sentence, but not when the
    model confidently invents a date, price, policy, or promise a real person
    will act on. The example: the agent warmly offered a Saturday in October
    that was already booked, because it was never given the calendar but reached
    for an encouraging, specific, confident answer. Every instruction layer did
    its job; the warm confident voice offering something unreal was itself the
    problem, because the couple now believes they have a date. The veto (Layer
    4) is the only non-prompt layer and the cheapest to build: it reads what was
    actually written and checks specifics against an allow-list — a date not in
    the allow-list doesn't ship. Prevention is the prompt; the veto is the
    check; you need both because the prompt will eventually lose, and you don't
    want to learn it lost by reading the customer's reply. Everything before
    Layer 4 is prompt engineering (asking and hoping); Layer 4 is systems
    engineering (checking and being sure).
stance: >-
  Prompt instructions are probabilistic requests the model usually follows, so
  any output a real person will act on must pass a deterministic post-generation
  check against ground truth.
related:
  - INS-260330-3ADD
  - INS-260326-E7BE
  - INS-260404-8A8A
  - INS-260330-6C09
  - INS-260625-9C3B
  - PRI-260412-0C19
---
The core distinction of the talk: the first three layers are all instructions — requests to a system that usually follows them. 'Usually' is fine when being wrong costs a slightly off-brand sentence, but not when the model confidently invents a date, price, policy, or promise a real person will act on. The example: the agent warmly offered a Saturday in October that was already booked, because it was never given the calendar but reached for an encouraging, specific, confident answer. Every instruction layer did its job; the warm confident voice offering something unreal was itself the problem, because the couple now believes they have a date. The veto (Layer 4) is the only non-prompt layer and the cheapest to build: it reads what was actually written and checks specifics against an allow-list — a date not in the allow-list doesn't ship. Prevention is the prompt; the veto is the check; you need both because the prompt will eventually lose, and you don't want to learn it lost by reading the customer's reply. Everything before Layer 4 is prompt engineering (asking and hoping); Layer 4 is systems engineering (checking and being sure).
